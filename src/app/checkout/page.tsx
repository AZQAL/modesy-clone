"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CheckCircle2, ChevronRight, LoaderCircle, Store, Plus, Pencil, Trash2
} from "lucide-react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import type { Product } from "@/features/products/data/products";
import { getCart } from "@/features/products/lib/cart-actions";

type Address = {
  id: string;
  label: string;
  recipient_name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
};

const formatPrice = (price: number) => 
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(price);

export default function CheckoutShippingPage() {
  const router = useRouter();
  const supabase = createClient();

  const [cart, setCart] = useState<Product[]>([]);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState<string>("");
  
  const [shippingMethod, setShippingMethod] = useState("local_pickup");
  const [shippingCost, setShippingCost] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const cartData = await getCart();
      setCart(cartData);

      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: addrData } = await supabase
          .from("shipping_addresses")
          .select("*")
          .eq("user_id", user.id);
        
        if (addrData && addrData.length > 0) {
          setAddresses(addrData);
          setSelectedAddressId(addrData[0].id);
        }
      }
      setLoading(false);
    }
    load();
  }, [supabase]);

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const taxAmount = (subtotal * 0.10) + (subtotal * 0.05);
  const total = subtotal + shippingCost + taxAmount;

  function handleContinue() {
    if (!selectedAddressId) {
      alert("Silakan tambahkan dan pilih alamat pengiriman.");
      return;
    }
    sessionStorage.setItem("checkout_address_id", selectedAddressId);
    sessionStorage.setItem("checkout_shipping_method", shippingMethod);
    sessionStorage.setItem("checkout_shipping_cost", shippingCost.toString());
    
    // Arahkan ke halaman 2
    router.push("/checkout/payment-method");
  }

  if (loading) return <main className="flex min-h-[60vh] items-center justify-center bg-white"><LoaderCircle className="animate-spin text-teal-600" size={32} /></main>;

  return (
    <main className="min-h-screen bg-white text-gray-800 pb-20">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-2xl font-semibold text-gray-900">Checkout</h1>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_380px]">
          
          {/* KOLOM KIRI */}
          <div className="space-y-10">
            
            {/* 1. SHIPPING INFORMATION */}
            <section>
              <div className="mb-6 flex flex-col justify-between border-b pb-4 sm:flex-row sm:items-center">
                <h2 className="text-lg font-semibold text-gray-900">1. Shipping Information</h2>
                <Link href="/settings/shipping-address" className="flex items-center gap-1 text-sm font-medium text-[#00a99d] hover:text-[#008f85]">
                  <Plus size={16} /> Add New Address
                </Link>
              </div>

              <h3 className="mb-3 text-sm font-semibold text-gray-900">Shipping Address</h3>
              {addresses.length === 0 ? (
                <div className="border border-dashed p-6 text-center text-sm text-gray-500">
                  Belum ada alamat. Silakan <Link href="/settings/shipping-address" className="text-[#00a99d] underline">tambah alamat baru</Link>.
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                  {addresses.map((addr) => (
                    <div
                      key={addr.id}
                      onClick={() => setSelectedAddressId(addr.id)}
                      className={`relative cursor-pointer border p-5 transition-colors flex justify-between items-start ${selectedAddressId === addr.id ? "border-[#00a99d]" : "border-gray-200 hover:border-teal-300"}`}
                    >
                      <div className="flex items-start gap-3">
                        {selectedAddressId === addr.id ? (
                          <CheckCircle2 size={22} className="text-[#00a99d] shrink-0 mt-0.5" fill="#00a99d" stroke="white" />
                        ) : (
                          <div className="h-5 w-5 rounded-full border border-gray-300 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{addr.label}</p>
                          <p className="mt-1 text-sm text-gray-500">{addr.address} {addr.zip_code} {addr.city}/{addr.state}/{addr.country}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-400">
                        <Link href="/settings/shipping-address" className="hover:text-teal-600"><Pencil size={18} /></Link>
                        <button type="button" className="hover:text-red-500"><Trash2 size={18} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-5 flex items-center gap-2">
                <input type="checkbox" id="sameAddress" defaultChecked className="h-4 w-4 accent-[#00a99d]" />
                <label htmlFor="sameAddress" className="text-sm text-gray-700">Use same address for billing address</label>
              </div>

              <h3 className="mb-3 mt-8 text-sm font-semibold text-gray-900">Shipping Method</h3>
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-800">
                <Store size={18} className="text-gray-500" /> Trendshop
              </div>
              
              <div className="space-y-3">
                <label className={`flex cursor-pointer items-center justify-between border p-4 ${shippingMethod === "local_pickup" ? "border-[#00a99d]" : "border-gray-200"}`}>
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${shippingMethod === "local_pickup" ? "border-[#00a99d]" : "border-gray-300"}`}>
                      {shippingMethod === "local_pickup" && <div className="h-2 w-2 rounded-full bg-[#00a99d]" />}
                    </div>
                    <input type="radio" name="shipping" value="local_pickup" checked={shippingMethod === "local_pickup"} onChange={() => { setShippingMethod("local_pickup"); setShippingCost(0); }} className="hidden" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Local Pickup</p>
                      <p className="text-xs text-gray-500 mt-0.5">Pick up your order directly from the store</p>
                    </div>
                  </div>
                  <span className="font-semibold text-sm text-gray-900">$0</span>
                </label>

                <label className={`flex cursor-pointer items-center justify-between border p-4 ${shippingMethod === "flat_rate" ? "border-[#00a99d]" : "border-gray-200"}`}>
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${shippingMethod === "flat_rate" ? "border-[#00a99d]" : "border-gray-300"}`}>
                      {shippingMethod === "flat_rate" && <div className="h-2 w-2 rounded-full bg-[#00a99d]" />}
                    </div>
                    <input type="radio" name="shipping" value="flat_rate" checked={shippingMethod === "flat_rate"} onChange={() => { setShippingMethod("flat_rate"); setShippingCost(4); }} className="hidden" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Flat Rate</p>
                      <p className="text-xs text-gray-500 mt-0.5">Standard shipping</p>
                    </div>
                  </div>
                  <span className="font-semibold text-sm text-gray-900">$4</span>
                </label>
              </div>

              {/* TOMBOL CONTINUE TO PAYMENT METHOD */}
              <div className="mt-10 flex flex-col items-center gap-4">
                <button 
                  type="button" 
                  onClick={handleContinue}
                  className="inline-flex items-center gap-2 bg-[#00a99d] px-8 py-3 text-sm font-medium text-white hover:bg-[#008f85] transition-colors"
                >
                  Continue to Payment Method <ChevronRight size={16} />
                </button>
                <Link href="/cart" className="text-sm text-gray-500 hover:text-gray-800 underline">&lt; Return to cart</Link>
              </div>
            </section>

            {/* 2. PAYMENT METHOD (PUDAR) */}
            <section className="border-t pt-8">
              <h2 className="text-lg font-semibold text-gray-900">2. Payment Method</h2>
            </section>

            {/* 3. PAYMENT (PUDAR) */}
            <section className="border-t pt-8">
              <h2 className="text-lg font-semibold text-gray-900">3. Payment</h2>
            </section>

          </div>

          {/* KOLOM KANAN (ORDER SUMMARY) */}
          <aside className="bg-[#fafafa] p-6 border border-gray-100 sticky top-6">
            <h2 className="border-b border-gray-200 pb-4 text-lg font-semibold text-gray-900">
              Order Summary ({cart.length})
            </h2>
            
            <div className="space-y-6 py-5">
              {cart.map((product) => (
                <div key={product.id} className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div className="relative h-20 w-20 shrink-0 bg-white border border-gray-200 p-1">
                      <Image src={product.image_url || "/images/products/placeholder.jpg"} alt={product.name} fill className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-gray-900 line-clamp-2">{product.name}</p>
                      <p className="text-xs text-gray-500 mt-1">Size: S</p>
                      <p className="text-xs text-[#00a99d] mt-0.5">Seller: {product.seller_name}</p>
                      
                      <div className="mt-3 flex flex-col gap-1 text-xs text-gray-600">
                        <div className="flex justify-between">
                          <span>Quantity:</span> <strong className="text-gray-900">1</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>Price:</span> <strong className="text-gray-900">{formatPrice(product.price)}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>VAT (10%):</span> <strong className="text-gray-900">{formatPrice(product.price * 0.1)}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-gray-200 pt-5 text-sm text-gray-700">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">Subtotal</span>
                <span className="font-semibold text-gray-900">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">VAT</span>
                <span className="font-semibold text-gray-900">{formatPrice(subtotal * 0.10)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">Sale Tax (5%)</span>
                <span className="font-semibold text-gray-900">{formatPrice(subtotal * 0.05)}</span>
              </div>
              {shippingCost > 0 && (
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Shipping</span>
                  <span className="font-semibold text-gray-900">{formatPrice(shippingCost)}</span>
                </div>
              )}
              
              <div className="flex items-center justify-between border-t border-gray-300 pt-4 mt-2">
                <span className="font-bold text-gray-900 text-base">Total</span>
                <span className="text-base font-bold text-gray-900">{formatPrice(total)}</span>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
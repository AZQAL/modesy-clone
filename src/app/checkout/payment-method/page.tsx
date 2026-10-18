"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoaderCircle, Check } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/features/products/data/products";
import { getCart } from "@/features/products/lib/cart-actions";

const formatPrice = (price: number) => 
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(price);

const paymentMethods = [
  { id: "paypal", name: "PayPal", desc: "" },
  { id: "stripe", name: "Stripe", desc: "" },
  { id: "paystack", name: "Paystack", desc: "" },
  { id: "razorpay", name: "Razorpay", desc: "" },
  { id: "flutterwave", name: "Flutterwave", desc: "" },
  { id: "iyzico", name: "iyzico", desc: "" },
  { id: "midtrans", name: "Midtrans", desc: "" },
  { id: "paytabs", name: "PayTabs", desc: "" },
  { id: "yoomoney", name: "YooMoney", desc: "" },
  { id: "mercadopago", name: "Mercado Pago", desc: "" },
  { id: "bank_transfer", name: "Bank Transfer", desc: "Make your payment directly into our bank account." },
];

export default function CheckoutPaymentMethodPage() {
  const router = useRouter();
  
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [agreeTerms, setAgreeTerms] = useState(false);
  
  // State untuk menyimpan shippingCost agar aman dari error sessionStorage
  const [shippingCost, setShippingCost] = useState(0);

  useEffect(() => {
    async function load() {
      // Pengecekan sessionStorage aman dilakukan di dalam useEffect
      const savedAddress = sessionStorage.getItem("checkout_address_id");
      if (!savedAddress) {
        router.replace("/checkout");
        return;
      }

      // Ambil shippingCost dari sessionStorage
      setShippingCost(Number(sessionStorage.getItem("checkout_shipping_cost") || 0));

      const cartData = await getCart();
      setCart(cartData);
      
      if (cartData.length === 0) {
        router.replace("/cart");
        return;
      }

      setLoading(false);
    }
    load();
  }, [router]);

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const vat = subtotal * 0.10;
  const salesTax = subtotal * 0.05;
  const taxAmount = vat + salesTax;
  // shippingCost sudah diambil dari state
  const total = subtotal + shippingCost + taxAmount;

    function handleContinueToPayment() {
    // Pengecekan agreeTerms dihapus agar tombol langsung jalan
    sessionStorage.setItem("checkout_payment_method", paymentMethod);
    router.push("/checkout/payment");
  }

  if (loading) return <main className="flex min-h-[60vh] items-center justify-center bg-white"><LoaderCircle className="animate-spin text-teal-600" size={32} /></main>;

  return (
    <main className="min-h-screen bg-white text-gray-800 pb-20">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-2xl font-semibold text-gray-900">Checkout</h1>

        {errorMessage && (
          <div className="mb-6 border border-red-200 bg-red-50 p-4 text-sm text-red-600">{errorMessage}</div>
        )}

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_380px]">
          
          <div className="space-y-10">
            
            {/* 1. SHIPPING INFO (COMPLETED) */}
            <section className="bg-[#f9f9f9] p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">1. Shipping Information</h2>
                <Link href="/checkout" className="text-sm text-gray-600 hover:text-gray-900 underline">Edit</Link>
              </div>
            </section>

            {/* 2. PAYMENT METHOD */}
            <section className="pt-2">
              <h2 className="mb-6 text-lg font-semibold text-gray-900">2. Payment Method</h2>
              
              <div className="space-y-2">
                {paymentMethods.map((pm) => {
                  const isSelected = paymentMethod === pm.id;
                  return (
                    <label 
                      key={pm.id} 
                      className={`flex cursor-pointer items-center justify-between rounded border p-4 transition-colors ${isSelected ? "border-[#00a99d]" : "border-gray-200 hover:bg-gray-50"}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${isSelected ? "border-[#00a99d] bg-[#00a99d]" : "border-gray-300"}`}>
                          {isSelected && <Check size={12} className="text-white" strokeWidth={3} />}
                        </div>
                        <input type="radio" name="payment" value={pm.id} checked={isSelected} onChange={() => setPaymentMethod(pm.id)} className="hidden" />
                        
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{pm.name}</p>
                          {pm.desc && <p className="text-xs text-gray-500 mt-0.5">{pm.desc}</p>}
                        </div>
                      </div>
                      
                      {pm.id !== "bank_transfer" && (
                         <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-gray-400">
                           <span>VISA</span>
                           <span className="text-[#00a99d]">{pm.name}</span>
                         </div>
                      )}
                    </label>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="terms" 
                  checked={agreeTerms} 
                  onChange={(e) => setAgreeTerms(e.target.checked)} 
                  className="h-4 w-4 accent-[#00a99d]" 
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I have read and agree to the <Link href="/terms" className="text-gray-900 underline">Terms & Conditions</Link>
                </label>
              </div>

              <div className="mt-8 flex flex-col items-center gap-6">
                <button
                  onClick={handleContinueToPayment}
                  className="flex items-center justify-center gap-2 bg-[#00a99d] px-8 py-3 text-sm font-semibold text-white hover:bg-[#008f85] transition-colors"
                >
                  Continue to Payment &gt;
                </button>
                <Link href="/cart" className="text-sm text-gray-500 underline hover:text-gray-800">&lt; Return to cart</Link>
              </div>
            </section>

            {/* 3. PAYMENT (PUDAR) */}
            <section className="border-t pt-8 opacity-50">
              <h2 className="mb-6 text-lg font-semibold text-gray-900">3. Payment</h2>
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
                <span className="font-semibold text-gray-900">{formatPrice(vat)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">Sale Tax (5%)</span>
                <span className="font-semibold text-gray-900">{formatPrice(salesTax)}</span>
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
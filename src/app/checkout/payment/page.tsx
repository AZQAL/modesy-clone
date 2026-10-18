"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/features/products/data/products";
import { getCart } from "@/features/products/lib/cart-actions";
import { createOrder } from "@/features/orders/actions";

const formatPrice = (price: number) => 
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(price);

export default function CheckoutPaymentConfirmationPage() {
  const router = useRouter();
  
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Data dari halaman sebelumnya
  const [addressId, setAddressId] = useState("");
  const [shippingMethod, setShippingMethod] = useState("");
  const [shippingCost, setShippingCost] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("paypal"); 

  useEffect(() => {
    async function load() {
      const savedAddress = sessionStorage.getItem("checkout_address_id");
      if (!savedAddress) {
        router.replace("/checkout");
        return;
      }

      setAddressId(savedAddress);
      setShippingMethod(sessionStorage.getItem("checkout_shipping_method") || "local_pickup");
      setShippingCost(Number(sessionStorage.getItem("checkout_shipping_cost") || 0));
      
      const savedPayment = sessionStorage.getItem("checkout_payment_method");
      if (savedPayment) setPaymentMethod(savedPayment);

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

  // Perhitungan Biaya
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const vat = subtotal * 0.10;
  const salesTax = subtotal * 0.05;
  const transactionFee = subtotal * 0.03; // Biaya transaksi 3%
  
  const total = subtotal + vat + salesTax + transactionFee + shippingCost;

  async function handlePay(methodName: string) {
    if (cart.length === 0) return;
    setSubmitting(true);
    setErrorMessage("");

    try {
      const orderId = await createOrder({
        addressId,
        shippingMethod,
        shippingCost,
        paymentMethod: methodName, 
        taxAmount: vat + salesTax + transactionFee, 
      }, cart);
      
      sessionStorage.removeItem("checkout_address_id");
      sessionStorage.removeItem("checkout_shipping_method");
      sessionStorage.removeItem("checkout_shipping_cost");
      sessionStorage.removeItem("checkout_payment_method");

      router.push(`/orders/${orderId}`);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Gagal memproses pembayaran.");
      setSubmitting(false);
    }
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
          
          <div className="space-y-6">
            
            {/* 1. SHIPPING INFO (COMPLETED) */}
            <section className="bg-[#f9f9f9] p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">1. Shipping Information</h2>
                <Link href="/checkout" className="text-sm text-gray-600 hover:text-gray-900 underline">Edit</Link>
              </div>
            </section>

            {/* 2. PAYMENT METHOD (COMPLETED) */}
            <section className="bg-[#f9f9f9] p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">2. Payment Method</h2>
                <Link href="/checkout/payment-method" className="text-sm text-gray-600 hover:text-gray-900 underline">Edit</Link>
              </div>
            </section>

            {/* 3. PAYMENT (ACTIVE) */}
            <section className="pt-6">
              <h2 className="mb-8 text-lg font-semibold text-gray-900">3. Payment</h2>
              
              <div className="max-w-md mx-auto text-center">
                <h3 className="mb-6 text-xl font-bold text-gray-900">Confirm and Pay</h3>

                {/* Tombol PayPal */}
                <button
                  onClick={() => handlePay("paypal")}
                  disabled={submitting}
                  className="w-full mb-4 flex h-14 items-center justify-center rounded bg-[#ffc439] transition hover:opacity-90 disabled:opacity-50"
                >
                  {submitting ? (
                    <LoaderCircle size={24} className="animate-spin text-gray-800" />
                  ) : (
                    <>
                      <span className="text-2xl font-bold italic text-[#003087]">Pay</span>
                      <span className="text-2xl font-bold italic text-[#0070ba]">Pal</span>
                    </>
                  )}
                </button>

                {/* Tombol Credit Card */}
                <button
                  onClick={() => handlePay("credit_card")}
                  disabled={submitting}
                  className="w-full flex h-14 items-center justify-center gap-3 rounded bg-[#2c2e2f] text-white transition hover:bg-black disabled:opacity-50"
                >
                  {submitting ? (
                    <LoaderCircle size={20} className="animate-spin" />
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                  )}
                  <span className="text-base font-semibold">Debit or Credit Card</span>
                </button>

                <p className="mt-6 text-xs text-gray-500 flex items-center justify-center gap-1">
                  Powered by <span className="font-bold italic text-[#003087]">Pay</span><span className="font-bold italic text-[#0070ba]">Pal</span>
                </p>
              </div>
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
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">Transaction Fee (3%)</span>
                <span className="font-semibold text-gray-900">{formatPrice(transactionFee)}</span>
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
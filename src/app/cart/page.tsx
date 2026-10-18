"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Trash2, LoaderCircle } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/features/products/data/products";
import { getCart, removeFromCart } from "@/features/products/lib/cart-actions";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(price);
}

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await getCart();
      setCart(data);
      setIsLoaded(true);
    }
    load();
  }, []);

  async function handleRemove(id: string) {
    await removeFromCart(id);
    setCart(prev => prev.filter(item => item.id !== id));
  }

  const subtotal = cart.reduce((total, product) => total + product.price, 0);

  if (!isLoaded) {
    return <main className="flex min-h-[50vh] items-center justify-center bg-white"><LoaderCircle className="animate-spin text-teal-600" size={32} /></main>;
  }

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 border-b border-gray-200 pb-5">
          <h1 className="text-2xl font-semibold text-gray-900">Shopping Cart</h1>
        </div>

        {cart.length === 0 ? (
          <div className="flex min-h-80 flex-col items-center justify-center px-5 text-center">
            <ShoppingBag size={48} strokeWidth={1.3} className="text-gray-300" />
            <h2 className="mt-5 text-xl font-medium text-gray-800">Your cart is empty!</h2>
            <Link href="/products" className="mt-6 inline-flex items-center gap-2 bg-teal-600 px-6 py-3 text-sm font-medium text-white hover:bg-teal-700">
              <ShoppingBag size={16} /> Shop Now
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_350px]">
            <section className="min-w-0">
              <div className="overflow-x-auto border border-gray-200">
                <table className="w-full min-w-125 border-collapse text-left">
                  <thead className="bg-gray-50">
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-4 text-xs font-semibold uppercase text-gray-600">Product</th>
                      <th className="px-4 py-4 text-xs font-semibold uppercase text-gray-600">Price</th>
                      <th className="px-3 py-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product) => (
                      <tr key={product.id} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-5">
                          <div className="flex items-center gap-4">
                            <Link href={`/products/${product.id}`} className="relative h-20 w-20 shrink-0 bg-gray-100">
                              <Image src={product.image_url || "/images/products/placeholder.jpg"} alt={product.name} fill className="object-cover" />
                            </Link>
                            <div className="min-w-0">
                              <Link href={`/products/${product.id}`} className="text-sm font-medium text-gray-900 hover:text-teal-600">{product.name}</Link>
                              <p className="mt-1 text-xs text-gray-500">Sold by {product.seller_name}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-5 text-sm text-gray-700">{formatPrice(product.price)}</td>
                        <td className="px-3 py-5 text-right">
                          <button onClick={() => handleRemove(product.id)} className="inline-flex rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-500">
                            <Trash2 size={17} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <aside className="border border-gray-200 p-5 sm:p-6">
              <h2 className="border-b border-gray-200 pb-4 text-lg font-semibold text-gray-900">Cart Summary</h2>
              <div className="space-y-4 py-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Subtotal ({cart.length} items)</span>
                  <span className="font-medium text-gray-900">{formatPrice(subtotal)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="text-xl font-semibold text-gray-900">{formatPrice(subtotal)}</span>
                </div>
              </div>
              <Link href="/checkout" className="flex w-full items-center justify-center gap-2 bg-teal-600 px-5 py-3.5 text-sm font-semibold text-white hover:bg-teal-700">
                Proceed to Checkout <ArrowRight size={17} />
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
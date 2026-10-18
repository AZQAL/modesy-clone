
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Trash2 } from "lucide-react";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import type { Product } from "@/components/product/ProductCard";
import {
  getCart,
  removeFromCart,
} from "@/features/products/lib/shop-storage";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCart(getCart());
    setIsLoaded(true);
  }, []);

  function handleRemove(id: number) {
    setCart(removeFromCart(id));
  }

  const subtotal = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-white text-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8 border-b border-gray-200 pb-5">
            <h1 className="text-2xl font-semibold text-gray-900">
              Shopping Cart
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Review your items before proceeding to checkout.
            </p>
          </div>

          {!isLoaded ? null : cart.length === 0 ? (
            <div className="flex min-h-80 flex-col items-center justify-center px-5 text-center">
              <ShoppingBag
                size={48}
                strokeWidth={1.3}
                className="text-gray-300"
              />

              <h2 className="mt-5 text-xl font-medium text-gray-800">
                Your cart is empty!
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                You have no items in your shopping cart.
              </p>

              <Link
                href="/products"
                className="mt-6 inline-flex items-center gap-2 bg-teal-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-700"
              >
                <ShoppingBag size={16} />
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_350px]">
              <section className="min-w-0">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">
                    Cart Items
                  </h2>
                  <span className="text-sm text-gray-500">
                    {cart.length} {cart.length === 1 ? "item" : "items"}
                  </span>
                </div>

                <div className="overflow-x-auto border border-gray-200">
                  <table className="w-full min-w-142.5 border-collapse text-left">
                    <thead className="bg-gray-50">
                      <tr className="border-b border-gray-200">
                        <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">
                          Product
                        </th>
                        <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">
                          Price
                        </th>
                        <th className="px-4 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-600">
                          Subtotal
                        </th>
                        <th className="px-3 py-4" />
                      </tr>
                    </thead>

                    <tbody>
                      {cart.map((product) => (
                        <tr
                          key={product.id}
                          className="border-b border-gray-100 last:border-0"
                        >
                          <td className="px-4 py-5">
                            <div className="flex items-center gap-4">
                              <Link
                                href={`/products/${product.id}`}
                                className="h-20 w-20 shrink-0 overflow-hidden bg-gray-100"
                              >
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="h-full w-full object-cover"
                                />
                              </Link>

                              <div className="min-w-0">
                                <Link
                                  href={`/products/${product.id}`}
                                  className="text-sm font-medium text-gray-900 hover:text-teal-600"
                                >
                                  {product.name}
                                </Link>

                                <p className="mt-1 text-xs text-gray-500">
                                  {product.category}
                                </p>

                                <p className="mt-1 text-xs text-gray-500">
                                  Sold by {product.seller}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="px-4 py-5 text-sm text-gray-700">
                            {formatPrice(product.price)}
                          </td>

                          <td className="px-4 py-5 text-right text-sm font-medium text-gray-900">
                            {formatPrice(product.price)}
                          </td>

                          <td className="px-3 py-5 text-right">
                            <button
                              type="button"
                              onClick={() => handleRemove(product.id)}
                              aria-label={`Remove ${product.name} from cart`}
                              className="inline-flex rounded p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
                            >
                              <Trash2 size={17} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Link
                  href="/products"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-teal-600"
                >
                  <ArrowRight size={15} className="rotate-180" />
                  Continue Shopping
                </Link>
              </section>

              <aside className="border border-gray-200 p-5 sm:p-6">
                <h2 className="border-b border-gray-200 pb-4 text-lg font-semibold text-gray-900">
                  Cart Summary
                </h2>

                <div className="space-y-4 py-5">
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-gray-500">
                      Subtotal ({cart.length}{" "}
                      {cart.length === 1 ? "item" : "items"})
                    </span>
                    <span className="font-medium text-gray-900">
                      {formatPrice(subtotal)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-gray-500">Shipping</span>
                    <span className="text-gray-700">Calculated at checkout</span>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-gray-900">
                        Total
                      </span>
                      <span className="text-xl font-semibold text-gray-900">
                        {formatPrice(subtotal)}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      Shipping costs and final order details will be confirmed
                      during checkout.
                    </p>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="flex w-full items-center justify-center gap-2 bg-teal-600 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
                >
                  Proceed to Checkout
                  <ArrowRight size={17} />
                </Link>

                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    Secure checkout
                  </p>
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ProductCard from "@/components/product/ProductCard";
import type { Product } from "@/components/product/ProductCard";

import {
  getWishlist,
  getCart,
  removeFromWishlist,
  toggleCart,
} from "@/features/products/lib/shop-storage";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cartIds, setCartIds] = useState<number[]>([]);

  useEffect(() => {
    setWishlist(getWishlist());
    setCartIds(getCart().map((product) => product.id));
  }, []);

  function handleRemove(id: number) {
    setWishlist(removeFromWishlist(id));
  }

  function handleToggleCart(product: Product) {
    const updatedCart = toggleCart(product);
    setCartIds(updatedCart.map((item) => item.id));
  }

  return (
    <>
      <SiteHeader />

      <main className="min-h-87.5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-2xl font-semibold text-gray-800">
            Wishlist
          </h1>

          {wishlist.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm text-gray-600">
                No products found!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {wishlist.map((product) => (
                <article
                  key={product.id}
                  className="group relative border border-gray-200 bg-white"
                >
                  <Link
                    href={`/products/${product.id}`}
                    className="block aspect-square overflow-hidden bg-gray-50"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleRemove(product.id)}
                    aria-label={`Remove ${product.name} from wishlist`}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-red-500 hover:bg-red-50"
                  >
                    <Heart size={17} fill="currentColor" />
                  </button>

                  <div className="p-4">
                    <Link
                      href={`/products/${product.id}`}
                      className="line-clamp-2 text-sm font-medium text-gray-800 hover:text-red-500"
                    >
                      {product.name}
                    </Link>

                    <p className="mt-2 text-sm font-semibold text-gray-900">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      }).format(product.price)}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Sold by {product.seller}
                    </p>

                    <button
                      type="button"
                      onClick={() => handleToggleCart(product)}
                      className="mt-4 flex w-full items-center justify-center gap-2 border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:border-red-500 hover:bg-red-500 hover:text-white"
                    >
                      <ShoppingCart size={15} />
                      {cartIds.includes(product.id)
                        ? "Remove from Cart"
                        : "Add to Cart"}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleRemove(product.id)}
                      className="mt-2 flex w-full items-center justify-center gap-2 px-3 py-2 text-xs text-gray-500 hover:text-red-500"
                    >
                      <Trash2 size={14} />
                      Remove from Wishlist
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
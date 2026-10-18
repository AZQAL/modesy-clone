"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart, Trash2, LoaderCircle } from "lucide-react";
import type { Product } from "@/features/products/data/products";
import { getWishlist, removeFromWishlist, getCart, toggleCart } from "@/features/products/lib/cart-actions";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cartIds, setCartIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      const wishData = await getWishlist();
      const cartData = await getCart();
      setWishlist(wishData);
      setCartIds(cartData.map(p => p.id));
      setIsLoaded(true);
    }
    load();
  }, []);

  async function handleRemove(id: string) {
    await removeFromWishlist(id);
    setWishlist(prev => prev.filter(item => item.id !== id));
  }

  async function handleToggleCart(product: Product) {
    const newStatus = await toggleCart(product);
    if (newStatus) {
      setCartIds(prev => [...prev, product.id]);
    } else {
      setCartIds(prev => prev.filter(id => id !== product.id));
    }
  }

  if (!isLoaded) {
    return <main className="flex min-h-[50vh] items-center justify-center bg-white"><LoaderCircle className="animate-spin text-teal-600" size={32} /></main>;
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-2xl font-semibold text-gray-800">Wishlist</h1>

        {wishlist.length === 0 ? (
          <div className="py-12 text-center"><p className="text-sm text-gray-600">No products found!</p></div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {wishlist.map((product) => (
              <article key={product.id} className="group relative border border-gray-200 bg-white">
                <Link href={`/products/${product.id}`} className="relative block aspect-square bg-gray-50">
                  <Image src={product.image_url || "/images/products/placeholder.jpg"} alt={product.name} fill className="object-cover" />
                </Link>

                <button onClick={() => handleRemove(product.id)} className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-red-500 hover:bg-red-50">
                  <Heart size={17} fill="currentColor" />
                </button>

                <div className="p-4">
                  <Link href={`/products/${product.id}`} className="line-clamp-2 text-sm font-medium text-gray-800 hover:text-teal-600">{product.name}</Link>
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(product.price)}
                  </p>
                  <button
                    onClick={() => handleToggleCart(product)}
                    className="mt-4 flex w-full items-center justify-center gap-2 border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 hover:border-teal-500 hover:bg-teal-500 hover:text-white"
                  >
                    <ShoppingCart size={15} />
                    {cartIds.includes(product.id) ? "Remove from Cart" : "Add to Cart"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
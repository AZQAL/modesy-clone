"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart, LoaderCircle } from "lucide-react";
import { getProducts, type Product } from "@/features/products/data/products";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getProducts();
      setProducts(data.slice(0, 4)); // Ambil 4 produk teratas
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <div className="py-10 text-center"><LoaderCircle className="mx-auto animate-spin text-teal-600" /></div>;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Featured Products</h2>
        <Link href="/products" className="text-sm text-gray-600 transition-colors hover:text-teal-600">View All</Link>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="group min-w-0">
            <div className="relative overflow-hidden bg-gray-100 aspect-3/4">
              <Link href={`/products/${product.id}`} className="relative block h-full w-full">
                <Image
                  src={product.image_url || "/images/products/placeholder.jpg"}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <button type="button" className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm hover:text-teal-600">
                <Heart size={18} />
              </button>
              <button type="button" className="absolute bottom-3 left-3 right-3 flex translate-y-2 items-center justify-center gap-2 bg-white px-3 py-3 text-sm text-gray-700 opacity-100 transition-all duration-300 hover:bg-teal-500 hover:text-white sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                <ShoppingCart size={16} /> Add to Cart
              </button>
            </div>

            <div className="pt-3">
              <Link href={`/products/${product.id}`} className="line-clamp-2 min-h-11 text-sm font-medium leading-5 text-gray-800 hover:text-teal-600">
                {product.name}
              </Link>
              <p className="mt-1 text-xs text-gray-500">{product.seller_name}</p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="text-base font-semibold text-gray-800">${product.price}</span>
                {product.old_price && (
                  <span className="text-sm text-gray-400 line-through">${product.old_price}</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/products" className="inline-flex items-center justify-center border border-gray-300 px-8 py-3 text-sm text-gray-700 transition-colors hover:border-teal-500 hover:bg-teal-500 hover:text-white">
          Load More
        </Link>
      </div>
    </section>
  );
}
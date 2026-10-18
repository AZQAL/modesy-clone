"use client";

import { Heart, ShoppingCart } from "lucide-react";

export type Product = {
  id: number;
  name: string;
  seller: string;
  price: number;
  oldPrice: number;
  category: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
  isWishlisted: boolean;
  isInCart: boolean;
  onToggleWishlist: (id: number) => void;
  onToggleCart: (id: number) => void;
};

export default function ProductCard({
  product,
  isWishlisted,
  isInCart,
  onToggleWishlist,
  onToggleCart,
}: ProductCardProps) {
  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <article className="group overflow-hidden rounded border border-gray-200 bg-white transition-shadow hover:shadow-md">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <a
          href={`/products/${product.id}`}
          aria-label={`Lihat ${product.name}`}
          className="block h-full w-full"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {discount > 0 && (
          <span className="absolute left-3 top-3 rounded bg-red-500 px-2 py-1 text-xs font-semibold text-white">
            -{discount}%
          </span>
        )}

        <button
          type="button"
          onClick={() => onToggleWishlist(product.id)}
          aria-label={
            isWishlisted
              ? `Hapus ${product.name} dari wishlist`
              : `Tambahkan ${product.name} ke wishlist`
          }
          className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow transition-colors ${
            isWishlisted
              ? "text-red-500"
              : "text-gray-500 hover:text-red-500"
          }`}
        >
          <Heart
            size={18}
            fill={isWishlisted ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="p-4">
        <p className="mb-1 text-xs text-gray-500">{product.category}</p>

        <a
          href={`/products/${product.id}`}
          className="line-clamp-2 min-h-10 text-sm font-medium text-gray-800 hover:text-teal-600"
        >
          {product.name}
        </a>

        <p className="mt-2 text-xs text-gray-500">
          Sold by {product.seller}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="font-semibold text-gray-900">
            {formatPrice(product.price)}
          </span>

          {product.oldPrice > product.price && (
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => onToggleCart(product.id)}
          className={`mt-4 flex w-full items-center justify-center gap-2 rounded px-3 py-2 text-sm font-medium transition-colors ${
            isInCart
              ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
              : "bg-teal-600 text-white hover:bg-teal-700"
          }`}
        >
          <ShoppingCart size={16} />
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}
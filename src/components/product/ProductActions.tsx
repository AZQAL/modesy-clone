"use client";

import { Heart, ShoppingCart } from "lucide-react";

type ProductActionsProps = {
  isWishlisted: boolean;
  addedToCart: boolean;
  onToggleWishlist: () => void;
  onToggleCart: () => void;
};

export default function ProductActions({
  isWishlisted,
  addedToCart,
  onToggleWishlist,
  onToggleCart,
}: ProductActionsProps) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      {/* Tombol keranjang */}
      <button
        type="button"
        onClick={onToggleCart}
        className={`flex flex-1 items-center justify-center gap-2 rounded px-5 py-3 text-sm font-medium transition-colors ${
          addedToCart
            ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
            : "bg-teal-600 text-white hover:bg-teal-700"
        }`}
      >
        <ShoppingCart size={18} />
        {addedToCart ? "Remove from Cart" : "Add to Cart"}
      </button>

      {/* Tombol wishlist */}
      <button
        type="button"
        onClick={onToggleWishlist}
        aria-pressed={isWishlisted}
        className={`flex items-center justify-center gap-2 rounded border px-5 py-3 text-sm font-medium transition-colors ${
          isWishlisted
            ? "border-red-300 bg-red-50 text-red-500"
            : "border-gray-300 text-gray-700 hover:border-red-300 hover:text-red-500"
        }`}
      >
        <Heart
          size={18}
          fill={isWishlisted ? "currentColor" : "none"}
        />
        {isWishlisted ? "Wishlisted" : "Wishlist"}
      </button>
    </div>
  );
}
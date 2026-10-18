"use client";

import { Heart, ShoppingCart, LoaderCircle } from "lucide-react";
import { useState } from "react";

type ProductActionsProps = {
  isWishlisted: boolean;
  addedToCart: boolean;
  onToggleWishlist: () => Promise<void>;
  onToggleCart: () => Promise<void>;
};

export default function ProductActions({
  isWishlisted,
  addedToCart,
  onToggleWishlist,
  onToggleCart,
}: ProductActionsProps) {
  const [loadingCart, setLoadingCart] = useState(false);
  const [loadingWish, setLoadingWish] = useState(false);

  async function handleCart() {
    setLoadingCart(true);
    await onToggleCart();
    setLoadingCart(false);
  }

  async function handleWishlist() {
    setLoadingWish(true);
    await onToggleWishlist();
    setLoadingWish(false);
  }

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={handleCart}
        disabled={loadingCart}
        className={`flex flex-1 items-center justify-center gap-2 rounded px-5 py-3 text-sm font-medium transition-colors disabled:opacity-60 ${
          addedToCart
            ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
            : "bg-teal-600 text-white hover:bg-teal-700"
        }`}
      >
        {loadingCart ? <LoaderCircle size={18} className="animate-spin" /> : <ShoppingCart size={18} />}
        {addedToCart ? "Remove from Cart" : "Add to Cart"}
      </button>

      <button
        type="button"
        onClick={handleWishlist}
        disabled={loadingWish}
        className={`flex items-center justify-center gap-2 rounded border px-5 py-3 text-sm font-medium transition-colors disabled:opacity-60 ${
          isWishlisted
            ? "border-red-300 bg-red-50 text-red-500"
            : "border-gray-300 text-gray-700 hover:border-red-300 hover:text-red-500"
        }`}
      >
        {loadingWish ? <LoaderCircle size={18} className="animate-spin" /> : <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />}
        {isWishlisted ? "Wishlisted" : "Wishlist"}
      </button>
    </div>
  );
}
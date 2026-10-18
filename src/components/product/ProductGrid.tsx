"use client";

import ProductCard, { type Product } from "@/components/product/ProductCard";

type ProductGridProps = {
  products: Product[];
  wishlist: number[];
  cart: number[];
  onToggleWishlist: (id: number) => void;
  onToggleCart: (id: number) => void;
};

export default function ProductGrid({
  products,
  wishlist,
  cart,
  onToggleWishlist,
  onToggleCart,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex min-h-64 flex-col items-center justify-center rounded border border-gray-200 bg-white px-6 py-12 text-center">
        <h2 className="text-lg font-semibold text-gray-900">
          No products found
        </h2>

        <p className="mt-2 max-w-md text-sm text-gray-500">
          We couldn't find any products matching your search or filter.
          Try changing your search keywords or resetting the filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isWishlisted={wishlist.includes(product.id)}
          isInCart={cart.includes(product.id)}
          onToggleWishlist={onToggleWishlist}
          onToggleCart={onToggleCart}
        />
      ))}
    </div>
  );
}
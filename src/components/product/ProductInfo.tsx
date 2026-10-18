import type { Product } from "@/features/products/data/products";

type ProductInfoProps = {
  product: Product;
};

export default function ProductInfo({ product }: ProductInfoProps) {
  const formatPrice = (price: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(price);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>
      <div className="mt-4 flex items-center gap-3">
        <span className="text-2xl font-bold text-teal-600">{formatPrice(product.price)}</span>
        {product.old_price && product.old_price > product.price && (
          <span className="text-lg text-gray-400 line-through">{formatPrice(product.old_price)}</span>
        )}
      </div>
      <p className="mt-6 text-sm leading-7 text-gray-600">
        {product.description || "No description provided for this product."}
      </p>
    </div>
  );
}
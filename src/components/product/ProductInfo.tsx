import type { Product } from "@/components/product/ProductCard";

type ProductInfoProps = {
  product: Product;
};

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="mt-8 border-t border-gray-200 pt-5 text-sm text-gray-500">
      <p>
        <span className="font-medium text-gray-800">Seller:</span>{" "}
        {product.seller}
      </p>

      <p className="mt-2">
        <span className="font-medium text-gray-800">Category:</span>{" "}
        {product.category}
      </p>

      <p className="mt-2">
        <span className="font-medium text-gray-800">Product ID:</span>{" "}
        {product.id}
      </p>
    </div>
  );
}
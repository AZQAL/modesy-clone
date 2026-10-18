import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type ProductBreadcrumbProps = {
  productName: string;
  category: string;
};

export default function ProductBreadcrumb({
  productName,
  category,
}: ProductBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-500"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-1 transition-colors hover:text-teal-600"
      >
        <Home size={15} />
        Home
      </Link>

      <ChevronRight size={15} />

      <Link
        href="/products"
        className="transition-colors hover:text-teal-600"
      >
        Products
      </Link>

      <ChevronRight size={15} />

      <span className="transition-colors hover:text-teal-600">
        {category}
      </span>

      <ChevronRight size={15} />

      <span
        className="max-w-52 truncate font-medium text-gray-800"
        aria-current="page"
      >
        {productName}
      </span>
    </nav>
  );
}
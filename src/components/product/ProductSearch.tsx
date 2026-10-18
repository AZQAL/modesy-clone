"use client";

import { Search, SlidersHorizontal } from "lucide-react";

type ProductSearchProps = {
  search: string;
  onSearchChange: (value: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
};

export default function ProductSearch({
  search,
  onSearchChange,
  sort,
  onSortChange,
}: ProductSearchProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search products..."
          aria-label="Search products"
          className="w-full rounded border border-gray-300 py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-teal-500"
        />
      </div>

      <div className="flex items-center gap-3">
        <SlidersHorizontal size={18} className="shrink-0 text-gray-500" />

        <label htmlFor="product-sort" className="whitespace-nowrap text-sm text-gray-600">
          Sort by:
        </label>

        <select
          id="product-sort"
          value={sort}
          onChange={(event) => onSortChange(event.target.value)}
          className="min-w-0 rounded border border-gray-300 bg-white px-3 py-3 text-sm outline-none focus:border-teal-500"
        >
          <option value="default">Default</option>
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>
    </div>
  );
}
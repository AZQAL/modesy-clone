"use client";

import { SlidersHorizontal } from "lucide-react";

type ProductFilterProps = {
  categories: string[];
  category: string;
  onCategoryChange: (value: string) => void;
  minPrice: string;
  maxPrice: string;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
  onReset: () => void;
};

export default function ProductFilter({
  categories,
  category,
  onCategoryChange,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  onReset,
}: ProductFilterProps) {
  return (
    <aside className="h-fit rounded border border-gray-200 bg-white p-5">
      <div className="mb-5 flex items-center gap-2 border-b border-gray-200 pb-4">
        <SlidersHorizontal size={18} className="text-teal-600" />
        <h2 className="text-base font-semibold text-gray-900">
          Filter Products
        </h2>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 text-sm font-semibold text-gray-800">
          Categories
        </h3>

        <div className="space-y-3">
          {categories.map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
            >
              <input
                type="radio"
                name="product-category"
                value={item}
                checked={category === item}
                onChange={() => onCategoryChange(item)}
                className="accent-teal-600"
              />
              <span>{item === "all" ? "All Categories" : item}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-800">
          Price Range
        </h3>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="min-price"
              className="mb-1 block text-xs text-gray-500"
            >
              Minimum
            </label>
            <input
              id="min-price"
              type="number"
              min="0"
              value={minPrice}
              onChange={(event) => onMinPriceChange(event.target.value)}
              placeholder="Min price"
              className="w-full min-w-0 rounded border border-gray-300 px-2 py-2 text-sm outline-none focus:border-teal-500"
            />
          </div>

          <div>
            <label
              htmlFor="max-price"
              className="mb-1 block text-xs text-gray-500"
            >
              Maximum
            </label>
            <input
              id="max-price"
              type="number"
              min="0"
              value={maxPrice}
              onChange={(event) => onMaxPriceChange(event.target.value)}
              placeholder="Max price"
              className="w-full min-w-0 rounded border border-gray-300 px-2 py-2 text-sm outline-none focus:border-teal-500"
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-5 w-full rounded border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-teal-600 hover:text-teal-600"
      >
        Reset Filters
      </button>
    </aside>
  );
}
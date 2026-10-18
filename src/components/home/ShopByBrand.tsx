"use client";

import { useState } from "react";

const brands = [
  { id: 1, name: "DIESEL", style: "text-2xl font-black italic text-red-600" },
  { id: 2, name: "DOCKERS", style: "text-lg font-black text-black" },
  { id: 3, name: "GUCCI", style: "text-lg font-serif font-bold text-black" },
  { id: 4, name: "H&M", style: "text-4xl font-black italic text-red-600" },
  {
    id: 5,
    name: "HUGO BOSS",
    style: "text-lg font-black text-black",
  },
  {
    id: 6,
    name: "LACOSTE",
    style: "text-2xl font-bold text-black",
  },
  {
    id: 7,
    name: "Lee Cooper",
    style: "text-xl font-bold italic text-red-600",
  },
  {
    id: 8,
    name: "Levi's",
    style: "text-2xl font-black text-red-600",
  },
  {
    id: 9,
    name: "PUMA",
    style: "text-2xl font-black italic text-black",
  },
  {
    id: 10,
    name: "adidas",
    style: "text-2xl font-black text-black",
  },
];

export default function ShopByBrand() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleBrands = Array.from({ length: 8 }, (_, index) => {
    return brands[(startIndex + index) % brands.length];
  });

  function showPrevious() {
    setStartIndex((current) =>
      (current - 1 + brands.length) % brands.length
    );
  }

  function showNext() {
    setStartIndex((current) => (current + 1) % brands.length);
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Shop By Brand
      </h2>

      <div className="relative border border-gray-200 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
          {visibleBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className={`flex h-28 items-center justify-center overflow-hidden border-gray-100 px-2 ${
                index !== 7 ? "border-r" : ""
              }`}
            >
              <span
                className={`${brand.style} whitespace-nowrap text-center`}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous brands"
          className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-800 shadow-md transition hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={showNext}
          aria-label="Next brands"
          className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-800 shadow-md transition hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
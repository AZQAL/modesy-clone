"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type ProductPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function ProductPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ProductPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Product pagination"
      className="mt-8 flex flex-wrap items-center justify-center gap-2"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex h-10 items-center gap-1 rounded border border-gray-300 px-3 text-sm text-gray-600 transition-colors hover:border-teal-600 hover:text-teal-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={16} />
        <span>Previous</span>
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
            className={`h-10 min-w-10 rounded border px-3 text-sm transition-colors ${
              currentPage === page
                ? "border-teal-600 bg-teal-600 text-white"
                : "border-gray-300 text-gray-600 hover:border-teal-600 hover:text-teal-600"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex h-10 items-center gap-1 rounded border border-gray-300 px-3 text-sm text-gray-600 transition-colors hover:border-teal-600 hover:text-teal-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <span>Next</span>
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}
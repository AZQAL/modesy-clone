"use client";

import { useEffect, useMemo, useState } from "react";
import ProductSearch from "@/components/product/ProductSearch";
import ProductFilter from "@/components/product/ProductFilter";
import ProductGrid from "@/components/product/ProductGrid";
import ProductPagination from "@/components/product/ProductPagination";
import { getProducts, type Product } from "@/features/products/data/products";
import { LoaderCircle } from "lucide-react";

const PRODUCTS_PER_PAGE = 6;

export default function ProductCatalog() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("default");
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cart, setCart] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function load() {
      const data = await getProducts();
      setAllProducts(data);
      setLoading(false);
    }
    load();
  }, []);

  const categories = useMemo(() => {
    const cats = allProducts.map(p => p.category_name || "Uncategorized");
    return ["all", ...Array.from(new Set(cats))];
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    const minimum = minPrice === "" ? null : Number(minPrice);
    const maximum = maxPrice === "" ? null : Number(maxPrice);

    const result = allProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(keyword) ||
        (product.seller_name || "").toLowerCase().includes(keyword) ||
        (product.category_name || "").toLowerCase().includes(keyword);

      const matchesCategory = category === "all" || product.category_name === category;
      const matchesMinPrice = minimum === null || product.price >= minimum;
      const matchesMaxPrice = maximum === null || product.price <= maximum;

      return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
    });

    switch (sort) {
      case "newest": result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()); break;
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "name-asc": result.sort((a, b) => a.name.localeCompare(b.name)); break;
      case "name-desc": result.sort((a, b) => b.name.localeCompare(a.name)); break;
      default: break;
    }

    return result;
  }, [allProducts, search, category, minPrice, maxPrice, sort]);

  useEffect(() => { setCurrentPage(1); }, [search, category, minPrice, maxPrice, sort]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE);

  function toggleWishlist(id: string) {
    setWishlist((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  function toggleCart(id: string) {
    setCart((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  function resetFilters() {
    setSearch(""); setCategory("all"); setMinPrice(""); setMaxPrice(""); setSort("default"); setCurrentPage(1);
  }

  if (loading) {
    return (
      <main className="flex min-h-[50vh] items-center justify-center bg-white">
        <LoaderCircle className="animate-spin text-teal-600" size={32} />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Products</h1>
          <p className="mt-2 text-sm text-gray-500">Discover products from our marketplace.</p>
        </div>

        <ProductSearch search={search} onSearchChange={setSearch} sort={sort} onSortChange={setSort} />

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-4">
          <div className="md:col-span-1">
            <ProductFilter
              categories={categories} category={category} onCategoryChange={setCategory}
              minPrice={minPrice} maxPrice={maxPrice} onMinPriceChange={setMinPrice} onMaxPriceChange={setMaxPrice} onReset={resetFilters}
            />
          </div>

          <section className="min-w-0 md:col-span-3">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm text-gray-500">
                Showing <span className="font-semibold text-gray-900">{paginatedProducts.length}</span> of <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products
              </p>
            </div>

            <ProductGrid
              products={paginatedProducts} wishlist={wishlist} cart={cart}
              onToggleWishlist={toggleWishlist} onToggleCart={toggleCart}
            />

            <ProductPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </section>
        </div>
      </div>
    </main>
  );
}
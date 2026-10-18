
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Clothing", image: "/images/products/summer-fashion-top-lace.jpg", slug: "clothing" },
  { name: "Home & Living", image: "/images/products/decorative-pillow.jpg", slug: "home-living" },
  { name: "Toys & Entertainment", image: "/images/products/animal-colorful-digital-prints.jpg", slug: "toys-entertainment" },
  { name: "Women's Clothing", image: "/images/products/floral-women-sundress.jpg", slug: "womens-clothing" },
  { name: "Men's Clothing", image: "/images/products/black-sneakers.jpg", slug: "mens-clothing" },
  { name: "Furniture", image: "/images/products/decorative-pillow.jpg", slug: "furniture" },
  { name: "Necklaces & Accessories", image: "/images/products/women-saddle-handbag.jpg", slug: "necklaces-accessories" },
  { name: "Graphics", image: "/images/products/animal-colorful-digital-prints.jpg", slug: "graphics" },
  { name: "Painting", image: "/images/products/animal-colorful-digital-prints.jpg", slug: "painting" },
  { name: "Boots", image: "/images/products/black-sneakers.jpg", slug: "boots" },
  { name: "Decorative Pillows", image: "/images/products/decorative-pillow.jpg", slug: "decorative-pillows" },
  { name: "Handbags", image: "/images/products/gucci-backpack.jpg", slug: "handbags" },
];

export default function ShopByCategory() {
  return (
    <section className="w-full bg-white py-10 sm:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Shop By Category
          </h2>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-500"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="group flex min-w-0 flex-col items-center text-center"
            >
              <div className="relative aspect-square w-full max-w-36 overflow-hidden rounded-full bg-gray-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="144px"
                  className="rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-white">
                    Shop Now
                    <ArrowRight size={15} />
                  </span>
                </div>
              </div>

              <h3 className="mt-3 text-sm font-semibold text-gray-800 transition-colors group-hover:text-red-500">
                {category.name}
              </h3>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}

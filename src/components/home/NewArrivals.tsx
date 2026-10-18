import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Colorful women scarves",
    seller: "Trendshop",
    price: 25,
    oldPrice: null,
    image: "/images/products/women-lace-blouse.jpg",
  },
  {
    id: 2,
    name: "Women's ankle boot with different colors",
    seller: "Admin",
    price: 79,
    oldPrice: 99,
    image: "/images/products/black-sneakers.jpg",
  },
  {
    id: 3,
    name: "Navy polka dot dress",
    seller: "Trendshop",
    price: 65,
    oldPrice: 79,
    image: "/images/products/floral-women-sundress.jpg",
  },
  {
    id: 4,
    name: "Modern grey couch and pillows",
    seller: "Admin",
    price: 250,
    oldPrice: null,
    image: "/images/products/decorative-pillow.jpg",
  },
  {
    id: 5,
    name: "Black fashion women backpack",
    seller: "Admin",
    price: 55,
    oldPrice: 69,
    image: "/images/products/gucci-backpack.jpg",
  },
  {
    id: 6,
    name: "Handcrafted decorative pillow",
    seller: "Admin",
    price: 59,
    oldPrice: 69,
    image: "/images/products/decorative-pillow.jpg",
  },
  {
    id: 7,
    name: "Black midi skirt with white flowers",
    seller: "Trendshop",
    price: 48,
    oldPrice: 55,
    image: "/images/products/floral-women-sundress.jpg",
  },
  {
    id: 8,
    name: "Women kipling bailey saddle handbag",
    seller: "Admin",
    price: 59,
    oldPrice: 69,
    image: "/images/products/women-saddle-handbag.jpg",
  },
  {
    id: 9,
    name: "Animal colorful digital prints",
    seller: "Trendshop",
    price: 29,
    oldPrice: 39,
    image: "/images/products/animal-colorful-digital-prints.jpg",
  },
  {
    id: 10,
    name: "Floral women sundress",
    seller: "Admin",
    price: 80,
    oldPrice: 89,
    image: "/images/products/floral-women-sundress.jpg",
  },
  {
    id: 11,
    name: "Seychelles women's brown ankle bootie",
    seller: "Admin",
    price: 89,
    oldPrice: null,
    image: "/images/products/black-sneakers.jpg",
  },
  {
    id: 12,
    name: "Ship illustration royalty free image",
    seller: "Trendshop",
    price: 15,
    oldPrice: null,
    image: "/images/products/animal-colorful-digital-prints.jpg",
  },
];

export default function NewArrivals() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">
          New Arrivals
        </h2>

        <Link
          href="/products?sort=newest"
          className="text-sm text-gray-600 transition-colors hover:text-teal-600"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="group min-w-0">
            <div className="relative overflow-hidden bg-gray-100">
              <Link
                href={`/products?search=${encodeURIComponent(product.name)}`}
                aria-label={`View ${product.name}`}
                className="relative block aspect-3/4 w-full"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <button
                type="button"
                aria-label={`Add ${product.name} to wishlist`}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-colors hover:text-teal-600"
              >
                <Heart size={18} />
              </button>

              <button
                type="button"
                aria-label={`Add ${product.name} to cart`}
                className="absolute bottom-3 left-3 right-3 flex translate-y-2 items-center justify-center gap-2 bg-white px-3 py-3 text-sm text-gray-700 opacity-100 transition-all duration-300 hover:bg-teal-500 hover:text-white sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            </div>

            <div className="pt-3">
              <Link
                href={`/products?search=${encodeURIComponent(product.name)}`}
                className="line-clamp-2 min-h-11 text-sm font-medium leading-5 text-gray-800 transition-colors hover:text-teal-600"
              >
                {product.name}
              </Link>

              <p className="mt-1 text-xs text-gray-500">
                {product.seller}
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="text-base font-semibold text-gray-800">
                  ${product.price}
                </span>

                {product.oldPrice !== null && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
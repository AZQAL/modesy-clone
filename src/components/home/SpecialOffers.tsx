
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Animal colorful digital prints",
    seller: "Trendshop",
    price: 29,
    oldPrice: 39,
    discount: 25,
    image: "/images/products/animal-colorful-digital-prints.jpg",
  },
  {
    id: 2,
    name: "Summer fashion top lace",
    seller: "Trendshop",
    price: 65,
    oldPrice: 79,
    discount: 17,
    image: "/images/products/summer-fashion-top-lace.jpg",
  },
  {
    id: 3,
    name: "Women lace blouse with different colors",
    seller: "Trendshop",
    price: 69,
    oldPrice: 79,
    discount: 12,
    image: "/images/products/women-lace-blouse.jpg",
  },
  {
    id: 4,
    name: "Floral women sundress",
    seller: "Admin",
    price: 80,
    oldPrice: 89,
    discount: 10,
    image: "/images/products/floral-women-sundress.jpg",
  },
  {
    id: 5,
    name: "Gucci nylon fabric smart backpack",
    seller: "Admin",
    price: 55,
    oldPrice: 69,
    discount: 20,
    image: "/images/products/gucci-backpack.jpg",
  },
  {
    id: 6,
    name: "Black sneakers with white sole",
    seller: "Admin",
    price: 69,
    oldPrice: 89,
    discount: 22,
    image: "/images/products/black-sneakers.jpg",
  },
  {
    id: 7,
    name: "Women kipling bailey saddle handbag",
    seller: "Admin",
    price: 59,
    oldPrice: 69,
    discount: 14,
    image: "/images/products/women-saddle-handbag.jpg",
  },
  {
    id: 8,
    name: "Handcrafted decorative pillow",
    seller: "Admin",
    price: 59,
    oldPrice: 69,
    discount: 14,
    image: "/images/products/decorative-pillow.jpg",
  },
];

export default function SpecialOffers() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">
          Special Offers
        </h2>

        <Link
          href="/products"
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

              <span className="absolute left-3 top-3 bg-teal-500 px-2 py-1 text-xs font-medium text-white">
                -{product.discount}%
              </span>

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
                className="absolute bottom-3 left-3 right-3 flex translate-y-2 items-center justify-center gap-2 bg-white px-3 py-3 text-sm text-gray-700 opacity-0 transition-all duration-300 hover:bg-teal-500 hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
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

                <span className="text-sm text-gray-400 line-through">
                  ${product.oldPrice}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

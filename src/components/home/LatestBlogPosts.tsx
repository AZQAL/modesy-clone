import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Gift Ideas for Every Budget: From Affordable to Luxury",
    image: "/images/products/summer-fashion-top-lace.jpg",
    href: "/blog/life-style/gift-ideas-for-every-budget-from-affordable-to-luxury",
  },
  {
    id: 2,
    title: "Fashion Trends and Style Inspiration",
    image: "/images/products/women-lace-blouse.jpg",
    href: "/blog",
  },
  {
    id: 3,
    title: "How to Choose Everyday Fashion",
    image: "/images/products/floral-women-sundress.jpg",
    href: "/blog",
  },
  {
    id: 4,
    title: "Ideas for a Beautiful Home",
    image: "/images/products/decorative-pillow.jpg",
    href: "/blog",
  },
];

export default function LatestBlogPosts() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Latest Blog Posts
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <article key={post.id} className="min-w-0">
            <Link
              href={post.href}
              className="relative block aspect-3/2 w-full overflow-hidden bg-gray-100"
              aria-label={post.title}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </Link>

            <h3 className="mt-3 text-base font-semibold leading-6 text-gray-800">
              <Link
                href={post.href}
                className="transition-colors hover:text-red-500"
              >
                {post.title}
              </Link>
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
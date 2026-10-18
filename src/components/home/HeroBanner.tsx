"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const slides = [
  {
    title: "Buy Nice and Unique Clothes",
    description:
      "Discover quality premium basics and trendy essentials at surprisingly affordable prices",
    image: "/images/banners/hero-clothing.jpg",
    link: "/products",
    button: "Explore Now",
  },
  {
    title: "Discover Products You Love",
    description:
      "Explore unique products and find something special for your everyday needs",
    image: "/images/banners/hero-fashion.jpg",
    link: "/products",
    button: "Shop Now",
  },
];

export default function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];

  function previousSlide() {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  }

  function nextSlide() {
    setActiveSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  }

  return (
    <section className="w-full">
      <div className="relative h-70 w-full overflow-hidden bg-gray-300 sm:h-85 lg:h-95">
  <img
    key={slide.image}
    src={slide.image}
    alt={slide.title}
    className="absolute inset-0 block h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/10" />

        {/* Konten di atas gambar */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="w-full px-5 sm:px-8 lg:px-5">
            <h1 className="max-w-xl text-3xl font-semibold leading-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white drop-shadow-md sm:text-lg lg:text-2xl">
              {slide.description}
            </p>

            <Link
              href={slide.link}
              className="mt-8 inline-flex items-center justify-center rounded-sm bg-gray-950 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-teal-600"
            >
              {slide.button}
            </Link>
          </div>
        </div>

        {/* Tombol sebelumnya */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-5 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/60 text-gray-700 transition-colors hover:bg-white sm:h-12 sm:w-12"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Tombol berikutnya */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-5 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/60 text-gray-700 transition-colors hover:bg-white sm:h-12 sm:w-12"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "About",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Women's Clothing", href: "/products" },
      { label: "Men's Clothing", href: "/products" },
      { label: "Home & Living", href: "/products" },
      { label: "Accessories", href: "/products" },
    ],
  },
  {
    title: "My Account",
    links: [
      { label: "Login", href: "/login" },
      { label: "Register", href: "/register" },
      { label: "Wishlist", href: "/wishlist" },
      { label: "Shopping Cart", href: "/cart" },
    ],
  },
];

const socialLinks = [
  { label: "FB", name: "Facebook", href: "https://www.facebook.com/" },
  { label: "IG", name: "Instagram", href: "https://www.instagram.com/" },
  { label: "X", name: "X", href: "https://x.com/" },
  { label: "YT", name: "YouTube", href: "https://www.youtube.com/" },
];

export default function SiteFooter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleNewsletterSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Newsletter subscription is not connected yet.");
  }

  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main footer columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="/"
              className="inline-flex items-center text-2xl font-bold tracking-tight text-gray-900"
            >
              M<span className="text-teal-500">o</span>desy
            </a>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Discover unique products and shop from independent sellers.
              Find fashion, accessories, home essentials, and more.
            </p>

            {/* Social media */}
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-xs font-semibold text-gray-500 transition-colors hover:border-teal-500 hover:bg-teal-500 hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Footer navigation */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors hover:text-teal-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter - right column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">
              Newsletter
            </h3>

            <p className="mb-4 text-sm leading-6 text-gray-500">
              Subscribe to our newsletter to receive the latest news,
              updates, and special offers.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setMessage("");
                }}
                placeholder="Enter your email"
                aria-label="Email address for newsletter"
                autoComplete="email"
                required
                className="w-full min-w-0 rounded border border-gray-300 px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-teal-500"
              />

              <button
                type="submit"
                className="w-full rounded bg-teal-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-700"
              >
                Subscribe
              </button>
            </form>

            {message && (
              <p
                role="status"
                className="mt-3 text-sm text-gray-500"
              >
                {message}
              </p>
            )}
          </div>
        </div>

        {/* Contact information */}
        <div className="mt-10 grid grid-cols-1 gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:grid-cols-3">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="shrink-0" />
            <span>Worldwide Marketplace</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={16} className="shrink-0" />
            <span>Customer Support</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} className="shrink-0" />
            <span>Contact Us</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Modesy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

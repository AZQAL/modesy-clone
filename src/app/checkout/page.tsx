
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import type { Product } from "@/components/product/ProductCard";
import {
  getCart,
  removeFromCart,
} from "@/features/products/lib/shop-storage";

type CheckoutForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  notes: string;
};

const initialForm: CheckoutForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  postalCode: "",
  country: "Indonesia",
  notes: "",
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

const inputClass =
  "mt-2 w-full rounded-sm border border-gray-300 bg-white px-3 py-3 text-sm text-gray-800 outline-none transition focus:border-teal-600";

export default function CheckoutPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [form, setForm] = useState<CheckoutForm>(initialForm);
  const [isLoaded, setIsLoaded] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  useEffect(() => {
    setCart(getCart());
    setIsLoaded(true);
  }, []);

  const subtotal = cart.reduce(
    (total, product) => total + product.price,
    0
  );

  // Ongkos kirim belum dikonfigurasi.
  const shipping = 0;
  const total = subtotal + shipping;

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleRemove(id: number) {
    setCart(removeFromCart(id));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (cart.length === 0) return;

    setOrderSubmitted(true);
  }

  if (!isLoaded) {
    return (
      <>
        <SiteHeader />
        <main className="min-h-[50vh] bg-white" />
        <SiteFooter />
      </>
    );
  }

  if (orderSubmitted) {
    return (
      <>
        <SiteHeader />

        <main className="flex min-h-[65vh] flex-col items-center justify-center bg-white px-4 py-16 text-center">
          <CheckCircle2
            size={58}
            strokeWidth={1.3}
            className="text-teal-600"
          />

          <h1 className="mt-6 text-2xl font-semibold text-gray-900">
            Checkout Information Completed
          </h1>

          <p className="mt-3 max-w-lg text-sm leading-6 text-gray-500">
            Your shipping information has been validated in this demo.
            No order has been saved and no payment has been processed yet.
          </p>

          <button
            type="button"
            onClick={() => setOrderSubmitted(false)}
            className="mt-6 border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Back to Checkout
          </button>

          <Link
            href="/products"
            className="mt-4 text-sm text-teal-700 hover:text-teal-800"
          >
            Continue Shopping
          </Link>
        </main>

        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8 border-b border-gray-200 pb-5">
            <h1 className="text-2xl font-semibold text-gray-900">
              Checkout
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Enter your shipping details and review your order.
            </p>
          </div>

          {cart.length === 0 ? (
            <div className="flex min-h-80 flex-col items-center justify-center text-center">
              <ShoppingBag
                size={48}
                strokeWidth={1.3}
                className="text-gray-300"
              />

              <h2 className="mt-5 text-xl font-medium text-gray-900">
                Your cart is empty
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Add a product to your cart before checking out.
              </p>

              <Link
                href="/products"
                className="mt-6 bg-teal-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-700"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_380px]">
              <form
                id="checkout-form"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <section>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center bg-gray-100 text-sm font-semibold text-gray-700">
                      1
                    </span>

                    <h2 className="text-lg font-semibold text-gray-900">
                      Contact Information
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <label className="text-sm font-medium text-gray-700">
                      First Name *
                      <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        autoComplete="given-name"
                        required
                        className={inputClass}
                        placeholder="First name"
                      />
                    </label>

                    <label className="text-sm font-medium text-gray-700">
                      Last Name *
                      <input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        autoComplete="family-name"
                        required
                        className={inputClass}
                        placeholder="Last name"
                      />
                    </label>

                    <label className="text-sm font-medium text-gray-700">
                      Email Address *
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                        className={inputClass}
                        placeholder="you@example.com"
                      />
                    </label>

                    <label className="text-sm font-medium text-gray-700">
                      Phone Number *
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        required
                        className={inputClass}
                        placeholder="Phone number"
                      />
                    </label>
                  </div>
                </section>

                <section className="border-t border-gray-200 pt-8">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center bg-gray-100 text-sm font-semibold text-gray-700">
                      2
                    </span>

                    <h2 className="text-lg font-semibold text-gray-900">
                      Shipping Address
                    </h2>
                  </div>

                  <div className="space-y-5">
                    <label className="block text-sm font-medium text-gray-700">
                      Street Address *
                      <input
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        autoComplete="street-address"
                        required
                        className={inputClass}
                        placeholder="Street, building, house number"
                      />
                    </label>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <label className="text-sm font-medium text-gray-700">
                        City / Regency *
                        <input
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          autoComplete="address-level2"
                          required
                          className={inputClass}
                          placeholder="City or regency"
                        />
                      </label>

                      <label className="text-sm font-medium text-gray-700">
                        Province *
                        <input
                          name="state"
                          value={form.state}
                          onChange={handleChange}
                          autoComplete="address-level1"
                          required
                          className={inputClass}
                          placeholder="Province"
                        />
                      </label>

                      <label className="text-sm font-medium text-gray-700">
                        Postal Code *
                        <input
                          name="postalCode"
                          value={form.postalCode}
                          onChange={handleChange}
                          autoComplete="postal-code"
                          required
                          className={inputClass}
                          placeholder="Postal code"
                        />
                      </label>

                      <label className="text-sm font-medium text-gray-700">
                        Country *
                        <select
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          autoComplete="country-name"
                          required
                          className={inputClass}
                        >
                          <option value="Indonesia">Indonesia</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Other">Other</option>
                        </select>
                      </label>
                    </div>

                    <label className="block text-sm font-medium text-gray-700">
                      Order Notes (Optional)
                      <textarea
                        name="notes"
                        value={form.notes}
                        onChange={handleChange}
                        rows={4}
                        className={inputClass}
                        placeholder="Additional delivery instructions..."
                      />
                    </label>
                  </div>
                </section>

                <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    href="/cart"
                    className="inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-teal-700"
                  >
                    <ArrowLeft size={16} />
                    Return to Cart
                  </Link>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
                  >
                    Complete Checkout
                    <ArrowRight size={17} />
                  </button>
                </div>
              </form>

              <aside className="border border-gray-200 p-5 sm:p-6">
                <h2 className="border-b border-gray-200 pb-4 text-lg font-semibold text-gray-900">
                  Order Summary
                </h2>

                <div className="space-y-5 py-5">
                  {cart.map((product) => (
                    <div
                      key={product.id}
                      className="flex gap-3"
                    >
                      <Link
                        href={`/products/${product.id}`}
                        className="h-20 w-20 shrink-0 overflow-hidden bg-gray-100"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </Link>

                      <div className="min-w-0 flex-1">
                        <Link
                          href={`/products/${product.id}`}
                          className="text-sm font-medium text-gray-800 hover:text-teal-700"
                        >
                          {product.name}
                        </Link>

                        <p className="mt-1 text-xs text-gray-500">
                          {product.category}
                        </p>

                        <p className="mt-2 text-sm font-semibold text-gray-900">
                          {formatPrice(product.price)}
                        </p>

                        <button
                          type="button"
                          onClick={() => handleRemove(product.id)}
                          className="mt-2 text-xs text-gray-500 underline hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 border-t border-gray-200 pt-5">
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-gray-500">
                      Subtotal ({cart.length}{" "}
                      {cart.length === 1 ? "item" : "items"})
                    </span>

                    <span className="font-medium text-gray-900">
                      {formatPrice(subtotal)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-gray-500">Shipping</span>
                    <span className="text-gray-600">Calculated later</span>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-gray-200 pt-4">
                    <span className="font-semibold text-gray-900">
                      Total
                    </span>

                    <span className="text-xl font-semibold text-gray-900">
                      {formatPrice(total)}
                    </span>
                  </div>

                  <p className="text-xs leading-5 text-gray-500">
                    Shipping charges and payment options have not been
                    configured yet.
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-center gap-2 border-t border-gray-200 pt-5 text-xs text-gray-500">
                  <CheckCircle2 size={15} className="text-teal-600" />
                  Order details are ready for review
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

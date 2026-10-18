
"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  ShoppingCart,
  Heart,
  Menu,
  X,
  MapPin,
  Plus,
} from "lucide-react";
import type { AuthChangeEvent, Session } from "@supabase/supabase-js";

import AccountDropdown from "@/components/auth/AccountDropdown";
import LoginModal from "@/components/auth/LoginModal";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

type Account = {
  id: string;
  email: string | undefined;
  role: string | null;
};

type AuthUser = {
  id: string;
  email: string | undefined;
};

const categories = [
  { label: "Clothing", href: "/shop?category=clothing" },
  { label: "Shoes", href: "/shop?category=shoes" },
  { label: "Home & Living", href: "/shop?category=home-living" },
  { label: "Jewelry & Accessories", href: "/shop?category=accessories" },
  { label: "Toys & Entertainment", href: "/shop?category=toys" },
  { label: "Graphics & Photos", href: "/shop?category=graphics" },
  { label: "Video & Audio", href: "/shop?category=audio" },
  { label: "Web Templates & Code", href: "/shop?category=templates" },
];

export default function SiteHeader() {
  const router = useRouter();

  const [account, setAccount] = useState<Account | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const requestIdRef = useRef(0);

  const loadAccount = useCallback(async (user: AuthUser | null) => {
    const requestId = ++requestIdRef.current;

    if (!user) {
      setAccount(null);
      return;
    }

    const { data: profile, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    if (requestId !== requestIdRef.current) return;

    if (error) {
      console.error("Gagal memuat profil:", error.message);

      setAccount({
        id: user.id,
        email: user.email,
        role: null,
      });

      return;
    }

    setAccount({
      id: user.id,
      email: user.email,
      role: profile?.role ?? null,
    });
  }, []);

  // Pertahankan listener autentikasi yang sebelumnya berhasil.
  useEffect(() => {
    let active = true;
    let lastUserId: string | null | undefined = undefined;
    let scheduledUserId: string | null | undefined = undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        if (!active) return;

        const user = session?.user
          ? {
              id: session.user.id,
              email: session.user.email,
            }
          : null;

        const userId = user?.id ?? null;

        if (userId === lastUserId) return;

        lastUserId = userId;
        scheduledUserId = userId;

        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
          if (!active || scheduledUserId !== userId) return;
          void loadAccount(user);
        }, 0);
      },
    );

    return () => {
      active = false;

      if (timer) clearTimeout(timer);

      subscription.unsubscribe();
      requestIdRef.current += 1;
    };
  }, [loadAccount]);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = searchTerm.trim();

    router.push(
      query ? `/shop?q=${encodeURIComponent(query)}` : "/shop",
    );

    setIsMobileMenuOpen(false);
    setIsSearchVisible(false);
  }

  function openSellPage(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!account) {
      event.preventDefault();
      setIsLoginOpen(true);
    }
  }

  return (
    <>
      <header className="relative z-50 w-full border-t-2 border-[#444444] bg-white text-[#555555]">
        {/* BARIS ATAS */}
        <div className="border-b border-gray-200">
          <div className="mx-auto flex min-h-11 max-w-7xl items-center justify-between gap-3 px-4">
            <div className="flex items-center gap-4 text-xs sm:text-sm">
              <Link
                href="/contact"
                className="transition hover:text-[#00a99d]"
              >
                Contact
              </Link>

              <Link
                href="/sell"
                onClick={openSellPage}
                className="transition hover:text-[#00a99d]"
              >
                Sell on Modesy
              </Link>
            </div>

            <div className="flex items-center gap-3 text-xs sm:gap-5 sm:text-sm">
              <Link
                href="/location"
                className="hidden items-center gap-1.5 transition hover:text-[#00a99d] lg:flex"
              >
                <MapPin size={14} />
                Location
              </Link>

              <select
                aria-label="Currency"
                defaultValue="USD ($)"
                className="max-w-20 cursor-pointer bg-transparent text-xs outline-none sm:max-w-none sm:text-sm"
              >
                <option>USD ($)</option>
                <option>IDR (Rp)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
              </select>

              <select
                aria-label="Language"
                defaultValue="English"
                className="hidden max-w-24 cursor-pointer bg-transparent text-xs outline-none sm:block sm:max-w-none sm:text-sm"
              >
                <option>English</option>
                <option>Indonesia</option>
              </select>

              {account ? (
                <AccountDropdown
                  email={account.email}
                  role={account.role ?? "member"}
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsLoginOpen(true)}
                  className="flex items-center gap-1.5 whitespace-nowrap transition hover:text-[#00a99d]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100">
                    <span className="text-sm">👤</span>
                  </span>
                  <span>Login</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* LOGO, PENCARIAN, CART, WISHLIST, SELL NOW */}
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:gap-6">
          <Link
            href="/"
            className="shrink-0 text-3xl font-bold tracking-tight text-[#444444]"
          >
            M<span className="text-[#00a99d]">o</span>desy
          </Link>

          <form
            onSubmit={handleSearch}
            className="hidden min-w-0 max-w-2xl flex-1 md:flex"
          >
            <div className="flex h-12 w-full items-center rounded bg-[#f5f5f5] px-4">
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search for products, categories or brands"
                className="min-w-0 flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
              />

              <button
                type="submit"
                aria-label="Search products"
                className="text-gray-500 transition hover:text-[#00a99d]"
              >
                <Search size={21} strokeWidth={1.7} />
              </button>
            </div>
          </form>

          <div className="ml-auto flex shrink-0 items-center gap-3 sm:gap-5">
            <Link
              href="/cart"
              aria-label="Cart"
              className="flex items-center gap-1.5 transition hover:text-[#00a99d]"
            >
              <ShoppingCart size={23} strokeWidth={1.6} />
              <span className="hidden text-sm lg:inline">Cart</span>
            </Link>

            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="flex items-center gap-1.5 transition hover:text-[#00a99d]"
            >
              <Heart size={24} strokeWidth={1.6} />
              <span className="hidden text-sm lg:inline">Wishlist</span>
            </Link>

            <Link
              href="/sell"
              onClick={openSellPage}
              className="hidden h-10 items-center justify-center gap-1.5 rounded bg-[#00a99d] px-4 text-sm font-medium text-white transition hover:bg-[#008f85] lg:flex"
            >
              <Plus size={16} />
              Sell Now
            </Link>

            <button
              type="button"
              aria-label="Search"
              onClick={() => setIsSearchVisible((previous) => !previous)}
              className="text-gray-600 hover:text-[#00a99d] md:hidden"
            >
              <Search size={21} />
            </button>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen((previous) => !previous)}
              className="text-gray-600 hover:text-[#00a99d] md:hidden"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* PENCARIAN MOBILE */}
        {isSearchVisible && (
          <div className="px-4 pb-3 md:hidden">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search for products, categories or brands"
                className="h-10 min-w-0 flex-1 rounded-l border border-gray-300 px-3 text-sm outline-none focus:border-[#00a99d]"
              />

              <button
                type="submit"
                aria-label="Search products"
                className="flex h-10 w-10 items-center justify-center rounded-r bg-[#00a99d] text-white"
              >
                <Search size={17} />
              </button>
            </form>
          </div>
        )}

        {/* KATEGORI */}
        <nav className="border-t border-gray-100">
          <div className="mx-auto flex max-w-7xl items-center gap-5 overflow-x-auto px-4 py-3 text-xs whitespace-nowrap sm:gap-6 sm:text-sm lg:gap-7">
            {categories.map((category) => (
              <Link
                key={category.label}
                href={category.href}
                className="shrink-0 text-gray-700 transition hover:text-[#00a99d]"
              >
                {category.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* MENU MOBILE */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white px-4 py-3 md:hidden">
            <div className="flex flex-col">
              {categories.map((category) => (
                <Link
                  key={category.label}
                  href={category.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="border-b border-gray-100 py-2.5 text-sm transition hover:text-[#00a99d]"
                >
                  {category.label}
                </Link>
              ))}

              <Link
                href="/cart"
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-gray-100 py-2.5 text-sm"
              >
                Cart
              </Link>

              <Link
                href="/wishlist"
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-gray-100 py-2.5 text-sm"
              >
                Wishlist
              </Link>

              <Link
                href="/sell"
                onClick={(event) => {
                  setIsMobileMenuOpen(false);
                  openSellPage(event);
                }}
                className="mt-3 flex h-10 items-center justify-center gap-2 rounded bg-[#00a99d] text-sm font-medium text-white"
              >
                <Plus size={16} />
                Sell Now
              </Link>
            </div>
          </div>
        )}
      </header>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
}


"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  UserRound,
  LayoutDashboard,
  Wallet,
  ShoppingBag,
  Ticket,
  MessageCircle,
  Settings,
  ShieldCheck,
  ChevronDown,
  LogOut,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type AccountDropdownProps = {
  email?: string;
  role: string;
};

type MenuItem = {
  label: string;
  href: string;
  icon: typeof UserRound;
};

export default function AccountDropdown({
  role,
}: AccountDropdownProps) {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Menu khusus berdasarkan role.
  const dashboardItem: MenuItem | null =
    role === "super_admin"
      ? {
          label: "Admin Panel",
          href: "/admin",
          icon: ShieldCheck,
        }
      : role === "moderator"
        ? {
            label: "Dashboard",
            href: "/moderator",
            icon: LayoutDashboard,
          }
        : role === "vendor"
          ? {
              label: "Dashboard",
              href: "/vendor/dashboard",
              icon: LayoutDashboard,
            }
          : null;

  // Menu akun yang ditampilkan untuk semua role.
  const accountItems: MenuItem[] = [
    {
      label: "Profile",
      href: "/profile",
      icon: UserRound,
    },
    {
      label: "Wallet",
      href: "/wallet",
      icon: Wallet,
    },
    {
      label: "Orders",
      href: "/orders",
      icon: ShoppingBag,
    },
    {
      label: "My Coupons",
      href: "/my-coupons",
      icon: Ticket,
    },
    {
      label: "Messages",
      href: "/messages",
      icon: MessageCircle,
    },
    {
      label: "Profile Settings",
      href: "/settings/edit-profile",
      icon: Settings,
    },
  ];

  const menuItems: MenuItem[] = [
    ...(dashboardItem ? [dashboardItem] : []),
    ...accountItems,
  ];

  // Tutup dropdown saat klik di luar atau menekan Escape.
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Logout Supabase.
  async function handleLogout() {
    if (isLoggingOut) return;

    setIsLoggingOut(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("Logout gagal:", error.message);
        setIsLoggingOut(false);
        return;
      }

      setIsOpen(false);
      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error("Terjadi kesalahan saat logout:", error);
      setIsLoggingOut(false);
    }
  }

  // Teks tombol navbar berdasarkan role.
  const accountLabel =
    role === "super_admin"
      ? "Admin"
      : role === "moderator"
        ? "Moderator"
        : role === "vendor"
          ? "Vendor"
          : "My Account";

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={accountLabel}
        className="flex items-center gap-1 rounded px-1 py-1 text-xs text-gray-600 transition hover:text-[#00a99d] sm:text-sm"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
          <UserRound size={14} strokeWidth={1.7} />
        </span>

        <span className="hidden max-w-20 truncate sm:inline">
          {accountLabel}
        </span>

        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 top-full z-100 mt-1.5 w-48 overflow-hidden rounded border border-gray-200 bg-white py-1 shadow-lg"
        >
          <div>
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-600 transition hover:bg-gray-50 hover:text-[#00a99d] sm:text-sm"
                >
                  <Icon
                    size={14}
                    strokeWidth={1.7}
                    className="shrink-0"
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-1 border-t border-gray-100 pt-1">
            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm"
            >
              <LogOut size={14} strokeWidth={1.7} />
              <span>
                {isLoggingOut ? "Logging out..." : "Logout"}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

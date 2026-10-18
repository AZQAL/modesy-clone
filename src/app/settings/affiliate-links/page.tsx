"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  UserRoundCog,
  MapPin,
  Truck,
  Link2,
  Share2,
  LockKeyhole,
  UserRoundX,
  LoaderCircle,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

// Tipe untuk tampilan di UI
type AffiliateItem = {
  id: string;
  product_name: string;
  affiliate_link: string;
  created_at: string;
};

// Tipe untuk data mentah dari Supabase
type AffiliateRow = {
  id: string;
  product_id: string;
  affiliate_code: string;
  created_at: string;
};

// Data dummy ini nanti akan diganti dengan data asli dari tabel products (Tahap 05)
const DUMMY_PRODUCTS = [
  { id: "11111111-1111-1111-1111-111111111111", name: "Black bag over the shoulder" },
  { id: "22222222-2222-2222-2222-222222222222", name: "Black midi skirt with white flowers" },
  { id: "33333333-3333-3333-3333-333333333333", name: "Floral women sundress" },
];

const sidebarItems = [
  { label: "Update Profile", href: "/settings/edit-profile", icon: UserRoundCog },
  { label: "Location", href: "/settings/location", icon: MapPin },
  { label: "Shipping Address", href: "/settings/shipping-address", icon: Truck },
  { label: "Affiliate Links", href: "/settings/affiliate-links", icon: Link2 },
  { label: "Social Media", href: "/settings/social-media", icon: Share2 },
  { label: "Change Password", href: "/settings/change-password", icon: LockKeyhole },
  { label: "Delete Account", href: "/settings/delete-account", icon: UserRoundX },
];

export default function AffiliateLinksPage() {
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClient();

  const [links, setLinks] = useState<AffiliateItem[]>([]);
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let active = true;

    async function loadData() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          router.replace("/login");
          return;
        }

        if (!active) return;
        setUserId(user.id);

        const { data, error } = await supabase
          .from("affiliate_links")
          .select("id, product_id, affiliate_code, created_at")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });

        if (error) throw error;

        if (active) {
          const rawData = (data as AffiliateRow[]) || [];
          
          const formattedData = rawData.map((item: AffiliateRow) => {
            const product = DUMMY_PRODUCTS.find((p) => p.id === item.product_id);
            return {
              id: item.id,
              product_name: product ? product.name : "Unknown Product",
              affiliate_link: `https://modesy.codingest.net/affiliate/${item.affiliate_code}`,
              created_at: item.created_at,
            };
          });
          
          setLinks(formattedData);
        }
      } catch (err: any) {
        if (active) setErrorMessage(err.message || "Gagal memuat data affiliate.");
      } finally {
        if (active) setLoading(false);
      }
    }

    loadData();
    return () => { active = false; };
  }, [router, supabase]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this affiliate link?")) return;

    try {
      const { error } = await supabase.from("affiliate_links").delete().eq("id", id);
      if (error) throw error;
      
      setLinks((prev) => prev.filter((link) => link.id !== id));
    } catch (err: any) {
      alert("Gagal menghapus: " + err.message);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white">
        <LoaderCircle size={28} className="animate-spin text-teal-600" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-700">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-7 sm:px-6 lg:px-8">
        <nav className="mb-5 flex flex-wrap items-center gap-1 text-xs text-gray-400">
          <Link href="/" className="hover:text-teal-600">Home</Link>
          <ChevronRight size={14} />
          <span>Profile Settings</span>
          <ChevronRight size={14} />
          <span className="text-gray-700">Affiliate Links</span>
        </nav>

        <h1 className="mb-5 text-2xl font-medium text-gray-900">
          Profile Settings
        </h1>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-4">
          <aside className="space-y-1 md:col-span-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-10 items-center gap-3 rounded-sm px-3 text-sm transition ${
                    active
                      ? "bg-gray-100 text-gray-800"
                      : "text-gray-600 hover:bg-gray-50 hover:text-teal-600"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.8} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </aside>

          <section className="min-w-0 md:col-span-3">
            {errorMessage && (
              <div role="alert" className="mb-5 flex items-start gap-2 border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                <AlertCircle size={17} className="mt-0.5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="overflow-x-auto border border-gray-200">
              <table className="w-full min-w-150 border-collapse text-left text-sm">
                <thead className="bg-white">
                  <tr className="border-b border-gray-200">
                    <th className="px-5 py-4 font-semibold text-gray-900">Product</th>
                    <th className="px-5 py-4 font-semibold text-gray-900">Affiliate Link</th>
                    <th className="px-5 py-4 font-semibold text-gray-900">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {links.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="px-5 py-8 text-center text-gray-500">
                        No affiliate links found.
                      </td>
                    </tr>
                  ) : (
                    links.map((link) => (
                      <tr key={link.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                        <td className="px-5 py-4 text-gray-700">
                          <span className="line-clamp-2 max-w-50">{link.product_name}</span>
                        </td>
                        <td className="px-5 py-4 text-gray-500">
                          {link.affiliate_link}
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-gray-700">
                              {new Date(link.created_at).toISOString().split("T")[0]}
                            </span>
                            <button
                              onClick={() => handleDelete(link.id)}
                              className="text-left text-xs text-red-500 underline hover:text-red-700"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
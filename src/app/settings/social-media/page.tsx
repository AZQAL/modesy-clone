"use client";

import { useEffect, useState, type FormEvent } from "react";
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
  CheckCircle,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type SocialData = {
  social_facebook: string;
  social_twitter: string;
  social_instagram: string;
  social_tiktok: string;
  social_whatsapp: string;
  social_youtube: string;
  social_discord: string;
  social_telegram: string;
  social_pinterest: string;
  social_linkedin: string;
  social_twitch: string;
  social_vk: string;
  social_website: string;
};

const emptyData: SocialData = {
  social_facebook: "",
  social_twitter: "",
  social_instagram: "",
  social_tiktok: "",
  social_whatsapp: "",
  social_youtube: "",
  social_discord: "",
  social_telegram: "",
  social_pinterest: "",
  social_linkedin: "",
  social_twitch: "",
  social_vk: "",
  social_website: "",
};

const socialFields = [
  { name: "social_facebook", label: "Facebook URL", placeholder: "Facebook URL" },
  { name: "social_twitter", label: "X (Twitter) URL", placeholder: "X (Twitter) URL" },
  { name: "social_instagram", label: "Instagram URL", placeholder: "Instagram URL" },
  { name: "social_tiktok", label: "TikTok URL", placeholder: "TikTok URL" },
  { name: "social_whatsapp", label: "WhatsApp URL", placeholder: "WhatsApp URL" },
  { name: "social_youtube", label: "Youtube URL", placeholder: "Youtube URL" },
  { name: "social_discord", label: "Discord Url", placeholder: "Discord Url" },
  { name: "social_telegram", label: "Telegram URL", placeholder: "Telegram URL" },
  { name: "social_pinterest", label: "Pinterest URL", placeholder: "Pinterest URL" },
  { name: "social_linkedin", label: "Linkedin URL", placeholder: "Linkedin URL" },
  { name: "social_twitch", label: "Twitch Url", placeholder: "Twitch Url" },
  { name: "social_vk", label: "VK URL", placeholder: "VK URL" },
  { name: "social_website", label: "Personal Website URL", placeholder: "Personal Website URL" },
] as const;

const sidebarItems = [
  { label: "Update Profile", href: "/settings/edit-profile", icon: UserRoundCog },
  { label: "Location", href: "/settings/location", icon: MapPin },
  { label: "Shipping Address", href: "/settings/shipping-address", icon: Truck },
  { label: "Affiliate Links", href: "/settings/affiliate-links", icon: Link2 },
  { label: "Social Media", href: "/settings/social-media", icon: Share2 },
  { label: "Change Password", href: "/settings/change-password", icon: LockKeyhole },
  { label: "Delete Account", href: "/settings/delete-account", icon: UserRoundX },
];

// Desain input disesuaikan dengan screenshot (background abu-abu, border tipis)
const inputClass =
  "block h-11 w-full rounded-sm border border-gray-200 bg-[#f9f9f9] px-4 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-teal-600 focus:bg-white transition-colors disabled:cursor-not-allowed disabled:opacity-60";

const labelClass = "mb-2 block text-[13px] font-semibold text-gray-800";

export default function SocialMediaPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [data, setData] = useState<SocialData>(emptyData);
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    let active = true;

    async function loadData() {
      try {
        const supabase = createClient();
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError) throw authError;
        if (!user) {
          router.replace("/login");
          return;
        }

        const { data: profile, error } = await supabase
          .from("profiles")
          .select(
            "id, social_facebook, social_twitter, social_instagram, social_tiktok, social_whatsapp, social_youtube, social_discord, social_telegram, social_pinterest, social_linkedin, social_twitch, social_vk, social_website"
          )
          .eq("id", user.id)
          .maybeSingle();

        if (error) {
          throw new Error(
            "Gagal memuat data social media. Pastikan kolom social_* sudah ada di tabel profiles. Detail: " +
              error.message
          );
        }

        if (!active) return;

        setUserId(user.id);
        setData({
          social_facebook: profile?.social_facebook ?? "",
          social_twitter: profile?.social_twitter ?? "",
          social_instagram: profile?.social_instagram ?? "",
          social_tiktok: profile?.social_tiktok ?? "",
          social_whatsapp: profile?.social_whatsapp ?? "",
          social_youtube: profile?.social_youtube ?? "",
          social_discord: profile?.social_discord ?? "",
          social_telegram: profile?.social_telegram ?? "",
          social_pinterest: profile?.social_pinterest ?? "",
          social_linkedin: profile?.social_linkedin ?? "",
          social_twitch: profile?.social_twitch ?? "",
          social_vk: profile?.social_vk ?? "",
          social_website: profile?.social_website ?? "",
        });
      } catch (error) {
        if (active) {
          setErrorMessage(
            error instanceof Error ? error.message : "Gagal memuat data social media."
          );
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    void loadData();

    return () => {
      active = false;
    };
  }, [router]);

  function updateField(field: keyof SocialData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrorMessage("");
    setSuccessMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!userId || saving) return;

    setSaving(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const supabase = createClient();
      const { data: { user }, error: authError } = await supabase.auth.getUser();

      if (authError) throw authError;
      if (!user || user.id !== userId) {
        throw new Error("Sesi login berakhir. Silakan login kembali.");
      }

      const { error } = await supabase
        .from("profiles")
        .update({
          social_facebook: data.social_facebook.trim() || null,
          social_twitter: data.social_twitter.trim() || null,
          social_instagram: data.social_instagram.trim() || null,
          social_tiktok: data.social_tiktok.trim() || null,
          social_whatsapp: data.social_whatsapp.trim() || null,
          social_youtube: data.social_youtube.trim() || null,
          social_discord: data.social_discord.trim() || null,
          social_telegram: data.social_telegram.trim() || null,
          social_pinterest: data.social_pinterest.trim() || null,
          social_linkedin: data.social_linkedin.trim() || null,
          social_twitch: data.social_twitch.trim() || null,
          social_vk: data.social_vk.trim() || null,
          social_website: data.social_website.trim() || null,
        })
        .eq("id", user.id);

      if (error) throw error;

      setSuccessMessage("Social media updated successfully.");
      router.refresh();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Gagal menyimpan data social media."
      );
    } finally {
      setSaving(false);
    }
  }

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
          <span className="text-gray-700">Social Media</span>
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
            {/* Alert Error & Success */}
            {errorMessage && (
              <div role="alert" className="mb-6 flex items-start gap-2 border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                <AlertCircle size={17} className="mt-0.5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {successMessage && (
              <div role="status" className="mb-6 flex items-start gap-2 border border-green-200 bg-green-50 p-3 text-sm text-green-700">
                <CheckCircle size={17} className="mt-0.5 shrink-0" />
                <span>{successMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="max-w-2xl">
              <div className="space-y-4">
                {socialFields.map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className={labelClass}>
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      type="url"
                      value={data[field.name]}
                      onChange={(e) => updateField(field.name, e.target.value)}
                      className={inputClass}
                      placeholder={field.placeholder}
                      disabled={saving}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={saving || !userId}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-sm bg-[#00a99d] px-6 text-sm font-medium text-white transition hover:bg-[#008f85] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving && <LoaderCircle size={15} className="animate-spin" />}
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
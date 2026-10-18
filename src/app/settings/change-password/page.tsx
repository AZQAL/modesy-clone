"use client";

import { useState, type FormEvent } from "react";
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

const sidebarItems = [
  { label: "Update Profile", href: "/settings/edit-profile", icon: UserRoundCog },
  { label: "Location", href: "/settings/location", icon: MapPin },
  { label: "Shipping Address", href: "/settings/shipping-address", icon: Truck },
  { label: "Affiliate Links", href: "/settings/affiliate-links", icon: Link2 },
  { label: "Social Media", href: "/settings/social-media", icon: Share2 },
  { label: "Change Password", href: "/settings/change-password", icon: LockKeyhole },
  { label: "Delete Account", href: "/settings/delete-account", icon: UserRoundX },
];

const inputClass =
  "block h-11 w-full rounded-sm border border-gray-200 bg-[#f9f9f9] px-4 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-teal-600 focus:bg-white transition-colors disabled:cursor-not-allowed disabled:opacity-60";

const labelClass = "mb-2 block text-[13px] font-semibold text-gray-800";

export default function ChangePasswordPage() {
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClient();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (saving) return;

    setErrorMessage("");
    setSuccessMessage("");

    // Validasi input
    if (newPassword.length < 6) {
      setErrorMessage("Password baru harus terdiri dari minimal 6 karakter.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("Konfirmasi password tidak cocok dengan password baru.");
      return;
    }

    if (newPassword === currentPassword) {
      setErrorMessage("Password baru tidak boleh sama dengan password lama.");
      return;
    }

    setSaving(true);

    try {
      // 1. Dapatkan data user yang sedang login
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user || !user.email) {
        throw new Error("Sesi login berakhir. Silakan login kembali.");
      }

      // 2. Verifikasi password lama dengan cara mencoba login ulang
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: currentPassword,
      });

      if (signInError) {
        throw new Error("Old Password salah.");
      }

      // 3. Update password baru
      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (updateError) throw updateError;

      // 4. Berhasil
      setSuccessMessage("Password berhasil diubah.");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      router.refresh();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Gagal mengubah password."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-700">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-7 sm:px-6 lg:px-8">
        <nav className="mb-5 flex flex-wrap items-center gap-1 text-xs text-gray-400">
          <Link href="/" className="hover:text-teal-600">Home</Link>
          <ChevronRight size={14} />
          <span>Profile Settings</span>
          <ChevronRight size={14} />
          <span className="text-gray-700">Change Password</span>
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
              <div className="space-y-5">
                <div>
                  <label htmlFor="current" className={labelClass}>Old Password</label>
                  <input
                    id="current"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className={inputClass}
                    placeholder="Old Password"
                    required
                    disabled={saving}
                  />
                </div>

                <div>
                  <label htmlFor="new" className={labelClass}>Password</label>
                  <input
                    id="new"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className={inputClass}
                    placeholder="Password"
                    required
                    minLength={6}
                    disabled={saving}
                  />
                </div>

                <div>
                  <label htmlFor="confirm" className={labelClass}>Confirm Password</label>
                  <input
                    id="confirm"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={inputClass}
                    placeholder="Confirm Password"
                    required
                    disabled={saving}
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-sm bg-[#00a99d] px-6 text-sm font-medium text-white transition hover:bg-[#008f85] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving && <LoaderCircle size={15} className="animate-spin" />}
                  {saving ? "Processing..." : "Change Password"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
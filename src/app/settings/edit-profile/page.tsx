
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
  Camera,
  LoaderCircle,
  CheckCircle,
  AlertCircle,
  UserRound,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type Profile = {
  id: string;
  full_name: string | null;
  role: string;
  slug: string | null;
  phone: string | null;
  tax_registration_number: string | null;
  cover_image_type: string | null;
  notify_on_message: boolean | null;
  show_email: boolean | null;
  show_phone: boolean | null;
  avatar_url: string | null;
  cover_image_url: string | null;
};

const sidebarItems = [
  {
    label: "Update Profile",
    icon: UserRoundCog,
    href: "/settings/edit-profile",
  },
  {
    label: "Location",
    icon: MapPin,
    href: "/settings/location",
  },
  {
    label: "Shipping Address",
    icon: Truck,
    href: "/settings/shipping-address",
  },
  {
    label: "Affiliate Links",
    icon: Link2,
    href: "/settings/affiliate-links",
  },
  {
    label: "Social Media",
    icon: Share2,
    href: "/settings/social-media",
  },
  {
    label: "Change Password",
    icon: LockKeyhole,
    href: "/settings/change-password",
  },
  {
    label: "Delete Account",
    icon: UserRoundX,
    href: "/settings/delete-account",
  },
];

export default function EditProfilePage() {
  const router = useRouter();
  const pathname = usePathname();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [slug, setSlug] = useState("");
  const [phone, setPhone] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [coverType, setCoverType] = useState("full_width");
  const [notifyOnMessage, setNotifyOnMessage] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    let active = true;

    async function loadProfile() {
      try {
        const supabase = createClient();

        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser();

        if (authError) throw authError;

        if (!user) {
          router.replace("/login");
          return;
        }

        const { data, error } = await supabase
          .from("profiles")
          .select(
            "id, full_name, role, slug, phone, tax_registration_number, cover_image_type, notify_on_message, show_email, show_phone, avatar_url, cover_image_url"
          )
          .eq("id", user.id)
          .maybeSingle();

        if (error) throw error;

        if (!data) {
          throw new Error("Profile information could not be found.");
        }

        if (!active) return;

        const item = data as Profile;
        const nameParts = (item.full_name ?? "").trim().split(/\s+/);

        setProfile(item);
        setEmail(user.email ?? "");
        setFirstName(nameParts[0] ?? "");
        setLastName(nameParts.slice(1).join(" "));
        setSlug(item.slug ?? "");
        setPhone(item.phone ?? "");
        setTaxNumber(item.tax_registration_number ?? "");
        setCoverType(item.cover_image_type ?? "full_width");
        setNotifyOnMessage(item.notify_on_message ?? false);
        setShowEmail(item.show_email ?? false);
        setShowPhone(item.show_phone ?? false);
      } catch (error) {
        console.error("Failed to load profile:", error);

        if (active) {
          setErrorMessage(
            error instanceof Error
              ? error.message
              : "Unable to load profile."
          );
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    void loadProfile();

    return () => {
      active = false;
    };
  }, [router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!profile || saving) return;

    const first = firstName.trim();
    const last = lastName.trim();
    const fullName = [first, last].filter(Boolean).join(" ");

    if (!first) {
      setErrorMessage("Please enter your first name.");
      return;
    }

    setSaving(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const supabase = createClient();

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user || user.id !== profile.id) {
        throw new Error(
          "Your session has expired. Please log in again."
        );
      }

      if (email.trim() !== (user.email ?? "")) {
        const { error } = await supabase.auth.updateUser({
          email: email.trim(),
        });

        if (error) throw error;
      }

      const { data, error } = await supabase
        .from("profiles")
        .update({
          full_name: fullName,
          slug: slug.trim() || null,
          phone: phone.trim() || null,
          tax_registration_number: taxNumber.trim() || null,
          cover_image_type: coverType,
          notify_on_message: notifyOnMessage,
          show_email: showEmail,
          show_phone: showPhone,
        })
        .eq("id", user.id)
        .select(
          "id, full_name, role, slug, phone, tax_registration_number, cover_image_type, notify_on_message, show_email, show_phone, avatar_url, cover_image_url"
        )
        .single();

      if (error) throw error;

      setProfile(data as Profile);

      setSuccessMessage(
        email.trim() !== (user.email ?? "")
          ? "Profile saved. Check your email to confirm the email address change."
          : "Profile updated successfully."
      );

      router.refresh();
    } catch (error) {
      console.error("Failed to save profile:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to save profile. Please try again."
      );
    } finally {
      setSaving(false);
    }
  }

  const inputClass =
    "block h-10 w-full rounded-sm border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-teal-600";

  const labelClass =
    "mb-2 block text-sm font-medium text-gray-800";

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white">
        <LoaderCircle className="animate-spin text-teal-600" size={28} />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-7">
        <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-teal-600">
            Home
          </Link>
          <span>/</span>
          <span>Profile Settings</span>
          <span>/</span>
          <span className="text-gray-800">Update Profile</span>
        </nav>

        <h1 className="mb-5 text-2xl font-medium">
          Profile Settings
        </h1>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[193px_minmax(0,1fr)]">
          <aside className="space-y-0.5">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex min-h-10 items-center gap-3 rounded-sm px-3 text-sm transition ${
                    isActive
                      ? "bg-gray-100 text-gray-800"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.8} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </aside>

          <section className="min-w-0">
            <form onSubmit={handleSubmit}>
              <div className="relative mb-20 h-52 border border-gray-100 bg-gray-50">
                {profile?.cover_image_url && (
                  <img
                    src={profile.cover_image_url}
                    alt="Profile cover"
                    className="h-full w-full object-cover"
                  />
                )}

                <div className="absolute -bottom-9 left-4 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-orange-50 shadow-sm">
                  {profile?.avatar_url ? (
                    <img
                      src={profile.avatar_url}
                      alt="Profile avatar"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-orange-50 text-orange-200">
                      <UserRound size={66} strokeWidth={1} />
                    </div>
                  )}
                </div>

                <span
                  aria-label="Profile cover image"
                  title="Profile cover image"
                  className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-white"
                >
                  <Camera size={16} />
                </span>

                <span
                  aria-label="Profile picture"
                  title="Profile picture"
                  className="absolute bottom-0 left-40 flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white"
                >
                  <Camera size={19} />
                </span>
              </div>

              <p className="mb-5 text-xs text-gray-500">
                *Click on the save changes button after selecting your image
              </p>

              {errorMessage && (
                <div
                  role="alert"
                  className="mb-4 flex items-start gap-2 border border-red-200 bg-red-50 p-3 text-sm text-red-600"
                >
                  <AlertCircle size={17} className="mt-0.5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {successMessage && (
                <div
                  role="status"
                  className="mb-4 flex items-start gap-2 border border-green-200 bg-green-50 p-3 text-sm text-green-700"
                >
                  <CheckCircle size={17} className="mt-0.5 shrink-0" />
                  <span>{successMessage}</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="slug" className={labelClass}>
                    Slug
                  </label>
                  <input
                    id="slug"
                    value={slug}
                    onChange={(event) => setSlug(event.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First Name
                  </label>
                  <input
                    id="firstName"
                    required
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="taxNumber" className={labelClass}>
                    Tax Registration Number
                  </label>
                  <input
                    id="taxNumber"
                    value={taxNumber}
                    onChange={(event) => setTaxNumber(event.target.value)}
                    placeholder="Tax Registration Number"
                    className={inputClass}
                  />
                </div>

                <div className="pt-1">
                  <span className={labelClass}>Cover Image Type</span>

                  <div className="flex flex-wrap items-center gap-10">
                    <label className="flex cursor-pointer items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="coverType"
                        value="full_width"
                        checked={coverType === "full_width"}
                        onChange={() => setCoverType("full_width")}
                        className="h-4 w-4 accent-teal-600"
                      />
                      Full Width
                    </label>

                    <label className="flex cursor-pointer items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="coverType"
                        value="boxed"
                        checked={coverType === "boxed"}
                        onChange={() => setCoverType("boxed")}
                        className="h-4 w-4 accent-teal-600"
                      />
                      Boxed
                    </label>
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  <label className="flex cursor-pointer items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={notifyOnMessage}
                      onChange={(event) =>
                        setNotifyOnMessage(event.target.checked)
                      }
                      className="h-4 w-4 accent-teal-600"
                    />
                    Send me an email when someone sends me a message
                  </label>

                  <label className="flex cursor-pointer items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={showEmail}
                      onChange={(event) =>
                        setShowEmail(event.target.checked)
                      }
                      className="h-4 w-4 accent-teal-600"
                    />
                    Show my email address
                  </label>

                  <label className="flex cursor-pointer items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={showPhone}
                      onChange={(event) =>
                        setShowPhone(event.target.checked)
                      }
                      className="h-4 w-4 accent-teal-600"
                    />
                    Show my phone number
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={saving}
                    className="inline-flex h-9 items-center justify-center gap-2 rounded-sm bg-teal-600 px-5 text-xs font-medium text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {saving && (
                      <LoaderCircle size={14} className="animate-spin" />
                    )}
                    {saving ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

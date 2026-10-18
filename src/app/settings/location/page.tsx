
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

type LocationData = {
  country: string;
  state: string;
  city: string;
  address: string;
  zip_code: string;
};

const countries = [
  {
    name: "Indonesia",
    states: [
      "Aceh",
      "Bali",
      "Banten",
      "Bengkulu",
      "DI Yogyakarta",
      "DKI Jakarta",
      "Gorontalo",
      "Jambi",
      "Jawa Barat",
      "Jawa Tengah",
      "Jawa Timur",
      "Kalimantan Barat",
      "Kalimantan Selatan",
      "Kalimantan Tengah",
      "Kalimantan Timur",
      "Kalimantan Utara",
      "Kepulauan Bangka Belitung",
      "Kepulauan Riau",
      "Lampung",
      "Maluku",
      "Maluku Utara",
      "Nusa Tenggara Barat",
      "Nusa Tenggara Timur",
      "Papua",
      "Papua Barat",
      "Papua Barat Daya",
      "Papua Pegunungan",
      "Papua Selatan",
      "Papua Tengah",
      "Riau",
      "Sulawesi Barat",
      "Sulawesi Selatan",
      "Sulawesi Tengah",
      "Sulawesi Tenggara",
      "Sulawesi Utara",
      "Sumatera Barat",
      "Sumatera Selatan",
      "Sumatera Utara",
    ],
  },
  {
    name: "Malaysia",
    states: [
      "Johor",
      "Kedah",
      "Kelantan",
      "Kuala Lumpur",
      "Melaka",
      "Negeri Sembilan",
      "Pahang",
      "Penang",
      "Perak",
      "Perlis",
      "Sabah",
      "Sarawak",
      "Selangor",
      "Terengganu",
    ],
  },
  {
    name: "Singapore",
    states: ["Central", "East", "North", "North-East", "West"],
  },
  {
    name: "United States",
    states: [
      "California",
      "Florida",
      "New York",
      "Texas",
      "Washington",
    ],
  },
];

const sidebarItems = [
  {
    label: "Update Profile",
    href: "/settings/edit-profile",
    icon: UserRoundCog,
  },
  {
    label: "Location",
    href: "/settings/location",
    icon: MapPin,
  },
  {
    label: "Shipping Address",
    href: "/settings/shipping-address",
    icon: Truck,
  },
  {
    label: "Affiliate Links",
    href: "/settings/affiliate-links",
    icon: Link2,
  },
  {
    label: "Social Media",
    href: "/settings/social-media",
    icon: Share2,
  },
  {
    label: "Change Password",
    href: "/settings/change-password",
    icon: LockKeyhole,
  },
  {
    label: "Delete Account",
    href: "/settings/delete-account",
    icon: UserRoundX,
  },
];

const inputClass =
  "block h-10 w-full rounded-sm border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none placeholder:text-gray-400 focus:border-teal-600";

const selectClass =
  "block h-10 w-full rounded-sm border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-teal-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400";

const labelClass =
  "mb-2 block text-sm font-medium text-gray-800";

export default function LocationPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [location, setLocation] = useState<LocationData>({
    country: "",
    state: "",
    city: "",
    address: "",
    zip_code: "",
  });

  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    let active = true;

    async function loadLocation() {
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
          .select("id, country, state, city, address, zip_code")
          .eq("id", user.id)
          .maybeSingle();

        if (error) throw error;

        if (!data) {
          throw new Error(
            "Profile tidak ditemukan. Pastikan data profil sudah tersedia."
          );
        }

        if (!active) return;

        setUserId(user.id);

        setLocation({
          country: data.country ?? "",
          state: data.state ?? "",
          city: data.city ?? "",
          address: data.address ?? "",
          zip_code: data.zip_code ?? "",
        });
      } catch (error) {
        console.error("Failed to load location:", error);

        if (active) {
          setErrorMessage(
            error instanceof Error
              ? error.message
              : "Gagal memuat informasi lokasi."
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadLocation();

    return () => {
      active = false;
    };
  }, [router]);

  function updateField(field: keyof LocationData, value: string) {
    setLocation((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrorMessage("");
    setSuccessMessage("");
  }

  function handleCountryChange(country: string) {
    setLocation((previous) => ({
      ...previous,
      country,
      state: "",
    }));

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

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user || user.id !== userId) {
        throw new Error(
          "Sesi login berakhir. Silakan login kembali."
        );
      }

      const { error } = await supabase
        .from("profiles")
        .update({
          country: location.country.trim() || null,
          state: location.state.trim() || null,
          city: location.city.trim() || null,
          address: location.address.trim() || null,
          zip_code: location.zip_code.trim() || null,
        })
        .eq("id", user.id);

      if (error) throw error;

      setSuccessMessage("Location updated successfully.");
      router.refresh();
    } catch (error) {
      console.error("Failed to save location:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Gagal menyimpan lokasi. Silakan coba lagi."
      );
    } finally {
      setSaving(false);
    }
  }

  const selectedCountry = countries.find(
    (country) => country.name === location.country
  );

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white">
        <LoaderCircle
          size={28}
          className="animate-spin text-teal-600"
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-700">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-7 sm:px-6 lg:px-8">
        <nav className="mb-5 flex flex-wrap items-center gap-1 text-xs text-gray-400">
          <Link href="/" className="hover:text-teal-600">
            Home
          </Link>

          <ChevronRight size={14} />

          <span>Profile Settings</span>

          <ChevronRight size={14} />

          <span className="text-gray-700">Location</span>
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
            <div className="mb-6 border-b border-gray-200 pb-4">
              <h2 className="text-lg font-medium text-gray-900">
                Location
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Manage your address and location information.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {errorMessage && (
                <div
                  role="alert"
                  className="mb-5 flex items-start gap-2 border border-red-200 bg-red-50 p-3 text-sm text-red-600"
                >
                  <AlertCircle
                    size={17}
                    className="mt-0.5 shrink-0"
                  />
                  <span>{errorMessage}</span>
                </div>
              )}

              {successMessage && (
                <div
                  role="status"
                  className="mb-5 flex items-start gap-2 border border-green-200 bg-green-50 p-3 text-sm text-green-700"
                >
                  <CheckCircle
                    size={17}
                    className="mt-0.5 shrink-0"
                  />
                  <span>{successMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="country" className={labelClass}>
                    Country
                  </label>

                  <select
                    id="country"
                    autoComplete="country-name"
                    value={location.country}
                    onChange={(event) =>
                      handleCountryChange(event.target.value)
                    }
                    className={selectClass}
                  >
                    <option value="">Select Country</option>

                    {countries.map((country) => (
                      <option
                        key={country.name}
                        value={country.name}
                      >
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="state" className={labelClass}>
                    State / Province
                  </label>

                  <select
                    id="state"
                    autoComplete="address-level1"
                    value={location.state}
                    onChange={(event) =>
                      updateField("state", event.target.value)
                    }
                    className={selectClass}
                    disabled={!location.country || !selectedCountry}
                  >
                    <option value="">Select State / Province</option>

                    {(selectedCountry?.states ?? []).map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="address" className={labelClass}>
                    Address
                  </label>

                  <input
                    id="address"
                    autoComplete="street-address"
                    value={location.address}
                    onChange={(event) =>
                      updateField("address", event.target.value)
                    }
                    className={inputClass}
                    placeholder="Enter your address"
                  />
                </div>

                <div>
                  <label htmlFor="zip_code" className={labelClass}>
                    ZIP / Postal Code
                  </label>

                  <input
                    id="zip_code"
                    autoComplete="postal-code"
                    value={location.zip_code}
                    onChange={(event) =>
                      updateField("zip_code", event.target.value)
                    }
                    className={inputClass}
                    placeholder="Enter your postal code"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end border-t border-gray-200 pt-5">
                <button
                  type="submit"
                  disabled={saving || !userId}
                  className="inline-flex h-9 items-center justify-center gap-2 rounded-sm bg-teal-600 px-5 text-sm font-medium text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving && (
                    <LoaderCircle
                      size={15}
                      className="animate-spin"
                    />
                  )}

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

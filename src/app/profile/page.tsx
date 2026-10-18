
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  UserRound,
  ChevronRight,
  LoaderCircle,
  AlertCircle,
  Users,
  Star,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type Profile = {
  id: string;
  full_name: string | null;
  role: string;
  created_at: string;
};

type ProfileTab = "followers" | "following" | "reviews";

const tabs: {
  id: ProfileTab;
  label: string;
  count: number;
}[] = [
  { id: "followers", label: "Followers", count: 0 },
  { id: "following", label: "Following", count: 0 },
  { id: "reviews", label: "My Reviews", count: 0 },
];

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeTab, setActiveTab] =
    useState<ProfileTab>("followers");

  useEffect(() => {
    let active = true;

    async function loadProfile() {
      const supabase = createClient();

      try {
        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser();

        if (authError) throw authError;

        if (!user) {
          if (active) {
            setErrorMessage("Please log in to view this profile.");
            setLoading(false);
          }
          return;
        }

        const { data, error } = await supabase
          .from("profiles")
          .select("id, full_name, role, created_at")
          .eq("id", user.id)
          .maybeSingle();

        if (error) throw error;

        if (!data) {
          if (active) {
            setErrorMessage("Profile information could not be found.");
            setLoading(false);
          }
          return;
        }

        if (active) {
          setProfile(data as Profile);
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to load profile:", error);

        if (active) {
          setErrorMessage(
            "Unable to load profile information. Please try again."
          );
          setLoading(false);
        }
      }
    }

    void loadProfile();

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-[50vh] items-center justify-center bg-white">
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <LoaderCircle size={20} className="animate-spin" />
          Loading profile...
        </div>
      </main>
    );
  }

  if (errorMessage || !profile) {
    return (
      <main className="min-h-[50vh] bg-white px-5 py-16">
        <div className="mx-auto max-w-xl text-center">
          <AlertCircle
            size={36}
            className="mx-auto mb-4 text-gray-400"
          />
          <h1 className="text-xl font-semibold text-gray-800">
            Profile
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            {errorMessage || "Profile information is unavailable."}
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center rounded bg-[#00a99d] px-5 py-2.5 text-sm text-white hover:bg-[#008f85]"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const displayName =
    profile.full_name?.trim() || "Modesy Member";

  const memberSince = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date(profile.created_at));

  const activeTabLabel =
    tabs.find((tab) => tab.id === activeTab)?.label ?? "Followers";

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-1.5 text-sm">
          <Link
            href="/"
            className="text-gray-400 transition hover:text-[#00a99d]"
          >
            Home
          </Link>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-gray-700">Followers</span>
        </div>

        {/* Profile header */}
        <section className="flex flex-col gap-6 sm:flex-row sm:items-start">
          {/* Avatar */}
          <div className="flex h-50 w-50 shrink-0 items-center justify-center overflow-hidden rounded bg-[#f0e6e1]">
            <svg
              viewBox="0 0 200 200"
              role="img"
              aria-label="Default profile avatar illustration"
              className="h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="200" height="200" fill="#f3d4c8" />
              <circle cx="135" cy="65" r="43" fill="#e99c80" />
              <path
                d="M0 76 Q22 45 45 63 Q62 49 80 75 Q98 82 110 98 L200 58 L200 200 L0 200Z"
                fill="#e9d9d0"
              />
              <path
                d="M0 100 Q25 85 45 112 Q65 98 82 124 Q108 114 130 139 Q160 123 200 144 L200 200 L0 200Z"
                fill="#d3c6c0"
              />
              <path
                d="M0 161 Q20 151 40 160 Q66 143 89 163 Q117 144 139 158 Q167 136 200 151 L200 200 L0 200Z"
                fill="#536b78"
              />
              <path
                d="M0 181 Q22 169 42 181 Q70 161 91 180 Q119 164 142 181 Q168 159 200 173 L200 200 L0 200Z"
                fill="#293347"
              />
            </svg>
          </div>

          {/* User information */}
          <div className="min-w-0 pt-0.5">
            <h1 className="wrap-break-word text-3xl font-semibold leading-tight text-[#292929]">
              {displayName}
            </h1>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              <span
                className="h-3.5 w-3.5 rounded-full bg-[#80ca86]"
                aria-label="Online status indicator"
              />
              <span>Last seen:</span>
              <span className="text-gray-600">Just Now</span>
            </div>

            <p className="mt-7 text-base text-gray-500">
              Member since {memberSince}
            </p>
          </div>
        </section>

        {/* Profile tabs */}
        <section className="mt-14">
          <div
            role="tablist"
            aria-label="Profile activity"
            className="flex overflow-x-auto border-b border-gray-200"
          >
            {tabs.map((tab) => {
              const selected = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="profile-tab-content"
                  onClick={() => setActiveTab(tab.id)}
                  className={`-mb-px flex shrink-0 items-center justify-center gap-1.5 border-b-2 px-5 py-4 text-sm transition sm:min-w-49 sm:text-base ${
                    selected
                      ? "border-[#292929] font-medium text-black"
                      : "border-transparent text-gray-700 hover:text-[#00a99d]"
                  }`}
                >
                  {tab.label}
                  <span>({tab.count})</span>
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div
            id="profile-tab-content"
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="flex min-h-47.5 items-center justify-center px-4 py-12"
          >
            <div className="text-center">
              {activeTab === "followers" && (
                <Users
                  size={27}
                  strokeWidth={1.5}
                  className="mx-auto mb-3 text-gray-300"
                />
              )}

              {activeTab === "following" && (
                <UserRound
                  size={27}
                  strokeWidth={1.5}
                  className="mx-auto mb-3 text-gray-300"
                />
              )}

              {activeTab === "reviews" && (
                <Star
                  size={27}
                  strokeWidth={1.5}
                  className="mx-auto mb-3 text-gray-300"
                />
              )}

              <p className="text-base text-gray-500">
                No records found!
              </p>
              <p className="mt-1 text-xs text-gray-400">
                {activeTabLabel}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

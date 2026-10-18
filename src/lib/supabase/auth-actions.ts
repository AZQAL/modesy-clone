"use client";

import { createClient } from "@/lib/supabase/client";

export type UserRole =
  | "super_admin"
  | "moderator"
  | "vendor"
  | "member";

export type LoginResult =
  | {
      success: true;
      role: UserRole;
    }
  | {
      success: false;
      message: string;
    };

export async function loginWithPassword(
  email: string,
  password: string,
): Promise<LoginResult> {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  });

  if (error) {
    console.error("Login gagal:", error.message);

    return {
      success: false,
      message: error.message,
    };
  }

  if (!data.user) {
    return {
      success: false,
      message: "Data pengguna tidak ditemukan.",
    };
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", data.user.id)
    .maybeSingle();

  if (profileError || !profile) {
    console.error("Profil gagal dimuat:", profileError?.message);

    return {
      success: false,
      message:
        "Login berhasil, tetapi profil belum ditemukan. Periksa tabel profiles.",
    };
  }

  const allowedRoles: UserRole[] = [
    "super_admin",
    "moderator",
    "vendor",
    "member",
  ];

  if (!allowedRoles.includes(profile.role as UserRole)) {
    return {
      success: false,
      message: "Role akun tidak dikenali.",
    };
  }

  return {
    success: true,
    role: profile.role as UserRole,
  };
}

export async function logoutUser() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Logout gagal:", error.message);
    return {
      success: false,
      message: error.message,
    };
  }

  return { success: true };
}
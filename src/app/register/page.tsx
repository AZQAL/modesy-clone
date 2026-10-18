
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, Eye, EyeOff, UserRound } from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const inputClass =
        "mt-2 w-full border border-gray-300 px-3 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-teal-600";

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setMessage("");
        setSuccess(false);

        const cleanName = name.trim();
        const cleanEmail = email.trim();

        if (!cleanName) {
            setMessage("Nama lengkap wajib diisi.");
            return;
        }

        if (password.length < 6) {
            setMessage("Password harus terdiri dari minimal 6 karakter.");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Konfirmasi password tidak cocok.");
            return;
        }

        setLoading(true);

        try {
            const supabase = createClient();

            const { data, error } = await supabase.auth.signUp({
                email: cleanEmail,
                password,
                options: {
                    data: {
                        full_name: cleanName,
                    },
                },
            });

            if (error) {
                setMessage(error.message);
                return;
            }

            setSuccess(true);

            if (data.session) {
                setMessage(
                    "Pendaftaran berhasil! Akun kamu sudah dibuat dan berhasil masuk."
                );
            } else {
                setMessage(
                    "Pendaftaran berhasil! Periksa email kamu untuk mengonfirmasi akun sebelum login."
                );
            }

            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        } catch {
            setMessage(
                "Terjadi kesalahan saat menghubungkan ke server. Periksa koneksi dan konfigurasi Supabase."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <SiteHeader />

            <main className="min-h-[75vh] bg-white px-4 py-10 sm:py-14">
                <div className="mx-auto w-full max-w-lg">
                    <Link
                        href="/"
                        className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-teal-700"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>

                    <div className="border border-gray-200 bg-white p-6 sm:p-9">
                        <div className="mb-7 border-b border-gray-200 pb-6">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center bg-teal-50 text-teal-700">
                                <UserRound size={24} />
                            </div>

                            <h1 className="text-2xl font-semibold text-gray-900">
                                Create an Account
                            </h1>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Register with VYRO to start shopping.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    autoComplete="name"
                                    placeholder="Enter your full name"
                                    required
                                    maxLength={100}
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    placeholder="Enter your email address"
                                    required
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>

                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        autoComplete="new-password"
                                        placeholder="Minimum 6 characters"
                                        required
                                        minLength={6}
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        className={`${inputClass} pr-11`}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        className="absolute right-3 top-1/2 mt-1 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Confirm Password
                                </label>

                                <div className="relative">
                                    <input
                                        id="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        autoComplete="new-password"
                                        placeholder="Re-enter your password"
                                        required
                                        value={confirmPassword}
                                        onChange={(event) =>
                                            setConfirmPassword(event.target.value)
                                        }
                                        className={`${inputClass} pr-11`}
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(!showConfirmPassword)
                                        }
                                        aria-label={
                                            showConfirmPassword ? "Hide password" : "Show password"
                                        }
                                        className="absolute right-3 top-1/2 mt-1 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {message && (
                                <p
                                    role="status"
                                    className={`border p-3 text-sm leading-6 ${success
                                            ? "border-green-200 bg-green-50 text-green-700"
                                            : "border-red-200 bg-red-50 text-red-700"
                                        }`}
                                >
                                    {message}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-teal-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? "Creating Account..." : "Create Account"}
                            </button>
                        </form>

                        <div className="mt-6 border-t border-gray-200 pt-5 text-center">
                            <p className="text-sm text-gray-600">
                                Already have an account?{" "}
                                <Link
                                    href="/"
                                    className="font-semibold text-teal-600 hover:text-teal-700 hover:underline"
                                >
                                    Return to Home
                                </Link>
                            </p>
                            <p className="mt-2 text-xs text-gray-400">
                                You can open Login from the website header.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <SiteFooter />
        </>
    );
}

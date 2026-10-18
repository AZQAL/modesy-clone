
"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, X, LockKeyhole, Mail } from "lucide-react";
import { loginWithPassword } from "@/lib/supabase/auth-actions";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginModal({
  isOpen,
  onClose,
}: LoginModalProps) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setShowPassword(false);
      setErrorMessage("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && !loading) {
        onClose();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, loading, onClose]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setErrorMessage("");

    try {
      const result = await loginWithPassword(email, password);

      if (!result.success) {
        setErrorMessage(result.message);
        return;
      }

      // Login berhasil: tetap arahkan pengguna ke halaman utama.
      // Navbar akan membaca sesi dan role untuk menampilkan dropdown profil.
      onClose();
      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error("Login gagal:", error);

      setErrorMessage(
        "Terjadi kesalahan saat login. Silakan coba kembali.",
      );
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 px-4 py-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !loading) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        className="relative w-full max-w-md rounded-md bg-white p-6 shadow-xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          disabled={loading}
          aria-label="Tutup login"
          className="absolute right-4 top-4 rounded p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50"
        >
          <X size={21} />
        </button>

        <div className="mb-6">
          <h2
            id="login-title"
            className="text-2xl font-semibold text-gray-800"
          >
            Login
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Masuk ke akun Modesy kamu untuk melanjutkan.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="login-email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <div className="flex items-center rounded border border-gray-300 focus-within:border-red-400">
              <Mail
                size={18}
                className="ml-3 shrink-0 text-gray-400"
              />

              <input
                id="login-email"
                type="email"
                autoComplete="email"
                placeholder="Masukkan email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                disabled={loading}
                className="w-full rounded bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 disabled:bg-gray-50"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="login-password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <div className="flex items-center rounded border border-gray-300 focus-within:border-red-400">
              <LockKeyhole
                size={18}
                className="ml-3 shrink-0 text-gray-400"
              />

              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Masukkan password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                disabled={loading}
                className="w-full rounded bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 disabled:bg-gray-50"
              />

              <button
                type="button"
                onClick={() => setShowPassword((previous) => !previous)}
                aria-label={
                  showPassword ? "Sembunyikan password" : "Tampilkan password"
                }
                className="mr-3 text-gray-400 transition hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {errorMessage && (
            <div
              role="alert"
              className="rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600"
            >
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-red-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Memproses..." : "Login"}
          </button>
        </form>

        <p className="mt-5 text-center text-xs text-gray-500">
          Dengan login, kamu dapat mengakses fitur sesuai role akunmu.
        </p>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

export default function Form() {
  const params = useSearchParams();
  const router = useRouter();
  const error = params.get("error");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password. Please try again.",
        confirmButtonColor: "#1f2937", // gray-900
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Login Successful 🎉",
        text: "Redirecting you to products...",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        router.push("/products");
      });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-gray-600">
           After Registration Please log in with your credentials
          </p>
          <p className="mt-4 text-center text-black text-sm">
            No account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border bg-white p-6 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div>
            <label className="mb-2 block text-black text-sm font-medium">Email</label>
            <input
              className="w-full rounded-xl text-black border px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-black font-medium">Password</label>
            <input
              className="w-full rounded-xl border text-black px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 p-2 text-sm text-red-700">
              {error}
            </p>
          )}

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full rounded-xl bg-gray-900 px-4 py-2 font-semibold text-white hover:bg-gray-800 disabled:opacity-50 transition"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}

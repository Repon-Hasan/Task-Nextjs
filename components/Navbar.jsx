"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Menu, X } from "lucide-react"; // lightweight icons
import Swal from "sweetalert2";

export default function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
  ];

  const handleSignOut = async () => {
    await signOut({ redirect: false }); // prevent automatic redirect
    Swal.fire({
      icon: "success",
      title: "Signed Out",
      text: "You have successfully signed out.",
      showConfirmButton: false,
      timer: 2000,
    });
    router.push("/"); // redirect to home
  };

  if (status === "loading") {
    return (
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <nav className="flex items-center justify-between px-4 py-3">
          <div className="text-xl font-bold tracking-tight">
            {process.env.NEXT_PUBLIC_APP_NAME || "NextShop"}
          </div>
          <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
        </nav>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:text-gray-900 transition"
        >
          {process.env.NEXT_PUBLIC_APP_NAME || "NextShop"}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {session ? (
            <>
              <Link
                href="/dashboard/add-product"
                className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                  pathname === "/dashboard/add-product"
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Add Product
              </Link>

              <button
                onClick={handleSignOut}
                className="rounded-xl px-3 py-2 text-sm font-medium text-gray-700 bg-blue-500 hover:bg-gray-300 transition"
              >
                Sign out
              </button>
            </>
          ) : (
            <Link
              href="/register"
              className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                pathname === "/register"
                  ? "bg-gray-900 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Register
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white shadow-sm">
          <div className="flex flex-col space-y-2 px-4 py-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {session ? (
              <>
                <Link
                  href="/dashboard/add-product"
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    pathname === "/dashboard/add-product"
                      ? "bg-gray-900 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Add Product
                </Link>

                <button
                  onClick={() => {
                    setMobileOpen(false);
                    handleSignOut();
                  }}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition text-left"
                >
                  Sign out
                </button>
              </>
            ) : (
              <Link
                href="/register"
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  pathname === "/register"
                    ? "bg-gray-900 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Register
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

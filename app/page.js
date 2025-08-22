"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from your API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/items");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data.products.slice(0, 3)); // Only top 3 highlights
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="space-y-16">
      {/* Hero */}
    <section className="relative rounded-xl bg-gray-900 px-6 py-20 text-white shadow-sm overflow-hidden">
  {/* Background image with overlay */}
  <div className="absolute inset-0">
    <img
      src="https://i.ibb.co.com/r20DdPm2/yy.jpg"
      alt="Shopping background"
      className="w-full h-full object-cover "
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-gray-900/70 to-black/70" />
  </div>

  <div className="relative mx-auto max-w-4xl text-center">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
    >
      Simple Shop, Time Manage ✨
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="mx-auto mb-10 max-w-2xl text-gray-300 text-lg sm:text-xl"
    >
      Discover amazing products effortlessly.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="flex flex-wrap items-center justify-center gap-4"
    >
      <Link
        href="/products"
        className="rounded-2xl bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-200 transition"
      >
        View Products
      </Link>
      <Link
        href="/login"
        className="rounded-2xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition"
      >
        Login
      </Link>
    </motion.div>
  </div>
</section>


      {/* Highlights */}
 {/* Product Highlights Section */}
<section className="py-12">
  <div className="mb-8 flex items-center justify-between">
    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
      ✨ Product Highlights
    </h2>
    <Link
      href="/products"
      className="text-sm font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
    >
      See all →
    </Link>
  </div>

  {loading ? (
    <div className="flex justify-center items-center py-10">
      <p className="animate-pulse text-gray-600 dark:text-gray-400">Loading products...</p>
    </div>
  ) : products.length === 0 ? (
    <div className="flex justify-center items-center py-10">
      <p className="text-gray-600 dark:text-gray-400">No products found.</p>
    </div>
  ) : (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p, index) => (
        <motion.div
          key={p._id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <ProductCard product={p} />
        </motion.div>
      ))}
    </div>
  )}
</section>

    </div>
  );
}

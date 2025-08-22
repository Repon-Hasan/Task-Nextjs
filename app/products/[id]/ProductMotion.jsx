"use client"; // required for framer-motion

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductMotion({ product }) {
  if (!product) return null; // safety check

  return (
    <article className="grid gap-8 lg:grid-cols-2 p-6 md:p-12 bg-gray-50 min-h-screen">
      {/* Product Image */}
      <motion.div
        className="relative aspect-[4/3] overflow-hidden rounded-3xl border bg-white shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={product.image || "/placeholder.png"} // fallback image
          alt={product.name || "Product Image"}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Product Info */}
      <motion.div
        className="space-y-6 flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-4xl font-extrabold text-gray-900">{product.name || "Product Name"}</h1>
        <p className="text-gray-700 text-lg">{product.description || "No description available."}</p>
        <p className="text-3xl font-semibold text-gray-900">${product.price || "0.00"}</p>

        {/* Additional Information */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">About NextShop</h2>
          <p className="text-gray-600">
            NextShop is your one-stop platform for browsing and purchasing high-quality products online. 
            Our mission is to provide a simple, seamless shopping experience with a modern UI and reliable service.
          </p>
          <h2 className="text-2xl font-bold text-gray-800">Product Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>High-quality images and descriptions</li>
            <li>Latest products added frequently</li>
            <li>Secure checkout with NextAuth authentication</li>
            <li>Easy to manage products in your dashboard</li>
          </ul>
        </div>
      </motion.div>
    </article>
  );
}

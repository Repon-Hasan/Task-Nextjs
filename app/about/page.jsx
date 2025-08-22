"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About <span className="text-blue-600">NextShop</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            NextShop is your trusted online shopping destination, built with
            modern technology to provide a fast, secure, and enjoyable shopping
            experience. From everyday essentials to trending products, we bring
            everything closer to you — anytime, anywhere.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Image */}
          <motion.img
            src="https://images.unsplash.com/photo-1556742400-b5b7c5121f99?auto=format&fit=crop&w=800&q=80"
            alt="Shopping Experience"
            className="rounded-2xl shadow-lg w-full object-cover"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              Why Choose NextShop?
            </h3>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✔</span>
                <span>
                  <strong>Wide Product Range:</strong> From electronics to
                  lifestyle, we offer diverse categories for every need.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✔</span>
                <span>
                  <strong>Fast & Secure Checkout:</strong> Smooth ordering
                  process with multiple payment options.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✔</span>
                <span>
                  <strong>User-Friendly Experience:</strong> Simple navigation
                  and mobile-optimized interface.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✔</span>
                <span>
                  <strong>Trusted by Customers:</strong> Secure transactions and
                  reliable customer support you can count on.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

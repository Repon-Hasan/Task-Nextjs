"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Product Added!",
          text: "Your product has been added successfully.",
          showConfirmButton: false,
          timer: 2000,
        });
        setFormData({ name: "", description: "", price: "", image: "" });

        // Redirect to products page after 2 seconds
        setTimeout(() => {
          router.push("/products");
        }, 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.error || "Something went wrong!",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message || "Something went wrong!",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-white border rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Add New Product</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          rows={4}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </form>

      {formData.image && (
        <div className="mt-6 text-center">
          <p className="font-semibold text-gray-700 mb-2">Image Preview:</p>
          <img
            src={formData.image}
            alt="Preview"
            className="w-40 h-40 object-cover mx-auto rounded-lg border"
          />
        </div>
      )}
    </div>
  );
}

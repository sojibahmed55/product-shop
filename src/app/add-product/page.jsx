"use client";

import React, { useState } from "react";

export default function AddProductPage() {
  const [form, setForm] = useState({ name: "", img: "", description: "", price: "" });
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          img: form.img,
          description: form.description,
          price: Number(form.price),
        }),
      });
      if (res.ok) {
        setSuccess("🚀 Product added successfully!");
        setForm({ name: "", img: "", description: "", price: "" });
      } else {
        const data = await res.json();
        setSuccess(data.error || "Failed to add product.");
      }
    } catch (err) {
      setSuccess("Error adding product.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-950 via-purple-950 to-black overflow-hidden">
      {/* Neon glowing circles */}
      <div className="absolute w-[700px] h-[700px] bg-purple-700/30 blur-[180px] rounded-full -top-40 -left-40 animate-pulse"></div>
      <div className="absolute w-[600px] h-[600px] bg-cyan-600/20 blur-[160px] rounded-full bottom-0 right-0 animate-pulse"></div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg relative p-10 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.8)] transition-all duration-500"
      >
        <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          ➕ Add New Product
        </h2>

        {/* Product Name */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-200">Product Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-5 py-3 text-white placeholder-gray-400 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all"
            placeholder="Enter product name"
            required
          />
        </div>

        {/* Image URL */}
        <div className="space-y-2 mt-5">
          <label className="block text-sm font-semibold text-gray-200">Product Image URL</label>
          <input
            type="text"
            name="img"
            value={form.img}
            onChange={handleChange}
            className="w-full px-5 py-3 text-white placeholder-gray-400 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all"
            placeholder="Enter image URL"
            required
          />
        </div>

        {/* Description */}
        <div className="space-y-2 mt-5">
          <label className="block text-sm font-semibold text-gray-200">Product Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-5 py-3 text-white placeholder-gray-400 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all"
            placeholder="Enter product description"
            required
          />
        </div>

        {/* Price */}
        <div className="space-y-2 mt-5">
          <label className="block text-sm font-semibold text-gray-200">Product Price $</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full px-5 py-3 text-white placeholder-gray-400 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all"
            placeholder="Enter product price"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="mt-8 w-full py-4 text-lg font-bold tracking-wide text-white rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:shadow-[0_0_40px_rgba(236,72,153,0.8)] hover:scale-[1.02] transition-all"
        >
          {loading ? "🚀 Adding..." : "✨ Add Product"}
        </button>

        {/* Success/Error */}
        {success && (
          <p className="text-center text-green-400 font-semibold mt-6 animate-pulse">
            {success}
          </p>
        )}
      </form>
    </div>
  );
}

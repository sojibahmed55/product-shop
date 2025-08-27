"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

function DetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/products`);
        const data = await res.json();
        const found = data.find((p) => p._id === id);
        setProduct(found);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
      setLoading(false);
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-950 to-black text-white text-xl font-semibold">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-red-400 text-lg">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-black via-gray-900 to-purple-950 p-6 relative overflow-hidden">
      {/* Glowing background orbs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-600/30 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/20 blur-2xl rounded-full animate-bounce"></div>

      {/* Card */}
      <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.5)] p-10 w-full max-w-lg text-center">
        {product.img && (
          <img
            src={product.img}
            alt={product.name}
            className="w-56 h-56 object-cover rounded-2xl mx-auto mb-6 shadow-[0_0_25px_rgba(236,72,153,0.5)]"
          />
        )}
        <h2 className="text-3xl font-extrabold mb-3 text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text drop-shadow-lg">
          {product.name}
        </h2>
        <p className="text-gray-300 mb-4 leading-relaxed">{product.description}</p>
        <span className="block text-2xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 text-transparent bg-clip-text mb-6">
          ${product.price}
        </span>
        <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold rounded-2xl shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:scale-105 hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] transition-all duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default DetailsPage;

"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const handleViewDetails = (id) => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-black py-20 relative overflow-hidden">
      {/* Glowing Background Effects */}
      <div className="absolute w-[800px] h-[800px] bg-purple-700/30 blur-[180px] rounded-full -top-40 -left-40 animate-pulse"></div>
      <div className="absolute w-[600px] h-[600px] bg-cyan-600/20 blur-[160px] rounded-full bottom-0 right-0 animate-pulse"></div>

      <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
        🚀 All Products
      </h2>

      {loading ? (
        <LoadingSpinner />
      ) : products.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">No products found.</p>
      ) : (
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-10 px-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(236,72,153,0.6)] transition-all duration-500 p-6 flex flex-col items-center hover:scale-[1.03]"
            >
              {/* Image */}
              {product.img && (
                <div className="overflow-hidden rounded-2xl mb-4 w-full h-48 flex items-center justify-center bg-black/20">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-all duration-500"
                  />
                </div>
              )}

              {/* Name */}
              <h3 className="text-2xl font-bold text-white mb-2 tracking-wide group-hover:text-purple-300 transition">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-center text-sm mb-4 line-clamp-3">
                {product.description}
              </p>

              {/* Price */}
              <span className="text-xl font-extrabold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                ${product.price}
              </span>

              {/* Button */}
              <button
                onClick={() => handleViewDetails(product._id)}
                className="mt-auto px-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:shadow-[0_0_40px_rgba(236,72,153,0.8)] transition-all hover:scale-105"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsPage;

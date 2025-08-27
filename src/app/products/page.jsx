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
    <div className="min-h-screen bg-gray-900 py-16">
      <h2 className="text-3xl font-bold text-center text-white mb-10">All Products</h2>
      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-400">No products found.</p>
      ) : (
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {products.map(product => (
            <div key={product._id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
              {product.img && (
                <img src={product.img} alt={product.name} className="w-50 h-50 object-cover rounded-xl mb-4" />
              )}
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Name : {product.name}</h3>
              <p className="text-gray-600 mb-3 text-center">Description : {product.description}</p>
              <span className="text-indigo-600 font-bold text-lg mb-2">Price : ${product.price}</span>
              <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg" onClick={() => handleViewDetails(product._id)}>
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
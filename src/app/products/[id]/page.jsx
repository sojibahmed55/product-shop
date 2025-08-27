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
        const found = data.find(p => p._id === id);
        setProduct(found);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
      setLoading(false);
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Loading...</div>;
  }

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-900 text-red-400">Product not found.</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-md w-full">
        {product.img && (
          <img src={product.img} alt={product.name} className="w-48 h-48 object-cover rounded-xl mb-6" />
        )}
        <h2 className="text-2xl font-bold mb-2 text-gray-900">{product.name}</h2>
        <p className="text-gray-600 mb-4 text-center">{product.description}</p>
        <span className="text-indigo-600 font-bold text-xl mb-4">${product.price}</span>
        <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg mt-4">Buy Now</button>
      </div>
    </div>
  );
}

export default DetailsPage;
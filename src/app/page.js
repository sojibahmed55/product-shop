"use client"
import React from 'react'
import Hero from '@/components/Hero'
import Products from '@/components/Products';


function FeaturesSection() {
  return (
    <section className=" relative py-20 bg-gradient-to-br from-gray-950 via-purple-950 to-black overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
    <div className="bg-gradient-to-br from-teal-600 to-blue-700 rounded-2xl p-8 shadow-2xl text-white hover:scale-105 transform transition duration-300">
      <h3 className="text-xl font-bold mb-3">Smart Inventory Control</h3>
      <p>Monitor stock levels, automate alerts, and optimize your inventory effortlessly with our advanced dashboard.</p>
    </div>
    <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-8 shadow-2xl text-white hover:scale-105 transform transition duration-300">
      <h3 className="text-xl font-bold mb-3">AI-Powered Insights</h3>
      <p>Get actionable insights on sales, trends, and customer behavior with real-time AI-powered analytics.</p>
    </div>
    <div className="bg-gradient-to-br from-pink-600 to-red-600 rounded-2xl p-8 shadow-2xl text-white hover:scale-105 transform transition duration-300">
      <h3 className="text-xl font-bold mb-3">24/7 Expert Assistance</h3>
      <p>Our team of product specialists is always ready to help you solve issues, answer questions, and boost your efficiency.</p>
    </div>
  </div>
</section>
  );
}



function Page() {
  return (
    <div>
      <Hero />
      <Products />
      <FeaturesSection />
      
    </div>
  );
}

export default Page
"use client"
import React from 'react'
import Hero from '@/components/Hero'
import Products from '@/components/Products';


function FeaturesSection() {
  return (
    <section className="py-20  backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div className="bg-gradient-to-br from-amber-700 to-indigo-700 rounded-2xl p-8 shadow-lg text-white">
          <h3 className="text-xl font-bold mb-3">Easy Product Management</h3>
          <p>Organize, track, and manage your products with a simple and intuitive dashboard.</p>
        </div>
        <div className="bg-gradient-to-br from-amber-700 to-indigo-700 rounded-2xl p-8 shadow-lg text-white">
          <h3 className="text-xl font-bold mb-3">Secure Authentication</h3>
          <p>Sign in with Google or email/password. Your data is protected with modern security standards.</p>
        </div>
        <div className="bg-gradient-to-br from-amber-700 to-indigo-700 rounded-2xl p-8 shadow-lg text-white">
          <h3 className="text-xl font-bold mb-3">Expert Support</h3>
          <p>Get help from our team of experts whenever you need it. Fast, friendly, and reliable.</p>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 rounded-2xl p-6 shadow-lg">
            <p className="italic mb-4">“This platform made managing my products so much easier. Highly recommended!”</p>
            <span className="font-semibold text-purple-300">— Sarah, Entrepreneur</span>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 shadow-lg">
            <p className="italic mb-4">“The authentication is seamless and secure. I feel safe using it every day.”</p>
            <span className="font-semibold text-purple-300">— Alex, Developer</span>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 shadow-lg">
            <p className="italic mb-4">“Support is fantastic! Quick responses and very helpful.”</p>
            <span className="font-semibold text-purple-300">— Priya, Manager</span>
          </div>
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
      <TestimonialsSection />
    </div>
  );
}

export default Page
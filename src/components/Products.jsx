import React from "react";

const productsData = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound, noise cancellation, and long battery life.",
    price: "$99",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness, receive notifications, and more.",
    price: "$149",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    description: "Portable, waterproof, and powerful sound.",
    price: "$59",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    description: "Ergonomic design, customizable buttons, and RGB lighting.",
    price: "$39",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    description: "Tactile switches, backlit keys, and durable build quality.",
    price: "$89",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    name: "Fitness Tracker",
    description: "Monitor your health, sleep, and daily activity easily.",
    price: "$69",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 7,
    name: "Portable Charger",
    description: "High-capacity, fast charging, and compact design.",
    price: "$29",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 8,
    name: "Smart Home Hub",
    description: "Control all your smart devices from one place.",
    price: "$129",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  }
];

function Products() {
  return (
    <section className="py-16 bg-white/5 backdrop-blur-lg">
      <div className="max-w-[1700px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">Our Products</h2>
        <div className="grid md:grid-cols-4 gap-10">
          {productsData.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
              <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
              <p className="text-gray-600 mb-3 text-center">{product.description}</p>
              <span className="text-indigo-600 font-bold text-lg mb-2">{product.price}</span>
              <button className="mt-2 px-6 py-2 bg-indigo-600 text-white rounded-xl font-semibold shadow hover:bg-indigo-700 transition">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;

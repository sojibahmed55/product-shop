
import React from "react";

const productsData = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound, noise cancellation, and long battery life.",
    price: "$99",
    image:
      "https://assets.gadgetandgear.com/upload/media/1714969802192542.jpeg",
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness, receive notifications, and more.",
    price: "$149",
    image:
      "https://www.gadstyle.com/wp-content/uploads/2023/05/oraimo-watch-pro-smart-watch-6.webp",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    description: "Portable, waterproof, and powerful sound.",
    price: "$59",
    image:
      "https://www.sonysmart.com.bd/public/uploads/all/6nLqFPDHZHHV1YXE8EugDQz8XtqHEgALAiZh5b33.png",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    description: "Ergonomic design, customizable buttons, and RGB lighting.",
    price: "$39",
    image:
      "https://assets.gadgetandgear.com/upload/media/1710230645472956.jpeg",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    description: "Tactile switches, backlit keys, and durable build quality.",
    price: "$89",
    image:
      "https://m.media-amazon.com/images/I/71unK8c-sIL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 6,
    name: "Fitness Tracker",
    description: "Monitor your health, sleep, and daily activity easily.",
    price: "$69",
    image:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1685983818-61gFrSlmofL.jpg?crop=0.726xw:0.726xh;0.146xw,0.128xh&resize=980:*",
  },
  {
    id: 7,
    name: "Portable Charger",
    description: "High-capacity, fast charging, and compact design.",
    price: "$29",
    image:
      "https://techlandbd.com/cache/images/uploads/products/P1842506095/cover_cache_optimize-60.webp",
  },
  {
    id: 8,
    name: "Smart Home Hub",
    description: "Control all your smart devices from one place.",
    price: "$129",
    image:
      "https://blog-cdn.athom.com/uploads/2019/08/Homey-Pro-1-2000x1125.png",
  },
];

function Products() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-950 via-purple-950 to-black overflow-hidden">
      {/* glowing background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[600px] h-[600px] bg-purple-600/20 blur-3xl rounded-full absolute -top-40 -left-20 animate-pulse"></div>
        <div className="w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full absolute bottom-0 right-0 animate-pulse"></div>
      </div>

      <div className="max-w-[1700px] mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg tracking-wide">
           Our Products 
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-[0_0_25px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] overflow-hidden p-6 flex flex-col items-center transition-all duration-500 hover:-translate-y-2"
            >
              {/* floating glow behind image */}
              <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-purple-500/20 to-transparent blur-2xl opacity-70 group-hover:opacity-100 transition"></div>

              <img
                src={product.image}
                alt={product.name}
                className="w-36 h-36 object-cover rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]"
              />
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition">
                {product.name}
              </h3>
              <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                {product.description}
              </p>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-4 drop-shadow-lg">
                {product.price}
              </span>
              <button className="px-8 py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:from-pink-600 hover:to-purple-600 hover:scale-105 transition-all">
                Buy Now 
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;

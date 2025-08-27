import React from "react";

function Hero() {
  return (
    <section className="relative bg-gradient-to-r h-[700px] from-purple-900 via-indigo-900 to-gray-900 text-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500 opacity-20 rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-[1700px] px-6 py-[150px] flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
          Discover <span className="text-purple-400">Your Passion</span> <br />
          Learn & Connect with Experts
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-300">
          Join thousands of learners worldwide. Explore new skills, book expert
          tutors, and achieve your goals in a modern and engaging way.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-6">
          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
            Get Started
          </button>
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-32 text-gray-900"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,229.3C672,235,768,213,864,192C960,171,1056,149,1152,154.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;

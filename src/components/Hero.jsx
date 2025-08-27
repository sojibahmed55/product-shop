import React from "react";

function Hero() {
  return (
    <section className="relative bg-gradient-to-br h-[750px] from-gray-950 via-purple-950 to-black text-white overflow-hidden">
      {/* Animated Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/3 left-1/2 w-[350px] h-[350px] bg-pink-500/20 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-[1600px] px-6 py-[150px] flex flex-col items-center text-center z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-xl">
          Discover{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Your Passion
          </span>{" "}
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Learn & Connect
          </span>{" "}
          with Experts
        </h1>

        <p className="mt-8 text-lg md:text-xl max-w-2xl text-gray-300 leading-relaxed">
          Join thousands of learners worldwide. Explore new skills, book expert
          tutors, and achieve your goals in a{" "}
          <span className="text-purple-300 font-semibold">
            modern & engaging
          </span>{" "}
          way.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex gap-6">
          <button className="px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 hover:scale-110 font-semibold rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-[0_0_50px_rgba(236,72,153,0.8)] transition-all duration-500">
             Get Started
          </button>
          <button className="px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all hover:scale-110 duration-500">
            Learn More 
          </button>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-32 text-black"
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

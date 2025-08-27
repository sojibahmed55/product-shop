"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative py-20 bg-gradient-to-br from-gray-950 via-purple-950 to-black overflow-hidden">
      {/* Glowing animated background circles */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-indigo-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            className="text-purple-400 drop-shadow-lg"
          >
            <circle cx="12" cy="12" r="10" fill="currentColor" />
            <text
              x="12"
              y="16"
              textAnchor="middle"
              fontSize="10"
              fill="#fff"
              fontWeight="bold"
            >
              MPS
            </text>
          </svg>
          <span className="text-xl font-bold text-white drop-shadow-md">
            My Product Shop
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl text-gray-300">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all duration-300 transform hover:scale-125 drop-shadow-md"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-all duration-300 transform hover:scale-125 drop-shadow-md"
          >
            <FaGithub />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-all duration-300 transform hover:scale-125 drop-shadow-md"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 text-center text-xs text-gray-400 tracking-wide">
        &copy; {new Date().getFullYear()} My Product Shop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

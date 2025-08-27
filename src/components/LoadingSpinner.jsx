"use client";
import { motion } from "framer-motion";
import React from "react";

const colorMap = {
  white: "#ffffff",
  indigo: "#6366F1",
  purple: "#7C3AED",
  blue: "#3B82F6",
  gray: "#9CA3AF",
  pink: "#EC4899",
};

const LoadingSpinner = ({
  size = 50,
  color = "white",
  label,
}) => {
  const spinnerColor = colorMap[color] || colorMap.white;

  return (
    <div className="flex flex-col justify-center items-center space-y-3" role="status">
      {/* Neon spinning circle */}
      <motion.div
        className="rounded-full"
        style={{
          width: size,
          height: size,
          borderWidth: 4,
          borderStyle: "solid",
          borderColor: spinnerColor,
          borderTopColor: "transparent",
          boxShadow: `0 0 15px ${spinnerColor}, 0 0 30px ${spinnerColor}`,
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
      />

      {/* Inner glowing pulse */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size * 0.6,
          height: size * 0.6,
          backgroundColor: spinnerColor,
          opacity: 0.3,
          boxShadow: `0 0 20px ${spinnerColor}, 0 0 40px ${spinnerColor}`,
        }}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      />

      {label && (
        <span className="text-gray-200 text-sm tracking-wider font-mono drop-shadow-md">
          {label}
        </span>
      )}
    </div>
  );
};

export default LoadingSpinner;

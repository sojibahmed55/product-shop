"use client";
import { motion } from "framer-motion";
import React from "react";

const colorMap = {
  white: "#ffffff",
  indigo: "#6366F1",
  purple: "#7C3AED",
  blue: "#3B82F6",
  gray: "#9CA3AF",
};

const LoadingSpinner = ({
  size = 50,        // size in pixels
  color = "white",  // choose from colorMap keys
  label,            // optional text below spinner
}) => {
  const spinnerColor = colorMap[color] || colorMap.white;

  return (
    <div className="flex flex-col justify-center items-center space-y-2" role="status">
      <motion.div
        className="border-4 border-t-transparent rounded-full"
        style={{
          width: size,
          height: size,
          borderColor: spinnerColor,
          borderTopColor: "transparent",
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      {label && <span className="text-gray-200 text-sm">{label}</span>}
    </div>
  );
};

export default LoadingSpinner;

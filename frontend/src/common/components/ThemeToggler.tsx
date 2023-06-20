"use client";

import React from "react";
import { motion } from "framer-motion";

const ThemeToggler = ({
  color = "bg-black",
  initialColor = "bg-background",
}) => {
  return (
    <motion.div
      className="transition-"
      onViewportEnter={() => {
        document.body.className = color + " transition-colors duration-200";
      }}
      onViewportLeave={() => {
        document.body.className =
          initialColor + " transition-colors duration-200";
      }}
    />
  );
};

export default ThemeToggler;

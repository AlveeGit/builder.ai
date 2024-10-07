// src/components/AnimatedShapes.js

import React from "react";
import { motion } from "framer-motion";

const AnimatedShapes = () => {
  return (
    <>
      <motion.div
        className="absolute top-20 left-20 w-24 h-24 bg-purple-300 rounded-full opacity-70"
        animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400 rounded-full opacity-70"
        animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
};

export default AnimatedShapes;

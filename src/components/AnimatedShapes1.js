import React from "react";
import { motion } from "framer-motion";

const AnimatedShapes1 = () => {
  return (
    <div className="">
      {/* Circle 1 */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-purple-300 opacity-40"
        animate={{
          x: [0, 20, -20, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "15%" }}
      />

      {/* Circle 2 */}
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-blue-300 opacity-30"
        animate={{
          x: [0, -30, 30, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "30%", right: "10%" }}
      />

      {/* Wave */}
      {/* <motion.div
        className="absolute w-[600px] h-[200px] bg-purple-200 opacity-25 transform rotate-45"
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -10, 10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "-20%", left: "20%" }}
      /> */}

      {/* Smaller Circle */}
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-blue-400 opacity-50"
        animate={{
          x: [0, 15, -15, 0],
          y: [0, 20, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "15%", right: "25%" }}
      />
    </div>
  );
};

export default AnimatedShapes1;

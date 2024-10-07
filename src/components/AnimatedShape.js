import React from "react";
import { motion } from "framer-motion";

const AnimatedShape = ({ circle1, circle2, circle3, star1, wave1, wave2 }) => {
  return (
    <div className=" overflow-hidden w-full h-full">
      {circle1 && (
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-yellow-400 to-red-500 opacity-40  z-0"
          animate={{
            x: [0, 20, -20, 0],
            y: [0, 30, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "10%", left: "25%" }}
        />
      )}

      {circle2 && (
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-green-500 opacity-30 z-0"
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
      )}

      {circle3 && (
        <motion.div
          className="absolute w-36 h-36 rounded-full bg-gradient-to-br from-yellow-400 to-red-500 opacity-50 z-0"
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
      )}

      {star1 && (
        <motion.svg
          className="absolute z-0"
          viewBox="0 0 100 100"
          width="80"
          height="80"
          style={{ top: "10%", left: "50%" }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <polygon
            fill="url(#grad1)"
            points="50,15 61,35 85,35 66,50 73,73 50,60 27,73 34,50 15,35 39,35"
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#6200EA", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#feb47b", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        </motion.svg>
      )}

      {star1 && (
        <motion.svg
          className="absolute z-0"
          viewBox="0 0 100 100"
          width="80"
          height="80"
          style={{ top: "5%", left: "25%" }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <polygon
            fill="url(#grad2)"
            points="50,15 61,35 85,35 66,50 73,73 50,60 27,73 34,50 15,35 39,35"
          />
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#1e90ff", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#00ff7f", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        </motion.svg>
      )}
    </div>
  );
};

export default AnimatedShape;

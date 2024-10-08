import React from "react";
import { motion } from "framer-motion";
import { AboutUsHeroData } from "../../cms/aboutUs/AboutUsData";



const AboutHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-12 bg-white text-gray-800 overflow-hidden">
      {/* Right Side Dotted Background */}
      <div className="absolute inset-y-0 left-1/2 w-full h-full bg-dots-pattern" />

      {/* Title */}
      <motion.h1
        className="relative text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {AboutUsHeroData.title}
      </motion.h1>

      {/* Grid of Stats */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {AboutUsHeroData.stats.map((stat, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-50 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.4 }}
          >
            <div className="text-2xl sm:text-3xl font-bold text-center mb-2">
              {stat.value}
            </div>
            <p className="text-lg text-center">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutHero;

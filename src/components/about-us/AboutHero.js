import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { AboutUsHeroData } from "../../cms/aboutUs/AboutUsData";
import Button from "../common/Button";

const AboutHero = () => {
  // Function to split the value into prefix, numeric part, and suffix
  const splitValue = (value) => {
    const match = value.match(/([^0-9]*)([0-9,.]+)([^0-9]*)/); // Split into prefix, number, and suffix
    return {
      prefix: match[1] || "",
      numericValue: parseFloat(match[2].replace(/,/g, "")) || 0,
      suffix: match[3] || "",
    };
  };

  return (
    <section className="relative flex flex-col gap-12 items-center justify-center px-4 py-12 bg-white text-gray-800 overflow-hidden min-h-[calc(70vh)]">
      {/* Right Side Dotted Background */}
      <div className="absolute inset-y-0 left-1/2 w-full h-full bg-dots-pattern" />

      {/* Title */}
      <motion.h1
        className="relative text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 max-w-5xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {AboutUsHeroData.title}
      </motion.h1>

      {/* Grid of Stats */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {AboutUsHeroData.stats.map((stat, index) => {
          const { prefix, numericValue, suffix } = splitValue(stat.value);

          return (
            <motion.div
              key={index}
              className="p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
            >
              <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 text-primary">
                {prefix}
                <CountUp
                  start={0}
                  end={numericValue}
                  duration={3}
                  separator=","
                  redraw={true}
                />
                {suffix}
              </div>
              <p className="text-lg text-center">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      <Button
        text={AboutUsHeroData.buttonText}
        variant="primary"
        className="px-8 relative"
      />
    </section>
  );
};

export default AboutHero;

import React from "react";
import { motion } from "framer-motion";
import AboutHero from "../components/about-us/AboutHero";
import AboutTeam from "../components/about-us/AboutTeam";
import AboutJoin from "../components/about-us/AboutJoin";

const AboutUs = () => {
  return (
    <div className="">
      {/*  */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=""
      >
        <AboutHero />
      </motion.div>

      {/*   */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=""
      >
        <AboutTeam />
      </motion.div>

      {/*  */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=""
      >
        <AboutJoin />
      </motion.div>
    </div>
  );
};

export default AboutUs;

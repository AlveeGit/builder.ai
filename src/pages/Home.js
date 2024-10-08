import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Brands from "../components/Brands";
import Faq from "../components/faq/Faq.js";
import Promo from "../components/Promo";

import {
  featureData,
  HomeHeroData,
  BrandsData,
  FaqData,
  PromoData,
} from "../cms/home/HomeData.js";

const Home = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mb-16"
      >
        <Hero
          title={HomeHeroData.title}
          paragraph={HomeHeroData.paragraph}
          primaryButtonText={HomeHeroData.primaryButtonText}
          secondaryButtonText={HomeHeroData.secondaryButtonText}
          listItems={HomeHeroData.list}
          mainImage={HomeHeroData.mainImage}
          alignment="left"
          // showDiscordButton
          // backgroundImage={homeHeroBg}
          // subImage={homeHeroSub}
          // gradient
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mb-16"
      >
        <Brands title={BrandsData.title} logos={BrandsData.logos} />
      </motion.div>

      {featureData.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Feature
            key={index}
            title={feature.title}
            paragraph={feature.paragraph}
            showDiscordButton={feature.showDiscordButton}
            secondaryButtonText={feature.secondaryButtonText}
            image={feature.image}
            imagePosition={feature.imagePosition}
          />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mb-16"
      >
        <Faq heading={FaqData.heading} list={FaqData.list} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mb-16"
      >
        <Promo
          heading={PromoData.heading}
          paragraph={PromoData.paragraph}
          primaryButtonText={PromoData.primaryButtonText}
        />
      </motion.div>
    </div>
  );
};

export default Home;

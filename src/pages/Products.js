import Feature from "../components/Feature";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import AnimatedShapes1 from "../components/AnimatedShapes1"; // Import animated shapes
import {
  ProjectsHeroData,
  productsFeatureData,
} from "../cms/projects/ProjectsData.js";
const Products = () => {
  return (
    <div className="relative">
      {/* Animated Shapes Background */}
      <AnimatedShapes1 />

      {/* Hero Section with Framer Motion */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mb-16"
      >
        <Hero
          title={ProjectsHeroData.title}
          paragraph={ProjectsHeroData.paragraph}
          primaryButtonText={ProjectsHeroData.primaryButtonText}
          secondaryButtonText={ProjectsHeroData.secondaryButtonText}
          alignment="left"
          listItems={ProjectsHeroData.list}
          mainImage={ProjectsHeroData.mainImage}
        />
      </motion.div>

      {/* Feature Section */}
      <div className="space-y-16">
        {productsFeatureData.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Feature
              title={feature.title}
              paragraph={feature.paragraph}
              showDiscordButton={feature.showDiscordButton}
              secondaryButtonText={feature.secondaryButtonText}
              image={feature.image}
              imagePosition={feature.imagePosition}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;

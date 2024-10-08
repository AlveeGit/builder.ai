import React from "react";
import { FaDiscord, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "./common/Button";

const Hero = ({
  title,
  paragraph,
  showDiscordButton,
  primaryButtonText,
  secondaryButtonText,
  alignment,
  listItems = [],
  backgroundImage,
  gradient,
  subImage,
  mainImage,
  children,
}) => {
  const alignmentClass =
    alignment === "left"
      ? "items-start text-left"
      : alignment === "right"
      ? "items-end text-right"
      : "items-center text-center";

  const backgroundStyles = {
    backgroundImage: gradient
      ? `url(${backgroundImage}),linear-gradient(to top, #57384E, #141621)`
      : `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
  };

  const subImageStyles = subImage
    ? {
        backgroundImage: `url(${subImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "right bottom",
        width: "60%",
        height: "60%",
        position: "absolute",
        bottom: "0",
        right: "0",
        zIndex: "1",
      }
    : {};

  return (
    <section
      className={`relative flex flex-col justify-center min-h-[70vh] w-full`}
      style={backgroundStyles}
    >
      {subImage && <div style={subImageStyles} />}

      <div className="w-full">
        <div className={`max-w-primary mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className={`flex flex-col ${alignmentClass}`}>
              <h1 className="max-w-2xl text-5xl font-bold mb-4">{title}</h1>
              <p className="max-w-xl text-2xl opacity-70 mb-8">{paragraph}</p>

              {listItems && (
                <ul className="flex flex-col space-y-4">
                  {listItems.map((item, index) => (
                    <motion.li
                      key={index}
                      className="text-2xl flex items-center"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.3,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      <FaCheckCircle className="inline text-primary mr-2" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              )}

              {children}

              <div className="flex space-x-4 mt-10">
                {showDiscordButton && (
                  <Button icon={FaDiscord} text="Add to Discord" />
                )}
                {primaryButtonText && (
                  <Button text={primaryButtonText} variant="primary" />
                )}
                {secondaryButtonText && (
                  <Button text={secondaryButtonText} variant="secondary" />
                )}
              </div>
            </div>
            <div className="col-6 hidden lg:flex">
              <img src={mainImage} alt="" className="w-full p-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

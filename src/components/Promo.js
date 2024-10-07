import React from "react";
import Button from "./common/Button";
import { PromoImg } from "../assets/svg/promo-svg";
import { div } from "framer-motion/client";

const Promo = ({
  heading,
  paragraph,
  primaryButtonText, buttonText,
  icon,
  onButtonClick,
}) => {
  return (
    <div>
      <section className="px-5 mt-5 sm:pt-16 sm:px-8 sm:mt-8 md:pt-20 md:px-10 lg:pt-12 lg:mt-24 bg-[#6200EA]">
        <div className="max-w-primary py-28 mx-auto px-4 sm:px-6 lg:px-0 lg:flex lg:justify-between  lg:gap-24 items-center">
          {/* promo content */}
          <div className=" px-4 sm:px-6">
            <h2 className="text-6xl font-bold text-white mb-6">{heading}</h2>
            <p className=" text-2xl text-white mb-6">{paragraph}</p>

            {primaryButtonText && (
              <Button
                onButtonClick={onButtonClick}
                text={primaryButtonText}
                variant="primary"
              />
            )}
          </div>

          {/* honour brands */}
          <div className="flex justify-center items-center gap-3">
            <PromoImg />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promo;

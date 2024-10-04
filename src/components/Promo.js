import React from "react";
import Button from "./common/Button";
import { PromoImg } from "../assets/svg/promo-svg";

const Promo = ({
  heading,
  paragraph,
  primaryButtonText, buttonText,
  icon,
  onButtonClick,
}) => {
  return (
    <div className="bg-[#6200EA]  py-20 flex justify-between items-center">
      <div className="max-w-primary px-4 sm:px-6 lg:px-8 flex flex-col lg:items-start lg:text-left ">
        <h2 className="text-6xl font-bold text-white mb-6">{heading}</h2>

        <p className=" text-2xl text-white mb-6">{paragraph}</p>

        {primaryButtonText && (
          <Button onButtonClick={onButtonClick} text={primaryButtonText} variant="primary" />
        )}
      </div>
      <div className="hidden lg:block px-20">
        <PromoImg />
      </div>
    </div>
  );
};

export default Promo;

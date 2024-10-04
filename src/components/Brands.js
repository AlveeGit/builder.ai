import React from "react";
import {fastcompany} from "../assets/images";

const Brands = ({ title, logos }) => {
  return (
    <section className="w-full bg-[#F8F9FA] py-8">
      <div className="max-w-primary mx-auto px-4 sm:px-6 lg:px-8 my-4 flex justify-between items-center flex-col  lg:flex-row gap-8 ">
        <div className="flex gap-4 ">
          <img src={fastcompany} alt="Fast Company" />
          <h6 className="text-md font-bold max-w-xs  text-center lg:text-left ">
            {title}
          </h6>
        </div>
        <div className="flex gap-4 flex-wrap items-center justify-center ">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brands logo ${index + 1}`}
              className="h-28 w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

// Faq
import React from "react";
import Accordion from "./Accordion";

const Faq = ({ heading, list }) => {
  return (
    <div className="w-full">
      <div className="max-w-primary px-4 py-20 mx-auto sm:px-6 lg:px-8 flex flex-col lg:items-start lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 w-full">
          <div className="">
            <h2 className="text-6xl font-bold mb-6">{heading}</h2>
          </div>
          <div>
            <Accordion items={list} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

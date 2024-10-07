// Faq
import React from "react";
import Accordion from "./Accordion";

const Faq = ({heading}) => {

  // dummy data
  const faqData = [
    {
      heading: "How much does it cost to build an app?",
      paragraph:
        "App development costs vary greatly depending on the complexity of the app, the developers involved, and other factors.",
    },
    {
      heading: "How do you create an app without any coding?",
      paragraph:
        "The development timeline depends on the app's features, complexity, and team. It can range from a few months to over a year.",
    },
    {
      heading: "Can you create an app for free?",
      paragraph:
        "We develop apps for iOS, Android, and web platforms, ensuring a consistent experience across all devices.",
    },
    {
      heading: "How can I create my own app?",
      paragraph:
        "We develop apps for iOS, Android, and web platforms, ensuring a consistent experience across all devices.",
    },
  ];


  return (
    <section className="max-w-primary px-4 py-20 sm:px-6 lg:px-8 flex flex-col lg:items-start lg:text-left">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 w-full">
        <div className="">
          <h2 className="text-6xl font-bold mb-6">{heading}</h2>
        </div>
        <div>
          <Accordion
           items={faqData}
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;

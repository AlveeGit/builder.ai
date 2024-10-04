import React from "react";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Brands from "../components/Brands";
import Facility from "../components/facilities/Facility";
import Guide from "../components/guides/Guide";
import Promo from "../components/Promo";
import { FaDiscord } from "react-icons/fa6";
import Server from "../components/servers/server";
import { homepagehero } from "../assets/images";
import {
  footerImgBrand1,
  footerImgBrand2,
  footerImgBrand3,
  footerImgBrand4,
} from "../assets/images/BuilderAi_assets/index.js";

import {
  facilitiesData,
  guideCardsData,
  serverCardsData,
  featureData,
  HomeHeroList,
} from "../cms/home/HomeData.js";

const Home = () => {
  const brandLogos = [
    footerImgBrand1,
    footerImgBrand2,
    footerImgBrand3,
    footerImgBrand4,
  ];

  return (
    <div>
      <Hero
        title="We make building an app so easy, anyone can do it"
        paragraph="Your vision. Your software. We just build it."
        // showDiscordButton
        primaryButtonText="Get a free demo"
        secondaryButtonText="See pricing and plans"
        alignment="left"
        listItems={HomeHeroList}
        // backgroundImage={homeHeroBg}
        // subImage={homeHeroSub}
        // gradient
        mainImage={homepagehero}
      />

      <Brands
        title="Voted one of the top 3 'Most Innovative' Companies in AI - 2023"
        logos={brandLogos}
      />

      {featureData.map((feature, index) => (
        <Feature
          key={index}
          title={feature.title}
          paragraph={feature.paragraph}
          showDiscordButton={feature.showDiscordButton}
          secondaryButtonText={feature.secondaryButtonText}
          image={feature.image}
          imagePosition={feature.imagePosition}
        />
      ))}

      {/* <Server
        heading="MEE6 is trusted and used by more than 21 Million servers"
        serverCardsData={serverCardsData}
      />

      <Facility
        heading="MEE6: The Best All-in-One Discord Bot"
        facilitiesData={facilitiesData}
      />
      <Guide
        heading="Discover MEE6 Tutorials, Documents and Guides"
        paragraph="Whether you're new to Discord or have plenty of experience, the MEE6 team creates tutorials and resources to help you get rolling on your server. Check out our tutorials and get started today!"
        cards={guideCardsData}
        buttonText="Learn More"
      /> */}
      <Promo
        heading="Got Questions?"
        paragraph="Head to our FAQ page for in-depth answers"
        primaryButtonText="Read FAQs"
      />
    </div>
  );
};

export default Home;

import React from "react";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Brands from "../components/Brands";
import Facility from "../components/facilities/Facility";
import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  homeHeroBg,
  homeHeroSub,
  homepagehero,
} from "../assets/images";
import Guide from "../components/guides/Guide";
import Promo from "../components/Promo";
import { FaDiscord } from "react-icons/fa6";
import Server from "../components/servers/server";

import {
  facilitiesData,
  guideCardsData,
  serverCardsData,
  featureData,
  HomeHeroList,
} from "../cms/home/HomeData.js";

const Home = () => {
  const brandLogos = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

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
        title="More than 21 million Discord servers use MEE6"
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

      <Server
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
      />
      <Promo
        heading="Build the best Discord server for free"
        buttonText="Add to Discord"
        icon={FaDiscord}
      />
    </div>
  );
};

export default Home;

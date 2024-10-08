import {
  influhire,
  menamedica,
  menacheckout,
} from "../../assets/images/index.js";
import { productshero } from "../../assets/images";


export const ProjectsHeroData = {
  title: "Apps made to order",
  paragraph: "Don’t speak tech? Then let us develop your app idea",
  primaryButtonText: "Get a free demo",
  primaryButtonLink: "#",
  secondaryButtonText: "See pricing and plans",
  secondaryButtonLink: "#",
  list: [
      "We can build anything, regardless of complexity",
      "Guaranteed pricing and clear timelines",
      "Aftercare keeps your software up to date and bug free",
  ],
  mainImage: productshero,
};


export const productsFeatureData = [
  {
    title: "MenaMedica.com",
    paragraph:
      "Need the speed and simplicity of a no-code app builder, but the technical sophistication a dev shop can deliver? We’ve got you covered. Builder.ai can create any app you can imagine, to your exact specifications.",
    image: menamedica,
    imagePosition: "left",
  },
  {
    title: "InfluHire.com",
    paragraph:
      "AI fits reusable features together based on a template you choose so our developers can focus on creating the custom features only your business needs. AI also calculates a price based on the features you choose and gives you fixed costs and clear timelines.",
    image: influhire,
    imagePosition: "right",
  },
  {
    title: "MenaCheckout.com",
    paragraph:
      "At Builder.ai, our product managers are called Productologists. When your app build begins, you’ll meet with your Productologist once a week, but you can collaborate with and contact them at any time via your all-in-one project dashboard, Builder Home. This helps to ensure that the final product looks just like your original app idea.",
    image: menacheckout,
    imagePosition: "left",
  },
];

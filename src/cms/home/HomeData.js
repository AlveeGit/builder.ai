import { ProtectIcon } from "../../assets/svg/svg-files";
import {
  guide1,
  guide2,
  guide3,
  icon1,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  homefeature1,
  homefeature2,
  homefeature3,
  home,
} from "../../assets/images/index.js";

import {
  footerImgBrand1,
  footerImgBrand2,
  footerImgBrand3,
  footerImgBrand4,
} from "../../assets/images/BuilderAi_assets/index.js";

export const facilitiesData = [
  {
    icon: <ProtectIcon />,
    title: "Protect Your Server",
    description:
      "Take control of your server's moderation with filters. Keep each user happy with the auto-mod. From filtering out spam to detecting bad behavior, MEE6 features will provide a good experience for your server, even when the mods aren’t watching.",
  },
  {
    icon: <ProtectIcon />,
    title: "Hold Fun Giveaways",
    description:
      "A simple command will make giveaways fun again. Engage your server and reward your members with prizes. Let the MEE6 bot handle the logistics. MEE6 bots can manage users, choose winners, and announce results. Mods can focus on other tasks!",
  },
  {
    icon: <ProtectIcon />,
    title: "Protect Your Server",
    description:
      "Take control of your server's moderation with filters. Keep each user happy with the auto-mod. From filtering out spam to detecting bad behavior, MEE6 features will provide a good experience for your server, even when the mods aren’t watching.",
  },
  {
    icon: <ProtectIcon />,
    title: "Hold Fun Giveaways",
    description:
      "A simple command will make giveaways fun again. Engage your server and reward your members with prizes. Let the MEE6 bot handle the logistics. MEE6 bots can manage users, choose winners, and announce results. Mods can focus on other tasks!",
  },
  // Add more facilities as needed
];
export const guideCardsData = [
  {
    image: guide1,
    title:
      "Allow Users to Self Assign Roles in Discord with the MEE6 Bot Reaction Roles",
    text: "Keep reading",
  },
  {
    image: guide2,
    title: "How to Make Roles in Discord",
    text: "Keep reading",
  },
  {
    image: guide3,
    title: "How to generate a bot personalizer token",
    text: "Keep reading",
  },
  // Add more cards as needed
];

export const serverCardsData = [
  {
    logo: icon1,
    title: "Roblox",
    subTitle: "10k",
  },
  {
    logo: icon8,
    title: "PUBG MOBILE",
    subTitle: "10k",
  },
  {
    logo: icon3,
    title: "MRBeast Gaming",
    subTitle: "10k",
  },
  {
    logo: icon4,
    title: "COD:Mobile",
    subTitle: "10k",
  },
  {
    logo: icon5,
    title: "Instant Gaming",
    subTitle: "10k",
  },
  {
    logo: icon6,
    title: "NBA Chat",
    subTitle: "10k",
  },
  {
    logo: icon7,
    title: "Pokimens",
    subTitle: "10k",
  },
  {
    logo: icon8,
    title: "Risk: Global Domination",
    subTitle: "10k",
  },
];

export const featureData = [
  {
    title: "No tech knowledge needed",
    paragraph:
      "Need the speed and simplicity of a no-code app builder, but the technical sophistication a dev shop can deliver? We’ve got you covered. Builder.ai can create any app you can imagine, to your exact specifications.",
    // showDiscordButton: true,
    // secondaryButtonText: "Learn More",
    image: homefeature1,
    imagePosition: "left",
  },
  {
    title: "AI helps build your project quicker and more cost-effectively",
    paragraph:
      "AI fits reusable features together based on a template you choose so our developers can focus on creating the custom features only your business needs. AI also calculates a price based on the features you choose and gives you fixed costs and clear timelines.",
    // showDiscordButton: true,
    image: homefeature2,
    imagePosition: "right",
  },
  {
    title: "Customer success that starts before your app is built",
    paragraph:
      "At Builder.ai, our product managers are called Productologists. When your app build begins, you’ll meet with your Productologist once a week, but you can collaborate with and contact them at any time via your all-in-one project dashboard, Builder Home. This helps to ensure that the final product looks just like your original app idea.",
    // showDiscordButton: true,
    image: homefeature3,
    imagePosition: "left",
  },
];

export const HomeHeroData = {
  title: "We make building an app so easy, anyone can do it",
  paragraph: "Your vision. Your software. We just build it",
  primaryButtonText: "Get a free demo",
  primaryButtonLink: "#",
  secondaryButtonText: "See pricing and plans",
  secondaryButtonLink: "#",
  list: [
    "No tech knowledge needed",
    "AI means we can build more cost effectively and at speed",
    "Your own dedicated expert is with you at every step",
  ],
  mainImage: home,
};

export const BrandsData = {
  title: "Voted one of the top 3 'Most Innovative' Companies in AI - 2023",
  logos: [footerImgBrand1, footerImgBrand2, footerImgBrand3, footerImgBrand4],
};

export const FaqData = {
  heading: "FAQs",
  list: [
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
  ],
};

export const PromoData = {
  heading: "Got Questions?",
  paragraph: "Head to our FAQ page for in-depth answers",
  primaryButtonText: "Read FAQs",
};

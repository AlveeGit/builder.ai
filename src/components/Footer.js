import React from "react";
import FooterLink from "./footer/FooterLink";
import {
  footerImgBrand1,
  footerImgBrand2,
  footerImgBrand3,
  footerImgBrand4,
} from "../assets/images/BuilderAi_assets/index.js";
import { FooterLogo } from "../assets/svg/footerLogoSvg.js";
import { FacebookIcon, InstragramIcon, LinkedInIcon, RSSIcon, TwitterIcon, YoutubeIcon } from "../assets/svg/socialIcons.js";

const Footer = () => {
  return (
    <footer className="pt-10 px-5 sm:pt-16 sm:px-8 md:pt-20 md:px-10 lg:pt-24  bg-[#FFFFFF]">
      <div className="max-w-primary mx-auto px-4 sm:px-6 lg:px-8 text-zinc-200 lg:flex lg:justify-between lg:gap-x-24">
        {/* footer item 1 */}
        <nav className="flex flex-col gap-y-3">
          <FooterLogo />
          <div className="flex gap-x-3">
            <FacebookIcon />
            <FooterLink href="#" text="Facebook" />
          </div>

          <div className="flex gap-x-3">
            <TwitterIcon />
            <FooterLink href="#" text="X" />
          </div>

          <div className="flex gap-x-3">
            <LinkedInIcon />
            <FooterLink href="#" text="LinkedIn" />
          </div>

          <div className="flex gap-x-3">
            <YoutubeIcon />
            <FooterLink href="#" text="YouTube" />
          </div>

          <div className="flex gap-x-3">
            <InstragramIcon />
            <FooterLink href="#" text="Instragram" />
          </div>

          <div className="flex gap-x-3">
            <RSSIcon />
            <FooterLink href="#" text="RSS" />
          </div>
        </nav>

        {/* footer item 2 */}
        <nav className="flex flex-col gap-y-3">
          <h4 className=" text-black font-bold">Products</h4>
          <FooterLink href="#" text="Builder Studio" />
          <FooterLink href="#" text="Studio One" />
          <FooterLink href="#" text="Builder Cloud" />
        </nav>

        {/*  footer item 3 */}
        <nav className="flex flex-col gap-y-3">
          <h4 className=" text-black font-bold">Resources</h4>
          <FooterLink href="#" text="Server management" />
          <FooterLink href="#" text="Utilities" />
          <FooterLink href="#" text="Social Alerts" />
          <FooterLink href="#" text="Engagement & Fun" />
          <FooterLink href="#" text="AI Characters" />
        </nav>

        {/*  footer item 4 */}
        <nav className="flex flex-col gap-y-3">
          <h4 className=" text-black font-bold">Company</h4>
          <FooterLink href="#" text="App Builder" />
          <FooterLink href="#" text="Ecommerce" />
          <FooterLink href="#" text="Web to App" />
          <FooterLink href="#" text="Business Tools" />
          <FooterLink href="#" text="Glossary" />
          <FooterLink href="#" text="Devops" />
        </nav>

        {/* footer item 5 */}
        <nav className="flex flex-col gap-y-3">
          <h4 className=" text-black font-bold">Reach Us</h4>
          <FooterLink href="#" text="Blog" />
          <FooterLink href="#" text="News Room" />
          <FooterLink href="#" text="Contact Us" />
        </nav>
      </div>

      {/* Copyright */}
      <section className=" mt-10 py-10 grid grid-cols-1 lg:grid-cols-2 gap-5 bg-[#F8F9FA] items-center">
        <div className="max-w-primary px-4 sm:px-6 lg:px-8 lg:flex lg:justify-between lg:gap-x-28">
          <address>
            <p>
              <a href="#">
                Builder.ai<sup> r </sup>
              </a>
              , 6th Floor, North West House, 119 Marylebone Rd, London NW1 5PU.
            </p>

            <p>Copyright © 2016-2024 Engineer.ai Corp. All rights reserved.</p>

            <p>
              Terms | Privacy | CCPA | Cookie Policy | Cookie Settings | Legal
              and Compliance
            </p>
          </address>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div>
            <img src={footerImgBrand1} alt="" />
          </div>
          <div>
            <img className="w-28" src={footerImgBrand2} alt="" />
          </div>
          <div>
            <img className="w-28" src={footerImgBrand3} alt="" />
          </div>
          <div>
            <img className="w-28" src={footerImgBrand4} alt="" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;


// import React from "react";
// import FooterLink from "./footer/FooterLink";

// const Footer = () => {
//   return (
//     <footer className="py-10 px-5 sm:py-16 sm:px-8 md:py-20 md:px-10 lg:py-24 lg:px-12 bg-gray-800">
//       <div className="max-w-primary mx-auto px-4 sm:px-6 lg:px-8 text-zinc-200 lg:flex lg:justify-between ">
//         {/* Company */}
//         <div className="mb-10 md:mb-16">
//           <svg
//             width="50"
//             height="50"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//             fillRule="evenodd"
//             clipRule="evenodd"
//             className="fill-current mb-5"
//           >
//             <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
//           </svg>
//           <p className="text-sm">
//             The best Discord bot to bootstrap and
//             <br />
//             grow your Discord server
//           </p>
//         </div>

//         {/* Links */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 md:grid-cols-3 md:gap-y-0 lg:gap-x-16 xl:gap-x-20">
//           <nav className="flex flex-col gap-y-3">
//             <h4 className="text-sm text-white">Plugins</h4>
//             <FooterLink href="#" text="Server management" />
//             <FooterLink href="#" text="Utilities" />
//             <FooterLink href="#" text="Social Alerts" />
//             <FooterLink href="#" text="Engagement & Fun" />
//             <FooterLink href="#" text="AI Characters" />
//           </nav>

//           <nav className="flex flex-col gap-y-3">
//             <h4 className="text-sm text-white">MEE6</h4>
//             <FooterLink href="#" text="Premium" />
//             <FooterLink href="#" text="Bot Personalizer" />
//             <FooterLink href="#" text="Support Server" />
//             <FooterLink href="#" text="Support Portal" />
//             <FooterLink href="#" text="Support Contact" />
//           </nav>

//           <nav className="flex flex-col gap-y-3">
//             <h4 className="text-sm text-white">Company</h4>
//             <div className="flex items-center gap-x-3">
//               <FooterLink href="#" text="Careers" />
//               <a href="xyz">
//                 <button className="bg-indigo-600 text-white py-2 px-4 rounded flex items-center space-x-2 hover:bg-indigo-700 transition text-sm">
//                   Hiring
//                 </button>
//               </a>
//             </div>
//             <FooterLink href="/privacy " text="Privacy Policy" />
//             <FooterLink href="/terms" text="Terms & Conditions" />
//             <FooterLink href="#" text="Contact" />
//           </nav>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

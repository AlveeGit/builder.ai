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
    <footer className="w-full">
      <section className="pt-10 px-5 sm:pt-16 sm:px-8 md:pt-20 md:px-10 lg:pt-24 bg-[/FFFFFF]">
        {/* <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 "> */}

        <div className="max-w-primary mx-auto px-4 sm:px-6 lg:px-8 text-zinc-200 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* footer item 1 */}
          <nav className="flex flex-col gap-y-3">
            <FooterLogo />
            <div className="flex gap-x-3">
              <FacebookIcon />
              <FooterLink href="/" text="Facebook" />
            </div>

            <div className="flex gap-x-3">
              <TwitterIcon />
              <FooterLink href="/" text="X" />
            </div>

            <div className="flex gap-x-3">
              <LinkedInIcon />
              <FooterLink href="/" text="LinkedIn" />
            </div>

            <div className="flex gap-x-3">
              <YoutubeIcon />
              <FooterLink href="/" text="YouTube" />
            </div>

            <div className="flex gap-x-3">
              <InstragramIcon />
              <FooterLink href="/" text="Instragram" />
            </div>

            <div className="flex gap-x-3">
              <RSSIcon />
              <FooterLink href="/" text="RSS" />
            </div>
          </nav>

          {/* footer item 2 */}
          <nav className="flex flex-col gap-y-3">
            <h4 className=" text-black font-bold">Products</h4>
            <FooterLink href="/" text="Builder Studio" />
            <FooterLink href="/" text="Studio One" />
            <FooterLink href="/" text="Builder Cloud" />
          </nav>

          {/*  footer item 3 */}
          <nav className="flex flex-col gap-y-3">
            <h4 className=" text-black font-bold">Resources</h4>
            <FooterLink href="/" text="Server management" />
            <FooterLink href="/" text="Utilities" />
            <FooterLink href="/" text="Social Alerts" />
            <FooterLink href="/" text="Engagement & Fun" />
            <FooterLink href="/" text="AI Characters" />
          </nav>

          {/*  footer item 4 */}
          <nav className="flex flex-col gap-y-3">
            <h4 className=" text-black font-bold">Company</h4>
            <FooterLink href="/" text="App Builder" />
            <FooterLink href="/" text="Ecommerce" />
            <FooterLink href="/" text="Web to App" />
            <FooterLink href="/" text="Business Tools" />
            <FooterLink href="/" text="Glossary" />
            <FooterLink href="/" text="Devops" />
          </nav>

          {/* footer item 5 */}
          <nav className="flex flex-col gap-y-3">
            <h4 className=" text-black font-bold">Reach Us</h4>
            <FooterLink href="/" text="Blog" />
            <FooterLink href="/" text="News Room" />
            <FooterLink href="/" text="Contact Us" />
          </nav>
        </div>
      </section>

      {/* Copyright */}
      <section className="py-10 px-5 mt-5 sm:pt-16 sm:px-8 sm:mt-8 md:pt-20 md:px-10 lg:pt-12 lg:mt-24 bg-[/F8F9FA]">
        <div className="max-w-primary mx-auto px-4 sm:px-6 lg:px-0 lg:flex lg:justify-between  lg:gap-24 items-center">
          {/* address */}
          <div className=" px-4  sm:px-6">
            <address>
              <p>
                <a href="/">
                  Builder.ai<sup> r </sup>
                </a>
                , 6th Floor, North West House, 119 Marylebone Rd, London NW1
                5PU.
              </p>

              <p>
                Copyright © 2016-2024 Engineer.ai Corp. All rights reserved.
              </p>

              <p>
                Terms | Privacy | CCPA | Cookie Policy | Cookie Settings | Legal
                and Compliance
              </p>
            </address>
          </div>

          {/* honour brands */}
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
        </div>
      </section>
    </footer>
  );
};

export default Footer;

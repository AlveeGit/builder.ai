import React, { useState } from "react";
import Flag from "react-flagkit";
import { Link, useLocation } from "react-router-dom";
import Button from "./common/Button";
import DropdownNavItem from "./navbar/DropdownNavItem";
import DropdownContent from "./navbar/DropdownContent";
import { navItems } from "../cms/nav/NavData";
import { FaCrown } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation(); // Get the current location
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("US");

  const handleDropdownClick = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleLinkClick = () => {
    setOpenDropdown(null);
  };

  const handleLanguageChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedLanguage(selectedValue);
  };

  // Function to check if the link is active
  const isActiveLink = (path) => location.pathname === path;

  return (
    <nav className=" bg-white w-full  sticky top-0 z-50 ">
      <div className="max-w-primary mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-xl font-bold text-primary "
            onClick={handleLinkClick}
          >
            Builder.ai
          </Link>
          <Link
            to="/"
            className={`text-sm font-bold ${
              isActiveLink("/") ? "text-primary border-b-2" : ""
            }`}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`text-sm font-bold ${
              isActiveLink("/projects") ? "text-primary border-b-2" : ""
            }`}
            onClick={handleLinkClick}
          >
            Porjects
          </Link>
          <Link
            to="/contact-us"
            className={`text-sm font-bold ${
              isActiveLink("/contact-us") ? "text-primary border-b-2" : ""
            }`}
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>

          {navItems.map(
            ({ title, dropdownName, linkCardsData, spotlightData }) => (
              <DropdownNavItem
                key={dropdownName}
                title={title}
                isOpen={openDropdown === dropdownName}
                onClick={() => handleDropdownClick(dropdownName)}
              >
                <DropdownContent
                  linkCardsData={linkCardsData}
                  spotlightData={spotlightData}
                  handleLinkClick={handleLinkClick}
                />
              </DropdownNavItem>
            )
          )}
        </div>
        <div className="flex items-center ">
          {/* Flag Icon */}
          {/* <Flag country={selectedLanguage} className="-mr-2" /> */}

          {/* Dropdown Language Selector */}
          {/* <select
            className="bg-[#151621] text-white "
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="US">EN</option>
            <option value="ES">ES</option>
            <option value="FR">FR</option>
          </select> */}
          <Button text="Pricing" variant="transparent" />
          <Button text="Sign in" variant="transparent" />
          <Button text="Get a free demo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

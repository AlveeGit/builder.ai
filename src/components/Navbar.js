import React, { useState } from "react";
import Flag from "react-flagkit";
import { Link } from "react-router-dom";
import Button from "./common/Button";
import DropdownNavItem from "./navbar/DropdownNavItem";
import DropdownContent from "./navbar/DropdownContent";
import { navItems } from "../cms/nav/NavData";
import { FaCrown } from "react-icons/fa";

const Navbar = () => {
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

          {navItems.map(
            ({ title, dropdownName, linkCardsData, spotlightData }) => (
              <DropdownNavItem
                key={dropdownName}
                title={title}
                isOpen={openDropdown === dropdownName}
                // onClick={() => handleDropdownClick(dropdownName)}
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

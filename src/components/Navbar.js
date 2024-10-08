import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./common/Button";
import DropdownNavItem from "./navbar/DropdownNavItem";
import DropdownContent from "./navbar/DropdownContent";
import { navItems } from "../cms/nav/NavData";

const Navbar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownClick = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleLinkClick = () => {
    setOpenDropdown(null);
    setMobileMenuOpen(false); // Close menu on link click
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveLink = (path) => location.pathname === path;

  return (
    <nav className="bg-white w-full sticky top-0 z-50">
      <div className="max-w-primary mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-primary"
            onClick={handleLinkClick}
          >
            Builder.ai
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
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
              Projects
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
            <Link
              to="/about-us"
              className={`text-sm font-bold ${
                isActiveLink("/about-us") ? "text-primary border-b-2" : ""
              }`}
              onClick={handleLinkClick}
            >
              About Us
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
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-primary text-2xl"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button text="Pricing" variant="transparent" />
          <Button text="Sign in" variant="transparent" />
          <Button text="Get a free demo" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full flex flex-col items-center space-y-4 py-4">
          <Link to="/" className="text-sm font-bold" onClick={handleLinkClick}>
            Home
          </Link>
          <Link
            to="/projects"
            className="text-sm font-bold"
            onClick={handleLinkClick}
          >
            Projects
          </Link>
          <Link
            to="/contact-us"
            className="text-sm font-bold"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
          <Link
            to="/about-us"
            className="text-sm font-bold"
            onClick={handleLinkClick}
          >
            About Us
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

          {/* Buttons in Mobile Menu */}
          <Button text="Pricing" variant="transparent" />
          <Button text="Sign in" variant="transparent" />
          <Button text="Get a free demo" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

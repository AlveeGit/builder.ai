import React from "react";
import { Link } from "react-router-dom";

const LinkCard = ({ icon: Icon, title, description, to, handleLinkClick }) => {
  return (
    <Link
      to={to}
      className="flex items-start pt-6 rounded-lg gap-4 cursor-pointer opacity-60 hover:opacity-100"
      aria-label={`Navigate to ${title}`}
      onClick={handleLinkClick}
    >
      {/* Left Column: Icon */}
      <div className="flex-shrink-0  pt-1">
        {Icon && <Icon size={16} />}
      </div>

      {/* Right Column: Heading and Description */}
      <div>
        <h3 className="text font-semibold  mt-0">{title}</h3>
        <p className=" text-sm mt-2">{description}</p>
      </div>
    </Link>
  );
};

export default LinkCard;

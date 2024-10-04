import React from "react";
import { FaCaretDown } from "react-icons/fa";

const DropdownNavItem = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="">
      <button
        onClick={onClick}
        className="flex items-center space-x-1  hover:text-gray-400 focus:outline-none font-bold text-sm "
      >
        <span>{title}</span>
        <FaCaretDown size={10}
          className={`transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div
          className="absolute left-0  w-[99vw] bg-white mt-9 overflow-hidden border-t   "
          style={{ zIndex: 1000 }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownNavItem;

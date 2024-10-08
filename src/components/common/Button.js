import React from "react";

const Button = ({ icon: Icon, text, variant, className }) => {
  // Define a mapping for the button styles based on the 'variant' prop
  const variantStyles = {
    transparent: "bg-transparent hover:bg-gray-300 text-sm font-bold",
    white: "bg-white text-black hover:bg-gray-300",
    primary: "bg-[#00D659] hover:bg-[#00E676] font-bold",
    secondary: "bg-gray-500 bg-opacity-50 font-bold hover:bg-gray-200",
    yellow: "bg-yellow-300 bg-opacity-20 text-yellow-500 hover:bg-yellow-800",
    default: "bg-[#00D659] hover:bg-[#00E676] text-xs font-bold",
  };

  // Select the appropriate style or fallback to 'default'
  const buttonClass = `${
    variantStyles[variant] || variantStyles.default
  } py-3 px-4 rounded-sm flex items-center justify-center space-x-2 transition duration-300 ease-in-out whitespace-nowrap ${className} `;

  return (
    <button className={buttonClass}>
      {Icon && <Icon size={24} />}
      <span>{text}</span>
    </button>
  );
};

export default Button;

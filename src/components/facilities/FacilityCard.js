import React from "react";

const FacilityCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div>{icon}</div>
      <h3 className="text-xl font-semibold  my-6">{title}</h3>
      <p className=" opacity-70 text-center md:text-left">{description}</p>
    </div>
  );
};

export default FacilityCard;

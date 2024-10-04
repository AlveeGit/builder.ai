import { useState } from "react";
import Button from "./common/Button";
import { icon1, icon2, icon3 } from "../assets/images";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Banner = ({ text, buttonText, onButtonClick }) => {
  const [showBanner, setShowBanner] = useState(true);
  const images = [icon1, icon2, icon3];

  if (!showBanner) {
    return null;
  }

  return (
    <div className="flex items-center justify-center w-full py-4 px-6 bg-primary text-lg font-bold sticky bottom-0 z-50 ">
      {/* Images Section */}
      {/* <div className="flex -space-x-3">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Avatar ${index}`}
            className="w-10 h-10 100 rounded-full border-4 border-black"
          />
        ))}
      </div> */}

      {/* Text Section */}
      <div className="ml-6 text-white font-medium">
        Want to launch your app like a rocket? 🚀
      </div>

      {/* Button Section */}
      <div className="ml-6">
        <Button text="Get the 6-step guide" variant="white" />
      </div>

      {/* Close Button Section */}
      <div
        className="ml-6 cursor-pointer text-white"
        onClick={() => {
          setShowBanner(false);
        }}
      >
        <IoIosCloseCircleOutline size={30} />
      </div>
    </div>
  );
};

export default Banner;

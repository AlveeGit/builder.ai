import { useState } from "react";
import Button from "./common/Button";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Banner = ({ text, buttonText, onButtonClick }) => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) {
    return null;
  }

  return (
    <div className="flex items-center justify-center w-full py-4 px-6 bg-primary text-lg font-bold sticky bottom-0 z-50 ">
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

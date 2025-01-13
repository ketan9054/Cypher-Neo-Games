import React from "react";
import "./SecondImage.css";
import secondImage from "./assets/images/pic2.png";

const SecondImage = () => {
  return (
    <div className="second-image-container">
      <img src={secondImage} alt="Second Banner" className="second-image" />
    </div>
  );
};

export default SecondImage;

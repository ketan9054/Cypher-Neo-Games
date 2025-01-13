import React from "react";
import "./MainImage.css";
import mainImage from "./assets/images/a23-rummy-freerole-tourney-1-m.webp";

const MainImage = () => {
  return (
    <div className="main-image-container">
      <img src={mainImage} alt="Main Banner" className="main-image" />
    </div>
  );
};

export default MainImage;

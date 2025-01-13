import React from "react";
import "./HeroSection.css"; // Import the CSS for styling
import logo from "./assets/images/app_icon.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={logo} alt="Cypher Neo Games Logo" className="hero-logo" />
        <h1>Welcome to Cypher Neo Games</h1>
        <p>Immerse yourself in the ultimate gaming experience.</p>
        <a href="#play-now" className="cta-button">
          Play Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import "./Header.css";
import logo from "./assets/images/app_icon.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  return (
    <header className="header">
      {/* Make the logo clickable and navigate to Home */}
      <Link to="/">
        <img src={logo} alt="A23 Logo" className="logo" />
      </Link>
      {isHomePage && (
        <nav className="nav">
          <a href="#about-us" className="dropdown">
            About Us
          </a>
          <a href="#contact-us" className="dropdown">
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;

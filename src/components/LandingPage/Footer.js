import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgb(101, 39, 23)",
        padding: "10px 20px",
        color: "#fff",
        fontSize: "14px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        © 2024 Head Digital Works Private Limited.
      </div>

      {/* Using Flexbox to align email and phone number beside each other */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px", // Adds space between the email and phone number
          marginBottom: "10px",
        }}
      >
        <div>Email: example@example.com</div>
        <div>Phone: +1 (234) 567-890</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <Link to="/disclaimer" style={footerLinkStyle}>
          Disclaimer
        </Link>{" "}
        ·
        <Link to="/terms" style={footerLinkStyle}>
          T&C
        </Link>{" "}
        ·
        <Link to="/legality" style={footerLinkStyle}>
          Legality
        </Link>{" "}
        ·
        <Link to="/privacy" style={footerLinkStyle}>
          Privacy Policy
        </Link>{" "}
        ·
        <Link to="/password" style={footerLinkStyle}>
          Password Policy
        </Link>{" "}
        ·
        <Link to="/sitemap" style={footerLinkStyle}>
          Sitemap
        </Link>
      </div>
    </footer>
  );
};

const footerLinkStyle = {
  color: "#FFFFFF",
  textDecoration: "none",
  margin: "0 10px",
};

export default Footer;

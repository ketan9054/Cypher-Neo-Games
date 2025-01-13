import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Import icons

const QuickLinks = () => {
  return (
    <div
      id="contact-us"
      style={{
        backgroundColor: "rgb(130, 61, 15)",
        padding: "20px",
        color: "#fff",
      }}
    >
      <h2
        style={{ borderBottom: "2px solid #00A4EF", display: "inline-block" }}
      >
        Quick Links
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Center content
          alignItems: "center", // Center vertically
          gap: "30px", // Add space between links
          //   marginTop: "20px",
        }}
      >
        {/* Facebook Link */}
        <a href="#Facebook" style={linkStyle}>
          <FaFacebook style={iconStyle} />
          Facebook
        </a>

        {/* Instagram Link */}
        <a href="#Instagram" style={linkStyle}>
          <FaInstagram style={iconStyle} />
          Instagram
        </a>
      </div>
    </div>
  );
};

const linkStyle = {
  color: "#FFFFFF",
  textDecoration: "none",
  fontSize: "16px",
  display: "flex", // Align text and icon
  alignItems: "center",
  gap: "8px", // Space between icon and text
};

const iconStyle = {
  fontSize: "20px",
};

export default QuickLinks;

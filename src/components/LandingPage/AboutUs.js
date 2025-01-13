// AboutUs.js
import React from "react";
import AboutSection from "./AboutSection";
import "./AboutUs.css"; // CSS for About Us section

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>Cypher Neo Games: Best Gaming Platform</h2>
      <p>
        Do you like playing online games? Do you want to take your online gaming
        to a new level? Then, Cypher Neo Games is the place for you. With over
        18 years of experience, Cypher Neo Games has gained recognition for
        being the first platform to bring rummy to an online platform. We offer
        a variety of online games that remind us of days when we would gather
        along with our friends to play rummy and poker card games. Whether it's
        a long commute home or another way to entertain yourself, Cypher Neo
        Games is the perfect online platform for you. Cypher Neo Games believes
        in safe, fair and secure gameplay. We have measures in place to ensure
        that you will be able to hassle-free and securely. Our Cypher Neo Games
        Cares feature helps you keep a track of your time spent on the app as
        well as helps you plan breaks for better gameplay. Download the Cypher
        Neo Games app today, and let the games begin!
      </p>
      <div className="line-after-paragraph"></div>

      <AboutSection />
    </div>
  );
};

export default AboutUs;

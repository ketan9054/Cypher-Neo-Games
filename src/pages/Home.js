import React from "react";

import Header from "../components/LandingPage/Header";
import MainImage from "../components/LandingPage/MainImage";
import SecondImage from "../components/LandingPage/SecondImage";
import AboutUs from "../components/LandingPage/AboutUs";
import FAQSection from "../components/LandingPage/FAQSection";
import QuickLinks from "../components/LandingPage/QuickLinks";
import Footer from "../components/LandingPage/Footer";
import HeroSection from "../components/LandingPage/HeroSection";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <HeroSection />
      {/* <MainImage />
      <SecondImage /> */}
      <AboutUs />
      <FAQSection />
      {/* <QuickLinks /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;

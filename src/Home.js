import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import Footer from "./components/Footer";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {
  const data = {
    name: "Sharma's Store",
  };

  return (
    <>
      <HeroSection myData={data} />;
      <FeatureProduct />
      <Services />
      <Trusted />
      <Footer />
    </>
  );
};

export default Home;

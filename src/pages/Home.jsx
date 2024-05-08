import React from "react";
import HeroSlider from "../components/HeroSlider";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";

const Home = () => {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <HeroSlider />
      <AboutSection />
      <ServiceSection />
    </div>
  );
};

export default Home;

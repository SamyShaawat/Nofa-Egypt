import React from "react";
import Carousel from "./Carousel";
import AboutUs from "./AboutUs";
import { carouselImages } from "../data/constants";

const Hero = () => {
  return (
    // Container for the hero section, with margin-top to offset the fixed navbar
    <div className="mt-20 container mx-auto flex flex-col sm:flex-row items-center justify-between h-auto">
      {/* About Us section on the left side */}
      <AboutUs />
      {/* Carousel section on the right side */}
      <Carousel images={carouselImages} />
    </div>
  );
};

export default Hero;

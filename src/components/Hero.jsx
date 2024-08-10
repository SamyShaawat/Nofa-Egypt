import React from "react";
import HeroHomeCarousel from "./HeroHomeCarousel";
import Welcome from "./Welcome";
import { carouselImages } from "../data/constants";

const Hero = () => {
  return (
    // Container for the hero section, with margin-top to offset the fixed navbar
    <div className="mt-20 container mx-auto flex flex-col sm:flex-row items-center justify-between h-auto">
      {/* About Us section on the left side */}
      <Welcome />
      {/* Carousel section on the right side */}
      <HeroHomeCarousel images={carouselImages} />
    </div>
  );
};

export default Hero;


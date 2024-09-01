import React from "react";
import HeroHomeCarousel from "./HeroHomeCarousel.jsx";
import Welcome from "./Welcome.jsx";
import { carouselImages } from "../../data/constants";

const Hero = () => {
  return (
    <div className="mt-24 container mx-auto flex flex-col lg:flex-row items-center justify-between">
      {/* Welcome section on the left side */}
      <Welcome />
      {/* Carousel section on the right side */}
      <div className="w-full lg:w-2/3">
        <HeroHomeCarousel images={carouselImages} />
      </div>
    </div>
  );
};

export default Hero;

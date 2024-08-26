import React from "react";
import Slider from "react-slick";
import { AvailableWoodSpecies } from "./data/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AvailableWood = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto py-8">
      <Slider {...settings}>
        {AvailableWoodSpecies.flat().map((wood, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <div className="hexagon">
                <img
                  src={wood.src}
                  alt={wood.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 cursor-pointer text-2xl text-gray-700 hover:text-gray-900"
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 cursor-pointer text-2xl text-gray-700 hover:text-gray-900"
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

export default AvailableWood;

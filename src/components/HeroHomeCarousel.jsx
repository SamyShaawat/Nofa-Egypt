import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroHomeCarousel = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full p-9 sm:w-1/2">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="w-96 p-3">
            <img
              src={img}
              alt={`Slide ${idx}`}
              className="w-96 h-auto rounded-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroHomeCarousel;

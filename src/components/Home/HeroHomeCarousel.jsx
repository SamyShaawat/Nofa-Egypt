import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const HeroHomeCarousel = ({ images }) => {
  const [slidesToShow, setSlidesToShow] = useState(3); // Default to 3 for large screens

  useEffect(() => {
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setSlidesToShow(1); // Mobile screens
      } else if (screenWidth < 1024) {
        setSlidesToShow(2); // Tablet screens
      } else {
        setSlidesToShow(3); // Laptop screens and larger
      }
    };

    updateSlidesToShow(); // Initial check
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="w-full p-4 mt-8">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className="p-2"
          >
            <img
             data-aos="zoom-in"
            data-aos-delay="800"
              src={img}
              alt={`Slide ${idx}`}
              className="object-cover rounded-md mx-auto border-2 border-primary shadow-xl"
              style={{
                width:
                  slidesToShow === 1
                    ? "250px" // Mobile screen width
                    : slidesToShow === 2
                    ? "300px" // Tablet screen width
                    : "350px", // Laptop and larger screen width
                height:
                  slidesToShow === 1
                    ? "400px" // Mobile screen height
                    : slidesToShow === 2
                    ? "500px" // Tablet screen height
                    : "600px", // Laptop and larger screen height
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroHomeCarousel;

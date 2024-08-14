import React from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { partners } from "../data/constants.js"; 

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="400"
      className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 cursor-pointer text-3xl text-gray-700 hover:text-gray-900"
      onClick={onClick}
    >
      <FaAngleRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="400"
      className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 cursor-pointer text-3xl text-gray-700 hover:text-gray-900"
      onClick={onClick}
    >
      <FaAngleLeft />
    </div>
  );
};

const Partners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Default to 1 slide per view
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div data-aos="fade-up" data-aos-delay="200" className="bg-gray-200">
      <section className="container mx-auto px-4 py-8 relative">
        {/* Large screens (laptops) */}
        <div className="hidden lg:block">
          <Slider {...settings} slidesToShow={4} slidesToScroll={1}>
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="p-4 flex justify-center items-center"
              >
                <a
                  data-aos="fade-up"
                  data-aos-delay="400"
                  href={partner.linkWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white flex items-center justify-center rounded-full h-52 w-52 mx-auto cursor-pointer duration-300 hover:scale-110"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-32 h-32 rounded-full object-contain" // Adjust size for large screens
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>

        {/* Medium screens (tablets) */}
        <div className="hidden md:block lg:hidden">
          <Slider {...settings} slidesToShow={3} slidesToScroll={1}>
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="p-4 flex justify-center items-center"
              >
                <a
                  href={partner.linkWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white flex items-center justify-center rounded-full h-40 w-40 mx-auto cursor-pointer duration-300 hover:scale-110"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-24 h-24 rounded-full object-contain" // Adjust size for medium screens
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>

        {/* Small screens (mobile) */}
        <div className="block md:hidden">
          <Slider {...settings} slidesToShow={1} slidesToScroll={1}>
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="p-4 flex justify-center items-center"
              >
                <a
                  href={partner.linkWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white flex items-center justify-center rounded-full h-28 w-28 mx-auto cursor-pointer duration-300 hover:scale-110"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-20 h-20 rounded-full object-contain" // Adjust size for small screens
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Partners;

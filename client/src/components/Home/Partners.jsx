import React from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { partners } from "../../data/constants";

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
    slidesToShow: 1, // Default to 1 slide per view
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
    autoplaySpeed: 1500,
  };

  return (
    <div data-aos="fade-up" data-aos-delay="200" className="">
      <section className="container mx-auto px-4 py-8 relative">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
          Our Business Partners
        </h2>

        {/* Large screens (laptops) */}
        <div className="hidden lg:block">
          <Slider {...settings} slidesToShow={6} slidesToScroll={1} dots={false} nextArrow={false} prevArrow={false}>
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="py-10 flex justify-center items-center  transform transition-transform duration-300 hover:scale-150 hover:animate-shake relative overflow-visible" // Added relative positioning
              >
                <a
                  data-aos="fade-up"
                  data-aos-delay="400"
                  href={partner.linkWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white flex items-center justify-center rounded-full h-36 w-36 mx-auto cursor-pointer duration-300  border-2 border-slate-400" // Added relative and overflow-visible
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-32 h-32 rounded-full object-contain " // Added transform and transition
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
                className="py-10 flex justify-center items-center relative  transform transition-transform duration-300 hover:scale-125 hover:animate-shake  overflow-visible" // Added relative positioning
              >
                <a
                  href={partner.linkWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white flex items-center justify-center rounded-full h-40 w-40 mx-auto cursor-pointer duration-300 relative overflow-visible border-2 border-slate-400" // Added relative and overflow-visible
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-32 h-32 rounded-full object-contain" // Added transform and transition
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
                className="py-10 flex justify-center items-center relative transform transition-transform duration-300 hover:scale-125 hover:animate-shake  overflow-visible" // Added relative positioning
              >
                <a
                  href={partner.linkWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white flex items-center justify-center rounded-full h-40 w-40 mx-auto cursor-pointer duration-300 relative overflow-visible border-2 border-slate-400" // Added relative and overflow-visible
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-28 h-28 rounded-full object-contain" // Added transform and transition
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

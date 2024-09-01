import React from "react";
import { woodSpeciesImages } from "../../data/constants";

const OurProducts = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 w-full px-4">
      {/* Text displayed on top for mobile and tablet screens */}
      <h2
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-2xl font-bold mb-4 text-center md:hidden"
      >
        Our Distinctive Wood Species
      </h2>

      {/* Mobile and Tablet Layout - 4 images per row */}
      <div className="md:hidden grid grid-cols-4 gap-4">
        {woodSpeciesImages.flat().map(
          (item, index) =>
            !item.isCenter && (
              <div
                key={index}
                className="relative w-20 h-20 sm:w-24 sm:h-24 transition-transform transform hover:scale-150 hover:z-10 hover:animate-shake"
              >
                <img
                  data-aos="fade-up"
                  data-aos-delay={item.aosDelay}
                  src={item.src}
                  className="w-full h-full"
                  alt={item.title}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p
                    data-aos="zoom-in"
                    data-aos-delay={item.delayTitle}
                    className="text-sm sm:text-xs md:text-sm lg:text-base text-white font-bold"
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            )
        )}
      </div>

      {/* Original layout preserved for laptop screens */}
      <div className="hidden md:flex flex-row justify-center items-center w-full">
        {woodSpeciesImages.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="flex flex-col justify-center items-center space-y-4 mb-4 w-full md:w-auto"
          >
            {column.map((item, itemIndex) =>
              item.isCenter ? (
                <div
                  key={itemIndex}
                  className="flex justify-center items-center bg-transparent border border-white w-28 h-28 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full"
                >
                  <p
                    data-aos="fade-up"
                    data-aos-delay={item.aosDelay}
                    className="text-lg sm:text-lg md:text-2xl text-black text-center font-bold"
                  >
                    {item.text}
                  </p>
                </div>
              ) : (
                <div
                  key={itemIndex}
                  className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 cursor-pointer transition-transform transform hover:scale-150 hover:z-10 hover:animate-shake"
                >
                  <img
                    src={item.src}
                    className="w-full h-full"
                    alt={item.title}
                    data-aos="fade-up"
                    data-aos-delay={item.aosDelay}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p
                      data-aos="zoom-in"
                      data-aos-delay={item.delayTitle}
                      className="text-sm sm:text-xs md:text-sm lg:text-base text-white font-bold"
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;

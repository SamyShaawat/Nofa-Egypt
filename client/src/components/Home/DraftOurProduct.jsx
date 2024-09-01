import React from "react";
import { woodSpeciesImages } from "../../data/constants";

const OurProducts = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 w-full px-4">
      {/* Original layout preserved for laptop screens */}
      <div className="hidden md:flex flex-row justify-center items-center w-full">
        {woodSpeciesImages.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className={`flex flex-col justify-center items-center 
                        space-y-4 mb-4 w-full md:w-auto`}
          >
            {column.map(
              (item, itemIndex) => (
                // Div Contain Images And Title of image
                <div
                  key={itemIndex}
                  className="relative   w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
                >
                  {/* imagesss */}
                  <img
                    src={item.src}
                    className="w-full h-full "
                    alt={item.title}
                    data-aos="fade-up"
                    data-aos-delay={item.aosDelay}
                  />
                  {/* Name OF image  */}
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
              //  End  Div Contain Images And Title of image
              //   )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;

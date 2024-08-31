import React from "react";

import { AvailableWoodSpecies } from "../../data/constants";

const AvailableWood = () => {
  return (
    <>
      {/*  AvailableWoodSpecies */}
      <div className="flex flex-col justify-center items-center mt-3 w-full px-4">
        {/* Original layout preserved for laptop screens */}
        <div className=" flex flex-row justify-center items-center w-full">
          {AvailableWoodSpecies.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`flex flex-col justify-center items-center 
                        space-y-1  w-full md:w-auto`}
            >
              {column.map(
                (item, itemIndex) => (
                  // Div Contain Images And Title of image
                  <div
                    key={itemIndex}
                    className="relative w-14 h-14  md:w-16 md:h-16 lg:w-20 lg:h-20"
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
                        className="text-xs sm:text-xs md:text-xs lg:text-xs text-white "
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
    </>
  );
};

export default AvailableWood;

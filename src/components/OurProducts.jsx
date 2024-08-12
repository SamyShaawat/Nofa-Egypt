import React from "react";
import { woodSpeciesImages } from "../data/constants";

const OurProducts = () => {
  return (
    <div className="flex   justify-center items-center  mt-10 flex-wrap w-full px-4    ">
      {woodSpeciesImages.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className="flex flex-col  items-center space-y-2   mb-4  "
        >
          {column.map((item, itemIndex) =>
            item.isCenter ? (
              <p
                key={itemIndex}
                className="text-xl sm:text-lg md:text-2xl text-center font-bold my-2"
              >
                {item.text}
              </p>
            ) : (
              <img
                key={itemIndex}
                src={item.src}
                className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-32 lg:h-28 mb-2 object-cover"
                alt={item.alt}
              />
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default OurProducts;

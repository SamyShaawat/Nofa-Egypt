import React from "react";
import { woodSpeciesImages } from "../data/constants";

const OurProducts = () => {
  return (
    <div className="flex justify-center items-center mt-10 flex-wrap w-full px-4">
      {woodSpeciesImages.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className="flex flex-col items-center space-y-2  mb-4"
        >
          {column.map((item, itemIndex) =>
            item.isCenter ? (
              <p
                key={itemIndex}
                className="text-3xl text-center font-bold my-2"
              >
                {item.text}
              </p>
            ) : (
              <img
                key={itemIndex}
                src={item.src}
                className="w-36 h-32 mb-2 object-cover"
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

import React from "react";
import { woodSpeciesImages } from "../data/constants";
import { Link } from "react-router-dom";
import "../App.css"; // Import the custom CSS file

const WoodSpeciesAndProducts = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {/* Our Distinctive Wood Species */}
      <div className="beehive-grid ml-10 start-9">
        {woodSpeciesImages.map((image, index) => (
          <div
            key={index}
            className="beehive-item flex justify-center items-center"
          >
            <img src={image} alt={`Wood species ${index}`} />
          </div>
        ))}
      </div>

      {/* Product Groups */}
      <div className="flex flex-col justify-center items-start">
        <Link
          to="/our-products/solid-parquets"
          className="flex items-center mb-2"
        >
          <div className="font-medium text-black text-4xl hover:text-primary hover:translate-x-1 duration-300 flex">
            <img className="h-11" src="../images/rightIcon.png" alt="" />
            <span className="ml-2">Solid Parquets</span>
          </div>
        </Link>
        <Link
          to="/our-products/mosaic-parquets"
          className="flex items-center mb-2"
        >
          <div className="font-medium text-black text-4xl hover:text-primary hover:translate-x-1 duration-300 flex">
            <img className="h-11" src="../images/rightIcon.png" alt="" />
            <span className="ml-2">Mosaic Parquets</span>
          </div>
        </Link>
        <Link
          to="/our-products/laser-inlays"
          className="flex items-center mb-2"
        >
          <div className="font-medium text-black text-4xl hover:text-primary hover:translate-x-1 duration-300 flex">
            <img className="h-11" src="../images/rightIcon.png" alt="" />
            <span className="ml-2">Laser Inlays</span>
          </div>
        </Link>
        <Link
          to="/our-products/outdoor-decking"
          className="flex items-center mb-2"
        >
          <div className="font-medium text-black text-4xl hover:text-primary hover:translate-x-1 duration-300 flex">
            <img className="h-11" src="../images/rightIcon.png" alt="" />
            <span className="ml-2">Outdoor Decking</span>
          </div>
        </Link>
        <Link
          to="/our-products/garden-furniture"
          className="flex items-center mb-2"
        >
          <div className="font-medium text-black text-4xl hover:text-primary hover:translate-x-1 duration-300 flex">
            <img className="h-11" src="../images/rightIcon.png" alt="" />
            <span className="ml-2">Garden Furniture</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WoodSpeciesAndProducts;

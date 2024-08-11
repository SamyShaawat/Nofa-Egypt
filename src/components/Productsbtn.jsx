import React from "react";

function Productsbtn() {
  return (
    <div className="text-center flex flex-col md:flex-row justify-center gap-4 p-5">
      <div className="flex justify-between gap-4 border-2 border-black-300 rounded-full p-3 font-semibold  hover:text-primary duration-300">
        <img src="../images/rightIcon.png" alt="" className="w-5" />
        <a href="our-products/solid-parquets">Solid Parquets</a>
      </div>
      <div className="flex justify-between gap-4 border-2 border-black-300 rounded-full p-3 font-semibold  hover:text-primary ">
        <img src="../images/rightIcon.png" alt="" className="w-5" />
        <a href="our-products/mosaic-parquets">Mosaic Parquets</a>
      </div>
      <div className="flex justify-between gap-4 border-2 border-black-300 rounded-full p-3 font-semibold  hover:text-primary ">
        <img src="../images/rightIcon.png" alt="" className="w-5" />
        <a href="our-products/laser-inlays">Laser Inlays</a>
      </div>
      <div className="flex justify-between gap-4 border-2 border-black-300 rounded-full p-3 font-semibold  hover:text-primary ">
        <img src="../images/rightIcon.png" alt="" className="w-5" />
        <a href="our-products/outdoor-decking">Outdoor Decking</a>
      </div>
      <div className="flex justify-between gap-4 border-2 border-black-300 rounded-full p-3 font-semibold  hover:text-primary ">
        <img src="../images/rightIcon.png" alt="" className="w-5 " />
        <a href="our-products/garden-furniture">Garden Furniture</a>
      </div>
    </div>
  );
}

export default Productsbtn;

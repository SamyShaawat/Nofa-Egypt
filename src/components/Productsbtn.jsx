import React from "react";
import { Link } from "react-router-dom";
import { productsgroups } from "../data/constants"; // Adjust the import path as necessary

function Productsbtn() {
  return (
    <div className="text-center flex flex-col md:flex-row justify-center gap-4 p-5">
      {productsgroups.map((product, index) => (
        <div
          key={index}
          className="flex justify-between gap-4 border-2 border-slate-400 rounded-full p-4 font-semibold hover:text-slate-100 hover:bg-primary duration-300"
        >
          <img src="../images/rightIcon.png" alt="" className="w-6" />
          <Link to={product.link} className="text-base">
            {product.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Productsbtn;

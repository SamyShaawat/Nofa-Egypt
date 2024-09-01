import React from "react";
import { Link } from "react-router-dom";
import { productsgroups } from "../../data/constants";

function Productsbtn() {
  return (
    <div className="text-center p-5">
      <h2
        data-aos="fade-up"
        data-aos-delay="600"
        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 mt-5"
      >
        Our Product Groups
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {productsgroups.map((product, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={product.aosDelay}
            className="flex items-center gap-4 border-2 border-primary rounded-full p-4 font-semibold hover:text-slate-100 hover:bg-primary duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-auto"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/nofa-egypt.appspot.com/o/icons%2FrightIcon.png?alt=media&token=4f06eeb7-427e-44c8-a97e-e3894e33f5a4"
              alt=""
              className="w-6 sm:w-8 md:w-10 lg:w-12"
            />
            <Link
              to={product.link}
              className="text-lg sm:text-base md:text-lg lg:text-xl"
            >
              {product.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productsbtn;

/* eslint-disable react/no-unescaped-entities */
import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate("/about-us");
  };

  return (
    <div className="w-full sm:w-3/4 lg:w-1/2 p-4 mt-7 lg:mt-0 lg:mb-0">
      <h2
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight sm:leading-snug lg:leading-normal"
      >
        Welcome to <span className="text-primary">NOFA EGYPT</span>
      </h2>
      <p
        data-aos="zoom-in"
        data-aos-delay="200"
        className="mb-6 text-sm sm:text-base lg:text-lg leading-snug sm:leading-normal lg:leading-relaxed"
      >
        Nofa Egypt, originally founded in 1950 by Saleh M. and his son Mohamed
        as a small wood flooring company in Downtown Alexandria, emphasizes the
        artistry of wood flooring. Mohamed's graduation from the School of Fine
        Arts in 1953 deepened their specialization in the field.
      </p>
      <button
        data-aos="fade-up"
        data-aos-delay="400"
        className="bg-primary text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-primary/80 duration-300 text-sm sm:text-base lg:text-lg"
        onClick={handleReadMoreClick}
      >
        Read More <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </button>
    </div>
  );
};

export default Welcome;

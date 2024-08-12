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
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight sm:leading-snug lg:leading-normal">
        Welcome to <span className="text-primary">NOFA EGYPT</span>
      </h2>
      <p className="mb-6 text-sm sm:text-base lg:text-lg leading-snug sm:leading-normal lg:leading-relaxed">
        Nofa Egypt, originally founded in 1950 by Saleh M. and his son Mohamed
        as a small wood flooring company in Downtown Alexandria, emphasizes the
        artistry of wood flooring. Mohamed's graduation from the School of Fine
        Arts in 1953 deepened their specialization in the field. The company
        experienced rapid growth during the 1979 construction revolution,
        leading to expansion into Northern Egypt by 1988. In 1995, Nofa Egypt
        evolved into a leading corporation, expanding to Cairo and Borg
        El-Arab's industrial zone. Innovations like laser cutting technology in
        hardwood flooring production further cemented their market presence. The
        company, now known as Nofa Egypt (Natural Origin of Fine Arts),
        continues its legacy of excellence and innovation, receiving awards for
        restoring historical sites and pioneering floor designs.
      </p>
      <button
        className="bg-primary text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-primary/80 duration-300 text-sm sm:text-base lg:text-lg"
        onClick={handleReadMoreClick}
      >
        Read More <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </button>
    </div>
  );
};

export default Welcome;

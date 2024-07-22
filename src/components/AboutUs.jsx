import { ArrowRight } from "lucide-react";
import React from "react";

const AboutUs = () => {
  return (
    <div className="w-96 p-3 mt-7 md:w-1/2">
      <h2 className="text-4xl font-bold mb-4">
        Welcome to <span className="text-primary">NOFA EGYPT</span>
      </h2>
      <p className="mb-4">
        Started in 1950, Saleh M. & his Son Mohamed established a small wood
        Flooring Company in Downtown Alexandria , they believed that wood
        flooring is an art more than a job to do.
      </p>
      <button className="bg-primary text-white px-4 py-2 rounded flex gap-2">
        Read More <ArrowRight />
      </button>
    </div>
  );
};

export default AboutUs;

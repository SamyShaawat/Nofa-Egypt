/* eslint-disable react/no-unescaped-entities */
import React from "react";

const HistoryNofa = () => {
  return (
    <div className="p-6 lg:px-8 lg:py-2 lg:mx-auto">
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="grid grid-cols-1 gap-5 place-items-center"
      >
        {/* Icon and Text */}
        <div className="-mt-6">
          {" "}
          {/* Adjusted margin to move the icon up */}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nofa-egypt.appspot.com/o/aboutUs%2FgraphIcon.png?alt=media&token=03810e2a-2787-4c6d-8c88-23de3136c8ac"
            alt="Graph Icon"
            className="w-20 h-20"
          />
        </div>
        <p className="text-center text-lg text-gray-700 leading-relaxed max-w-[900px]">
          NOFA is a family business established in 1950 with a stellar projects
          record. With decades of experience and growth to testify for our
          exceptional work.
        </p>
      </div>
      {/* Image and Text */}
      <div className="lg:flex lg:items-center lg:justify-between lg:max-w-4xl lg:mx-auto mt-6">
        {/* Text */}
        <div data-aos="fade-right" data-aos-delay="200" className="w-full">
          <p className="text-lg text-gray-700 leading-relaxed">
            NOFA is a family business established in 1950 with a stellar
            projects record. Over the decades, our flooring company has seen
            remarkable growth and expansion, as demonstrated in the chart. From
            a modest beginning in 1950, completing just around 10,000 square
            meters of flooring, we have consistently increased our capacity and
            reach. By 1990, we had expanded our operations significantly,
            completing over 40,000 square meters. Today, as we enter 2024, we're
            proud to achieve an impressive milestone, with our team handling
            more than 80,000 square meters of projects. This growth reflects our
            commitment to quality, customer satisfaction, and innovation in the
            flooring industry.
          </p>
        </div>
        {/* Image */}
        <div className="w-full flex justify-center lg:justify-end lg:pl-4 mt-6 lg:mt-0">
          <img
            data-aos="fade-left"
            data-aos-delay="400"
            src="https://firebasestorage.googleapis.com/v0/b/nofa-egypt.appspot.com/o/aboutUs%2FGraph.gif?alt=media&token=420cf311-5e75-4103-80d5-57060e132a37"
            alt="Growth Graph"
            className="w-full max-w-sm rounded-lg border-2 border-primary shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryNofa;

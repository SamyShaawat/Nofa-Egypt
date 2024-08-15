/* eslint-disable react/no-unescaped-entities */
import React from "react";

const HistoryNofa = () => {
  return (
    <div className="p-6 lg:px-8 lg:py-8">
      <div className="lg:flex lg:items-center lg:justify-between lg:max-w-4xl lg:mx-auto">
        {/* Icon and Text */}
        <div className="grid grid-cols-1 gap-5 place-items-center mb-6">
          <div>
            <img
              src="../images/aboutUs/graphIcon.png"
              alt="Graph Icon"
              className="w-20 h-20"
            />
          </div>
          <p className="text-center text-lg text-gray-700 leading-relaxed max-w-3xl">
            NOFA is a family business established in 1950 with a stellar
            projects record. With decades of experience and growth to testify
            for our exceptional work.
          </p>
        </div>
      </div>
      {/* Image and Text */}
      <div className="lg:flex lg:items-center lg:justify-between lg:max-w-4xl lg:mx-auto mt-10">
        {/* Text */}
        <div className="w-full max-w-lg lg:pr-4">
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
            src="../images/aboutUs/Graph.gif"
            alt="Growth Graph"
            className="w-full max-w-sm rounded-lg border-2 border-primary hover:shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryNofa;

import React from "react";

const AboutCertificate = ({ onCertificateClick }) => {
  return (
    <div className="relative p-6 lg:px-8 lg:py-2 lg:mx-auto lg:max-w-4xl flex flex-col sm:flex-row gap-5 items-center mb-10 ">
      {/* ISO Image with Hover Effect */}
      <div className="relative group">
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src="https://firebasestorage.googleapis.com/v0/b/nofa-egypt.appspot.com/o/certificates%2FISO.png?alt=media&token=e5529caf-83ff-4893-9bbc-bfbe1e397e33"
          alt="ISO Certified"
          className="w-32 h-32 rounded-full scale-100 hover:scale-110 hover:cursor-pointer duration-300 sm:mx-auto md:ml-1 mt-3 sm:text-left lg:mr-16 shadow-xl"
          onClick={onCertificateClick}
        />
        <button
          onClick={onCertificateClick}
          className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold opacity-0 group-hover:opacity-100 duration-300 rounded-full bg-primary  border-2 border-secondary shadow-lg w-[135px] h-[135px] mt-3"
        >
          View Certificate
        </button>
      </div>

      {/* Text Content */}
      <div
        data-aos="fade-left"
        data-aos-delay="400"
        className="w-full max-w-[900px] text-left"
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          NOFA Egypt is a certified designer, manufacturer, and supplier of
          natural wood flooring that is recognized globally and is certified by
          more than one entity, ensuring the quality of our products, the safety
          of our work environment, and assures our customers of a great choice
          and a perfect delivery whatever the criteria.{" "}
          <span className="text-lg font-bold text-blue-800">
            Click on the ISO image to view our Certificate.
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutCertificate;

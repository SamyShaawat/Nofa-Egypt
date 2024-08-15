import { useState } from "react";

const AboutCertificate = () => {
  const [showImage, SetShowImage] = useState(false);
  const HandlerCertificate = () => {
    SetShowImage(!showImage);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2   gap-5 place-items-center p-5 ">
      <div className={`${showImage ? "blur-[2px]" : ""}`}>
        <img
          className="w-24 h-24 scale-100 hover:scale-150 hover:cursor-pointer duration-300 "
          src="../images/certificates/ISO.png"
          alt="ISO Certifiate"
          onClick={HandlerCertificate}
        />
      </div>

      <div className={`${showImage ? "blur-[2px]" : ""}`}>
        <p>
          NOFA Egypt is a certified designer, manufacturer, and supplier of
          natural wood flooring That is recognized globally and is certified
          from more than one entity, ensuring the quality of our products, the
          safety of our work environment, and assures our customers of a great
          choice and a perfect delivery whatever the criteria.
        </p>
      </div>
      {/* Image that appears on click */}
      {showImage && (
        <img
          src="../images/aboutUs/certificate_2.png"
          alt="Certificate"
          className="absolute  w-64 h-auto z-10 rounded-lg border-4  border-primary "
        />
      )}
    </div>
  );
};
export default AboutCertificate;

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import AboutHero from "../components/About Us/AboutHero";
import WhoWeAre from "../components/About Us/WhoWeAre";
import Mission from "../components/About Us/Mission";
import Vision from "../components/About Us/Vision";
import WhyNofa from "../components/About Us/WhyNofa";
import HistoryNofa from "../components/About Us/HistoryNofa";
import OfferNofa from "../components/About Us/OfferNofa";
import AboutCertificate from "../components/About Us/AboutCertificate";

const About = () => {
  const [showImage, setShowImage] = useState(false);

  const handlerCertificate = () => {
    setShowImage(!showImage);
  };

  const handleClose = () => {
    setShowImage(false);
  };

  // Close the image when the Esc key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Nofa Egypt | About Us</title>
      </Helmet>

      {/* Certificate Image Overlay */}
      {showImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleClose}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nofa-egypt.appspot.com/o/aboutUs%2Fcertificate.png?alt=media&token=41d281f0-22be-4413-95b9-a4236c8504d7"
            alt="Certificate"
            className="w-full h-full object-contain"
          />
        </div>
      )}

      {/* Main Content */}
      <div className={`mt-24 ${showImage ? "backdrop-blur-sm" : ""}`}>
        <AboutHero />
        <WhoWeAre />
        <Mission />
        <Vision />
        <WhyNofa />
        <AboutCertificate onCertificateClick={handlerCertificate} />
        <HistoryNofa />
        <OfferNofa />
      </div>
    </>
  );
};

export default About;

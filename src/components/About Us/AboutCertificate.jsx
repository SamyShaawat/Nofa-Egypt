import { useState } from "react";
import YouTubeVideo from "./YouTubeVideo";
const AboutCertificate = () => {
  const [showImage, SetShowImage] = useState(false);

  const HandlerCertificate = () => {
    SetShowImage(!showImage);
  };
  // to click any place in component disappear image certificate
  const handleClose = () => {
    SetShowImage(false);
  };
  return (
    <>
      {/* image and text */}
      <div
        className={`grid grip-cols-1 gap-5 place-items-center ${
          showImage ? "blur-[2px]" : ""
        }`}
        onClick={showImage ? handleClose : null}
      >
        <div>
          <img src="../images/aboutUs/hamerIcon.png" alt="" />
        </div>
        <p>
          NOFA offers a wide range of patterns and flooring products tailored to
          the latest trends across various markets, meeting the diverse needs of
          customers.
        </p>
      </div>
      {/* title text */}
      <div>
        <p
          className={`text-center text-2xl font-bold mb-4 p-3 ${
            showImage ? "blur-[2px]" : ""
          }`}
          onClick={showImage ? handleClose : null}
        >
          Here is A Preview of our Work
        </p>
      </div>
      {/* Two video  */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 place-items-center gap-2 ${
          showImage ? "blur-[2px]" : ""
        }`}
        onClick={showImage ? handleClose : null}
      >
        <YouTubeVideo videoId="tn4SFHWDCgo" title="Decking and Pergola" />
        <YouTubeVideo videoId="afjFmEiZFmA" title="Parquet Final" />
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center p-5  "
        onClick={showImage ? handleClose : null}
      >
        <div className={`${showImage ? "blur-[2px]" : ""}`}>
          <img
            className="w-24 h-24 scale-100 hover:scale-150 hover:cursor-pointer duration-300 "
            src="../images/certificates/ISO.png"
            alt="ISO Certifiate"
            onClick={HandlerCertificate}
          />
        </div>

        <div
          className={`${showImage ? "blur-[2px]  " : ""}`}
          onClick={showImage ? handleClose : null}
        >
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
            src="../images/aboutUs/certificate_2.jpg"
            alt="Certificate"
            className="absolute transform  -translate-y-1/3 w-64 sm:w-80 h-auto z-50 rounded-lg border-4 border-primary"
          />
        )}
      </div>
    </>
  );
};
export default AboutCertificate;

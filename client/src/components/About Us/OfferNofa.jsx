import YouTubeVideo from "./YouTubeVideo";

const OfferNofa = () => {
  return (
    <div className="p-6 lg:px-8 lg:py-2 lg:mx-auto mb-10">
      {/* Image and text */}
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="grid grid-cols-1 gap-5 place-items-center"
      >
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nofa-egypt.appspot.com/o/aboutUs%2FhamerIcon.png?alt=media&token=3c4a7508-e53e-444a-b951-336967fe8277"
            alt="Hamer Icon"
          />
        </div>
        <p className="text-center text-lg text-gray-700 leading-relaxed max-w-[950px]">
          NOFA offers a wide range of patterns and flooring products tailored to
          the latest trends across various markets, meeting the diverse needs of
          customers.
        </p>
      </div>
      {/* Title text */}
      <div>
        <p
          data-aos="zoom-in"
          data-aos-delay="300"
          className="text-center text-2xl font-bold mb-4 p-3"
        >
          Here is A Preview of our Work
        </p>
      </div>
      {/* Two videos */}
      <div className="flex flex-col lg:flex-row gap-12 px-4  sm:px-6 lg:px-8 lg:max-w-4xl lg:mx-auto">
        {/* Left video */}
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="flex-1 shadow-xl "
        >
          <YouTubeVideo videoId="tn4SFHWDCgo" title="Decking and Pergola" />
        </div>
        {/* Right video */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="flex-1 shadow-xl"
        >
          <YouTubeVideo videoId="afjFmEiZFmA" title="Parquets" />
        </div>
      </div>
    </div>
  );
};

export default OfferNofa;

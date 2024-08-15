import YouTubeVideo from "./YouTubeVideo";

const OfferNofa = () => {
  return (
    <div className="p-6">
      {/* image and text */}
      <div className="grid grip-cols-1 gap-5 place-items-center">
        <div>
          <img src="../images/aboutUs/hamerIcon.png" alt="" />
        </div>
        <p className="">
          NOFA offers a wide range of patterns and flooring products tailored to
          the latest trends across various markets, meeting the diverse needs of
          customers.
        </p>
      </div>
      {/* title text */}
      <div>
        <p className="text-center text-2xl font-bold mb-4 p-3">
          Here is A Preview of our Work
        </p>
      </div>
      {/* Two video  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-5 ">
        <YouTubeVideo videoId="tn4SFHWDCgo" title="Decking and Pergola" />
        <YouTubeVideo videoId="afjFmEiZFmA" title="Parquet Final" />
      </div>
    </div>
  );
};

export default OfferNofa;

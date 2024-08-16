import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const YouTubeVideo = ({ videoId, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  // Use YouTube's default thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="flex flex-col items-center p-2 border border-primary rounded-xl">
      <div className="relative w-full max-w-md h-40 border border-primary rounded-lg overflow-hidden shadow-lg sm:max-w-lg sm:h-56">
        {!isPlaying ? (
          <div
            className="relative w-full h-full bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
            onClick={handlePlay}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 bg-white/20 cursor-pointer">
              <FaPlay className="hover:scale-110 text-[#7ecafd] size-16  transition duration-300 ease-in-out" />
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <p className="mt-2 text-xl text-center text-black font-bold">{title}</p>
    </div>
  );
};

export default YouTubeVideo;

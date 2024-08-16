import React, { useState } from "react";

const YouTubeVideo = ({ videoId, title, thumbnailUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center p-4 border-2 border-blue-300 rounded-lg ">
      <div className="relative w-64 h-40 sm:w-80 sm:h-48 border-2 border-blue-300 rounded-lg overflow-hidden shadow-lg">
        {!isPlaying ? (
          // if not click to play video
          <>
            {/* thumbnailUrl  if video error */}
            {/* <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover"
            /> */}
            <div
              className="absolute inset-0 flex items-center justify-center bg-opacity-75 bg-white cursor-pointer "
              onClick={handlePlay}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke=" #17588e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" hover:scale-110 transition duration-300 ease-in-out"
              >
                {/* <circle cx="12" cy="12" r="3" /> */}
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
            </div>
          </>
        ) : (
          // if Play video after click play
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
      <p className="mt-2 text-center text-balck font-bold ">{title}</p>
    </div>
  );
};

export default YouTubeVideo;

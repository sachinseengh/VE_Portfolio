import React, { useState } from 'react';
import { Service } from '../Constant';
import { FaPlay } from 'react-icons/fa'; // Import play icon

const ServiceItem = () => {
  return (
    <div className="lg:pt-8 md:pt-8 container flex flex-row justify-center pb-20">
      {Service.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

const VideoCard = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center font-devanagari text-sm md:text-xl lg:text-2xl">Clean Edit</h1>

      <div
        className="relative w-11/12 h-auto rounded-md border border-gray-300 shadow-2xl shadow-gray-700/50 cursor-pointer overflow-hidden"
        onClick={() => setIsPlaying(true)}
      >
        {isPlaying ? (
          <iframe
            className="w-full h-72 md:h-80 lg:h-96"
            src={`${video.src}?autoplay=1&rel=0`}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${video.src.split("embed/")[1]?.split("?")[0]}/maxresdefault.jpg`}
              alt="Video thumbnail"
              className="w-full h-72 md:h-80 lg:h-96 object-cover"
            />
            {/* Circular Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center shadow-lg transition duration-300 hover:scale-110 ">
                <FaPlay className="text-orange-600 text-3xl md:text-4xl lg:text-5xl ml-1 opacity-70" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceItem;

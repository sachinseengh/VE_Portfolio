import React, { useState } from "react";
import { Service } from "../Constant";
import { FaPlay } from "react-icons/fa"; // Import play icon
import { motion } from "framer-motion";

const ServiceItem = () => {
  return (
    <div className="container flex flex-wrap justify-center lg:flex-nowrap gap-8 pb-20">
      {Service.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

const VideoCard = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col items-center w-full sm:max-w-sm md:max-w-md lg:w-1/2 xl:max-w-xl">
      <motion.h1
      
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -150 }}
      transition={{ duration: 0.5 }}
      
      className="text-center font-devanagari text-sm md:text-xl lg:text-3xl text-orange-500 mb-3">
        {video.title}
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 150 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-auto rounded-md border border-gray-300 shadow-2xl shadow-gray-700/50 cursor-pointer overflow-hidden"
        onClick={() => setIsPlaying(true)}
      >
        {isPlaying ? (
          <iframe
            className="w-full aspect-video"
            src={`${video.src}?autoplay=1&rel=0`}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${
                video.src.split("embed/")[1]?.split("?")[0]
              }/maxresdefault.jpg`}
              alt="Video thumbnail"
              className="w-full aspect-video object-cover"
            />
            {/* Circular Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full flex items-center justify-center shadow-lg transition duration-300 hover:scale-110">
                <FaPlay className="text-orange-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ml-1 opacity-70" />
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ServiceItem;

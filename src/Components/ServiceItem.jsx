import React, { useState } from "react";
import { Service } from "../Constant";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const ServiceItem = () => {
  return (
    <div className="container flex flex-wrap justify-center pb-20 px-4">
      {Service.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

const VideoCard = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col items-center mb-5 w-full sm:w-9/12 md:w-7/12 lg:w-6/12 xl:w-5/12 px-2 lg:mb-5 ">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -150 }}
        transition={{ duration: 0.5 }}
        className="text-center font-devanagari text-lg md:text-xl lg:text-2xl mb-5 text-orange-500 font-semibold"
      >
        {video.title}
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 150 }}
        transition={{ duration: 0.5 }}
        className="relative w-full aspect-video rounded-md border border-gray-300 shadow-2xl shadow-gray-700/50 cursor-pointer overflow-hidden"
        onClick={() => setIsPlaying(true)}
      >
        {isPlaying ? (
          <iframe
            className="w-full h-full"
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
              className="w-full h-full object-cover"
            />
            {/* Circular Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center shadow-lg transition duration-300 hover:scale-110">
                <FaPlay className="text-orange-600 text-3xl md:text-4xl lg:text-5xl ml-1 opacity-70" />
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ServiceItem;

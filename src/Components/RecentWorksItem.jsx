import React, { useState, useEffect } from 'react';
import { Videos } from '../Constant';
import profile from '../assets/images/sujay.png';
import { FaPlay } from 'react-icons/fa'; // Import play icon
import {motion} from 'framer-motion'

const RecentWorksItem = () => {
  return (
    <div className="pt-20 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
};

const VideoItem = ({ video }) => {
  const [poster, setPoster] = useState(profile); // Default thumbnail
  const [isPlaying, setIsPlaying] = useState(false); // Track whether video is playing

  useEffect(() => {
    if (video.src.includes("youtube.com")) {
      const videoId = video.src.split("embed/")[1]?.split("?")[0];
      setPoster(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
    }
  }, [video.src]);

  return (
    <motion.div
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.5 }}


      className="relative w-full h-56 md:h-72 lg:h-80 rounded-lg border border-gray-300 overflow-hidden shadow-2xl shadow-gray-400 cursor-pointer"
      onClick={() => setIsPlaying(true)} // Start video when clicked
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
          <img src={poster} alt="Video thumbnail" className="w-full h-full object-cover" />
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center shadow-lg transition duration-300 hover:scale-110">
              <FaPlay className="text-orange-600 text-3xl md:text-4xl lg:text-5xl ml-1 opacity-70" />
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default RecentWorksItem;

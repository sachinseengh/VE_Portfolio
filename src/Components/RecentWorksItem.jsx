import React from 'react';
import reel from '../assets/images/reel.mp4';

const videos = [
  { id: 1, src: reel },
  { id: 2, src: reel },
  { id: 3, src: reel },
  { id: 4, src: reel },
];

const RecentWorksItem = () => {
  return (
    <div className="pt-20 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <div key={video.id} className="flex flex-col items-center">
          <video
            controls
            className="w-full h-40 md:w-auto md:h-auto lg:w-auto lg:h-auto object-cover rounded-lg border border-gray-300"
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default RecentWorksItem;

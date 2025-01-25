import React from 'react';
import {Videos} from '../Constant'

const RecentWorksItem = () => {
  return (
    <div className="pt-20 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Videos.map((video) => (
       <div className="w-full h-56 md:h-72 lg:h-80 rounded-lg border border-gray-300 overflow-hidden">
       <video
         controls
         className="w-full h-full object-cover"
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

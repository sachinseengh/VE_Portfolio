import React from 'react';
import reel from '../assets/images/reel.mp4';

const ServiceItem = () => {
  return (
    <>
    <div className="pt-20 container flex flex-row justify-center">
      {/* First Video */}
      <div className="flex flex-col items-center mx-4">
        <h1 className="text-center font-devanagari  text-sm md:text-xl first-line:lg:text-2xl">Clean Edit</h1>
        <video
          controls
          autoPlay
          muted
          className="w-3/4 h-3/4 object-cover rounded-sm border border-gray-300"
        >
          <source src={reel} type="video/mp4"  />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Second Video */}
      <div className="flex flex-col items-center mx-4">
        <h1 className="text-center font-devanagari text-sm md:text-xl first-line:lg:text-2xl">3D Reel Edit</h1>
        <video
          controls
          autoPlay
          muted
          className="w-3/4 h-3/4 object-cover rounded-sm border border-gray-300"
        >
          <source src={reel} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>



    
    </>
  );
};

export default ServiceItem;

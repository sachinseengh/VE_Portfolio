import React from 'react';



import {Service} from '../Constant'

const ServiceItem = () => {
  return (
    <>
    <div className="pt-20 container flex flex-row justify-center pb-20 ">
      {Service.map((video)=>(
         <div className="flex flex-col items-center">
         <h1 className="text-center font-devanagari  text-sm md:text-xl first-line:lg:text-2xl">Clean Edit</h1>
         <video
           controls
           autoPlay
           muted
           className="w-3/4 h-auto object-cover rounded-md border border-gray-300  shadow-2xl shadow-gray-700/50"
         >
           <source src={video.src} type="video/mp4"  />
           Your browser does not support the video tag.
         </video>
       </div>

      ))}
     

   
      
    </div>



    
    </>
  );
};

export default ServiceItem;

import React from 'react'
import reel from '../assets/images/reel.mp4'


const RecentWorksItem = () => {
  return (
    <>
   <div className="pt-20 container flex flex-col md:flex-row lg:flex-row justify-center gap-2 lg:gap-0 md:gap-0">
     
   
         {/* Second Video */}
         <div className="flex flex-col items-center mx-4">
           
           <video
             controls
            
             className="w-full h-40 md:w-auto md:h-auto  lg:w-auto lg:h-auto object-cover rounded-sm border border-gray-300"
           >
             <source src={reel} type="video/mp4" />
             Your browser does not support the video tag.
           </video>
         </div>

         
         {/* Second Video */}
         <div className="flex flex-col items-center mx-4">
           
           <video
             controls
            
             className="w-full h-40 md:w-auto md:h-auto  lg:w-auto lg:h-auto object-cover rounded-sm border border-gray-300"
           >
             <source src={reel} type="video/mp4" />
             Your browser does not support the video tag.
           </video>
         </div>

         
         {/* Second Video */}
         <div className="flex flex-col items-center mx-4">
           
           <video
             controls
             
             className="w-full h-40 md:w-auto md:h-auto  lg:w-auto lg:h-auto object-cover rounded-sm border border-gray-300"
           >
             <source src={reel} type="video/mp4" />
             Your browser does not support the video tag.
           </video>
         </div>

         
        
       </div>
    
    </>
  )
}

export default RecentWorksItem
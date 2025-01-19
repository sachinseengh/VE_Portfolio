import React from "react";
import profile from "../assets/images/profile.png";
import { Cursor, useTypewriter } from "react-simple-typewriter";


const Hero = () => {


  const [text] = useTypewriter({
    words: ['Sujay Sharma'],
    loop: 0,  // You can set it to true for infinite loops
    typeSpeed: 150,
    deleteSpeed: 100,
    delaySpeed: 1000,
  });




  return (
    <div className="flex container  flex-col md:flex-row justify-center lg:justify-start items-center lg:items-start text-start  mb-[4rem] md:mb-[6rem] lg:mb-[8rem]">
      {/* Intro Section */}
      <div className="intro flex-row lg:w-3/4 w-full pt-10 lg:pt-20">
        <div className="title">
          <h1 className="lg:text-[2.9rem] md:text-[1.5rem] text-[1.5rem] font-bleeding lg:leading-[4.9rem] md:leading-[2.5rem] sm:leading-[2.7rem] mb-3 text-[#004591] text-center lg:text-start">
            Turn Raw Footage into <br /> Captivating Stories
          </h1>

          <div className="Name mt-[2rem] hidden lg:block md:block ">
           
            <span className='text-[#FC6F03] text-4xl font-devanagari pb-2'>{text}</span>
        <span className='text-sm lg:text-4xl  md:text-2xl text-red-500'><Cursor/></span>

            <div className="bg-[#004591] pt-1 mt-2 w-[11rem] text-center rounded-md">
              <h1 className="text-xl font-devanagari text-white">Video Editor</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Section */}
      <div className="photo  lg:w-1/4 w-full mt-10 md:pt-0 flex flex-row justify-center items-end">
        <img
          src={profile}
          alt="Profile"
          className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>


     
      {/* Name Section for Small Screens */}
      <div className="Name mt-[4rem] block lg:hidden md:hidden">
      <span className='text-[#FC6F03] lg:text-4xl md:text-4xl text-2xl font-devanagari pb-2'>{text}</span>
      <span className='text-xl lg:text-4xl  md:text-2xl text-red-500'><Cursor/></span>
        <div className="bg-[#004591] pt-1 lg:w-[11rem] md:w-[11rem] w-[9rem] text-center rounded-md">
          <h1 className="text-xl font-devanagari text-white">Video Editor</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;

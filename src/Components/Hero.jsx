import React from "react";
import profile from "../assets/images/sujay.png";
import { Cursor, useTypewriter } from "react-simple-typewriter";


const Hero = () => {


  const [text] = useTypewriter({
    words: ['Video Editor'],
    loop: 0,  // You can set it to true for infinite loops
    typeSpeed: 150,
    deleteSpeed: 100,
    delaySpeed: 1000,
  });




  return (
    <div className="container " id="home">
    <div className="flex mt-[4rem]  flex-col md:flex-row justify-center lg:justify-start items-center lg:items-start text-start  border-b border-gray-700 border-opacity-60 lg:mb-[4rem] ">
      {/* Intro Section */}
      <div className="intro flex-row  items-center justify-center lg:w-3/4 w-full pt-10 lg:pt-20">
        <div className="title">
          <h1 className="lg:text-[2.9rem] md:text-[1.5rem] text-[1.5rem] font-bleeding lg:leading-[4.9rem] md:leading-[2.5rem] sm:leading-[2.7rem] mb-3 text-[#004591] text-center md:text-start lg:text-start">
            Turn Raw Footage into <br /> Captivating Stories
          </h1>

          <div className="Name mt-[7rem] hidden lg:block md:block ">
           
            <span className='text-[#FC6F03] text-3xl font-devanagari pb-2'>Sujay Sharma</span>
      
            <div className=" pt-1 mt-2   ">
              <span className="text-3xl font-devanagari text-black "><span className="text-[#004591]">I am a </span><span className="underline">{text}</span></span>
              <span className='text-sm lg:text-4xl  md:text-2xl text-red-500'><Cursor/></span>
            </div>
          </div>
          <div>
            {/* <h1>Whatsapp</h1> */}
          </div>
        </div>
      </div>

      {/* Photo Section */}
      <div className="photo  w-2/4 flex items-center justify-center mt-10 md:pt-0 ">
        <img
          src={profile}
          alt="Profile"
          className=" object-contain " height={600} width={450}
        />
      </div>


     
      {/* Name Section for Small Screens */}
      <div className="Name mt-[4rem] block lg:hidden md:hidden ">
      
           
           <span className='text-[#FC6F03] text-3xl font-devanagari pb-2'>Sujay Sharma</span>
     
           <div className=" pt-1 mt-2   ">
             <span className="text-3xl font-devanagari text-black "><span className="text-[#004591]">I am a </span><span className="underline">{text}</span></span>
             <span className='text-sm lg:text-4xl  md:text-2xl text-red-500'><Cursor/></span>
           </div>
         
      </div>
    </div>
    </div>
  );
};

export default Hero;

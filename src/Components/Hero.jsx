import React from "react";
import profile from "../assets/images/sujay.png";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Video Editor"],
    loop: 0, // You can set it to true for infinite loops
    typeSpeed: 150,
    deleteSpeed: 100,
    delaySpeed: 1000,
  });

  return (
    <div className="container " id="home">
      <div className="flex mt-[4rem]  flex-col md:flex-row justify-center lg:justify-start items-center lg:items-start text-start  lg:border-b md:border-b border-gray-700 border-opacity-20 lg:mb-[4rem] ">
        {/* Intro Section */}
        <div className="intro flex-row  items-center justify-center lg:w-3/4 w-full pt-10 lg:pt-20">
          <div className="title">
            <motion.h1
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="lg:text-[2.9rem] md:text-[1.5rem] text-[1.5rem] font-bleeding lg:leading-[4.9rem] md:leading-[2.5rem] sm:leading-[2.7rem] mb-3 text-[#004591] text-center md:text-start lg:text-start"
            >
              Turn Raw Footage into <br /> Captivating Stories
            </motion.h1>

            <motion.div
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            
           
            className="Name mt-[7rem] hidden lg:block md:block ">
              <motion.span
               variants={container(0.6)}
               initial="hidden"
               animate="visible"
              className="text-[#FC6F03] text-3xl font-devanagari pb-2">
                Sujay Sharma
              </motion.span>

              <div className=" pt-1 mt-2   ">
                <span className="text-3xl font-devanagari text-black ">
                  <span className="text-[#004591]">I am a </span>
                  <span className="font-bold">{text}</span>
                </span>
                <span className="text-sm lg:text-4xl  md:text-2xl text-red-500">
                  <Cursor />
                </span>
              </div>
            </motion.div>
            <div>{/* <h1>Whatsapp</h1> */}</div>
          </div>
        </div>

        {/* Photo Section */}
        <div className="photo  w-2/4 flex items-center justify-center mt-10 md:pt-0 ">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            src={profile}
            alt="Profile"
            className=" object-contain   "
            height={600}
            width={450}
            style={{ filter: "drop-shadow(6px 0px 2px gray)" }}
          />
        </div>

        {/* Name Section for Small Screens */}
        <motion.div 
        
        variants={container(0.5)}
               initial="hidden"
               animate="visible"
        className=" w-full text-center Name pt-[1rem] pb-[1rem] block lg:hidden md:hidden border-t border-gray-500  border-opacity-20">
          <span className="text-[#FC6F03] text-2xl font-devanagari pb-2 text-center">
            Sujay Sharma
          </span>

          <div className=" pt-1 mt-2   ">
            <span className="text-2xl font-devanagari text-black  text-center">
              <span className="text-[#004591]">I am a </span>
              <span className="font-bold">{text}</span>
            </span>
            <span className="text-sm lg:text-3xl  md:text-2xl text-red-500">
              <Cursor />
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

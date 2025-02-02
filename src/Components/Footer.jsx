import React from "react";
import profile from "../assets/images/sujay.png";
import whatsApp from "../assets/images/whatsapp.png";
import "../index.css";
import Gmail from "../assets/images/gmail.png";
import {motion} from 'framer-motion';

const Footer = () => {
  return (
    <footer
      className="w-full bg-gray-900 text-white py-6 px-5 rounded-xl mt-[5rem] relative overflow-hidden 
                 shadow-[0px_10px_30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:shadow-[0px_20px_50px_rgba(0,0,0,1)]"
      id="contact"
      style={{
        background: "linear-gradient(145deg, #1f2937, #111827)", // Adds a soft 3D gradient effect
        boxShadow:
          "0 10px 20px rgba(0, 0, 0, 0.6), inset 0 4px 6px rgba(255, 255, 255, 0.1)", // Outer + Inner Shadow
      }}
    >
      {/* Outer Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-40 blur-3xl"></div>

      <motion.div 
      
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 0.4
       }}
      
      className="w-full flex flex-col items-center justify-center gap-8 relative z-10">
        {/* Profile Section */}
        <div className="flex items-center gap-4 flex-col">
          <div className="w-16 h-16 md:w-20 md:h-20 relative">
            <img
              src={profile}
              alt="Profile"
              className="rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
              style={{
                filter: "drop-shadow(0 8px 12px rgba(0, 0, 0, 0.6))",
              }}
              height={550}
              width={550}
            />
          </div>
          <h2 className="text-xl font-semibold md:text-2xl drop-shadow-lg">
            Sujay Sharma
          </h2>
        </div>

        {/* About Me Section */}
        <div className="text-center max-w-md border-x border-white p-3 shadow-md shadow-gray-700 rounded-lg">
          <h2 className="text-lg md:text-xl font-semibold mb-2 drop-shadow-md">
            About Me
          </h2>
          <p className="text-sm md:text-base text-gray-100">
          I'm Sujay, a passionate video editor who loves bringing stories to life through creative and engaging visuals. Whether it's cutting scenes smoothly, adding stunning effects, or optimizing video quality, I aim to create amazing content that stands out.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://wa.me/11234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact me on WhatsApp"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm md:text-base shadow-lg shadow-green-700 hover:bg-green-600 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img src={whatsApp} alt="WhatsApp" className="h-6 w-6" />
            WhatsApp
          </a>
          <a
            href="mailto:Suzyt182@gmail.com"
            className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm md:text-base shadow-lg shadow-orange-700 hover:bg-orange-600 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img src={Gmail} alt="Gmail" className="h-6 w-6" />
            Gmail
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

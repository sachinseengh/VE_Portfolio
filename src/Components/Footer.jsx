import React from 'react';
import profile from "../assets/images/sujay.png"
import whatsApp from '../assets/images/whatsapp.png'
import '../index.css'

const Footer = () => {
  return (
    <footer className=" w-full bg-gray-900 text-white py-6 px-5 rounded-lg mt-[5rem] shadow-black shadow-2xl" id="contact">
      <div className="w-full flex flex-col items-center justify-center gap-8">
        {/* Profile Section */}
        <div className="flex items-center gap-4 flex-col">
          <div className="w-16 h-16 md:w-20 md:h-20">
            <img
              src={profile}
              alt="Profile"
              className=" rounded-lg filter drop-shadow-lg"
              style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5))" }}

              height={550}
              width={550}
            />
          </div>
          <h2 className="text-xl font-semibold md:text-2xl ">Sujay Sharma</h2>
        </div>

        {/* About Me Section */}
        <div className="text-center max-w-md border-x border-white p-3">
          <h2 className="text-lg md:text-xl font-semibold mb-2">About Me</h2>
          <p className="text-sm md:text-base text-gray-100">
            Hello! I'm Sujay, a passionate developer with a love for creating
            innovative and efficient solutions. Whether it's designing
            user-friendly interfaces, optimizing performance, or exploring new
            technologies, I strive to deliver exceptional results.
          </p>
        </div>

        {/* Contact Button */}
        <div className="flex items-center justify-center">
          <a
            href="https://wa.me/11234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact me on WhatsApp"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm md:text-base hover:bg-green-600 transition duration-300"
          >
            <img src={whatsApp} alt="WhatsApp" className="h-6 w-6" />
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

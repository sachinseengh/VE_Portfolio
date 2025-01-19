import React from "react";

import profile from "../assets/images/profile.png";

const Contact = () => {
  return (
    <div className="container">
      <div className="relative mt-20">
        {/* Upper div */}
        <div className="upper flex flex-col lg:flex-row md:flex-row relative bg-[#004591]  h-auto rounded-lg mx-3 z-50 bottom-3 px-16 py-10 ">

          <div className="w-full lg:w-1/2 md:w-1/2 ">
            <img src={profile} alt="" height={150} width={120} />

            <div className="mt-10">
              <h1 className="font-devanagari text-2xl text-white">
                Sujay Sharma
              </h1>
              <h1 className="font-devanagari text-xl text-orange-500">
                Video Editor
              </h1>
            </div>
          </div>
          <div className="w-full lg:w-1/2 md:w-1/2">
          
            <div>
                <h1 className="text-white text-xl font-devanagari">About Me</h1>

                <h1 className="text-white text-2xl font-devanagari mt-5">Sujay Sharma</h1>
                <p className="text-white font-devanagari mt-2 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis praesentium exercitationem dolorum quis itaque molestias recusandae corrupti, libero hic aperiam. Maiores, sed facilis perferendis consectetur dolorum ipsam. Quo ipsum maiores ab voluptas amet quis voluptatum corrupti quia! Cumque, dolore eveniet?</p>

                <button className="bg-orange-500 mt-3 rounded-md w-24 h-8"> WhatsApp</button>
            </div>

          </div>
        </div>

        {/* Below div */}
        <div className="absolute bottom-0 bg-orange-500 h-32 rounded-lg z-10 w-full"></div>
      </div>
    </div>
  );
};

export default Contact;

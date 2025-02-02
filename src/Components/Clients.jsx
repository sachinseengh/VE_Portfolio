import React from "react";
import ishan from "../assets/images/ishan.jpeg";
import saptarshi from "../assets/images/saptarshi.png";

import { Review } from "../Constant";
import {motion} from 'framer-motion';

const Clients = () => {
  return (
    <div className="container" id="client">
      <h1 className="text-center text-4xl text-orange-500 font-devanagari mt-[6rem]">
        Happy Clients
      </h1>

      <motion.div
      
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      
      className="flex flex-col items-center md:flex-row lg:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6 mt-8">
        {Review.map((review) => (
          <div className="lg:w-1/3 md:w-1/3 w-full flex flex-col md:flex-col lg:flex-col lg:items-center lg:justify-center justify-center items-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex  items-center justify-center">
              <img
                src={review.image}
                alt="Client Image"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="md:items-center lg:items-center px-5">
              <h1 className="font-devanagari md:text-xl lg:text-xl text-center">
                {review.name}
              </h1>
              <p className="text-start md:text-center lg:text-center text-sm border border-gray-600 p-2 rounded-lg shadow-sm shadow-black">
                {review.review}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Clients;

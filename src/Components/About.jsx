import React from "react";

import laptop from "../assets/images/About.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div
        className="flex container flex-col md:flex-row lg:flex-row w-full justify-center items-center  "
        id="about"
      >
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 lg:w-1/2 mt-[1rem]"
        >
          <img
            src={laptop}
            alt=""
            className="w-full"
            style={{ filter: "drop-shadow(0 3px 8px gray)" }}
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className=" w-full md:w-1/2 lg:w-1/2  p-5"
        >
          <h1 className="text-black text-xl lg:text-2xl md:text-2xl font-devanagari text-center   ">
            We craft professional video edits that engage your audience and
            achieve your goals.
          </h1>
          <h1 className="text-[#FC6F03] text-2xl lg:text-3xl md:text-3xl font-devanagari text-center mt-8">
            10+ Trusted Clients
          </h1>
        </motion.div>
      </div>
    </>
  );
};

export default About;

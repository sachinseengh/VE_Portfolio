import React from "react";
import line from "../assets/images/line.svg";
import editor from "../assets/images/editor.svg";
import  time from "../assets/images/time.svg";
import music from "../assets/images/Music.svg";
import revision from "../assets/images/unlimitedRevision.svg";
import customer from "../assets/images/customerService.svg";


const WhyChooseUs = () => {
  return (
    <div className="container  ">
      <div className="flex flex-col md:flex-row lg:flex-row justify-start mb-10 mt-20">


    {/* Why Choose us text and svg */}
        <div className="flex flex-row">
        <div className="w-auto">
          <img src={line} height={5} width={5} />
        </div>

        <div className="ml-2 w-52">
          <p className="text-3xl font-devanagari">
            Why
            <br />
            Choose Us?
          </p>
        </div>
        </div>


        {/* boxes */}
        <div className="flex flex-row flex-wrap mt-7 ml-2 md:mt-0 lg:mt-0 md:ml-28 lg:ml-32 lg:gap-5 md:gap-1 gap-5">

          <div className="bg-orange-500 rounded-3xl w-36 h-36  p-4 pt-10">
            <img src={editor} alt="" width={50} height={50} />
            <h1 className="font-devanagari pt-2 text-white tracking-wide">Expert<br/> Editing</h1>
          </div>

          <div className="bg-orange-500 rounded-3xl w-36 h-36  p-4 pt-10">
            <img src={time} alt="" width={25} height={25} />
            <h1 className="font-devanagari pt-2 text-white tracking-wide">Fast<br/> Turnaround</h1>
          </div>

          <div className="bg-orange-500 rounded-3xl w-36 h-36  p-4 pt-10">
            <img src={customer} alt="" width={40} height={40} />
            <h1 className="font-devanagari pt-2 text-white tracking-wide ">Customizable<br/> Service</h1>
          </div>

          <div className="bg-orange-500 rounded-3xl w-36 h-36  p-4 pt-10">
            <img src={revision} alt="" width={40} height={40} />
            <h1 className="font-devanagari pt-2 text-white tracking-wide">Unlimited<br/>Revision</h1>
          </div>

          <div className="bg-orange-500 rounded-3xl w-36 h-36  p-4 pb-2 pt-10">
            <img src={music} alt="" width={25} height={25} />
            <h1 className="font-devanagari pt-2 text-white tracking-wide">Royalty-Free <br/>Music  </h1>
          </div>

          
          
        
          
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

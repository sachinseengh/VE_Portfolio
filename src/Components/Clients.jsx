import React from "react";
import profile from "../assets/images/profile.png";


const Clients = () => {
  return (
    <div className="container">
      <h1 className="text-center text-2xl text-orange-500 font-devanagari">
        Happy Clients
      </h1>

      <div className="flex flex-col items-center md:flex-row lg:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6 mt-8">
   

       {/* Circle 1 */}
       <div className=" lg:w-1/3 md:w-1/3 w-full flex flex-row md:flex-col lg:flex-col  lg:items-center lg:justify-center justify-start">
          <div className="w-32 h-32  rounded-full flex items-center justify-center">
            <img
              src={profile}
              alt="Client 1"
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>
          <div className=" items-center justify-center px-5">
          <h1 className="font-devanagari text-center  md:text-xl lg:text-xl">Sachin</h1>
          <p className="text-start md:text-center lg:text-center text-sm">
            My name is sachin kumar singh hello hello this is me sachin
          </p>
          </div>
        </div>
    
    {/* Circle 1 */}
    <div className=" lg:w-1/3 md:w-1/3 w-full flex flex-row md:flex-col lg:flex-col  lg:items-center lg:justify-center justify-start">
          <div className="w-32 h-32  rounded-full flex items-center justify-center">
            <img
              src={profile}
              alt="Client 1"
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>
          <div className=" items-center justify-center px-5">
          <h1 className="font-devanagari text-center  md:text-xl lg:text-xl">Sachin</h1>
          <p className="text-start md:text-center lg:text-center text-sm">
            My name is sachin kumar singh hello hello this is me sachin
          </p>
          </div>
        </div>



       {/* Circle 1 */}
       <div className=" lg:w-1/3 md:w-1/3 w-full flex flex-row md:flex-col lg:flex-col  lg:items-center lg:justify-center justify-start">
          <div className="w-32 h-32  rounded-full flex items-center justify-center">
            <img
              src={profile}
              alt="Client 1"
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>
          <div className=" items-center justify-center px-5">
          <h1 className="font-devanagari text-center  md:text-xl lg:text-xl">Sachin</h1>
          <p className="text-start md:text-center lg:text-center text-sm">
            My name is sachin kumar singh hello hello this is me sachin
          </p>
          </div>
        </div>



     
      </div>
    </div>
  );
};

export default Clients;

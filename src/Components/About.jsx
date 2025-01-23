import React from 'react'

import laptop from "../assets/images/About.png";


const About = () => {
  return (
    <>
    
    <div className='flex container flex-col md:flex-row lg:flex-row w-full justify-center items-center  '>

        <div className='w-full md:w-1/2 lg:w-1/2 mt-[1rem]'>
        <img src={laptop} alt="" />

        </div>
        <div className=' w-full md:w-1/2 lg:w-1/2  p-5'>

        <h1 className="text-black text-3xl font-devanagari text-center   "> 
        We craft professional video edits that engage your audience and achieve your goals.
        </h1>
        <h1 className="text-[#FC6F03] text-3xl font-devanagari text-center mt-8">10+ Trusted Clients</h1>

        </div>

    </div>
    </>
  )
}

export default About
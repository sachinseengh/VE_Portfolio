import React from 'react'
import line from '../assets/images/line.svg'
import ServiceItem from './ServiceItem'
const Service = () => {
  return (
    <div className='container  ' id="services">
        <div className='flex flex-row justify-start mb-5 lg:mb-10 md:mb-1 lg:mt-16 mt-1 md:mt-15'>

            <div>
                <img src={line} height={5} width={5}/>
            </div>
            <div className='ml-2 '>
                <p className='text-3xl font-devanagari'>Service We <br/> Provide</p>
            
            </div>
        </div>
        
            <ServiceItem></ServiceItem>
        
    </div>
  )
}

export default Service
import React from 'react'
import RecentWorksItem from './RecentWorksItem'
import line from '../assets/images/line.svg'

const RecentWorks = () => {
  return (
    <div className='container mt-10 lg:mt-20 mb-20'>
    <div className='flex flex-row justify-start mb-10'>

        <div>
            <img src={line} height={5} width={5}/>
        </div>
        <div className='ml-2 '>
            <p className='text-3xl font-devanagari'>Recent <br/>Works</p>
        
        </div>
    </div>
    <RecentWorksItem/>
    
</div>
  )
}

export default RecentWorks
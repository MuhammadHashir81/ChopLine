import React from 'react'
import { ArrowRight } from 'lucide-react'

const Sponsors = () => {
    return (
        <div className='min-h-screen  flex flex-col justify-between items-center '>
            <div className='px-32 flex flex-col items-center  w-full mt-[180px]'>
            <h2 className='font-bold text-6xl mb-6 font-inter text-[#212529]'>Our sponsors</h2>
            <div className='w-full flex  items-center justify-around'> 
                <img src="dominicans.jpg" alt="" />
                <img src="latino.jpg" alt="" />
            </div>
            </div>
        </div>
    )
}

export default Sponsors














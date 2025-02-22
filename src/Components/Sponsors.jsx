import React from 'react'
import { ArrowRight } from 'lucide-react'

const Sponsors = () => {
    return (
        <div className='min-h-screen  flex flex-col justify-between items-center relative'>
            <img src="sponsors.svg" alt="sponsors" className='absolute top-[162px] right-[405px] max-lg:size-40 max-lg:top-[104px] max-[940px]:right-80 max-md:top-24 ' />
            <div className='px-32 flex flex-col items-center  w-full mt-[180px] '>
            <h2 className='font-bold text-6xl mb-6 font-inter text-[#212529] max-lg:text-4xl'>Our sponsors</h2>
            <div className='w-full flex  items-center justify-around max-lg:justify-between max-[940px]:flex-col-reverse'> 
                <img src="dominicans.jpg" alt="" className='size-72 max-[940px]:size-56:' />
                <img src="latino.jpg" alt="" className='size-72 max-[940px]:size-56:' />
            </div>
            </div>
        </div>
    )
}

export default Sponsors














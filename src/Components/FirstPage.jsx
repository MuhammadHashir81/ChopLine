import React from 'react'
import { ChevronDown } from 'lucide-react'
import { Menu } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
const FirstPage = () => {
    return (
        <div className='h-screen  max-[940px]:h-fit '>
            <div className='flex justify-between items-center px-32 py-8 max-sm:px-10  '>
                <div className='w-1/4 max-sm:w-full '>
                    <h3 className=' text-3xl font-medium'>Chop<span className='text text-[#018837]'>Line</span> </h3>
                </div>
                    <Menu className='hidden max-md:block'/>
                <div className=' w-[70%] flex justify-between max-md:hidden'>
                    <ul className='flex gap-8 items-center '>
                        <li className=' font-medium text-sm font-dm'>Home</li>
                        <li className='  font-medium text-sm font-dm'>Solutions </li>
                        <li className=' font-medium text-sm font-dm'>Resources</li>
                        <li className=' font-medium text-sm font-dm'>Pricing</li>
                    </ul>
                    <div className='flex gap-6 mr-2 '>
                        <button className='text-[#043873] font-medium text-sm font-inter py-4 px-10'>Login</button>
                        <button className="flex items-center gap-2 bg-[#018837] rounded-lg px-6 py-4 text-white max-lg:hidden ">
                            <span className='font-inter text-sm '>Try ChopLine for free</span> <ArrowRight size={15}/>
                        </button>

                    </div>
                </div>
            </div>
            <div className='flex items-center h-[100%] bg-[#018837] px-32 max-lg:gap-10 max-[940px]:flex max-[940px]:flex-col max-[940px]:py-10 max-sm:px-10     '>
                <div className='w-1/2 max-lg:w-full '>
                    <h1 className='font-bold text-white text-5xl mb-6 font-inter max-lg:text-4xl max-sm:text-3xl'>Revolutionize Small Business “walk-ins”</h1>
                    <p className='text-white font-normal text-base font-inter max-sm:text-sm'> <span className='font-semibold'> Say goodbye to chaotic waiting areas and manual scheduling </span>. ChopLine is an all-in-one queue management and staff availability tracking system designed to streamline the walk-in experience for barbershops, salons, and service-based businesses.</p>

                    <button className="font-medium text-base flex items-center gap-2 bg-[#FFE492] rounded-md py-4 px-6 mt-10 font-inter max-sm:text-sm">
                        Try ChopLine for free <ArrowRight size={15} />
                    </button>
                </div>
                <div className=''>
                    <img src="https://assets.enterprisestorageforum.com/uploads/2023/12/esf_20231201-types-of-computer-memory-696x447.png" width={500} className='max-[940px]:w-[900px]' />
                </div>
            </div>
        </div>
    )
}

export default FirstPage
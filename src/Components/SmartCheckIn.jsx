import React from 'react'
import { ArrowRight } from 'lucide-react'
const SmartCheckIn = () => {
  return (
    <div className='px-32 py-6 mt-[220px] min-h-screen relative max-sm:px-10'>
          <div className='flex items-center h-4/5 gap-16  max-[940px]:flex max-[940px]:flex-col'>
                <div className='w-1/2 max-lg:w-full ' >
                    <h1 className=' text-6xl font-bold mb-8 font-inter text-[#212529] max-lg:text-4xl ,max-sm:text-3xl'>Smart Check-In Kiosk</h1>
                    <img src="/public/checkin.svg" alt="checkin" className='absolute top-[124px] -z-10 max-lg:-top-3 max-lg:left-[350px] max-lg:size-40 max-sm:left-[300px]'/>
                    <p className='font-normal text-base font-inter text-[#212529] max-sm:text-sm'>How It Works:</p>
                    <ul className='list-disc list-inside space-y-1 mb-16 '>
                        <li className='font-normal text-base font-inter text-[#212529] max-sm:text-sm'>Customers enter the shop and check in using a <span className='font-bold text-lg max-sm:text-sm text-[#212529]'>self-service kiosk</span>  (tablet or touchscreen computer) or via their <span className='font-bold text-lg max-sm:text-sm'>own mobile device</span>  through a QR code or link</li>
                        <li className='font-normal text-base font-inter text-[#212529] max-sm:text-sm'>They provide basic details</li>
                        <li className='ml-4 font-normal text-base font-inter text-[#212529] max-sm:text-sm'>Name</li>
                        <li className='ml-4 font-normal text-base font-inter text-[#212529] max-sm:text-sm'>Service needed (haircut, shave, styling, etc.)</li>
                        <li className='ml-4 font-normal text-base  font-inter text-[#212529] max-sm:text-sm'>Preferred barber (if applicable)</li>
                        <li  className='ml-4 font-normal text-base   font-inter text-[#212529] max-sm:text-sm'>Any special requests</li>
                        <li className='font-normal text-base   font-inter text-[#212529] max-sm:text-sm'>After check-in, they receive an estimated wait time and can track their position in the queue in real time.</li>
                    </ul>
                    <button className="flex items-center gap-2 bg-[#018837] rounded-md px-8 py-4 mt-10 text-white ">    
                    <span className='font-normal text-base font-inter max-sm:text-sm'>Get Started</span> <ArrowRight size={19}/>
                        </button>
                </div>
                <div>
                    <img src="https://assets.enterprisestorageforum.com/uploads/2023/12/esf_20231201-types-of-computer-memory-696x447.png" width={500} className='max-[940px]:w-[900px]'/>
                </div>
            </div>
          
    </div>
  )
}

export default SmartCheckIn
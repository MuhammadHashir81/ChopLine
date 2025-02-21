import React from 'react'
import { ArrowRight } from 'lucide-react'
const SmartCheckIn = () => {
  return (
    <div className='px-32 py-6 mt-[220px] min-h-screen relative'>
          <div className='flex items-center h-4/5 gap-16'>
                <div className='w-1/2 ' >
                    <h1 className=' text-6xl font-bold mb-8 font-inter text-[#212529]'>Smart Check-In Kiosk</h1>
                    <img src="checkin.svg" alt="swish" className='absolute top-[124px] -z-10  '/>
                    <p className='font-normal text-base font-inter text-[#212529]'>How It Works:</p>
                    <ul className='list-disc list-inside space-y-1 mb-16'>
                        <li className='font-normal text-base font-inter text-[#212529]'>Customers enter the shop and check in using a <span className='font-bold text-lg text-[#212529]'>self-service kiosk</span>  (tablet or touchscreen computer) or via their <span className='font-bold text-lg'>own mobile device</span>  through a QR code or link</li>
                        <li className='font-normal text-base font-inter text-[#212529]'>They provide basic details</li>
                        <li className='ml-4 font-normal text-base font-inter text-[#212529]'>Name</li>
                        <li className='ml-4 font-normal text-base font-inter text-[#212529]'>Service needed (haircut, shave, styling, etc.)</li>
                        <li className='ml-4 font-normal text-base  font-inter text-[#212529]'>Preferred barber (if applicable)</li>
                        <li  className='ml-4 font-normal text-base   font-inter text-[#212529]'>Any special requests</li>
                        <li className='font-normal text-base   font-inter text-[#212529]'>After check-in, they receive an estimated wait time and can track their position in the queue in real time.</li>
                    </ul>
                    <button className="flex items-center gap-2 bg-[#018837] rounded-md px-8 py-4 mt-10 text-white">    
                    <span className='font-normal text-base font-inter'>Get Started</span> <ArrowRight size={19}/>
                        </button>
                </div>
                <div>
                    <img src="https://assets.enterprisestorageforum.com/uploads/2023/12/esf_20231201-types-of-computer-memory-696x447.png" width={500}/>
                </div>
            </div>
          
    </div>
  )
}

export default SmartCheckIn
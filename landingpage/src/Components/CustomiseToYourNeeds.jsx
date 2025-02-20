import React from 'react'
import { ArrowRight } from 'lucide-react'
const CustomiseToYourNeeds = () => {
  return (
    <div>
      <div className='flex items-center  px-32 mt-[120px] justify-between relative' >
        <img src="customise.svg" alt="customise" className='absolute right-[235px] top-[144px] -z-10' />
        <div>
          <img src="checkin.jpg" width={500} />
        </div>
        <div className='w-1/2 '>
          <h1 className='font-bold text-6xl mb-6 font-inter text-[#212529]'>Customise it to your needs</h1>
          <p className='font-normal text-base text-[#212529] font-inter'>Personalize your barbershop’s public presence with a branded main page. Display services, pricing, barber availability, and customer wait times in real-time, giving clients a seamless booking experience.</p>
          <button className="flex items-center gap-2 bg-[#018837] text- rounded-md text-white  mt-10 px-8 py-4">
            <span className='font-medium text-base font-inter '>Let's Go</span>  <ArrowRight size={19} />
          </button>
        </div>

      </div>
    </div>
  )
}

export default CustomiseToYourNeeds
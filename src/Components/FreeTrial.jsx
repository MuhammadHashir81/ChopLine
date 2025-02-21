import React from 'react'
import { ArrowRight } from 'lucide-react'
const FreeTrial = () => {
  return (

    <div className=' bg-[#018837] px-32 py-80 h-[400px] mt-[200px] max-[940px]:h-fit max-[940px]:py-40 max-sm:px-10 max-sm:py-20'>

      <div className='h-[100%]   flex justify-between items-center gap-20  max-[940px]:flex-col-reverse '>
        <img src="apps.jpg" width={400} />
        <div className='flex flex-col  justify-center w-[75%]'>

          <h1 className='text-white font-bold text-6xl mb-6 font-inter max-lg:text-4xl max-sm:text-3xl'>Receive a 14-Day Free Trial! </h1>
          <p className='text-white  text-base font-normal font-inter max-sm:text-sm'>Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success </p>
          <button className="flex items-center gap-2 bg-[#FFE492] text- rounded-lg text-black  mt-10 py-4 px-8 w-fit">
            <span className='font-medium text-base font-inter max-sm:text-sm'>Sign Up</span>  <ArrowRight size={19}/>
          </button>
        </div>
      </div>

    </div>
  )
}

export default FreeTrial
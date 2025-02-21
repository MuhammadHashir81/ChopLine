import React from 'react'
import { ArrowRight } from 'lucide-react'
const FreeTrial = () => {
  return (

    <div className=' bg-[#018837] px-32 py-80 h-[400px] mt-[200px]'>

      <div className='h-[100%]   flex justify-between items-center gap-20 '>
        <img src="apps.jpg" width={400} />
        <div className='flex flex-col  justify-center w-[75%]'>

          <h1 className='text-white font-bold text-6xl mb-6 font-inter'>Receive a 14-Day Free Trial! </h1>
          <p className='text-white  text-base font-normal font-inter'>Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success </p>
          <button className="flex items-center gap-2 bg-black text- rounded-lg text-white  mt-10 py-5 px-10 w-fit">
            <span className='font-medium text-base font-inter'>Sign Up</span>  <ArrowRight size={19}/>
          </button>
        </div>



      </div>

    </div>
  )
}

export default FreeTrial
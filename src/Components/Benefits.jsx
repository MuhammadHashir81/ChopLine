    import React from 'react'
    import { ArrowRight } from 'lucide-react'
const Benefits = () => {
    return (
        <div className=' bg-[#018837] px-32 py-32 h-[85%] relative max-sm:px-10'>
                
                    <img src="benefits.svg" alt="benefits" className='absolute top-44  left-56  max-lg:size-48 max-lg:top-[74px] max-lg:left-48 max-[940px]:left-52 max-sm:left-16'/>
                <div className=' flex items-center h-[100%] gap-10 max-[940px]:flex max-[940px]:flex-col '>
                    <div className='w-2/3 max-[940px]:w-full'>
                    <h1 className=' font-bold text-6xl mb-6 text-white font-inter z-20 max-lg:text-4xl max-sm:text-3xl'>Key Benefits</h1>
                    <ul className='space-y-1 '>
                    <li className='font-normal text-base text-white font-inter max-sm:text-sm'>Eliminate Long Waits – Keep clients happy with a fair, transparent queue.</li>
                      <li className='font-normal text-base text-white font-inter max-sm:text-sm'>Boost Efficiency – No more manually assigning customers or tracking availability.</li>
                      <li className='font-normal text-base text-white font-inter max-sm:text-sm'>Increase Revenue – Reduce downtime and serve more clients per day.</li>
                      <li className='font-normal text-base text-white font-inter max-sm:text-sm'> Seamless Integrations – Works with POS systems, Stripe payments, and more.</li>
                      <li className='font-normal text-base text-white font-inter max-sm:text-sm'> Data-Driven Insights – Make informed decisions with real-time analytics. className='font-normal text-lg text-white'</li>
                    </ul>
                        <button className="flex items-center gap-2 bg-[#FFE492] text-[#212529] rounded-md   mt-10 px-8 py-4  ">    
                               <span className='font-medium text-base font-inter max-sm:text-sm'>Get Started</span>  <ArrowRight size={19} />
                            </button>
                    </div>
                    <div>
                        <img src="https://assets.enterprisestorageforum.com/uploads/2023/12/esf_20231201-types-of-computer-memory-696x447.png" width={500} className='max-[940px]:w-[900px]'/>
                    </div>
                </div>

            </div>
  )
}

export default Benefits
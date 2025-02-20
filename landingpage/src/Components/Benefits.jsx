    import React from 'react'
    import { ArrowRight } from 'lucide-react'
const Benefits = () => {
    return (
        <div className=' bg-[#018837] px-32 py-32 h-[85%] relative'>
                
                    <img src="benefits.svg" alt="benefits" className='absolute top-44  left-56  ' />
                <div className=' flex items-center h-[100%] gap-10 '>
                    <div className='w-2/3 '>
                    <h1 className=' font-bold text-6xl mb-6 text-white font-inter z-20'>Key Benefits</h1>
                    <ul className='space-y-1'>
                      <li className='font-normal text-base text-white font-inter'>Eliminate Long Waits – Keep clients happy with a fair, transparent queue.</li>
                      <li className='font-normal text-base text-white font-inter'>Boost Efficiency – No more manually assigning customers or tracking availability.</li>
                      <li className='font-normal text-base text-white font-inter'>Increase Revenue – Reduce downtime and serve more clients per day.</li>
                      <li className='font-normal text-base text-white font-inter'> Seamless Integrations – Works with POS systems, Stripe payments, and more.</li>
                      <li className='font-normal text-base text-white font-inter'> Data-Driven Insights – Make informed decisions with real-time analytics. className='font-normal text-lg text-white'</li>
                    </ul>
                        <button className="flex items-center gap-2 bg-[#FFE492] text-[#212529] rounded-md   mt-10 px-8 py-4  ">    
                               <span className='font-medium text-base font-inter'>Get Started</span>  <ArrowRight size={19} />
                            </button>
                    </div>
                    <div>
                        <img src="https://assets.enterprisestorageforum.com/uploads/2023/12/esf_20231201-types-of-computer-memory-696x447.png" width={500}/>
                    </div>
                </div>

            </div>
  )
}

export default Benefits
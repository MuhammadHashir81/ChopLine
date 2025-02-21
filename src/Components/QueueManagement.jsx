import React from 'react'
import { ArrowRight } from 'lucide-react'
const QueueManagement = () => {
  return (
    <div>
      <div className='flex  my-20 justify-between px-32 gap-20 relative'>
        <img src="queue.svg" alt="queue" className='absolute right-24 top-8 -z-10' />
        <div>
          <img src="workimage.jpg" alt="worktogether" />
        </div>
        <div className='w-2/3'>
          <h1 className=' font-bold text-6xl mb-6 font-inter text-[#212529]'>Real-Time Queue Management</h1>
            <ul className='list-disc list-inside'>
            <li className='font-normal text-base font-inter text-[#212529]'>ChopLine maintains a live queue that updates dynamically as barbers become available</li>
            <li className='font-normal text-base font-inter text-[#212529]'>Clients are assigned based on:</li>
            <li className='font-normal text-base font-inter text-[#212529]'>First-come, first-served (default setting).</li>
            <li className='font-normal text-base font-inter text-[#212529]'>Preferred barber selection (if a client requests a specific barber, they wait for them).</li>
            <li className='font-normal text-base font-inter text-[#212529]' >Service type (some barbers may specialize in certain cuts or styles).</li>
            <li className='font-normal text-base font-inter text-[#212529]'>Barbers receive a real-time notification when they’re up next, keeping the process smooth.</li>
          </ul>
          <ul>
            <li className='font-normal text-base font-inter text-[#212529]'>Benefits:</li>
            <li className='font-normal text-base font-inter text-[#212529]'> Eliminates manual assignments – No more front desk confusion.</li>
            <li className='font-normal text-base font-inter text-[#212529]'> Maximizes efficiency – Keeps the flow moving and minimizes idle time.</li>
            <li className='font-normal text-base font-inter text-[#212529]'>Improves fairness – Customers feel more confident in an organized system</li>
          </ul>
          <button className="flex items-center gap-2 bg-[#018837] rounded-md px-8 py-4 mt-10 text-white">
            <span className='font-normal text-base font-inter'>Try it now</span> <ArrowRight size={19} />
          </button>
        </div>

      </div>
    </div>
  )
}

export default QueueManagement
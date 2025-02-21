import React from 'react'

const Plan = () => {
  return (
    <div className='mt-[200px] px-32 relative'>
      <img src="plan.svg" alt="plan" className='absolute top-11 right-96 -z-10'/>
      <h2 className=' font-bold text-6xl mb-6 text-center font-inter text-[#212529]'>Choose Your Plan</h2>

      <p className='text-center mb-20 font-normal text-base font-inter text-[#212529]'>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
      <div className='cards flex gap-12 '>
      <div className=' py-10 px-11 rounded-md border-[1px] border-[#FFE492] '>
               <h5 className='mb-6  font-semibold  text-xl  text-[#212529] font-inter'>Free</h5>
               <h3 className='font-bold text-3xl mb-4 text-[#212529] font-inter' >$0</h3>
               <p className='mb-4 text-base font-normal text-[#212529] font-inter'>keep home and family on track</p>
               <div className='flex flex-col gap-4'> 
               <p className='text-base font-normal text-[#212529] font-inter'>sync unlimited devices</p>
               <p className='text-base font-normal text-[#212529] font-inter'>10 GB monthly uploads</p>
               <p className='text-base font-normal text-[#212529] font-inter'>10 GB monthly uploads</p>
               <p className='text-base font-normal text-[#212529] font-inter'>200 MB max.note size</p>
               <p className='text-base font-normal text-[#212529] font-inter'>Customise home dashboard and access extra widgets</p>
               <p className='text-base font-normal text-[#212529] font-inter'>Connect primary Google calendar account</p>
               <p className='text-base font-normal text-[#212529] font-inter'>Add due dates,reminders and notifications to your tasks</p>
               </div>
               <button className="flex items-center gap-2 border-[1px] border-[#FFE492] rounded-md px-10 py-4 mt-10 ">    
                     <span className='font-medium text-base font-inter text-[#212529]'>Get started</span>
                        </button>
            </div>
            <div className='bg-[#018837] py-20 px-11 rounded-lg text-white scale-110 shadow-md'>
               <h5 className='font-semibold  text-xl mb-6  font-inter'>Small Business </h5>
               <h3 className='font-bold text-3xl mb-4 text-[#FFE492]  font-inter'>$29.99</h3>
               <p className='mb-4 text-base font-normal font-inter'>keep home and family on track</p>
               <div className='flex flex-col gap-4'> 
               <p className='text-base font-normal font-inter'>Sync unlimited devices</p>
               <p className='text-base font-normal font-inter'>10 GB monthly uploads</p>
               <p className='text-base font-normal font-inter'>10 GB monthly uploads</p>
               <p className='text-base font-normal font-inter'>200 MB max.note size</p>
               <p className='text-base font-normal font-inter'>Customise home dashboard and access extra widgets</p>
               <p className='text-base font-normal font-inter'>Connect primary Google calendar account</p>
               <p className='text-base font-normal font-inter'>Add due dates,reminders and notifications to your tasks</p>
               </div>
               <button className="flex items-center gap-2  rounded-md px-10 py-4 mt-10 shadow-sm text-white bg-black">    
               <span className='font-medium text-base font-inter'>Get started</span>
                        </button>
            </div>
            <div className=' py-10 px-11 rounded-md border-[1px] border-[#FFE492]  '>
               <h5 className='mb-6 font-semibold  text-xl  text-[#212529] font-inter'>Enterprise</h5>
               <h3 className='font-bold text-3xl mb-4 text-[#212529] font-inter'>$49.99</h3>
               <p className='mb-4 text-lg font-medium text-[#212529] font-inter'>keep home and family on track</p>
               <div className='flex flex-col gap-4'> 
               <p className='text-base font-normal text-[#212529] font-inter'>sync unlimited devices</p>
               <p className='text-base font-normal text-[#212529] font-inter'>10 GB monthly uploads</p>
               <p className='text-base font-normal text-[#212529] font-inter'>10 GB monthly uploads</p>
               <p className='text-base font-normal text-[#212529] font-inter'>200 MB max.note size</p>
               <p className='text-base font-normal text-[#212529] font-inter'>Customise home dashboard and access extra widgets</p>
               <p className='text-base font-normal text-[#212529] font-inter'>Connect primary Google calendar account</p>
               <p className='text-base font-normal text-[#212529] font-inter'>Add due dates,reminders and notifications to your tasks</p>
               </div>
               <button className="flex items-center gap-2 border-[1px] border-[#FFE492] rounded-md px-10 py-4 mt-10 text-[#212529]">    
               <span className='font-medium text-base font-inter'>Get started</span>
                        </button>
            </div>
      </div>
    </div>
  )
}

export default Plan















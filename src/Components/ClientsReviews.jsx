import React from 'react'
import { Quote } from 'lucide-react'
const ClientsReviews = () => {
  return (
    <div className='mt-[200px] px-32 relative'>
      <img src="client.svg" alt="client" className='absolute right-[266px] -z-10 top-2' />
      <h1 className='font-bold text-6xl mb-12 text-center font-inter text-[#212529]'>What Our Clients Says</h1>
      <div className='cards flex gap-6'>
      <div className=' py-14 px-10 rounded-lg shadow-2xl flex flex-col justify-between w-4/5 '>
        <div className=''>
      <Quote />
               <p className='text-base font-normal mt-6 mb-10  font-inter'>whitepate is designed for as a collaboration tool for business that is a full project management solution.</p>
               <hr className='border-black w-full h-[1px] mb-10'/>
        </div>
               <div className='flex gap-6 items-center'>
               <img src="https://static.vecteezy.com/system/resources/thumbnails/033/168/339/small_2x/a-young-black-man-in-a-suit-and-tie-ai-generative-free-photo.jpg" alt="clientimage" className='rounded-full w-[80px] h-[80px] object-cover' />
               <div className='flex flex-col gap-4'>
               <h6 className='font-semibold text-xl font-inter'>Oberon Shaw, MCH</h6>
               <p className='font-normal text-base font-inter'>Head of Talent Aquisition, North America</p>
               
               </div>
               </div>
            </div>
            <div className=' py-14 px-10 rounded-lg shadow-2xl flex flex-col justify-between bg-[#018837]'>
        <div className=' '>
      <Quote className='text-white'/>
               <p className='text-base font-normal mt-6 mb-10 text-white font-inter'>whitepate is designed for as a collaboration tool for business that is a full project management solution.</p>
               <hr className='border-white w-full h-[1px] mb-10'/>
               
        </div>
               <div className=' flex gap-6 items-center'>
               <img src="https://static.vecteezy.com/system/resources/thumbnails/033/168/339/small_2x/a-young-black-man-in-a-suit-and-tie-ai-generative-free-photo.jpg" alt="clientimage" className='rounded-full w-[80px] h-[80px] object-cover' />
               <div className='flex flex-col gap-4'>
               <h6 className='font-semibold text-xl text-[#043873] font-inter'>Steve Smith</h6>
               <p className='font-normal text-base text-white font-inter'>Head of Talent Aquisition, North America</p>
               </div>
               </div>
            </div>

            <div className='py-14 px-10 rounded-lg shadow-2xl flex flex-col justify-between bg-[#018837]     '>
        <div className=' '>
      <Quote className='text-white'/>
               <p className='text-base font-normal mt-6 mb-10 text-white font-inter'>whitepate is designed for as a collaboration tool for business that is a full project management solution.</p>
               <hr className='border-white w-full h-[1px] mb-10'/>
               
        </div>
               <div className=' flex gap-6 items-center'>
               <img src="https://static.vecteezy.com/system/resources/thumbnails/033/168/339/small_2x/a-young-black-man-in-a-suit-and-tie-ai-generative-free-photo.jpg" alt="clientimage" className='rounded-full w-[80px] h-[80px] object-cover' />
               <div className='flex flex-col gap-4'>
               <h6 className='font-semibold text-xl text-[#043873] font-inter'>Steve Smith</h6>
               <p className='font-normal text-base text-white font-inter'>Head of Talent Aquisition, North America</p>
               </div>
               </div>
            </div>

      </div>
      </div>

  )
}

export default ClientsReviews
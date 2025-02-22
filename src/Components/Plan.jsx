
import React from 'react';
import { CircleCheckBig } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Plan = () => {
  return (
    <div className='mt-[200px] px-32 relative max-[940px]:px-5 max-sm:mt-[150px]'>
      <img src="plan.svg" alt="plan" className='absolute top-11 right-96 -z-10 max-lg:size-40 max-lg:-top-12 max-md:right-[220px]' />
      <h2 className='font-bold text-6xl mb-6 text-center font-inter text-[#212529] max-lg:text-3xl'>
        Choose Your Plan
      </h2>
      <p className='text-center mb-20 font-normal text-base font-inter text-[#212529]'>
        Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
      </p>

      {/* Swiper for Small Screens */}
      <div className="hidden max-[940px]:flex justify-center">
        <Swiper
          spaceBetween={100}
          slidesPerView={'auto'}
          centeredSlides={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className='w-full flex justify-center'
        >
          {[...Array(3)].map((_, index) => (
            <SwiperSlide key={index} style={{ width: '400px' }}  >
              <div className={`py-10 px-11 rounded-md ${index === 1 ? 'bg-[#018837] text-white scale-110 shadow-md' : 'border-[1px] border-[#FFE492]'}`}>
                <h5 className='mb-6 font-semibold text-xl text-[#212529] font-inter'>
                  {index === 0 ? 'Free' : index === 1 ? 'Small Business' : 'Enterprise'}
                </h5>
                <h3 className='font-bold text-3xl mb-4 font-inter text-[#FFE492]'>
                  {index === 0 ? '$0' : index === 1 ? '$29.99' : '$49.99'}
                </h3>
                <p className='mb-4 text-base font-normal font-inter'>
                  Keep home and family on track
                </p>
                <div className='flex flex-col gap-4'>
                  {['Sync unlimited devices', '10 GB monthly uploads', '200 MB max note size'].map((text, i) => (
                    <div className='flex' key={i}>
                      <CircleCheckBig className='mr-3 size-5 text-[#FFE492]' />
                      <p className='text-base font-normal font-inter'>{text}</p>
                    </div>
                  ))}
                </div>
                <button className={`flex items-center gap-2 px-8 py-4 mt-10 rounded-md  ${index === 1 ? 'bg-[#FFE492] text-black' : 'border-[1px] border-[#FFE492] text-[#212529]'}`}>
                  <span className='font-medium text-base font-inter '>Get started</span>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Cards for Large Screens */}
      <div className='cards flex gap-12 max-[940px]:hidden'>
        {['Free', 'Small Business', 'Enterprise'].map((plan, index) => (
          <div
            key={index}
            className={`py-10 px-11 rounded-md ${index === 1 ? 'bg-[#018837] text-white scale-110 shadow-md' : 'border-[1px] border-[#FFE492]'}`}
          >
            <h5 className='mb-6 font-semibold text-xl text-[#212529] font-inter max-lg:font-medium max-lg:text-lg'>{plan}</h5>
            <h3 className='font-bold text-3xl mb-4 font-inter text-[#FFE492] max-lg:text-2xl '>
              {index === 0 ? '$0' : index === 1 ? '$29.99' : '$49.99'}
            </h3>
            <p className='mb-4 text-base font-normal font-inter max-lg:text-sm'>Keep home and family on track</p>
            <div className='flex flex-col gap-4'>
              {['Sync unlimited devices', '10 GB monthly uploads', '200 MB max note size'].map((text, i) => (
                <div className='flex' key={i}>
                  <CircleCheckBig className='mr-3 size-5 text-[#FFE492]' />
                  <p className='text-base font-normal font-inter max-lg:text-sm'>{text}</p>
                </div>
              ))}
            </div>
            <button className={`flex items-center gap-2 px-10 py-4 mt-10 rounded-md max-lg:px-2 max-lg:justify-center max-lg:w-[150px]  ${index === 1 ? 'bg-[#FFE492] text-black' : 'border-[1px] border-[#FFE492] text-[#212529]'}`}>
              <span className='font-medium text-base font-inter max-lg:text-sm'>Get started</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;





import React from "react";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ClientsReviews = () => {
  return (
    <div className="mt-28 px-6 md:px-16 lg:px-32 relative">
      <img
        src="client.svg"
        alt="client"
        className="absolute right-72 -z-10 top-3 max-lg:size-40 max-lg:-top-12 max-lg:right-48"
      />
      <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl mb-8 md:mb-12 text-center font-inter text-[#212529]">
        What Our Clients Says
      </h1>

      <div className="md:hidden flex justify-center md">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full"
        >
          {[...Array(3)].map((_, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                className={`w-[90%] sm:w-[80%] md:w-[400px] p-6 md:p-10 rounded-lg shadow-xl flex flex-col justify-between ${
                  index % 2 !== 0 ? "bg-[#018837] text-white" : "bg-white"
                }`}
              >
                <div>
                  <Quote className={`${index % 2 !== 0 ? "text-white" : "text-black"}`} />
                  <p className={`text-sm md:text-base mt-4 md:mt-6 mb-6 md:mb-10 font-inter`}>
                    Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
                  </p>
                  <hr className={`${index % 2 !== 0 ? "border-white" : "border-black"} w-full h-[1px] mb-6 md:mb-10`} />
                </div>
                <div className="flex gap-4 md:gap-6 items-center ">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/033/168/339/small_2x/a-young-black-man-in-a-suit-and-tie-ai-generative-free-photo.jpg"
                    alt="client"
                    className="rounded-full w-16 md:w-[80px] h-16 md:h-[80px] object-cover"
                  />
                  <div className="flex flex-col">
                    <h6 className={`font-semibold text-lg md:text-xl ${index % 2 !== 0 ? "text-[#043873]" : "text-[#212529]"}`}>
                      Steve Smith
                    </h6>
                    <p className="text-sm md:text-base font-normal">
                      Head of Talent Acquisition, North America
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Cards for Large Screens */}
      <div className="hidden md:flex gap-6 justify-center ">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={`w-[90%] md:w-[300px] lg:w-[350px] xl:w-[400px] p-6 md:p-10 rounded-lg shadow-xl flex flex-col justify-between ${
              index % 2 !== 0 ? "bg-[#018837] text-white" : "bg-white"
            }`}
          >
            <div>
              <Quote className={`${index % 2 !== 0 ? "text-white" : "text-black"}`} />
              <p className={`text-sm md:text-base mt-4 md:mt-6 mb-6 md:mb-10 font-inter`}>
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </p>
              <hr className={`${index % 2 !== 0 ? "border-white" : "border-black"} w-full h-[1px] mb-6 md:mb-10`} />
            </div>
            <div className="flex gap-4 md:gap-6 items-center max-lg:flex max-lg:flex-col  max-lg:items-center max-lg:justify-center">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/033/168/339/small_2x/a-young-black-man-in-a-suit-and-tie-ai-generative-free-photo.jpg"
                alt="client"
                className="rounded-full w-16 md:w-[80px] h-16 md:h-[80px] object-cover"
              />
              <div className="flex flex-col  max-lg:w-[70%]  max-lg:py-1">
                <h6 className={`font-semibold text-lg md:text-xl ${index % 2 !== 0 ? "text-[#043873]" : "text-[#212529]"}`}>
                  Steve Smith
                </h6>
                <p className="text-sm md:text-base font-normal">
                  Head of Talent Acquisition, North America
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsReviews;







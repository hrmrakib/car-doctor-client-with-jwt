import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSlider = () => {
  const slider1 = "https://i.ibb.co/TLV53X6/1.jpg";
  const slider2 = "https://i.ibb.co/jZjBbqJ/2.jpg";
  const slider3 = "https://i.ibb.co/891yvZh/3.jpg";
  const slider4 = "https://i.ibb.co/KLQzCRv/4.jpg";
  const slider5 = "https://i.ibb.co/D5XbKM5/5.jpg";
  const slider6 = "https://i.ibb.co/Vtb0ZHJ/6.jpg";
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className='mySwiper z-0'
    >
      <SwiperSlide className='relative'>
        <div className='absolute flex justify-start items-center w-full h-full bg-gradient-to-r from-[#000000ea] via-[#00000079] to-[#00000014]'>
          <div className='p-8'>
            <h2 className='text-2xl md:text-4xl font-bold text-white mb-5'>
              Afforable Price For Car Servicing
            </h2>
            <p>
              There are many variations of pessages of available, but the
              majority have suffered alteration in some form
            </p>

            <div className='mt-6'>
              <button className='px-4 py-2 bg-[#f69432] text-white rounded-md mr-3 mb-4'>
                Discover More
              </button>
              <button className='px-4 py-2 bg-transparent border-2 text-white rounded-md'>
                Latest Projects
              </button>
            </div>
          </div>
        </div>
        <img
          className='w-full h-[420px] md:h-[600px] rounded-lg'
          src={slider1}
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide className='relative'>
        <div className='absolute flex justify-start items-center w-full h-full bg-gradient-to-r from-[#000000ea] via-[#00000079] to-[#00000014]'>
          <div className='p-8'>
            <h2 className='text-2xl md:text-4xl font-bold text-white mb-5'>
              Afforable Price For Car Servicing
            </h2>
            <p>
              There are many variations of pessages of available, but the
              majority have suffered alteration in some form
            </p>

            <div className='mt-6'>
              <button className='px-4 py-2 bg-[#f69432] text-white rounded-md mr-3 mb-4'>
                Discover More
              </button>
              <button className='px-4 py-2 bg-transparent border-2 text-white rounded-md'>
                Latest Projects
              </button>
            </div>
          </div>
        </div>
        <img
          className='w-full h-[420px] md:h-[600px] rounded-lg'
          src={slider2}
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide className='relative'>
        <div className='absolute flex justify-start items-center w-full h-full bg-gradient-to-r from-[#000000ea] via-[#00000079] to-[#00000014]'>
          <div className='p-8'>
            <h2 className='text-2xl md:text-4xl font-bold text-white mb-5'>
              Afforable Price For Car Servicing
            </h2>
            <p>
              There are many variations of pessages of available, but the
              majority have suffered alteration in some form
            </p>

            <div className='mt-6'>
              <button className='px-4 py-2 bg-[#f69432] text-white rounded-md mr-3 mb-4'>
                Discover More
              </button>
              <button className='px-4 py-2 bg-transparent border-2 text-white rounded-md'>
                Latest Projects
              </button>
            </div>
          </div>
        </div>
        <img
          className='w-full h-[420px] md:h-[600px] rounded-lg'
          src={slider3}
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide className='relative'>
        <div className='absolute flex justify-start items-center w-full h-full bg-gradient-to-r from-[#000000ea] via-[#00000079] to-[#00000014]'>
          <div className='p-8'>
            <h2 className='text-2xl md:text-4xl font-bold text-white mb-5'>
              Afforable Price For Car Servicing
            </h2>
            <p>
              There are many variations of pessages of available, but the
              majority have suffered alteration in some form
            </p>

            <div className='mt-6'>
              <button className='px-4 py-2 bg-[#f69432] text-white rounded-md mr-3 mb-4'>
                Discover More
              </button>
              <button className='px-4 py-2 bg-transparent border-2 text-white rounded-md'>
                Latest Projects
              </button>
            </div>
          </div>
        </div>
        <img
          className='w-full h-[420px] md:h-[600px] rounded-lg'
          src={slider4}
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide className='relative'>
        <div className='absolute flex justify-start items-center w-full h-full bg-gradient-to-r from-[#000000ea] via-[#00000079] to-[#00000014]'>
          <div className='p-8'>
            <h2 className='text-2xl md:text-4xl font-bold text-white mb-5'>
              Afforable Price For Car Servicing
            </h2>
            <p>
              There are many variations of pessages of available, but the
              majority have suffered alteration in some form
            </p>

            <div className='mt-6'>
              <button className='px-4 py-2 bg-[#f69432] text-white rounded-md mr-3 mb-4'>
                Discover More
              </button>
              <button className='px-4 py-2 bg-transparent border-2 text-white rounded-md'>
                Latest Projects
              </button>
            </div>
          </div>
        </div>
        <img
          className='w-full h-[420px] md:h-[600px] rounded-lg'
          src={slider5}
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide className='relative'>
        <div className='absolute flex justify-start items-center w-full h-full bg-gradient-to-r from-[#000000ea] via-[#00000079] to-[#00000014]'>
          <div className='p-8'>
            <h2 className='text-2xl md:text-4xl font-bold text-white mb-5'>
              Afforable Price For Car Servicing
            </h2>
            <p>
              There are many variations of pessages of available, but the
              majority have suffered alteration in some form
            </p>

            <div className='mt-6'>
              <button className='px-4 py-2 bg-[#f69432] text-white rounded-md mr-3 mb-4'>
                Discover More
              </button>
              <button className='px-4 py-2 bg-transparent border-2 text-white rounded-md'>
                Latest Projects
              </button>
            </div>
          </div>
        </div>
        <img
          className='w-full h-[420px] md:h-[600px] rounded-lg'
          src={slider6}
          alt=''
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;

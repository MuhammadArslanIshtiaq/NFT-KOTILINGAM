import React, { useCallback, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import MainCard from '../../../components/cards/MainCard';
import ScrollAnimation from 'react-animate-on-scroll';

// icons
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const CardsSection = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const CardsList = [{}, {}, {}];

  return (
    <section className='py-8 md:py-16'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-full relative'>
        <ScrollAnimation animateIn='fadeInLeft' animateOut='fadeOutRight'>
          <div className='flex gap-3 md:gap-10 xl:gap-20 items-center'>
            <button
              type='button'
              className='hidden sm:block bg-ebonyClay p-2 sm:p-3 rounded-full border border-gray-600 text-white hover:bg-primary-500 focus:bg-primary-500 active:bg-primary-600 prev-arrow mb-96 sm:mb-80 xl:mb-0 relative'
              onClick={handlePrev}
            >
              <ChevronLeftIcon className='h-4 w-4 sm:h-6 sm:w-6' />
            </button>
            <Swiper slidesPerView={1} spaceBetween={10} ref={sliderRef}>
              {CardsList.map((item, i) => (
                <SwiperSlide key={i}>
                  <MainCard handlePrev={handlePrev} handleNext={handleNext} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              type='button'
              className='hidden sm:block bg-ebonyClay p-2 sm:p-3 rounded-full border border-gray-600 text-white hover:bg-primary-500 focus:bg-primary-500 active:bg-primary-600 next-arrow mb-96 sm:mb-80 xl:mb-0 relative'
              onClick={handleNext}
            >
              <ChevronRightIcon className='h-4 w-4 sm:h-6 sm:w-6' />
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CardsSection;

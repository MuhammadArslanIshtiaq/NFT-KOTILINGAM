import React, { useCallback, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// icons
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import CollectionsCard from '../../../components/cards/CollectionsCard';

const TopCollectionsSection = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const CollectionsList = [
    { imageUrl: '/assets/images/collection-item-0.png' },
    { imageUrl: '/assets/images/collection-item-1.png' },
    { imageUrl: '/assets/images/collection-item-2.png' },
    { imageUrl: '/assets/images/collection-item-3.png' },
    { imageUrl: '/assets/images/collection-item-0.png' },
    { imageUrl: '/assets/images/collection-item-1.png' },
    { imageUrl: '/assets/images/collection-item-2.png' },
    { imageUrl: '/assets/images/collection-item-3.png' },
  ];

  return (
    <section className='py-8 md:py-16 bg-gray-800 bg-shadow bg-cover bg-top'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-full relative'>
        <div className='mb-8 md:mb-14 text-center'>
          <h1 className='mb-0 text-[1.8rem] sm:text-[3.125rem] font-titleBold underline'>
            Top Collections
          </h1>
        </div>
        <div className='flex gap-3 md:gap-6 items-center'>
          <button
            type='button'
            className=' bg-ebonyClay p-2 rounded-full border border-gray-600 text-white hover:bg-primary-500 focus:bg-primary-500 active:bg-primary-600 prev-arrow'
            onClick={handlePrev}
          >
            <ChevronLeftIcon className='h-4 w-4' />
          </button>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            ref={sliderRef}
            breakpoints={{
              500: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1180: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
          >
            {CollectionsList.map((item) => (
              <SwiperSlide key='Collections'>
                <CollectionsCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type='button'
            className=' bg-ebonyClay p-2 rounded-full border border-gray-600 text-white hover:bg-primary-500 focus:bg-primary-500 active:bg-primary-600 next-arrow'
            onClick={handleNext}
          >
            <ChevronRightIcon className='h-4 w-4' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCollectionsSection;

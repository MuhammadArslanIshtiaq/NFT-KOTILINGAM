import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import CardCountdownComponent from '../count-downs/CardCountdownComponent';

const MainCard = ({ handlePrev, handleNext }) => {
  return (
    <div className='p-6 sm:p-0'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-10 items-center'>
        {/*  mobile view */}
        <div className='flex sm:hidden gap-10 items-center justify-center'>
          <div>
            <button
              type='button'
              className='bg-ebonyClay p-2 sm:p-3 rounded-full border border-gray-600 text-white hover:bg-primary-500 focus:bg-primary-500 active:bg-primary-600 prev-arrow relative'
              onClick={handlePrev}
            >
              <ChevronLeftIcon className='h-3 w-3' />
            </button>
          </div>
          <div className='h-[11rem]'>
            <img
              className='block h-full w-full object-cover rounded-2xl'
              src={`/assets/images/card-image-0.png`}
              alt='...'
            />
          </div>
          <div>
            <button
              type='button'
              className='bg-ebonyClay p-2 sm:p-3 rounded-full border border-gray-600 text-white hover:bg-primary-500 focus:bg-primary-500 active:bg-primary-600 next-arrow relative'
              onClick={handleNext}
            >
              <ChevronRightIcon className='h-3 w-3' />
            </button>
          </div>
        </div>
        {/* desktop view */}
        <div className='hidden sm:block h-[16rem] sm:h-[20rem] md:h-[28rem] xl:h-[26rem]'>
          <img
            className='block h-full w-full object-cover rounded-2xl'
            src={`/assets/images/card-image-0.png`}
            alt='...'
          />
        </div>
        <div>
          <div className='flex justify-between gap-2 sm:block'>
            <div>
              <h1 className='sm:mb-4 capitalize text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] xl:text-[3.5rem] font-normal sm:font-bold'>
                Shiva & Nandhi
              </h1>
              <h5 className='mb-4 sm:mb-8 text-[0.8rem] sm:text-[1rem] font-normal'>
                <span className='text-stormGray'>Created by</span>{' '}
                <span className='text-primary font-normal'>@Kotilingam</span>
              </h5>
            </div>
            <div className=' sm:hidden'>
              <Link
                to
                className='inline-flex items-center px-8 py-2 border-2 shadow-sm font-light rounded-3xl text-[0.7rem] sm:text-[1rem] bg-transparent text-white border-white hover:text-white hover:border-primary-600 hover:bg-primary-600 focus:outline-none transition duration-200 transform hover:-skew-x-3'
              >
                Details
              </Link>
            </div>
          </div>
          <div className='flex flex-wrap gap-4 md:gap-8 xl:gap-12 items-center justify-between sm:justify-start'>
            <div>
              <h5 className='text-stormGray text-[0.8rem] sm:text-[1rem] xl:text-[0.9rem] font-normal capitalize'>
                Current Bid
              </h5>
              <h3 className='my-1 text-[1rem] sm:text-[1.3rem] lg:text-[1.1rem] xl:text-[1.4rem] font-normal uppercase'>
                0.50 ETH
              </h3>
              <h5 className='text-stormGray text-[0.8rem] sm:text-[1rem] xl:text-[0.9rem] font-normal capitalize'>
                $1,000.00
              </h5>
            </div>
            <div className='self-stretch'>
              <span className='block bg-Line h-full w-1' />
            </div>
            <div>
              <h5 className='text-stormGray text-[0.8rem] sm:text-[1rem] xl:text-[0.9rem] font-normal capitalize'>
                Auction Ends in
              </h5>
              <div>
                <CardCountdownComponent />
              </div>
            </div>
          </div>
          <div className='mt-10 hidden sm:block'>
            <Link
              to
              className='inline-flex items-center px-12 py-2 border-2 shadow-sm text-base font-medium rounded-3xl text-[0.8rem] sm:text-[1rem] bg-transparent text-gray-400 border-gray-400 hover:text-white hover:border-primary-600 hover:bg-primary-600 focus:outline-none transition duration-200 transform hover:-skew-x-3'
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;

import React from 'react';
import { Link } from 'react-router-dom';
import CounterComponent from '../CounterComponent';

const MintCard = () => {
  return (
    <div>
      <div className='bg-ebonyClay md:bg-grayDark sm:p-6 rounded-3xl border-[0.825rem] border-ebonyClay outline outline-2 outline-primary'>
        <div className='flex flex-col xl:flex-row gap-8'>
          <div className='w-full xl:w-[30rem]'>
            <div className='h-full relative'>
              <img
                className='block h-full w-full rounded-3xl'
                src='/assets/images/mint-item-0.png'
                alt='....'
              />
              <span className='absolute top-0 right-0 p-4 sm:p-6 lg:hidden'>
                <span className='inline-flex items-center px-3 py-2 rounded-full text-sm font-normal bg-blackGray text-white'>
                  <svg
                    className='mr-2 h-2.5 w-2.5 text-green-600'
                    fill='currentColor'
                    viewBox='0 0 8 8'
                  >
                    <circle cx={4} cy={4} r={3} />
                  </svg>
                  Live
                </span>
              </span>
            </div>
          </div>
          <div className='flex-1 p-4 sm:p-0'>
            <div>
              <div className='text-right hidden lg:block'>
                <span className='inline-flex items-center px-3 py-2 rounded-full text-sm font-normal bg-blackGray text-white'>
                  <svg
                    className='mr-2 h-2.5 w-2.5 text-green-600'
                    fill='currentColor'
                    viewBox='0 0 8 8'
                  >
                    <circle cx={4} cy={4} r={3} />
                  </svg>
                  Live
                </span>
              </div>
              <h3 className='hidden md:block text-primary font-titleBold text-[1.75rem]'>
                Mint - 1st Phase
              </h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-0 md:mt-8'>
              <div className='col-span-1'>
                {/* mobile */}
                <ul className='md:hidden grid grid-cols-2 gap-x-4 justify-between'>
                  <li className='pb-6'>
                    <h3 className='text-primary font-titleBold text-[1.5rem]'>
                      Mint - 1st Phase
                    </h3>
                  </li>
                  <li className='pb-6'>
                    <CounterComponent />
                  </li>
                  <li className='pb-6'>
                    <div>
                      <small className='font-normal text-[0.75rem]'>
                        May 14,2022, 13:12 PM
                      </small>
                      <h2 className='mt-1 font-medium text-[1.2rem]'>
                        NFT Collection
                      </h2>
                    </div>
                  </li>

                  <li className='pb-6'>
                    <div>
                      <h6 className='text-[0.8rem] font-normal text-gray-400'>
                        Total Price:
                      </h6>
                      <h3 className='mt-2 text-[1.2rem] font-medium'>
                        0.15 ETH
                      </h3>
                    </div>
                  </li>
                </ul>
                {/* desktop */}
                <ul className='hidden md:block'>
                  <li className='pb-8'>
                    <div>
                      <small className='font-normal text-[0.75rem]'>
                        May 14,2022, 13:12 PM
                      </small>
                      <h2 className='mt-2 font-medium text-[1.5rem]'>
                        NFT Collection
                      </h2>
                    </div>
                  </li>
                  <li className='py-8'>
                    <CounterComponent />
                  </li>
                  <li className='py-8'>
                    <div>
                      <h6 className='text-[0.75rem] sm:text-[1rem] font-normal text-gray-400'>
                        Total Price:
                      </h6>
                      <h3 className='mt-2 text-[1.625rem] font-medium'>
                        0.15 ETH
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='col-span-2'>
                <ul>
                  <li className='border-b border-gray-400 pb-3 sm:pb-8'>
                    <div className='grid grid-cols-2 gap-x-3 md:gap-x-8'>
                      <div>
                        <h6 className='text-[0.75rem] sm:text-[1rem] font-normal text-gray-400'>
                          Price:
                        </h6>
                        <h3 className='mt-2 text-[1rem] sm:text-[1.25rem] font-medium'>
                          0.075 ETH
                        </h3>
                      </div>
                      <div>
                        <h6 className='text-[0.75rem] sm:text-[1rem] font-normal text-gray-400'>
                          Max NFTs
                        </h6>
                        <h3 className='mt-2 text-[1rem] sm:text-[1.25rem] font-medium'>
                          5000/7000
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li className='border-b border-gray-400 py-3 sm:py-8'>
                    <div className='grid grid-cols-2 gap-x-8'>
                      <div>
                        <h6 className='text-[0.75rem] sm:text-[1rem] font-normal text-gray-400'>
                          Max Limit per transaction
                        </h6>
                        <h3 className='mt-2 text-[1rem] sm:text-[1.25rem] font-medium'>
                          100
                        </h3>
                      </div>
                      <div>
                        <h6 className='text-[0.75rem] sm:text-[1rem] font-normal text-gray-400'>
                          Max Limit per address
                        </h6>
                        <h3 className='mt-2 text-[1rem] sm:text-[1.25rem] font-medium'>
                          100
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li className='py-3 sm:py-8'>
                    <div className='grid grid-cols-2 gap-x-8'>
                      <div>
                        <h6 className='text-[0.75rem] sm:text-[1rem] font-normal text-gray-400'>
                          Whitelist Required
                        </h6>
                        <h3 className='mt-2 text-[1rem] sm:text-[1.25rem] font-medium'>
                          YES
                        </h3>
                      </div>
                      <div>
                        <h6 className='text-[0.75rem] sm:text-[1rem] font-normal text-gray-400'>
                          Whitelist Cost
                        </h6>
                        <h3 className='mt-2 text-[1rem] sm:text-[1.25rem] font-medium'>
                          0.5 ETH
                        </h3>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className='mt-4'>
                  <Link
                    to
                    className='w-full inline-flex items-center justify-center text-center px-8 py-3 border-2 shadow-sm text-base font-medium rounded-2xl text-[1rem] bg-primary text-black border-primary hover:text-white hover:border-primary-600 hover:bg-primary-600 focus:outline-none transition duration-200 transform hover:-skew-x-3'
                  >
                    Whitelist
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintCard;

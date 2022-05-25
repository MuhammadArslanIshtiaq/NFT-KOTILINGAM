import React, { createRef } from 'react';
import { Link } from 'react-router-dom';
import CountdownComponent from '../../../components/count-downs/CountdownComponent';
import ScrollAnimation from 'react-animate-on-scroll';

const HeroSection = () => {
  const birdRef = createRef();
  const bird2Ref = createRef();

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (birdRef.current) {
        // birdRef.current.style.top = `${-35 + window.scrollY * 1.5}px`;
        birdRef.current.style.left = `${0 + window.scrollY * -2}px`;
      }
      if (bird2Ref.current) {
        // bird2Ref.current.style.bottom = `${113 + window.scrollY * -1.5}px`;
        bird2Ref.current.style.left = `${210 + window.scrollY * -5}px`;
      }
    });
  });

  const StatusList = [
    { title: '$278m', subTitle: 'Trading Volume', duration: 1 },
    { title: '5k+', subTitle: 'NFTs Created', duration: 1 },
    { title: '1.4M', subTitle: 'Total Users', duration: 1 },
  ];

  return (
    <>
      <section className='pt-24 pb-16 md:h-[95vh] md:bg-center bg-cover bg-heroM md:bg-heroD bg-fixed relative z-20'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8 h-full py-24 relative'>
          <img
            className='absolute top-[-2rem] left-[0rem] transition-all duration-300'
            ref={birdRef}
            src='assets/images/hero-section/fly-1.png'
            alt='...'
            id='bird1'
          />
          <img
            className='absolute bottom-[7rem] left-[13rem] transition-all duration-300'
            ref={bird2Ref}
            src='assets/images/hero-section/fly-2.png'
            alt='...'
            id='bird2'
          />

          <div className='grid grid-cols-3 gap-y-6 h-full items-end'>
            <div className='col-span-3 lg:col-span-2 transition-all duration-300'>
              <ScrollAnimation
                duration={1}
                animateIn='fadeInLeft'
                animateOut='fadeOutLeft'
                initiallyVisible={true}
              >
                <div className='mb-8 animated fadeInLeft'>
                  <h1 className='mb-5 font-titleBold leading-none text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] xl:text-[3rem]'>
                    Welcome Kotilingam NFT, <br /> a Project for Mind, body and
                    Soul.
                  </h1>
                  <div className='mt-4'>
                    <Link
                      to
                      className='inline-flex items-center px-8 py-2 border-2 shadow-sm text-base font-medium rounded-xl text-[1rem] bg-primary text-black border-primary hover:text-white hover:border-primary-600 hover:bg-primary-600 focus:outline-none transition duration-200 transform hover:-skew-x-3'
                    >
                      Whitelist
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
              {/* == */}
              <div>
                <ul className='flex flex-wrap gap-6 sm:gap-8 lg:gap-12'>
                  {StatusList.map((StatusList) => (
                    <li>
                      <div className='animated fadeInLeft'>
                        <h6 className='font-medium text-[1.5rem]'>
                          {StatusList.title}
                        </h6>
                        <h6 className='font-normal text-[1rem]'>
                          {StatusList.subTitle}
                        </h6>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='col-span-3 lg:col-span-1 relative'>
              <div className='sm:w-[20rem] lg:absolute bottom-0 right-0 animated fadeInUpBig'>
                <div className='bg-white bg-opacity-20 backdrop-blur-sm drop-shadow-lg p-6 rounded-2xl border border-gray-300 '>
                  <div className='flex items-center'>
                    <div className='mr-auto'>
                      <small className='block text-[.8rem] font-normal text-gray-300'>
                        Minting starts on
                      </small>
                      <h6 className='text-[1.2rem] font-normal'>
                        17th Jun-2022
                      </h6>
                    </div>
                    <div>
                      <span className='block h-20 w-20'>
                        <img
                          className='block h-full w-full'
                          src='/assets/images/clock.svg'
                          alt='...'
                        />
                      </span>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <CountdownComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

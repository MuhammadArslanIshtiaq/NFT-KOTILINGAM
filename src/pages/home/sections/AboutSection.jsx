import React from 'react';

const AboutSection = () => {
  return (
    <section id='about' className='py-8 md:py-16 relative'>
      <span className='block absolute top-[25%] sm:top-[53%] transform translate-y-[-50%]'>
        <img
          className='block h-full w-full'
          src='/assets/images/about-p-1.svg'
          alt='..'
        />
      </span>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 h-full relative'>
        <div>
          <div className='mb-12 sm:text-center'>
            <h1 className='mb-6 sm:mb-4 text-[1.8rem] sm:text-[3.125rem] font-titleBold underline text-center'>
              About
            </h1>
            <h2 className='mb-2 text-[1.2rem] sm:text-[2.8rem] font-titleBold leading-none'>
              Lingam is revered as an emblem of generative power in Indian
              Tradition.
            </h2>
            <h6 className=' text-[1rem] font-normal'>
              <div className='mt-4'>
                The Kotilingam NFT is one of a kind NFT project, where a
                collection of 10 Million Lingams will be minted into 7K NFTs in
                Ethereum block chain. 5000 NFTs will be releases in Phase 1.
              </div>

              <div className='mt-4'>
                The project will be run in multiple phases where the number of
                Lingams per NFT will be incremented.
              </div>

              <div className='mt-4'>
                Each owner of the Kotilingam will become called “KOTI” and will
                be part of the Kotilingam community where they will enjoy
                exclusive benefits like access to major events like Yoga,
                Meditation, Retreats, music festivals, conferences and concerts.
                Some of them will receive a Golden Key to the Metaverse where
                they can avail exclusive benefits.
              </div>

              <div className='mt-4'>
                Each Lingam gives the user a power which can be accumulated by
                collecting more NFTs during each Phase.
              </div>
            </h6>
          </div>
          {/* image */}
          <div className='lg:w-[50rem] mx-auto'>
            <div>
              <img
                className='hidden md:block h-full w-full'
                src='/assets/images/about-d.png'
                alt='...'
              />
              <img
                className='block sm:hidden h-full w-full'
                src='/assets/images/about-m.png'
                alt='...'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

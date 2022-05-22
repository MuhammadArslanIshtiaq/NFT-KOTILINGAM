import React from 'react';
import MintCard from '../../../components/cards/MintCard';

const LiveMintSection = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto py-8 md:py-16 px-2 sm:px-6 lg:px-8 h-full relative z-30'>
        <div className='mb-8 md:mb-14 text-center'>
          <h1 className='mb-0 text-[1.8rem] sm:text-[3.125rem] font-titleBold underline'>
            Live Mint
          </h1>
        </div>
        <div className='shadow-bg-yellow'>
          <MintCard />
        </div>
      </div>
    </section>
  );
};

export default LiveMintSection;

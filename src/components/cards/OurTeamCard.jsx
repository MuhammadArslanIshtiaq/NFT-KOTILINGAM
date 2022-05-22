import React from 'react';

const OurTeamCard = ({ item }) => {
  return (
    <div className='relative h-full'>
      <div className='rounded-t-full border-2 border-primary absolute h-full w-full bottom-[-0.8125rem] right-[-0.6875rem] bg-[#37393F]' />
      <div className='p-5 bg-[#37393F] rounded-t-full border-2 border-primary relative z-20 h-full'>
        <div className='mb-2'>
          <img
            className='block h-full w-full'
            src={`${item.imageUrl}`}
            alt='...'
          />
        </div>
        <h2 className='mb-2 font-bold capitalize text-[1rem] sm:text-[1.875rem]'>
          {item.name}
        </h2>
        <p className='text-gray-400 text-[.875rem] sm:text-[1rem]'>
          {item.text}
        </p>
      </div>
    </div>
  );
};

export default OurTeamCard;

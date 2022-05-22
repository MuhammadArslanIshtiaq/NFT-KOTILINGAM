import React from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';

const CounterComponent = () => {
  const [count, setCount] = React.useState(2);
  return (
    <div className='flex items-center gap-6'>
      <button
        onClick={() => setCount(count - 1)}
        type='button'
        className='p-2 bg-ebonyClay bg-opacity-40 border border-primary rounded-xl transition-all duration-200 transform active:scale-105'
      >
        <MinusIcon className='w-4 h-4' />
      </button>
      <span className='border-b border-white text-[1.25rem] font-medium'>
        {count}
      </span>
      <button
        onClick={() => setCount(count + 1)}
        type='button'
        className='p-2 bg-ebonyClay bg-opacity-40 border border-primary rounded-xl transition-all duration-200 transform active:scale-105'
      >
        <PlusIcon className='w-4 h-4' />
      </button>
    </div>
  );
};

export default CounterComponent;

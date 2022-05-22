import React from 'react';
import Countdown from 'react-countdown';

const CountdownComponent = () => {
  // Random component
  const Completionist = () => (
    <span className='text-[1.2rem] font-normal text-center block text-primary'>
      You are good to go!
    </span>
  );

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown

      const list = [
        { time: days, timeTitle: 'Days' },
        { time: hours, timeTitle: 'Hours' },
        { time: minutes, timeTitle: 'minutes' },
        { time: seconds, timeTitle: 'seconds', isLastDot: true },
      ];

      return (
        <div className='flex justify-evenly gap-3'>
          {list.map((item) => (
            <>
              <span>
                <h1 className='text-[1.5rem] font-normal text-center'>
                  {item.time}
                </h1>
                <small className='block text-[0.9rem] font-normal text-primary capitalize'>
                  {item.timeTitle}
                </small>
              </span>
              {item.isLastDot ? (
                ''
              ) : (
                <span className='text-[1.4rem] font-normal'>:</span>
              )}
            </>
          ))}
        </div>
      );
    }
  };

  return <Countdown date={Date.now() + 5000000000} renderer={renderer} />;
};

export default CountdownComponent;

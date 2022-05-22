import React from 'react';
import OurTeamCard from '../../../components/cards/OurTeamCard';

const OurTeamSection = () => {
  const ourTeamList = [
    {
      imageUrl: '/assets/images/team-item-0.png',
      name: 'Futurologer',
      text: `Learning from the Past, Living the Present, Studying the Future.
    Techno Enthusiast, accumulating knowledge on all advancements and
    building products.`,
    },

    {
      imageUrl: '/assets/images/team-item-1.png',
      name: 'Kiriya',
      text: `Kiriya is the Business Strategist and Marketing Expert, with strong Business acumen. Voyager of the Blue Ocean.`,
    },
  ];

  return (
    <section id='ourTeam' className='relative'>
      <div className='bg-ourTeamBg absolute w-full h-full z-10' />
      <div className='bg-ourTeamD bg-cover bg-center absolute h-full w-full' />
      <div className='max-w-7xl mx-auto py-8 md:py-16 px-2 sm:px-6 lg:px-8 h-full relative z-30'>
        <div className='mb-8 md:mb-12 text-center'>
          <h1 className='mb-0 text-[1.8rem] sm:text-[3.125rem] font-titleBold underline'>
            Our Team
          </h1>
        </div>
        <div className='w-[80%] sm:w-[70%] mx-auto mb-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-25 xl:gap-x-40 gap-y-16'>
            {ourTeamList.map((item) => (
              <div>
                <OurTeamCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;

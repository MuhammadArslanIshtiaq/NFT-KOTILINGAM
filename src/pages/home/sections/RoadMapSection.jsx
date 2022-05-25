import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
const RoadMapSection = () => {
  const RoadMapList = [
    {
      isLeft: true,
      title: 'Milestone 1',
      date: 'Q2 2022',
      list: (
        <>
          {' '}
          <li>
            <span>
              Kotilingam Social Media Profiles and website are Created to build
              community.
            </span>
          </li>
          <li>
            <span>Kotilingam NFTs are created.</span>
          </li>
          <li>
            <span>Special Minting for 1000 Whitelisted Community Members.</span>
          </li>
          <li>
            <span>Public Minting of 4000 Unique Lingam NFTs.</span>
          </li>
        </>
      ),
    },
    {
      isRight: true,
      title: 'Milestone 2',
      date: 'Q3 2022',
      list: (
        <>
          {' '}
          <li>
            <span>
              Partner with Mind, Body, Soul experts and influencers and coaches
              and arrange Community events.
            </span>
          </li>
          <li>
            <span>
              Invite community members to burn 10 NFTs to get Super power Phase
              2 Lingam.
            </span>
          </li>
          <li>
            <span>Public Minting of Phase 2 Unique Lingam NFTs.</span>
          </li>
        </>
      ),
    },
    {
      isLeft: true,
      title: 'Milestone 3',
      date: 'Q4 2022',
      list: (
        <>
          {' '}
          <li>
            <span>Special “KOTI” Token creation.</span>
          </li>
          <li>
            <span>
              Create Staking Platform for community members to earn by Staking
              NFTs
            </span>
          </li>
          <li>
            <span>
              Online Marketplace to Redeem benefits and exclusive benefits
            </span>
          </li>
          <li>
            <span>
              Access to major events like Yoga, Meditation, Retreats, music
              festivals, conferences and concerts..
            </span>
          </li>
        </>
      ),
    },
    {
      isRight: true,
      title: 'Milestone 4',
      date: 'Q2 2023',
      list: (
        <>
          {' '}
          <li>
            <span>
              Airdrop Phase 3 Lingam to Community Influencers and Top
              contributors.
            </span>
          </li>
          <li>
            <span>Public Minting of Phase 3 Unique Lingam NFTs.</span>
          </li>
        </>
      ),
    },
    {
      isLeft: true,
      title: 'Milestone 5',
      date: 'Q3 2023',
      list: (
        <>
          {' '}
          <li>
            <span>THE GRAND MEGA REVEAL OF “SUPER KOTI LINGAM”</span>
            <div className='text-[1.25rem] font-semibold'>
              Meet you in Metaverse
            </div>
          </li>
          <li>
            <span>
              Metaverse events like Yoga, Meditation, Retreats, music festivals,
              conferences and concerts.
            </span>
          </li>
        </>
      ),
    },
  ];

  return (
    <section id='roadMap' className='py-12 relative'>
      <div className='mb-8 text-center'>
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
          <h1 className='mb-0 text-[1.8rem] sm:text-[3.125rem] font-titleBold underline'>
            Roadmap
          </h1>
        </ScrollAnimation>
      </div>
      <div className='md:bg-center bg-cover bg-roadMapM md:bg-roadMapD py-6'>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-full relative'>
          {/* == */}
          <div>
            <div className='flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50'>
              {RoadMapList.map((RoadMapList) => (
                <>
                  {RoadMapList.isLeft && (
                    <div className='flex flex-row-reverse md:contents'>
                      <div className='col-start-1 col-end-5 p-4 my-4 ml-auto'>
                        {/* on small title */}
                        <ScrollAnimation
                          animateIn='fadeIn'
                          animateOut='fadeOut'
                        >
                          <div className='flex justify-between sm:hidden mb-10'>
                            <h4 className='text-2xl font-titleBold capitalize'>
                              {RoadMapList.title}
                            </h4>
                            <h4 className='text-lg font-normal text-primary uppercase'>
                              {RoadMapList.date}
                            </h4>
                          </div>
                        </ScrollAnimation>
                        {/* /on small title */}
                        <ScrollAnimation
                          animateIn='fadeInLeft'
                          animateOut='fadeOutLeft'
                        >
                          <h3 className='text-3xl font-titleBold capitalize mb-3 hidden sm:block'>
                            {RoadMapList.title}
                          </h3>
                          <ul className='flex flex-col gap-4 list-disc marker:text-primary marker:text-[1.5rem] text-[1rem] font-normal pl-5'>
                            {RoadMapList.list}
                          </ul>
                        </ScrollAnimation>
                      </div>
                      <div className='col-start-5 col-end-6 md:mx-auto relative mr-10 hidden sm:block'>
                        <div className='h-full w-6 flex items-center justify-center'>
                          <div className='h-full w-0.5 bg-gray-800 pointer-events-none' />
                        </div>
                        <ScrollAnimation
                          animateIn='fadeIn'
                          animateOut='fadeOut'
                        >
                          <div className='absolute top-1/4 left-[60%] transform translate-x-[-50%] -mt-3 w-28 p-4 text-[1rem] font-normal text-center bg-ebony rounded-3xl bg-opacity-60 text-primary uppercase'>
                            {RoadMapList.date}
                          </div>
                        </ScrollAnimation>
                      </div>
                    </div>
                  )}
                  {RoadMapList.isRight && (
                    <div className='flex md:contents'>
                      <div className='col-start-5 col-end-6 mr-10 md:mx-auto relative hidden sm:block'>
                        <div className='h-full w-6 flex items-center justify-center'>
                          <div className='h-full w-0.5 bg-gray-800 pointer-events-none' />
                        </div>
                        <ScrollAnimation
                          animateIn='fadeIn'
                          animateOut='fadeOut'
                        >
                          <div className='absolute top-1/4 left-[60%] transform translate-x-[-50%] -mt-3 w-28 p-4 text-[1rem] font-normal text-center bg-ebony rounded-3xl bg-opacity-60 text-primary'>
                            {RoadMapList.date}
                          </div>
                        </ScrollAnimation>
                      </div>
                      <div className='col-start-6 col-end-10 p-4 my-4 mr-auto'>
                        {/* on small title */}
                        <div className='flex justify-between sm:hidden mb-10'>
                          <ScrollAnimation
                            animateIn='fadeIn'
                            animateOut='fadeOut'
                          >
                            <h4 className='text-2xl font-titleBold capitalize'>
                              {RoadMapList.title}
                            </h4>
                            <h4 className='text-lg font-normal text-primary uppercase'>
                              {RoadMapList.date}
                            </h4>
                          </ScrollAnimation>
                        </div>
                        {/* /on small title */}
                        <ScrollAnimation
                          animateIn='fadeInRight'
                          animateOut='fadeOutRight'
                        >
                          <h3 className='text-3xl font-titleBold mb-3 hidden sm:block'>
                            {RoadMapList.title}
                          </h3>
                          <ul className='flex flex-col gap-4 list-disc marker:text-primary marker:text-[1.5rem] text-[1rem] font-normal pl-5'>
                            {RoadMapList.list}
                          </ul>
                        </ScrollAnimation>
                      </div>
                    </div>
                  )}
                </>
              ))}

              {/* === */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMapSection;

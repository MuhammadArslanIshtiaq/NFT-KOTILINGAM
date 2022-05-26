import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const ConnectSection = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto py-8 md:py-16 px-6 sm:px-6 lg:px-8 h-full relative z-30'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-8 items-center'>
          <div>
<<<<<<< HEAD
            <ul className="space-y-4">
              <li>
                <h1 className="mb-0 text-[1.8rem] sm:text-[3.125rem] font-titleBold underline">
                  Connect with us
                </h1>
              </li>
              <li>
                <p className="text-[0.88rem] md:text-[1.3rem] font-light">
                  WELCOME TO KOTILINGAM. AN EXCLUSIVE COMMUNITY OF KOTIS, A
                  NETWORK TO REPLENISH MIND, BODY AND SOUL TO ATTAIN ABUNDANCE
                  AND PROSPERITY. JUST JOIN TO FEEL THE GREATER VIBE OF
                  COLLECTIVE CONSCIOUSNESS.
                </p>
              </li>
              <li>
                <ul className="flex gap-4 mt-8">
                  <li>
                    <a
                      className="block h-10 w-10 transition-all duration-500 transform hover:-rotate-12"
                      href="https://twitter.com/kotilingam_nft"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="block h-full w-full outline outline-1 outline-blue-600 rounded-lg"
                        src="/assets/images/twitter.svg"
                        alt="..."
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="block h-10 w-10 transition-all duration-500 transform hover:-rotate-12"
                      href="http://www.reddit.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="block h-full w-full outline outline-1 outline-blue-600 rounded-lg"
                        src="/assets/images/reddit.svg"
                        alt="..."
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="block h-10 w-10 transition-all duration-500 transform hover:-rotate-12"
                      href="https://discord.gg/rpDTDUFU8U"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="block h-full w-full outline outline-1 outline-blue-600 rounded-lg"
                        src="/assets/images/discord-2.svg"
                        alt="..."
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="block h-10 w-10 transition-all duration-500 transform hover:-rotate-12"
                      href="https://www.instagram.com/kotilingam_nft"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="block h-full w-full outline outline-1 outline-blue-600 rounded-lg"
                        src="/assets/images/instagram.svg"
                        alt="..."
                      />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
=======
            <ScrollAnimation animateIn='fadeInLeft' animateOut='fadeOutLeft'>
              <ul className='space-y-4'>
                <li>
                  <h1 className='mb-0 text-[1.8rem] sm:text-[3.125rem] font-titleBold underline'>
                    Connect with us
                  </h1>
                </li>
                <li>
                  <p className='text-[0.88rem] md:text-[1.3rem] font-light'>
                    WELCOME TO KOTILINGAM. AN EXCLUSIVE COMMUNITY OF KOTIS, A
                    NETWORK TO REPLENISH MIND, BODY AND SOUL TO ATTAIN ABUNDANCE
                    AND PROSPERITY. JUST JOIN TO FEEL THE GREATER VIBE OF
                    COLLECTIVE CONSCIOUSNESS.
                  </p>
                </li>
                <li>
                  <ul className='flex gap-4 mt-8'>
                    <li>
                      <a
                        className='block h-10 w-10 transition-all duration-500 transform hover:-rotate-12'
                        href='http://www.twitter.com'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img
                          className='block h-full w-full outline outline-1 outline-blue-600 rounded-lg'
                          src='/assets/images/twitter.svg'
                          alt='...'
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className='block h-10 w-10 transition-all duration-500 transform hover:-rotate-12'
                        href='http://www.reddit.com'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img
                          className='block h-full w-full outline outline-1 outline-blue-600 rounded-lg'
                          src='/assets/images/reddit.svg'
                          alt='...'
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className='block h-10 w-10 transition-all duration-500 transform hover:-rotate-12'
                        href='http://www.discord.com'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img
                          className='block h-full w-full outline outline-1 outline-blue-600 rounded-lg'
                          src='/assets/images/discord-2.svg'
                          alt='...'
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className='block h-10 w-10 transition-all duration-500 transform hover:-rotate-12'
                        href='http://www.instagram.com'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img
                          className='block h-full w-full outline outline-1 outline-blue-600 rounded-lg'
                          src='/assets/images/instagram.svg'
                          alt='...'
                        />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </ScrollAnimation>
>>>>>>> 4901d969e5a2d9641be0a76e29026f1c1bf4f465
          </div>
          <div className='order-first lg:order-last'>
            <ScrollAnimation animateIn='fadeInRight' animateOut='fadeOutRight'>
              <div className='relative'>
                <img
                  className='block h-full w-full'
                  src='/assets/images/connect-item-0.png'
                  alt='..'
                />
                <span className='absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%] shadow-bg-white' />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;

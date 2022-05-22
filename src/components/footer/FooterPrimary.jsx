const navigation = {
  quickLink: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'RoadMap', href: '#roadMap' },
    { name: 'Team', href: '#ourTeam' },
  ],
};

export default function FooterPrimary() {
  return (
    <footer className='bg-gray-800' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='max-w-7xl mx-auto pb-8 pt-12 px-4 sm:px-6 lg:pt-16 lg:px-8'>
        <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
          <div className='w-36'>
            <img
              className='block h-full w-full'
              src='/assets/images/logo.svg'
              alt='..'
            />
          </div>

          <div className='mt-12 lg:mt-0'>
            <h3 className='text-sm font-medium text-white tracking-wider uppercase'>
              Quick Link
            </h3>
            <ul className='mt-4 gap-4 flex flex-row lg:flex-col'>
              {navigation.quickLink.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className='text-base font-light text-gray-400 hover:text-white'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='mt-8 xl:mt-0'>
            <h3 className='text-[1.6rem] font-medium text-white'>
              Signup to get updates
            </h3>
            <p className='mt-3 text-base font-light text-gray-500'>
              News, special offers and much more...
            </p>
            <form className='mt-3 sm:flex sm:max-w-md'>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                type='email'
                name='email-address'
                id='email-address'
                autoComplete='email'
                required
                className='appearance-none min-w-0 w-full bg-gray-700 border border-transparent rounded-md py-2 px-4 text-base text-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400'
                placeholder='Enter your email'
              />
              <div className='mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
                <button
                  type='submit'
                  className='w-full bg-primary border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-black hover:text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500'
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-8 md:flex md:items-center justify-center text-center'>
          <p className='text-[0.8rem] text-gray-400 md:mt-0 md:order-1'>
            COPYRIGHT © KOTILINGAM • ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}

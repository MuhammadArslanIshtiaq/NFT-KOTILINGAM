import React from "react";
import CountdownComponent from "../../../components/count-downs/CountdownComponent";

const HeroSection = () => {
  const StatusList = [
    { title: "TBC", subTitle: "Trading Volume" },
    { title: "5k+", subTitle: "NFTs Created" },
    { title: "TBC", subTitle: "Total Users" },
  ];

  return (
    <section className="pt-24 pb-16 md:h-[95vh] md:bg-center bg-cover bg-heroM md:bg-heroD relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full py-24">
        <div className="grid grid-cols-3 gap-y-6 h-full items-end">
          <div className="col-span-3 lg:col-span-2">
            <div className="mb-8">
              <h1 className="mb-5 font-titleBold leading-none text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] xl:text-[3rem] ">
                Welcome to Kotilingam NFT, <br /> a Project for Mind, body and
                Soul.
              </h1>
              <div className="mt-4">
                <a
                  href="https://discord.com/invite/rpDTDUFU8U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-2 border-2 shadow-sm text-base font-medium rounded-xl text-[1rem] bg-primary text-black border-primary hover:text-white hover:border-primary-600 hover:bg-primary-600 focus:outline-none transition duration-200 transform hover:-skew-x-3"
                >
                  Whitelist
                </a>
              </div>
            </div>
            {/* == */}
            <div>
              <ul className="flex flex-wrap gap-6 sm:gap-8 lg:gap-12">
                {StatusList.map((StatusList) => (
                  <li>
                    <h6 className="font-medium text-[1.5rem]">
                      {StatusList.title}
                    </h6>
                    <h6 className="font-normal text-[1rem]">
                      {StatusList.subTitle}
                    </h6>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1 relative">
            <div className="sm:w-[20rem] lg:absolute bottom-0 right-0">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm drop-shadow-lg p-6 rounded-2xl border border-gray-300 ">
                <div className="flex items-center">
                  <div className="mr-auto">
                    <small className="block text-[.8rem] font-normal text-gray-300">
                      Minting starts on
                    </small>
                    <h6 className="text-[1.2rem] font-normal">TBD</h6>
                    <h6 className="text-[1.2rem] font-normal">8:00 PM EST</h6>
                  </div>
                  <div>
                    <span className="block h-20 w-20">
                      <img
                        className="block h-full w-full"
                        src="/assets/images/clock.svg"
                        alt="..."
                      />
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <CountdownComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

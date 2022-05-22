import React from "react";

const OurTeamSection = () => {
  return (
    <section id="ourTeam" className="relative">
      <div className="bg-ourTeamBg absolute w-full h-full z-10" />
      <div className="bg-ourTeamD bg-cover bg-center absolute h-full w-full" />
      <div className="max-w-7xl mx-auto py-8 md:py-16 px-2 sm:px-6 lg:px-8 h-full relative z-30">
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-[1.8rem] sm:text-[3.125rem] font-titleBold underline">
            Our Team
          </h1>
        </div>
        <div className="w-[80%] sm:w-[70%] mx-auto my-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-0 gap-y-16">
            <div className="relative h-full rotate-0 lg:rotate-[17deg] z-20">
              <div className="rounded-t-full border-2 border-primary absolute h-full w-full bottom-[-0.8125rem] right-[-0.6875rem] bg-[#37393f79]" />
              <div className="p-5 bg-[#37393F] rounded-t-full border-2 border-primary relative z-20 h-full">
                <div className="mb-2">
                  <img
                    className="block h-full w-full"
                    src={"/assets/images/team-item-0.png"}
                    alt="..."
                  />
                </div>
                <h2 className="mb-2 font-bold capitalize text-[1rem] sm:text-[1.875rem]">
                  Futurologer
                </h2>
                <p className="text-gray-400 text-[.875rem] sm:text-[1rem]">
                  Learning from the Past, Living the Present, Studying the
                  Future. Techno Enthusiast, accumulating knowledge on all
                  advancements and building products.
                </p>
              </div>
            </div>
            <div className="relative h-full rotate-0 lg:rotate-[-17deg] z-10 top-20">
              <div className="rounded-t-full border-2 border-primary absolute h-full w-full bottom-[-0.8125rem] right-[-0.6875rem] bg-[#37393f79]" />
              <div className="p-5 bg-[#37393F] rounded-t-full border-2 border-primary relative z-20 h-full">
                <div className="mb-2">
                  <img
                    className="block h-full w-full"
                    src={"/assets/images/team-item-1.png"}
                    alt="..."
                  />
                </div>
                <h2 className="mb-2 font-bold capitalize text-[1rem] sm:text-[1.875rem]">
                  Kiriya
                </h2>
                <p className="text-gray-400 text-[.875rem] sm:text-[1rem]">
                  Kiriya is the Business Strategist and Marketing Expert, with
                  strong Business acumen. Voyager of the Blue Ocean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;

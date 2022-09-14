/* This example requires Tailwind CSS v2.0+ */

import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarPrimary() {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState("");

  const navigation = [
    { name: "About", href: "#about" },
    { name: "RoadMap", href: "#roadMap" },
    { name: "OurTeam", href: "#ourTeam" },
  ];

  const changeBackground = () => {
    if (window.scrollY >= 180) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Disclosure
      as="nav"
      className={`bg-transparent fixed w-full top-0 z-40 transition-all duration-300 ${
        navbar && " bg-ebony-500 py-2 shadow-sm shadow-gray-400"
      }`}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center animated fadeInLeftBig">
                  <img
                    className="block h-11 w-auto"
                    src="/assets/images/logo.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:flex items-center sm:ml-14">
                  <div className="flex space-x-10">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setActive(item.name)}
                        className={classNames(
                          active === item.name
                            ? "text-primary"
                            : "text-white hover:text-primary",
                          "font-normal text-[1rem] animated fadeInDownBig",
                          item.durationClass
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden md:block space-x-4">
                  <a
                    href="https://discord.com/invite/rpDTDUFU8U"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-2 border-2 shadow-sm text-base font-medium rounded-xl text-[1rem] bg-transparent text-white border-white hover:border-primary-600 hover:bg-primary-600 focus:outline-none transition duration-200 transform hover:-skew-x-3 animated fadeInDownBig"
                  >
                    Join Discord
                  </a>
                  <button
                    type="button"
                    className="inline-flex items-center px-8 py-2 border-2 shadow-sm text-base font-medium rounded-xl text-[1rem] bg-primary text-black border-primary hover:text-white hover:border-primary-600 hover:bg-primary-600 focus:outline-none transition duration-200 transform hover:-skew-x-3 animated fadeInDownBig"
                  >
                    Connect Wallet
                  </button>
                </div>
                {/* button on small */}
                <div className="flex items-center md:hidden space-x-4">
                  <a
                    href="https://discord.com/invite/rpDTDUFU8U"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition transform hover:scale-110 active:scale-110 focus:scale-110 duration-200 animated fadeInDownBig"
                  >
                    <span>
                      <img
                        className="block h-100 w-100"
                        src="/assets/images/discord.svg"
                        alt=".."
                      />
                    </span>
                  </a>
                  <button
                    type="button"
                    className="transition transform hover:scale-110 active:scale-110 focus:scale-110 duration-200 animated fadeInDownBig"
                  >
                    <span>
                      <img
                        className="block h-100 w-100"
                        src="/assets/images/wallet.svg"
                        alt=".."
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-ebony-500">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={() => setActive(item.name)}
                  className={classNames(
                    active === item.name
                      ? "bg-gray-900 text-primary"
                      : "text-gray-300 hover:bg-gray-700 hover:text-primary",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

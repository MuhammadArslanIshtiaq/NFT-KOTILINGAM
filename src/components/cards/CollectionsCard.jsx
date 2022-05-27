import React from "react";

const CollectionsCard = ({ item }) => {
  return (
    <div className="bg-ebony p-4 rounded-2xl">
      <div className="mb-2 h-[9rem] sm:h-[12.5rem]">
        <img
          className="block h-full w-full rounded-2xl sm:w-4/5 sm:mx-auto"
          src={item.imageUrl}
          alt=".."
        />
      </div>
      <h4 className="mb-4 font-semibold text-[1.2rem] sm:text-[1.4rem] text-center capitalize">
        #Name
      </h4>
      <ul className="flex flex-col gap-4">
        <li className="pb-2 flex justify-between border-b border-gray-700">
          <h6 className="text-[0.7rem] sm:text-[1rem] font-normal capitalize">
            Highest Sale
          </h6>
          <h6
            className={`text-[0.7rem] sm:text-[1rem] font-normal uppercase text-green-500`}
          >
            $400.00K
          </h6>
        </li>
        <li className="pb-2 flex justify-between border-b border-gray-700">
          <h6 className="text-[0.7rem] sm:text-[1rem] font-normal capitalize">
            Market Cap
          </h6>
          <h6 className={`text-[0.7rem] sm:text-[1rem] font-normal uppercase`}>
            $58.0M
          </h6>
        </li>
        <li className="pb-2 flex justify-between">
          <h6 className="text-[0.7rem] sm:text-[1rem] font-normal capitalize">
            Total Volume
          </h6>
          <h6 className={`text-[0.7rem] sm:text-[1rem] font-normal uppercase`}>
            $110.0M
          </h6>
        </li>
      </ul>
    </div>
  );
};

export default CollectionsCard;

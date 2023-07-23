import Image from "next/image";
import React from "react";

const SmallCardsComponents = ({ data }) => {
  return (
    <div className="flex items-center m-2 mt-5 
    space-x-4 rounded-xl cursor-pointer hover:bg-gray-100
     hover:scale-105 transition duration-150 ease-in-out ">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image src={data?.img} layout="fill" className="rounded-lg" />
      </div>
      {/* Right */}
      <div>
        <h2>{data?.location}</h2>
        <h3 className="text-gray-500">{data?.distance}</h3>
      </div>
    </div>
  );
};

export default SmallCardsComponents;
 
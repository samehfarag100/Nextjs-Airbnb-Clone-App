import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
const SearchInfoCard = ({
  image,
  location,
  description,
  price,
  star,
  title,
  total,
}) => {
  return (
    <div
      className="flex py-7 px-2 border-b cursor-pointer
     hover:opacity-80 shadow rounded transition duration-200 ease-in-out first:border-t "
    >
      {/* search card image */}
      <div className=" relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={image}
          objectFit="cover"
          layout="fill"
          className="h-24 w-40 md:h-52 md:w-80 rounded"
          alt=""
          fill
          priority
        
        />
      </div>

      {/* search card info */}

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2"></div>
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-end">
          <h3 className="font-semibold text-lg lg:text-2xl">{`${price}`}</h3>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <StarIcon className="h-6 text-red-500" />
            <p>{star}</p>
          </div>

          <div>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInfoCard;

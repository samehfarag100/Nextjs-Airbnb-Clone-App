import React from "react";
import Image from "next/image";
const BannerComponents = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">
          Not Sure Where to go? Perfect.
        </p>
        <button className="bg-white px-10 py-4 rounded-full
         text-purple-500 font-bold shadow-md
          hover:shadow-xl active:scale-90 my-3 transition duration-150 ease-in-out">
          I'm Flexible
        </button>
      </div>
    </div>
  );
};

export default BannerComponents;

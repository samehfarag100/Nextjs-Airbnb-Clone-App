import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import useHeaderHooks from "@/Hook/header/useHeaderHooks";

const HeaderComponents = ({ placeHolder }) => {
  const [
    searchInput,
    setSearchInput,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    numberOfGuest,
    setNumberOfGuest,
    router,
    selectionRange,
    handelSearch,
    handelSelect,
  ] = useHeaderHooks();
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3
     bg-white shadow-md p-5 md:px-10"
    >
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          alt=""
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle - search */}
      <div className="flex items-center md:border-2 rounded-full p-2 md:shadow-sm ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="search"
          placeholder={placeHolder || "Start Your Search..."}
          className="outline-none pl-2 bg-transparent flex-grow text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-400
         text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center border-2 rounded-full p-2 space-x-2">
          <MenuIcon className="h-6" />
          <UsersIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handelSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number Of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={numberOfGuest}
              onChange={(e) => setNumberOfGuest(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>

          <div className="flex items-center justify-center space-x-10">
            <button
              className="bg-gray-400 text-white px-3 rounded-lg"
              onClick={() => setSearchInput("")}
            >
              Cancel
            </button>
            <button
              onClick={handelSearch}
              className="bg-red-400 text-white px-3 rounded-lg"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComponents;

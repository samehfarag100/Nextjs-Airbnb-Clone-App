import SearchInfoCard from "@/Components/Cards/SearchInfoCard";
import FooterComponents from "@/Components/Footer/FooterComponents";
import HeaderComponents from "@/Components/Header/HeaderComponents";
import MapComponents from "@/Components/Map/MapComponents";
import useSearchHook from "@/Hook/search/useSearchHook";

import React from "react";

const Search = ({ searchResults }) => {
  const [
    router,
    location,
    startDate,
    endDate,
    numberOfGuest,
    formattedStartDate,
    formattedEndDate,
    rangeDate,
  ] = useSearchHook();
  return (
    <div>
      <HeaderComponents
        placeHolder={`${location} | ${rangeDate} | ${numberOfGuest} guests`}
      />
      <div className="grid grid-cols-2">
        <main className="flex flex-col ">
          <section className="flex-grow pt-14 px-6">
            <p className="text-xs mb-6">
              300+ Stays - {rangeDate} - for {numberOfGuest} guests
            </p>
            <h1 className="text-3xl font-semibold mb-6">Stays in {location}</h1>
            {/* ************ Section One ************ */}
            <div className="flex hidden lg:inline-flex space-x-10 whitespace-nowrap ">
              <p className="search_button">Cancellation Flexibility</p>
              <p className="search_button">Type of Place</p>
              <p className="search_button">Price</p>
              <p className="search_button">Rooms and Beds</p>
              <p className="search_button">More Filters</p>
            </div>
            {/* ************ Section Two ************ */}
            <div className="flex flex-col p-5 space-y-6">
              {searchResults &&
                searchResults?.map((item) => (
                  <SearchInfoCard
                    key={item?.img}
                    image={item?.img}
                    location={item?.location}
                    description={item?.description}
                    price={item?.price}
                    star={item?.star}
                    title={item?.title}
                    total={item?.total}
                  />
                ))}
            </div>
          </section>
        </main>
        <div className="pt-14 px-6">
          <MapComponents />
        </div>
      </div>

      <FooterComponents />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResponse = await fetch(`https://www.jsonkeeper.com/b/5NPS`);
  const searchResults = await searchResponse.json();

  return {
    props: {
      searchResults,
    },
  };
}

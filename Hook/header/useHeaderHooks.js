import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";

const useHeaderHooks = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuest, setNumberOfGuest] = useState(1);
  const router = useRouter();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handelSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handelSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuest,
      },
    });
  };

  return [
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
  ];
};

export default useHeaderHooks;

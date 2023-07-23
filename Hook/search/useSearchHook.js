import React from "react";
import { format } from "date-fns";
import { useRouter } from "next/router";
const useSearchHook = () => {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuest } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yy");
  const rangeDate = `${formattedStartDate} - ${formattedEndDate}`;

  return [
    router,
    location,
    startDate,
    endDate,
    numberOfGuest,
    formattedStartDate,
    formattedEndDate,
    rangeDate,
  ];
};

export default useSearchHook;

import { useCallback } from "react";

export const useFetchData = ({
  searchedPlace,
  setFetchedData,
  setActive,
  setPerHourList,
  localDateRef,
}) => {
  let params = {
    location: searchedPlace,
    days: 7,
  };

  const data = useCallback(
    (e) => {
      e.preventDefault();
      if (searchedPlace.length > 3) {
        try {
          fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=bae68f473c254769b3275439231210&q=${params.location}&days=${params.days}&aqi=no&alerts=no`
          )
            .then((response) => response.json())
            .then((res) => {
              if (!res.error) {
                res.forecast.forecastday[0].isToday = true;
                setFetchedData(res);
                setActive(res.forecast.forecastday[0].date);
                setPerHourList(res.forecast.forecastday[0]);
                localDateRef.current = new Date(res.location.localtime);
              }
            });
        } catch (error) {
          console.error(error.message);
        }
      }
    },
    [searchedPlace]
  );
  return data;
};

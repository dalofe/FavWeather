import { useContext, useState } from "react";
import styles from "./Search.module.css";
import { WeatherContext } from "../../context/WeatherContext";

export default function Search() {
  const { setFetchedData, setActive, setPerHourList } =
    useContext(WeatherContext);

  const [searchInput, setSearchInput] = useState("");
  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };

  let params = {
    location: searchInput,
    days: 7,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchInput.length > 3) {
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
            }
          });
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  const clearSearchInput = () => {
    setSearchInput("");
  };

  return (
    <form className={styles.Search} onSubmit={submitHandler}>
      <input
        type="text"
        onChange={handleInput}
        className={styles.SearchInput}
        value={searchInput}
        placeholder="Search city"
      />
      <button onClick={submitHandler}>Search</button>
      {searchInput && (
        <button className={styles.SearchClearButton} onClick={clearSearchInput}>
          x
        </button>
      )}
    </form>
  );
}

import { useState, useRef, createContext, useCallback } from "react";
import { ForecastListMemoized } from "./components/ForecastList";
import { TodayMemoized } from "./components/Today";
import Search from "./components/Search";
import TimeTableList from "./components/TimeTableList";
import { dayName } from "./DateTime";
import "./App.css";

const ForecastContext = createContext(undefined);

function App() {
  const localDateRef = useRef();
  const [fetchedData, setFetchedData] = useState(undefined);
  const [searchedPlace, setSearchedPlace] = useState("");
  const [perHourList, setPerHourList] = useState(undefined);
  const [active, setActive] = useState(undefined);

  let params = {
    location: searchedPlace,
    days: 7,
  };

  const clearSearchInput = () => {
    setSearchedPlace("");
  };

  const handleChange = (e) => {
    setSearchedPlace(e.target.value);
  };

  const submitHandler = useCallback(
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

  return (
    <div className="App">
      <div className="Container">
        <Search
          searchedPlace={searchedPlace}
          handleChange={handleChange}
          handleClick={clearSearchInput}
          submitHandler={submitHandler}
        />
        {fetchedData && (
          <>
            <div className="TodayContainer">
              <div>
                <h3
                  style={{ marginTop: "2rem" }}
                >{`${fetchedData.location.name} (${fetchedData.location.country})`}</h3>
                <div>
                  {`${localDateRef.current.getHours()}:${localDateRef.current.getMinutes()}hs | ${
                    dayName[localDateRef.current.getDay()]
                  }`}
                </div>
              </div>
              <TodayMemoized data={fetchedData} />
            </div>
            <ForecastContext.Provider
              value={{
                setPerHourList: setPerHourList,
                setActive: setActive,
                active: active,
              }}
            >
              <ForecastListMemoized list={fetchedData.forecast.forecastday} />
            </ForecastContext.Provider>
            <TimeTableList
              list={perHourList}
              localDateNow={localDateRef.current}
            />
          </>
        )}
      </div>
      {/* <div className="Credits">
        Powered by{" "}
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
        </a>
      </div> */}
    </div>
  );
}

export { ForecastContext };
export default App;

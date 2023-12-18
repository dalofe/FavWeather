import { useState, useRef, createContext } from "react";
import { ForecastListMemoized } from "./components/ForecastList";
import { TodayMemoized } from "./components/Today";
import Search from "./components/Search";
import TimeTableList from "./components/TimeTableList";
import { dayName } from "./DateTime";
import "./App.css";

const ForecastContext = createContext(undefined);
export const WeatherContext = createContext(undefined);

function App() {
  const localDateRef = useRef();
  const [fetchedData, setFetchedData] = useState(undefined);
  const [searchedPlace, setSearchedPlace] = useState("");
  const [perHourList, setPerHourList] = useState(undefined);
  const [active, setActive] = useState(undefined);

  return (
    <WeatherContext.Provider
      value={{
        searchedPlace,
        setSearchedPlace,
        setFetchedData,
        setActive,
        setPerHourList,
        localDateRef,
        fetchedData,
        active,
        perHourList,
      }}
    >
      <div className="App">
        <div className="Container">
          <Search />
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
                <TodayMemoized />
              </div>
              <ForecastListMemoized />
              <TimeTableList />
            </>
          )}
        </div>
        <div className="Credits">
          Powered by{" "}
          <a href="https://www.weatherapi.com/" title="Free Weather API">
            WeatherAPI.com
          </a>
        </div>
      </div>
    </WeatherContext.Provider>
  );
}

export { ForecastContext };
export default App;

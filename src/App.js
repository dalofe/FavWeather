import { useState, useRef, createContext } from "react";
import { ForecastListMemoized } from "./components/ForecastList";
import { TodayMemoized } from "./components/Today";
import Search from "./components/Search";
import TimeTableList from "./components/TimeTableList";
import "./App.css";
import { Footer } from "./components/Footer";

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
              <TodayMemoized />
              <ForecastListMemoized />
              <TimeTableList />
            </>
          )}
        </div>
        <Footer />
      </div>
    </WeatherContext.Provider>
  );
}

export default App;

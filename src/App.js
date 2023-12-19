import { useState } from "react";
import { ForecastListMemoized } from "./components/ForecastList/ForecastList";
import { TodayMemoized } from "./components/Today/Today";
import Search from "./components/Search/Search";
import TimeTableList from "./components/TimeTableList/TimeTableList";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { WeatherContext } from "./context/WeatherContext";

function App() {
  const [fetchedData, setFetchedData] = useState(undefined);
  const [perHourList, setPerHourList] = useState(undefined);
  const [active, setActive] = useState(undefined);

  return (
    <WeatherContext.Provider
      value={{
        active,
        fetchedData,
        perHourList,
        setActive,
        setFetchedData,
        setPerHourList,
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

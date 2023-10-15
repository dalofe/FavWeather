import { useEffect, useState, useRef, createContext } from 'react';
import ForecastList from './components/ForecastList';
import Today from './components/Today';
import Search from './components/Search';
import TimeTableList from './components/TimeTableList';
import './App.css';

const ForecastContext = createContext(undefined);

function App() {
  const firstRenderRef = useRef(true);
  const localDateRef = useRef();
  const [data, setData] = useState(false);
  const [fetchedData, setFetchedData] = useState(undefined);
  const [searchedPlace, setSearchedPlace] = useState(undefined);
  const [perHourList, setPerHourList] = useState(undefined);
  const [active, setActive] = useState(undefined);

  const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let params = {
    location: searchedPlace,
    days: 7
  }
  
  const handleClick = () => {
    setData(!data);
  }

  const handleChange = (e) => {
    setSearchedPlace(e.target.value);
  }

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else {
      try {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=bae68f473c254769b3275439231210&q=${params.location}&days=${params.days}&aqi=no&alerts=no`)
          .then((response) => response.json())
          .then((res) => {
            if (!res.error) {
              res.forecast.forecastday[0].isToday = true;
              setFetchedData(res);
              setActive(res.forecast.forecastday[0].date);
              setPerHourList(res.forecast.forecastday[0]);
              localDateRef.current = new Date(res.location.localtime)
            }
          });
      } catch (error) {
        console.error(error.message)
      }
    }
  }, [data, params.location, params.days]);

  return (
    <div className="App">
      <div className="Container">
        <Search data={fetchedData} handleChange={handleChange} handleClick={handleClick} />
        {fetchedData && 
          <>
            <div className="TodayContainer">
              <div>
                <h3>{`${fetchedData.location.name} (${fetchedData.location.country})`}</h3>
                <div>
                  {`${localDateRef.current.getHours()}:${localDateRef.current.getMinutes()}hs | ${dayName[localDateRef.current.getDay()]}`}
                </div>
              </div>
              <Today data={fetchedData}/>
            </div>
            <ForecastContext.Provider value={{
                setPerHourList: setPerHourList,
                setActive: setActive,
                active: active
              }}>
              <ForecastList list={fetchedData.forecast.forecastday} />
            </ForecastContext.Provider>
            <TimeTableList list={perHourList} localDateNow={localDateRef.current} />
          </>
        }
      </div>
    </div>
  );
}

export {ForecastContext};
export default App;

import { useEffect, useState, useRef } from 'react';
import ForecastList from './components/ForecastList';
import Today from './components/Today';
import Heading from './components/Heading';
import './App.css';

function App() {
  const firstRenderRef = useRef(true);
  const [data, setData] = useState(false);
  const [fetchedData, setFetchedData] = useState(undefined);
  const [searchedPlace, setSearchedPlace] = useState(undefined);

  let params = {
    location: searchedPlace,
    days: 7
  }

  //console.log(fetchedData);
  
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
              setFetchedData(res);
            }
          });
      } catch (error) {
        console.error(error.message)
      }
    }
  }, [data, params.location, params.days])

  return (
    <div className="App">
      <div className="Container">
        <Heading data={fetchedData} handleChange={handleChange} handleClick={handleClick} />
        {fetchedData && 
          <>
            <div className="TodayContainer">
              <div>
                <div>Today</div>
              </div>
              <Today data={fetchedData}/>
            </div>
            <ForecastList list={fetchedData.forecast.forecastday}/>
          </>
        }
      </div>
    </div>
  );
}

export default App;

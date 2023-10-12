import { useEffect, useState, useRef } from 'react';
import './App.css';

const ForecastItem = (props) => {
  return (
    <li>{props.item.date} - {props.item.day.condition.text} <img src={props.item.day.condition.icon} alt={props.item.day.condition.text} /></li>
  )
}

const ForecastList = (props) => {
  console.log(props.list);

  return (
    <div>
      <ul>
        {props.list.map( (forecastItem) => (
          <ForecastItem key={forecastItem.date} item={forecastItem} />
        ))}
      </ul>
    </div>
  );
};

function App() {
  const firstRenderRef = useRef(true);
  const [data, setData] = useState(false);
  const [fetchedData, setFetchedData] = useState(undefined);
  const [searchedPlace, setSearchedPlace] = useState(undefined);

  let params = {
    location: searchedPlace,
    days: 10
  }

  console.log(fetchedData);
  
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
  }, [data])

  return (
    <div className="App">
      <h1>Weather forecast by locations: {fetchedData && (`${fetchedData.location.name} (${fetchedData.location.country})`)}</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Search</button>

      {fetchedData && 
        <div>
          Today:
          <div>
            {fetchedData.current.condition.text} <img src={fetchedData.current.condition.icon} alt={fetchedData.current.condition.text} />
          </div>
          <div>
            {fetchedData.forecast.forecastday[0].day.maxtemp_c}º - {fetchedData.forecast.forecastday[0].day.mintemp_c}º 
          </div>
          <div>
            Feels like {fetchedData.current.feelslike_c}º
          </div>

          <ForecastList list={fetchedData.forecast.forecastday}/>
        </div>
      }
    </div>
  );
}

export default App;

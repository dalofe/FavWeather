import ForecastItem  from "./ForecastItem";

export default function ForecastList(props) {  
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

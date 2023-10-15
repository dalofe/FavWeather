import ForecastItem  from "./ForecastItem";

export default function ForecastList(props) {  
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {props.list.map( (forecastItem) => (
          <ForecastItem key={forecastItem.date} item={forecastItem} />
        ))}
      </div>
    );
  };

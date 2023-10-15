import ForecastItem  from "./ForecastItem";

export default function ForecastList(props) {  
    return (
      <div style={{display: 'flex', justifyContent: 'center', gap: '0.75rem'}}>
        {props.list.map( (forecastItem) => (
          <ForecastItem key={forecastItem.date} item={forecastItem} />
        ))}
      </div>
    );
  };

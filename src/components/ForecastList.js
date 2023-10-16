import ForecastItem  from "./ForecastItem";
import styles from "../css/ForecastList.module.css";

export default function ForecastList(props) {
    return (
      <div className={styles.ForecastList}>
        {props.list.map( (forecastItem) => (
          <ForecastItem key={forecastItem.date} item={forecastItem} setPerHourList={props.setPerHourList} setActive={props.setActive} active={props.active} />
        ))}
      </div>
    );
  };

import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import styles from "./ForecastItem.module.css";
import { dayName, monthName } from "../../DateTime";

export default function ForecastItem({ item }) {
  const { active, setActive, setPerHourList } = useContext(WeatherContext);

  const date = new Date(item.date);
  const now = new Date(Date.now());
  const dataDay = item.day;
  let dayOfTheWeek;

  if (now.getDay() === date.getDay()) {
    dayOfTheWeek = "Today";
  } else if (now.getDay() + 1 === date.getDay()) {
    dayOfTheWeek = "Tomorrow";
  } else {
    dayOfTheWeek = dayName[date.getDay()];
  }
  const dayMonth = `${date.getDate()} ${monthName[date.getMonth()]}`;

  const clickHandler = () => {
    setActive(item.date);
    setPerHourList(item);
  };

  const ForecastItemClass =
    active === item.date
      ? `${styles.ForecastItem} ${styles.isActive}`
      : styles.ForecastItem;

  return (
    <div className={ForecastItemClass} onClick={clickHandler}>
      <div>{dayOfTheWeek}</div>
      <div>{dayMonth}</div>
      <div>
        <img src={dataDay.condition.icon} alt={dataDay.condition.text} />
      </div>

      {dataDay.daily_will_it_rain === 1 && (
        <div className={styles.ForecastItemRain}>
          <div>{`${dataDay.daily_chance_of_rain}%`}</div>
          <div>{`${dataDay.totalprecip_mm}mm`}</div>
        </div>
      )}
      <div className={styles.ForecastItemTempWrapper}>
        <span className={styles.ForecastItemMinTemp}>
          {Math.round(dataDay.mintemp_c)}º
        </span>
        <span> / </span>
        <span className={styles.ForecastItemMaxTemp}>
          {Math.round(dataDay.maxtemp_c)}º
        </span>
      </div>
    </div>
  );
}

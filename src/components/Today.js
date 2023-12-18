import { memo, useContext } from "react";
import styles from "../css/Today.module.css";
import { WeatherContext } from "../App";

const Today = () => {
  const { fetchedData } = useContext(WeatherContext);

  return (
    <div className={styles.Today}>
      <div className={styles.TodayGrid}>
        <div className={styles.TodayIcon}>
          <img
            src={fetchedData.current.condition.icon}
            alt={fetchedData.current.condition.text}
          />
        </div>
        <div className={styles.TodayTemp}>
          <div className={styles.TodayCurrentTemp}>
            {Math.round(fetchedData.current.temp_c)}º
          </div>
          <div className={styles.TodayFeelsLike}>
            Feels like {Math.round(fetchedData.current.feelslike_c)}º
          </div>
        </div>
        <div className={styles.TodayInfo}>
          <div className={styles.TodayTitle}>
            {fetchedData.current.condition.text}
          </div>
          <div className={styles.TodayMinMax}>
            <span className={styles.TodayMinTemp}>
              {Math.round(fetchedData.forecast.forecastday[0].day.mintemp_c)}º
            </span>
            <span> / </span>
            <span className={styles.TodayMaxTemp}>
              {Math.round(fetchedData.forecast.forecastday[0].day.maxtemp_c)}º
            </span>
          </div>
          <div>
            Wind: {fetchedData.current.wind_dir}{" "}
            {Math.round(fetchedData.current.wind_kph)}km/h
          </div>
          <div>Humidity: {fetchedData.current.humidity}%</div>
        </div>
      </div>
    </div>
  );
};

export const TodayMemoized = memo(Today);

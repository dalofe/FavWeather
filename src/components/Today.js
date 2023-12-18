import { memo, useContext } from "react";
import styles from "../css/Today.module.css";
import { WeatherContext } from "../App";
import { dayName } from "../DateTime";

const Today = () => {
  const { fetchedData, localDateRef } = useContext(WeatherContext);

  return (
    <div className={styles.TodayContainer}>
      <div>
        <h3
          style={{ marginTop: "2rem" }}
        >{`${fetchedData.location.name} (${fetchedData.location.country})`}</h3>
        <div>
          {`${localDateRef.current.getHours()}:${localDateRef.current.getMinutes()}hs | ${
            dayName[localDateRef.current.getDay()]
          }`}
        </div>
      </div>
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
    </div>
  );
};

export const TodayMemoized = memo(Today);

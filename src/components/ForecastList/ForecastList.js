import { memo, useContext } from "react";

import ForecastItem from "../ForecastItem/ForecastItem";
import styles from "./ForecastList.module.css";
import { WeatherContext } from "../../context/WeatherContext";

const ForecastList = () => {
  const { fetchedData } = useContext(WeatherContext);
  const list = fetchedData.forecast.forecastday;

  return (
    <div className={styles.ForecastList}>
      {list.map((forecastItem) => (
        <ForecastItem key={forecastItem.date} item={forecastItem} />
      ))}
    </div>
  );
};

export const ForecastListMemoized = memo(ForecastList);

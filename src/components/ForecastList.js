import { memo, useContext } from "react";

import ForecastItem from "./ForecastItem";
import styles from "../css/ForecastList.module.css";
import { WeatherContext } from "../App";

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

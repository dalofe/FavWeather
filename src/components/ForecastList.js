import { memo } from "react";

import ForecastItem from "./ForecastItem";
import styles from "../css/ForecastList.module.css";

const ForecastList = ({ list }) => {
  return (
    <div className={styles.ForecastList}>
      {list.map((forecastItem) => (
        <ForecastItem key={forecastItem.date} item={forecastItem} />
      ))}
    </div>
  );
};

export const ForecastListMemoized = memo(ForecastList);

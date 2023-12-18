import TimeTableItem from "./TimeTableItem";
import styles from "../css/TimeTableList.module.css";
import { useContext } from "react";
import { WeatherContext } from "../App";

const TimeTableList = () => {
  const { perHourList, localDateRef } = useContext(WeatherContext);
  const listItems = perHourList.hour.map((TimeTableData, index) => {
    const date = new Date(TimeTableData.time);
    if (perHourList.isToday) {
      if (date > localDateRef.current) {
        return (
          <TimeTableItem
            key={TimeTableData.time}
            timeData={TimeTableData}
            hours={date.getHours()}
          />
        );
      }
    } else {
      if (index % 4 === 0) {
        return (
          <TimeTableItem
            key={TimeTableData.time}
            timeData={TimeTableData}
            hours={date.getHours()}
          />
        );
      }
    }
  });
  return <div className={styles.TimeTableList}>{listItems}</div>;
};

export default TimeTableList;

import TimeTableItem from "../TimeTableItem/TimeTableItem";
import styles from "./TimeTableList.module.css";
import { useContext } from "react";
import { WeatherContext } from "../../App";

const TimeTableList = () => {
  const { fetchedData, perHourList } = useContext(WeatherContext);

  let listItemsFiltered;
  if (perHourList.isToday) {
    listItemsFiltered = perHourList.hour.filter((TimeTableData) => {
      const localDate = new Date(fetchedData.location.localtime);
      const date = new Date(TimeTableData.time);
      return date > localDate;
    });
  } else {
    listItemsFiltered = perHourList.hour.filter((TimeTableData, index) => {
      return index % 4 === 0;
    });
  }

  const listItems = listItemsFiltered.map((TimeTableData) => {
    return <TimeTableItem key={TimeTableData.time} timeData={TimeTableData} />;
  });

  return <div className={styles.TimeTableList}>{listItems}</div>;
};

export default TimeTableList;

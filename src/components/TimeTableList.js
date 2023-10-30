import TimeTableItem from "./TimeTableItem";
import styles from "../css/TimeTableList.module.css";

const TimeTableList = ({ list, localDateNow }) => {
  const listItems = list.hour.map((TimeTableData, index) => {
    const date = new Date(TimeTableData.time);
    if (list.isToday) {
      if (date > localDateNow) {
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

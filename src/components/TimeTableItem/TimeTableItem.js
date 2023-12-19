import styles from "./TimeTableItem.module.css";

const TimeTableItem = ({ timeData }) => {
  const date = new Date(timeData.time);
  const time = `${date.getHours()}:00`;

  const mapUvIndex = (value) => {
    if (value < 2) {
      return "Low";
    } else if (value >= 2 && value <= 5) {
      return "Moderate";
    } else if (value > 5 && value <= 7) {
      return "High";
    } else if (value > 8 && value <= 10) {
      return "Very High";
    } else {
      return "Extreme";
    }
  };

  return (
    <div className={styles.TimeTableItem}>
      <div className={styles.TimeTableItem_time}>{time}</div>
      <div className={styles.TimeTableItem_icon}>
        <img src={timeData.condition.icon} alt={timeData.time} />
      </div>
      <div className={styles.TimeTableItem_condition}>
        <div>{timeData.condition.text}</div>
        <div>Feels like: {Math.round(timeData.feelslike_c)}º</div>
      </div>
      <div className={styles.TimeTableItem_wind}>
        {timeData.wind_dir} {Math.round(timeData.wind_kph)}km/h
      </div>
      <div className={styles.TimeTableItem_uv}>
        <div>UV: {timeData.uv}</div>
        <div>{mapUvIndex(timeData.uv)}</div>
      </div>
    </div>
  );
};

export default TimeTableItem;

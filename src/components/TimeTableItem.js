import styles from './TimeTableItem.module.css';

export default function TimeTableItem(props) {
    const time = `${props.hours}:00`;

    const mapUvIndex = (value) => {
        if (value < 2){
            return "Low";
        } else if (value >=2 && value <= 5){
            return "Moderate";
        } else if (value > 5 && value <= 7){
            return "High";
        } else if (value > 8 && value <= 10){
            return "Very High";
        } else {
            return "Extreme"
        }
    }

    return (
        <div className={styles.TimeTableItem}>
            <div className={styles.TimeTableItem_time}>{time}</div>
            <div className={styles.TimeTableItem_icon}>
                <img src={props.timeData.condition.icon} />
            </div>
            <div className={styles.TimeTableItem_condition}>
                <div>{props.timeData.condition.text}</div>
                <div>Feels like: {Math.round(props.timeData.feelslike_c)}º</div>
            </div>
            <div className={styles.TimeTableItem_wind}>{props.timeData.wind_dir} {Math.round(props.timeData.wind_kph)}km/h</div>
            <div className={styles.TimeTableItem_uv}>
                <div>UV: {props.timeData.uv}</div>
                <div>{mapUvIndex(props.timeData.uv)}</div>
            </div>
        </div>
    );
};
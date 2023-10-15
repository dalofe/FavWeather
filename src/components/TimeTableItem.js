import styles from './TimeTableItem.module.css';

export default function TimeTableItem(props) {
    const time = `${props.hours}:00`;

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
            <div className={styles.TimeTableItem_wind}>{props.timeData.wind_dir} {props.timeData.wind_kph}km/h</div>
            <div className={styles.TimeTableItem_uv}>UV: {props.timeData.uv}</div>
        </div>
    );
};
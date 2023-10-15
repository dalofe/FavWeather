import styles from './Today.module.css';

export default function Today(props){
    return (
        <div className={styles.Today}>
            <div className={styles.TodayGrid}>
                <div className={styles.TodayIcon}>
                    <img src={props.data.current.condition.icon} alt={props.data.current.condition.text} />
                </div>
                <div className={styles.TodayTemp}>
                    <div className={styles.TodayCurrentTemp}>
                        {Math.round(props.data.current.temp_c)}º
                    </div>
                    <div className={styles.TodayFeelsLike}>
                        Feels like {Math.round(props.data.current.feelslike_c)}º
                    </div>
                    
                </div>
                <div className={styles.TodayInfo}>
                    <div className={styles.TodayTitle}>
                        {props.data.current.condition.text}
                    </div>
                    <div className={styles.TodayMinMax}>
                        <span className={styles.TodayMinTemp}>
                            {Math.round(props.data.forecast.forecastday[0].day.mintemp_c)}º
                        </span>
                        <span> / </span>
                        <span className={styles.TodayMaxTemp}>
                            {Math.round(props.data.forecast.forecastday[0].day.maxtemp_c)}º
                        </span>
                    </div>
                    <div>
                        Wind: {props.data.current.wind_dir} {props.data.current.wind_kph}km/h
                    </div>
                    <div>
                        Humidity: {props.data.current.humidity}%
                    </div>
                </div>
            </div>
        </div>
    );
};
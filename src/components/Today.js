import styles from './Today.module.css';

export default function Today(props){
    console.log("props", props);
    return (
        <div className={styles.Today}>
            <div className={styles.TodayTitle}>
                {props.data.current.condition.text}
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img
                    className={styles.TodayIcon} 
                    src={props.data.current.condition.icon} alt={props.data.current.condition.text} />
                <div className={styles.TodayCurrentTemp}>
                    28º
                </div>
            </div>
            <div className={styles.TodayMinMax}>
                {Math.round(props.data.forecast.forecastday[0].day.maxtemp_c)}º / {Math.round(props.data.forecast.forecastday[0].day.mintemp_c)}º 
            </div>
            <div className={styles.TodayFeelsLike}>
                Feels like {props.data.current.feelslike_c}º
            </div>
        </div>
    );
};
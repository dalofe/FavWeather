import styles from './ForecastItem.module.css';

export default function ForecastItem (props) {
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(props.item.date);
    const now = new Date(Date.now());
    let dayOfTheWeek;
    const dataDay = props.item.day;

    if (now.getDay() === date.getDay()) {
        dayOfTheWeek = "Today"
    }
    else if((now.getDay() + 1) === date.getDay()) {
        dayOfTheWeek = "Tomorrow";
    } else {
        dayOfTheWeek = dayName[date.getDay()];
    }
    const dayMonth = `${date.getDate()} ${monthName[date.getMonth()]}`;

    const clickHandler = () => {
        props.setActive(props.item.date);
        props.setPerHourList(props.item)
    }

    //console.log("ForecastItem props", props);
    const ForecastItemClass = (props.active === props.item.date) ? `${styles.ForecastItem} ${styles.isActive}` : styles.ForecastItem;

    return (
        <div className={ForecastItemClass} onClick={clickHandler}>
            <div>{dayOfTheWeek}</div>
            <div>{dayMonth}</div>
            <div>
                <img src={dataDay.condition.icon} alt={dataDay.condition.text} />
            </div>
            
            {(dataDay.daily_will_it_rain === 1) && 
                <div className={styles.ForecastItemRain}>
                    <div>
                        {`${dataDay.daily_chance_of_rain}%`}
                    </div>
                    <div>
                        {`${dataDay.totalprecip_mm}mm`}
                    </div>
                </div>
            }
            <div className={styles.ForecastItemTempWrapper}>
                <span className={styles.ForecastItemMinTemp}>
                    {Math.round(dataDay.mintemp_c)}º
                </span>
                <span> / </span>
                <span className={styles.ForecastItemMaxTemp}>
                    {Math.round(dataDay.maxtemp_c)}º
                </span>
            </div>
        </div>
    );
};
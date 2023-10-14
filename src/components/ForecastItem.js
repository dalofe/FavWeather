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
    
    //<li className={styles.li}>{props.item.date} - {dataDay.condition.text} <img src={dataDay.condition.icon} alt={dataDay.condition.text} /></li>
    
    return (
        <li className={styles.li}>
            <div>{dayOfTheWeek}</div>
            <div>{dayMonth}</div>
            <img src={dataDay.condition.icon} alt={dataDay.condition.text} />
            <div>
            {dataDay.daily_will_it_rain &&
                `${dataDay.daily_chance_of_rain}% - ${dataDay.totalprecip_mm}mm`
            }
            </div>
            <div>{dataDay.maxtemp_c}º / {dataDay.mintemp_c}º</div>
        </li>
    );
};
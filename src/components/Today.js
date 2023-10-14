import styles from './Today.module.css';

export default function Today(props){
    return (
        <div className={styles.Today}>
            Today:
            <div>
                {props.data.current.condition.text} <img src={props.data.current.condition.icon} alt={props.data.current.condition.text} />
            </div>
            <div>
                {props.data.forecast.forecastday[0].day.maxtemp_c}º - {props.data.forecast.forecastday[0].day.mintemp_c}º 
            </div>
            <div>
                Feels like {props.data.current.feelslike_c}º
            </div>
        </div>
    );
};
import TimeTableItem from "./TimeTableItem";
import styles from "../css/TimeTableList.module.css";

export default function TimeTableList(props) {    
    return (
        <div className={styles.TimeTableList}>
            {props.list.hour.map( (TimeTableData, index) => {
                const date = new Date(TimeTableData.time);
                if(props.list.isToday){
                    if(date > props.localDateNow) {
                        return <TimeTableItem 
                                    key={TimeTableData.time_epoch}
                                    timeData={TimeTableData}
                                    hours={date.getHours()}
                                />
                    }
                } else {
                    if(index % 4 === 0){
                        return <TimeTableItem 
                                    key={TimeTableData.time_epoch}
                                    timeData={TimeTableData}
                                    hours={date.getHours()}
                                />
                    }
                }
            })}
        </div>
    );
};
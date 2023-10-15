import TimeTableItem from "./TimeTableItem";

export default function TimeTableList(props) {    
    const now = new Date(Date.now());

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {props.list.hour.map( (TimeTableData) => {
                const date = new Date(TimeTableData.time);
                if(date > now) {
                    return <TimeTableItem 
                                key={TimeTableData.time_epoch}
                                timeData={TimeTableData}
                                hours={date.getHours()}
                            />
                }
            })}
        </div>
    );
};
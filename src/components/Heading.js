export default function Heading(props) {
    return (
        <>
                <h1>Weather forecast by locations: {props.data && (`${props.data.location.name} (${props.data.location.country})`)}</h1>
                <div>
                    <input type="text" onChange={props.handleChange} />
                    <button onClick={props.handleClick}>Search</button>
                </div>
        </>
    );
};
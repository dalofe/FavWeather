import styles from './Search.module.css';

export default function Search(props) {
    return (
        <div className={styles.Search}>
            <input 
                type="text" 
                onChange={props.handleChange}
                className={styles.SearchInput}
            />
            <button onClick={props.handleClick}>Search</button>
        </div>
    );
};
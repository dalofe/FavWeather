import styles from '../css/Search.module.css';

export default function Search(props) {
    return (
        <div className={styles.Search}>
            <input 
                type="text" 
                onChange={props.handleChange}
                className={styles.SearchInput}
                value={props.searchedPlace}
            />
            {props.searchedPlace && <button className={styles.SearchClearButton} onClick={props.handleClick}>x</button>}
        </div>
    );
};
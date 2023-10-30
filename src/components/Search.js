import styles from "../css/Search.module.css";

export default function Search(props) {
  return (
    <form className={styles.Search}>
      <input
        type="text"
        onChange={props.handleChange}
        className={styles.SearchInput}
        value={props.searchedPlace}
        placeholder="Search city"
      />
      <button onClick={props.submitHandler} type="submit">
        Search
      </button>
      {props.searchedPlace && (
        <button
          className={styles.SearchClearButton}
          onClick={props.handleClick}
        >
          x
        </button>
      )}
    </form>
  );
}

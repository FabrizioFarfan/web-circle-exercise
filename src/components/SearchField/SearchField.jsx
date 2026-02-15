import styles from "./SearchField.module.css";

const SearchField = () => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.search}
        placeholder="Filter dishes..."
        type="text"
      />
    </div>
  );
};

export default SearchField;

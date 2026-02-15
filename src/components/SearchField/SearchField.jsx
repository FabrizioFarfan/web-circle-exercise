import { useRef } from "react";
import styles from "./SearchField.module.css";

const SearchField = ({ setSearchDish }) => {
  const inputRef = useRef(null);

  return (
    <div className={styles.wrapper}>
      <input
        ref={inputRef}
        className={styles.search}
        placeholder="Filter dishes..."
        type="text"
        onChange={() => setSearchDish(inputRef.current.value)}
      />
    </div>
  );
};

export default SearchField;

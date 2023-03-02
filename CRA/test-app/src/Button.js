import PropTypes from "prop-types";
import styles from "./Button.module.css";
import { useState, useEffect } from "react";

function Button({ text }) {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);

  console.log('항상 실행되어야 하는 코드');

  const RunOnlyOnce = () => {
    console.log('!!! 한 번만 실행하는 코드');
  };

  useEffect(RunOnlyOnce, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5)
      console.log("검색: ", keyword);
  }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search"
      />
      <p>{counter}</p>
      <button className={styles.btn} onClick={onClick}>{text}</button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button;
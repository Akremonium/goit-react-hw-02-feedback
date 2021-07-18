import styles from "./FeedbackOptions.module.scss";
import { Fragment } from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map((option) => (
      <button
        type="button"
        className={styles[option]}
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </>
);

export default FeedbackOptions;

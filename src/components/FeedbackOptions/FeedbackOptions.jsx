import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.feedback}>
        {options.map(option => {
          return (
            <li
              className={styles.feedback__item}
              key={`${option}Btn`}
              id={`${option}Btn`}
            >
              <button
                className={styles.feedback__btn}
                name={option}
                type="button"
                onClick={onLeaveFeedback}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

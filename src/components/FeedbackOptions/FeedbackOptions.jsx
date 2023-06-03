import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ labels, onLeaveFeedback }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.feedback}>
        {labels.map(label => {
          const id = nanoid(3);
          return (
            <li className={styles.feedback__item} key={`${label}Btn`} id={id}>
              <button
                className={styles.feedback__btn}
                name={label}
                type="button"
                onClick={onLeaveFeedback}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

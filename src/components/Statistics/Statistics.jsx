import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import { nanoid } from 'nanoid';

export const Statistics = ({
  labels,
  values,
  countTotalFeedback,
  percentage,
}) => {
  return (
    <div className={styles.container}>
      <ul className={styles.statistics}>
        {labels.map((label, index) => {
          const id = nanoid(3);
          return (
            <li className={styles.statistics__item} key={`${label}val`} id={id}>
              <p className={styles.statistics__value}>
                {label.charAt(0).toUpperCase() + label.slice(1)}:{' '}
                {values[index]}
              </p>
            </li>
          );
        })}
        <li className={styles.statistics__item} id="total">
          <p className={styles.statistics__value}>
            Total: {countTotalFeedback()}
          </p>
        </li>
        <li className={styles.statistics__item} id="percentage">
          <p className={styles.statistics__value}>
            Positive feedback: {percentage()}%
          </p>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  percentage: PropTypes.func.isRequired,
};

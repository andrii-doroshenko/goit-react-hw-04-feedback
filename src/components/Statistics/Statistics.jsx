import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({
  options,
  state,
  countTotalFeedback,
  percentage,
}) => {
  return (
    <div className={styles.container}>
      <ul className={styles.statistics}>
        {options.map(option => {
          // const id = shortid.generate();
          return (
            <li className={styles.statistics__item} key={option} id={option}>
              <p className={styles.statistics__value}>
                {option.charAt(0).toUpperCase() + option.slice(1)}:{' '}
                {state[option]}
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
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  percentage: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import styles from './SectionTitle.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={styles.sectionTitle}>
      <h2 className={styles.header}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

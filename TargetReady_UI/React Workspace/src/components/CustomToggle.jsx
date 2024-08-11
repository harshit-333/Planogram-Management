import PropTypes from 'prop-types';
import styles from './CustomToggle.module.css';

const CustomToggle = ({ isVendorView, onToggle }) => {
  return (
    <div className={styles['toggle-container']} onClick={onToggle}>
      <div className={styles['toggle']}>
        <div className={`${styles['toggle-option']} ${styles['option-left']} ${isVendorView ? '' : styles['active']}`}>
          Global
        </div>
        <div className={`${styles['toggle-option']} ${styles['option-right']} ${isVendorView ? styles['active'] : ''}`}>
          Own
        </div>
        <div className={`${styles['slider']} ${isVendorView ? styles['slider-right'] : styles['slider-left']}`}></div>
      </div>
    </div>
  );
};

CustomToggle.propTypes = {
  isVendorView: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default CustomToggle;

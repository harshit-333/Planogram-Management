import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './PlanogramPopup.module.css';
import SubmitButton from './SubmitButton'; 

const PlanogramPopup = ({ product, onClose, onDelete, onEdit }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles['popup-overlay']}>
      <div className={styles['popup-container']} ref={popupRef}>
        <div className={styles['close-button-container']} onClick={onClose}>
          <img src='./src/assets/close.svg' alt='Close' className={styles['close-button']} />
        </div>
        <h2 className={styles['popup-title']}>{product.name}</h2>
        <div className={styles['product-info']}>
          <div className={styles['product-info-text']}>
            <span className={styles['info-label']}>Height: {product.height}</span>
            <span className={styles['info-label']}>Width: {product.breadth}</span>
          </div>
        </div>
        <div className={styles['button-container']}>
          <SubmitButton
            text="Edit"
            icon='./src/assets/edit.svg'
            onClick={onEdit}
            buttonColor="#228822"
            arrowColor="#7B7979"
            height="30px"
            width="80px"
          />
          <SubmitButton
            text="Delete"
            icon='./src/assets/trash.svg'
            onClick={onDelete}
            width="75px"
            height="30px"
            buttonColor='#FF0303'
            arrowColor='#7B7979'
          />
        </div>
      </div>
    </div>
  );
};

PlanogramPopup.propTypes = {
  product: PropTypes.shape({
    productId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    breadth: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default PlanogramPopup;

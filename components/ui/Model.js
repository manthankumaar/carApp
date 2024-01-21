'use client';

import Image from 'next/image';
import styles from './modal.module.css';

export const Modal = ({
  isVisible,
  width = 'w-[440px]',
  children,
  onClose,
  title,
  hide,
}) => {
  if (hide || !isVisible) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`${styles.modalBackdrop}`} onClick={handleBackdropClick}>
      <div className={`${styles.modalContent} ${width}`}>
        <div className={`${styles.modalHeader} ${styles.borderLine}`}>
          <h1 className={`${styles.modalTitle}`}>{title}</h1>
          <button className={`${styles.closeButton}`} onClick={onClose}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
            >
              <path
                d='M1.35138 1.10742L8.17722 7.8807M8.17722 7.8807L1.35138 14.654M8.17722 7.8807L15.0031 14.654M8.17722 7.8807L15.0031 1.10742'
                stroke='black'
                stroke-opacity='0.28'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

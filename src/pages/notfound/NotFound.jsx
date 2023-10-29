import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.description}>The page you're looking for doesn't exist or has been moved.</p>
    </div>
  );
}

export default NotFound;

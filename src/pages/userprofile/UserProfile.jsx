import React from 'react';
import styles from './userprofile.module.css';

const UserProfile = () => {
  return (
    <div className={styles.container}>
        <div className={styles.section}>
        <h2>User Information</h2>
        <div className={styles.infoTable}>
          <div className={styles.infoRow}>
            <div className={styles.infoTitle}>Name</div>
            <div className={styles.infoInput}>
              {/* Input field for editing name */}
              <input type="text" placeholder="User's Name" />
            </div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoTitle}>Email Address</div>
            <div className={styles.infoInput}>
              {/* Input field for editing email address */}
              <input type="email" placeholder="user@example.com" />
            </div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoTitle}>Password</div>
            <div className={styles.infoInput}>
              {/* Input field for editing password */}
              <input type="password" placeholder="********" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <h2>Payment Information</h2>
        <div className={styles.infoTable}>
          <div className={styles.infoRow}>
            <div className={styles.infoTitle}>Payment</div>
            <div className={styles.infoInput}>
              {/* Input field for editing card number */}
              <input type="text" placeholder="**** **** **** 1234" />
            </div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoTitle}>Expiration</div>
            <div className={styles.infoInput}>
              {/* Input field for editing card expiration date */}
              <input type="text" placeholder="MM/YY" />
            </div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoTitle}>CCV</div>
            <div className={styles.infoInput}>
              {/* Input field for editing card CCV */}
              <input type="text" placeholder="123" />
            </div>
          </div>
        </div>
      </div>
      <button className={styles.submitButton}>Submit</button>
    </div>
  );
};

export default UserProfile;

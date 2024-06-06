import React from 'react';
import styles from '../../assets/css/admin.module.css';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';

export default function AdminHome() {


  return (
   <>
      <div className={styles.mainTitle}>
        <h3>DASHBOARD</h3>
      </div>

      <div className={styles.mainCards}>
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className={styles.cardIcon} />
          </div>
          <h1>300</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className={styles.cardIcon} />
          </div>
          <h1>12</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className={styles.cardIcon} />
          </div>
          <h1>33</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <h3>ALERTS</h3>
            <BsFillBellFill className={styles.cardIcon} />
          </div>
          <h1>42</h1>
        </div>
      </div>

    
      </>
  );
}
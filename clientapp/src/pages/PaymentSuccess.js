
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './css/notfound.module.css'; 
import { removingCart } from '../redux/features/cartSlice';
import { useDispatch } from 'react-redux';
const PaymentSuccess = () => {

  const dispatch = useDispatch()


  useEffect(()=>{

    if(localStorage.getItem("cart")){
      localStorage.setItem("cart",JSON.stringify({}))
      dispatch(removingCart())
    }
  })
  return (
    <section className={styles.page404}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.colSm} ${styles.colSm12}`}>
            <div className={`${styles.colSm} ${styles.colSm10} ${styles.colSmOffset1} ${styles.textCenter}`}>
              <div className={styles.paymetSucces}>
                <h1 className={styles.textCenter}>Paymet Success</h1>
              </div>
              <div className={styles.contentBox404}>
                <h3 className={styles.h2}>Congrats</h3>
                <p>Your Payment Completed Successfully!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentSuccess;

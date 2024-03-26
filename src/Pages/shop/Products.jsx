import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import styles from './Shop.module.css'
export default function Products({curElem}) {
    const {id, name, image, price, duration, location, rating } = curElem;
   console.log(curElem);
  return (
    <div>
        {/* /////////////////////////////////////////chosse products ////////////////////////////////// */}
      
   
   
   
      <div className={styles.chooseProductSection}>
      
      <div className={styles.productGrid}>
       
          <div key={id} className={styles.productCard}>
            <img src={image} alt={name} />
            <div className={styles.productDetails}>
              <h3>{name}</h3>
              <div className={styles.ratingAndPrice}>
              <div className={styles.rating}>
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={index < rating ? styles.filled : ''}>
                    ★
                  </span>
                ))}
              </div>
              <p className={styles.price}>{price}</p>
              </div>
             <ul type="none" className={styles.cardDetails}>
                <li><p>Course Duration <span id={styles.arrowIcon} ><MdOutlineKeyboardDoubleArrowRight/></span></p> <p className={styles.duration}>{duration}</p></li>
             </ul>
             
              <p className={styles.location}>{location}</p>
              <div className={styles.buttons}>
                <button className={styles.bookNow}>Book Now</button>
                <button className={styles.more}>More</button>
              </div>
            </div>
          </div>
       
      </div>
    </div>
    </div>
  )
}

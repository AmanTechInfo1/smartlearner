import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import styles from "./Shop.module.css";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../components/context/CartContext"; // Import the useCart hook

export default function Products({ curElem }) {
  const {
    id,
    name,
    image,
    price,
    duration,
    postcode,
    rating,
    experience,
    Transmission,
    category,
  } = curElem;

  const { addToCart } = useCartContext(); // Use the useCart hook to access addToCart function
  const quantity = 1;
  const inCart = false;
  return (
    <div>
      <div className={styles.chooseProductSection}>
        <div className={styles.productGrid}>
          <div key={id} className={styles.productCard}>
            <img src={image} alt={name} />
            <div className={styles.productDetails}>
              <h3>{name}</h3>
              <div className={styles.ratingAndPrice}>
                <div className={styles.rating}>
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={index < rating ? styles.filled : ""}>
                      <FaStar />
                    </span>
                  ))}
                </div>
                <p className={styles.price}>${price}</p>
              </div>
              <ul type="none" className={styles.cardDetails}>
                <li>
                  <p>
                    Course Duration{" "}
                    <span id={styles.arrowIcon}>
                      {" "}
                      <FaAngleDoubleRight id={styles.productmenuArrowIcon} />
                    </span>
                  </p>{" "}
                  <p className={styles.duration}>{duration}</p>
                </li>
                <li>
                  <p>
                    Experience{" "}
                    <span id={styles.arrowIcon}>
                      {" "}
                      <FaAngleDoubleRight id={styles.productmenuArrowIcon} />
                    </span>
                  </p>{" "}
                  <p className={styles.duration}>{experience}</p>
                </li>
                <li>
                  <p>
                    Transmission{" "}
                    <span id={styles.arrowIcon}>
                      {" "}
                      <FaAngleDoubleRight id={styles.productmenuArrowIcon} />
                    </span>
                  </p>{" "}
                  <p className={styles.duration}>{Transmission}</p>
                </li>
              </ul>
              <div className={styles.postCodeBlock}>
                <p className={styles.postcodes}>Postcodes Included</p>
                <ul type="none" className={styles.postcodeList}>
                  {postcode.map((postcodeItem, index) => (
                    <li key={index}>{postcodeItem}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.buttons}>
                <button
                  className={styles.bookNow}
                  disabled={inCart}
                  onClick={() => addToCart(curElem, quantity)}>
                  {inCart === true ? (
                    <span>In Cart </span>
                  ) : (
                    <span>Book Now</span>
                  )}
                </button>
                <NavLink to={`/product/${id}`}>
                  <button className={styles.more}>More Info</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

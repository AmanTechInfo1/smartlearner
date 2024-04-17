import React from "react";
import { useState } from "react";
import styles from "./Shop.module.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { products } from "../../assets/data/Products";
import { useCartContext} from "../../component/Context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const {
    id: details,
    name,
    image,
    price,
    stock,
    duration,
    postcode,
    areaIncluded,
    experience,
    Transmission,
  } = product;
const inCart = false;
  const { addToCart } = useCartContext(); // Use the useCart hook to access addToCart function

  const imageUrl = `http://localhost:5173/product/src/assets/images/${image}`;
  const modifiedImageUrl = imageUrl.replace("/product/src/assets/images", "");

 
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
   quantity < stock ? setQuantity(quantity + 1): setQuantity(stock);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
     quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
    }
  };

  return (
    <div>
      <div className={styles.ProductDetailsPage}>
        <section className={styles.productDetailsPageSection}>
          <div className={styles.productDetailsPageImage}>
            <img src={modifiedImageUrl} alt={name} />
          </div>
          <div className={styles.productDetailsPageDetails}>
            <div className={styles.productDetailsPagetNamePrice}>
              <h1>{name}</h1>
              <p>${price}</p>
            </div>
            <div className={styles.productDetailsPageCard}>
              <ul type="none" className={styles.productDetailsPageCardMenu}>
                <li>
                  <p>
                    Course Duration{" "}
                    <span id={styles.arrowIcon}>
                      <FaAngleDoubleRight id={styles.productmenuArrowIcon} />
                    </span>
                  </p>{" "}
                  <p className={styles.cardMenu}>{duration}</p>
                </li>
                <li>
                  <p>
                    Experience{" "}
                    <span id={styles.arrowIcon}>
                      <FaAngleDoubleRight id={styles.productmenuArrowIcon} />
                    </span>
                  </p>{" "}
                  <p className={styles.cardMenu}>{experience}</p>
                </li>
                <li>
                  <p>
                    Transmission{" "}
                    <span id={styles.arrowIcon}>
                      <FaAngleDoubleRight id={styles.productmenuArrowIcon} />
                    </span>
                  </p>{" "}
                  <p className={styles.cardMenu}>{Transmission}</p>
                </li>
              </ul>
            </div>
            <div className={styles.postCodeBlock}>
              <p className={styles.postcodes}>Postcodes Included</p>
              <ul type="none" className={styles.postcodeList}>
                {postcode.map((postcodeItem, index) => (
                  <li key={index}>{postcodeItem}</li>
                ))}
              </ul>
            </div>
            <div className={styles.areaIncludedBlock}>
              <p className={styles.areaIncluded}>Areas Included</p>
              <ul type="none" className={styles.areaIncludedList}>
                {areaIncluded.map((areaIncludedItem, index) => (
                  <li key={index}>{areaIncludedItem}</li>
                ))}
              </ul>
            </div>

            <div className={styles.productBookButton}>
              <div className={styles.quantityControl}>
                <button
                  onClick={handleDecrease}
                  className={styles.decreaseButton}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={handleIncrease}
                  className={styles.increaseButton}
                >
                  +
                </button>
              </div>
              <div className={styles.buttons}>
               
                  <button
                    className={styles.bookNow}
                    onClick={() => addToCart(product, quantity)}
                  >
                     {inCart === true ? (<span>In Cart </span>) : (<span>Book Now</span>)}</button>
                 
               
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

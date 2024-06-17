import React, { useState } from "react";
import styles from "./Cart.module.css";
import cartIcon from '../../../assets/images/cartIcon1.png'
import carImg from '../../../assets/images/car-red.png'
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, service: "1 HOUR: Automatic", price: 34, quantity: 1 },
  ]);

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  };

  const subtotal = calculateSubtotal();
  const serviceCharge = subtotal * 0.02;
  const total = subtotal + serviceCharge;

  return (
    <div className={styles.cartPage}>
      <div id={styles.fontAntonio}>
        <div className="d-flex justify-content-center align-items-center gap-4 text-center mb-4 mt-2" id={styles.cartFrontHeading}>
          <h1 className="display-4 font-weight-bold">CART</h1>
          <img
            src={cartIcon}
            alt="cart icon"
            className={styles.carIconImg}
          />
        </div>
        <div className="d-flex justify-content-left mb-4" id={styles.carImg}>
          <img
            src={carImg}
            alt="car image"
            className={styles.cartIconCarImg}
          />
        </div>
        <div
          className=" border-top border-bottom border-danger "
          id={styles.cartTable}
        >
          <div id={styles.cartTableDetailsDiv}>
            <div className="font-weight-bold" id={styles.cartTableDetails}>
              SERVICE
            </div>
            <div id={styles.cartTableDetailsd}>{cartItems.service}</div>
          </div>

          <hr></hr>
          <div className="text-center" id={styles.cartTableDetailsDiv}>
            <div className="font-weight-bold" id={styles.cartTableDetails}>
              PRICE
            </div>
            <div id={styles.cartTableDetailsd}>{cartItems.price}</div>
          </div>
          <div className="text-center" id={styles.cartTableDetailsDiv}>
            <div className="font-weight-bold" id={styles.cartTableDetails}>
              QUANTITY
            </div>
            <div id={styles.cartTableBtn}>
              {" "}
              <div className={styles.quantityControl}>
                <button
                  onClick={handleDecrease}
                  className={styles.decreaseButton}
                >
                  -
                </button>
                <span>{cartItems.quantity}</span>
                <button
                  onClick={handleIncrease}
                  className={styles.increaseButton}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="text-center" id={styles.cartTableDetailsDiv}>
            <div className="font-weight-bold" id={styles.cartTableDetails}>
              SUBTOTAL
            </div>
            <div id={styles.cartTableDetailsd}>{cartItems.price * cartItems.quantity}</div>
          </div>
        </div>
        <div id={styles.couponCart}>
          <div className={styles.cartCouponInputs}>
            <input type="text" placeholder="Enter Coupon" />
            <button className="btn btn-secondary">Apply Coupon</button>
          </div>
          <hr></hr>
          <div className={styles.basketDiv}>
            <div className={styles.basketDetailsCart}>
              <div className={styles.basketHeadingTitles}>
                <h2>BASKET TOTAL</h2>
                <div className={styles.basketHeadingTitle}>
                  <span>Subtotal:</span>
                  <span>2% ONLINE SERVICE CHARGE:</span>
                  <span>Total:</span>
                </div>
              </div>
              <hr></hr>
              <div className={styles.basketHeadingTitle}>
              <span>£{subtotal.toFixed(2)}</span>
                <span>£{serviceCharge.toFixed(2)}</span>
                <span>£{total.toFixed(2)}</span>
              </div>
            </div>

            <button className="btn btn-secondary ">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

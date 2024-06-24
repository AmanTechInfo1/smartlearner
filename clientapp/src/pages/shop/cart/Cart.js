import React from "react";
import styles from "./Cart.module.css";
import cartIcon from "../../../assets/images/cartIcon1.png";
import carImg from "../../../assets/images/car-red.png";
import { useDispatch, useSelector } from "react-redux";
import { getDecreaseCart, getIncreaseCart, emptyCart } from "../../../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myCart = useSelector((state) => state.cart.cart);

  const handleIncrease = (id, qty) => {
    dispatch(getIncreaseCart(id, qty));
  };

  const handleDecrease = (id, qty) => {
    dispatch(getDecreaseCart(id, qty));
  };

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  const calculateSubtotal = () => {
    return myCart ? myCart.length>0 ? myCart.reduce((acc, item) => acc + item.price * item.count, 0) : 0 : 0;
  };

  const subtotal = calculateSubtotal();
  const serviceCharge = subtotal * 0.02;
  const total = subtotal + serviceCharge;

  return (
    <div className={styles.cartPage}>
      <div id={styles.fontAntonio}>
        <div
          className="d-flex justify-content-center align-items-center gap-4 text-center mb-4 mt-2"
          id={styles.cartFrontHeading}
        >
          <h1 className="display-4 font-weight-bold">CART</h1>
          <img src={cartIcon} alt="cart icon" className={styles.carIconImg} />
        </div>
        <div className="d-flex justify-content-left mb-4" id={styles.carImg}>
          <marquee direction="right">
            <img src={carImg} alt="car image" className={styles.cartIconCarImg} />
          </marquee>
        </div>
        {myCart && myCart.length === 0 ? (
          <div className="text-center">
            <h2>Your cart is empty</h2>
            <button
              className="btn btn-primary mt-4"
              onClick={() => navigate("/shop")}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
          <div className={styles.cartoverflow}>
            <div
              
              id={styles.cartTable}
            >
              
              <div id={styles.cartTableDetailsDiv}>
                <div className="font-weight-bold" id={styles.cartTableDetails}>
                  SERVICE
                </div>
                {myCart && myCart.map((itm) => (
                  <div id={styles.cartTableDetailsd} key={itm.id}>{itm.service}</div>
                ))}
              </div>

              <hr></hr>
              <div className="text-center" id={styles.cartTableDetailsDiv}>
                <div className="font-weight-bold" id={styles.cartTableDetails}>
                  PRICE
                </div>
                {myCart && myCart.map((itm) => (
                  <div id={styles.cartTableDetailsd} key={itm.id}>{itm.price}</div>
                ))}
              </div>
              <div className="text-center" id={styles.cartTableDetailsDiv}>
                <div className="font-weight-bold" id={styles.cartTableDetails}>
                  QUANTITY
                </div>
                {myCart && myCart.map((itm) => (
                  <div id={styles.cartTableBtn} key={itm.id}>
                    <div className={styles.quantityControl}>
                      <button
                        onClick={() => handleDecrease(itm.id, 1)}
                        className={styles.decreaseButton}
                      >
                        -
                      </button>
                      <span>{itm.count}</span>
                      <button
                        onClick={() => handleIncrease(itm.id, 1)}
                        className={styles.increaseButton}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center" id={styles.cartTableDetailsDiv}>
                <div className="font-weight-bold" id={styles.cartTableDetails}>
                  SUBTOTAL
                </div>
                {myCart && myCart.map((itm) => (
                  <div id={styles.cartTableDetailsd} key={itm.id}>
                    {itm.price * itm.count}
                  </div>
                ))}
              </div>
            </div>
            </div>
            <div id={styles.couponCart}>
              <div className={styles.cartCouponInputs}>
                {/* <input type="text" placeholder="Enter Coupon" />
                <button className="btn btn-secondary">Apply Coupon</button> */}
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
                <button
                  className="btn btn-secondary"
                  onClick={() => navigate("/checkout")}
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
            <div className="text-center mt-4">
              <button
                className="btn btn-danger"
                onClick={handleEmptyCart}
              >
                EMPTY CART
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

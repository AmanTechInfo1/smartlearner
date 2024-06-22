import React, { useState } from "react";
import styles from "./Cart.module.css";
import cartIcon from '../../../assets/images/cartIcon1.png'
import carImg from '../../../assets/images/car-red.png'
import { useDispatch, useSelector } from 'react-redux';
import { getDecreaseCart, getIncreaseCart } from "../../../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, service: "1 HOUR: Automatic", price: 34, quantity: 1 },
    { id: 2, service: "1 HOUR: Automatic", price: 34, quantity: 1 },
  ]);


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const myCart = useSelector((state) => {

    return state.cart.cart

  })
  // const addToCart = (prodcu) => {
  //   dispatch(getAddToCart({id:_id,count:1}))
  // }

  const handleIncrease = (id, qty) => {
    dispatch(getIncreaseCart(id, qty))
  };

  const handleDecrease = (id, qty) => {
    dispatch(getDecreaseCart(id, qty))
  };

  // const handleIncrease = (id,qty) => {

  //   dispatch(getIncreaseCart(id,qty))
  //   // setCartItems((prevItems) =>
  //   //   prevItems.map((item) =>
  //   //     item.id === id ? { ...item, quantity: item.quantity + qty } : item
  //   //   )
  //   // );
  // };

  // const handleDecrease = (id,qty) => {

  //   dispatch(getDecreaseCart(id,qty))
  //   // setCartItems((prevItems) =>
  //   //   prevItems.map((item) =>
  //   //     item.id === id && item.quantity > 1
  //   //       ? { ...item, quantity: item.quantity - qty }
  //   //       : item
  //   //   )
  //   // );
  // };

  const calculateSubtotal = () => {

    console.log(myCart, "myCartmyCartmyCart")


    return myCart ? myCart != undefined ? myCart.length > 0 ? myCart.reduce((acc, item) => acc + item.price * item.count, 0) : 0 : 0 : 0;
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
          <marquee direction="right">
            <img
              src={carImg}
              alt="car image"
              className={styles.cartIconCarImg}
            />
          </marquee>
        </div>
        <div
          className=" border-top border-bottom border-danger "
          id={styles.cartTable}
        >
          <div id={styles.cartTableDetailsDiv}>
            <div className="font-weight-bold" id={styles.cartTableDetails}>
              SERVICE
            </div>

            {
              myCart && myCart.map((itm) => {
                return <div id={styles.cartTableDetailsd}>{itm.service}</div>
              })
            }

          </div>

          <hr></hr>
          <div className="text-center" id={styles.cartTableDetailsDiv}>
            <div className="font-weight-bold" id={styles.cartTableDetails}>
              PRICE
            </div>
            {
              myCart && myCart.map((itm) => {
                return <div id={styles.cartTableDetailsd}>{itm.price}</div>
              })
            }
          </div>
          <div className="text-center" id={styles.cartTableDetailsDiv}>
            <div className="font-weight-bold" id={styles.cartTableDetails}>
              QUANTITY
            </div>

            {
              myCart && myCart.map((itm) => {
                return <>
                  <div id={styles.cartTableBtn}>
                    {" "}
                    <div className={styles.quantityControl}>
                      <button
                        onClick={() => {
                          handleDecrease(itm.id, 1)
                        }}
                        className={styles.decreaseButton}
                      >
                        -
                      </button>
                      <span>{itm.count}</span>
                      <button
                        onClick={() => {
                          handleIncrease(itm.id, 1)
                        }}
                        className={styles.increaseButton}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </>
              })
            }

          </div>
          <div className="text-center" id={styles.cartTableDetailsDiv}>
            <div className="font-weight-bold" id={styles.cartTableDetails}>
              SUBTOTAL
            </div>

            {
              myCart && myCart.map((itm) => {
                return <div id={styles.cartTableDetailsd}>{itm.price * itm.count}</div>
              })
            }

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

            {
              myCart && myCart.length > 0 && <button className="btn btn-secondary" onClick={() => {
                navigate("/checkout")
              }}>PROCEED TO CHECKOUT</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React, { useEffect } from "react";
import styles from "./Cart.module.css";
import cartIcon from "../../../assets/images/cartIcon1.png";
import carImg from "../../../assets/images/car-red.png";
import { useDispatch, useSelector } from "react-redux";
import { getDecreaseCart, getIncreaseCart, emptyCart, getMyOrders } from "../../../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myCart = useSelector((state) => state.cart.myOrders);


  useEffect(()=>{
    
    dispatch(getMyOrders())
  },[""])


  return (
    <div className={styles.cartPage}>
      <div id={styles.fontAntonio}>
        <div
          className="d-flex justify-content-center align-items-center gap-4 text-center mb-4 mt-2"
          id={styles.cartFrontHeading}
        >
          <h1 className="display-4 font-weight-bold">ORDERS</h1>
          <img src={cartIcon} alt="cart icon" className={styles.carIconImg} />
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
            <div
              className="border-top border-bottom border-danger"
              id={styles.cartTable}
            >
              <div id={styles.cartTableDetailsDiv}>
                <div className="font-weight-bold" id={styles.cartTableDetails}>
                  SERVICE
                </div>
                {myCart && myCart.map((itm) => (
                  <div id={styles.cartTableDetailsd} key={itm.id}>{itm.firstName}</div>
                ))}
              </div>


              <hr></hr>
              <div className="text-center" id={styles.cartTableDetailsDiv}>
                <div className="font-weight-bold" id={styles.cartTableDetails}>
                  PRICE
                </div>
                {myCart && myCart.map((itm) => (
                  <div id={styles.cartTableDetailsd} key={itm.id}>{itm.orderNo}</div>
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
            
          </>
        )}
      </div>
    </div>
  );
};

export default MyOrders;

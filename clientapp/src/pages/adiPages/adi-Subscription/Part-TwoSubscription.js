import React, { useEffect, useState } from "react";
import "../../../pages/Theory-Subscription/TheorySubscription.css";
// import subsIcon from "../../../assets/images/subsIconSvg.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPlans,
  createPayment,
  createUserSubscription,
  checkTrialEligibility,
  fetchUserSubscriptions,
  pdiApplyCouponCode,
} from "../../../redux/features/subscriptionSlice";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import paypalLogo from "../../../assets/images/paypalLogos.png";
import cartIcon from "../../../assets/images/cartIcon1.png";

import { toast } from "react-hot-toast";
import styles from "../../../pages/shop/cart/Cart.module.css";

const PartTwoSubscription = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id; // Added optional chaining for safety
  const { plans, loading, error } = useSelector((state) => state.subscription);
  const [couponCode, setCouponCode] = useState("");
  const navigate = useNavigate();

  // Fetch subscription plans when component mounts
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserSubscriptions(userId));
    }
    dispatch(fetchPlans());
  }, [dispatch, userId]); // Added userId as a dependency

  const handleCouponSubmit = async () => {
    try {
      await dispatch(pdiApplyCouponCode({ userId, couponCode })).unwrap();
      navigate("/adi-part-one");
    } catch (error) {
      console.error("Error applying coupon:", error);
    }
  };

  const handleCreateTrialSubscription = async (plan) => {
    try {
      const trialEligible = await dispatch(
        checkTrialEligibility(userId)
      ).unwrap();

      if (!trialEligible) {
        return;
      }

      const subscriptionData = {
        userId: userId,
        subscriptionId: plan._id,
        isTrial: true,
      };

      const subscription = await dispatch(
        createUserSubscription(subscriptionData)
      ).unwrap();
      console.log("Trial subscription created successfully:", subscription);
    } catch (error) {
      console.error("Error creating trial subscription:", error);
    }
  };

  const handleCreateSubscription = async (plan) => {
    try {
      const order = await dispatch(createPayment(plan._id)).unwrap();
      console.log("Order received from payment creation:", order);
      if (order && order.id) {
        return order.id;
      } else {
        throw new Error("Order ID not received");
      }
    } catch (error) {
      console.error("Error during subscription creation:", error);
      throw error;
    }
  };

  const handleApprovePayment = async (plan, actions) => {
    try {
      const order = await actions.order.capture();
      console.log("Order captured:", order);
      if (!order || !order.id) {
        console.error("No order ID received");
        return;
      }

      const subscriptionData = {
        userId: userId,
        subscriptionId: plan._id,
        orderId: order.id,
        isTrial: false,
      };

      await dispatch(createUserSubscription(subscriptionData)).unwrap();
      console.log("User subscription created successfully.");
      navigate("/adi-part-2");
      toast.success("subscription added");
    } catch (error) {
      console.error("Error during order approval:", error);
    }
  };

  // Separate plans into trial and paid
  //   const trialPlans = plans.filter(plan => plan.planCategory === 'free-trial');
  const paidPlans = plans.filter(
    (plan) => plan.planCategory === "pdi-part-two packages"
  );

  return (
    <div className="subscription-cardBox">
      <div className={styles.cartPage}>
        <div className={styles.cartContainer}>
          <div className={styles.cartheading}>
            <h2>CHECKOUT</h2>
            <img src={cartIcon} alt="cart icon" className={styles.carIconImg} />
          </div>

          <div className={styles.cartContentContainer}>
            <div className={styles.cartItemsContainer}>
              <table className={styles.cartTable}>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {loading && (
                    <p
                      style={{
                        color: "white",
                        fontSize: "1.2rem",
                        textAlign: "center",
                        width: "100%",
                      }}>
                      Loading plans...
                    </p>
                  )}

                  {paidPlans.map((plan, index) => (
                    <tr className={styles.cartRow}>
                      <td>{plan.planname}</td>
                      <td>£ {plan.price}</td>
                      <td> 1 </td>
                      <td>£ {plan.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {paidPlans.map((plan, index) => (
              <div className={styles.cartBtnsContainer}>
                <div>
                  <div className={styles.basketHeadingTitles}>
                    <h2>BASKET TOTAL</h2>
                    <div className={styles.basketHeadingTitle}>
                      <p>
                        <span>Subtotal:</span>
                        <span>£ {plan.price}</span>
                      </p>
                      <p>
                        <span>ONLINE SERVICE CHARGE:</span> <span>£ 0%</span>
                      </p>
                      <p>
                        <span>Total:</span> <span>{plan.price}</span>
                      </p>
                      <div>
                        <img src={paypalLogo} alt="paypal" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.basketHeadingTitle}></div>
                </div>

                <div>
                  <PayPalButtons
                    createOrder={(data, actions) =>
                      handleCreateSubscription(plan)
                    }
                    onApprove={(data, actions) =>
                      handleApprovePayment(plan, actions)
                    }
                    fundingSource="paypal"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartTwoSubscription;

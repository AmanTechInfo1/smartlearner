import React, { useEffect, useState } from "react";
import "../../../pages/Theory-Subscription/TheorySubscription.css";
import paypalLogo from "../../../assets/images/paypalLogos.png";
import cartIcon from "../../../assets/images/cartIcon1.png";
import httpHandler from "../../../utils/httpHandler";
import { toast } from "react-hot-toast";
import styles from "../../../pages/shop/cart/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPlans,
  createPayment,
  createUserSubscription,
  checkTrialEligibility,
  pdiApplyCouponCode,
  fetchUserSubscriptions,
  pdiPartOneApplyCouponCode,

} from "../../../redux/features/subscriptionSlice";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";

const PartOneSubscription = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id; // Added optional chaining for safety
  const { plans, loading, error } = useSelector((state) => state.subscription);
  const subsdiscountedPrice = useSelector(
    (state) => state.subscription.subsdiscountedPrice
  );
  const [couponCode, setCouponCode] = useState("");

  

  const navigate = useNavigate();

  // Fetch subscription plans when component mounts
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserSubscriptions(userId));
    }
    dispatch(fetchPlans());
  }, [dispatch, userId]);

 

  // const handleCreateTrialSubscription = async (plan) => {
  //   try {
  //     const trialEligible = await dispatch(checkTrialEligibility(userId)).unwrap();

  //     if (!trialEligible) {

  //       return;
  //     }

  //     const subscriptionData = {
  //       userId: userId,
  //       subscriptionId: plan._id,
  //       isTrial: true,
  //     };

  //     const subscription = await dispatch(createUserSubscription(subscriptionData)).unwrap();
  //     console.log("Trial subscription created successfully:", subscription);
  //   } catch (error) {
  //     console.error("Error creating trial subscription:", error);
  //   }
  // };

  // ////////////////////////////////////////////

  const paidPlans = plans.filter(
    (plan) => plan.planCategory === "pdi-part-one packages"
  );
  const ogPlan = paidPlans[0];

  const planId = paidPlans[0]?._id;


  const handleCouponSubmit = async () => {
    try {
      await dispatch(
        pdiPartOneApplyCouponCode({ userId, planId, couponCode })
      ).unwrap();
     
    } catch (error) {
      console.error("Error applying coupon:", error);
    }
  };



  // /////////////////////////////////

  const handleCreateSubscription = async (ogPlan, subsdiscountedPrice) => {
    const priceToUse = subsdiscountedPrice || ogPlan.price; // Use the updated price directly
    console.log("Price to use for payment:", subsdiscountedPrice);

    const subscriptionData = {
      subscriptionId: ogPlan._id,
      price: priceToUse,
    };

    try {
      const order = await dispatch(createPayment(subscriptionData)).unwrap();
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

  const handleApprovePayment = async (ogPlan, actions) => {
    try {
      const order = await actions.order.capture();
      console.log("Order captured:", order);
      if (!order || !order.id) {
        console.error("No order ID received");
        return;
      }

      const subscriptionData = {
        userId: userId,
        subscriptionId: ogPlan._id,
        orderId: order.id,
        isTrial: false,
      };

      await dispatch(createUserSubscription(subscriptionData)).unwrap();
      console.log("User subscription created successfully.");
      navigate("/part-one-theory-questions");
      toast.success("subscription added");
    } catch (error) {
      console.error("Error during order approval:", error);
    }
  };

  // Separate plans into trial and paid
  // const trialPlans = plans.filter(plan => plan.planCategory === 'free-trial');

  return (
    <div className="subscription-cardBox">
      <div className={styles.cartPage}>
        <div className={styles.cartContainer}>
          <div className={styles.cartheading}>
            <h2>CHECKOUT</h2>
            <img src={cartIcon} alt="cart icon" className={styles.carIconImg} />
          </div>
          <div className="coupon-section">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter Coupon Code"
              className="coupon-input"
            />
            <button onClick={handleCouponSubmit} className="coupon-button">
              Apply Coupon
            </button>
          </div>
          <p style={{ textAlign: "center", color: "white" }}>
            Apply Coupon Code To Get Free Access Of PDI Portal
          </p>

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
                      }}
                    >
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
            <div className={styles.cartBtnsContainer}>
              {paidPlans.map((plan, index) => (
                <div>
                  <div>
                    <div className={styles.basketHeadingTitles}>
                      <h2>BASKET TOTAL</h2>
                     
                    
                      <div className={styles.basketHeadingTitle}>
                        <p>
                          <span>Subtotal:</span>
                          <span>
                            £{" "}
                            {subsdiscountedPrice
                              ? subsdiscountedPrice
                              : plan.price.toFixed(2)}
                          </span>
                        </p>
                        <p>
                          <span>ONLINE SERVICE CHARGE:</span> <span>£ 0%</span>
                        </p>
                        <p>
                          <span>Total:</span>{" "}
                          <span>
                            {subsdiscountedPrice
                              ? subsdiscountedPrice
                              : plan.price.toFixed(2)}
                          </span>
                        </p>
                        <div>
                          <img src={paypalLogo} alt="paypal" />
                        </div>
                      </div>
                    </div>
                    <div className={styles.basketHeadingTitle}></div>
                  </div>
                </div>
              ))}
              <div>
                {" "}
                {ogPlan && !subsdiscountedPrice ? (
                  <PayPalButtons
                    createOrder={(data, actions) =>
                      handleCreateSubscription(ogPlan, subsdiscountedPrice)
                    }
                    onApprove={(data, actions) =>
                      handleApprovePayment(ogPlan, actions)
                    }
                    fundingSource="paypal"
                    disabled={subsdiscountedPrice}
                  />
                ) : (
                  <></>
                )}
              </div>

              {ogPlan && subsdiscountedPrice ? (
                <PayPalButtons
                  createOrder={(data, actions) =>
                    handleCreateSubscription(ogPlan, subsdiscountedPrice)
                  }
                  onApprove={(data, actions) =>
                    handleApprovePayment(ogPlan, actions)
                  }
                  fundingSource="paypal"
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartOneSubscription;

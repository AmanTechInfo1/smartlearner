import React, { useEffect } from "react";
import "../../../pages/Theory-Subscription/TheorySubscription.css";
import subsIcon from "../../../assets/images/subsIconSvg.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPlans,
  createPayment,
  createUserSubscription,
  checkTrialEligibility,
} from "../../../redux/features/subscriptionSlice";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PartOneSubscription = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id; // Added optional chaining for safety
  const { plans, loading, error } = useSelector((state) => state.subscription);

  // Fetch subscription plans when component mounts
  useEffect(() => {
    dispatch(fetchPlans());
  }, [dispatch]);

  const handleCreateTrialSubscription = async (plan) => {
    try {
      // Check if the user is eligible for a trial
      const trialEligible = await dispatch(checkTrialEligibility(userId)).unwrap();

      if (!trialEligible) {
        alert("You are not eligible for a free trial.");
        return;
      }

      // Create the user subscription for the trial
      const subscriptionData = {
        userId: userId,
        subscriptionId: plan._id,
        isTrial: true, // Mark as a trial subscription
      };

      const subscription = await dispatch(createUserSubscription(subscriptionData)).unwrap();
      console.log("Trial subscription created successfully:", subscription);
    } catch (error) {
      console.error("Error creating trial subscription:", error);
    }
  };

  const handleCreateSubscription = async (plan) => {
    try {
      // Proceed with payment creation for regular subscription
      const order = await dispatch(createPayment(plan._id)).unwrap();
      console.log("Order received from payment creation:", order);
      if (order && order.id) {
        return order.id; // Return order ID for PayPal to use
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
      console.log("Order captured successfully:", order);

      const subscriptionData = {
        userId: userId,
        subscriptionId: plan._id,
        orderId: order.id,
        isTrial: false, // Not a trial
      };

      // First, create the user subscription
      await dispatch(createUserSubscription(subscriptionData)).unwrap();
      console.log("User subscription created successfully.");
    } catch (error) {
      console.error("Error during order approval:", error);
    }
  };

  return (
    <div className="subscription-cardBox">
      <div className="cardBody">
        <h2 id="SubsHeading">Subscription Plans</h2>
        {loading && <p>Loading plans...</p>}
        {error && <p className="error">{error}</p>}
        {plans.map((plan, index) => (
          <div key={index} className="card">
            <div className="card-top">
              <div className="card-top__info">
                <span className="card-top__info-icon">
                  <img src={subsIcon} alt="Subscription Icon" />
                </span>
                <div className="card-top__info-header">
                  <h1>{plan.planname}</h1>
                  <p>{plan.planCategory}</p>
                </div>
              </div>
              <div className="card-top__price">
                <h2 className="card-top__price-header">{plan.price}</h2>
                <p className="card-top__price-desc">{plan.duration}-days</p>
              </div>
            </div>
            <div className="card-bottom">
              {/* Free Trial Button */}
              <button onClick={() => handleCreateTrialSubscription(plan)} className="trial-button">
                Start Free Trial
              </button>

              {/* PayPal Button for Regular Subscription */}
              <PayPalButtons
                createOrder={(data, actions) => {
                  return handleCreateSubscription(plan);
                }}
                onApprove={(data, actions) => {
                  handleApprovePayment(plan, actions);
                }}
              />
              <span>Subscribe now</span>
              <ul className="card-bottom__list">
                {/* Your features list can go here */}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartOneSubscription;

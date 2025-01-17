import React, { useEffect,useState } from "react";
import "./TheorySubscription.css";
// import subsIcon from "../../assets/images/subsIconSvg.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPlans,
  createPayment,
  createUserSubscription,
  checkTrialEligibility,
  fetchUserSubscriptions,
  applyCouponCode,
} from "../../redux/features/subscriptionSlice";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";

const TheorySubscription = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id; // Added optional chaining for safety
  const { plans, loading, error  } = useSelector((state) => state.subscription);
  const [couponCode, setCouponCode] = useState("");

  // Fetch subscription plans when component mounts
  useEffect(() => {
    if (userId) {
         dispatch(fetchUserSubscriptions(userId));
       }
    dispatch(fetchPlans());
   
  }, [dispatch,userId]);
 // Added userId as a dependency
////////////////////////////////////////////////////////
const handleCouponSubmit = async () => {
  try {
    await dispatch(applyCouponCode({ userId, couponCode })).unwrap();
    navigate("/Theory-portal");
  } catch (error) {
    console.error("Error applying coupon:", error);
   
  }
};


  // /////////////////////////////////////////////////

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
      navigate("/Theory-Portal");
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
      navigate("/Theory-Portal");
    } catch (error) {
      console.error("Error during order approval:", error);
    }
  };

  // Separate plans into trial and paid
  const trialPlans = plans.filter(
    (plan) => plan.planCategory === "theory-portal free-trial"
  );

  const paidPlans = plans.filter(
    (plan) => plan.planCategory === "theory-portal package"
  );

  return (
    <div className="subscription-cardBox">
      <div className="cardBody">

        <h2 id="SubsHeading">Subscription Plans</h2>
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
        {loading && <p>Loading plans...</p>}
        

        

        {trialPlans.map((plan, index) => (
          <div key={index} className="card">
            <div className="card-top">
              <div className="card-top__info">
                <span className="card-top__info-icon">
                  {/* <img src={subsIcon} alt="Subscription Icon" /> */}
                </span>
                <div className="card-top__info-header">
                  <h1>{plan.planname}</h1>
                  <p>{plan.planCategory}</p>
                </div>
              </div>
              <div className="card-top__price">
                <h2 className="card-top__price-header">£ {plan.price}</h2>
                <p className="card-top__price-desc">{plan.duration}-days</p>
              </div>
            </div>
            <div className="card-bottom">
              <button
                onClick={() => handleCreateTrialSubscription(plan)}
                className="card-bottom__btn"
              >
                Start Free Trial
              </button>
              {/* <span>Subscribe now</span> */}
              <ul className="card-bottom__list">
                {plan.features.map((item, featureIndex) => (
                  <li key={featureIndex} className="card-bottom__list-item">
                    <span>
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.0405 0.292893C13.431 0.683417 13.431 1.31658 13.0405 1.70711L5.70719 9.04044C5.31666 9.43096 4.6835 9.43096 4.29297 9.04044L0.959641 5.70711C0.569117 5.31658 0.569117 4.68342 0.959641 4.29289C1.35017 3.90237 1.98333 3.90237 2.37385 4.29289L5.00008 6.91912L11.6263 0.292893C12.0168 -0.0976311 12.65 -0.0976311 13.0405 0.292893Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {paidPlans.map((plan, index) => (
          <div key={index} className="card">
            <div className="card-top">
              <div className="card-top__info">
                <span className="card-top__info-icon">
                  {/* <img src={subsIcon} alt="Subscription Icon" /> */}
                </span>
                <div className="card-top__info-header">
                  <h1>{plan.planname}</h1>
                  <p>{plan.planCategory}</p>
                </div>
              </div>
              <div className="card-top__price">
                <h2 className="card-top__price-header">£ {plan.price}</h2>
                {/* <p className="card-top__price-desc">{plan.duration}-days</p> */}
              </div>
            </div>
            <div className="card-bottom">
              <PayPalButtons
                createOrder={(data, actions) => handleCreateSubscription(plan)}
                onApprove={(data, actions) =>
                  handleApprovePayment(plan, actions)
                }
              />
              {/* <span>Subscribe now</span> */}
              <ul className="card-bottom__list">
                {plan.features.map((item, featureIndex) => (
                  <li key={featureIndex} className="card-bottom__list-item">
                    <span>
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.0405 0.292893C13.431 0.683417 13.431 1.31658 13.0405 1.70711L5.70719 9.04044C5.31666 9.43096 4.6835 9.43096 4.29297 9.04044L0.959641 5.70711C0.569117 5.31658 0.569117 4.68342 0.959641 4.29289C1.35017 3.90237 1.98333 3.90237 2.37385 4.29289L5.00008 6.91912L11.6263 0.292893C12.0168 -0.0976311 12.65 -0.0976311 13.0405 0.292893Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheorySubscription;

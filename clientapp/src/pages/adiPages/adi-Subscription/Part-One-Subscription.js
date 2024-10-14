import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllSubscriptionPlans,
  startFreeTrial,
} from "../../../redux/features/subscriptionSlice";
import { toast } from "react-hot-toast";
import subsIcon from "../../../assets/images/subsIconSvg.svg";
import "../../../pages/Theory-Subscription/TheorySubscription.css";

const PartOneSubscription = () => {
  const dispatch = useDispatch();
  const currentPlan = useSelector((state) => state.subscription.currentPlan);
  const userId = useSelector((state) => state.auth.userDetails._id); // Adjust to your auth state
  const subscriptionData = useSelector((state) => state.subscription);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        await dispatch(fetchAllSubscriptionPlans());
      } catch (error) {
        toast.error("Failed to fetch subscription plans.");
      }
    };

    fetchPlans();
  }, [dispatch]);

  const handleFreeTrialSubscribe = (plan) => {

    dispatch(
      startFreeTrial({
        userId,

        subscriptionId: plan.id,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Successfully subscribed to free trial!");
      })
      .catch((error) => {
        if (error.message === "User not found") {
          toast.error("User not found. Please make sure you are logged in.");
        } else if (error.message === "Free trial not available") {
          toast.error("You are not eligible for a free trial.");
        } else {
          toast.error("Failed to subscribe to free trial.");
        }
      });
  };

  const mappedSubscriptions =
    subscriptionData?.plans?.data
      ?.filter(
        (sub) =>
          //   sub.planname === "Free Trial For 7 days" ||
          sub.planname === "Part One Package" ||
          sub.planname === "Complete Package"
      )
      .map((sub) => ({
        id: sub._id,
        title: sub.planname,
        price: sub.price === 0 ? "Free" : `£${sub.price}`,
        dec: sub.planCategory
          ? sub.planCategory.charAt(0).toUpperCase() +
            sub.planCategory.slice(1).replace("-", " ")
          : "No description",
        features: [`${sub.planname} content`],
        mostPopular: sub.planname === "Complete Package",
        freeTrial: sub.planname.includes("Free Trial"),
        view: true,
      })) || [];

  const isFreeTrialActive = currentPlan === "Free Trial For 7 days";

  return (
    <div className="subscription-cardBox">
      <div className="cardBody">
        <h2 id="SubsHeading">Subscription Plans</h2>
        {currentPlan ? (
          <p id="SubDesc">Current Plan: {currentPlan}</p>
        ) : (
          <p id="SubDesc">You don't have an active subscription.</p>
        )}

        {/* Free Trial Section */}
        {mappedSubscriptions
          .filter((plan) => plan.freeTrial)
          .map((plan, index) => (
            <div key={index} className="card">
              <div className="card-top">
                <div className="card-top__info">
                  <span className="card-top__info-icon">
                    <img src={subsIcon} alt="Subscription Icon" />
                  </span>
                  <div className="card-top__info-header">
                    <h1>{plan.title}</h1>
                    <p>{plan.dec}</p>
                    {plan.freeTrial && (
                      <p className="free-trial">Free Trial available</p>
                    )}
                  </div>
                </div>
                <div className="card-top__price">
                  <h2 className="card-top__price-header">{plan.price}</h2>
                  <p className="card-top__price-desc">/monthly</p>
                </div>
              </div>
              <div className="card-bottom">
                <button
                  className="card-bottom__btn"
                  onClick={() => handleFreeTrialSubscribe(plan)}
                  disabled={isFreeTrialActive} // Disable if free trial is active
                >
                  <span>Subscribe now</span>
                </button>
                <ul className="card-bottom__list">
                  {plan.features.map((item, featureIndex) => (
                    <li key={featureIndex} className="card-bottom__list-item">
                      <span>
                        <svg
                          width="14"
                          height="10"
                          viewBox="0 0 14 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
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

        {/* Remaining Subscription Plans */}
        {mappedSubscriptions
          .filter((plan) => !plan.freeTrial)
          .map((plan, index) => (
            <div key={index} className="card">
              <div className="card-top">
                <div className="card-top__info">
                  <span className="card-top__info-icon">
                    <img src={subsIcon} alt="Subscription Icon" />
                  </span>
                  <div className="card-top__info-header">
                    <h1>{plan.title}</h1>
                    <p>{plan.dec}</p>
                  </div>
                </div>
                <div className="card-top__price">
                  <h2 className="card-top__price-header">{plan.price}</h2>
                  <p className="card-top__price-desc">/monthly</p>
                </div>
              </div>
              <div className="card-bottom">
                <button className="card-bottom__btn">
                  <span>Subscribe now</span>
                </button>
                <ul className="card-bottom__list">
                  {plan.features.map((item, featureIndex) => (
                    <li key={featureIndex} className="card-bottom__list-item">
                      <span>
                        <svg
                          width="14"
                          height="10"
                          viewBox="0 0 14 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
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

export default PartOneSubscription;

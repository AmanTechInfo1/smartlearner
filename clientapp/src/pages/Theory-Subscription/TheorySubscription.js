import React, { useEffect, useState } from "react";
import "./TheorySubscription.css";
import subsIcon from "../../assets/images/subsIconSvg.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkOutMySubscription, getMySubscription, getMySubscriptionType } from "../../redux/features/dashboardSlice";
const TheorySubscription = () => {
  const [plans, setPlans] = useState([
    {
      title: "Free Trial",
      price: "$0",
      dec: "7 Day Free Trial",
      features: ["Enroll Everything For 7 Days"],
      mostPopular: false,
      view: true
    },
    {
      title: "Standard Subscription",
      price: "$3.99",
      dec: "Current Plan",
      features: [
        "£3.99 for 3 months",
        "Only have access to portal (hazard perception and theory portal)",
        "Can access addons £1.99 each",
      ],
      mostPopular: true,
      view: true
    },
    {
      title: "Supported Subscription",
      price: "$9.9",
      dec: "Addon Plan",
      features: [
        "£9.99/month",
        "Access to theory portal as normal",
        "X1 AI video per week",
        "Breakdown of theory test document",
        "online chat support in office working hours and email correspondence the day after when used outside of working hours",
        "Access to add ons",
        "X2 zoom sessions per month for progress reviews",
        "24 hour access to theory portal",
      ],
      mostPopular: false,
      view: true
    },
  ])




  const plannning = useSelector((state) => state.dashboard.plan);
  const currentplan = useSelector((state) => state.dashboard.currentplan);





  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getMySubscriptionType(setPlans, () => { }));
  }, ["plans"])


  console.log(plans, "plansplansplansplansplans")

  return (
    <div>
      <div className="cardBody">
        <h2 id="SubsHeading">Subscription Plans</h2>
        {
          currentplan!="" ? <p id="SubDesc">Current Plan = {currentplan}</p> : <p id="SubDesc">Currently you don`t have any plan</p>
        }


        {plans.map((plan, index) => (
          plannning.indexOf(plan.title) != -1 && <div key={index} className="card">
            <div className="card-top">
              <div className="card-top__info">
                <span className="card-top__info-icon">
                  <img src={subsIcon} alt="icon" />
                </span>
                <div className="card-top__info-header">
                  <h1>{plan.title}</h1>
                  <p>{plan.dec}</p>
                </div>
                {plan.mostPopular && (
                  <div className="card-top__info-btn">
                    <p>Most Popular</p>
                  </div>
                )}
              </div>
              <div className="card-top__price">
                <h2 className="card-top__price-header">{plan.price}</h2>
                <p className="card-top__price-desc">/monthly</p>
              </div>
            </div>
            <div className="card-bottom">
              <button className="card-bottom__btn" onClick={() => {
                dispatch(checkOutMySubscription({ "title": plan.title }, () => {
                  navigate("/Theory-Portal")
                }))
              }}>
                <span>Subscribe now</span>
              </button>
              <ul className="card-bottom__list">
                {plan.features.map((item, index) => (
                  <li key={index} className="card-bottom__list-item">
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

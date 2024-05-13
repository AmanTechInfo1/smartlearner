// import React from 'react'
import styles from "./ElectricCar.module.css";
import {

  FaTree,
  FaBuilding,

} from "react-icons/fa";


import electricar from "../../assets/images/electricCarImg.png";
import SLEL from "../../assets/images/SL-EV-partnerships-.jpg";
import TreeImg from "../../assets/images/Tree-1024x213.png";
import SLEL2 from "../../assets/images/SL-EV-partnerships2-.jpg";
import cEngine from "../../assets/images/cEngine.png";
import electriEngine from "../../assets/images/electricCarImg.png";
import { useState } from "react";

const tabContent = [
  {
    question: "Benefits of Electric Cars",
    answer: [
      "Electric cars are electrically powered – electricity can be a renewable resource, gasoline cannot. ",
      "They are ultimately better for the environment, as they don’t release any CO2 emissions.",
      "They require less expensive and less frequent maintenance.",
      "Annual Tax and maintenance costs (including MOTs and servicing) for electric vehicles are 49% lower than for petrol models.",
      "The average lifetime running costs, including purchase price – for an electric car is £52,133, while an equivalent petrol model is £53,625",
      "On average, an electric vehicle would cost the owner £3,752 a year over a course of its life, compared to £3,858 for a petrol car. Resulting in an annual saving of £107.",
      "There are tax credits available for owners of electric cars.",
    ],
  },
  {
    question: "Disadvantage of Electric Cars",
    answer: [
      "Recharging the battery takes time.",
      "It can be sometimes difficult to find a charging station.",
      "Insurance costs are on average 25% higher for electric vehicles.",
      "They are usually more expensive than gas-powered cars.",
      "The average sticker price on an Electric car is £13,800 higher than an average gasoline.",
    ],
  },
];
const tabContent2 = [
  {
    question: "Benefits of Electric Cars",
    answer: [
      "Gas powered cars have more power.",
      "Have better agility in terms of acceleration and speed.",
      "Gas powered cars have better and longer ranges. For example, gas vehicles can have a range of 400 miles or more. Electric generally can’t travel more than 150 miles at a time.",
      "Can be refilled quickly.",
    ],
  },
  {
    question: "Disadvantage of Electric Cars",
    answer: [
      "The biggest disadvantage of Gas powered vehicles is that they emit harmful emissions causing pollution to our atmosphere (That greenhouse gas is the main driver of climate change).",
      "The cost of fuel is expensive. For an electric car to travel 100 miles would cost around 4p per mile in comparison to a gas powered car costing 9p per mile. Fuel costing £5 more",
    ],
  },
];

export default function ElectricCarScheme() {
  // ////////////tab content /////////////////
  const [activeTab, setActiveTab] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const handleTab2Click = (index) => {
    setActiveTab2(index);
  };

  return (
    <div>
      <section className={styles.imageSection}>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>Electric Car Scheme</h1>
            </div>

            <div className={styles.heading2}>
              <p>
                Here at Smart Learner driving school we are commited to reducing
                our carbon footprint! Throughout 2023 and the future, we
                continuously strive to become an even more sustainable and
                eco-friendly company.
              </p>
            </div>
          </div>
          <div className={styles.video}>
            <img src={electricar} alt="electricar" />
          </div>
        </div>
      </section>

      {/* ////////////////////////////////////////////// */}
      <section className={styles.electricCar2ndSection}>
        <section className={styles.electricCarImgSection}>
          <img src={SLEL} alt="SLEL" />
          <img src={SLEL2} alt="SLEL2" />
        </section>
        <section className={styles.ourCSRresponsbilities}>
          <h2>Our Electric Car - Sky Blue City Turns Green</h2>
          <p>
            As a driving school, we are aware that we release a significant
            amount of CO2 into our world’s atmosphere. We want to change this
            and give back to our community and to our environment by taking
            precautionary measures in decreasing and preventing further damage
            to our Earth. SmartLearner will be partnering up with Coventry city
            council, Smart learners’ pupils and instructors Will have the
            opportunity to use an electric car to be either taught in or to
            teach in!
          </p>
          <p>
            This means that SmartLearner Driving School will have a carbon
            emissions free vehicle! This vehicle will rotate around our
            instructors, giving them all the chance to use the electric vehicle.
          </p>
          <p>
            We see this as a golden opportunity to really impact and influence
            our local community by setting a prime example to continuously
            strive for a greener and healthier future. We aspire to influence
            both existing and up coming drivers to reconsider and evaluate their
            choices and decisions in regards of what they drive and how they
            drive.
          </p>
          <p>
            Our green project will hopefully shed insight on the impacts of
            driving and the amount of CO2e being released per individual on road
            and how this may have a drastic detrimental effect on our current
            atmosphere. With Coventry city council’s full support, we will be
            able to change both our mode of transport to become environmentally
            friendly, as well as the community’s thoughts to become more
            healthier. The greener, The better.
          </p>
          <p>
            This change is for the good, not just for our business but for
            individuals that may suffer from asthma or lung cancer. Smart
            Learner is taking the necessary steps to cleaning our air.
          </p>
          <h4>
            We are the 1st driving school within the West Midlands to be
            commissioned an electric car!
          </h4>
        </section>
      </section>

      {/* ////////////////////////////////////////////////////// */}

      <section>
        <div className={styles.treeSection}>
          <img src={TreeImg} alt="TreeImg" />
        </div>
        <div className={styles.vsElectrictabSection}>
          <section className={styles.vsElectricSection}>
            <div className={styles.electricTabSection}>
              <img src={electriEngine} alt="electriEngine" />
              <h2>Electric Engines</h2>
              {/* ///////////////////////////////////////////// */}
              <section className={styles.tabsection}>
                <div className={styles.tabs}>
                  {tabContent.map((tab, index) => (
                    <div
                      key={index}
                      className={`${styles.tab} ${
                        index === activeTab ? styles.active : ""
                      }`}
                      onClick={() => handleTabClick(index)}
                    >
                      {tab.question}
                    </div>
                  ))}
                </div>
                <div className={styles.tabContent}>
                  <div>
                    {tabContent[activeTab].answer.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </section>
            </div>
            <div>
              <h1>Vs.</h1>
            </div>
            <div className={styles.electricTabSection}>
              <img src={cEngine} alt="cEngine" />
              <h2>Combustion Engines</h2>
              {/* ///////////////////////////////////////////// */}
              <section className={styles.tabsection}>
                <div className={styles.tabs}>
                  {tabContent2.map((tab, index) => (
                    <div
                      key={index}
                      className={`${styles.tab} ${
                        index === activeTab2 ? styles.active : ""
                      }`}
                      onClick={() => handleTab2Click(index)}
                    >
                      {tab.question}
                    </div>
                  ))}
                </div>
                <div className={styles.tabContent}>
                  <div>
                    {tabContent2[activeTab2].answer.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>

      {/* //////////////////////go green /////////////////////// */}
      <section className={styles.features}>
        <h4>Our Other Projects</h4>
        <p>
          Click the icons below to find out more about SmartLearners current
          efforts to save our planet.
        </p>
        <div className={styles.mainFeatures}>
         
          <div className={styles.column}>
            <span>
              <FaTree id={styles.featuresIcon} />
            </span>

            <h3>Going Green Project</h3>
            <p>
              As a driving school, with 50 instructors, we are one of the
              biggest contributors to the release of C02 in our atmosphere. To
              combat this we will be planting trees in and around our local
              community.
            </p>
          </div>
          <div className={styles.column}>
            <span>
              <FaBuilding id={styles.featuresIcon} />
            </span>

            <h3>Our Office Efforts</h3>
            <p>
              We are a business that cares about our planet and the future. We
              want to become better everyday by implementing eco friendly and
              sustainable practices within our office.
            </p>
          </div>
        </div>
      </section>

      {/* //////////////////////////////////////////////// */}
    </div>
  );
}

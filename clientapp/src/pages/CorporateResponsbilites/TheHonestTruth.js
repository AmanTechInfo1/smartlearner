// import React from 'react'
import styles from "./TheHonestTruth.module.css";
import tHTLogo from "../../assets/images/theHonestLogo.png";
import { BiSolidChevronsDown } from "react-icons/bi";
import {
  FaMusic,
  FaGlassCheers,
  FaTablets,
  FaMoneyBill,
  FaMobileAlt,
  FaUserInjured,
  FaCarCrash,
  FaTachometerAlt,
  FaBed,
  FaBicycle,
} from "react-icons/fa";


import { useEffect, useState } from "react";
import Truths from "./Truths";

export default function TheHonestTruth() {
  const [animatedValue1, setAnimatedValue1] = useState(0);
  const [animatedValue2, setAnimatedValue2] = useState(0);
  const [animatedValue3, setAnimatedValue3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue1((prevValue) => {
        const newValue = prevValue + 1;
        return newValue >= 50 ? 50 : newValue;
      });
      setAnimatedValue2((prevValue) => {
        const newValue = prevValue + 1;
        return newValue >= 20 ? 20 : newValue;
      });
      setAnimatedValue3((prevValue) => {
        const newValue = prevValue + 1;
        return newValue >= 1500 ? 1500 : newValue;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);



  return (
    <div className={styles.TheHonestTruth}>
      <div className={styles.THTSec}>
        {/* ////////////////////////////////////////////////////////////////////////// */}

        <section className={styles.eCSfrontSection}>
          <h2>THE HONEST TRUTH</h2>
          <hr />
          <img src={tHTLogo} alt="tHTLogo" />
          <p>
            SmartLearner have teamed up with First car on their 'The Honest
            Truth' campaign to help deliver their road safety project across the
            West MidLands and Warwickshire!
          </p>
        </section>

        {/* ////////////////////////////////////////// */}
        <section className={styles.videosContentSections}>
          <h2>What is the The Honest Truth Campaign</h2>
          <hr />
          <div>
            <section className={styles.videosFramesSec}>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="100%"
                    height="600px"
                    src="https://www.youtube.com/embed/8PskOJsdGM8"
                    title="YouTube Video"></iframe>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* /////////////////////////////////////// */}
        <section className={styles.textThtSection}>
          <div id={styles.textThtSection}>
            <p>
              Each year, over 825,000 people in the UK pass their driving test,
              gaining independence. However, young drivers (17-24) are the
              highest risk group and road crashes are their leading cause of
              death.
            </p>
            <p>
              The Honest Truth is a national road safety campaign, collaborating
              with emergency services, road safety organisations, and driving
              instructors to deliver straight forward road safety education.
            </p>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.thehonesttruth.co.uk/ ">
              <button>MORE INFO</button>
            </a>
          </div>
        </section>

        {/* ////////////////////////smartlearner stats ///////////////////////////////// */}
        <div className={styles.smartleanerStats}>
          <section className={styles.smartleanerStatsSection}>
            <h3>The Statistics</h3>
            <hr />
            <div className={styles.statsContaier}>
              <div className={styles.numberContainer}>
                <span>{animatedValue1}%</span>
                <p id={styles.statslowerheading}>NEW DRIVERS PASS FIRST TIME</p>
              </div>
              <div className={styles.numberContainer}>
                <span>{animatedValue2}%</span>
                <p id={styles.statslowerheading}>
                  CRASH WITHIN 1 YEAR OF PASSING
                </p>
              </div>
              <div className={styles.numberContainer}>
                <span>{animatedValue3}+</span>
                <p id={styles.statslowerheading}>YOUNG DRIVERS DIE EACH YEAR</p>
              </div>
            </div>
          </section>
        </div>
        {/* ///////////////////////////////////////////////////////////////////// */}
        <section className={styles.textThtSection}>
          <h2>
            OUR INVOLVEMENT IN <br /> <span>'THE HONEST TRUTH'</span>
          </h2>
          <hr />
          <div id={styles.textThtSection}>
            <p>
              As the leading driving school in the West Midlands and
              Warwickshire, we are committed to setting an example in promoting
              road safety. We are excited to use driving lessons to educate
              young people about the risks they face after passing their tests.
              For the past 15 years, SmartLearner has promoted road safety
              through presentations at schools, colleges, and universities in
              Coventry, Warwick, Rugby, and surrounding areas.
            </p>
            <p>
              In 2019, we helped establish the road safety charity 'Because Your
              Life Counts' (BYLC), which delivers various road safety projects.
              BYLC has collaborated with West Midlands Police, West Midlands
              Fire Service, and the Warwickshire Police and Crime Commissioner.
            </p>
          </div>
        </section>
        {/* /////////////////////////////////////////////// */}

        <section className={styles.getInvolved}>
          <div id={styles.getInvolvedHead}>
            <h2>GET INVOLVED!</h2>
            <hr />
          </div>

          <div className={styles.getInvolvedContentDiv}>
            <section className={styles.getInContentSection}>
              <h2>BOOK YOUR LESSON</h2>
              <hr />
              <p>
                To get involved in the 'Honest Truth' project, book a lesson
                with a Smart Learner Driving Instructor. As an award-winning
                driving school in the West Midlands and Warwickshire, we provide
                fully qualified, DVSA-approved local instructors.
              </p>
            </section>
            {/* //////////////////////////// */}
            <section className={styles.getInContentSection}>
              <span>
                <BiSolidChevronsDown id={styles.downwordArrow} />
              </span>

              <h2>BOOK YOUR LESSON</h2>
              <hr />
              <p>
                At the start of your lessons, you'll receive a Truth Card
                listing the 10 truths about safe driving. Your instructor will
                sign off each topic as you complete it.
              </p>
              <p>
                The 'Honest Truth' campaign aims to tell young drivers the
                unvarnished truth about safe driving, hoping to change their
                behavior and approach to driving.
              </p>
            </section>
            {/* ///////////////////////////////////// */}
            <section className={styles.getInContentSection}>
              <span>
                <BiSolidChevronsDown id={styles.downwordArrow} />
              </span>
              <h2>FINISH THE TRAINING</h2>
              <hr />
              <p>
                At the start of your lessons, you will receive a Truth Card
                listing 10 truths. Your instructor will sign off each truth as
                you complete the related topics.
              </p>
              <p>
                The 'Honest Truth' campaign aims to inform young drivers about
                safe driving realistically and straight forwardly, hoping to
                change their driving behavior.
              </p>
            </section>
            {/* /////////////////////////////////////////// */}
            <section className={styles.getInContentSection}>
              <span>
                <BiSolidChevronsDown id={styles.downwordArrow} />
              </span>
              <h2>WIN A PRIZE!</h2>
              <hr />
              <p>
                If your driving instructor has signed off all 10 topics on your
                Truth Card, congratulations! You can now register to be in with
                a chance of winning some great prizes. Simple click the link
                below and you'll be taken to the registration page.
              </p>
              <p>The prizes available for completing the course change</p>
            </section>
          </div>
        </section>

        {/* //////////////////////////////////////////////////////// */}
        <section className={styles.features}>
          <h4>The 10 Truths</h4>
          <p>Click the ICON to find out more!</p>
       <Truths/>
        </section>
        {/* ///////////////////////////// */}
      </div>
    </div>
  );
}

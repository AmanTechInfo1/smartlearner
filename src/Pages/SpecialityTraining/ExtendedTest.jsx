// import React from 'react'
import styles from "./ExtendedTest.module.css";
import carSideimg from "../../assets/images/car-red.png";
import Accordion from "react-bootstrap/Accordion";
import { faqs } from "../../assets/data/Faqs";
import { GoPlay } from "react-icons/go";
import {
 
  FaRegMoneyBillAlt,
  
  FaBookOpen,
  // FaCarSide,
  // FaFacebook,
  // FaInstagram,
  // FaSnapchat,
  // FaTwitter,
  // FaYoutube,
} from "react-icons/fa";
import { FaCommentSms } from "react-icons/fa6";
import ReCAPTCHA from "react-google-recaptcha";
import  { useState, useEffect } from 'react';




export default function ExtendedTest() {

  const [animatedValue1, setAnimatedValue1] = useState(0);
  const [animatedValue2, setAnimatedValue2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue1(prevValue => {
        const newValue = prevValue + 1;
        return newValue >= 72 ? 72 : newValue;
      });
      setAnimatedValue2(prevValue => {
        const newValue = prevValue + 1;
        return newValue >= 98 ? 98 : newValue;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);



  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };



  return (
    <div>
      <section className={styles.imageSection}>
        <div className={styles.overlay}></div>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>DRIVING INSTRUCTOR TRAINING</h1>
            </div>

            <div className={styles.heading2}>
              <h2>
                Forget The Rest,
                <br /> Learn With The Best!
              </h2>
            </div>
            <div className={styles.btn}>
              <button id={styles.btn}>Contact Us</button>
            </div>
          </div>
          <div className={styles.video}>
            <a href="/">
              <img src={carSideimg} alt="LogoImg" />
              <GoPlay className={styles.playIcon} />
            </a>
          </div>
        </div>
      </section>
      {/* //////////////////////////////body details//////////////////////////// */}
      <section className={styles.ExtendedTestBodyDetails}>
        <h2>Do you need Extended Driving Test Training?</h2>
        <p>
          Have you been convicted of a driving offence that resulted in a ban?
          If so you will need extended test training. Once the disqualification
          period has ended you will need to apply to get a new provisional
          driving licence and re-take your theory test (For more information go
          <a href="">Here.</a>) Once you have passed your theory you will then
          be able to retake your driving test. It will be an extended driving
          test.
        </p>
        <p>
          Contact Smart Learner and we will arrange an assessment lesson with
          one of our fully-qualified and experienced instructors. On the
          assessment lesson, they will then discuss with you what you will need
          to do to pass your extended practical driving test.
        </p>
      </section>

      {/*///////////////////////////////// Enquire Form/////////////////////////// */}
      <section className={styles.formContainer}>
        <section className={styles.innerFormSection}>
          <div className={styles.enquiryForm}>
            <h4>Enquiry Form</h4>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">
                  Full Name<span>*</span>
                </label>
                <input type="text" id="fullName" name="fullName" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">
                  Email Address<span>*</span>
                </label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contactNumber">
                  Contact Number<span>*</span>
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="additionalInfo">
                  Additional Information<span>*</span>
                </label>
                <textarea
                  id={styles.additionalInfo}
                  name="additionalInfo"
                  rows="4"
                ></textarea>
              </div>
              <div className={styles.formGroup}>
                <ReCAPTCHA
                  id="recaptcha"
                  sitekey="your_site_key" // Replace 'your_site_key' with your actual reCAPTCHA site key
                />
              </div>
              <div className={styles.formBtn}>
                <button type="submit" id={styles.formBtn}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    

      {/* //////////////////////////// Why choose section */}
      <section className={styles.features}>
        <h4>Why choose SmartLearner?</h4>
      
        <div className={styles.mainFeatures}>
          <div className={styles.column}>
          <span>
              <FaRegMoneyBillAlt id={styles.featuresIcon} />
            </span>

            <h3>Affordable Prices</h3>
            <p>
              We are always looking at industry prices to ensure our learners
              get the best-valued lessons!
            </p>
          </div>
          <div className={styles.column}>
          <span>
              <FaCommentSms id="featuresIcon" />
            </span>

            <h3>Automated SMS Alerts</h3>
            <p>
              You will receive SMS alerts on your phone to remind you of your
              lesson.
            </p>
          </div>
          <div className={styles.column}>
          <span>
              <FaBookOpen id="featuresIcon" />
            </span>

            <h3>Unique Learning Plans</h3>
            <p>
              Our instructors cater to your unique learning styles and create
              lesson plans around them.
            </p>
          </div>
      
        </div>
      </section>
      {/* ////////////////////////smartlearner stats ///////////////////////////////// */}
      <div className={styles.smartleanerStats}>
        <section className={styles.smartleanerStatsSection}>
      <h3>THE STATS</h3>
      <div className={styles.statsContaier}>
        <div className={styles.numberContainer}>
          <span>{animatedValue1}%</span>
          <p id={styles.statslowerheading}>PASS FIRST TIME</p>
          <p>72% of pupils pass first time. This is 25% higher then that national average!</p>
        </div>
        <div className={styles.numberContainer}>
          <span>{animatedValue2}%</span>
          <p id={styles.statslowerheading}>WOULD RECOMMEND US</p>
          <p>98% of people who have passed with us said they would recommend us to their friends and family.</p>
        </div>
      </div>
      </section>
    </div>
    

      {/*  ////////////////////////Faqs ////////////////////// */}

      <section className="faqs-section">
        <div className="faqs-container">
          <h4>FAQ</h4>
          <p>Most frequent questions and answers</p>
          <Accordion defaultActiveKey="0">
            {faqs.map((item, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>
                  <h5>{item.question}</h5>
                </Accordion.Header>
                <Accordion.Body>{item.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}

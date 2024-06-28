// import React from 'react'
import styles from "./DrivingInstructorFranchise.module.css";
import { GoPlay } from "react-icons/go";
import {
  FaUserTie,
  FaRegMoneyBillAlt,
  FaBusinessTime,
  FaUserClock,
  FaCheckCircle,
  FaHandsHelping,
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Lplateimg from "../../assets/images/L-Plate.jpg";
import intensiveCoursesImg from "../../assets/images/Intensive-Driving-Course-1024x768.jpg";
import DiaryImg from '../../assets/images/Diary-1536x681.jpg';
import { useState, useEffect } from "react";
import { testimonialsData } from "../../assets/data/testimonials";
import Testemonial from "../../components/testimonials/Testemonial";
import Review from "../../components/views/Review";

export default function DrivingInstructorFranchise() {
 

  return (
    <div className={styles.drivingInstructorTraining} style={{backgroundColor:'black',fontFamily:"'Antonio',sans-serif"}}>
      <section className={styles.imageSection}>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>DRIVING INSTRUCTOR FRANCHISE</h1>
            </div>

            <div className={styles.heading2}>
              <h2>
                Join the Regional
                <br /> Driving School <br /> of the Year!
              </h2>
            </div>
            <div className={styles.btn}>
              <a href="tel:+4402475092784"> <button id={styles.btn}>Contact Us</button></a>
             
            </div>
          </div>
          <div className={styles.video}>
            <a target="_blank" href="https://youtu.be/dmCmP4Tse1E">
              <img src={Lplateimg} alt="LogoImg" />
              <GoPlay className={styles.playIcon} />
            </a>
          </div>
        </div>
      </section>

      {/* //////////////////////////// Why choose section */}
      <section className={styles.features}>
        <h4>Join Our Driving School Franchise</h4>
        <p>
          If you’re an experienced instructor thinking of joining a driving
          school franchise, you’re probably considering all your options. Let’s
          start by pointing out that SmartLearner was voted ‘Regional Driving
          School of the Year’ in 2021 and 2022!
        </p>
        <div className={styles.mainFeatures}>
          <div className={styles.column}>
            <span>
              <FaRegMoneyBillAlt id={styles.featuresIcon} />
            </span>

            <h3>Earn Over £30,000</h3>
            <p>An average full-time instructor will earn over £30K per year!</p>
          </div>
          <div className={styles.column}>
            <span>
              <FaUserTie id={styles.featuresIcon} />
            </span>

            <h3>Be Your Own Boss</h3>
            <p>When you are an instructor you`re the boss.</p>
          </div>
          <div className={styles.column}>
            <span>
              <FaBusinessTime id={styles.featuresIcon} />
            </span>

            <h3>Flexible Working Hours</h3>
            <p>Work hours that suit you and your family.</p>
          </div>
          <div className={styles.column}>
            <span>
              <FaUserClock id={styles.featuresIcon} />
            </span>

            <h3>Full Office Support</h3>
            <p>We offer full office support to help ensure you succeed.</p>
          </div>
        </div>
      </section>
      {/* //////////////////////////////////// benefits section //////////////////////////////////////// */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsHeading}>
          <h4>Superb Benefits</h4>
        </div>
        <div className={styles.benefitsDetails}>
          <ul className={styles.benefitsList} type="none">
            <li id={styles.benefitsList}>
              <span>
                <FaCheckCircle id={styles.checkCircle} />
              </span>
              <p>Meet and network with other new SmartLearner instructors.</p>
            </li>
            <li id={styles.benefitsList}>
              <span>
                <FaCheckCircle id={styles.checkCircle} />
              </span>
              <p>
                Exclusive access to the SmartLearner Booking System to help
                manage your business.
              </p>
            </li>
            <li id={styles.benefitsList}>
              <span>
                <FaCheckCircle id={styles.checkCircle} />
              </span>
              <p>
                Opportunities to attend online and in-person instructor training
                courses - to continue your professional development.
              </p>
            </li>
            <li id={styles.benefitsList}>
              <span>
                <FaCheckCircle id={styles.checkCircle} />
              </span>
              <p>
                Most of our customers prepay. This means less haggling over
                prices or no-shows
              </p>
            </li>
            <li id={styles.benefitsList}>
              <span>
                <FaCheckCircle id={styles.checkCircle} />
              </span>
              <p>
                Fixed Franchise Fee – Paid Weekly – No surprise charges
                throughout your franchise agreement!
              </p>
            </li>
            <li id={styles.benefitsList}>
              <span>
                <FaCheckCircle id={styles.checkCircle} />
              </span>
              <p>
                FREE SmartLearner branding - No need to pay for car stickering
                or branded clothing.
              </p>
            </li>
            <li id={styles.benefitsList}>
              <span>
                <FaCheckCircle id={styles.checkCircle} />
              </span>
              <p>
                We advertise on various search engines and social media platform
                to ensure a constant stream of new business.
              </p>
            </li>
            <li id={styles.benefitsList}>
              <span>
                <FaCheckCircle id={styles.checkCircle} />
              </span>
              <p>
                Be treated as a person, not a number. At SmartLearner we
                understand a driving school is only as successful as its
                instructors.
              </p>
            </li>
            <li id={styles.benefitsList}>
              <span>
                <FaCheckCircle id={styles.checkCircle} />
              </span>
              <p>Enjoy your holiday with 4 weeks franchise free per year!</p>
            </li>
          </ul>
        </div>
      </section>

      {/* ////////////////////////////Join our fleet instruction///////////////////////// */}
      <section className={styles.sectionContainer}>
        <div className={styles.iconDiv}>
          <FaHandsHelping className={styles.helpingHand} />
        </div>
        <div className={styles.headingDiv}>
          <h1>Join Our Fleet Of Instructors!</h1>
        </div>
        <div className={styles.buttonDiv}>
          <a href="tel:+4402475092784">
            <button id={styles.buttonDiv}>Contact Us</button>
          </a>
        </div>
        <div className={styles.paragraphsDiv}>
          <p>
            Lines open Monday to Friday, 9:00AM to 7:00PM Weekends 10:00AM to
            4:00PM{" "}
          </p>
        </div>
      </section>

      {/* /////////////////////////////Our Beloved Customer section ////////////////////// */}
      <section className={styles.belovedCustomerSection}>
        <div className={styles.belovedCustomerdetails}>
          <h1>
            Pupils <span> LOVE</span> SmartLearner!
          </h1>
          <p>
            SmartLearner Driving School has helped thousands of students pass
            their driving test and theory exams!
          </p>
          <p>
            We have an Excellent rating and reviews on <a href="">TrustPilot</a>
            , <a href="">Google</a> and <a href="">Facebook</a>. We have over
            10,000+ followers across our social media platforms. We always
            engage with our loyal students/followers online to help maximise
            pupil engagement and constantly generate our driving instructors new
            pupils. SmartLearner Driving School also won ‘Regional Driving
            School of the Year’ at the Intelligent Instructor Awards 2021.
          </p>
          <p>
            <strong>More than 4 in 5 Driving Instructors</strong> at
            SmartLearner Driving School currently are fully-booked! All of our
            other driving instructors have over 90% of their diary booked.
          </p>
        </div>
        <div className={styles.pupilsImg}>
          <img src={intensiveCoursesImg} alt="intensiveCoursesImg" />
        </div>
      </section>
      {/* ///////////////////////////////////////////Booking System ////////////////////////////// */}

      <section className={styles.bookingSection}>
        <div className={styles.diaryImgSection}>
          <img src={DiaryImg} alt="Booking Img" />
        </div>
        <div className={styles.diaryDetailsSection}>
          <h4>Our Booking System</h4>
          <p>
            At SmartLearner we use a state-of-the-art booking system! This
            allows our instructors to reduce their admin work and focus on what
            they love doing… teaching. Our system includes various features such
            as a real-time online diary which means our instructors and office
            staff are always on the same page. We also have an automated SMS
            system which sends text alerts to instructors and learners to
            confirm the lesson times or let them know when a lesson has been
            cancelled. Our system allows instructors to take card/cash payments
            in the car, add learner notes and even sends learners custom lesson
            summaries!
          </p>
        </div>
      </section>

      {/*//////////////////////////////////////// testimonial////////////////////////////////////// */}
        <section><Testemonial/></section>

      {/* /////////////////// Reviews section /////////////////*/}
      <section>
        <Review/>
      </section>
      
    </div>
  );
}

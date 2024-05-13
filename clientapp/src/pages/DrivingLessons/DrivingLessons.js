// import React from 'react'

import styles from "./DrivingLesson.module.css";
import Lplateimg from "../../assets/images/L-Plate.jpg";
import leftCarimg from "../../assets/images/car-red.png"
import giftVoucherImage from "../../assets/images/Screenshot-2022-12-23-113404.png"
import automaticDrivingImg from "../../assets/images/auto-gear.png"
import manualDrivingImg from "../../assets/images/manual-gear-1.png"
import { GoPlay } from "react-icons/go";
import {
  FaTrophy,
  FaRegMoneyBillAlt,
  FaBookOpen,
  FaCar,
  FaCarSide,
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {  FaCommentSms } from "react-icons/fa6";
import DrivenForm from "../../components/forms/DrivenForm";

export default function DrivingLessons() {

  return (
    <div className={styles.DrivingLessons}>
      <section className={styles.imageSection}>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>AWARD-WINNING DRIVING LESSONS</h1>
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
              <img src={Lplateimg} alt="LogoImg" />
              <GoPlay className={styles.playIcon} />
            </a>
          </div>
        </div>
      </section>

      {/* --------------------------------Drivin Section------------------------------------------- */}
    <DrivenForm/>
      {/* ////////////////////////////Features section //////////////////////// */}
      <section className="features">
        <div className="mainFeatures">
          <div className="column">
            <span>
              <FaTrophy id="featuresIcon" />
            </span>

            <h3>Award Winning Service</h3>
            <p>
              In 2021 and 2022, SmartLearner Driving School was voted the best
              regional driving school in the UK!
            </p>
          </div>
          <div className="column">
            <span>
              <FaRegMoneyBillAlt id="featuresIcon" />
            </span>

            <h3>Affordable Prices</h3>
            <p>
              We are always looking at industry prices to ensure our learners
              get the best-valued lessons!
            </p>
          </div>
          <div className="column">
            <span>
              <FaCommentSms id="featuresIcon" />
            </span>

            <h3>Automated SMS Alerts</h3>
            <p>
              You will receive SMS alerts on your phone to remind you of your
              lesson.
            </p>
          </div>
          <div className="column">
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
      {/* ///////////////////////////call us on ////////////////////// */}
      <section className="callUsSection">
        <div style={{ textAlign: "center" }}>
          <p>Call us on:</p>
          <p>
            <a
              href="tel:+02475092784"
              style={{
                textDecoration: "none",

                color: "#ed2025",

                fontWeight: "bolder",
              }}
            >
              <strong>02475 092 784</strong>
            </a>
            <br />
            to book!
          </p>
        </div>
      </section>
      {/* ////////////////////// video play ///////////////////// */}
      <section className="videoContainer">
        <div className="mainVideoContainer">
          <div className="imageContainer">
            <a
              href="your-video-url.mp4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Lplateimg} alt="Lplateimg" />
              <GoPlay className="playIcon" />
            </a>
          </div>
          <div className="infoDetailsContainer">
            <div className="ulfeature">
              <ul>
                <li>
                  <span>
                    <FaCar />
                  </span>
                  <p>72% of pupils pass first time.</p>
                </li>
                <li>
                  <span>
                    <FaCar />
                  </span>
                  <p>
                    Manual, automatic, and intensive driving courses to suit
                    your availability.
                  </p>
                </li>
                <li>
                  <span>
                    <FaCar />
                  </span>
                  <p>
                    Manual, automatic, and intensive driving courses to suit
                    your availability.
                  </p>
                </li>
                <li>
                  <span>
                    <FaCar />
                  </span>
                  <p>
                    All instructors are qualified coaches and extensively
                    trained in-house.
                  </p>
                </li>
                <li>
                  <span>
                    <FaCar />
                  </span>
                  <p>
                    All instructors have undergone safeguarding training, and
                    are DBS approved.
                  </p>
                </li>
                <li>
                  <span>
                    <FaCar />
                  </span>
                  <p>
                    Unique learning plans, SMS lesson reminders, and FREE online
                    training materials.
                  </p>
                </li>
                {/* Add more list items as needed */}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*/////////////////////////////////////////// Youtube video section/////////////////////////////////////// */}
      <section className={styles.videoSection}>
        <div className={styles.videoSectionleft}>
          <h1>Driving Lessons with SmartLearner</h1>
          <p>
            SmartLearner Driving School is a local driving school that provides
            both manual and automatic driving lessons. We provide high-quality
            driving lessons for affordable prices in and around the West
            Midlands, and Warwickshire.
          </p>
          <p>
            SmartLearner has a fleet of highly-qualified local driving
            instructors, who are ready to provide driving lessons to help you
            prepare for your practical driving test. All of our instructors are
            DVSA-approved and trained to provide amazing customer service, and
            make driving lessons both informative and fun.
          </p>
          <p>
            SmartLearner Driving School offers a range of custom lesson packages
            for both experienced and novice drivers. Driving lessons with us can
            start from as low as £16 per hour if you are a beginner!
          </p>
        </div>
        <div className={styles.videoSectionright}>
          <div className={styles.videoContainer}>
            {/* YouTube video container */}
            {/* Replace 'your_video_id' with the actual ID of your YouTube video */}
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/your_video_id`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

        {/* /////////////////////// why choose us container/////////////////////// */}
        <section className="chooseUsContainer">
        <h4>why choose Smartlearner</h4>
        <hr />
        <div className="chooseUsMainContainer">
          <div className="chooseUsimageContainer">
            <a
              href="your-video-url.mp4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={leftCarimg} alt="Lplateimg" />
              <GoPlay className="playIcon" />
            </a>
          </div>
          <div className="chooseDetailsContainer">
            <div className="ulchooseDetails">
              <p>
                We are the highest-rated and fast-growing independent driving
                school in the West Midlands. We offer everything you could ever
                need to get yourself on the road. We take into consideration
                your availability, requirements, lesson location, and anything
                else you may require. We then choose the perfect instructor for
                you.
              </p>
              <p>
                We even offer 1-2-1 theory and simulator training with a tutor
                for those who feel they may need additional support to pass
                their exams. So, forget the rest and learn with the best! Call
                us today on 02475 092 784 to get yourself booked in.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* ////////////////////////////Book now section ///////////////////// */}
        <section className="sectionContainer">
        <div className="iconDiv">
          <FaCarSide className="iconCar" />
        </div>
        <div className="headingDiv">
          <h2>Book Your Driving Lessons</h2>
        </div>
        <div className="buttonDiv">
          <a href="tel:+123456789">
            <button id="buttonDiv">Call Us</button>
          </a>
        </div>
        <div className="paragraphsDiv">
          <p>Lines open Monday to Friday, 9:00AM to 7:00PM Weekends 10:00AM to 4:00PM</p>
        </div>
      </section>

{/* ////////////////////////////Comperison container ///////////////////////// */}
<section className={styles.comparisonSection}>
<h4>Choose Your Area</h4>
<div className={styles.comparisonContainer}>
 
      <div className={styles.manualContainer}>
       
        <div>
        <img src={manualDrivingImg} alt="Manual Driving" className={styles.manualImage} />
          <h1>Manual Driving Lessons</h1>
          <p>Whilst automatic vehicles are becoming more popular throughout the world, the majority of vehicles in the UK (75%) are still manual. This ultimately makes manual cars more affordable to purchase, insure, and service.</p>
          <p>If you pass in a manual car you can switch to an automatic car without the need to sit another driving test. This means you’re not limited to one transmission.</p>
          <p>One of the perks of choosing manual is that you have more control over the car itself. Want to shift from third gear straight to fifth? No problem! </p>
          <p>On average manual cars are also more fuel efficient then automatic cars, but this largely depends on who is driving the car and how they are driving it.</p>
          <p>For some drivers, it just feels “right” to change gears manually. For most drivers, old habits die hard, and there is a certain level of enjoyment to be had when shifting gears, which is probably why the change has been slower in the UK compared to other countries.</p>

        </div>
      </div>
      <div className={styles.comparison}>
        <h2>Vs.</h2>
      </div>
      <div className={styles.automaticContainer}>
        
        <div>
        <img src={automaticDrivingImg} alt="Automated Driving" className={styles.automaticImage} />
          <h1>Automatic Driving Lessons</h1>
          <p>Automatic vehicles are becoming more common. In places like America over 95% of all cars on the road are automatic! There is no doubt that as time goes on that automatic transmission is going to become the norm across the globe.</p>
          <p>Jump into an automatic car and the first thing you will realise is that it is much easier to drive. Automatic cars don’t have a clutch, or standard gears. Simply put it into drive and you are good to go!</p>
          <p>Automatic cars excel in slow-moving or stop-start traffic. This is because there is no stress of switching gears or finding the biting point. This makes for a much smoother and overall more pleasant drive.</p>
          <p>If you sat your driving exam in an automatic car, you are not able to then drive a manual car without sitting a manual driving test. </p>
        </div>
      </div>
      </div>
    </section>


            {/* ///////////////////////////Gift voucher section///////////////////// */}
            <section className="giftVoucherSection">
        <div className="giftVoucher">
          <div className="giftVoucherImageDiv">
            <img
              src={giftVoucherImage}
              alt="Image"
              className="giftVoucherImage"
            />
          </div>
          <div className="giftVoucherDetails">
            <h1>Gift vouchers for all occasions.</h1>
            <p>
              Does your loved one have a Birthday coming up? Maybe you are
              struggling for a last minute Christmas present?{" "}
            </p>
            <p>
              To receive a gift voucher via email, make a purchase, and let us
              know that you would like a gift voucher to be created in your
              order note, and the occasion.
            </p>
            <p>You will then receive a call to confirm your purchase.</p>
          </div>
        </div>
      </section>

      {/* /////////////////// Reviews section /////////////////*/}

 <section className={styles.facebookReviewsSection}>
        
        <div className={styles.facebookReviewsContainer}>
        <h4 id={styles.heading1}>Our Reviews</h4>
        <hr />
          <div className={styles.reviewsList}>

          </div>
          <div className={styles.followUsLinks}>
            <h4>Follow us!</h4>
            <hr />
            <div className={styles.socialFollowIcons}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook id={styles.FollowIcons} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram id={styles.FollowIcons}  />
              </a>
              <a
                href="https://www.snapchat.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSnapchat id={styles.FollowIcons}  />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter id={styles.FollowIcons}  />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube id={styles.FollowIcons}  />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

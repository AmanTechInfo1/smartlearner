// import React from 'react'
import CallBackForm from "../../components/forms/CallBackForm";
import BookTestImg from "../../assets/images/booktest.jpg";
import styles from "./TheoryPortal.module.css";
import CountDown from "./countdown/CountDown";
import {
  FaArrowRight,
  FaExclamation,
  FaAngry,
  FaCar,
  FaRuler,
  FaExclamationTriangle,
  FaWalking,
  FaTruck,
  FaCarCrash,
  FaCarSide,
  FaRoad,
  FaMapSigns,
  FaIdCard,
  FaUserInjured,
  FaBoxOpen,
  FaVideo,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import Quiz from "../../components/quizes/Quizes";


export default function TheoryPortal() {
  return (
    <div>
      <section className={styles.imageSection}>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>Theory Portal</h1>
              <hr />
            </div>

            <div className={styles.heading2}>
              <p>
                Its time to begin your next steps towards passing your theory
                test!
              </p>
            </div>
          </div>
          <div className={styles.video}>
            <CountDown />
          </div>
        </div>
      </section>
      {/* //////////////////////////////////// */}
      <section className={styles.theoryTestSectionQ}>
        <div className={styles.theoryTestDivQ}>
          <h2>What is a theory test?</h2>
          <hr />
          <p>
            The theory test is made up of two sections, multiple-choice and
            hazard perception. You will sit both parts on the same day, first
            the multiple choice section, followed by the hazard perception. You
            must pass both parts of the test to receive your certificate.
          </p>
        </div>
      </section>
      {/* //////////////////////////////////// */}

      <section className={styles.choicesSectionTheoryPortal}>
        <div className={styles.choicesDivTheoryPortal}>
          <div className={styles.ChoicesContentContainer}>
            <h2>Multiple-choice</h2>
            <hr />
            <p>
              You have 57 minutes to answer 50 multiple-choice questions. Before
              the test starts you’ll get instructions on how the test works &
              the chance to do some practice questions to get used to the
              screens.
            </p>
            <p>
              A question and 4 possible answers appear on a screen. You have to
              select the right answer. However, the final three questions of the
              exam will be about a short video. It will show a normal driving
              situation the video is silent and you can watch it as many times
              as you like during the test.
            </p>
            <p>
              You can finish the multiple-choice questions part when you’ve
              answered all of the questions. You do not have to use the full 57
              minutes. You can have a break of up to 3 minutes before the hazard
              perception test starts.
            </p>
          </div>
          <div className={styles.ChoicesContentContainer}>
            <h2>Hazard Perception</h2>
            <hr />
            <p>
              Before you start the hazard perception test, you’ll be shown a
              video about how it works. You’ll then watch 14 video clips. The
              clips will show everyday road scenes and contain at least one
              ‘developing hazard’.
            </p>
            <p>
              One of the clips will feature 2 developing hazards in the same
              clip. You get points for spotting the developing hazards as soon
              as they start to happen.
            </p>
            <p>
              You can score up to 5 points for each developing hazard. To get a
              high score, click the mouse as soon as you see the hazard starting
              to develop. You do not lose points if you click and get it wrong.
              However, you will not score anything if you click continuously or
              in a pattern. Beware, you only get one attempt at each clip. You
              cannot review or change your responses.
            </p>
          </div>
        </div>
      </section>
      {/* //////////////////////////////////////////////////////// */}

      <section className={styles.theoryPortalYoutubeVideosSection}>
        <div className={styles.theoryPortalYoutubeVideosDiv}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7womeV0brCo?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fsmartlearner.com&widgetid=1"
            title="YouTube video player"
          ></iframe>
        </div>
      </section>
      {/* ////////////////////////////////////////////// */}

      <section className={styles.thMultipleChoiceSection}>
        <div className={styles.thMultipleChioceHeader}>
          <h2>Practice for Multiple-choice</h2>
          <p>
            Click the ICONS to go through to each of the topic pages and begin
            practicing!
          </p>
        </div>
        <div className={styles.thMultipleChoiceListContainer}>
          <section className={styles.features}>
            <div className={styles.mainFeatures}>
              <div className={styles.column}>
                <a href="https://thehonesttruth.co.uk/pages/distractions">
                  <span>
                    <FaExclamation id={styles.featuresIcon} />
                  </span>
                  <h3>Alertness</h3>
                </a>
                <p>Topic 1</p>
              </div>
              <div className={styles.column}>
                <a href="https://thehonesttruth.co.uk/pages/drink-driving">
                  <span>
                    <FaAngry id={styles.featuresIcon} />
                  </span>
                  <h3>Attitude</h3>
                </a>
                <p>Topic 2</p>
              </div>
              <div className={styles.column}>
                <a href="https://thehonesttruth.co.uk/pages/drugs">
                  <span>
                    <FaCar id={styles.featuresIcon} />
                  </span>
                  <h3>Safety & Your Vehicle</h3>
                </a>
                <p>Topic 3</p>
              </div>
              <div className={styles.column}>
                <a href="https://thehonesttruth.co.uk/pages/insurance">
                  <span>
                    <FaRuler id={styles.featuresIcon} />
                  </span>
                  <h3>Safety Margins</h3>
                </a>
                <p>Topic 4</p>
              </div>
              <div className={styles.column}>
                <a href="https://thehonesttruth.co.uk/pages/using-a-mobile-phone">
                  <span>
                    <FaExclamationTriangle id={styles.featuresIcon} />
                  </span>
                  <h3>Hazard Awareness</h3>
                </a>
                <p>Topic 5</p>
              </div>
              <div className={styles.column}>
                <a href="https://thehonesttruth.co.uk/pages/seatbelts">
                  <span>
                    <FaWalking id={styles.featuresIcon} />
                  </span>
                  <h3>Vulnerable Road Users</h3>
                </a>
                <p>Topic 6</p>
              </div>
              <div className={styles.column}>
                <a href="https://thehonesttruth.co.uk/pages/showing-off">
                  <span>
                    <FaCarCrash id={styles.featuresIcon} />
                  </span>
                  <h3>Other Vehicles</h3>
                </a>
                <p>Topic 7</p>
              </div>
              <div className={styles.column}>
                <a href="https://thehonesttruth.co.uk/pages/speeding">
                  <span>
                    <FaTruck id={styles.featuresIcon} />
                  </span>
                  <h3>Vehicle Handling</h3>
                </a>
                <p>Topic 8</p>
              </div>
              <div className={styles.column}>
                <a href="https://thehonesttruth.co.uk/pages/tiredness">
                  <span>
                    <FaCarSide id={styles.featuresIcon} />
                  </span>
                  <h3>Motorway Rules</h3>
                </a>
                <p>Topic 9</p>
              </div>
              <div className={styles.column}>
                <a href="https://thehonesttruth.co.uk/pages/passing">
                  <span>
                    <FaRoad id={styles.featuresIcon} />
                  </span>
                  <h3>Rules Of The Road</h3>
                </a>
                <p>Topic 10</p>
              </div>
              <div className={styles.column}>
                <a href="https://thehonesttruth.co.uk/pages/passing">
                  <span>
                    <FaMapSigns id={styles.featuresIcon} />
                  </span>
                  <h3>Road And Traffic Signs</h3>
                </a>
                <p>Topic 11</p>
              </div>
              <div className={styles.column}>
                <a href="https://thehonesttruth.co.uk/pages/passing">
                  <span>
                    <FaIdCard id={styles.featuresIcon} />
                  </span>
                  <h3>Essential Documents</h3>
                </a>
                <p>Topic 12</p>
              </div>
              <div className={styles.column}>
                <a href="https://thehonesttruth.co.uk/pages/passing">
                  <span>
                    <FaUserInjured id={styles.featuresIcon} />
                  </span>
                  <h3>Incidents & Accidents</h3>
                </a>
                <p>Topic 13</p>
              </div>
              <div className={styles.column}>
                <a href="https://thehonesttruth.co.uk/pages/passing">
                  <span>
                    <FaBoxOpen id={styles.featuresIcon} />
                  </span>
                  <h3>Vehicle Loading</h3>
                </a>
                <p>Topic 14</p>
              </div>
              <div className={styles.column}>
                <a href="https://thehonesttruth.co.uk/pages/passing">
                  <span>
                    <FaVideo id={styles.featuresIcon} />
                  </span>
                  <h3>Video clips</h3>
                </a>
                <p>Topic 15</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* ////////////////////////////////////////////////////////////// */}
      <section className={styles.thchoiceListSection}>
        <section className={styles.features}>
          <div className={styles.mainFeatures}>
            <div className={styles.column}>
              <Link to="/hazard-perception">
                <span>
                  <FaBoxOpen id={styles.featuresIcon} />
                </span>
                <h3>Hazard perception</h3>
              </Link>
            </div>
            <div className={styles.column}>
              <Link to="/mcq-Part1">
                {" "}
                <span>
                  <FaBoxOpen id={styles.featuresIcon} />
                </span>
                <h3>Mock test</h3>
              </Link>
            </div>
          </div>
        </section>
      </section>

      {/* //////////////////////////////////////////////////////////////// */}

      <section className={styles.thAdditionalSupportSection}>
        <div className={styles.thAdditionalSupportHeader}>
          <h2>Additional Support</h2>
        </div>
        <div className={styles.thAdditionalSupportformAndMap}>
          <div className={styles.thAdditionalSupport2ndHeader}>
            <h2>1-2-1 Theory Support</h2>
            <hr />
            <p>
              SmartLearner Driving School offers online 1-2-1 theory support
              with experienced and dedicated tutors to help you with your
              driving theory test practice. Our tutors will do an assessment to
              gauge your current ability and from there they will craft a unique
              learning plan. They will ensure you cover all of the topics and
              questions that can come up in your theory exam. This will make
              sure that you pass your theory test with ease.
            </p>
            <p>
              We are dedicated to ensure superb customer service and understand
              that every theory pupil has a unique learning style. When you
              choose SmartLearner Theory Support you have full control over the
              time and duration of your theory lessons. At SmartLearner we use
              official DVSA materials to ensure that you are learning from
              relevant and current sources.
            </p>
          </div>
          <div className={styles.callBackFormAndMap}>
            <div className={styles.formmap}>
              <CallBackForm />
            </div>

            <div className={styles.formmap}>
              {/* Embed your map here, such as Google Maps iframe */}
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.5678!2dLongitude!3dLatitude!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU4JzM4LjQiTiA3wrAzMCc0My44Ilc!5e0!3m2!1sen!2sus!4v1587265813612!5m2!1sen!2sus"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* ///////////////////////////////////////////////////// */}
      <section>
        <div className={styles.thAdditionalSupportHeader}>
          <h2>Book Your Theory</h2>
        </div>
        {/* <section>
         <Quiz/>
        </section> */}
      </section>

      {/* ///////////////////////////////////////////////////////////// */}
      <section className={styles.thFooterSection}>
        <div className={styles.thFooterDiv}>
          <h2>Are You Ready?</h2>
          <hr />
          <a href="https://www.gov.uk/book-theory-test">
            <img src={BookTestImg} alt="BookTestImg" />
          </a>
        </div>
      </section>

      {/* //////////////////////////////////////////////////// */}
    </div>
  );
}

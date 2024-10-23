import React, { useEffect } from "react";
import styles from "../AdiPartOne.module.css";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import adiImg from "../../../assets/images/finished-road-map-1.png";
import { IoMdArrowDropright } from "react-icons/io";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import smartlearnerLogo from "../../../assets/images/White-Logo-Fixed-1024x174.png";
import { Link } from "react-router-dom";
import {
  getMyDashboard,
  fetchUserSubscriptions,
} from "../../../redux/features/subscriptionSlice";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector
import { useNavigate } from "react-router-dom";

export default function AdiPartTwo() {
  const videoURLs = [
    "https://www.youtube.com/embed/YVYQNgPfPwI",
    "https://www.youtube.com/embed/jy-UXGIVBXg",
    "https://www.youtube.com/embed/ep0syyvToOk",
    "https://www.youtube.com/embed/u20fhAqd1cI",
    "https://www.youtube.com/embed/WMBziTxVZV4",
    "https://www.youtube.com/embed/zhVgLEA3Mrc",
    "https://www.youtube.com/embed/u8skr_74ip8",
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.auth.userDetails);
  const userSubscription = useSelector(
    (state) => state.subscription.userSubscription
  );

  useEffect(() => {
    if (!userDetails || Object.keys(userDetails).length === 0) {
      navigate("/login"); // Redirect to login if user is not logged in
    } else if (userDetails.role === "admin") {
      // Allow admin to access the portal
      return;
    } else if (userDetails.role === "theorylearner") {
      return;
    }
    else {
      // User is not admin, check for subscription
      dispatch(fetchUserSubscriptions()).then(() => {
        if (!userSubscription || !userSubscription.active) {
          // Redirect to subscription page if no active subscription
          navigate("/part-two-subscription");
        }
      });
    }
  }, [userDetails, userSubscription, dispatch, navigate]);

  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection}>
          <div className={styles.opicity}></div>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <p>
                  Congratulations on passing your part 1 ADI test.{" "}
                  <span>
                    It’s now time for part 2 – Professional Driving Test.
                  </span>
                </p>
              </div>

              <div className={styles.heading2}>
                <h2>
                  ADI - <span>Part 2 Training</span>
                </h2>
              </div>
              <div className={styles.alertBtn}>
              <Link to="/Contact-Us" style={{textDecoration:"none"}}>
                {" "}
                <button id={styles.btn}>Contact Us</button>
              </Link>
              </div>
            </div>
          </div>
        </section>

        {/* //////////////////////////////////////////////////////// */}
        <section>
          <img src={adiImg} alt="adiImg" />
        </section>

        {/* ///////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            ADI Part 2 <span>- Driving Ability</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="400"
                    height="226"
                    src="https://www.youtube.com/embed/FHPKcu3X1ro"
                    title="Road Safety: Joining the Motorway"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    You can{" "}
                    <a href="https://www.gov.uk/book-driving-test">
                      <span>
                        book your approved driving instructor (ADI) part 2 test
                      </span>
                    </a>{" "}
                    when you’ve passed your{" "}
                    <a href="https://www.gov.uk/adi-part-1-test">
                      <span> ADI part 1 test</span>
                    </a>
                    It’s the second of 3 tests you have to pass to qualify as an
                    . It’s a test of your driving ability. To pass the test you
                    must be able to:
                  </p>
                  <p>Drive safely in different road and traffic conditions.</p>
                  <p>
                    Show that you know{" "}
                    <a href="https://www.gov.uk/guidance/the-highway-code">
                      <span> The Highway Code</span>
                    </a>{" "}
                    by the way you drive.
                  </p>

                  <p>
                    The{" "}
                    <a href="https://www.gov.uk/guidance/national-standard-for-driving-cars-and-light-vans-category-b">
                      <span> national standard for driving cars</span>
                    </a>{" "}
                    tells you everything you must be able to do to pass the
                    test. You should only take your test when you can do
                    everything without instruction.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* //////////////////////////////////////////// */}

        {/* ////////////////////////////////////// */}

        <section className={styles.AdiPtwoYoutubeSec}>
          <div className={styles.AdiPartTwoYtV}>
            <section>
              <h2>
                The DL25C Form & <span>Common Mistakes</span>
              </h2>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="100%"
                    height="500px"
                    src="https://www.youtube.com/embed/wCvK-mPfuJY"
                    title="ADI Part 2 - Mock Test"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
                </div>
              </div>
            </section>
            <section>
              <h2>
                ADI Part 2 <span>Mock Test Example</span>
              </h2>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="100%"
                    height="500px"
                    src="https://www.youtube.com/embed/5VrL6ZLZp9M"
                    title="ADI Part 2 - Mock Test"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* ////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Manoeuvres <span>Video Materials</span>{" "}
          </h2>
          <div className={styles.AdiParttwoVideo}>
            <div className={styles.hazardVideosGridContainer}>
              {videoURLs.map((url, index) => (
                <div className={styles.hazardGridItem} key={index}>
                  <iframe
                    width="200"
                    height="120"
                    src={url}
                    allowFullScreen></iframe>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Manoeuvres <span>Visual Materials</span>
          </h2>
          <p style={{ textAlign: "center" }}>
            Includes Emergency Stop, Forward/Reverse Bay Park, Parallel Park,
            and Park on the right. To download Click Here.
          </p>
        </section>
        {/* ////////////////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Car <span>Requirements</span>
          </h2>
          <p style={{ textAlign: "center" }}>
            When you take a test, your car must:
          </p>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>• Be taxed.</p>
              </li>
              <li>
                <p>
                  • Be insured for a driving test (check with your insurance
                  company).
                </p>
              </li>
              <li>
                <p>
                  • Be roadworthy and have a current MOT (if it’s over 3 years
                  old).
                </p>
              </li>
              <li>
                <p>
                  • Be a saloon, hatchback or estate car in good working
                  condition - you cannot use a convertible.
                </p>
              </li>
              <li>
                <p>
                  • Have no warning lights showing, for example, the airbag
                  warning light.
                </p>
              </li>
              <li>
                <p>
                  • Have no tyre damage and the legal tread depth on each tyre -
                  you cannot have a space-saver spare tyre fitted.
                </p>
              </li>
              <li>
                <p>
                  • Be smoke-free - this means you cannot smoke in it just
                  before or during the test.
                </p>
              </li>
              <li>
                <p>
                  • Be able to reach at least 62 mph and have an mph
                  speedometer.
                </p>
              </li>
              <li>
                <p>
                  • Have 4 wheels and a maximum authorised mass (MAM) of no more
                  than 3,500 kg.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* ////////////////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Car <span>Requirements</span>
          </h2>
          <p style={{ textAlign: "center" }}>
            When you take a test, your car must:
          </p>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.bgColorList33}>
              <ul type="none">
                <li>
                  <p>• Be taxed.</p>
                </li>
                <li>
                  <p>
                    • Be insured for a driving test (check with your insurance
                    company).
                  </p>
                </li>
                <li>
                  <p>
                    • Be roadworthy and have a current MOT (if it’s over 3 years
                    old).
                  </p>
                </li>
                <li>
                  <p>
                    • Be a saloon, hatchback or estate car in good working
                    condition - you cannot use a convertible.
                  </p>
                </li>
                <li>
                  <p>
                    • Have no warning lights showing, for example, the airbag
                    warning light.
                  </p>
                </li>
                <li>
                  <p>
                    • Have no tyre damage and the legal tread depth on each tyre
                    - you cannot have a space-saver spare tyre fitted.
                  </p>
                </li>
                <li>
                  <p>
                    • Be smoke-free - this means you cannot smoke in it just
                    before or during the test.
                  </p>
                </li>
                <li>
                  <p>
                    • Be able to reach at least 62 mph and have an mph
                    speedometer.
                  </p>
                </li>
                <li>
                  <p>
                    • Have 4 wheels and a maximum authorised mass (MAM) of no
                    more than 3,500 kg.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* ////////////////////////////////////// */}
        <section style={{ textAlign: "center" }}>
          {/* <h2 style={{color:"red",fontSize:'3rem'}}>Test - Part 2 - Summary</h2> */}
        </section>
        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h2>Start Quiz</h2>
            <h3>All Questions</h3>
            <p>
              Click the start quiz button to start the quiz and See your result
            </p>
            <Link to="/takequizCatName/adi--part-2">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
        {/* ////////////////////////////////////////////////// */}
      </div>
      <section className={styles.adiPortalFooterSection}>
        <div className={styles.adiPortalFooterInnerContainer}>
          <img src={smartlearnerLogo} alt="smartlearnerLogo" />
          <div className={styles.adiFooterContactInfo}>
            {" "}
            <a href="tel:+4402475092784">
              <FaPhone id={styles.adiFaIcons} /> +44-02475092784
            </a>
            <br />
            <a href="mailto:admin@smartlearner.com">
              <FaEnvelope id={styles.adiFaIcons} /> admin@smartlearner.com
            </a>
          </div>
          <div className={styles.adiFooterAddressInfo}>
            <FaLocationDot id={styles.adiFaIcons} />
            <p>4 Wheel Wright Building, Hen Lane, Coventry, CV6 4LB</p>
          </div>
          <div className={styles.adiSocialIcons}>
            <a href="https://www.facebook.com/smartlearnerdrivingschool">
              <FaFacebook id={styles.adiSocialFaIcons} />
            </a>
            <a href="https://twitter.com/smartlearner">
              <FaTwitter id={styles.adiSocialFaIcons} />
            </a>
            <a href="https://www.instagram.com/smartlearnerdrivingschool/">
              <FaInstagram id={styles.adiSocialFaIcons} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

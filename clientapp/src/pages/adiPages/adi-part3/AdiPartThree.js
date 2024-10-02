import React, { useEffect } from "react";
import styles from "../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import scoreCard from "../../../assets/images/scroreCardImg.png";
import testRoutesImg1 from "../../../assets/images/Screenshot-2023-02-09-110346-150x150.jpg";
import testRoutesImg2 from "../../../assets/images/Screenshot-2023-02-09-110505-150x150.jpg";
import { Link } from "react-router-dom";
import {
  getMyDashboard,
  fetchUserSubscriptions,
} from "../../../redux/features/subscriptionSlice";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector
import { useNavigate } from "react-router-dom";

export default function AdiPartThree() {
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
    } else {
      // User is not admin, check for subscription
      dispatch(fetchUserSubscriptions()).then(() => {
        if (!userSubscription || !userSubscription.active) {
          // Redirect to subscription page if no active subscription
          navigate("/part-three-subscription");
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
                <h1>
                  Forget the rest, <span> learn with the best!</span>
                </h1>
              </div>

              <div className={styles.heading2}>
                <h2>
                  AWARD-WINNING <span>DRIVING LESSONS</span>
                </h2>
              </div>
              <div className={styles.alertBtn}>
                <a style={{ textDecoration: "none" }} href="tel:+4402475092784">
                  <button>Contact Us</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ///////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Introduction <span>To Part 3</span>
          </h2>
          <hr style={{ opacity: "1", border: "1px solid black" }}></hr>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="500px"
                    height="500px"
                    src="https://www.youtube.com/embed/dq_oRHXWQMo"
                    title="Tommy - Part 3 - Introduction"
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
                    • A Driver and Vehicle Standards Agency examiner will watch
                    you give a client-centred driving lesson lasting about an
                    hour to one of your pupils.
                  </p>
                </li>
                <li>
                  <p>
                    • Your pupil can be a learner or a full licence holder. They
                    can’t be an ADI or someone else who is preparing to take the
                    ADI part 3 test.
                  </p>
                </li>
                <li>
                  <p>
                    • You can take your trainer or mentor with you, but they
                    can’t take part in the lesson.
                  </p>
                </li>
                <li>
                  <p>
                    • The examiner will look for evidence that you meet the{" "}
                    <a
                      href="https://www.gov.uk/government/publications/national-standard-for-driver-and-rider-training"
                      style={{ color: "red", textDecoration: "none" }}>
                      national standard for driver and rider training.
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    • The 17 areas of competence are listed in the{" "}
                    <a
                      href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1122510/adi-part-3-test-report-form.pdf"
                      style={{ color: "red", textDecoration: "none" }}>
                      {" "}
                      ADI part 3 test
                    </a>{" "}
                    report form, which the examiner will fill in at the end of
                    your test.
                  </p>
                </li>
                <li>
                  <p>
                    • You’ll get a score from 0 to 3 for each of the 17
                    competencies, which are added up to work out if you’ve
                    passed the test, and what your grade will be..
                  </p>
                </li>
                <h2
                  style={{
                    color: "red",
                    fontSize: "2.5rem",
                    textAlign: "center",
                  }}>
                  Test result
                </h2>
                <li>
                  <p>
                    After you give the lesson, the examiner will discuss your
                    performance and give you your result. You’ll get your grade,
                    along with your completed ADI part 3 test report form.{" "}
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* /////////////////////////////////////////// */}

        {/* ///////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Test <span>Score</span>{" "}
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                src={scoreCard}
                alt="scoreCard"
                style={{ backgroundColor: "white" }}
              />{" "}
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    0-30 GRADE FAIL: Your performance is unsatisfactory, and you
                    won’t join the ADI register.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    31-42 GRADE B: You’ll be allowed to join the ADI register.
                  </p>
                </li>
                <li>
                  {" "}
                  <p>
                    43-51 GRADE A: You have shown a high standard of instruction
                    and you’ll be allowed to join the ADI register.{" "}
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  When you pass the ADI part 3 test you can apply for your first
                  ADI badge.
                </p>
              </li>
              <li>
                <p>
                  Your pupil can be a learner or a full licence holder. They
                  can’t be an ADI or someone else who is preparing to take the
                  ADI part 3 test.
                </p>
              </li>
              <li>
                <p>
                  The examiner’s supervisor may attend the test too. They will
                  be watching the examiner’s performance only and won’t have
                  comment or assess how you’re tested or affect your result.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* //////////////////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2> Cost</h2>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  You have 3 attempts at this test. Should you fail the 3rd
                  attempt, you will have to wait for the 2 year period to end
                  (that started when you passed your part 1) and re sit part 1.
                </p>
              </li>
              <li>
                <p>You must pay the DVSA £111 for this test.</p>
              </li>
              <li>
                <p>
                  Once you have qualified, you can apply for your ‘ADI lience’
                  (otherwise known as your ‘Green Badge’). You must pay the DVSA
                  £300 for this badge.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ///////////////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Driving <span>Test Routes</span>
          </h2>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  Recently the Driver and Vehicle Standards Agency (DVSA)
                  stopped publishing the driving test routes for each test
                  centre to prevent test candidates from practicing the routes
                  that the examiners take you on.
                </p>
              </li>
              <li>
                <p>
                  The driving test routes may have altered in the mean-time,
                  although it is likely they are very similar if not identical.
                  Listed below are the driving test centre routes for areas you
                  may cover with your pupils.Recently the Driver and Vehicle
                  Standards Agency (DVSA) stopped publishing the driving test
                  routes for each test centre to prevent test candidates from
                  practicing the routes that the examiners take you on.
                </p>
              </li>
              <li>
                <p>
                  The driving test routes should be used for a guide only as
                  test routes are for the discretion of the test examiner and
                  may be subject to change.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* ////////////////////////////////////////////////////////////////////////// */}

        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.RouteSection}>
          <div className={styles.allRoutes}>
            <div className={styles.routes}>
              <img src={testRoutesImg1} alt="testRoutesImg" />
              <a href="https://smartlearner.com/wp-content/uploads/2023/02/CoventryDrivingTestRoutes.pdf">
                Coventry Driving Test Routes
              </a>
            </div>
            <div className={styles.routes}>
              <img src={testRoutesImg2} alt="testRoutesImg" />
              <a href="https://smartlearner.com/wp-content/uploads/2023/02/NuneatonDrivingTestRoutes.pdf">
                Nuneaton Driving Test Routes
              </a>
            </div>
            <div className={styles.routes}>
              <img src={testRoutesImg1} alt="testRoutesImg" />
              <a href="https://smartlearner.com/wp-content/uploads/2023/02/Rugby-Driving-Test-Routes.pdf">
                Rugby Driving Test Routes
              </a>
            </div>
            <div className={styles.routes}>
              <img src={testRoutesImg2} alt="testRoutesImg" />
              <a href="https://smartlearner.com/wp-content/uploads/2023/02/HinckleyDrivingTest-Routes.pdf">
                Hinckley Driving Test Routes
              </a>
            </div>
            <div className={styles.routes}>
              <img src={testRoutesImg1} alt="testRoutesImg" />
              <a href="https://smartlearner.com/wp-content/uploads/2023/02/WarwickDrivingTestRoutes.pdf">
                Warwick Driving Test Routes
              </a>
            </div>
          </div>
        </section>
        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <p>
              By clicking the button below you will be taken to different
              reading materials that will support you in passing your part 3.
            </p>
          </div>

          <div id={styles.btnDiv}>
            <Link to="/gde-matrix">
              <button id={styles.hazzardBtn}>GDE Matrix</button>
            </Link>
            <Link to="/standards-check-sheet">
              <button id={styles.hazzardBtn}>Standards Check Sheet</button>
            </Link>
            <Link to="/learning-styles">
              <button id={styles.hazzardBtn}>Learning Style/Vark/Client</button>
            </Link>
            <Link to="/smart-targets">
              <button id={styles.hazzardBtn}>Smart Targets</button>
            </Link>
            <Link to="/lesson-plannings">
              <button id={styles.hazzardBtn}>Lesson Plannings</button>
            </Link>
            <Link to="/risk-management">
              <button id={styles.hazzardBtn}>Risk Managements</button>
            </Link>
            <Link to="/question-techniques">
              <button id={styles.hazzardBtn}>Questioning Techniques</button>
            </Link>
            <Link to="/instruction-and-feedback">
              <button id={styles.hazzardBtn}>
                Giving Instruction/Feedback
              </button>
            </Link>
            <Link to="/lesson-plan-layouts">
              <button id={styles.hazzardBtn}>
                Lesson/Pupil Learning Plans
              </button>
            </Link>
            <Link to="/training-videos">
              <button id={styles.hazzardBtn}>Training Videos</button>
            </Link>
            <Link to="/starting-on-road">
              <button id={styles.hazzardBtn}>Starting On Road</button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

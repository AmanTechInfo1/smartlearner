import React from "react";
import styles from "./css/VehicleHandel.module.css";

import { IoMdArrowDropright } from "react-icons/io";
import handlngIconImg from "../../../assets/images/handling-icon-300x300.png";
import { FaCheckCircle } from "react-icons/fa";
import speedBreaker from "../../../assets/images/speedBreaker.jpeg";
import { Link } from "react-router-dom";

export default function VehicleHandling() {
  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection}>
          <div className={styles.opicity}></div>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>
                  Forget the rest, <span>learn with the best!</span>
                </h1>
              </div>

              <div className={styles.heading2}>
                <h2>
                  Vehicle <span>Handling</span>
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

        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            What is <span>Vehicle handling ?</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={handlngIconImg} alt="handlngIconImg" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    The 8th topic from the theory test is road conditions and
                    vehicle handling. When you’re driving, there are various
                    situations in which your ability to control your vehicle can
                    be affected—from a change in weather conditions, to the time
                    of day, to the surface of the road. You need to be able to
                    identify these conditions quickly, in order to safely adjust
                    your driving style accordingly.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section className={styles.hazardTestWorkListDiv}>
            <ul type="none">
              <h2 className={styles.hazardTestH23}>
                In this section, <span>you’ll learn how to maintain</span> Safe
                Driving Standards By Learning:
              </h2>
            </ul>
          </section>
          <section className={styles.bgColorList2}>
            <ul type="none">
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>How to keep control of your vehicle</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  About different weather conditions and how they affect your
                  driving
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>About road surfaces and traffic-calming measures</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>How to drive at night safely</p>
              </li>
            </ul>
          </section>
        </section>

        {/* /////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Controlling <span>Your Vehicle</span>
          </h2>
          <hr style={{ opacity: "1", border: "2px solid purple" }}></hr>
          <section className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  Learning how to have full control of your vehicle at all times
                  is a fundamental part of learning to drive safely. Your
                  control of the car is reduced by keeping the clutch down or in
                  neutral for any length of time (otherwise known as
                  ‘coasting’). This is dangerous when steering and braking,
                  particularly if you’re traveling downhill, as your vehicle
                  will speed up when there’s no engine braking.
                </p>
              </li>
              <li>
                <p>
                  Your vehicle’s engine is a perfect tool to help you control
                  your speed: For example, if you select a lower gear when
                  you’re driving down a steep hill, the engine will act as a
                  brake. Doing this helps avoid your brakes overheating which
                  can lead to them becoming less effective.
                </p>
              </li>
              <li>
                <p>
                  It’s important to note that, when you’re driving up a steep
                  hill, the engine has to work harder. You should change down to
                  a lower gear as this will help prevent the engine from
                  struggling as it delivers the power needed to climb the hill.
                  If you take your foot off the accelerator to reduce speed,
                  you’ll slow down sooner than usual. You must be aware of this
                  and use sufficient power to ensure you don’t roll down the
                  hill. On single-track roads, be aware of the limited space
                  available. If you see a vehicle coming towards you, pull into
                  (or opposite) a passing place. Always match your driving to
                  the road and weather conditions.
                </p>
              </li>
            </ul>
          </section>
        </section>

        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <section className={styles.hazardTestWorkListDiv}>
            <ul type="none">
              <h2>
                Your stopping distance will be{" "}
                <span>Affected by several factors, including:</span>
              </h2>
            </ul>
          </section>
          <section className={styles.bgColorList2}>
            <ul type="none" style={{ textAlign: "center" }}>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>How to keep control of your vehicle</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" /> <p>Your speed</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>The conditions of your tyres</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" /> <p>The road surface</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" /> <p>The weather</p>
              </li>
            </ul>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <section className={styles.hazardTestWorkListDiv}>
            <ul type="none">
              <h2>
                Driving in different <span>Weather Conditions</span>
              </h2>
            </ul>
          </section>
          <section className={styles.theoryPortalYoutubeVideosSection}>
            <div className={styles.theoryPortalYoutubeVideosDiv}>
              <iframe
                style={{
                  borderRadius: "30px",
                  boxShadow: "0 3px 10px rgba(255, 255, 255, 0.644)",
                }}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/3GEgB-xui0M"
                title="Tyre Safety Month 2014 Aquaplaning animation - TyreSafe"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            </div>
          </section>
        </section>
        {/* ////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Traffic <span>Calming Measures</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={speedBreaker} alt="speedBreaker" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    Traffic calming tends to be found in residential areas and
                    is used to make the roads safer for vulnerable users by
                    reducing speed. One of the most common measures is road
                    humps (sometimes called speed humps) but chicanes, speed
                    tables, and road narrowing are also used.
                  </p>
                </li>
                <li>
                  <p>
                    You will be warned of traffic calming measures by road
                    signs, but other systems such as rumble devices (raised
                    markings across the road) may be used to warn you of a
                    hazard ahead, such as a roundabout, which requires you to
                    reduce your speed.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* ///////////////////////////////////////////////////////////// */}

        <section className={styles.mockTestContainerSection}>
          <div className={styles.mockTestHeadingContainerDIv}>
            <h2 style={{ textAlign: "center", color: "red" }}>Test YourSelf</h2>
          </div>
          <div className={styles.quizStartDiv}>
            <section className={styles.startQuizSection}>
              <h2>Start Quiz</h2>
              <h3>All Questions</h3>
              <p>
                Click the start quiz button to start the quiz and See your
                result
              </p>
              <Link to="/takequizCatName/Vehicle-Handling">
                {" "}
                <button>Start Quiz</button>
              </Link>
            </section>
          </div>
        </section>
        {/* //////////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}

import React from "react";
import styles from "./PracticeMultiple.module.css";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import handlngIconImg from "../../../assets/images/handling-icon-300x300.png";
import { FaCheckCircle } from "react-icons/fa";
import speedBreaker from "../../../assets/images/speedBreaker.jpeg";
import { Link } from "react-router-dom";

export default function VehicleHandling() {
  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section
          className={styles.imageSection}
          style={{ backgroundColor: "purple" }}
        >
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>Forget the rest, learn with the best!</h1>
              </div>

              <div className={styles.heading2}>
                <h2>Vehicle handling</h2>
              </div>
              <div className={styles.btn}>
                <a style={{ textDecoration: "none" }} href="tel:+4402475092784">
                  <button id={styles.btn}>Contact Us</button>
                </a>
              </div>
            </div>
            <div className={styles.video}>
              <img src={Lplateimg} alt="LogoImg" />
            </div>
          </div>
        </section>

        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          {/* <h2 style={{ textAlign: "center" }}>Examples of Trigger Scoring</h2> */}

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={handlngIconImg} alt="handlngIconImg" />
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h2 style={{ color: "purple", fontSize: "2rem" }}>
                  What is Vehicle handling ?
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
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
              <ul type="none">
                <h2 style={{ color: "purple" }}>
                  In this section, you’ll learn how to maintain safe driving
                  standards by learning:
                </h2>
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
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2 style={{ color: "purple", fontSize: "2rem" }}>
              Controlling your vehicle
            </h2>
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
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
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Your vehicle’s engine is a perfect tool to help you control
                  your speed: For example, if you select a lower gear when
                  you’re driving down a steep hill, the engine will act as a
                  brake. Doing this helps avoid your brakes overheating which
                  can lead to them becoming less effective.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
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
            <ul type="none">
              <h2 style={{ color: "purple" }}>
                Your stopping distance will be affected by several factors,
                including:
              </h2>
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
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2 style={{ color: "purple", fontSize: "2rem" }}>
              Driving in different weather conditions
            </h2>

            <div className={styles.innerTheorySupportContent}>
              <div className={styles.theorySupportContentVideo}>
                <iframe
                  width="1180"
                  height="664"
                  src="https://www.youtube.com/embed/3GEgB-xui0M"
                  title="8 Driving Tips to Drive in Fog, Rain, or a Storm"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <img src={speedBreaker} alt="speedBreaker" />
            <h2 style={{ color: "purple", fontSize: "2rem" }}>
              Traffic Calming Measures
            </h2>

            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Traffic calming tends to be found in residential areas and is
                  used to make the roads safer for vulnerable users by reducing
                  speed. One of the most common measures is road humps
                  (sometimes called speed humps) but chicanes, speed tables, and
                  road narrowing are also used.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  You will be warned of traffic calming measures by road signs,
                  but other systems such as rumble devices (raised markings
                  across the road) may be used to warn you of a hazard ahead,
                  such as a roundabout, which requires you to reduce your speed.
                </p>
              </li>
            </ul>
          </div>
        </section>

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

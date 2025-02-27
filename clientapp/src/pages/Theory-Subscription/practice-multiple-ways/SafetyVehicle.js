import React, { useEffect } from "react";
import styles from "./css/SafetyVehicle.module.css";
import orangeSafety from "../../../assets/images/ORANGE-SAFETY.png";
import {
  FaGasPump,
  FaOilCan,
  FaBullhorn,
  FaCarBattery,
  FaLifeRing,
} from "react-icons/fa";

import routePlanning from "../../../assets/images/routesPlanning.jpg";
import vehicleS from "../../../assets/images/vehicalS.jpeg";
import parking from "../../../assets/images/parkingImg.jpg";
import enviromentIssue from "../../../assets/images/enviromentalIssueImg.jpg";
import GeneralIssue from "../../../assets/images/generalTips.jpg";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useRef } from "react";

import gsap from "gsap";
export default function SafetyVehicle() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Topic: Safety in"; // First part before "Driving"
    const secondPart = "   your vehicle";
    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);
    const secondLine = secondPart
      .split("")
      .map((char, index) => <span key={`second-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return (
      <>
        {firstLine}
        <br />
        {secondLine}
      </>
    );
  };

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

    // GSAP Timeline for the text animation
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

    tl.from(letters, {
      opacity: 0.6,
      y: 100,
      ease: "bounce.out", // Start from below
      stagger: 0.1, // Stagger the animation for each letter
      rotationX: 90, // Initial rotation effect
      transformOrigin: "bottom center", // Center for rotation
      scale: 0.5,
    })
      .to(letters, {
        scale: 1, // Scale to normal size
        opacity: 1, // Fade in to full opacity
        rotationX: 0, // Reset rotation
        y: 0, // Move to original position
        stagger: 0.1, // Slight stagger for each letter
        duration: 0.8, // Smooth transition duration
      })
      .to(letters, {
        color: "#fd9235", // Change text color to red
        rotationY: 360, // Apply rotation on the Y-axis
        stagger: 0.1,
        duration: 1, // Rotate each letter over 1 second
      })
      .to(letters, {
        scale: 1.2, // Slightly enlarge text
        opacity: 0.8, // Reduce opacity slightly
        rotationX: -10, // Slight tilt effect
        stagger: 0.1, // Stagger the scaling
        duration: 1, // Animation duration
      })
      .to(letters, {
        scale: 1, // Return to original scale
        opacity: 1, // Full opacity
        rotationX: 0, // Reset rotation
        color: "#04fad4", // Reset color to black
        stagger: 0.1, // Maintain stagger effect
        duration: 1, // Final duration
      })
      .to(letters, {
        rotation: 10, // Add shake effect
        x: -5, // Horizontal shake
        yoyo: true, // Yoyo effect for shake (goes back and forth)
        repeat: 2, // Repeat the shake twice
        duration: 0.1, // Short shake duration
        stagger: 0.05, // Stagger shake on each letter
      })
      .to(letters, {
        scale: 1.3, // Increase size slightly for bounce effect
        opacity: 1, // Ensure opacity stays full
        ease: "bounce.out", // Bounce easing for effect
        stagger: 0.05, // Stagger bounce
        duration: 1, // Bounce duration
      })
      .to(letters, {
        scale: 1, // Reset scale
        opacity: 1, // Reset opacity
        y: -30, // Vertical movement for final bounce
        duration: 0.5, // Short duration for final bounce
      })
      // Infinite color change with loop
      .to(letters, {
        color: "#ff54d7", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);

  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection}>
          <div className={styles.opicity}></div>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1 ref={textRef}>{splitText()}</h1>
              </div>

              <div className={styles.alertBtn}>
                <Link to="/Theory-Portal" style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>
                    <MdKeyboardDoubleArrowLeft /> Back
                  </button>
                </Link>
                <Link
                  to="/takequizCatName/Safety-and-Your-Vehicle"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Start Quiz</button>
                </Link>
                <Link to="/safety-margins" style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>
                    Next <MdKeyboardDoubleArrowRight />
                  </button>
                </Link>
              </div>
              {/* ////////////////////////////////////////////////////////////////////////////////// */}
            </div>
          </div>
        </section>

        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            What is safety <span>in your vehicle?</span>
          </h2>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={orangeSafety} alt="orangeSafety" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • The 3rd topic from the multiple-choice section of the
                    theory test is safety and your vehicle. While most of the
                    topics we’ve previously covered have focused on the rules of
                    the road, road safety and your overall attitude towards
                    driving, this one looks at how you need to maintain your
                    vehicle and why it’s your responsibility to do so. It also
                    covers other safety considerations that you need to think
                    about every time you get behind the wheel.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////// */}
        <section className={styles.thMultipleChoiceSection}>
          <div className={styles.thMultipleChioceHeader}>
            <h2 >
              Vehicle <span>Safety</span>{" "}
            </h2>
          </div>
          <div className={styles.thMultipleChoiceListContainer}>
            <section className={styles.features}>
              <div className={styles.mainFeatures}>
                <section className={styles.columns11}>
                  <div className={styles.column}>
                    <span>
                      <FaGasPump id={styles.featuresIcon} />
                    </span>
                    <h3>Fuel Consumption</h3>

                    <ul type="none">
                      <li>
                        <p>
                          • High fuel consumption can be caused by accelerating,
                          high speed driving, harsh braking and unnecessary
                          weight on the roof rack.
                        </p>
                      </li>
                      <li>
                        <p>
                          • Fuel consumption can be reduced by smooth driving,
                          lowering speed, proper maintenance of the vehicle and,
                          missing out some gears while driving.
                        </p>
                      </li>
                    </ul>
                  </div>
                </section>

                <div className={styles.column} id={styles.column}>
                  <span>
                    <FaOilCan id={styles.featuresIcon} />
                  </span>
                  <h3>Steering & Engine Oil</h3>

                  <ul type="none">
                    <li>
                      <p>•Heavy steering is caused by under-inflated tyres.</p>
                    </li>
                    <li>
                      <p>
                        • Do not turn the steering wheel when stationary as this
                        can damage the wheel itself and the tyres.
                      </p>
                    </li>
                    <li>
                      <p>
                        • Always check oil levels before a long journey and be
                        aware that too much oil can cause a leak.
                      </p>
                    </li>
                    <li>
                      <p>
                        • Dispose of old oil at a registered local authority
                        site.
                      </p>
                    </li>
                  </ul>
                </div>
                <section className={styles.columns22}>
                  <div className={styles.column}>
                    <span>
                      <FaBullhorn id={styles.featuresIcon} />
                    </span>
                    <h3>Horn, Suspension and the exhaust</h3>

                    <ul type="none">
                      <li>
                        <p>
                          • Horns must not be used in built-up areas between
                          11.30 pm and 7.00 am.
                        </p>
                      </li>
                      <li>
                        <p>
                          • If the car keeps bouncing when you press down on the
                          front wing, this means that the shock absorbers are
                          worn and need replacing.
                        </p>
                      </li>
                      <li>
                        <p>
                          • The catalytic converter is located on the exhaust
                          system and reduces toxic gas emissions.
                        </p>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </section>
        {/* ////////////////////////////////////////////////////////// */}
        <section className={styles.thMultipleChoiceSection}>
          <div className={styles.thMultipleChoiceListContainer}>
            <section className={styles.features}>
              <div className={styles.mainFeatures}>
                <section className={styles.columns1}>
                  <div className={styles.column}>
                    <span>
                      <FaLifeRing id={styles.featuresIcon} />
                    </span>
                    <h3>Tyres and Wheels</h3>

                    <ul type="none">
                      <li>
                        <p>
                          • Tyre pressures should be regularly checked when the
                          tyres are cold.
                        </p>
                      </li>
                      <li>
                        <p>
                          • Under-inflated tyres can lead to poor braking,
                          increased fuel consumption and heavy steering.
                        </p>
                      </li>
                      <li>
                        <p>
                          • Excessive and uneven tyre wear can be caused by a
                          defective braking or suspension system or poor wheel
                          alignment.
                        </p>
                      </li>
                      <li>
                        <p>
                          • The minimum tread depth must be 1.6 mm over ¾ of the
                          tread breadth.
                        </p>
                      </li>
                      <li>
                        <p>
                          • Tyres that have cuts in the side wall are illegal
                          and must be replaced.
                        </p>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className={styles.columns2}>
                  <div className={styles.column} id={styles.column}>
                    <span>
                      <FaCarBattery id={styles.featuresIcon} />
                    </span>
                    <h3>Batteries and General</h3>

                    <ul type="none">
                      <li>
                        <p>
                          • Most modern batteries are sealed and require no
                          maintenance. Old style batteries need topping up with
                          distilled water to just above the battery cell plates.
                        </p>
                      </li>
                      <li>
                        <p>
                          • Used batteries are toxic and should be taken to a
                          garage or local authority site.
                        </p>
                      </li>
                      <li>
                        <p>
                          • Headlights, seat belts and the windscreen must be
                          maintained in good condition by law.
                        </p>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <h1>
            {" "}
            Driver Behaviour <span>And The Environment</span>{" "}
          </h1>
          <div  id={styles.hazardTestWorkListSection}>
            {" "}
            <h3 >
              Route <span>Planning</span>
            </h3>{" "}
            <section className={styles.AdiParttwoDisplayFlex} id={styles.AdiParttwoDisplayFlex1}>
              <div className={styles.hazardTestWorkListDiv}>
                <img src={routePlanning} alt="routePlanning" />
              </div>
              <section className={styles.bgColorList}>
                <ul type="none">
                  <li>
                    <p>
                      • Allow plenty of time for your journey, avoiding busy
                      times if possible to avoid delays and help reduce
                      congestion.
                    </p>
                  </li>
                  <li>
                    <p>
                      • Study maps or an internet route planner, printing it out
                      if necessary and plan alternative routes in case of
                      unforeseen circumstances.
                    </p>
                  </li>
                </ul>
              </section>
            </section>
          </div>
        </section>

        {/* //////////////////////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}  id={styles.hazardTestWorkListSection}>
          <h3 className={styles.hazardTestH2}>
            Vehicle <span>Security</span>
          </h3>
          <section className={styles.AdiParttwoDisplayFlex} id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={vehicleS} alt="vehicleS" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • Remove valuables or lock them out of sight and install a
                    security coded radio.
                  </p>
                </li>
                <li>
                  <p>
                    • Park in a well-lit area or a secure car park and engage
                    the steering lock when parked.
                  </p>
                </li>
                <li>
                  <p>
                    • Install an immobiliser and etch the car number on the
                    windows.
                  </p>
                </li>
                <li>
                  <p>
                    • Lock the car and remove the key when parked and never
                    leave an unattended vehicle with the engine running.
                  </p>
                </li>
                <li>
                  <p>•Don’t leave vehicle documents in the car.</p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ///////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}  id={styles.hazardTestWorkListSection}>
          <h3 >Parking</h3>
          <section className={styles.AdiParttwoDisplayFlex} id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={parking} alt="running-men" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • Do not park where your vehicle will cause an obstruction
                    e.g. near a bus stop, on the brow of a hill or where the
                    curb is lowered for wheelchair users.
                  </p>
                </li>
                <li>
                  <p>
                    • Parking lights must be used if you are parking on a road
                    where the speed limit is more than 30 mph.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ///////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}  id={styles.hazardTestWorkListSection}>
          <h3 >
            Environmental <span>Issues</span>
          </h3>
          <section className={styles.AdiParttwoDisplayFlex} id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={enviromentIssue} alt="enviromentIssue" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • Road transport is responsible for 20% of all emissions,
                    causing air pollution, consumption of natural resources and
                    damage to buildings.
                  </p>
                </li>
                <li>
                  <p>
                    • Environmentally friendly vehicles can reduce noise
                    pollution, excessive traffic in towns and can be electricity
                    powered.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    • The MOT exhaust emission test helps protect the
                    environment.
                  </p>
                </li>
                <li>
                  <p>
                    • By reducing speed, servicing your vehicle properly, using
                    gentle acceleration and avoiding frequent, short trips, you
                    too can help the environment.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}  id={styles.hazardTestWorkListSection}>
          <h3>
            General <span>Tips</span>
          </h3>
          <section className={styles.AdiParttwoDisplayFlex} id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={GeneralIssue} alt="GeneralIssue" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • Many of the questions in the safety section require
                    answers that are governed by law and the regulations must be
                    learnt accordingly. You may also be asked about warning
                    lights on the dashboard panel, including when an indicator
                    is on, whether headlights should be dipped or on full beam
                    and the use of hazard lights.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>

        {/* ////////////////////////////////////////////////////////////// */}

        {/* //////////////////////////////////////////// */}
        {/* ////////////////////////////////////// */}
        <section className={styles.mockTestContainerSection}>
          <div className={styles.mockTestHeadingContainerDIv}>
            <h2 style={{ textAlign: "center", color: "red" }}>Test YourSelf</h2>
          </div>
          <div className={styles.quizStartDiv}>
            <section className={styles.startQuizSection}>
              <h2>Start Quiz</h2>
              <h3>All Questions</h3>
              <p>
                • Click the start quiz button to start the quiz and See your
                result
              </p>
              <Link to="/takequizCatName/Safety-and-Your-Vehicle">
                {" "}
                <button>Start Quiz</button>
              </Link>
            </section>
          </div>
        </section>

        {/* //////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}

import React from "react";
import styles from "./PracticeMultiple.module.css";
import orangeSafety from "../../../assets/images/ORANGE-SAFETY.png";
import {
  FaGasPump,
  FaOilCan,
  FaBullhorn,
  FaCarBattery,
  FaLifeRing,
} from "react-icons/fa";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import routePlanning from '../../../assets/images/routesPlanning.jpg'
import vehicleS from '../../../assets/images/vehicalS.jpeg'
import parking from '../../../assets/images/parkingImg.jpg'
import enviromentIssue from '../../../assets/images/enviromentalIssueImg.jpg'
import GeneralIssue from '../../../assets/images/generalTips.jpg'



export default function SafetyVehicle() {
  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection} style={{backgroundColor:'orange'}}>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>Forget the rest, learn with the best!</h1>
              </div>

              <div className={styles.heading2}>
                <h2>Safety in your vehicle</h2>
              </div>
              <div className={styles.btn}>
              <button id={styles.btn}>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="tel:02475092784"
                  >
                    Contact Us
                  </a>
                </button>
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
              <img src={orangeSafety} alt="orangeSafety" />
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h2 style={{ color: "orange" }}>
                  What is safety in your vehicle?
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    The 3rd topic from the multiple-choice section of the theory
                    test is safety and your vehicle. While most of the topics
                    we’ve previously covered have focused on the rules of the
                    road, road safety and your overall attitude towards driving,
                    this one looks at how you need to maintain your vehicle and
                    why it’s your responsibility to do so. It also covers other
                    safety considerations that you need to think about every
                    time you get behind the wheel.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////// */}
        <section className={styles.thMultipleChoiceSection}>
          <div className={styles.thMultipleChioceHeader}>
            <h2 style={{ color: "orange" }}>Vehicle Safety</h2>
          </div>
          <div className={styles.thMultipleChoiceListContainer}>
            <section className={styles.features}>
              <div className={styles.mainFeatures}>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaGasPump id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Fuel Consumption</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          High fuel consumption can be caused by accelerating,
                          high speed driving, harsh braking and unnecessary
                          weight on the roof rack.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Fuel consumption can be reduced by smooth driving,
                          lowering speed, proper maintenance of the vehicle and,
                          missing out some gears while driving.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaOilCan id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Steering & Engine Oil</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>Heavy steering is caused by under-inflated tyres.</p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Do not turn the steering wheel when stationary as this
                          can damage the wheel itself and the tyres.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Always check oil levels before a long journey and be
                          aware that too much oil can cause a leak.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Dispose of old oil at a registered local authority
                          site.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaBullhorn id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>
                    Horn, Suspension and the exhaust
                  </h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Horns must not be used in built-up areas between 11.30
                          pm and 7.00 am.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          If the car keeps bouncing when you press down on the
                          front wing, this means that the shock absorbers are
                          worn and need replacing.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          The catalytic converter is located on the exhaust
                          system and reduces toxic gas emissions.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* ////////////////////////////////////////////////////////// */}
        <section className={styles.thMultipleChoiceSection}>
          <div className={styles.thMultipleChioceHeader}>
            {/* <h2 style={{color:'orange'}}>Vehicle Safety</h2> */}
          </div>
          <div className={styles.thMultipleChoiceListContainer}>
            <section className={styles.features}>
              <div className={styles.mainFeatures}>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaLifeRing id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Tyres and Wheels</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Tyre pressures should be regularly checked when the
                          tyres are cold.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Under-inflated tyres can lead to poor braking,
                          increased fuel consumption and heavy steering.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Excessive and uneven tyre wear can be caused by a
                          defective braking or suspension system or poor wheel
                          alignment.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          The minimum tread depth must be 1.6 mm over ¾ of the
                          tread breadth.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Tyres that have cuts in the side wall are illegal and
                          must be replaced.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaCarBattery id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Batteries and General</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Most modern batteries are sealed and require no
                          maintenance. Old style batteries need topping up with
                          distilled water to just above the battery cell plates.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Used batteries are toxic and should be taken to a
                          garage or local authority site.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Headlights, seat belts and the windscreen must be
                          maintained in good condition by law.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <p
              style={{
                color: "orange",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              Driver Behaviour and the Environment
            </p>
            <h2 style={{ color: "Orange", fontSize: "2rem" }}>Route Planning</h2>
            <img src={routePlanning} alt="routePlanning" />
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Allow plenty of time for your journey, avoiding busy times if
                  possible to avoid delays and help reduce congestion.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Study maps or an internet route planner, printing it out if
                  necessary and plan alternative routes in case of unforeseen
                  circumstances.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2 style={{ color: "Orange", fontSize: "2rem" }}>Vehicle Security</h2>
            <img src={vehicleS} alt="vehicleS" />
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Remove valuables or lock them out of sight and install a
                  security coded radio.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Park in a well-lit area or a secure car park and engage the
                  steering lock when parked.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Install an immobiliser and etch the car number on the windows.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Lock the car and remove the key when parked and never leave an
                  unattended vehicle with the engine running.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>Don’t leave vehicle documents in the car.</p>
              </li>
            </ul>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2 style={{ color: "Orange", fontSize: "2rem" }}>Parking</h2>
            <img
              src={parking}
              alt="running-men"
              style={{ backgroundColor: "white" }}
            />
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Do not park where your vehicle will cause an obstruction e.g.
                  near a bus stop, on the brow of a hill or where the curb is
                  lowered for wheelchair users.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Parking lights must be used if you are parking on a road where
                  the speed limit is more than 30 mph.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* ////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2 style={{ color: "Orange", fontSize: "2rem" }}>
              Environmental Issues
            </h2>
            <img src={enviromentIssue} alt="enviromentIssue" />
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Road transport is responsible for 20% of all emissions,
                  causing air pollution, consumption of natural resources and
                  damage to buildings.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Environmentally friendly vehicles can reduce noise pollution,
                  excessive traffic in towns and can be electricity powered.{" "}
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  {" "}
                  The MOT exhaust emission test helps protect the environment.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  By reducing speed, servicing your vehicle properly, using
                  gentle acceleration and avoiding frequent, short trips, you
                  too can help the environment.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2 style={{ color: "Orange", fontSize: "2rem" }}>General Tips</h2>
            <img src={GeneralIssue} alt="GeneralIssue" />
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Many of the questions in the safety section require answers
                  that are governed by law and the regulations must be learnt
                  accordingly. You may also be asked about warning lights on the
                  dashboard panel, including when an indicator is on, whether
                  headlights should be dipped or on full beam and the use of
                  hazard lights.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* //////////////////////////////////////////// */}
       
        {/* //////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}

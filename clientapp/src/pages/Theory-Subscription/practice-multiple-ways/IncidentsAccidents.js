import React from "react";
import styles from "./css/IncidentsAccidents.module.css";

import {
  FaShoppingBag,
  FaExclamationTriangle,
  FaPhone,
  FaCheckCircle,
} from "react-icons/fa";
import incidentsImg from "../../../assets/images/incidents-pinjk.png";
import tyerBursting from "../../../assets/images/tyerBursting.jpg";
import temptation from "../../../assets/images/temptation.png";
import { Link } from "react-router-dom";

export default function IncidentsAccidents() {
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
                  Incidents & <span>Accidents</span>{" "}
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
          <h2>
            What are incidents <span>On The Road?</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={incidentsImg} alt="incidentsImg" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    The 13th topic from the multiple-choice section of the
                    theory test is incidents. Let’s face it, out of all of the
                    topics we’ve looked at so far, this has to be the most
                    straightforward. The roads can be an unpredictable and
                    dangerous place—accidents happen, unfortunately. That’s why
                    it’s important that you know how to respond to these
                    situations safely, from knowing how to report an incident to
                    safely carrying out first aid.
                  </p>
                </li>
                <p style={{ fontWeight: "700" }}>
                  If you’re involved in an accident that causes damage to
                  another person, vehicle, animal, or property, then you’re
                  legally required to stop and give your details to anyone who
                  might require them. This would include:
                </p>
                <li>
                  <p>
                    To identify your location by giving them the number of the
                    marker you’re calling from.
                  </p>
                </li>
                <li>
                  <p>
                    Whether or not you belong to a motoring organisation such as
                    AA.
                  </p>
                </li>
                <li>
                  <p>For details of yourself and your vehicle.</p>
                </li>
              </ul>
            </div>
          </section>
        </section>{" "}
        {/* //////////////////////////////////////////// */}
        <section style={{ backgroundColor: "red" }}>
          <div className="d-flex flex-column flex-md-row  p-4">
            <div className="w-100 w-md-50">
              <iframe
                width="540"
                height="304"
                src="https://www.youtube.com/embed/7FJV2eI2KD0"
                title="Warning lights on your car&#39;s dashboard - what do they mean?"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            </div>
            <div className="w-100 w-md-50 p-4">
              <h2 className="h2 font-weight-bold mb-2 text-warning">
                How to identify breakdowns before they happen
              </h2>
              <hr
                className="border-top border-light mb-4"
                style={{ opacity: "1" }}
              />
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2 gap-2">
                  <p className="text-warning fs-4">
                    A warning light on your instrument panel is often the first
                    sign that you have an issue with your vehicle. Sometimes
                    this can be something that you still have time to rectify
                    like your petrol running low or sometimes it is an urgent
                    issue that needs dealing with ASAP, such as failing breaks.
                    Use your judgement and if necessary, stop as soon as it is
                    safe to do so and check the problem. You should always check
                    out any strong smell of fuel. You should never ignore it,
                    instead stop and investigate as soon as you can do so
                    safely.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* ////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Tyres <span>bursting</span>
          </h2>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={tyerBursting} alt="bursting" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    A tyre bursting or getting a puncture while you’re driving
                    can feel very scary but you must remain calm, hold the
                    steering wheel firmly and pull up slowly or roll to a stop
                    at the side of the road. This will help protect you and
                    other road users.
                    <span>
                      A tyre blowing out when you’re travelling on the motorway
                      is even more alarming. If this or another emergency
                      situation happens while you’re on a motorway, you should
                      try to get onto the hard shoulder. Don’t use your mobile
                      phone, instead find your nearest emergency phone, using
                      the marker posts and call for help.
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    To identify your location by giving them the number of the
                    marker you’re calling from.
                  </p>
                </li>
                <li>
                  <p>
                    Whether or not you belong to a motoring organisation such as
                    AA.
                  </p>
                </li>
                <li>
                  <p>For details of yourself and your vehicle.</p>
                </li>
              </ul>
            </div>
          </section>
          <section className={styles.hazardTestH23}>
            <ul type="none">
              <h2>
                If you break down an <span>operator will ask you;</span>
              </h2>
            </ul>
          </section>
          <section className={styles.bgColorList2}>
            <ul type="none">
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  To identify your location by giving them the number of the
                  marker you’re calling from.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  Whether or not you belong to a motoring organisation such as
                  AA.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>For details of yourself and your vehicle</p>
              </li>
            </ul>
          </section>
        </section>{" "}
        {/* /////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Level <span>Crossings</span>{" "}
          </h2>
          <section className={styles.bgColorList33}>
            {" "}
            <p style={{ textAlign: "center" }}>
              If you break down on a level crossing, try not to panic. Instead;
              get everyone out of the vehicle and clear of the crossing quickly
              and calmly before calling the signal operator from the emergency
              phone provided. You should only move your vehicle if the operator
              tells you to do so.
            </p>
            <p style={{ textAlign: "center" }}>
              You must wait to cross a level crossing if the red signal is
              flashing, even if it continues to flash after a train has gone.
              This is because another train may be coming and you would be
              placing yourself, your passengers and people on the train in
              danger.
            </p>{" "}
          </section>
        </section>
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Understanding and avoiding <span>potential dangers;</span>
          </h2>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={temptation} alt="temptationImg" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    1. TEMPTATION - Don't be tempted to jump the lights or race
                    around the barriers - you’re putting lives at risk!
                  </p>
                </li>

                <li>
                  <p>
                    2. ASSUMPTION - Don’t assume there is only one train or use
                    previous experience to guess when the train is coming.
                    Trains can come from either direction at any time.
                  </p>
                </li>
                <li>
                  <p>
                    3. BLOCKED EXIT - It is surprisingly easy to end up stuck on
                    the tracks – make sure your exit is clear before driving
                    onto the crossing.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* //////////////////////////////////////////////////// */}
        <section className={styles.thMultipleChoiceSection}>
          <div className={styles.thMultipleChioceHeader}>
            <h2 className={styles.hazardTestH2}>
              Car <span>Signals</span>{" "}
            </h2>
          </div>
          <div className={styles.thMultipleChoiceListContainer}>
            <section className={styles.features}>
              <div className={styles.mainFeatures}>
                <div className={styles.column}>
                  <span>
                    <FaShoppingBag id={styles.featuresIcon} />
                  </span>
                  <h3>The Right Equiptment</h3>

                  <p>
                    Carrying the right equipment can help reduce the danger of a
                    situation. Carrying a first aid kit, a warning triangle and
                    a fire extinguisher in your car can be helpful for use in an
                    emergency as it could help to prevent or lessen an injury.
                    You shouldn’t take unnecessary risks; you may be able to put
                    out a small fire, for example, but stay safe and know your
                    limitations.
                  </p>
                </div>
                <div className={styles.column} id={styles.column}>
                  <span>
                    <FaExclamationTriangle id={styles.featuresIcon} />
                  </span>
                  <h3>Warning Triangle</h3>

                  <p>
                    A warning triangle can help alert other road users to danger
                    or hazards, if you broke down. If you have one you should
                    place it at least 45 metres (147 feet) behind your vehicle.
                    You should never place a warning triangle on a motorway as
                    passing traffic poses too much of a risk.
                  </p>
                </div>
                <div className={styles.column}>
                  <span>
                    <FaPhone id={styles.featuresIcon} />
                  </span>
                  <h3>Call For Help</h3>

                  <p>
                    Debris on the motorway can be extremely dangerous. If you
                    are driving on one and see something fall from another
                    vehicle, or if anything falls from your own you should never
                    attempt to retrieve yourself. Instead, you should stop at
                    the next emergency telephone and report the hazard to the
                    police.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* //////////////////////////////////// */}
        <section className={styles.mockTestContainerSection}>
          <div className={styles.mockTestHeadingContainerDIv}>
            <h2 style={{ textAlign: "center", color: "red" }}>Test Yourself</h2>
          </div>
          <div className={styles.quizStartDiv}>
            <section className={styles.startQuizSection}>
              <h2>Start Quiz</h2>
              <h3>All Questions</h3>
              <p>
                Click the start quiz button to start the quiz and See your
                result
              </p>
              <Link to="/takequizCatName/Incidents--Accidents-and-Emergencies">
                {" "}
                <button>Start Quiz</button>
              </Link>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

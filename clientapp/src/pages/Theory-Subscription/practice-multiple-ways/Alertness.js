import React from "react";
import styles from "./css/Alertness.module.css";

import { IoMdArrowDropright } from "react-icons/io";
import { FaMusic } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import fullbeam from "../../../assets/images/main-beam-headlights.jpg";
import deepedBeam from "../../../assets/images/Dipped-Beam-Headlight-Bulb.jpg";
import sidelight from "../../../assets/images/car-sidelights.jpg";
import foglight from "../../../assets/images/foglight.jpg";
import hazardlight from "../../../assets/images/hazardlight.jpg";
import { Link } from "react-router-dom";

export default function Alertness() {
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
                <h2>Alertness</h2>
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
          {/* <h2 style={{ textAlign: "center" }}>Examples of Trigger Scoring</h2> */}
          <h2 className={styles.hazardTestH2}>
            {" "}
            What is <span>alertness?</span>{" "}
          </h2>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <div className={styles.hazardTestWorkListDiv}>
                  <div className={styles.theorySupportContentVideo}>
                    <iframe
                      width="610"
                      height="400"
                      src="https://www.youtube.com/embed/QoeSNbQJkTQ"
                      title="End Distracted Driving - Share this video and help make our roads safer"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen></iframe>
                  </div>
                </div>
                <section className={styles.alternessLists}>
                  <li id={styles.alertnessL1}>
                    <h3>1.</h3>
                    <p>
                      The first topic from the theory test is alertness. This
                      refers to how alert a driver is whilst behind the wheel.
                      The road can be an unpredictable place, so it’s important
                      that a driver does not get distracted by things such as:
                      mobile phones and music, is prepared for any potential
                      hazard, and, follows road signs and markings correctly.
                    </p>
                  </li>
                  <li id={styles.alertnessL2}>
                    <h3>2.</h3>
                    <p>
                      So, in this section, we have broken the content down into
                      various sections in order to make revision for the topic
                      easier. Additionally, it will also serve as a good way to
                      apply the knowledge to your own driving.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////// */}
        <section className={styles.thMultipleChoiceSection}>
          <div className={styles.thMultipleChioceHeader}>
            <h2 className={styles.hazardTestH2}>
              Avoid <span>Distractions!</span>
            </h2>
          </div>
          <div className={styles.thMultipleChoiceListContainer}>
            <section className={styles.features}>
              <div className={styles.mainFeatures}>
                <div className={styles.column}>
                  <span>
                    <FaMusic id={styles.featuresIcon} />
                  </span>
                  <h3>Radio</h3>

                  <p>
                    Adjusting the radio is one of the most common forms of
                    distracted driving. At any given time, more than 600,000
                    drivers are manipulating electronic devices, like radios,
                    while driving, according to The National Highway Traffic
                    Safety Administration.
                  </p>
                </div>
                <div className={styles.column} id={styles.column}>
                  <span>
                    <FaLocationDot id={styles.featuresIcon} />
                  </span>
                  <h3>Sat Nav</h3>

                  <p>
                    Vehicle navigation systems can be useful when driving on
                    unfamiliar routes. However, they can also distract you and
                    cause you to lose control if you try to adjust them while
                    driving. Park up in a convenient and safe place before
                    adjusting them.
                  </p>
                </div>

                <div className={styles.column}>
                  <span>
                    <FaMobile id={styles.featuresIcon} />
                  </span>
                  <h3>Mobile</h3>

                  <p>
                    TUsing mobile phones can cause drivers to take their eyes
                    off the road, their hands off the steering wheel, and their
                    minds off the road and the surrounding situation. Studies
                    suggest that drivers using a mobile phone are approximately
                    four times more likely to be involved in a crash than a
                    driver who does not use a phone while driving.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* //////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Your <span>Responsibility</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h2>
                  Focus is <span>key.</span>
                </h2>
                <section id={styles.resLists1}>
                  {" "}
                  <li>
                    <h3>1.</h3>
                    <p>
                      If you’re on the road for a long period of time, you’ll
                      need to take precautions to avoid feeling sleepy—any lapse
                      in judgement could be catastrophic. This means either
                      winding your window down to let in a fresh supply of air
                      or taking a breather at the next available rest stop. If
                      you’re taking a road trip or any long journey, plan your
                      route and implement frequent rest stops to make sure you
                      don’t get too fatigued. It is usually recommended you take
                      at least a 15 minute break after every 2 hours of driving.
                    </p>
                  </li>
                  <li>
                    <h3>2.</h3>
                    <p>
                      It’s also your responsibility to avoid things that can
                      affect your concentration and reaction time on the road,
                      such as alcohol and drugs. You should also be aware that
                      some medication can negatively affect your ability to
                      control your vehicle, so always read the label and speak
                      to your doctor beforehand.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h2>
                  {" "}
                  Be <span>aware.</span>
                </h2>
                <section id={styles.resLists2}>
                  <li>
                    <h3>1.</h3>
                    <p>
                      You need to be alert to what’s going on around you at all
                      times. This means that you need to check your car mirrors
                      regularly- it is recommended you glance at your mirrors
                      every 6 seconds to keep yourself up-to-date with your
                      surroundings and the traffic. You also need to be aware of
                      any potential blind spots, e.g. the area near the
                      windscreen pillar. Before you proceed with any manoeuvre,
                      you need to use the Mirrors, Signal, and Manoeuvre (MSM)
                      routine.
                    </p>
                  </li>
                  <li>
                    <h3>2.</h3>
                    <p>
                      If your view is ever blocked, e.g. if you’re exiting a
                      closed junction, you’ll need to exercise caution and move
                      slowly until you can see properly. Similarly, if you’re
                      attempting a manoeuvre but haven’t got a full view of the
                      area around you, ask someone to guide you.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h2>
                  Be <span>prepared.</span>
                </h2>
                <section id={styles.resLists1}>
                  <li>
                    <p>
                      • Road signs and markings are there for a reason. If
                      you’ve spotted a give way sign, or a warning about changes
                      to the speed limit, you should prepare by slowing down.
                      Don’t leave things to the last second. It’s the same as
                      when you’re approaching a set of traffic lights—if they’ve
                      been on green for some time, you know that they’re likely
                      to switch to red, which means you need to slow down
                      immediately.
                    </p>
                  </li>
                  <li>
                    <p>
                      • You’ve also got to prepare for how your ability to act
                      will be affected by changes in road conditions such as bad
                      weather, heavy traffic, and unfamiliar routes.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <h2>
                {" "}
                Overtake with <span>caution!</span>
              </h2>
              <ul type="none">
                <section id={styles.resLists2}>
                  <li>
                    <p>
                      • When it comes to overtaking other vehicles, it’s vital
                      that you look at the road ahead before you do
                      anything—even if you’re just overtaking a stationary
                      vehicle. Make sure that there aren’t any oncoming
                      vehicles, pedestrians or road signs that tell you not to
                      overtake. You need to be sure that you’ll have plenty of
                      time to complete the manoeuvre, and that is legal to do
                      so. Therefore, you will want to avoid overtaking;
                    </p>
                  </li>
                  <li>
                    <p>
                      • When the road starts to narrow, limiting the amount of
                      space you have to overtake.
                    </p>
                  </li>
                  <li>
                    <p>
                      • When you can’t fully see the road ahead, e.g., at a bend
                      or dip in the road.
                    </p>
                  </li>
                  <li>
                    <p>
                      • Always make sure to check your centre mirror and right/
                      left mirror before overtaking to ensure that no other
                      vehicles are attempting to over take you, emerge etc.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
          </section>
        </section>
        {/* //////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2} id={styles.h2heddings}>
            Using the <span>appropriate lights. </span>
          </h2>
          <p style={{ textAlign: "center", marginBottom: "2rem" }}>
            {" "}
            If you’re driving at night or in bad weather, you’ll need to make
            sure you’re using your car lights properly. Take care when following
            large vehicles to, you’ll need to fall back to ensure they’re able
            to see you in their mirrors properly.
          </p>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <img src={sidelight} alt="sidelight" />
                <h2>Sidelights</h2>
                <section id={styles.resLists12}>
                  <li>
                    <p>
                      • You should use your sidelights if you park at night on a
                      road where the speed limit is greater than 30mph.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <img src={deepedBeam} alt="deepedBeam" />
                <h2>
                  <span>Dipped Headlights</span>
                </h2>
                <section id={styles.resLists21}>
                  <li>
                    <p>
                      • Dipped lights are the brightest lights your car has that
                      won’t dazzle other road users.
                    </p>
                  </li>
                  <li>
                    <p>
                      • Dipped lights should always be used when visibility is
                      reduced, when it is raining, and when it is beginning to
                      get darker/cloudier.
                    </p>
                  </li>
                  <li>
                    <p>
                      • Note: You should use dipped headlights at dusk,
                      night-time, or in bad weather.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <img src={fullbeam} alt="fullbeam" />
                <h2>Full-beam</h2>
                <section id={styles.resLists12}>
                  <li>
                    <p>
                      • You should only use full-beam headlights on unlit
                      stretches of road at night.
                    </p>
                  </li>
                  <li>
                    <p>
                      • Note: When meeting oncoming traffic (including cyclists
                      or pedestrians), following another vehicle, or driving on
                      bends, you must turn off your full-beam headlights as they
                      can often dazzle other road users and cause an accident.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
          </section>
        </section>

        {/* /////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Using the <span>appropriate lights.</span>
          </h2>
          <p style={{ textAlign: "center", marginBottom: "2rem" }}>
            {" "}
            If you’re driving at night or in bad weather, you’ll need to make
            sure you’re using your car lights properly. Take care when following
            large vehicles to, you’ll need to fall back to ensure they’re able
            to see you in their mirrors properly.
          </p>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <img src={foglight} alt="foglight" />
                <h2>
                  Fog <span>Lights</span>
                </h2>
                <section id={styles.resLists1}>
                  <li>
                    <p>
                      • You should only use your fog lights when your visibility
                      is reduced to 100 meters (328 feet) or less – the
                      equivalent of a football pitch.
                    </p>
                  </li>
                  <li>
                    <p>
                      • If you use it when you can see further than the
                      recommended distance, you could put other drivers at risk.
                    </p>
                  </li>
                  <li>
                    <p>
                      • Note: You should also be cautious as rear fog light can
                      often be confused with brake lights as they are both red.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <img src={hazardlight} alt="hazardlight" />
                <h2>
                  Hazard <span>Lights</span>
                </h2>
                <section id={styles.resLists2}>
                  <li>
                    <p>
                      • You may use your hazard warning lights if your vehicle
                      is stationary to warn other road users that it is causing
                      a temporary traffic obstruction. You may have broken down,
                      had an accident, run out of fuel, or been forced to stop
                      by an obstruction in the road.
                    </p>
                  </li>
                  <li>
                    <p>
                      • Note: You may also use them on motorways to warn traffic
                      behind you of danger ahead.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
          </section>
        </section>
        {/* ///////////////////////////////////////// */}
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
              <Link to="/takequizCatName/Alertness-quiz">
                {" "}
                <button>Start Quiz</button>
              </Link>
            </section>
          </div>
        </section>

        {/* //////////////////////////////////////// */}
      </div>
    </div>
  );
}

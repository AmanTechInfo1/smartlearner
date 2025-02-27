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
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function IncidentsAccidents() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Topic: Incidents &"; // First part before "Driving"
    const secondPart = "Accidents";
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
                  to="/takequizCatName/Incidents--Accidents-and-Emergencies"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Start Quiz</button>
                </Link>
                <Link to="/vehicle-loading" style={{ textDecoration: "none" }}>
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
            What are incidents <span>On The Road?</span>
          </h2>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex}>
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
        <section
          style={{ background: "linear-gradient(135deg, #ff0055, #ff5e00)" }}>
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
              <h2 className="h2 font-weight-bold mb-2">
                How to identify breakdowns before they happen
              </h2>
              <hr
                style={{
                  opacity: "1",
                  border: "2px solid #01cfbe",
                  maxWidth: "700px",
                  margin: "1rem 0px",
                }}
              />
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2 gap-2">
                  <p className="fs-5">
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
          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex}>
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
              <h1>
                If you break down an <span>operator will ask you;</span>
              </h1>
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
          <section className={styles.hazardTestH23}>
            <ul type="none">
              <h1>
                Level <span>Crossings</span>{" "}
              </h1>
            </ul>
          </section>

          <section className={styles.bgColorList2}>
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
          <h1>
            Understanding and avoiding <span>potential dangers;</span>
          </h1>
          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex}>
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
                  <h3>The Right Equipment</h3>

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

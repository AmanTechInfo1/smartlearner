import React from "react";
import styles from "./css/OtherTypes.module.css";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import largeVehicleJunction from "../../../assets/images/truck-oncoming-trasffic.jpg";
import largeVehicle from "../../../assets/images/behindLargeVehicle.jpg";
import trams from "../../../assets/images/trams.jpg";
import busses from "../../../assets/images/London-bus.jpg";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import towingcars from "../../../assets/images/tick-green.jpg";
import sideWinds from "../../../assets/images/side-Winds.jpeg";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function OtherVehicle() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = " Topic: Other Types"; // First part before "Driving"
    const secondPart = "Of Vehicles";
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
                  to="/takequizCatName/Other-Types-of-Vehicles"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Start Quiz</button>
                </Link>
                <Link to="/vehicle-handling" style={{ textDecoration: "none" }}>
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
          <h1>Large Vehicles at Junctions/Roundabouts</h1>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={largeVehicleJunction} alt="largeVehicleJunction" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    The 7th topic is Other Types of Vehicles. Large vehicles
                    often need to take unorthodox paths at junctions/roundabouts
                    because of their size.
                  </p>
                </li>
                <li>
                  <p>
                    For example, it’s not uncommon to see a large truck indicate
                    left but position to the right. They do this to make it
                    easier for them to turn. If you see a truck turning in front
                    of you you should always leave plenty of room to allow them
                    to turn safely.
                  </p>
                </li>
                <li>
                  <p>
                    Large vehicles can also hide overtaking traffic so always be
                    extra cautious when pulling out at junctions when large
                    vehicles are oncoming. Remember larger vehicles mean larger
                    hazards!
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* //////////////////////////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3>
            When behind <span>Large vehicles</span>
          </h3>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={largeVehicle} alt="largeVehicle" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    You must stay well behind a large vehicle as because of the
                    size they often obstruct your view of the road. It’s
                    advisable to leave extra room between your vehicle and
                    theirs as it allows you to see more clearly what is up
                    ahead.
                  </p>
                </li>
                <li>
                  <p>
                    Please remember that before you overtake a larger vehicle
                    you need a clear view. This is because of their length they
                    are longer they take more time to pass.
                  </p>
                </li>
                <li>
                  <p>
                    Beware of surface spray coming from large vehicles when
                    driving behind them on a wet road. If it’s affecting your
                    view drop back.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* ////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Public <span>Transport</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div
              className={styles.hazardTestWorkListDiv}
              id={styles.hazardTestWorkListDiv12}>
              <ul type="none">
                <div className={styles.hazardTestWorkListDiv}>
                  <img src={trams} alt="trams" />
                </div>
                <h4>Trams</h4>
                <section id={styles.resLists1}>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      Are eco friendly because they are powered by electricity.
                    </p>
                  </li>
                  <li>
                    <FaTimesCircle id="listrightIcon" />{" "}
                    <p>
                      Their rails pose threats to cyclists as their wheels could
                      get stuck.
                    </p>
                  </li>
                  <li>
                    <FaTimesCircle id="listrightIcon" />{" "}
                    <p>Cannot steer to avoid obstacles.</p>
                  </li>
                </section>
              </ul>
            </div>
            <div
              className={styles.hazardTestWorkListDiv}
              id={styles.hazardTestWorkListDiv123}>
              <ul type="none">
                <div className={styles.hazardTestWorkListDiv}>
                  <img src={busses} alt="busses" />
                </div>
                <h4>
                  <span>Buses</span>
                </h4>
                <section id={styles.resLists2}>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      If safe, you should should give way to buses looking to
                      move off.
                    </p>
                  </li>
                  <li>
                    <FaTimesCircle id="listrightIcon" />{" "}
                    <p>
                      When overtaking a stopped bus be aware of pedestrians
                      leaving the bus, as they may potentially try crossing
                      infront of the bus.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
          </section>
        </section>

        {/* ////////////////////////////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3 className={styles.hazardTestH2}>
            Towing a <span>Caravan</span>
          </h3>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={towingcars} alt="towingcars" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    When towing a caravan it is advisable to use an
                    extended-side arm mirror. This is because towing a large
                    trailer or caravan can greatly reduce your view of the road
                    behind. By using an extended-arm side mirror so that you can
                    see clearly behind and down both sides of the caravan, or
                    trailer.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* ////////////////////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3>Sidewinds</h3>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={sideWinds} alt="sideWinds" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    High-sided vehicles are most affected by windy weather, but
                    strong gusts can also blow a car, cyclist, motorcyclist or
                    horse rider off course. This can happen on open stretches of
                    road exposed to strong crosswinds, or when passing bridges
                    or gaps in hedges.
                  </p>
                </li>
                <li>
                  <p>
                    In very windy weather your vehicle may be affected by
                    turbulence created by large vehicles. Motorcyclists are
                    particularly affected, so keep well back from them when they
                    are overtaking a high-sided vehicle.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////////// */}

        {/* ////////////////////////////////////////////// */}

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
              <Link to="/takequizCatName/Other-Types-of-Vehicles">
                {" "}
                <button>Start Quiz</button>
              </Link>
            </section>
          </div>
        </section>
        {/* ////////////////// */}
      </div>
    </div>
  );
}

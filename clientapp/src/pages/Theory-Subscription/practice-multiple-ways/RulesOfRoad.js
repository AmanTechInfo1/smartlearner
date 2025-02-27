import React from "react";
import styles from "./css/RulesRoads.module.css";

import { FaCheckCircle } from "react-icons/fa";
import listImg from "../../../assets/images/handleiding-300x300.png";
import boxJunction from "../../../assets/images/boxJunction.jpg";
import cycleLane from "../../../assets/images/cycle-lanes.jpg";
import levelCrossing from "../../../assets/images/levelCrossing.jpg";
import Pedestrian from "../../../assets/images/padestrienCrossing.jpg";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RulesOfRoad() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = " Topic: Rules of "; // First part before "Driving"
    const secondPart = "The Road";
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
                  to="takequizCatName/Rules-of-the-Road"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Start Quiz</button>
                </Link>
                <Link
                  to="/road-and-traffic-signs"
                  style={{ textDecoration: "none" }}>
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
            What are the <span>Rules Of The Road?</span>
          </h2>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={listImg} alt="ListImg" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    The 10th topic from the multiple-choice section of the
                    theory test is rules of the road. As you’d probably expect
                    from the name, this is an important topic. In fact, it
                    probably encompasses most of the knowledge that you will
                    need when you finally get behind the wheel, including speed
                    limits, designated lanes, positioning on the road and, much
                    more.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* ///////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>General Rules Of The Road</h2>
          <p id={styles.hazardTestH2para}>
            Here are some basic rules you should be following when driving on a
            public road.
          </p>
          <hr
            style={{
              opacity: "1",
              border: "2px solid rgb(235, 4, 93)",
              margin: "1rem auto",
              maxWidth: "700px",
            }}></hr>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>You may drive over a footpath to get to a property.</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>No-one has priority at unmarked crossroads.</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  If you are approaching a junction and you realise you are in
                  the wrong lane, you cannot change lanes and must carry on.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>No stopping at any time in clearways.</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  No stopping in urban clearways except to pick up and put down
                  passengers.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* ////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Key <span>Terms</span>
          </h2>
        </section>
        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3> Box Junction</h3>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={boxJunction} alt="boxJunction" />
            </div>

            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>Only enter when your exit road is clear.</p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    If turning right, you may wait in the box if oncoming
                    traffic is stopping you from turning right.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3>Cycle Lane</h3>
          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={cycleLane} alt="cycleLane" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    You are not allowed to drive in a cycle lane marked with a
                    solid white line.
                  </p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    A broken white line indicates that you may drive or park in
                    the cycle lane if unavoidable.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3>Level Crossings</h3>
          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={levelCrossing} alt="motorwayLogo" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    If the train has passed but the lights keep flashing, you
                    must continue waiting.
                  </p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    If the lights come on and the bell rings when you are
                    already on the crossing, keep going until clear.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3>Pedestrian Crossings</h3>
          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={Pedestrian} alt="motorwayLogo" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    Zebra crossing: although the actual rule is that you are
                    only obliged to stop once a pedestrian is on the crossing,
                    if you see someone waiting to cross, you should stop and
                    allow them to do so.
                  </p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    Toucan crossing: be aware that cyclists as well as
                    pedestrians may cross.
                  </p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    Pelican crossing: give way to pedestrians still on the
                    crossing when the amber light is flashing.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* ////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Important <span>Manoeuvres</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div
              className={styles.hazardTestWorkListDiv}
              id={styles.hazardTestWorkListDiv12}>
              <ul type="none">
                <img src={cycleLane} alt="cycleLane" />
                <h4>Turning</h4>
                <section id={styles.resLists1}>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      If turning left from a main road into a minor road, keep
                      well to the left.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      If both you and the oncoming driver are turning right,
                      keep the other vehicle on your right and turn behind it.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      If turning right on a dual carriageway with a very narrow
                      central reservation, make sure the road is clear in both
                      directions before turning.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
            <div
              className={styles.hazardTestWorkListDiv}
              id={styles.hazardTestWorkListDiv123}>
              <ul type="none">
                <img src={cycleLane} alt="cycleLane" />
                <h4>
                  <span>Parking</span>
                </h4>
                <section id={styles.resLists2}>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>Near a school entrance or exit.</p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>At a bus stop or nearby.</p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>Within 10m of a junction.</p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>Near the brow of a hill.</p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>On the right hand side of a road at night.</p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>In disabled bays without a permit.</p>
                  </li>
                </section>
              </ul>
            </div>
            <div
              className={styles.hazardTestWorkListDiv}
              id={styles.hazardTestWorkListDiv12}>
              <ul type="none">
                <img src={cycleLane} alt="cycleLane" />
                <h4>Reversing</h4>
                <section id={styles.resLists1}>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      You may remove your seatbelt but don’t reverse any longer
                      than necessary, and always check it’s safe to do so.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      Never reverse from a side road directly into a main road.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      If you are reversing into a side road, be aware that the
                      greatest danger is when the front of your vehicle swings
                      out.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
          </section>
        </section>
        {/* ///////////////////////////////////////////////////////////// */}

        {/* ///////////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3>Other</h3>
          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={cycleLane} alt="cycleLane" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    If the obstruction is on your side of the road, you must
                    give way to oncoming traffic.
                  </p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    You must stop when signalled to do so by the police, a
                    traffic officer or at a school crossing patrol nearby.
                  </p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>Always stop at red traffic lights.</p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    If damage or injury is caused in an accident, you must stop
                    immediately.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ////////////////////////////////////// */}
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
              <Link to="/takequizCatName/Rules-of-the-Road">
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

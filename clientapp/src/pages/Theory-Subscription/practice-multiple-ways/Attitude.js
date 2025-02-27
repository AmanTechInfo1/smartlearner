import React, { useEffect } from "react";
import attiduteImg from "../../../assets/images/attitude-M-img.png";
import styles from "./css/Attitude.module.css";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import adaptedImg from "../../../assets/images/dangers-of-tailgating-1024x683.jpg";
import unmarkedImg from "../../../assets/images/unmarked-crossroads.jpg";
import FillerCap from "../../../assets/images/fillerCap.jpeg";
import secondRuleImg from "../../../assets/images/2-second-rule.jpg";
import oneWayStreet from "../../../assets/images/one-wayStreet.jpg";
import tramsImg from "../../../assets/images/tram-sign-drivers.png";
import flashingHeadingImg from "../../../assets/images/flaSHINGHighlights.jpg";
import horsesRoadImg from "../../../assets/images/horse-road-1024x576.jpg";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useRef } from "react";

import gsap from "gsap";
export default function Attitude() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Topic: Attitude"; // First part before "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return <>{firstLine}</>;
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
                  to="/takequizCatName/Attitude"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Start Quiz</button>
                </Link>
                <Link
                  to="/safety-your-vehicle"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>
                    Next <MdKeyboardDoubleArrowRight />
                  </button>
                </Link>
              </div>
              {/* ////////////////////////////////////////////////////////////////////////////////// */}
              {/* <div className={styles.allBtn}>
                <Link to="/Contact-Us" style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Contact Us</button>
                </Link>
              </div> */}
            </div>
          </div>
        </section>

        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            What is attitude <span>on the road?</span>
          </h2>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={attiduteImg} alt="attiduteImg" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • The second topic is Attitude. This topic relates to a
                    driver’s attitude towards other road users, the rules of the
                    road, and their own driving in general. It also covers how
                    drivers should react to things that occur on the road.
                  </p>
                </li>
                <li>
                  <p>
                    • It is important that all drivers display a measure of
                    patience, control and awareness when taking to the road,
                    avoiding reckless and careless behaviour that can endanger
                    themselves, and other road users.
                  </p>
                </li>
              </ul>
            </section>
          </section>
          <h2 className={styles.hazardTestH2}>
            Attitude <span>rules:</span>
          </h2>
          <section className={styles.bgColorList2}>
            <ul type="none">
              <li>
                <p>• Give way and follow the rules of who has priority</p>
              </li>
              <li>
                <p>• Be considerate</p>
              </li>
              <li>
                <p>• Make your intentions clear</p>
              </li>
              <li>
                <p>• Use horn and lights carefully</p>
              </li>
              <li>
                <p>• Avoid tailgating</p>
              </li>
              <li>
                <p>• Be careful with animals in the car</p>
              </li>
            </ul>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          {/* <h2 style={{ textAlign: "center" }}>Examples of Trigger Scoring</h2> */}

          <section className={styles.AdiParttwoDisplayFlex}>
            <div>
              <h1>
                Remember P.C.P.C - Positioning,{" "}
                <span>Consideration, Priority</span> and, Courtesy
              </h1>
            </div>
          </section>
        </section>
        {/* //////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Key <span>terms</span>{" "}
          </h2>
          <hr
            style={{
              opacity: "1",
              border: "2px solid rgb(240, 0, 92)",
              maxWidth: "500px",
              width: "100%",
              margin: "0px auto",
            }}></hr>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}></div>
          </section>
        </section>

        {/* ///////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3>
            Adapted <span>Teaching Style</span>
          </h3>
          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={adaptedImg} alt="adaptedImg" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • Tailgating is when a driver drives behind another vehicle
                    while not leaving sufficient distance to stop without
                    causing a collision if the vehicle in front stops suddenly.
                  </p>
                </li>
                <li>
                  <p>
                    • Is tailgating illegal? Yes, tailgating is a careless
                    driving offence, and you could land yourself a fine of up to
                    £200 or points on your license if you’re caught by the
                    police.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>

        {/* ////////////////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3>
            Unmarked <span>Junctions</span>
          </h3>
          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={unmarkedImg} alt="unmarkedImg" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • The Highway Code reminds us that nobody has priority at
                    unmarked crossroads (rule 146). That means that you don’t
                    have any formal right to emerge onto the junction before
                    other vehicles. Neither do they have the right to go ahead
                    of you, so it is important that you evaluate the current
                    situation and decide when it is safest for you to emerge.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* //////////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3>
            Filler <span>Cap</span>
          </h3>
          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={FillerCap} alt="FillerCap" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • A loose filler cap on a diesel fuel tank can cause the
                    road to become slippery for other road users. This is
                    particularly dangerous in wet conditions, although a huge
                    amount of traction (tyre grip) is also lost in drier
                    conditions.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ////////////////////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3>
            One-way <span>street</span>
          </h3>
          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={oneWayStreet} alt="oneWayStreet" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • You can park/overtake on either side of this road type.
                    When wanting to turn right you should position your car in
                    the right-hand lane. If you do enter a one-way street
                    incorrectly, you should not reverse back out again. Drivers
                    in this situation should pull up on the side of the road as
                    early as possible and put the hazard lights on, wait for a
                    gap in the traffic so you can turn your vehicle around, and
                    then drive out of the road safely.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3>
            2 second <span>rule</span>
          </h3>
          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={secondRuleImg} alt="secondRuleImg" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • In dry conditions, you should always leave a 2-second time
                    gap in between yourself and the car in front of you.
                    Depending on the weather conditions it will depend on the
                    time gap you leave. For example, in wet conditions, it is 4
                    seconds, and in icy conditions, it is x10 more than dry
                    conditions.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ////////////////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3>
            Flashing <span>Headlights</span>
          </h3>
          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={secondRuleImg} alt="secondRuleImg" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • Only flash your headlights to let other road users know
                    that you are there. Do not flash your headlights to convey
                    any other message or intimidate other road users. This is
                    because flashing others, whether pedestrians or motorists,
                    can send mixed signals, thus posing risks for everyone
                    involved.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ///////////////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3>Trams</h3>
          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={tramsImg} alt="tramsImg" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • Trams are eco-friendly, electric-powered modes of public
                    transport. Their rails pose the most risk to cyclists and
                    they cannot steer to avoid obstacles. Their signs are
                    diamond-shaped.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ///////////////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3>Horses</h3>
          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={horsesRoadImg} alt="horsesRoadImg" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • If you see horses, slow down and allow plenty of room. If
                    you happen to see a horse at a roundabout, you should never
                    assume which direction they will go. This rule also applies
                    to cyclists.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ///////////////////////////////////////////////////// */}

        {/* /////////////////// */}
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
              <Link to="/takequizCatName/Attitude">
                {" "}
                <button>Start Quiz</button>
              </Link>
            </section>
          </div>
        </section>

        {/* ////////////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}

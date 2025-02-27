import React from "react";
import styles from "./css/VehicleHandel.module.css";

import { IoMdArrowDropright } from "react-icons/io";
import handlngIconImg from "../../../assets/images/handling-icon-300x300.png";
import { FaCheckCircle } from "react-icons/fa";
import speedBreaker from "../../../assets/images/speedBreaker.jpeg";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function VehicleHandling() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = " Topic: Vehicle "; // First part before "Driving"
    const secondPart = "Handling";
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
                  to="/takequizCatName/Vehicle-Handling"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Start Quiz</button>
                </Link>
                <Link to="/motorway-rules" style={{ textDecoration: "none" }}>
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
            What is <span>Vehicle handling ?</span>
          </h2>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex}>
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
              <h1>
                In this section, <span>you’ll learn how to maintain</span> Safe
                Driving Standards By Learning:
              </h1>
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
          <hr
            style={{
              opacity: "1",
              border: "2px solid #09e9d6",
              maxWidth: "700px",
              width1: "100%",
              margin: "1rem auto",
            }}></hr>
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
              <h1>
                Your stopping distance will be{" "}
                <span>Affected by several factors, including:</span>
              </h1>
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
          <h1>
            Driving in different <span>Weather Conditions</span>
          </h1>
          <section className={styles.theoryPortalYoutubeVideosSection}>
            <div className={styles.theoryPortalYoutubeVideosDiv}>
              <iframe
                style={{
                  borderRadius: "30px",
                  boxShadow: "0 3px 10px rgba(255, 255, 255, 0.644)",
                }}
                width="100%"
                height="500"
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
        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3>
            Traffic <span>Calming Measures</span>
          </h3>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
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

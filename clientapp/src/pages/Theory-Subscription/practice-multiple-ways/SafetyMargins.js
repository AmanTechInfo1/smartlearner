import React, { useEffect } from "react";
import styles from "./css/SafetyMargins.module.css";
import greenRuler from "../../../assets/images/green-ruler.png";

import Lplateimg from "../../../assets/images/L-Plate.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import motorwayCartflow from "../../../assets/images/motorway-contraflow.png";
import absImg from "../../../assets/images/absImg.png";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useRef } from "react";

import gsap from "gsap";

export default function SafetyMargins() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Topic: Safety"; // First part before "Driving"
    const secondPart = "Margins";
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
                  to="/takequizCatName/Safety-Margins"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Start Quiz</button>
                </Link>
                <Link to="/hazard-awareness" style={{ textDecoration: "none" }}>
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
            What are <span>Safety margins?</span>
          </h2>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={greenRuler} alt="greenRuler" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • The 4th topic from the multiple-choice section of the
                    theory test is safety margins. This topic is all about how
                    certain road and weather conditions can affect stopping
                    distances and your ability to handle your vehicle—looking
                    closely at what actions you need to take to make sure you
                    maintain a safe distance (or safety margin) between you and
                    the vehicle in front of you.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ////////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Stopping <span>Distances</span>
          </h2>
          <p id={styles.hazardTestH2para}>
            The following provided stopping times have been calculated correctly
            and are imperative to understand whilst driving especially in harsh
            weather conditions. (hover your cursor over each box for the answer)
          </p>
          <section className={styles.theoryPortalYoutubeVideosSection}>
            <div className={styles.theoryPortalYoutubeVideosDiv}>
              <iframe
                style={{
                  borderRadius: "30px",
                  boxShadow: "0 3px 10px rgba(255, 255, 255, 0.644)",
                }}
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/1afkGSJN9LA"
                title="YouTube video player"></iframe>
            </div>
          </section>
        </section>
        {/* ///////////////////////////////////////////////////////////// */}

        {/* /////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2} id={styles.h2heddings}>
            Important <span>Terms </span>
          </h2>
          <p id={styles.hazardTestH2para}>
            {" "}
            If you’re driving at night or in bad weather, you’ll need to make
            sure you’re using your car lights properly. Take care when following
            large vehicles too, you’ll need to fall back to ensure they’re able
            to see you in their mirrors properly.
          </p>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div
              className={styles.hazardTestWorkListDiv}
              id={styles.hazardTestWorkListDiv12}>
              <ul type="none">
                <div className={styles.innerTheorySupportContent}>
                  <div className={styles.theorySupportContentVideo}>
                    <iframe
                      style={{ maxWidth: "350px", width: "100%" }}
                      height="260"
                      src="https://www.youtube.com/embed/iRY8Xsohoh8"
                      title="Tyre Safety Month 2014 Aquaplaning animation - TyreSafe"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen></iframe>
                  </div>
                </div>
                <h4>Aqua Planing</h4>
                <section id={styles.resLists1}>
                  <li>
                    <p>
                      • When roads are wet, your car can aquaplane. This means
                      the tyres have lifted off the surface of the road and are
                      skating on the surface water. If your steering suddenly
                      becomes noticeably light, while driving on a wet road,
                      this is a sign that you are aquaplaning. To correct it
                      ease off the accelerator and allow the tyres to regain
                      grip.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
            <div
              className={styles.hazardTestWorkListDiv}
              id={styles.hazardTestWorkListDiv123}>
              <ul type="none">
                <img src={motorwayCartflow} alt="motorwayCartflow" />
                <h4>
                  <span>Contraflow Systems</span>
                </h4>
                <section id={styles.resLists2}>
                  <li>
                    <p>
                      • A contraflow system is to prevent traffic in peak travel
                      times, to allow everyone to move on, rather than stand
                      still traffic. When entering a contraflow, you must:
                      reduce speed in good time, choose a suitable lane in good
                      time, and keep a safe distance from the vehicle in front
                      of you.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
            <div
              className={styles.hazardTestWorkListDiv}
              id={styles.hazardTestWorkListDiv12}>
              <ul type="none">
                <img src={absImg} alt="absImg" />
                <h4>Anti-lock Brakes (ABS)</h4>
                <section id={styles.resLists1}>
                  <li>
                    <p>
                      • Anti-lock brakes prevent wheels from locking which means
                      tyres are less likely to skid. Vehicles are still able to
                      be steered whilst under braking when anti-lock brakes come
                      into effect. When a road surface is wet or loose, ie.
                      Gravel, the ABS may not work as well. In event of an
                      emergency, apply brakes as soon as possible and firmly to
                      ensure a quick stop.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
          </section>
        </section>
        {/* //////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Driving in <span>Different conditions</span>
          </h2>
          <hr
            style={{
              opacity: "1",
              border: "2px solid #01cfbe",
              maxWidth: "700px",
              margin: "1rem auto",
            }}></hr>
          <div className={styles.hazardTestWorkListDiv}>
            <section className={styles.bgColorList33}>
              <ul type="none">
                <li>
                  <p>
                    • Braking distances on ice and in freezing conditions can be
                    ten times the normal distance.
                  </p>
                </li>
                <li>
                  <p>
                    • Overall stopping distances will be longer when driving in
                    wet conditions.
                  </p>
                </li>
                <li>
                  <p>
                    • In windy conditions take extra care when passing cyclists
                    and motorcyclists. Always allow them plenty of room.
                  </p>
                </li>
                <li>
                  <p>
                    • After driving through floods or a ford the first thing you
                    should do is test your brakes. Driving slowly and applying
                    the breaks gently will also help to dry them.
                  </p>
                </li>
                <li>
                  <p>
                    • In hot weather the road surface can become soft. This can
                    affect your tyre grip and braking.
                  </p>
                </li>
                <li>
                  <p>
                    • Side winds are most dangerous on an open stretch of road
                    as there is no buildings etc to block this.
                  </p>
                </li>
                <li>
                  <p>
                    • When driving on a motorway with surface spray use dipped
                    headlights to visible to others.
                  </p>
                </li>
                <li>
                  <p>
                    • When driving on snow or ice use the highest gear possible,
                    as this helps avoid wheel spin and allows a better grip.
                  </p>
                </li>
                <li>
                  <p>
                    • When approaching a sharp bend in poor conditions, such as
                    ice, you should slow down and avoid sudden steering
                    movements.
                  </p>
                </li>
                <li>
                  <p>
                    • If your number plate, windows, lights, or mirrors are
                    covered in snow or ice you must clear them before staring a
                    journey.
                  </p>
                </li>
                <li>
                  <p>
                    • You can tell you are driving on ice, and black ice,
                    because your tyres make little noise and the steering
                    becomes lighter.
                  </p>
                </li>
                <li>
                  <p>
                    • When driving in fog use dipped headlights, allow more time
                    for your journey, and slow down.
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </section>

        {/* //////////////////////////////////////////////////////////////////// */}
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
              <Link to="/takequizCatName/Safety-Margins">
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

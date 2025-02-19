import React from "react";
import styles from "../AdiPartOne.module.css";

import Lplateimg from "../../../assets/images/L-Plate.jpg";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function TrafficSignalBand() {
  // const textRef = useRef(null);

  // // Function to split the text into individual letters wrapped in <span>
  // const splitText = () => {
  //   const firstPart = " Forget the rest,"; // First part before "Driving"
  //   const secondPart = "learn with the best!"; // Second part after "Driving"

  //   // Split both parts into individual characters and map them to <span>
  //   const firstLine = firstPart
  //     .split("")
  //     .map((char, index) => <span key={`first-${index}`}>{char}</span>);

  //   const secondLine = secondPart
  //     .split("")
  //     .map((char, index) => <span key={`second-${index}`}>{char}</span>);

  //   // Return the first line, a <br>, and then the second line
  //   return (
  //     <>
  //       {firstLine}
  //       <br />
  //       {secondLine}
  //     </>
  //   );
  // };

  // useEffect(() => {
  //   const letters = textRef.current.querySelectorAll("span");

  //   // GSAP Timeline for the text animation
  //   const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

  //   tl.from(letters, {
  //     opacity: 0.6,
  //     y: 100,
  //     ease: "bounce.out", // Start from below
  //     stagger: 0.1, // Stagger the animation for each letter
  //     rotationX: 90, // Initial rotation effect
  //     transformOrigin: "bottom center", // Center for rotation
  //     scale: 0.5,
  //   })
  //     .to(letters, {
  //       scale: 1, // Scale to normal size
  //       opacity: 1, // Fade in to full opacity
  //       rotationX: 0, // Reset rotation
  //       y: 0, // Move to original position
  //       stagger: 0.1, // Slight stagger for each letter
  //       duration: 0.8, // Smooth transition duration
  //     })
  //     .to(letters, {
  //       color: "#fd9235", // Change text color to red
  //       rotationY: 360, // Apply rotation on the Y-axis
  //       stagger: 0.1,
  //       duration: 1, // Rotate each letter over 1 second
  //     })
  //     .to(letters, {
  //       scale: 1.2, // Slightly enlarge text
  //       opacity: 0.8, // Reduce opacity slightly
  //       rotationX: -10, // Slight tilt effect
  //       stagger: 0.1, // Stagger the scaling
  //       duration: 1, // Animation duration
  //     })
  //     .to(letters, {
  //       scale: 1, // Return to original scale
  //       opacity: 1, // Full opacity
  //       rotationX: 0, // Reset rotation
  //       color: "#04fad4", // Reset color to black
  //       stagger: 0.1, // Maintain stagger effect
  //       duration: 1, // Final duration
  //     })
  //     .to(letters, {
  //       rotation: 10, // Add shake effect
  //       x: -5, // Horizontal shake
  //       yoyo: true, // Yoyo effect for shake (goes back and forth)
  //       repeat: 2, // Repeat the shake twice
  //       duration: 0.1, // Short shake duration
  //       stagger: 0.05, // Stagger shake on each letter
  //     })
  //     .to(letters, {
  //       scale: 1.3, // Increase size slightly for bounce effect
  //       opacity: 1, // Ensure opacity stays full
  //       ease: "bounce.out", // Bounce easing for effect
  //       stagger: 0.05, // Stagger bounce
  //       duration: 1, // Bounce duration
  //     })
  //     .to(letters, {
  //       scale: 1, // Reset scale
  //       opacity: 1, // Reset opacity
  //       y: -30, // Vertical movement for final bounce
  //       duration: 0.5, // Short duration for final bounce
  //     })
  //     // Infinite color change with loop
  //     .to(letters, {
  //       color: "#ff54d7", // Change color to a pinkish hue
  //       duration: 2, // Duration of color change
  //       repeat: -1, // Repeat infinitely
  //       yoyo: true, // Reverse color change for alternating effect
  //       stagger: 0.1, // Stagger the color change for each letter
  //     });
  // }, []);

  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        {/* <section className={styles.imageSection}>
          <div className={styles.opicity}></div>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1 ref={textRef}>{splitText()}</h1>
              </div>
              <div className={styles.gGpFrontListP}>
                <p>
                  Unlock your driving potential with Smartlearner Learn from
                  certified instructors in a safe, supportive environment. Start
                  your journey to becoming a confident, skilled driver today!
                </p>
              </div>
              <div className={styles.alertBtn}>
                <Link to="/Contact-Us" style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Contact Us</button>
                </Link>
                <Link
                  to="/part-1-trainning-material"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <button id={styles.btn}>Back To Portal</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Traffic <span>signs and signals</span>
          </h2>
          <hr style={{ opacity: "1", border: "1px solid black" }}></hr>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="600"
                    height="400"
                    src="https://www.youtube.com/embed/1FyKBfic4L8"
                    title="Road Safety: Joining the Motorway"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    The ADI Part 1 Band 2 section covers a range of topics
                    related to Traffic Signs, Signals, Car Control, Pedestrians,
                    and Mechanical Knowledge. This band tests your understanding
                    of essential road signs and signals, as well as how to
                    control a vehicle safely under various conditions. It also
                    includes knowledge about pedestrian safety and basic
                    mechanical concepts that affect vehicle performance and
                    maintenance.
                  </p>
                </li>
                <li>
                  <p>
                    As an aspiring driving instructor, it’s important to know
                    how to explain the meaning of different traffic signs and
                    signals, and how they guide safe driving. Additionally,
                    understanding car control—such as braking, steering, and
                    acceleration—is key to teaching your students how to handle
                    a vehicle effectively. The mechanical knowledge portion
                    ensures you're familiar with the basic workings of a car,
                    like how the brakes, tires, and engine function, which is
                    vital for teaching students about vehicle maintenance and
                    safety. This band equips you to provide well-rounded
                    instruction on both driving and vehicle management.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <ul type="none">
            <li className="text-center mt-2 text-danger">
              <h2>
                Practice <span>Test</span>
              </h2>
            </li>
          </ul>
        </section> */}
        {/* ////////////////////////////////////////////////////// */}

        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h1>Start Quiz</h1>
            <h3>25 Questions</h3>
            <p>
              The mock test is a quick summary of what you’ve revised, there is
              25 questions, you will need at least 20/25 to pass, you get 15
              minutes to complete these questions
            </p>
            <Link to="/takequizCatName/band-Two-test">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
        {/* <div className={styles.TMnextPage}>
          <Link to="/band-3-driving-tests-disabilities-and-the-law">
            {" "}
            <button className={styles.TMnextButton}>NEXT PAGE Band - 3 </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

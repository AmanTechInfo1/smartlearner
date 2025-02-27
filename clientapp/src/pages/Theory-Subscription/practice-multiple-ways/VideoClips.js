import React from "react";
import styles from "./css/VehicleLoading.module.css";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function VideoClips() {
  const videoURLs = [
    "https://www.youtube.com/embed/R_R0tDWry7Y",
    "https://www.youtube.com/embed/Bz5vUmXG2eg",
    "https://www.youtube.com/embed/7-piGp7tw90",
    "https://www.youtube.com/embed/KPpjQw9U4Pg",
    "https://www.youtube.com/embed/87-vlN6K8lw",
    "https://www.youtube.com/embed/XbqGW2bFSgc",
    "https://www.youtube.com/embed/9FlCxeP7QPs",
    "https://www.youtube.com/embed/m7voGvNBjXY",
    "https://www.youtube.com/embed/QLFxPP9axq8",
  ];

  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Topic: Video"; // First part before "Driving"
    const secondPart = "clips";
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
              </div>
              {/* ////////////////////////////////////////////////////////////////////////////////// */}
            </div>
          </div>
        </section>
        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            What are the <span>video clips?</span>{" "}
          </h2>

          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  At the end of your theory test you will be shown a video clip,
                  you will then have 3 questions to answer based on these
                  videos.
                </p>
              </li>
              <li>
                <p>
                  You can play the video clip as many times as you would like
                  during the 3 questions.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* //////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            What type of <span>questions can I get?</span>
          </h2>

          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>Questions may vary depending on the video clip shown.</p>
              </li>
              <li>
                <p>
                  For example, you may see a clip of a carvan swerving side to
                  side on a motorway, questions can be surrounding the hazard
                  that is happening, you may also get questions such as the
                  speed limit for the road.
                </p>
              </li>
              <li>
                <p>
                  It is important to take note of every detail in the video,
                  look out for road signs, road markings, weather condtions etc.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>Test Yourself</h2>
        </section>
        <div className={styles.hazardVideosGridContainer}>
          <div id={styles.hazardVideosGridContainer}>
            {videoURLs.map((url, index) => (
              <div className={styles.hazardGridItem} key={index}>
                <iframe
                  width="300"
                  height="200"
                  src={url}
                  allowFullScreen></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

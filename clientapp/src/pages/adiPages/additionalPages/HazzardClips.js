import React, { useEffect } from "react";
import styles from "./css/PartOneTraining.module.css";
import { FaHome } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import HazardVideos from "../../../pages/Theory-Subscription/Hazard/HazardVideos";
import { Link } from "react-router-dom";

import { useRef } from "react";

import gsap from "gsap";

export default function HazzardClips() {
  const textRef = useRef(null);

  const splitText = () => {
    const firstPart = "Hazard Perception "; // First part before "Driving"
    const secondPart = "Clips"; // Second part after "Driving"

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
                <Link to="/Contact-Us" style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Contact Us</button>
                </Link>
                <Link
                  to="/part-1-trainning-material"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Back To Portal</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ////////////////////////////////// */}

        {/* ////////////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <div>
            <h2>
              Hazard <span>Perception videos</span>
            </h2>
            <p style={{ textAlign: "center" }}>
              Below we have created videos to guide you through hazard
              perception clips.
            </p>
          </div>
          <HazardVideos />
        </section>
        <div className={styles.TMnextPage}>
          <button className={styles.TMnextButton}>
            <Link to="/Adi-part-1-MockTest">NEXT PAGE MockTest</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

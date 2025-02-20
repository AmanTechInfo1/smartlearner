import React, { useEffect } from "react";
import styles from "../AdiPartOne.module.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

import gsap from "gsap";
export default function TestDayTips() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Test Day Tips"; // First part before "Driving"

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
        {/* ////////////////////////////////////////////// */}
        <div className={styles.testDayTips}>
          <section className={styles.testDayheader}>
            <h1>Test Day Tips</h1>
            <p>
              The day of the test can be nerve-wracking, but with the right
              strategies, you can walk in with confidence.
            </p>
          </section>

          <section className={styles.testDaypart} id={styles.testDaybeforeTest}>
            <h2>Before the Test</h2>
            <ul>
              <li>
                <strong>Get a Good Night’s Sleep</strong> - Rest is crucial. A
                well-rested mind is sharper and better at recalling information.
              </li>
              <li>
                <strong>Arrive Early</strong> - Aim to arrive at least 10
                minutes before your test. This gives you time to relax and
                settle in.
              </li>
            </ul>
          </section>

          <section className={styles.testDaypart} id={styles.testDayduringTest}>
            <h2>During the Test</h2>
            <ul>
              <li>
                <strong>Stay Calm</strong> - It’s natural to feel nervous, but
                don’t let anxiety take over. Take deep breaths and focus on the
                questions.
              </li>
              <li>
                <strong>Read Questions Carefully</strong> - Take your time to
                read each question thoroughly. Misreading a question could lead
                to a wrong answer.
              </li>
              <li>
                <strong>Review Your Answers</strong> - If you finish the
                Multiple Choice section early, use the remaining time to review
                your answers. Double-checking can help catch any mistakes.
              </li>
            </ul>
          </section>

          <section className={styles.testDaypart} id={styles.testDayafterTest}>
            <h2>After the Test</h2>
            <p>
              You’ll get your results immediately after completing the test. If
              you pass, congratulations! You’re one step closer to becoming an
              ADI.
            </p>
            <p>
              If you don’t pass, don’t be discouraged. Use the feedback provided
              to identify areas that need improvement and focus on those when
              preparing for your retake.
            </p>
          </section>
        </div>
        <div className={styles.TMnextPage}>
          <Link to="/goodluck">
            <button className={styles.TMnextButton}>NEXT PAGE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

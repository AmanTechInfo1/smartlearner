import React, { useEffect } from "react";
import styles from "../AdiPartOne.module.css";
import { Link } from "react-router-dom";

import { useRef } from "react";
import gsap from "gsap";

export default function PartOneTest() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = " Forget the rest,"; // First part before "Driving"
    const secondPart = "learn with the best!"; // Second part after "Driving"

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
                  style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Back To Portal</button>
                </Link>
              </div>
            </div>
          </div>
        </section>{" "}
        <section className={styles.bookTestPartOneSection}>
          <div className={styles.PartOnecontentWrapper}>
            <section className={styles.hazardTestWorkListSection}>
              <h2>Book Your Part 1 Test</h2>
            </section>

            <div className={styles.PartOnepart}>
              <h2 className={styles.PartOnepartTitle}>
                Confidence in Your Knowledge
              </h2>
              <p className={styles.PartOnetext}>
                Knowing you're ready to take the ADI Part 1 test begins with
                feeling confident in your knowledge of all the material covered
                in the exam. This includes a solid understanding of road safety,
                driving laws, and teaching techniques.
              </p>
              <p className={styles.PartOnetext}>
                If you've consistently scored well on practice tests and mock
                exams, especially in areas where you previously struggled, it's
                a strong indicator that you're ready for the real test.
              </p>
            </div>

            <div className={styles.PartOnepart}>
              <h2 className={styles.PartOnepartTitle}>
                Teaching and Instructional Skills
              </h2>
              <p className={styles.PartOnetext}>
                Your ability to explain complex driving concepts clearly and
                confidently is key. Since the role of an ADI involves teaching
                others, you should be able to break down driving laws and safety
                practices in a way that would make sense to learners.
              </p>
              <p className={styles.PartOnetext}>
                If you can teach these concepts or visualize yourself teaching a
                student, it shows you've absorbed the material deeply and are
                prepared to handle the instructional aspect of the exam.
              </p>
            </div>

            <div className={styles.PartOnepart}>
              <h2 className={styles.PartOnepartTitle}>
                Hazard Perception Readiness
              </h2>
              <p className={styles.PartOnetext}>
                The ADI Part 1 test includes a section on hazard perception. If
                you’ve practiced with online clips and have developed the
                ability to identify potential hazards swiftly, it shows you're
                ready.
              </p>
              <p className={styles.PartOnetext}>
                Consistently scoring well on mock hazard perception tests is a
                strong indicator you're prepared for the real test.
              </p>
            </div>

            <div className={styles.PartOnepart}>
              <h2 className={styles.PartOnepartTitle}>Emotional Readiness</h2>
              <p className={styles.PartOnetext}>
                Feeling calm and confident, rather than anxious, is a good sign
                that you're mentally prepared for the test. Confidence, backed
                by thorough preparation, is a clear indicator that you're in the
                right mindset to succeed.
              </p>
            </div>

            <div className={styles.PartOnebookTestButtonWrapper}>
              <a
                href="https://www.gov.uk/adi-part-1-test"
                className={styles.PartOnebookTestLink}>
                BOOK YOUR TEST HERE
              </a>

              <Link to="/test-day-tips">
                {" "}
                <button className={styles.PartOnenextPageButton}>
                  Next Test Day Tips{" "}
                </button>{" "}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

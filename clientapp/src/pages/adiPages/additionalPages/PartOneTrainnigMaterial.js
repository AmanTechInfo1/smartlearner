import React, { useEffect, useState } from "react";
import styles from "./css/PartOneTraining.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useRef } from "react";

import gsap from "gsap";

export default function PartOneTrainnigMaterial() {
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
              </div>
            </div>
          </div>
        </section>
        <section className={styles.hazarddivsectionmanner}>
          <section className={styles.hazardTestWorkListSection}>
            <div id={styles.btnDiv}>
              <Link to="/trainning-material">
                <button id={styles.hazzardBtn}>Training Material</button>
              </Link>
              <Link to="/glossary-terms">
                <button id={styles.hazzardBtn}>Glossary of Terms</button>
              </Link>

              <Link to="/takequizCatName/Band-1---Road-Procedure">
                <button id={styles.hazzardBtn2}>
                  Band 1 Practice Questions{" "}
                </button>
              </Link>
              <Link to="/band-1-Road-Procedure">
                <button id={styles.hazzardBtn}>Part 1 Band 1 summary</button>
              </Link>
              <Link to="/takequizCatName/band-one-test">
                <button id={styles.hazzardBtn2}>Band 1 Test Questions 25</button>
              </Link>
              <Link to="/takequizCatName/Band-2---Traffic-Signs-and-Signals--Car-Control--Pedestrians-and-Mechanical-Knowledge">
                <button id={styles.hazzardBtn2} className={styles.hazzardBtn}>
                  Band 2 Practice Questions
                </button>
              </Link>
              <Link to="/band-2-traffic-signs-and-signals">
                <button id={styles.hazzardBtn} className={styles.hazzardBtn}>
                  Band 2 summary
                </button>
              </Link>
              <Link to="/takequizCatName/band-two-test">
                <button id={styles.hazzardBtn2}>Band 2 Test Questions 25</button>
              </Link>
              <Link to="/takequizCatName/Band-3---Driving-Test--Disabilities--and-The-Law">
                <button id={styles.hazzardBtn2}>
                  {" "}
                  Band 3 Practice Questions
                </button>
              </Link>
              <Link to="/band-3-driving-tests-disabilities-and-the-law">
                <button id={styles.hazzardBtn}> Band 3 summary</button>
              </Link>
              <Link to="/takequizCatName/band-three-test">
                <button id={styles.hazzardBtn2}>Band 3 Test Questions 25</button>
              </Link>
              <Link to="/takequizCatName/Band-4---Publications-and-Instructional-Techniques">
                <button id={styles.hazzardBtn2} className={styles.hazzardBtn}>
                  Band 4 Practice Questions
                </button>
              </Link>
              <Link to="/band-4-publications-techniques">
                <button id={styles.hazzardBtn} className={styles.hazzardBtn}>
                  Band 4 summary
                </button>
              </Link>
              <Link to="/takequizCatName/band-four-test">
                <button id={styles.hazzardBtn2}>Band 4 Test Questions 25</button>
              </Link>
              <Link to="/takequizCatName/Mock--Tests">
                <button id={styles.hazzardBtn2}>Mock Test 100 Questions</button>
              </Link>
              <Link to="/Adi-part-1-Bonus-Quiz">
                <button id={styles.hazzardBtn}>Bonus Quiz</button>
              </Link>

              <Link to="/hazard-preception-part-2">
                <button id={styles.hazzardBtn}>Hazard Preception</button>
              </Link>
              <Link to="/Adi-part-1-MockTest">
                <button id={styles.hazzardBtn}>Mock Test summary</button>
              </Link>
              <Link to="/adi-part-one-test">
                <button id={styles.hazzardBtn}>Book your part 1 test</button>
              </Link>
              <Link to="/test-day-tips">
                <button id={styles.hazzardBtn}>Test day Tips</button>
              </Link>
            </div>
          </section>
          <div className={styles.TMnextPage}>
            <Link to="/trainning-material">
              {" "}
              <button className={styles.TMnextButton}>
                NEXT PAGE Trainning Material
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

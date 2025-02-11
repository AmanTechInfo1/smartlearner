import React from "react";
import styles from "../AdiPartOne.module.css";

import { Link } from "react-router-dom";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function DDTLawBand() {

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
                              style={{ textDecoration: "none" }}
                            >
                              {" "}
                              <button id={styles.btn}>Back To Portal</button>
                            </Link>
                          </div>
                        </div>
          </div>
        </section>
        {/* ///////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Driving tests, <span>disabilities and the law</span>
          </h2>
          <hr style={{ opacity: "1", border: "1px solid black" }}></hr>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="600"
                    height="400"
                    src="https://www.youtube.com/embed/EOEhIw3ix1c"
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
                    The ADI Part 1 Band 3 section covers topics related to the
                    Driving Test, Disabilities, and the Law. This band focuses
                    on the process of the driving test itself, including the
                    legal responsibilities of both drivers and instructors. It
                    also explores how to accommodate drivers with disabilities,
                    ensuring that you understand how to modify lessons and adapt
                    to different learners’ needs.
                  </p>
                </li>
                <li>
                  <p>
                    As a future driving instructor, mastering this section is
                    essential for guiding your students through the driving
                    test, from preparing them for what to expect on the day to
                    helping them understand the legal requirements for safe
                    driving. You’ll also need to know how to work with learners
                    who have specific disabilities, ensuring they can approach
                    driving safely and confidently. This band ensures you’re
                    well-versed in both the legal aspects of driving and the
                    inclusivity needed to teach a wide variety of students
                    effectively.
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
        </section>
        {/* ////////////////////////////////////////// */}
        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h2>Start Quiz</h2>
            <h3>All Questions</h3>
            <p>
              Click the start quiz button to start the quiz and See your result
            </p>
            <Link to="/takequizCatName/Band-3---Driving-Test--Disabilities--and-The-Law">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
        <div className={styles.TMnextPage}>
         
            <Link to="/band-4-publications-techniques"> <button className={styles.TMnextButton}>
              NEXT PAGE Band - 4</button>
            </Link>
          
        </div>
      </div>
    </div>
  );
}

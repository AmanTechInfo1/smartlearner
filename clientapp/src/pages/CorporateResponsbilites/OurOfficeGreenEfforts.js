// import React from 'react'
import styles from "./OurOffice.module.css";
import buildingImg from "../../assets/images/buildingImg.png";
import greenStarImg from "../../assets/images/greenStar.png";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Helmet } from "react-helmet-async";

export default function OurOfficeGreenEfforts() {

  const text2Ref = useRef(null);

  const splitTextPartTwo = () => {
    const firstPart = "OUR OFFICE GREEN EFFORTS";
    // Second part after "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

  
    // Return the first line, a <br>, and then the second line
    return (
      <>
        {firstLine}
       
      </>
    );
  };

  useEffect(() => {
    const letters = text2Ref.current.querySelectorAll("span");

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
        color: "rgb(147, 0, 167)", // Change text color to red
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
        color: "rgb(0, 235, 165)", // Reset color to black
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
        color: "rgb(241, 12, 107)", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);

  const textRef = useRef(null);

  const splitText = () => {
    const firstPart = "HOW IS OUR OFFICE";
    const secondPart = "SUPPORTING THIS CHANGE?"; // Second part after "Driving"

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
        color: "rgb(3, 154, 136)", // Change text color to red
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
        color: "rgb(3, 154, 3)", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);


  return (
    <div className={styles.OurOfficeGreenEfforts}>
      <Helmet>
  <meta charSet="utf-8" />
  <title>Our Office Green Efforts</title>
  <link
    rel="canonical"
    href="https://smartlearner.com/Our-Office-Green-Efforts"
  />
  <meta
    name="description"
    content="Learn how SmartLearner is committed to sustainability through our green office initiatives. From reducing waste to saving energy, see how we're making a positive environmental impact."
  />
</Helmet>

      <div>
        <div className={styles.csrPageFront}>
          <div className="opicity"></div>
          <section className={styles.eCSfrontSection}>
          <h2 ref={text2Ref}>{splitTextPartTwo()}</h2>
            <div className={styles.csrPagesLd}>
              <p>
                Here at Smart Learner driving school we are committed to
                reducing our carbon footprint! We plan to take steps towards
                becoming a more sustainable and eco-friendly company.
              </p>
            </div>
          </section>
        </div>
        {/* ////////////////////////////////////////// */}
        <div className={styles.eCsfront}>
          <section className={styles.ourSecondrySection}>
            <div className={styles.ourSecondryDiv}>
              <section className={styles.headinSection}>
              <h2 ref={textRef}>{splitText()}</h2>
                
                <img src={buildingImg} alt="buildingImg" />
              </section>
              <section className={styles.ourSecondryPSec}>
                <p>
                  The Smartlearner Office is dedicated to sustainability,
                  implementing eco-friendly practices both on the road and in
                  our office.
                </p>
                <p>
                  We are committed to reducing our carbon footprint through
                  various initiatives aligned with our projects. Below are
                  examples of our current practices and future plans.
                </p>
                <p>
                  Smartlearner's instructors aren't the only ones going green.
                </p>
                <p>
                  Our office is committed to decreasing their carbon emissions
                  and becoming more sustainable.
                </p>
              </section>
            </div>
          </section>
          {/* //////////////////////////////////////// */}
          <section className={styles.ourOPresEfforts}>
            <hr />
            <div className={styles.ourOPresEffortsHead}>
              <h2>OUR PRESENT <span style={{color:'rgba(187, 0, 249, 0.93)'}}>EFFORTS</span> </h2>
              <section className={styles.ourOPresList}>
                <ul type="none">
                  <li>
                    <span>
                      <img src={greenStarImg} alt="greenStarImg" />
                    </span>
                    <p>Discarding paper diaries for an online paper service.</p>
                  </li>
                  <li>
                    <span>
                      <img src={greenStarImg} alt="greenStarImg" />
                    </span>
                    <p>
                      Newsletters online sent by email, discarding paper post.
                    </p>
                  </li>
                  <li>
                    <span>
                      <img src={greenStarImg} alt="greenStarImg" />
                    </span>
                    <p>
                      Reduced the size of our learner logs and all lesson
                      material are now online.
                    </p>
                  </li>
                  <li>
                    <span>
                      <img src={greenStarImg} alt="greenStarImg" />
                    </span>
                    <p>
                      We currently have 1 electric charging port that is ready
                      to use This shows that we are ready, set and raring to go
                      with plans to implement MORE electric cars!
                    </p>
                  </li>
                  <li>
                    <span>
                      <img src={greenStarImg} alt="greenStarImg" />
                    </span>
                    <p>
                      Implemented LED Lights which are energy efficient.An
                      evaluated 99% to 100% are UV emissions free.
                    </p>
                  </li>
                  <li>
                    <span>
                      <img src={greenStarImg} alt="greenStarImg" />
                    </span>
                    <p>
                      We have estimated that Smart Learner have approximately
                      decreased 15% of our carbon emissions through these
                      environmentally friendly practices.
                    </p>
                  </li>
                  <li>
                    <span>
                      <img src={greenStarImg} alt="greenStarImg" />
                    </span>
                    <p>
                      We provide online Zoom sessions for theory reducing
                      learner's travel emissions.
                    </p>
                  </li>
                </ul>
              </section>
            </div>
          </section>
          {/* ///////////////////////////////////////////////////////// */}
          <section className={styles.ourOPresEfforts}>
            <hr />
            <div className={styles.ourOPresEffortsHead}>
              <h2>OUR CONTINUOUS <span style={{color:'rgba(187, 0, 249, 0.93)'}}>EFFORTS</span> </h2>
              <section className={styles.ourOPresList}>
                <ul type="none">
                  <li>
                    <span>
                      <img src={greenStarImg} alt="greenStarImg" />
                    </span>
                    <p>
                      Conserve energy within the office, by turning off lights,
                      switches and electrical appliances when the office day is
                      done.
                    </p>
                  </li>
                  <li>
                    <span>
                      <img src={greenStarImg} alt="greenStarImg" />
                    </span>
                    <p>
                      We will further our actions to keeping our office
                      paperless as much as we can Only printing when absolutely
                      necessary.
                    </p>
                  </li>
                  <li>
                    <span>
                      <img src={greenStarImg} alt="greenStarImg" />
                    </span>
                    <p>Planting trees within our local area.</p>
                  </li>
                  <li>
                    <span>
                      <img src={greenStarImg} alt="greenStarImg" />
                    </span>
                    <p>
                      We are also planning to reduce our CO2e output by moving
                      to electric cars with no emissions.
                    </p>
                  </li>
                </ul>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

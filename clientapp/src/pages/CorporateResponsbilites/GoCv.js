// import React from 'react'
import styles from "./GoCv.module.css";
import goCv from "../../assets/images/goCVwhiteLogo.png";
import coventryCityCouncil from "../../assets/images/coventryCityCouncil.png";
import smartlearnerLogo from "../../assets/images/White-Logo-Fixed-1024x174.png";
import smartlearner2ndLogo from "../../assets/images/White-Logo-Fixed-1024x174.png";
import Accordion from "../../components/ui/accordation/Accordion";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";


export default function GoCv() {


  const text2Ref = useRef(null);

  const splitTextPartTwo = () => {
    const firstPart = "Go CV PARTNERSHIP";
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
    const firstPart = "IN COLLABORATION WITH";
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

  return (
    <div className={styles.goCv}>
      <div className={styles.goCvFirstdiv}>
        <div className={styles.csrPageFront}>
          <div className="opicity"></div>
          <section className={styles.goCvFirstSection}>
            <div className={styles.goCvFirstSectionHeading}>
            <h2 ref={text2Ref}>{splitTextPartTwo()}</h2>
           
            </div>
            <div className={styles.goCvFirstSectionHeadingImg}>
              <img src={goCv} alt="goCv" id={styles.goCvImg} />
              <img
                src={smartlearnerLogo}
                alt="smartlearnerLogo"
                id={styles.smartlearnerLogo}
              />
              <img
                src={coventryCityCouncil}
                alt="coventryCityCouncil"
                id={styles.coventryCityCouncil}
              />
            </div>
          </section>
        </div>
      </div>

      {/* /////////////////////////////////////// */}
      <div className={styles.GoCvWsection}>
        <section className={styles.goCv2ndSection}>
          <div id={styles.goCv2ndSection}>
          <h2 ref={textRef}>{splitText()}</h2>
           
            <img src={smartlearner2ndLogo} alt="smartlearnerLogo" />
          </div>
          <section>
            <p>
              SmartLearner Driving School regularly sponsors and partners with
              GO CV to support events and attractions for underprivileged
              individuals and families in coventry.
            </p>
            <p>
              Our Collaboration helps fund local businesses and projects,
              providing low-cost or free tickets to local events.
            </p>
            <p>
              Together, Smartlearner and GO CV strive to offer the best deals
              for Coventry residents, benefiting the entire community.
            </p>
          </section>
        </section>
        {/* ///////////////////////////// */}
        <section className={styles.sponsorSec}>
          <div className={styles.sponsorHeadin}>
            <h2>SPONSORSHIPS</h2>
          </div>
          <Accordion />
        </section>
      </div>
    </div>
  );
}

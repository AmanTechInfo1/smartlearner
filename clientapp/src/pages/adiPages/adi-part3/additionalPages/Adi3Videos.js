import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";

import agreegoals from "../../../../assets/PART 3 2/PART 3 - 1. AGREEGOALS.mp4";
import routeDirection from "../../../../assets/PART 3 2/PART 3 - 2. ROUTE DIRECTIONS.mp4";
import routePlanning from "../../../../assets/PART 3 2/PART 3 - 3.ROUTE PLANNING.mp4";
import levelInstruction from "../../../../assets/PART 3 2/PART 3 - 4. THE LEVEL OF INSTRUCTION.mp4";
// import agreeRoals from "../../../../assets/PART 3 2/PART 3 - 5.AGREE ROLES & RESPONSIBILITIES.mp4";
// import fixingfaults from "../../../../assets/PART 3 2/PART 3 - 6. FIXING FAULTS.mp4";
import lessonStructure from "../../../../assets/PART 3 2/PART 3 - 7.LESSON STRUCTURE.mp4";
import briefingVisual from "../../../../assets/PART 3 2/PART 3 - 8.BRIEFING AND VISUAL AIDS.mp4";
import controlIntervention from "../../../../assets/PART 3 2/PART 3 - 9.CONTROL&INTERVENTION.mp4";
import askingEfective from "../../../../assets/PART 3 2/PART 3 - 10. ASKING EFFECTIVE QUESTIONS.mp4";
// import emergencyStop from "../../../../assets/PART 3 (1)/PART 3 - EMERGENCY STOP .mp4";
import selfReflection from "../../../../assets/PART 3 2/PART 3 - 12.SELF REFLECTION.mp4";
import manouveres from "../../../../assets/PART 3 (1)/PART 3 - THE MANOUVERES.mp4";
import givingDemo from "../../../../assets/PART 3 (1)/PART 3 - 14. GIVING DEMO.mp4";
import firstlessons from "../../../../assets/PART 3 2/PART 3 - 15. FIRST LESSON.mp4";
import givingFeedback from "../../../../assets/PART 3 2/PART 3 - GIVING FEEDBACK .mp4";
import beginnersfirst from "../../../../assets/PART 3 (1)/PART 3 - 15. BEGINNERS FIRST LESSON.mp4";
import junctions from "../../../../assets/PART 3 (1)/PART 3 - 16.JUNCTIONS.mp4";
import judgement from "../../../../assets/PART 3 (1)/PART 3 - 21 - JUDGEMENT OF ORU.mp4";
import useMirrors from "../../../../assets/PART 3 (1)/PART 3 - USE OF MIRRORS.mp4";
import useSignal from "../../../../assets/PART 3 (1)/PART 3 - USE OF SIGNALS.mp4";
import useSpeed from "../../../../assets/PART 3 (1)/PART 3 - USE OF SPEED.mp4";
// import dualCarriage from "../../../../assets/PART 3 (1)/PART 3 24. DUAL CARRIAGE WAYS AND MOTORWAYS.mp4";
// import townCities from "../../../../assets/PART 3 (1)/PART 3 26. TOWN & CITIES .mp4";
import vehicleSafety from "../../../../assets/PART 3 (1)/PART 3 28. VEHICLE SAFETY.mp4";

export default function Adi3Videos() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Adi part Videos"; // First part before "Driving"

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
    <div className={styles.AdiModuleOnecontainer}>
      <section className={styles.AdiModuleOneheader}>
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>
      <h2 className={styles.videotitle2}>Watch Our Video</h2>
      <div className={styles.videoContainer2}>
        <video className={styles.videodesign2} controls muted loop>
          <source src={agreegoals} type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src={routeDirection} type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src={routePlanning} type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src={levelInstruction} type="video/mp4" />
        </video>
        {/* <video className={styles.videodesign2} controls muted loop>
          <source src={agreeRoals} type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src={fixingfaults} type="video/mp4" />
        </video> */}
        <video className={styles.videodesign2} controls muted loop>
          <source src={lessonStructure} type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src={briefingVisual} type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src={controlIntervention} type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src={askingEfective} type="video/mp4" />
        </video>
        {/* <video className={styles.videodesign2} controls muted loop>
          <source src={emergencyStop} type="video/mp4" />
        </video> */}
        <video className={styles.videodesign2} controls muted loop>
          <source src={selfReflection} type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src={manouveres} type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src={givingDemo} type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src={firstlessons} type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src={givingFeedback} type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src={beginnersfirst} type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src={junctions} type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src={judgement} type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src={useMirrors} type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src={useSignal} type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src={useSpeed} type="video/mp4" />
        </video>
        {/* <video className={styles.videodesign2} controls muted loop>
          <source src={dualCarriage} type="video/mp4" />
        </video> */}
        {/* <video className={styles.videodesign2} controls muted loop>
          <source src={townCities} type="video/mp4" />
        </video> */}
        <video className={styles.videodesign2} controls muted loop>
          <source src={vehicleSafety} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

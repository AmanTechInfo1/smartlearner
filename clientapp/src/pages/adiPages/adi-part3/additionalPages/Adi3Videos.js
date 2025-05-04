import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";


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
          <source src="/agreegoals.mp4" type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src="/routedirection.mp4" type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src="/routeplaning.mp4" type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src="/levelofinstruction.mp4" type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src="/lessonstructure.mp4" type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src="/breifingandvisuals.mp4" type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src="/controlandinterventions.mp4" type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src="/askingeffectivequestions.mp4" type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src="/selfreflection.mp4" type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src="/monuveres.mp4" type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src="/givingdemo.mp4" type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src="/firstlesson.mp4" type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src="/givingfeedback.mp4" type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src="/beginnersfirstlesson.mp4" type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src="/junction.mp4" type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src="/judgementoforu.mp4" type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src="/useofmirrors.mp4" type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src="/useofsignals.mp4" type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src="/useofspeed.mp4" type="video/mp4" />
        </video>
        <video className={styles.videodesign2} controls muted loop>
          <source src="/vehiclesefaty.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

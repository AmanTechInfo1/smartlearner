import React, { useEffect,useRef } from 'react'
import gsap from "gsap";
import styles from './AdiModuleOne.module.css';




export default function AdiModuleOne() {


  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => { 
    const firstPart = "Human Checks Before Setting Off to Drive"; // First part before "Driving"
 
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
    <> <div className={styles.AdiModuleOnecontainer}>
    <section className={styles.AdiModuleOneheader}>
    <h1 ref={textRef}>{splitText()}</h1>
      <div className={styles.AdiModuleOnevideo}>
        <p> VIDEO – SELF CHECKS</p>
      </div>
    </section>

    <section className={styles.AdiModuleOneobjectives}>
      <h2>Objective:</h2>
      <ul>
        <li>Understand the personal (human) checks to perform before driving to ensure safety and readiness.</li>
        <li>Practice evaluating your physical, mental, and emotional preparedness through an engaging activity.</li>
        <li>Understand the essential vehicle checks required before your ADI Part 2 exam.</li>
        <li>Familiarize yourself with vehicle technology and its operation.</li>
        <li>Complete an activity to assess your readiness and understanding of your vehicle.</li>
      </ul>
    </section>

    <section className={styles.AdiModuleOneintroduction}>
      <h2>1. Introduction</h2>
      <p>
        Driving is a complex task that requires full physical, mental, and emotional focus. Human readiness plays a significant role in ensuring a safe journey.
        Ignoring personal checks can increase the risk of accidents, reduce reaction time, or lead to poor decision-making.
        Let’s explore the essential human checks every driver should perform before starting the engine.
      </p>
    </section>

    <section className={styles.AdiModuleOnechecks}>
      <h2>2. Human Checks Before Driving</h2>

      <div className={styles.AdiModuleOnecheckList}>
        <h3>A. Physical Readiness</h3>
        <ul>
          <li><strong>Fatigue Check:</strong> Are you well-rested? Avoid driving if you feel drowsy.</li>
          <li><strong>Vision and Hearing:</strong> Are your glasses or contact lenses (if needed) clean and correctly fitted?</li>
          <li><strong>Medications:</strong> Are you taking any medications that may cause drowsiness or impair your focus?</li>
          <li><strong>Physical Comfort:</strong> Adjust your seat, steering wheel, and mirrors to avoid strain during the drive.</li>
        </ul>
      </div>

      <div className={styles.AdiModuleOnecheckList}>
        <h3>B. Mental Readiness</h3>
        <ul>
          <li><strong>Focus and Alertness:</strong> Are you mentally sharp and free of distractions?</li>
          <li><strong>Route Awareness:</strong> Do you know where you’re going and have an idea of the traffic and road conditions?</li>
        </ul>
      </div>

      <div className={styles.AdiModuleOnecheckList}>
        <h3>C. Emotional Readiness</h3>
        <ul>
          <li><strong>Mood Check:</strong> Are you calm and composed?</li>
          <li><strong>Stress Level:</strong> Are you in a clear state of mind to focus on driving?</li>
        </ul>
      </div>
    </section>

    <section className={styles.AdiModuleOneactivity}>
      <h2>3. Activity: Evaluate Your Readiness</h2>
      <p>Complete the following checklist before your next drive. Rate each item as "Ready" or "Needs Improvement."</p>
      <div className={styles.AdiModuleOnechecklist}>
        <h3>Physical Readiness:</h3>
        <ul>
          <li>I feel well-rested and free from fatigue.</li>
          <li>My vision and hearing are clear.</li>
          <li>I am not under the influence of any impairing medications.</li>
          <li>I am physically comfortable, with my seat, mirrors, and clothing adjusted.</li>
        </ul>
        <h3>Mental Readiness:</h3>
        <ul>
          <li>I feel mentally alert and focused.</li>
          <li>I have planned my route and know where I am going.</li>
        </ul>
        <h3>Emotional Readiness:</h3>
        <ul>
          <li>I am calm and composed.</li>
          <li>I am free from excessive stress or emotional distractions.</li>
        </ul>
      </div>
    </section>
  </div></>
  )
}

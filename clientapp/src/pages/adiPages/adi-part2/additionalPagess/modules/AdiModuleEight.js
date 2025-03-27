import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./AdiModuleEight.module.css";

export default function AdiModuleEight() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Space in the COAST Method for Advanced Driving"; // First part before "Driving"

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
    <>
      {" "}
      <div className={styles.AdiModuleOnecontainer}>
        <section className={styles.AdiModuleOneheader}>
          <h1 ref={textRef}>{splitText()}</h1>
          <div className={styles.AdiModuleOnevideo}>
            <p> VIDEO – SELF CHECKS</p>
          </div>
        </section>

        <section className={styles.AdiModuleOneobjectives}>
          <h2>Objective:</h2>
          <p>By the end of this lesson, you will:</p>
          <ul>
            <li>
              1. Understand the importance of maintaining space as part of
              advanced driving.
            </li>
            <li>
              2. Learn strategies for managing space around your vehicle to
              ensure safety and smooth driving.
            </li>
            <li>
              3. Complete an activity to practice maintaining appropriate space
              in real driving situations.
            </li>
          </ul>
        </section>

        <section className={styles.AdiModuleOneintroduction}>
          <h2>1. Introduction to Space in the COAST Method</h2>
          <p>
            Space refers to the physical distance you maintain between your
            vehicle and other road users, objects, or potential hazards. It’s a
            critical element of the COAST method, as it provides you with the
            necessary time and room to respond to changes on the road.
          </p>
          <p>
            Maintaining proper space ensures that you can avoid collisions,
            manage risks, and drive more smoothly. Advanced drivers use space
            management to predict and adapt to the actions of others,
            demonstrating control and professionalism.
          </p>
        </section>

        <section className={styles.AdiModuleOnechecks}>
          <h2>2. Why is Space Important?</h2>

          <div className={styles.AdiModuleOnecheckList}>
            <h3>1. Time to React:</h3>
            <ul>
              <li>
                More space gives you more time to process and react to
                unexpected changes.
              </li>
              <h3>2. Minimizes Risk:</h3>
              <li>
                A safe distance reduces the chance of collisions, especially in
                emergencies.
              </li>
              <h3>3. Enhances Comfort:</h3>
              <li>
                Proper spacing ensures a smoother, less stressful drive for you
                and your passengers.
              </li>
              <h3>4. Supports Anticipation:</h3>
              <li>
                Space allows you to predict and respond to potential hazards
                effectively.
              </li>
            </ul>
          </div>

          <h2>3. Types of Space to Manage</h2>

          <div className={styles.AdiModuleOnecheckList}>
            <h3>A. Following Distance</h3>
            <ul>
              <li>Maintain a safe gap from the vehicle in front.</li>
              <li>
                Use the 2-second rule in good conditions and increase it to 4
                seconds or more in adverse weather or on wet roads.
              </li>
              <h3>B. Stopping Distance</h3>
              <li>
                Factor in your reaction time, braking capability, and road
                conditions.
              </li>
              <li>
                Be ready to stop safely within the visible distance ahead.
              </li>
              <h3>C. Side Space</h3>
              <li>
                Keep safe lateral space to the sides of your vehicle, especially
                near cyclists, motorcyclists, or parked cars.
              </li>
              <li>
                When overtaking, give at least 1.5 meters of clearance to
                vulnerable road users.
              </li>
              <h3>D. Space Behind</h3>
              <li>
                Monitor your mirrors regularly to ensure vehicles behind are not
                too close.
              </li>
              <li>
                If being tailgated, slow down gradually to encourage the driver
                to increase their distance.
              </li>
              <h3>E. Space at Junctions and Roundabouts</h3>
              <li>
                Avoid blocking crossings, junctions, or roundabouts. Always
                leave enough room for unexpected movements by other road users.
              </li>
            </ul>
          </div>
          <h2>4. Strategies for Maintaining Space</h2>
          <div className={styles.AdiModuleOnecheckList}>
            <h3>A. Anticipate Changes</h3>
            <ul>
              <li>
                Watch for brake lights, turn signals, or changes in traffic
                flow. Adjust your space accordingly.
              </li>
              <h3>B. Use Road Positioning</h3>
              <li>
                Adjust your position to maximize space, such as moving slightly
                left when passing parked cars to avoid doors opening
                unexpectedly.
              </li>
              <h3>C. Adapt to Speed and Conditions</h3>
              <li>
                The faster you’re driving or the worse the road conditions, the
                more space you need.
              </li>
              <h3>D. Manage Close-Followers</h3>
              <li>
                If a vehicle is too close behind, gradually slow down to
                encourage them to back off, or pull over if necessary to let
                them pass.
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.AdiModuleOneactivity}>
          <h2>5. Activity: Practicing Space Management</h2>

          <div className={styles.AdiModuleOnechecklist}>
            <h3>Part A: Pre-Drive Reflection</h3>
            <p>Before your drive, ask yourself:</p>
            <ul>
              <li>
                1. Are the road and weather conditions likely to affect spacing
                requirements? <br />
                2. Do I know the 2-second rule and how to apply it? <br />
                3. Am I ready to adapt my space management to different road
                users?
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.AdiModuleOneactivity}>
          <h2>Part B: On-the-Road Spacing Challenge</h2>

          <div className={styles.AdiModuleOnechecklist}>
            <h3>1. Following Distance Check:</h3>

            <ul>
              <li>
                During your drive, use the 2-second rule to check your distance
                from the vehicle in front:
              </li>
              <li>
                Pick a fixed point (e.g., a road sign).
                <br />
                When the car in front passes the point, count "One thousand and
                one, one thousand and two."
                <br />
                If you pass the point before finishing, increase your distance.
              </li>
              <h3>2. Side Space Monitoring</h3>
              <li>
                When overtaking cyclists or parked cars, ensure a minimum
                clearance of 1.5 meters.
              </li>
              <li>
                If conditions make this challenging, slow down and wait for a
                safer opportunity to pass.
              </li>
              <h3>3. Reaction Space Test</h3>
              <li>
                As you approach junctions or roundabouts, maintain enough room
                to stop safely if the vehicle ahead stops suddenly.
              </li>
              <li>
                Be prepared to adjust spacing if traffic patterns change
                unexpectedly.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

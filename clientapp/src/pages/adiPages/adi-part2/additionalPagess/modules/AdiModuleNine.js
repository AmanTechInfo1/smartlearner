import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./AdiModuleNine.module.css";

export default function AdiModuleNine() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Time in the COAST Method for Advanced Driving"; // First part before "Driving"

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
            <p> INSERT VIDEO TIME</p>
          </div>
        </section>

        <section className={styles.AdiModuleOneobjectives}>
          <h2>Objective:</h2>
          <p>By the end of this lesson, you will:</p>
          <ul>
            <li>
              1. Understand the role of Time in the COAST method for advanced
              driving.
            </li>
            <li>
              2. Learn how to use time effectively to enhance safety and
              decision-making.
            </li>
            <li>
              3. Complete an activity to develop better time management and
              hazard anticipation while driving.
            </li>
          </ul>
        </section>

        <section className={styles.AdiModuleOneintroduction}>
          <h2>1. Introduction to Time in Driving</h2>
          <p>
            In the COAST method, Time refers to the ability to assess and manage
            the timing of your actions while driving. Giving yourself more time
            allows you to anticipate hazards, make better decisions, and react
            calmly to changes on the road.
          </p>
          <p>
            Time is not just about speed—it's about creating opportunities to
            stay in control and maintain safety, especially in complex or
            unpredictable driving environments.
          </p>
        </section>

        <section className={styles.AdiModuleOnechecks}>
          <h2>2. Why is Time Important in Driving?</h2>

          <div className={styles.AdiModuleOnecheckList}>
            <h3>1. Hazard Anticipation:</h3>
            <ul>
              <li>
                More time allows you to spot and assess potential hazards early.
              </li>
              <h3>2. Reduced Stress</h3>
              <li>
                Managing time effectively helps you remain calm and composed,
                avoiding rushed or abrupt actions.
              </li>
              <h3>3. Smooth Driving:</h3>
              <li>
                Proper use of time ensures smoother acceleration, braking, and
                cornering, making the journey more comfortable for passengers.
              </li>
              <h3>4. Safety Margin:</h3>
              <li>
                Extra time creates a buffer, reducing the likelihood of
                collisions or near misses.
              </li>
            </ul>
          </div>

          <h2>3. Key Time Management Techniques</h2>

          <div className={styles.AdiModuleOnecheckList}>
            <h3>A. Limit points</h3>
            <ul>
              <li>
                Always look to your limit points identify potential hazards.
              </li>
              <li>
                This means scanning far ahead of your vehicle to anticipate
                what’s coming up, such as traffic lights, bends, or vehicles
                entering the road.
              </li>
              <h3>B. Adjusting Speed to Conditions</h3>
              <li>
                Slow down in adverse weather, heavy traffic, or areas with poor
                visibility to give yourself more time to react.
              </li>

              <h3>C. Timing Your Approach</h3>
              <li>
                <strong>1. To Junctions :</strong>
                Ease off the accelerator early to approach junctions smoothly
                rather than rushing and braking sharply.
                <br />
                <strong>2. To Roundabouts :</strong> Use time to assess gaps in
                traffic and decide when to enter without hesitation.
                <br />
                <strong>3. To Traffic Lights :</strong> When approaching amber
                lights, use the extra time to judge whether to stop or proceed
                safely.
              </li>
              <h3>D. Responding to Hazards </h3>
              <li>
                Anticipate the actions of other road users, such as pedestrians
                crossing or vehicles merging, by allowing time to evaluate their
                behaviour.
              </li>
              <h3>E. Create Time Using Space</h3>
              <li>
                Maintain safe distances from other road users (e.g., 2-second
                rule), as extra space translates directly into more time to
                react.
              </li>
            </ul>
          </div>
          <h2>4. Common Situations Where Time Management is Crucial</h2>
          <div className={styles.AdiModuleOnecheckList}>
            <h3>1. Merging Lanes :</h3>
            <ul>
              <li>Use time to assess gaps and merge smoothly.</li>
              <h3>2. Overtaking :</h3>
              <li>
                Take time to assess the road ahead, ensuring you have enough
                space and visibility to overtake safely.
              </li>
              <h3>3. Negotiating Bends :</h3>
              <li>
                Approach bends with enough time to adjust speed and position
                based on visibility and road conditions.
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.AdiModuleOneactivity}>
          <h2>5. Activity: Time Awareness in Driving</h2>

          <div className={styles.AdiModuleOnechecklist}>
            <h3>Part A: Pre-Drive Planning</h3>
            <p>Before setting off, answer these questions:</p>
            <ul>
              <li>
                1. Do I know the route, including potential hazards like busy
                junctions or narrow roads?
                <br />
                2. Are there external factors, such as weather or traffic, that
                may require me to adjust my timing?
                <br />
                3. Am I mentally prepared to anticipate and react calmly?
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.AdiModuleOneactivity}>
          <h2>Part B: Time Management Drill</h2>

          <div className={styles.AdiModuleOnechecklist}>
            <h3>1. 12-Second Rule Practice :</h3>

            <ul>
              <li>
                While driving, pick a fixed point ahead (e.g., a signpost or a
                junction).
              </li>
              <li>
                Begin counting as you observe the point. If you pass it before
                12 seconds, reduce your speed slightly to give yourself more
                time.
              </li>
              <li>Repeat this at various points on your journey.</li>
              <h3>2. Smooth Approaches Exercise :</h3>
              <li>
                <strong>For the next 10 minutes of driving: </strong> <br></br>
                As you approach junctions, roundabouts, or traffic lights, ease
                off the accelerator early.
                <br />
                Observe how much smoother and less stressful your stops or
                entries become.
              </li>

              <h3>3. Reacting to Hazards</h3>
              <li>
                During your drive, focus on identifying hazards (e.g., a car
                turning into your lane or a pedestrian stepping onto the road).
              </li>
              <li>
                Note how much time you had to react. Ask yourself: Did I have
                enough time? What adjustments could I make to improve my timing
                next time?
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

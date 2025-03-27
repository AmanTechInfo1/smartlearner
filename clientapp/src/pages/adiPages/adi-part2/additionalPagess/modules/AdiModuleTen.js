import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./AdiModuleTen.module.css";

export default function AdiModuleTen() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Mastering the TUG Method for Safer and Smoother Driving"; // First part before "Driving"

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
          <h2>Lesson Objectives</h2>
          <p>By the end of this lesson, you will:</p>
          <ul>
            <li>
              1. Understand the TUG Method (Take, Use, Give) and its relevance
              in advanced driving.
            </li>
            <li>
              2. Learn how to apply the TUG Method in different driving
              scenarios to improve safety and communication.
            </li>
            <li>
              3. Be able to use concepts like limit points and funnel vision to
              enhance your driving technique.
            </li>
          </ul>
        </section>

        <section className={styles.AdiModuleOnechecks}>
          <h2>1. What is the TUG Method?</h2>
          <p>
            The TUG Method is an advanced driving approach designed to improve
            control, awareness, and collaboration with other road users.
          </p>
          <div className={styles.AdiModuleOnecheckList}>
            <ul>
              <li>
                <strong>Take :</strong>
                Taking space on the road to maximise visibility and safety.
              </li>

              <li>
                <strong>Use :</strong>
                Using available information to make informed decisions.
              </li>
              <li>
                <strong>Give :</strong>
                Giving clear information to other road users about your
                intentions.
              </li>
            </ul>
          </div>

          <h2>Understanding Driving Awareness</h2>

          <div className={styles.AdiModuleOnecheckList}>
            <h3>Tunnel Vision vs. Funnel Vision</h3>
            <ul>
              <li>
                <strong>Tunnel Vision :</strong>A narrow focus on one area,
                ignoring surrounding hazards or details.
              </li>
              <li>
                <strong>Funnel Vision :</strong>A wide initial focus, gradually
                narrowing to prioritise key information while maintaining
                awareness of the broader environment.
              </li>
              <h3>Limit Point</h3>
              <p>
                The limit point is the furthest point ahead on the road that you
                can see clearly. It helps you:
              </p>
              <li>Judge the curvature of the road.</li>
              <li>Adjust your speed and positioning as needed.</li>

              <h3>Key Tip:</h3>
              <li>
                <strong>
                  If the limit point moves away (road straightens):
                </strong>
                Gradually increase speed.
                <br />
                <strong>
                  If the limit point gets closer (bend tightens) :
                </strong>
                Slow down to prepare for sharper steering adjustments.
              </li>
            </ul>
          </div>
          <h2>
            Section 2: Take – Taking Space to Maximize Safety and Visibility
          </h2>
          <p>
            Taking space means positioning your vehicle for the best possible
            visibility and reaction time.
          </p>
          <div className={styles.AdiModuleOnecheckList}>
            <h3>Examples of Taking Space :</h3>
            <ul>
              <li>
                <strong>Country Roads :</strong> On narrow roads, position
                slightly closer to the center of your lane to improve visibility
                and anticipate oncoming traffic.
              </li>

              <li>
                <strong>Bends :</strong>
                Move towards the center line (if safe) to see further around the
                curve.
              </li>
              <h3>Key Benefits :</h3>
              <li>Improved hazard detection.</li>
              <li>Increased reaction time.</li>
            </ul>
          </div>
        </section>

        <section className={styles.AdiModuleOneactivity}>
          <h2>Section 3: Use – Using Information Effectively</h2>
          <p>
            Using information is about actively observing and processing your
            surroundings.
          </p>
          <div className={styles.AdiModuleOnechecklist}>
            <h3>Examples of Using Information :</h3>

            <ul>
              <li>
                <strong>A. Approaching a Roundabout :</strong>
                <br />
                1. Spot road signs to identify exits early.
                <br />
                2. Observe other vehicles’ indicators and positioning to predict
                their movements.
              </li>
              <li>
                <strong>B. Urban Driving :</strong>
                <br />
                1. Look for parked vehicles, pedestrians, and cyclists who may
                move into your path.
              </li>
              <h3>Key Actions :</h3>
              <li>
                Always scan the road ahead, to the sides, and behind using
                mirrors.
              </li>
              <li>
                Use information to anticipate and prepare for changes in traffic
                flow.
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.AdiModuleOneactivity}>
          <h2>Section 4: Give – Giving Clear Information</h2>
          <p>
            Giving information ensures other road users know your intentions,
            making the road safer for everyone.
          </p>
          <div className={styles.AdiModuleOnechecklist}>
            <h3>How to Give Clear Information :</h3>

            <ul>
              <li>
                <strong>Use Indicators :</strong>
                Signal well in advance when turning or changing lanes.
              </li>
              <li>
                <strong>Use Brake Lights :</strong>
                Gradually press the brake pedal to warn drivers behind you of
                your intention to slow down.
              </li>
              <li>
                <strong>Positioning :</strong> Adjust your road position to
                signal your intent (e.g., moving slightly to the right before
                turning right).
              </li>
              <h3>Key Example :</h3>
              <li>
                <strong>Changing Lanes on a Motorway : </strong> <br></br>
                1. Signal early.
                <br />
                2. Check mirrors and blind spots.
                <br />
                3. Change lanes smoothly to communicate your intention clearly.
              </li>

              <h3>Summary: Mastering the TUG Method</h3>
              <li>
                <strong>Take :</strong> Position your vehicle for maximum
                visibility and safety.
              </li>

              <li>
                <strong>Use :</strong> Gather and process information from your
                surroundings to anticipate hazards.
              </li>
              <li>
                <strong>Give :</strong> Communicate your intentions clearly and
                consistently to other drivers.
              </li>
            </ul>
            <p>
              By applying the TUG Method, you’ll improve not only your safety
              but also your collaboration with other road users, making you a
              more confident and competent driver.
            </p>
          </div>

          <h2>Final Activity: TUG in Action</h2>

          <div className={styles.AdiModuleOnechecklist}>
            <h3>
              <strong>Task :</strong> Apply the TUG Method to the following
              scenario :
            </h3>

            <ul>
              <li>You are driving on a rural road approaching a sharp bend.</li>
              <li>
                <strong>B. Urban Driving :</strong>
                <br />
                1. Look for parked vehicles, pedestrians, and cyclists who may
                move into your path.
              </li>

              <li>
                An oncoming vehicle is visible but distant, and the road narrows
                just past the bend.
              </li>
              <h3>Your response should include :</h3>
              <li>
                1. How you would Take space to enhance visibility and safety.
              </li>
              <li>
                2. How you would Use information from the road, the vehicle
                ahead, and the environment.
              </li>
              <li>
                3. How you would Give information to other road users about your
                intentions.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

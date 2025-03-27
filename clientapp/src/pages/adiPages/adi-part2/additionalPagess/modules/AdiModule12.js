import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./AdiModule12.module.css";

export default function AdiModule12() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart =
      "How to Book the ADI Part 2 Test and What to Bring: A Complete Guide"; // First part before "Driving"

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
            <p> INSERT VIDEO – WHAT HAPPENS ON THE TEST</p>
          </div>
        </section>

        <section className={styles.AdiModuleOneobjectives}>
          <p>
            Becoming an Approved Driving Instructor (ADI) is an exciting journey
            that allows you to help others achieve a vital life skill. One
            crucial step in this process is passing the ADI Part 2 test, which
            assesses your driving ability to ensure you can drive at a
            professional standard. In this blog post, we’ll cover everything you
            need to know about booking the ADI Part 2 test and what to bring on
            the day.
          </p>
        </section>
        <section className={styles.AdiModuleOneobjectives}>
          <h2>How to Book the ADI Part 2 Test</h2>
          <p>
            Booking your ADI Part 2 test is straightforward, provided you’ve
            completed the earlier steps in your instructor training journey.
            Here’s a step-by-step guide:
          </p>
          <ul>
            <h3>1. Check Your Eligibility</h3>
            <li>
              Before booking, ensure you’ve passed the ADI Part 1 test (theory
              test) and have received your Personal Reference Number (PRN) from
              the DVSA. This number is crucial as it identifies you throughout
              the ADI qualification process.
            </li>
            <h3>2. Visit the GOV.UK Website</h3>
            <li>
              The easiest way to book your ADI Part 2 test is online via the
              official GOV.UK website. This platform ensures secure payment and
              access to all available test centre locations.
            </li>
            <h3>3. Choose a Test Centre</h3>
            <li>
              Not every driving test centre offers ADI Part 2 tests, so you’ll
              need to find one that does. Use the DVSA’s list of test centres to
              find the most convenient option.
            </li>
            <h3>4. Provide Your Details</h3>
            <li>
              <strong>You’ll need :</strong>
              <br />
              1. Your driving licence details.
              <br />
              2. Your PRN.
              <br />
              3. Payment information for the £111 test fee (correct as of 2024).
            </li>
            <h3>5. Select a Test Date and Time</h3>
            <li>
              ADI Part 2 tests are usually in high demand, so book well in
              advance to secure a slot that works for you. Consider your
              readiness and schedule plenty of practice before the test day.
            </li>
            <h3>6. Confirmation</h3>
            <li>
              After booking, you’ll receive a confirmation email with your test
              details. Save this email—it may be requested on the day.
            </li>
          </ul>
        </section>

        <section className={styles.AdiModuleOnechecks}>
          <h2>What to Bring to Your ADI Part 2 Test?</h2>
          <p>
            Preparation is key to a smooth test day. Make sure you bring the
            following:
          </p>
          <div className={styles.AdiModuleOnecheckList}>
            <ul>
              <h3>1. Your Driving Licence</h3>
              <p>Bring both parts of your licence:</p>
              <li>
                <strong>Photocard licence </strong>
                (or a valid passport if you still have the older-style paper
                licence).
              </li>

              <li>
                <strong>Paper counterpart </strong>
                (if applicable).
              </li>
              <p>Ensure your licence is up to date and not expired.</p>
              <h3>2. Your Appointment Confirmation</h3>
              <li>
                Bring a printed or digital copy of your booking confirmation
                email. This serves as proof of your appointment.
              </li>
              <h3>3. A Suitable Car</h3>
              <p>Your car must meet the DVSA’s requirements:</p>
              <li>
                <strong>Roadworthy and safe :</strong> The car should be taxed,
                insured, and have a valid MOT (if applicable).
              </li>
              <li>
                <strong>Manual or automatic :</strong> You can use either
              </li>
              <li>
                <strong>Clear windows and mirrors :</strong> Ensure nothing
                obstructs visibility.
              </li>
              <li>No Warning lights, appropriate tyres etc. </li>
              <p>
                You can check on the government website which cars are accepted
                and which aren’t.{" "}
              </p>
              <h3>4. Glasses or Contact Lenses</h3>
              <li>
                If you need corrective lenses to drive, don’t forget them.
                You’ll need them for the eyesight test and the driving portion
                of the test.
              </li>
              <h3>A Final Checklist</h3>
              <p>
                Before heading to your ADI Part 2 test, double-check the
                following:
              </p>
              <li>
                1. Have you practiced all the required manoeuvres?
                <br />
                2. Is your car clean, roadworthy, and stocked with necessary
                documents (e.g., insurance and MOT)? <br />
                3. Do you have all required items (licence, confirmation,
                glasses)?
              </li>
            </ul>
          </div>

          <h2>Why Preparation Matters</h2>
          <p>
            The ADI Part 2 test is more than a driving assessment—it’s a
            reflection of your readiness to teach driving professionally.
            Booking the test is simple, but showing up fully prepared requires
            careful planning. You have three attempts at this test.{" "}
          </p>

          <h3>Good luck!</h3>
        </section>
      </div>
    </>
  );
}

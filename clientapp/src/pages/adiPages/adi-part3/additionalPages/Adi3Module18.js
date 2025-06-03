import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import backgroundImage from "../../../../assets/images/bookpart3.jpg";

export default function Adi3Module18() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Book Your Part 3 Test"; // First part before "Driving"

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
      <section
        className={styles.AdiModuleOneheader}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}>
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>
      {/* ////////////////////////////////////////// */}

      <div className={styles.adi3module18container}>
        <h1 className={styles.adi3module18mainHeading}>
          💻 How to Book Your Part 3 Test
        </h1>

        <div className={styles.adi3module18section}>
          <h2 className={styles.adi3module18adi3module18subHeading}>
            Step 1: Head to the Booking Website
          </h2>
          <p>
            Visit the official{" "}
            <a
              href="https://www.gov.uk/adi-part-3-test"
              target="_blank"
              rel="noopener noreferrer">
              GOV.UK ADI Part 3 booking page
            </a>
          </p>
        </div>

        <div className={styles.adi3module18section}>
          <h2 className={styles.adi3module18subHeading}>Step 2: Log In</h2>
          <p>You’ll need:</p>
          <ul className={styles.adi3module18list}>
            <li>Your ADI personal reference number</li>
            <li>Your driving licence number</li>
          </ul>
        </div>

        <div className={styles.adi3module18section}>
          <h2 className={styles.adi3module18subHeading}>
            Step 3: Choose Your Test Centre
          </h2>
          <p>Pick a centre authorised for Part 3 exams.</p>
        </div>

        <div className={styles.adi3module18section}>
          <h2 className={styles.adi3module18subHeading}>
            Step 4: Select a Date and Time
          </h2>
          <p>
            Book early and be flexible. Use the HOLD service if no dates are
            available.
          </p>
        </div>

        <div className={styles.adi3module18section}>
          <h2 className={styles.adi3module18subHeading}>
            Step 5: Prepare Your Candidate
          </h2>
          <p>
            Bring a real pupil (learner or full licence holder) with valid
            insurance. No charging unless on a trainee licence.
          </p>
        </div>

        <div className={styles.adi3module18section}>
          <h2 className={styles.adi3module18subHeading}>💳 Cost of the Test</h2>
          <p>
            The Part 3 exam costs{" "}
            <span className={styles.adi3module18price}>£111</span> (as of 2024).
          </p>
        </div>

        <div className={styles.adi3module18section}>
          <h2 className={styles.adi3module18subHeading}>
            🧠 Quick Tips for Success
          </h2>
          <ul className={styles.adi3module18list}>
            <li>Practice with real learners and mock scenarios.</li>
            <li>Keep a lesson diary (especially if on a pink badge).</li>
            <li>Request backseat feedback sessions with your trainer.</li>
            <li>Consider a mock Part 3 test.</li>
          </ul>
        </div>

        <div className={styles.adi3module18section}>
          <h2 className={styles.adi3module18subHeading}>
            📅 Rescheduling or Cancelling
          </h2>
          <p>
            Reschedule or cancel up to 3 working days before your test via the
            GOV.UK portal.
          </p>
        </div>

        <div className={styles.adi3module18finalMessage}>
          <p>
            The Part 3 exam is your final step to becoming a qualified
            instructor! 🌟 With preparation, trainer support, and confidence —
            you will succeed!
          </p>
          <p>
            Need help?{" "}
            <a href="tel:+4402475092784" style={{ textDecoration: "none" }}>
              {" "}
              <span className={styles.adi3module18highlight}>
                Reach out to us anytime!
              </span>{" "}
            </a>
            🚀
          </p>
        </div>
      </div>

      <div className={styles.adiLastNextbtn}>
        <Link to="/adi-videos">
          {" "}
          <button className={styles.adinextbtns}>Next Page</button>
        </Link>
      </div>
    </div>
  );
}

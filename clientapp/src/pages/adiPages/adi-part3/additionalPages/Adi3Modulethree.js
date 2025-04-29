import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaCarCrash,
  FaUserShield,
  FaLock,
  FaRegMoneyBillAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Adi3Modulethree() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "The legal stuff"; // First part before "Driving"

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

  //   ///////////////////////////////////////////////////////
  const sections = [
    {
      icon: <FaBalanceScale />,
      title: "Equality & Diversity Laws",
      color: "#ff4d4d",
      points: [
        "Equality Act 2010 – Ensures fair and equal treatment for all learners.",
        "Disability Discrimination Act – Accommodate disabled learners.",
      ],
    },
    {
      icon: <FaCarCrash />,
      title: "Road Traffic Laws & Instructor Regulations",
      color: "#ffa64d",
      points: [
        "Road Traffic Act 1988 – Governs safe road use.",
        "Motor Vehicles Regulations 1999 – Supervision and eyesight rules.",
        "Instructor Suspension Act 2009 – DVSA authority for suspensions.",
      ],
    },
    {
      icon: <FaLock />,
      title: "Data Protection & Confidentiality",
      color: "#4dd2ff",
      points: [
        "UK GDPR & Data Protection Act 2018 – Secure personal data handling.",
      ],
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Health & Safety Regulations",
      color: "#4dff88",
      points: [
        "Health & Safety at Work Act 1974 – Safe learning environment.",
        "Management of H&S 1999 – Risk assessments for safe lessons.",
      ],
    },
    {
      icon: <FaRegMoneyBillAlt />,
      title: "Consumer Rights & Business Compliance",
      color: "#ff66cc",
      points: [
        "Consumer Rights Act 2015 – Fair pricing and service.",
        "Supply of Goods & Services Act – Reasonable care and skill.",
      ],
    },
    {
      icon: <FaUserShield />,
      title: "Criminal Record & Safeguarding Laws",
      color: "#cccc00",
      points: [
        "Rehabilitation of Offenders Act – DBS checks required.",
        "Children & Safeguarding Acts – Protect young/vulnerable learners.",
      ],
    },
  ];
  // ////////////////////////////////////////////////////////////////

  return (
    <div className={styles.AdiModuleOnecontainer}>
      <section className={styles.AdiModuleOneheader}>
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>
      {/* ////////////////////////////////////////////////////////////// */}
      <div className={styles.adipart3threecontainer}>
        <h1 className={styles.adipart3threeheading}>
          Legal Requirements for Driving Instructors
        </h1>
        <p className={styles.adipart3threesubheading}>
          Here’s a brief explanation of each legal act with examples relevant to
          driving instructors:
        </p>
        <div className={styles.adipart3threegrid}>
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={styles.adipart3threecard}
              style={{ borderColor: section.color }}
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={styles.adipart3threeicon}
                style={{ color: section.color }}
              >
                {section.icon}
              </div>
              <h3 className={styles.adipart3threetitle}>{section.title}</h3>
              <ul className={styles.adipart3threelist}>
                {section.points.map((point, idx) => (
                  <li key={idx}>🔹 {point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className={styles.licenseSection}>
          <h2 className={styles.licenseHeading}>Licence Check Code</h2>
          <p className={styles.licenseText}>
            Just because a student presents a provisional licence doesn’t mean
            it’s valid. Always confirm its authenticity at:
            <a
              href="https://www.gov.uk/view-driving-licence"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.gov.uk/view-driving-licence
            </a>
            <br />
            Then use the code at:
            <a
              href="https://www.gov.uk/check-driving-information"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.gov.uk/check-driving-information
            </a>
          </p>
        </div>
      </div>
      {/* ///////////////////////////////////////////////// */}

      <div className={styles.quizStartDiv}>
        <section className={styles.startQuizSection}>
          <h1>Start Quiz</h1>
          <h3>15 Questions</h3>
          <p>
            Here’s a quick summary quiz to test your understanding of of Part 3:
            The legal stuff the lesson before setting off
          </p>
          <Link to="/takequizCatName/legal-stuff">
            {" "}
            <button>Start Quiz</button>
          </Link>
        </section>
      </div>

      {/* ////////////////////////////////////////////////////////// */}
    </div>
  );
}

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
        "Equality Act 2010 – Ensures that all learners receive fair and equal treatment, regardless of age, disability, gender, race, religion, or sexual orientation. 🔹 Example: A driving instructor should make reasonable adjustments for a learner with dyslexia by providing verbal voice recordings of feedback instead of written notes.",
        "Disability Discrimination Act 1995 (now covered by the Equality Act 2010) – Requires instructors to accommodate disabled learners, ensuring they have equal access to driving lessons. 🔹 Example: If a learner has limited mobility, the instructor should use a vehicle with hand controls if needed or recommend them to an appropriate trainer.",
      ],
    },
    {
      icon: <FaCarCrash />,
      title: "Road Traffic Laws & Instructor Regulations",
      color: "#ffa64d",
      points: [
        "Road Traffic Act 1988 – Governs safe road use and requires instructors to ensure learners drive legally and safely. 🔹 Example: An instructor must ensure that a learner has a valid provisinal licence before beginning lessons.",
        "Motor Vehicles (Driving Licences) Regulations 1999 – Outlines the legal requirements for learner drivers, including supervision and eyesight standards. 🔹 Example: An instructor must ensure their learner can read a number plate from 20 metres before starting lessons.",
        "Driving Instruction (Suspension and Exemption Powers) Act 2009 – Allows the DVSA to suspend instructors who pose a risk to learners. 🔹 Example: If an instructor has unsafe teaching practices, such as allowing learners to drive without proper supervision, they may be suspended.",
      ],
    },
    {
      icon: <FaLock />,
      title: "Data Protection & Confidentiality",
      color: "#4dd2ff",
      points: [
        "UK General Data Protection Regulation (UK GDPR) & Data Protection Act 2018 – Requires instructors to handle personal data securely and not share it without consent. 🔹 Example: A driving instructor must not share a learner’s phone number or test results without permission.",
      ],
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Health & Safety Regulations",
      color: "#4dff88",
      points: [
        "Health and Safety at Work Act 1974 – Ensures a safe learning environment for both the instructor and learner. 🔹 Example: Instructors must regularly maintain their vehicle to prevent mechanical failiures during lesson.",
        "Management of Health and Safety at Work Regulations 1999 – Requires risk assessments to ensure lessons are conducted safely. 🔹 Example: If road conditions are hazardous due to ice, an instructor should assess whether it’s safe to conduct the lesson or postpone it.",
      ],
    },
    {
      icon: <FaRegMoneyBillAlt />,
      title: "Consumer Rights & Business Compliance",
      color: "#ff66cc",
      points: [
        "Consumer Rights Act 2015 – Ensures that driving lessons are fairly priced and meet expected service standards. 🔹 Example: If an instructor cancels a prepaid lesson without rescheduling, they must offer a refund.",
        "The Supply of Goods and Services Act 1982 – Requires instructors to deliver lessons with reasonable care and skill. 🔹 Example: An instructor must provide clear, structured lessons rather than cutting lessons short or failing to give proper guidance.",
      ],
    },
    {
      icon: <FaUserShield />,
      title: "Criminal Record & Safeguarding Laws",
      color: "#cccc00",
      points: [
        "Rehabilitation of Offenders Act 1974 – Requires instructors to undergo an enhanced DBS check to ensure they are safe to work with young and vulnerable learners. 🔹 Example: An instructor with a history of serious driving offences or safeguarding concerns may be refused a licence to teach.",
        "Children Act 1989 & Safeguarding Vulnerable Groups Act 2006 – Protects young and vulnerable learners from harm or abuse. 🔹 Example: If a young learner confides in their instructor about being in danger, the instructor must report it to the appropriate safeguarding authority.",
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

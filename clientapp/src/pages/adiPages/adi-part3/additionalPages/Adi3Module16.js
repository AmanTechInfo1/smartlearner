import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

import { motion } from "framer-motion";

export default function Adi3Module16() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Trainee Badge"; // First part before "Driving"

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
  // /////////////////////////////////////////////////
  const data = [
    {
      aspect: "Experience",
      trainee: "Real-world teaching with actual learners",
      part3: "No teaching experience outside of training",
    },
    {
      aspect: "Earnings",
      trainee: "Can earn while training (within franchise rules)",
      part3: "No earnings until fully qualified",
    },
    {
      aspect: "Preparation",
      trainee: "Hands-on, practical experience with feedback",
      part3: "Limited to simulations or private practice",
    },
    {
      aspect: "Cost",
      trainee: "£140 + 20 hours additional training",
      part3: "No badge cost",
    },
    {
      aspect: "Part 3 Readiness",
      trainee: "Easier to book test with your own pupils",
      part3: "Must provide your own pupil for the test",
    },
  ];
  ///////////////////////////////////////////////////////
  return (
    <div className={styles.AdiModuleOnecontainer}>
      <section className={styles.AdiModuleOneheader}>
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>
      {/* ///////////////////////////////////////////////// */}
      <div className={styles.Adi3Module161stcontainer}>
        <section className={styles.Adi3Module161stheaderSection}>
          <h1 className={styles.Adi3Module161stmainHeading}>
            Trainee Badge <span>vs</span> Going Straight to the Part 3 Test
          </h1>
          <p className={styles.Adi3Module161stdescription}>
            Once you've completed at least 40 hours of Part 3 training, your
            sponsoring driving school can sign off your progress if they're
            confident that you've understood the required curriculum. At this
            point, you’ll face an important decision: whether to apply for a
            trainee licence (commonly known as the pink badge) or to go straight
            to the Part 3 test.
          </p>
        </section>

        <section className={styles.Adi3Module161stdecisionSection}>
          <div className={styles.Adi3Module161stcard}>
            <h2 className={styles.Adi3Module161stcardTitle}>
              Trainee Licence (PDI Badge)
            </h2>
            <p className={styles.Adi3Module161stcardContent}>
              The trainee badge is designed to give you real-world experience as
              you continue to learn. It costs £140 and is valid for six months.
              This route allows you to teach actual learners and earn money
              while still under supervision.
            </p>
            <ul className={styles.Adi3Module161stlist}>
              <li>A supply of learners</li>
              <li>Ongoing support</li>
              <li>Structured guidance</li>
            </ul>
            <p className={styles.Adi3Module161stwarning}>
              ⚠️ However, it’s crucial to remember that this badge is a training
              tool, not a qualification. Too often, trainees become overly
              focused on pupil pass rates and treat the badge as a full-time
              job, losing sight of their own development.
            </p>
            <p className={styles.Adi3Module161stimportant}>
              <strong>
                **Passing Part 3 requires more than helping learners pass—**you
                need to demonstrate your ability to deliver structured, safe,
                and reflective instruction.
              </strong>
            </p>
          </div>

          <div className={styles.Adi3Module161stcard}>
            <h2 className={styles.Adi3Module161stcardTitle}>
              Legal & Practical Notes
            </h2>
            <ul className={styles.Adi3Module161stlist}>
              <li>
                You can only apply for the badge through a registered driving
                school.
              </li>
              <li>
                Only the school can advertise you as a driving instructor—you
                cannot promote yourself independently.
              </li>
              <li>
                You cannot legally accept payment for lessons unless you hold
                the trainee badge.
              </li>
            </ul>

            <h3 className={styles.Adi3Module161stsubHeading}>
              Extra Training Requirement
            </h3>
            <p className={styles.Adi3Module161stcardContent}>
              Once you’ve received your trainee licence, you are legally
              required by the DVSA to complete an additional 20 hours of
              supervised training within the first three months.
            </p>
            <ul className={styles.Adi3Module161stlist}>
              <li>Observed lessons</li>
              <li>Feedback sessions</li>
              <li>Mock test preparation</li>
            </ul>
            <p className={styles.Adi3Module161stwarning}>
              🚫 Failure to complete this training can result in the DVSA
              refusing to book your Part 3 test or denying future trainee
              licence support.
            </p>
          </div>
        </section>

        <section className={styles.Adi3Module161stalternativeSection}>
          <h2 className={styles.Adi3Module161stalternativeHeading}>
            Going Straight to the Part 3 Test
          </h2>
          <p className={styles.Adi3Module161stalternativeContent}>
            If you choose not to apply for the pink badge, your alternative is
            to go straight to the Part 3 test after your initial training. The
            exam itself is the same, but you won’t have had the benefit of real
            teaching experience.
          </p>
          <ul className={styles.Adi3Module161stlist}>
            <li>Provide your own pupil (a learner or full licence holder)</li>
            <li>Ensure they have valid insurance and a suitable vehicle</li>
            <li>
              Not accept any form of payment, as this is illegal without a
              licence
            </li>
          </ul>
          <p className={styles.Adi3Module161stimportant}>
            🌟 This option may suit you if you have a supportive friend or
            family member to practice with. It also avoids the costs and
            obligations of the trainee badge route.
          </p>
        </section>
      </div>

      {/* /////////////////////////////////////////////////////////// */}
      <div className={styles.adi3partlastcontainer}>
        <h2 className={styles.adi3partlastheading}>Summary: Pros and Cons</h2>
        <div className={styles.adi3partlasttable}>
          <div className={`${styles.adi3partlastrow} ${styles.adi3partlastheader}`}>
            <div className={styles.adi3partlastcell}>Aspect</div>
            <div className={styles.adi3partlastcell}>Trainee Licence (PDI Badge)</div>
            <div className={styles.adi3partlastcell}>Go Straight to Part 3</div>
          </div>
          {data.map((item, index) => (
            <div key={index} className={`${styles.adi3partlastrow} ${styles.adi3partlastfadeIn}`}>
              <div className={styles.adi3partlastcell} data-label="Aspect">
                {item.aspect}
              </div>
              <div
                className={styles.adi3partlastcell}
                data-label="Trainee Licence (PDI Badge)"
              >
                {item.trainee}
              </div>
              <div className={styles.adi3partlastcell} data-label="Go Straight to Part 3">
                {item.part3}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

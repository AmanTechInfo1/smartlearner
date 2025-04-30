import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./AdiModuleOne.module.css";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

export default function AdiModule11() {
  const questions = [
    {
      category: "Tell me",
      items: [
        {
          question:
            "Tell me how you'd check that the brakes are working before starting a journey.",
          answer:
            "Brakes should not feel spongy or slack. Test brakes as you set off; the vehicle should not pull to one side.",
        },
        {
          question:
            "Tell me where you'd find the information for the recommended tyre pressures for this car and how tyre pressures should be checked.",
          answer:
            "Refer to the manufacturer's guide. Use a reliable pressure gauge to check and adjust pressures when tyres are cold. Don't forget the spare tyre, and remember to refit valve caps.",
        },
        {
          question:
            "Tell me how you make sure your head restraint is correctly adjusted so it provides the best protection in the event of a crash.",
          answer:
            "The head restraint should be adjusted so the rigid part is at least as high as the eye or top of the ears and as close to the back of the head as is comfortable. Note: Some restraints might not be adjustable.",
        },
        {
          question:
            "Tell me how you'd check the tyres to ensure that they have sufficient tread depth and that their general condition is safe to use on the road.",
          answer:
            "Ensure there are no cuts and bulges; the tread depth should be at least 1.6mm across the central three-quarters of the breadth of the tyre and around the entire outer circumference.",
        },
        {
          question:
            "Tell me how you'd check that the headlights and tail lights are working. You don't need to exit the vehicle.",
          answer:
            "Explain that you'd operate the switch (turn on ignition if necessary), then walk around the vehicle to check the lights.",
        },
        {
          question:
            "Tell me how you'd know if there was a problem with your anti-lock braking system.",
          answer:
            "A warning light should illuminate if there's a fault with the anti-lock braking system.",
        },
        {
          question:
            "Tell me how you'd check the direction indicators are working. You don't need to exit the vehicle.",
          answer:
            "Explain that you'd operate the switch (turn on ignition if necessary), and then walk around the vehicle to check the indicators.",
        },
        {
          question:
            "Tell me how you'd check the brake lights are working on this car.",
          answer:
            "Explain that you'd operate the brake pedal and use reflections in windows or doors, or ask someone to help, to check the lights.",
        },
        {
          question:
            "Tell me how you'd check the power-assisted steering is working before starting a journey.",
          answer:
            "If the steering becomes heavy, the system may not be working properly. Before starting a journey, two simple checks can be made:\n\n- Gentle pressure on the steering wheel, maintained while the engine is started, should result in a slight but noticeable movement as the system begins to operate. Alternatively, turning the steering wheel just after moving off will give an immediate indication that the power assistance is functioning.",
        },
        {
          question:
            "Tell me how you'd switch on the rear fog light(s) and explain when you'd use them. You don't need to exit the vehicle.",
          answer:
            "Operate the switch (turn on dipped headlights and ignition if necessary), check that the warning light is on, and explain their use.",
        },
        {
          question:
            "Tell me how you'd switch your headlight from dipped to main beam and explain how you'd know the main beam is on.",
          answer:
            "Operate the switch (with ignition or engine on if necessary) and check for the main beam warning light.",
        },
        {
          question:
            "Open the bonnet and tell me how you'd check that the engine has sufficient oil.",
          answer:
            "Identify the dipstick or oil level indicator and describe checking the oil level against the minimum and maximum markers.",
        },
        {
          question:
            "Open the bonnet and tell me how you'd check that the engine has sufficient engine coolant.",
          answer:
            "Identify high and low level markings on the header tank where fitted or the radiator filler cap, and describe how to top up to the correct level.",
        },
        {
          question:
            "Open the bonnet and tell me how you'd check that you have a safe level of hydraulic brake fluid.",
          answer:
            "Identify the reservoir and check the level against high and low markings.",
        },
      ],
    },
    {
      category: "Show me",
      items: [
        {
          question:
            "When it's safe to do so, can you show me how you'd wash and clean the rear windscreen?",
        },
        {
          question:
            "When it's safe to do so, can you show me how you'd wash and clean the front windscreen?",
        },
        {
          question:
            "When it's safe to do so, can you show me how you'd switch on your dipped headlights?",
        },
        {
          question:
            "When it's safe to do so, can you show me how you'd set the rear demister?",
        },
        {
          question:
            "When it's safe to do so, can you show me how you'd operate the horn?",
        },
        {
          question:
            "When it's safe to do so, can you show me how you'd demist the front windscreen?",
        },
        {
          question:
            "When it's safe to do so, can you show me how you'd open and close the side window?",
        },
        {
          question:
            "When it's safe to do so, can you show me how you'd operate the cruise control?",
        },
      ],
    },
  ];

  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Show me Tell me Questions"; // First part before "Driving"

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
          <div className="opicity"></div>
          <section className={styles.AdiModuleOneheading}>
            {" "}
            <h1 ref={textRef}>{splitText()}</h1>
          </section>
        </section>

        {/* ////////////////////////////////////////// */}
        <div className={styles.module11container}>
          <motion.h1
            className={styles.module11title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ADI Part 2 - Show Me, Tell Me Questions
          </motion.h1>
          {questions.map((section, index) => (
            <motion.div
              key={index}
              className={styles.module11section}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <h2 className={styles.module11heading}>
                {section.category} Questions
              </h2>
              <ul className={styles.module11list}>
                {section.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className={styles.module11card}
                    whileHover={{ scale: 1.05 }}
                  >
                    <strong>{item.question}</strong>
                    {item.answer && <p>{item.answer}</p>}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div></div>
        {/* /////////////////////////// */}
        <div className={styles.adiLastNextbtn}>
          <Link to="/quizModuleTwelve">
            {" "}
            <button className={styles.adinextbtns}>Next Page</button>
          </Link>
        </div>
      </div>
    </>
  );
}

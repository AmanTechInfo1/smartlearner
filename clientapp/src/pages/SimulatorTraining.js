import React from "react";
import styles from "./css/SimulatorTraining.module.css";
import { motion } from "framer-motion";
import { IoCallSharp } from "react-icons/io5";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";

const features = [
  {
    title: "Realistic Driving Scenarios",
    description: "Navigate through real-world conditions.",
  },
  {
    title: "Perfect for Beginners",
    description:
      "Gain essential driving skills like steering control, gear shifting, mirror checks, and hazard awareness without the pressure of real-world traffic.",
  },
  {
    title: "Boost Confidence & Safety",
    description:
      "Our simulator helps reduce anxiety and prepares learners for practical lessons, significantly improving performance on the road and test readiness.",
  },
  {
    title: "Eco-Friendly & Cost-Effective",
    description:
      "Save fuel, reduce emissions, and cut down on the number of actual driving hours needed.",
  },
  {
    title: "Perfect for Ages 10 to 80+",
    description:
      "Whether you're a young learner excited to get your licence or a seasoned driver looking for a driving assessment, our simulator adapts to your needs. Ideal for ages 10 and up, it’s never too early — or too late — to sharpen your driving skills",
  },
];

export default function SimulatorTraining() {
  const data = useSelector((state) => state.product.productsCategory);

  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Simulator Training"; // First part before "Driving"
    // Second part after "Driving"
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
        color: "#FF5733", // Change text color to red
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
        color: "#FF1493", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Driving Simulator Training</title>
        <meta property="og:title" content="Driving Simulator Training" />
        <meta
          property="og:description"
          content="Enhance your driving skills with our advanced simulator training. Safe, realistic, and ideal for beginners or nervous drivers."
        />
        <link
          rel="canonical"
          href="https://smartlearner.com/simulator-training"
        />
        <meta
          name="description"
          content="Enhance your driving skills with our advanced simulator training. Safe, realistic, and ideal for beginners or nervous drivers."
        />
      </Helmet>

      <div className={styles.simulatorComponent2}>
        <section className={styles.manualBanner2}>
          <div className="opicity"></div>

          <div className={styles.simulatorBanner}>
            <h1 ref={textRef}>{splitText()}</h1>

            <div className="home-bannerbnt-sec">
              {" "}
              <Link to="/Contact-Us" style={{ textDecoration: "none" }}>
                {" "}
                <button className="button-style">CONTACT US</button>
              </Link>
              <span>
                {" "}
                <a href="tel:+4402475092784" style={{ textDecoration: "none" }}>
                  <IoCallSharp className="gradient-icon" /> 02475092784
                </a>
              </span>
            </div>
          </div>
        </section>

        <section className={styles.simulatorSection}>
          <motion.h2
            className={styles.simulatorheading}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <strong>The Smarter Way to Learn How to Drive</strong>
          </motion.h2>

          <motion.p
            className={styles.simulatorintro}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            At SmartLearner, we combine cutting-edge technology with expert
            instruction to give you a safer, smarter start to your driving
            journey. Our state-of-the-art driving simulator provides a realistic
            and immersive experience that helps new drivers build confidence
            before hitting the road.
          </motion.p>

          <motion.h2
            className={styles.simulatorheading}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why choose simulated?
          </motion.h2>

          <div className={styles.simulatorfeatures}>
            {features.map((feat, index) => (
              <motion.div
                key={index}
                className={styles.simulatorfeatureCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <span className={styles.simulatorcheckmark}>✔</span>
                <div>
                  <h4>{feat.title}</h4>
                  <p>{feat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.simulatorguidance}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h3>Flexible guidance options to suit your comfort:</h3>
            <ul>
              <li>
                🧠 Let the simulator’s built-in instructor guide you through
                each step
              </li>
              <li>🕹️ Go completely independent and practice freely</li>
              <li>
                👨‍🏫 Or have one of our expert trainers sit with you and talk you
                through the session in real-time
              </li>
            </ul>
          </motion.div>

          <motion.p
            className={styles.simulatorintro}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <br />
            Perfect for age 10+ for those excited to get their licence all the
            way up to 80+ and want an assessment for their driving.
          </motion.p>

          <motion.div
            className={styles.simulatorpriceSection}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <h3>Book Now</h3>
            <p className={styles.simulatorprice}>£10.00 / hour</p>
            <button className={styles.simulatorbookBtn}>Book a Session</button>
          </motion.div>
        </section>
      </div>
    </>
  );
}

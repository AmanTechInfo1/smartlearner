// src/Transmission.js

import React, { useState } from "react";

import styles from "./Manual.module.css";
import { IoCallSharp } from "react-icons/io5";
import { useEffect, useRef } from "react";
import manualround1 from "./manualround1.png";
import manualround2 from "./manualround2.jpg";

import gsap from "gsap";
import ManualCorousel from "../../components/ui/ManualCarousel";
import { Link } from "react-router-dom";

const gears = ["1", "2", "3", "4", "5", "R"];

const gearColors = [
  "#FF5733", // Gear 1 (Red)
  "#FFC300", // Gear 2 (Yellow)
  "#DAF7A6", // Gear 3 (Light Green)
  "#33FF57", // Gear 4 (Green)
  "#3380FF", // Gear 5 (Blue)
  "#8E44AD", // Gear R (Purple)
];

const Manual = () => {
  const [currentGear, setCurrentGear] = useState(null);
  const knobRef = useRef(null); // For animating the shifter knob
  const gearRefs = useRef([]);

  const handleGearChange = (gear) => {
    setCurrentGear(gear);

    // Animate the knob when the gear changes
    gsap.to(knobRef.current, {
      y: -10,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(knobRef.current, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });

    // Animate the active gear with GSAP
    gearRefs.current.forEach((gearRef, index) => {
      if (gear === gears[index]) {
        gsap.to(gearRef, {
          scale: 1.2,
          backgroundColor: "#4285f4",
          color: "white",
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(gearRef, {
          scale: 1,
          backgroundColor: gearColors[index],
          color: "white",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    });
  };

  // Adding a "slide-in" effect for the gear list when the component mounts
  useEffect(() => {
    gsap.fromTo(
      ".gearList",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Manual Transmission"; // First part before "Driving"
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
    <div>
      <div className={styles.manualComponent}>
        <section className={styles.manualBanner}>
          <div className="opicity"></div>
          <div className="home-banner-flex">
            <div className="home-content-D">
              <h1 ref={textRef}>{splitText()}</h1>

              <div className="home-bannerbnt-sec">
                {" "}
                 <Link to="/Contact-Us" style={{textDecoration:'none'}}> <button className="button-style">CONTACT US</button>
                                    </Link>
                <span>
                  {" "}
                  <IoCallSharp className="gradient-icon" /> 02475092784
                </span>
              </div>
            </div>

            <div className={styles.bannerImg}>
              <img
                src={manualround1}
                alt="driving-car"
                id={styles.homeDrivingImg1}
              />
              <img
                src={manualround2}
                alt="driving-car"
                id={styles.homeDrivingImg2}
              />
            </div>
          </div>
        </section>
        {/* ///////////////////////////// */}
        <section>
          <div className={styles.transmissionContainer}>
            <h2 className={styles.gearBoxTitle}>Manual Gear Shifter</h2>
            <div className={styles.shifterContainer}>
              <div className={styles.shifter}>
                <div className={styles.knob} ref={knobRef} />
              </div>
              <div className={styles.gearList}>
                {gears.map((gear, index) => (
                  <div
                    key={index}
                    ref={(el) => (gearRefs.current[index] = el)}
                    className={`${styles.gear} ${
                      currentGear === gear ? styles.active : ""
                    }`}
                    onClick={() => handleGearChange(gear)}
                  >
                    {gear}
                  </div>
                ))}
              </div>
            </div>
            {currentGear && (
              <div className={styles.selectedGear}>
                Current Gear: {currentGear}
              </div>
            )}
          </div>
        </section>
        <section className={styles.ManualCorousel}>
        <ManualCorousel />
      </section>
        {/* ////////////////////////////////////////////////////// */}
        <div className={styles.manualContent}>
          <section className={styles.manualPara}>
            <p>
              Discover the thrill of hands-on control with our manual driving
              lessons.
            </p>
            <p>
              {" "}
              From mastering the clutch to shifting gears seamlessly, our expert
              instructors will guide you through the art of manual driving,
              empowering you with the skills and confidence to navigate any road
              with finesse and precision.
            </p>
          </section>
        </div>
        {/* /////////////////////////////////////////// */}
      </div>
     
    </div>
  );
};

export default Manual;

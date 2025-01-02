// src/components/AutomaticTransmission.js
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { IoCallSharp } from "react-icons/io5";
import styles from "./AutomaticTransmission.module.css";
import manualround1 from "./automaticround.jpg";
import manualround2 from "./automaticround2.jpg";
import AutomaticCarousel from "../../components/ui/AutomaticCarousel";
import { Link } from "react-router-dom";

const gears = ["P", "R", "N", "D", "2", "L"]; // Park, Reverse, Neutral, Drive, 2nd Gear, Low Gear

// Color palette for the gears
const gearColors = [
  "#FF5733", // Park (Red)
  "#FFC300", // Reverse (Yellow)
  "#DAF7A6", // Neutral (Light Green)
  "#33FF57", // Drive (Green)
  "#3380FF", // Second Gear (Blue)
  "#8E44AD", // Low Gear (Purple)
];
const speedLimits = {
  P: 0, // Park (no speed)
  R: 10, // Reverse (low speed)
  N: 0, // Neutral (low speed)
  D: 120, // Drive (high speed)
  2: 80, // Second Gear (moderate speed)
  L: 40, // Low Gear (low speed)
};

const AutomaticTransmission = () => {
  const [currentGear, setCurrentGear] = useState("P");
  const [overspeedWarning, setOverspeedWarning] = useState(false); // Starting gear is 'Park'
  const gearRefs = useRef([]);
  const [speed, setSpeed] = useState(0); // Simulated speed
  const speedRef = useRef(0);

  const handleGearChange = (gear) => {
    setCurrentGear(gear);
    setSpeed(0); // Reset speed when changing gear
    setOverspeedWarning(false); // Reset overspeed warning when changing gear
  };

  // Simulate speed increase when the user clicks on the speedometer
  const increaseSpeed = () => {
    if (speed < speedLimits[currentGear]) {
      setSpeed((prevSpeed) => prevSpeed + 10); // Increase speed by 10 km/h
    } else {
      setOverspeedWarning(true); // If speed exceeds limit, show overspeed warning
    }
  };

  useEffect(() => {
    gsap.to(gearRefs.current, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(gearRefs.current[gears.indexOf(currentGear)], {
      scale: 1.5,
      backgroundColor: "#4285f4",
      color: "white",
      duration: 0.3,
      ease: "power2.out",
    });

    // Reset the previous active gear back to normal style
    gearRefs.current.forEach((gearRef, index) => {
      if (gears[index] !== currentGear) {
        gsap.to(gearRef, {
          scale: 1,
          backgroundColor: gearColors[index],
          color: "white",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    });
  }, [currentGear]);

  const textRef = useRef(null);

  const splitText = () => {
    const firstPart = "Automatic Transmission";

    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    return <>{firstLine}</>;
  };

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

    tl.from(letters, {
      opacity: 0.6,
      y: 100,
      ease: "bounce.out",
      stagger: 0.1,
      rotationX: 90,
      transformOrigin: "bottom center",
      scale: 0.5,
    })
      .to(letters, {
        scale: 1,
        opacity: 1,
        rotationX: 0,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
      })
      .to(letters, {
        color: "#FF5733",
        rotationY: 360,
        stagger: 0.1,
        duration: 1,
      })
      .to(letters, {
        scale: 1.2,
        opacity: 0.8,
        rotationX: -10,
        stagger: 0.1,
        duration: 1,
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
    <div className={styles.manualComponent}>
      <section className={styles.manualBanner}>
        <div className="opicity"></div>
        <div className="home-banner-flex">
          <div className="home-content-D">
            <h1 ref={textRef}>{splitText()}</h1>

            <div className="home-bannerbnt-sec">
              {" "}
              <Link to="/Contact-Us" style={{ textDecoration: "none" }}>
                {" "}
                <button className="button-style">CONTACT US</button>
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
      <div className={styles.automatictransmissionContainer}>
        <h2 className={styles.automatictitle}>Automatic Gear Shifter</h2>
        <div className={styles.automaticshifterContainer}>
          <div className={styles.automaticshifter}>
            <div className={styles.automaticknob} />
          </div>
          <div className={styles.automaticgearList}>
            {gears.map((gear, index) => (
              <div
                key={index}
                ref={(el) => (gearRefs.current[index] = el)}
                className={`${styles.automaticgear} ${
                  currentGear === gear ? styles.active : ""
                }`}
                style={{ backgroundColor: gearColors[index] }}
                onClick={() => handleGearChange(gear)}
              >
                {gear}
              </div>
            ))}
          </div>
        </div>

        {/* Speed Display */}
        <div className={styles.automaticspeed}>
          <h3>Speed: {speed} km/h</h3>
          {overspeedWarning && (
            <p className={styles.warning}>
              Over Speed! Max speed for current gear: {speedLimits[currentGear]}{" "}
              km/h
            </p>
          )}
          <div
            className={styles.automaticspeedbutton}
            onClick={increaseSpeed} // Simulate increasing speed on click
          >
            Accelerate
          </div>
        </div>

        {currentGear && (
          <div className={styles.automaticselectedGear}>
            Current Gear: {currentGear}
          </div>
        )}
      </div>
      <section>
        <AutomaticCarousel />
      </section>
      <section>
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
      </section>
    </div>
  );
};

export default AutomaticTransmission;

// PassPlus.js
import React, { useEffect, useRef } from "react";
import styles from "./PassPlus.module.css";

import { IoCallSharp } from "react-icons/io5";
import manualround1 from "./passplusround.jpg";
import manualround2 from "./passplusround2.jpg";

import { gsap } from "gsap";
import PassPlusCarousel from "../../components/ui/PassPlusCarousel";
import { Link } from "react-router-dom";

const PassPlusTransmission = () => {
  const coursesRef = useRef(null);

  useEffect(() => {
    // GSAP animations for page load
    gsap.fromTo(
      `.${styles.passpluscard}`,
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      `.${styles.passplustitle}`,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      `.${styles.passplusbutton}`,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.5,
      }
    );
  }, []);

  const textRef = useRef(null);

  const splitText = () => {
    const firstPart = "Pass Plus";

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

  const scrollToCourses = () => {
    if (coursesRef.current) {
      coursesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div>
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
            {/* <img
              src={manualround1}
              alt="driving-car"
              id={styles.homeDrivingImg1}
            />
            <img
              src={manualround2}
              alt="driving-car"
              id={styles.homeDrivingImg2}
            /> */}
          </div>
        </div>
      </section>
      {/* 
      <div className={styles.passPlusContentcontainer}>
        <div className={styles.passpluscard}>
          <h1 className={styles.passplustitle}>Pass Plus Driving Course</h1>
          <p className={styles.passplusdescription}>
            Enhance your driving skills and confidence with our advanced Pass
            Plus course. Designed for new drivers, it includes practical and
            theoretical lessons to ensure you’re fully prepared for the road.
          </p>
          <button className={styles.passplusbutton} onClick={scrollToCourses}>
            Start Course
          </button>
        </div>
      </div> */}

      {/* /////////////////////////////////// */}
      <section ref={coursesRef} className={styles.coursesSection}>
        <h2 className={styles.coursesTitle}>Our Courses</h2>

        <div className={styles.manualContent}>
          <section className={styles.manualPara}>
            <p>Designed specifically for newly qualified drivers</p>
            <p>
              {" "}
              Pass Plus is an advanced driving course that helps you maintain
              and improve the skills you've learned while gaining valuable
              experience on the road. Whether you're looking to build confidence
              in new driving conditions, or simply want to become a safer, more
              skilled driver, Pass Plus is the ideal next step.
            </p>
          </section>
        </div>

        <PassPlusCarousel />
      </section>
    </div>
  );
};

export default PassPlusTransmission;

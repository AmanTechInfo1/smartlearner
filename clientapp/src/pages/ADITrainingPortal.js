// import React from 'react'
import styles from "./css/AdiPortal.module.css";
import adiImg from "../assets/images/finished-road-map-1.png";
import poster from "../assets/images/video-poster-img.jpg";
import { Helmet } from "react-helmet-async";
import {
  FaBook,
  FaCarSide,
  FaChalkboardTeacher,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import smartlearnerLogo from "../assets/images/White-Logo-Fixed-1024x174.png";
import { Link } from "react-router-dom";

import { useEffect, useRef } from "react";

import gsap from "gsap";

export default function ADITrainingPortal() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Welcome TO PDI"; // First part before "Driving"
    const secondPart = "Portal"; // Second part after "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    const secondLine = secondPart
      .split("")
      .map((char, index) => <span key={`second-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return (
      <>
        {firstLine}
        <br />
        {secondLine}
      </>
    );
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

  const text2Ref = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const split2Text = () => {
    const firstPart = "This Road Map Shows The Journey To Become"; // First part before "Driving"
    const secondPart = "A Fully Qualified Driving Instructor."; // Second part after "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    const secondLine = secondPart
      .split("")
      .map((char, index) => <span key={`second-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return (
      <>
        {firstLine}
        <br />
        {secondLine}
      </>
    );
  };

  useEffect(() => {
    const letters = text2Ref.current.querySelectorAll("span");

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
    <div className={styles.ADITrainingPortalPage}>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Post-Driving Instruction (PDI) Services</title>
                <meta name="description" content="Explore our Post-Driving Instruction (PDI) program designed to help new drivers build confidence and refine their skills after passing their test. " />
                <link rel="canonical" href="https://smartlearner.com//ADI-Training-Portal" />
            </Helmet>
      <div className={styles.adiPortalPage}>
        <div className={styles.adiPortalPageFirstdiv}>
          <div className={styles.opicity}></div>
          <section>
            <h2 ref={textRef}>{splitText()}</h2>
            <div className={styles.gGpFrontListP}>
              <p>
                Unlock your driving potential with Smartlearner Learn from
                certified instructors in a safe, supportive environment. Start
                your journey to becoming a confident, skilled driver today!
              </p>
            </div>
          </section>
        </div>
        <section className={styles.paraSecHandImg}>
          <p ref={text2Ref}>{split2Text()}</p>
        </section>
        <div className={styles.adiPortalPageSeconddiv}>
          <img src={adiImg} alt="adiImg" />
        </div>
        <div className={styles.adiPortalPageThirddiv}>
          <h2 className={styles.adiPortalPageThirddivh2}>
            Welcome <span>Message</span>
          </h2>
          <div className={styles.adiPortalVideo}>
            <iframe
              width="671"
              height="378"
              src="https://www.youtube.com/embed/iHRbw3qpLyM"
              title="Tommy Welcome Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className={styles.adiLearningSupport}>
            <h2>
              Learning <span>Materials</span>{" "}
            </h2>
            <div id={styles.hrAdiLearningText}>
              <hr id={styles.hrAdi} style={{ border: "2px solid #f67504" }} />
              <p>
                Please See <span>The Below Content.</span>
              </p>
              <hr
                id={styles.hrAdi}
                style={{ border: "2px solid #ce033c" }}
              />
            </div>
          </div>
          <div className={styles.adiTrainingPortalLearning}>
            <div className={styles.adiTrainingPortalLearningInnerContent}>
              <FaBook id={styles.adiPortalFaIcons} style={{ color: "#f67504" }} />
              <h2 style={{ color: "#f67504" }}>Part 1 - Theory</h2>
              <Link to="/part-one-theory-questions">
                <button
                  className={styles.adiPortalBtnLearning}
                  style={{ borderColor: "#f67504" }}
                >
                  Get Learning
                </button>
              </Link>
            </div>
            <div className={styles.adiTrainingPortalLearningInnerContent}>
              <FaCarSide
                id={styles.adiPortalFaIcons}
                style={{ color: "#fbc809" }}
              />
              <h2 style={{ color: "#fbc809" }}>Part 2 - Driving Ability</h2>
              <Link to="/part-two-theory-questions">
                <button
                  className={styles.adiPortalBtnLearning}
                  style={{ borderColor: "#fbc809" }}
                >
                  Get Learning
                </button>
              </Link>
            </div>
            <div className={styles.adiTrainingPortalLearningInnerContent}>
              <FaChalkboardTeacher
                id={styles.adiPortalFaIcons}
                style={{ color: "#ce033c" }}
              />
              <h2 style={{ color: "#ce033c" }}>Part 3 - Teaching</h2>
              <Link to="/part-three-theory-questions">
                <button
                  className={styles.adiPortalBtnLearning}
                  style={{ borderColor: "#ce033c" }}
                >
                  Get Learning
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.adiPortalFooterSection}>
        <div className={styles.adiPortalFooterInnerContainer}>
          <img src={smartlearnerLogo} alt="smartlearnerLogo" />
          <div className={styles.adiFooterContactInfo}>
            {" "}
            <a href="tel:+4402475092784">
              <FaPhone id={styles.adiFaIcons} /> +4402475092784
            </a>
            <br />
            <a href="mailto:admin@smartlearner.com">
              <FaEnvelope id={styles.adiFaIcons} /> admin@smartlearner.com
            </a>
          </div>
          <div className={styles.adiFooterAddressInfo}>
            <FaLocationDot id={styles.adiFaIcons} />
            <p>4 Wheel Wright Building, Hen Lane, Coventry, CV6 4LB</p>
          </div>
          <div className={styles.adiSocialIcons}>
            <a href="https://www.facebook.com/smartlearnerdrivingschool">
              <FaFacebook id={styles.adiSocialFaIcons} />
            </a>
            <a href="https://twitter.com/smartlearner">
              <FaTwitter id={styles.adiSocialFaIcons} />
            </a>
            <a href="https://www.instagram.com/smartlearnerdrivingschool/">
              <FaInstagram id={styles.adiSocialFaIcons} />
            </a>
          </div>
        </div>
      </section>
      {/* /////////////////////////////////////Our Partners////////////////////////// */}

      {/* <section className={styles.ourPartnersSection}>
        <div className={styles.bgOverlay}></div>
        <h2>Our Partners</h2>
        <div className={styles.partnerSection}>
          <img src={OurPartners1} alt="" />

          <img src={OurPartners2} alt="" />
          <img src={OurPartners3} alt="" />
          <img src={OurPartners4} alt="" />
          <img src={OurPartners5} alt="" />
          <img src={OurPartners7} alt="" />
          <img src={OurPartners8} alt="" />
          <img src={OurPartners9} alt="" />
          <img src={OurPartners10} alt="" />
          <img src={OurPartners11} alt="" />
          <img src={OurPartners12} alt="" />
          <img src={OurPartners13} alt="" />
        </div>
      </section> */}
    </div>
  );
}

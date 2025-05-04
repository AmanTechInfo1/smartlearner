import React, { useEffect, useState } from "react";
import styles from "./AdiPartTwo.module.css";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import adiImg from "../../../assets/images/finished-road-map-1.png";
import { IoMdArrowDropright } from "react-icons/io";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import smartlearnerLogo from "../../../assets/images/White-Logo-Fixed-1024x174.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector
import { useNavigate } from "react-router-dom";
import { fetchUserSubscriptions } from "./../../../redux/features/subscriptionSlice";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

import { useRef } from "react";

import gsap from "gsap";
import LessonAccordation from "./additionalPagess/LessonAccordation";

export default function AdiPartTwo() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const toggleGlossary = () => {
    setIsVisible((prevState) => !prevState); // Toggle visibility
  };
  const toggleGlossary2 = () => {
    setIsVisible2((prevState) => !prevState); // Toggle visibility
  };
  const toggleGlossary3 = () => {
    setIsVisible3((prevState) => !prevState); // Toggle visibility
  };

  const videoURLs = [
    "https://www.youtube.com/embed/YVYQNgPfPwI",
    "https://www.youtube.com/embed/jy-UXGIVBXg",
    "https://www.youtube.com/embed/ep0syyvToOk",
    "https://www.youtube.com/embed/u20fhAqd1cI",
    "https://www.youtube.com/embed/WMBziTxVZV4",
    "https://www.youtube.com/embed/zhVgLEA3Mrc",
    "https://www.youtube.com/embed/u8skr_74ip8",
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.auth.userDetails);
  const userId = userDetails?._id;

  const [subscriptionLoaded, setSubscriptionLoaded] = useState(false); // Track when subscription data is loaded

  useEffect(() => {
    // If user is logged in and userId exists, fetch subscription data
    if (userId) {
      dispatch(fetchUserSubscriptions(userId))
        .then(() => setSubscriptionLoaded(true)) // Set subscriptionLoaded to true once data is fetched
        .catch(() => setSubscriptionLoaded(true)); // Handle error and set subscriptionLoaded to true
    }
  }, [dispatch, userId]);
  const userSubscription = useSelector(
    (state) => state.subscription.userSubscription
  );

  useEffect(() => {
    // Fetch user subscriptions

    if (!userDetails || Object.keys(userDetails).length === 0) {
      navigate("/pdi-login"); // Redirect to login if user is not logged in
    } else if (userDetails.role === "admin") {
      // Allow admin to access the portal
      return;
    } else if (userDetails.role === "instructortrainee") {
      // Allow admin to access the portal
      return;
    } else if (subscriptionLoaded) {
      const hasAccess =
        Array.isArray(userSubscription) &&
        userSubscription.some((subscription) => {
          const { planCategory } = subscription.subscriptionId || {};
          const { couponApplied } = subscription; // Assuming couponApplied is part of the subscription object

          return (
            subscription.isActive &&
            (planCategory === "pdi-part-two packages" ||
              planCategory === "Complete packages")
          );
        });
      if (!hasAccess) {
        navigate("/driving-instructor-packages/instructor-packages"); // Redirect to subscription page if no valid plan found
      }
      // Check the subscription plan category
    }
  }, [userDetails, userSubscription, subscriptionLoaded, dispatch, navigate]);

  // ///////////////////////////////////////////////////
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Welcome to PDI "; // First part before "Driving"
    const secondPart = "Part Two"; // Second part after "Driving"

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

  ///////////////////////////////////////////////////////////////////
  const text2Ref = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const split2Text = () => {
    const firstPart = "What to Expect ?"; // First part before "Driving"
    // Second part after "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return <>{firstLine}</>;
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

  const text3Ref = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const split3Text = () => {
    const firstPart = "What is the part 2 test?"; // First part before "Driving"
    // Second part after "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return <>{firstLine}</>;
  };

  useEffect(() => {
    const letters = text3Ref.current.querySelectorAll("span");

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

  // //////////////////////////////////
  const text4Ref = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const split4Text = () => {
    const firstPart = "What Does the Test Involve?"; // First part before "Driving"
    // Second part after "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return <>{firstLine}</>;
  };

  useEffect(() => {
    const letters = text4Ref.current.querySelectorAll("span");

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
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection}>
          <div className={styles.opicity}></div>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1 ref={textRef}>{splitText()}</h1>
              </div>

              <div className={styles.gGpFrontListP}>
                <p>
                  {" "}
                  Well done on successfully passing your Part 1 ADI Exam! This
                  achievement is a testament to your dedication, hard work, and
                  determination to progress in your journey to becoming an
                  Approved Driving Instructor (ADI).
                </p>
              </div>
              <div className={styles.alertBtn}>
                <Link to="/Contact-Us" style={{ textDecoration: "none" }}>
                  {" "}
                  <button>Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ///////////////////////////////////// */}
        <div className={styles.videoContainer}>
          <h2 className={styles.videotitle}>Watch Our Video</h2>
          <video className={styles.videodesign} controls muted loop>
            <source src="/WhatsApp.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p id={styles.hazardTestWorkListSectionPara3}>
          Now, as you step into Module 2, you'll dive deeper into the practical
          elements of your training. The Part 2 ADI Exam is a crucial milestone,
          designed to test your driving ability to an exceptional standard. To
          help you prepare, this guide is structured into 11 comprehensive
          modules, each focusing on the key skills and knowledge you'll need to
          succeed.
        </p>

        <section className={styles.theoryTestSectionQ}>
          <div className={styles.theoryTestDivQ}>
            <h2 ref={text2Ref}>{split2Text()}</h2>
          </div>
        </section>
        <div className={styles.downArrowiconDiv}>
          <FaRegArrowAltCircleDown
            onClick={toggleGlossary}
            className={`${styles.downArrowicon} ${
              isVisible ? styles.rotate : ""
            }`}
          />
          <p>CLICK ME</p>
        </div>

        <div
          className={`${styles.glossarycontainer} ${
            isVisible ? styles.glossarycontainerOneshow : ""
          }`}>
          <div className={styles.videoContainer}>
            <h2 className={styles.videotitle}>Watch Our Video</h2>
          </div>
          <h2 className={styles.glossarysubTitle}>
            In this module, you'll explore a blend of theory and practical
            advice to help you master:
          </h2>
          <ul className={styles.glossarylist}>
            <li>• Advanced driving techniques.</li>
            <li>• Hazard perception and anticipation.</li>
            <li>• Vehicle control, safety, and awareness.</li>
          </ul>
        </div>
        <section className={styles.hazardTestWorkListSection}>
          <p id={styles.hazardTestWorkListSectionPara}>
            While this guide offers a strong foundation, we strongly encourage
            you to seek practical training from a qualified ADI trainer.
            Hands-on experience is essential to solidify your skills and build
            confidence in real-world scenarios.
          </p>
        </section>
        <section className={styles.theoryTestSectionQ}>
          <div className={styles.theoryTestDivQ}>
            <h2 ref={text3Ref}>{split3Text()}</h2>
          </div>
        </section>
        <div className={styles.downArrowiconDiv}>
          <FaRegArrowAltCircleDown
            onClick={toggleGlossary2}
            className={`${styles.downArrowicon} ${
              isVisible2 ? styles.rotate : ""
            }`}
          />
          <p>CLICK ME</p>
        </div>
        <div
          className={`${styles.glossarycontainer} ${
            isVisible2 ? styles.glossarycontainerOneshow : ""
          }`}>
          <ul className={styles.glossarylist}>
            <li>
              <strong>Duration:</strong> Around one hour.{" "}
            </li>
            <li>
              <strong>Sections:</strong> There are two main sections:
              <br />
              <strong>1.</strong> Eyesight Test: 27.5 meters if the plate is
              old-style, or 26.5 meters if the plate is new-style <br />
              <strong>2.</strong> Driving Ability Assessment: Includes five key
              aspects of driving.
            </li>
          </ul>
          <h2 className={styles.glossarysubTitle} style={{ marginTop: "1rem" }}>
            Five Aspects of Driving Being Assessed:
          </h2>
          <ol className={styles.glossarylist}>
            <li>
              <strong>1. Control:</strong> Smooth and safe use of the controls
              (e.g., clutch, gears, and brakes).{" "}
            </li>
            <li>
              <strong>2. Observation:</strong> Effective observation and
              awareness of hazards.{" "}
            </li>
            <li>
              <strong>3. Anticipation:</strong> Predicting and reacting
              appropriately to other road users' actions.
            </li>
            <li>
              <strong>4. Planning:</strong> Making decisions in advance to drive
              smoothly and efficiently.{" "}
            </li>
            <li>
              <strong>5. Eco-Safe Driving:</strong> Demonstrating fuel-efficient
              techniques where possible.{" "}
            </li>
          </ol>
        </div>

        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.theoryTestSectionQ}>
          <div className={styles.theoryTestDivQ}>
            <h2 ref={text4Ref}>{split4Text()}</h2>
          </div>
        </section>
        <div className={styles.downArrowiconDiv}>
          <FaRegArrowAltCircleDown
            onClick={toggleGlossary3}
            className={`${styles.downArrowicon} ${
              isVisible3 ? styles.rotate : ""
            }`}
          />
          <p>CLICK ME</p>
        </div>
        <div
          className={`${styles.glossarycontainer} ${
            isVisible3 ? styles.glossarycontainerOneshow : ""
          }`}>
          <h2 className={styles.glossarysubTitle}>
            The driving ability test includes a mix of:
          </h2>
          <video className={styles.videodesign} controls muted loop>
            <source src="/what.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <ul className={styles.glossarylist}>
            <li>
              <strong>General Driving:</strong> Driving in various environments
              (e.g., urban, rural, and motorways).{" "}
            </li>
            <li>
              <strong>Manoeuvres:</strong> You'll be asked to complete one or
              more of the following: <br></br>
              Parallel park.<br></br>
              Reverse into a parking bay
              <br />
              Drive forward into a parking bay and reverse out <br />
              Pull up on the right-hand side of the road, reverse for two car
              lengths, and rejoin traffic
            </li>

            <li>
              <strong>Independent Driving:</strong> Following directions from
              road signs or a sat-nav for around 20 minutes.{" "}
            </li>
          </ul>
          <h2 className={styles.glossarysubTitle} style={{ marginTop: "1rem" }}>
            Assessment Criteria:
          </h2>
          <ul className={styles.glossarylist}>
            <li>
              - You are allowed up to six driving faults (similar to minors in a
              learner test).
            </li>
            <li>
              - Serious or dangerous faults (similar to majors) will result in a
              fail.
            </li>
            <li>
              - The examiner is looking for a level of driving that would set a
              good example to your learners.
            </li>
          </ul>
        </div>

        {/* ////////////////////////////////////////////////////// */}

        {/* //////////////////////////////////////////////////////////// */}
        <section className={styles.lessonAccordionContainer}>
          <LessonAccordation />
        </section>

        {/* //////////////////////////////////////////////////////// */}
        {/* <section>
          <img src={adiImg} alt="adiImg" />
        </section> */}

        {/* ///////////////////////////////////////////////////////////// */}
        {/* <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            ADI Part 2 <span>- Driving Ability</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="400"
                    height="226"
                    src="https://www.youtube.com/embed/FHPKcu3X1ro"
                    title="Road Safety: Joining the Motorway"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    You can{" "}
                    <a href="https://www.gov.uk/book-driving-test">
                      <span>
                        book your approved driving instructor (ADI) part 2 test
                      </span>
                    </a>{" "}
                    when you’ve passed your{" "}
                    <a href="https://www.gov.uk/adi-part-1-test">
                      <span> ADI part 1 test</span>
                    </a>
                    It’s the second of 3 tests you have to pass to qualify as an
                    . It’s a test of your driving ability. To pass the test you
                    must be able to:
                  </p>
                  <p>Drive safely in different road and traffic conditions.</p>
                  <p>
                    Show that you know{" "}
                    <a href="https://www.gov.uk/guidance/the-highway-code">
                      <span> The Highway Code</span>
                    </a>{" "}
                    by the way you drive.
                  </p>

                  <p>
                    The{" "}
                    <a href="https://www.gov.uk/guidance/national-standard-for-driving-cars-and-light-vans-category-b">
                      <span> national standard for driving cars</span>
                    </a>{" "}
                    tells you everything you must be able to do to pass the
                    test. You should only take your test when you can do
                    everything without instruction.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section> */}
        {/* //////////////////////////////////////////// */}

        {/* ////////////////////////////////////// */}

        {/* <section className={styles.AdiPtwoYoutubeSec}>
          <div className={styles.AdiPartTwoYtV}>
            <section>
              <h2>
                The DL25C Form & <span>Common Mistakes</span>
              </h2>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="100%"
                    height="500px"
                    src="https://www.youtube.com/embed/wCvK-mPfuJY"
                    title="ADI Part 2 - Mock Test"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </section>
            <section>
              <h2>
                ADI Part 2 <span>Mock Test Example</span>
              </h2>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="100%"
                    height="500px"
                    src="https://www.youtube.com/embed/5VrL6ZLZp9M"
                    title="ADI Part 2 - Mock Test"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </section>
          </div>
        </section> */}
        {/* ////////////////////////////////////////// */}
        {/* <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Manoeuvres <span>Video Materials</span>{" "}
          </h2>
          <div className={styles.AdiParttwoVideo}>
            <div className={styles.hazardVideosGridContainer}>
              {videoURLs.map((url, index) => (
                <div className={styles.hazardGridItem} key={index}>
                  <iframe
                    width="200"
                    height="120"
                    src={url}
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* ///////////////////////////////////////////////////////// */}

        {/* ////////////////////////////////////////////////////////////////////////// */}

        {/* ////////////////////////////////////////////////////////// */}

        {/* <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Car <span>Requirements</span>
          </h2>
          <p style={{ textAlign: "center" }}>
            When you take a test, your car must:
          </p>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.bgColorList33}>
              <ul type="none">
                <li>
                  <p>• Be taxed.</p>
                </li>
                <li>
                  <p>
                    • Be insured for a driving test (check with your insurance
                    company).
                  </p>
                </li>
                <li>
                  <p>
                    • Be roadworthy and have a current MOT (if it’s over 3 years
                    old).
                  </p>
                </li>
                <li>
                  <p>
                    • Be a saloon, hatchback or estate car in good working
                    condition - you cannot use a convertible.
                  </p>
                </li>
                <li>
                  <p>
                    • Have no warning lights showing, for example, the airbag
                    warning light.
                  </p>
                </li>
                <li>
                  <p>
                    • Have no tyre damage and the legal tread depth on each tyre
                    - you cannot have a space-saver spare tyre fitted.
                  </p>
                </li>
                <li>
                  <p>
                    • Be smoke-free - this means you cannot smoke in it just
                    before or during the test.
                  </p>
                </li>
                <li>
                  <p>
                    • Be able to reach at least 62 mph and have an mph
                    speedometer.
                  </p>
                </li>
                <li>
                  <p>
                    • Have 4 wheels and a maximum authorised mass (MAM) of no
                    more than 3,500 kg.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section> */}
        {/* ////////////////////////////////////// */}
        {/* <section style={{ textAlign: "center" }}>
        </section>
        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h2>Start Quiz</h2>
            <h3>All Questions</h3>
            <p>
              Click the start quiz button to start the quiz and See your result
            </p>
            <Link to="/takequizCatName/adi--part-2">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div> */}
        {/* ////////////////////////////////////////////////// */}
      </div>
      <section className={styles.adiPortalFooterSection}>
        <div className={styles.adiPortalFooterInnerContainer}>
          <img src={smartlearnerLogo} alt="smartlearnerLogo" />
          <div className={styles.adiFooterContactInfo}>
            {" "}
            <a href="tel:+4402475092784">
              <FaPhone id={styles.adiFaIcons} /> +44-02475092784
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
    </div>
  );
}

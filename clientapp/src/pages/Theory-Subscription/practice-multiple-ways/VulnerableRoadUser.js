import React from "react";
import styles from "./css/Valnerable.module.css";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import vulnerableroad from "../../../assets/images/Vulnerable-road-users.png";

import roadSafty from "../../../assets/images/roadUserVulnerableuser.png";

import { IoMdArrowDropright } from "react-icons/io";
import {
  FaWalking,
  FaBlind,
  FaBaby,
  FaBiking,
  FaMotorcycle,
  FaHorse,
} from "react-icons/fa";
import dogGuid from "../../../assets/images/guide-dog.jpg";
import horseriding from "../../../assets/images/horse-rider.jpg";
import motorbikecycle from "../../../assets/images/motorbikes-cyclist.jpg";
import schoolChilderns from "../../../assets/images/childern-School.jpg";
import disabilityScooters from "../../../assets/images/disability-scooter.jpeg";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function VulnerableRoadUser() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Topic: Vulnerable"; // First part before "Driving"
    const secondPart = "Road Users";
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

              <div className={styles.alertBtn}>
                <Link to="/Theory-Portal" style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>
                    <MdKeyboardDoubleArrowLeft /> Back
                  </button>
                </Link>
                <Link
                  to="/takequizCatName/Vulnerable-Road-Users"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Start Quiz</button>
                </Link>
                <Link to="/other-vehicles" style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>
                    Next <MdKeyboardDoubleArrowRight />
                  </button>
                </Link>
              </div>
              {/* ////////////////////////////////////////////////////////////////////////////////// */}
            </div>
          </div>
        </section>

        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Who are <span>Vulnerable Road Users?</span>
          </h2>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={vulnerableroad} alt="vulnerableroad" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    The 6th topic from the theory test is vulnerable road users.
                    So far, the topics we’ve covered mostly look at what you
                    need to do to keep yourself safe when behind the wheel. This
                    time, we’re focusing on the people who are most vulnerable
                    on the road, from cyclists to horse riders, and how you need
                    to act in order to ensure their safety.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Who are <span>Vulnerable Road Users?</span>
          </h2>
          <hr
            style={{
              opacity: "1",
              border: "2px solid rgb(235, 4, 100)",
              margin: "1rem auto",
              maxWidth: "700px",
            }}></hr>
          <section>
            <p id={styles.hazardTestH2para}>
              Road users may be defined as vulnerable with regard to their
              degree of protection in traffic such as pedestrians, cyclists,
              non-motorised road users and motorcyclists, or their degree of
              mobility, such as the young, the elderly, and people with
              disabilities or special needs.
            </p>
          </section>
        </section>
        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.thMultipleChoiceSection}>
          <div className={styles.thMultipleChioceHeader}>
            <h1>
              Who is classed as a <span>Vulnerable Road Users?</span>
            </h1>
          </div>
          <div className={styles.thMultipleChoiceListContainer}>
            <section className={styles.features}>
              <div className={styles.mainFeatures}>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaWalking id={styles.featuresIcon} />
                  </span>
                  <h3>Pedestrian</h3>
                </div>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaBlind id={styles.featuresIcon} />
                  </span>
                  <h3>Elderly</h3>
                </div>

                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaBaby id={styles.featuresIcon} />
                  </span>
                  <h3>Children</h3>
                </div>

                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaBiking id={styles.featuresIcon} />
                  </span>
                  <h3>Cyclist</h3>
                </div>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaMotorcycle id={styles.featuresIcon} />
                  </span>
                  <h3>Motorbikes</h3>
                </div>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaHorse id={styles.featuresIcon} />
                  </span>
                  <h3>Horses</h3>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* ////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h1>
            Why are they classed as <span>Vulnerable Road Users?</span>
          </h1>
          <hr
            style={{
              opacity: "1",
              border: "2px solid rgb(235, 4, 100)",
              margin: "1rem auto",
              maxWidth: "700px",
            }}></hr>
          <section className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  • Limited protection from traffic. (They do not have any
                  protection from others i.e. not in another vehicle with
                  airbags and walls to take the impact)
                </p>
              </li>
              <li>
                <p>
                  • Capability to understand. (Young children are sometimes
                  unable to understand the dangers of the road and how to keep
                  themselves safe)
                </p>
              </li>
              <li>
                <p>
                  • Reduced Reactions. (The elderly may have reduced vision,
                  hearing or awareness to their surroundings. They are also
                  likely to be slower when crossing the road, unable to run
                  across like children can)
                </p>
              </li>
            </ul>
          </section>
        </section>

        {/* ////////////////////////////////////////////// */}

        {/* ////////////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          style={{ textAlign: "center" }}>
          <h2>
            Learn the <span>Warning Signs!</span>
          </h2>
          <hr
            style={{
              opacity: "1",
              border: "2px solid rgb(235, 4, 100)",
              margin: "1rem auto",
              maxWidth: "700px",
            }}></hr>
          <img
            src={roadSafty}
            alt="roadSafty"
            style={{ maxWidth: "1000px", width: "100%" }}
          />
        </section>

        {/* /////////////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
         >
          <h1>
            How to deal with <span>Vulnerable Road Users</span>
          </h1>
          <hr
            style={{
              opacity: "1",
              border: "2px solid rgb(235, 4, 100)",
              margin: "1rem auto",
              maxWidth: "700px",
            }}></hr>
        </section>
        {/* /////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection} id={styles.hazardTestWorkListSection}>
          <h3 >
            Disability <span>Scooters</span>
          </h3>
          <section className={styles.AdiParttwoDisplayFlex} id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={dogGuid} alt="dogGuide" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    Pedestrian with a white stick – This means that they are
                    blind, so cannot see you approach or stop the vehicle. Allow
                    extra time and care when crossing.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>

        {/* //////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}   id={styles.hazardTestWorkListSection}>
          <h3 >Horses</h3>
          <section className={styles.AdiParttwoDisplayFlex}  id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={horseriding} alt="horseriding" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • When you decide to overtake a horse rider, make sure you
                    can do so safely before you move out. Leave them plenty of
                    room and pass slowly. Passing too closely at speed could
                    startle the horse and unseat the rider.
                  </p>
                </li>
                <li>
                  <p>
                    • You should also never assume which way a horse rider is
                    going to go. Horses and their riders move more slowly than
                    other road users. They might not have time to cut across
                    heavy traffic to take up a position in the right-hand lane.
                    For this reason, a horse and rider may approach a roundabout
                    in the left-hand lane even though they’re turning right.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}  id={styles.hazardTestWorkListSection}>
          <h3> Motorbike/Cyclists</h3>
          <section className={styles.AdiParttwoDisplayFlex} id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={motorbikecycle} alt="motorbikecycle" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • These vehicles require you to take extra care when you see
                    them. They are most vulnerable at roundabouts and junctions.
                    Cyclists may be in the left lane, but this doesn’t mean they
                    are going left they could be going in any direction.
                    {/* They
                    will stay in the left lane close to the side of the road for
                    their own safety as horses can be easily scared by other
                    cars and cyclists may be blown over by a strong gust of
                    wind. */}
                  </p>
                </li>
                <li>
                  <p>
                    • Note: You should NEVER overtake these road users at a
                    junction.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection} id={styles.hazardTestWorkListSection}>
          <h3 >
            {" "}
            Children<span>/</span>Schools
          </h3>
          <section className={styles.AdiParttwoDisplayFlex} id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={schoolChilderns} alt="schoolChilderns" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    Children can pose a massive threat whilst driving. When
                    driving through domestic areas and by schools, you should
                    drive at a slower speed, just in case a child runs out from
                    behind a parked car into the road. As children are often
                    very small, they cannot be seen hidden behind parked cars.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection} id={styles.hazardTestWorkListSection}>
          <h3>
            {" "}
            Disability <span>Scooters</span>
          </h3>
          <section className={styles.AdiParttwoDisplayFlex} id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={disabilityScooters} alt="disabilityScooters" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    You must also be cautious if you see a disabled persons
                    vehicle (Such as an electric scooter) these will usually be
                    equipped with a yellow flashing light to indicate they are
                    slow, their maximum speed is 8MPH.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>

        {/* ///////////////////////////////////////////////////////////////// */}

        <section className={styles.mockTestContainerSection}>
          <div className={styles.mockTestHeadingContainerDIv}>
            <h2 style={{ textAlign: "center", color: "red" }}>Test Yourself</h2>
          </div>
          <div className={styles.quizStartDiv}>
            <section className={styles.startQuizSection}>
              <h2>Start Quiz</h2>
              <h3>All Questions</h3>
              <p>
                Click the start quiz button to start the quiz and See your
                result
              </p>
              <Link to="/takequizCatName/Vulnerable-Road-Users">
                {" "}
                <button>Start Quiz</button>
              </Link>
            </section>
          </div>
        </section>

        {/* ///////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}

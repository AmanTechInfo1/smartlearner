import styles from "./css/HazardAwareness.module.css";

import { IoMdArrowDropright } from "react-icons/io";
import {
  FaChess,
  FaBed,
  FaExclamation,
  FaUserClock,
  FaBeer,
  FaCarCrash,
  FaTachometerAlt,
  FaArrowCircleRight,
  FaDizzy,
  FaMobileAlt,
  FaMotorcycle,
  FaBiking,
  FaWalking,
} from "react-icons/fa";
import hazardAwareness from "../../../assets/images/Hazard-awarenessExclamantion.png";
import schoolBusStop from "../../../assets/images/school-bus-300x300.jpg";
import redYellowLorry from "../../../assets/images/red-yellow-lorry-sign-300x183.jpg";
import haltedVehicle from "../../../assets/images/halted-vehicle.jpg";
import deviation from "../../../assets/images/deviation.jpg";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HazzardAwareness() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Topic: Hazard"; // First part before "Driving"
    const secondPart = "Awareness";
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
                  to="/takequizCatName/Hazard-Awareness"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Start Quiz</button>
                </Link>
                <Link
                  to="/vulnerable-road-users"
                  style={{ textDecoration: "none" }}>
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
            What is <span>Hazard Awareness?</span>
          </h2>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={hazardAwareness} alt="hazardAwareness" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    The 5th topic from the multiple-choice section of the theory
                    test is hazard awareness. As with many of the theory test
                    topics, it’s rather straightforward to grasp. Hazards are
                    things on the road that can force you to slow down, change
                    your direction or come to a stop. It’s important that you’re
                    able to identify these hazards early on so that you can make
                    your observations and reduce your speed accordingly.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>

        {/* //////////////////////////////////////////////// */}

        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Important <span>Terms</span>
          </h2>
          <hr
            style={{
              opacity: "1",
              border: "2px solid #eb0417",
              margin: "1rem auto",
              maxWidth: "700px",
            }}></hr>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div
              className={styles.hazardTestWorkListDiv}
              id={styles.hazardTestWorkListDiv12}>
              <ul type="none">
                <img src={schoolBusStop} alt="schoolBusStop" />

                <section id={styles.resLists1}>
                  <li>
                    <p>
                      This sign on a vehicle indicates that the vehicle is a
                      school bus.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
            <div
              className={styles.hazardTestWorkListDiv}
              id={styles.hazardTestWorkListDiv123}>
              <ul type="none">
                <img src={redYellowLorry} alt="redYellowLorry-img" />

                <section id={styles.resLists2}>
                  <li>
                    <p>
                      This sign is found on slow-moving or stationary works
                      vehicles. Overtake on the left, as indicated by the arrow.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
            <div
              className={styles.hazardTestWorkListDiv}
              id={styles.hazardTestWorkListDiv12}>
              <ul type="none">
                <img src={deviation} alt="deviation" />

                <section id={styles.resLists1}>
                  <li>
                    <p>
                      This sign means a sharp deviation to the left. (right if
                      the arrows face right)
                    </p>
                  </li>
                </section>
              </ul>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Key Terms <span>To Learn.</span>
          </h2>
          <hr
            style={{
              opacity: "1",
              border: "2px solid #eb0417",
              margin: "1rem auto",
              maxWidth: "700px",
            }}></hr>
          <section >
            <p id={styles.hazardTestH2para}>
              Here are the key terms you will need to know in order to pass the
              multiple-choice section: Hazard Awareness
            
           
              Whenever you drive towards a hazard you should reduce your speed.
              Hazards are anything that may make you slow down, change
              direction, or stop. Again, if you’re stuck for an answer always
              select the safest option.
            </p>
          </section>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}></div>
          </section>
        </section>

        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.thMultipleChoiceSection}>
          <div className={styles.thMultipleChoiceListContainer}>
            <section className={styles.features}>
              <div className={styles.mainFeatures}>
                <div className={styles.column}>
                  <span>
                    <FaChess id={styles.featuresIcon} />
                  </span>
                  <h3>Anticipation</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <p>
                          Definition: The action of anticipating something;
                          expectation or prediction.
                        </p>
                      </li>
                      <li>
                        <p>
                          Anticipation in driving is crucial to keeping yourself
                          and others safe. Think about how your actions will
                          affect those around you.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.column} id={styles.column}>
                  <span>
                    <FaBed id={styles.featuresIcon} />
                  </span>
                  <h3>Tiredness</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <p>
                          Definition: The state of needing to sleep or rest.
                        </p>
                      </li>
                      <li>
                        <p>
                          Being tired while driving is extremely dangerous,
                          especially on a motorway. You should always ensure you
                          are well-rested before driving.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.column}>
                  <span>
                    <FaExclamation id={styles.featuresIcon} />
                  </span>
                  <h3>Attention</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <p>
                          Definition: The action of dealing with or taking
                          special care of someone or something.
                        </p>
                      </li>
                      <li>
                        <p>
                          Driving always requires your full attention. You
                          should always try to limit distractions when driving.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.column} id={styles.column}>
                  <span>
                    <FaUserClock id={styles.featuresIcon} />
                  </span>
                  <h3>Reaction Time</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <p>
                          Definition: The interval between a situation and the
                          response.
                        </p>
                      </li>
                      <li>
                        <p>
                          When driving you should be aware of both your own and
                          others’ reaction times. Older people usually have
                          slower reaction times.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.column}>
                  <span>
                    <FaBeer id={styles.featuresIcon} />
                  </span>
                  <h3>Drink/Drug Driving</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <p>
                          Definition: Driving under the influence of alcohol or
                          drugs.
                        </p>
                      </li>
                      <li>
                        <p>
                          Alcohol and drugs affect your reaction time by making
                          you drowsy. This is the same for some medications.
                          Always check the label or with your doctor before
                          driving.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.column} id={styles.column}>
                  <span>
                    <FaCarCrash id={styles.featuresIcon} />
                  </span>
                  <h3>Hazard Awareness</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <p>
                          Definition: To ensure that you are alert to the
                          possibility of hazardous situations, and know what
                          steps to take.
                        </p>
                      </li>
                      <li>
                        <p>
                          The behaviour of other vehicles, cyclists, and
                          pedestrians can forewarn you of potentially hazardous
                          scenarios.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.column}>
                  <span>
                    <FaTachometerAlt id={styles.featuresIcon} />
                  </span>
                  <h3>Speeding</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <p>
                          Definition: The act of breaking the speed limit while
                          driving.
                        </p>
                      </li>
                      <li>
                        <p>
                          Inappropriate speed doesn’t always mean breaking the
                          speed limit. It can mean driving too fast for your
                          conditions, such as near schools or in wet/icy
                          conditions.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////////////////////// */}
        <section>
          <div className="d-flex flex-column flex-md-row bg-warning p-4">
            <div className="w-100 w-md-50">
              <iframe
                width="680"
                height="383"
                src="https://www.youtube.com/embed/OxOiZ7kXh2k"
                title="Drinking &amp; Driving - How Alcohol Affects Your Body?"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            </div>
            <div className="w-100 w-md-50 p-4" style={{ color: "red" }}>
              <h2 className="h2 font-weight-bold mb-2">
                The affects of alcohol on driving
              </h2>
              <hr
                className="border-top border-light mb-4"
                style={{ opacity: "1" }}
              />
              <ul className="list-unstyled fs-5">
                <li className="d-flex align-items-center mb-2 gap-2">
                  <FaArrowCircleRight />
                  Less control.
                </li>
                <li className="d-flex align-items-center mb-2 gap-2">
                  <FaArrowCircleRight />A false sense of confidence.
                </li>
                <li className="d-flex align-items-center mb-2 gap-2">
                  <FaArrowCircleRight />
                  Poor judgment of speed.
                </li>
                <li className="d-flex align-items-center mb-2 gap-2">
                  <FaArrowCircleRight />
                  Reduced co-ordination.
                </li>
                <li className="d-flex align-items-center mb-2 gap-2">
                  <FaArrowCircleRight />
                  Reduced concentration.
                </li>
                <li className="d-flex align-items-center mb-2 gap-2">
                  <FaArrowCircleRight />
                  Poor judgment.
                </li>
                <li className="d-flex align-items-center mb-2 gap-2">
                  <FaArrowCircleRight style={{ fontSize: "1.7rem" }} />
                  Get a conviction for driving whilst unfit through drink or
                  drugs and your car insurance premium will rise significantly.
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////////// */}
        <section className={styles.thMultipleChoiceSection}>
          {/* <div className={styles.thMultipleChioceHeader}>
            <h2 >Vehicle Safety</h2>
          </div> */}
          <div className={styles.thMultipleChoiceListContainer}>
            <section className={styles.features}>
              <div className={styles.mainFeatures}>
                <div className={styles.column}>
                  <span>
                    <FaBed id={styles.featuresIcon} />
                  </span>
                  <h3>Tiredness</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <p>
                          When driving, if you start to feel tired you should
                          always find a safe, convenient place to stop and rest.
                          If no such place is immediately available you should
                          open a window and allow a good supply of fresh air
                          into the car.
                        </p>
                      </li>
                      <li>
                        <p>
                          Top tip: On a long journey always take regular rest
                          breaks. Regular stops help maintain concentration.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.column} id={styles.column}>
                  <span>
                    <FaDizzy id={styles.featuresIcon} />
                  </span>
                  <h3>Illness</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <p>
                          If you have any current illness that is likely to
                          negatively affect your driving ability then you should
                          not drive. You should also avoid driving if you are
                          taking medication that makes you tired or drowsy.
                        </p>
                      </li>
                      <li>
                        <p>
                          Note: If you start to suffer from an illness, which
                          affects your driving, you should inform the licensing
                          authority.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.column}>
                  <span>
                    <FaMobileAlt id={styles.featuresIcon} />
                  </span>
                  <h3>Distractions</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <p>
                          Maintaining high levels of concentration is essential
                          for road safety. Whenever your concentration levels
                          dip you should stop and rest until you are capable of
                          maintaining the high levels of concentration needed to
                          drive safely.
                        </p>
                      </li>
                      <li>
                        <p>
                          Top Tip: Avoid looking at maps, touching your radio,
                          or using mobile phones while driving.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.thMultipleChoiceSection}>
          {/* <div className={styles.thMultipleChioceHeader}>
            <h2 >Vehicle Safety</h2>
          </div> */}
          <div className={styles.thMultipleChoiceListContainer}>
            <section className={styles.features}>
              <div className={styles.mainFeatures}>
                <div className={styles.column}>
                  <span>
                    <FaMotorcycle id={styles.featuresIcon} />
                  </span>
                  <h3>Motorbike</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <p>
                          When emerging from a junction you should be extra
                          cautious, as your windscreen pillars can easily hide a
                          motorbike.
                        </p>
                      </li>
                      <li>
                        <p>
                          When making a u-turn or turning right you should look
                          over your shoulder to check for motorbikes.
                        </p>
                      </li>
                      <li>
                        <p>
                          When hanging lanes or moving out to overtake always be
                          careful incase a motorbike is on your right.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.column} id={styles.column}>
                  <span>
                    <FaBiking id={styles.featuresIcon} />
                  </span>
                  <h3>Cyclist</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <p>
                          Give cyclists plenty of room. They may wobble or
                          swerve to avoid drains or potholes.
                        </p>
                      </li>
                      <li>
                        <p>
                          When travelling in slow traffic, before you turn left,
                          check for cyclists filtering through the traffic on
                          your left.
                        </p>
                      </li>
                      <li>
                        <p>
                          At junctions or traffic lights give them time to turn
                          or pull away.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.column}>
                  <span>
                    <FaWalking id={styles.featuresIcon} />
                  </span>
                  <h3>Pedestrians</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <p>
                          Where there is no pavement you should be looking out
                          for pedestrians walking on the road.
                        </p>
                      </li>
                      <li>
                        <p>
                          In residential roads with parked cars you should be
                          cautious of small children running out or crossing.
                        </p>
                      </li>
                      <li>
                        <p>
                          Children and older people are more likely to misjudge
                          your speed and attempt to cross. You should always
                          take extra care when approaching these types of road
                          users
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* /////////////////////////////////////// */}
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
              <Link to="/takequizCatName/Hazard-Awareness">
                {" "}
                <button>Start Quiz</button>
              </Link>
            </section>
          </div>
        </section>

        {/* ////////////////////////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}

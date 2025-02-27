import React from "react";
import styles from "./css/MotorwayRules.module.css";

import {
  FaTimesCircle,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaTrailer,
  FaCheckCircle,
} from "react-icons/fa";
import motorwayLogo from "../../../assets/images/motorway-logo.png";
import mway from "../../../assets/images/mway.jpg";
import motorwayStuds from "../../../assets/images/motorway-studs-1-rotated.jpg";
import motorwayBreakdowns from "../../../assets/images/brakeDowns.png";
import towingTruck from "../../../assets/images/towingTruck.jpg";
import crawler from "../../../assets/images/crawler.png";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MotorwayRules() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Topic: Motorway"; // First part before "Driving"
    const secondPart = "Rules";
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
                  to="/takequizCatName/Motorway-Rules"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Start Quiz</button>
                </Link>
                <Link to="/rules-of-road" style={{ textDecoration: "none" }}>
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
            What are <span>Motorway Rules?</span>
          </h2>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={motorwayLogo} alt="motorwayLogo" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    The 9th topic from the multiple-choice section in the theory
                    test is motorway rules. When it comes to driving on the
                    motorway, small mistakes can have huge consequences. If
                    you’re not familiar with speed limits, lane discipline and
                    even what to do if you break down on the motorway, you could
                    end up endangering yourself and the motorists around you.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section className={styles.hazardTestWorkListSection}>
            <ul type="none">
              <h1>
                The following groups or{" "}
                <span>vehicles cannot travel on the motorway;</span>
              </h1>
            </ul>
          </section>
          <section
            className={styles.bgColorList2}
            style={{ textAlign: "center" }}>
            <ul type="none">
              <li>
                <FaTimesCircle id="listrightIcon" /> <p>Bicycles</p>
              </li>
              <li>
                <FaTimesCircle id="listrightIcon" />{" "}
                <p>Motorcycles with power of under 50 cc</p>
              </li>
              <li>
                <FaTimesCircle id="listrightIcon" />{" "}
                <p>The majority of powered wheelchairs/mobility scooters</p>
              </li>
              <li>
                <FaTimesCircle id="listrightIcon" />{" "}
                <p>Agricultural vehicles</p>
              </li>
              <li>
                <FaTimesCircle id="listrightIcon" />{" "}
                <p>Some slow-moving vehicles</p>
              </li>
              <li>
                <FaTimesCircle id="listrightIcon" /> <p>Pedestrians</p>
              </li>
              <li>
                <FaTimesCircle id="listrightIcon" /> <p>Horse riders</p>
              </li>
            </ul>
          </section>
        </section>

        {/* ///////////////////////////////////////////////////// */}

        {/* //////////////////////////////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3>
            Before a <span> Motorway Journey</span>
          </h3>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={mway} alt="motorwayLogo" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    When it comes to driving on the motorway, small mistakes can
                    have huge consequences. If you’re not familiar with speed
                    limits, lane discipline and even what to do if you break
                    down on the motorway, you could end up endangering yourself
                    and the motorists around you.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* /////////////////////////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3>
            Joining the <span>Motorway</span>
          </h3>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDivImg}>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="400"
                    height="226"
                    style={{
                      filter:
                        "drop-shadow(0.35rem 0.35rem 0.4rem rgba(44, 44, 44, 0.8))",
                    }}
                    src="https://www.youtube.com/embed/-LzwsHSZI6o"
                    title="Road Safety: Joining the Motorway"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <FaTimesCircle id="listrightIcon" />{" "}
                  <p>
                    Use the slip road to build up your speed to match the
                    traffic already on the motorway before merging
                  </p>
                </li>
                <li>
                  <FaTimesCircle id="listrightIcon" />{" "}
                  <p>Give way to traffic already on the motorway.</p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem" }}>
            Driving on a motorway
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <p id={styles.hazardTestH2para}>
                For most vehicles travelling on the motorway the national speed
                limit applies. For cars and motorcycles this is 70 mph. This
                limit applies to all lanes except those with signs showing a
                lower speed limit, you must obey these.
              </p>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.thMultipleChoiceSection}>
          <div className={styles.thMultipleChoiceListContainer}>
            <section className={styles.features}>
              <div className={styles.mainFeatures}>
                <div className={styles.column}>
                  <span>
                    <FaArrowCircleLeft id={styles.featuresIcon} />
                  </span>
                  <h3>Use the left lane</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <FaCheckCircle id="listrightIcon" />{" "}
                        <p>When joining the motorway.</p>
                      </li>
                      <li>
                        <FaCheckCircle id="listrightIcon" />{" "}
                        <p>Before you leave the motorway.</p>
                      </li>
                      <li>
                        <FaCheckCircle id="listrightIcon" />{" "}
                        <p>Always unless overtaking.</p>
                      </li>
                      <li>
                        <FaTimesCircle id="listrightIcon" />{" "}
                        <p>
                          You shouldn’t overtake on the left unless traffic is
                          moving slowly in queues and the queue on your right is
                          moving more slowly than the one you’re in. In this
                          instance you may overtake on the left.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.column} id={styles.column}>
                  <span>
                    <FaArrowCircleRight id={styles.featuresIcon} />
                  </span>
                  <h3>Using center/right lane</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <FaCheckCircle id="listrightIcon" />{" "}
                        <p>
                          The middle and right-hand lanes are to be used only
                          for overtaking other vehicles, and you must return to
                          the left lane when you’ve finished overtaking.
                        </p>
                      </li>
                      <li>
                        <FaCheckCircle id="listrightIcon" />{" "}
                        <p>
                          You should only use the center/right lane as normal
                          running lanes if signs tell you to.
                        </p>
                      </li>
                      <li>
                        <FaTimesCircle id="listrightIcon" />{" "}
                        <p>
                          Do not assume the center/right lane are for faster
                          speeds. Even when overtaking you should be careful to
                          not break the speed limit.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.column}>
                  <span>
                    <FaTrailer id={styles.featuresIcon} />
                  </span>
                  <h3>Towing a trailer</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <FaCheckCircle id="listrightIcon" />{" "}
                        <p>
                          In normal circumstances. you should only travel in the
                          left lane and use the center lane to overtake.
                        </p>
                      </li>
                      <li>
                        <FaCheckCircle id="listrightIcon" />{" "}
                        <p>
                          If your towing the speed limit is lower for you. The
                          speed limit when towing a trailer on a motorway is 60
                          MPH.
                        </p>
                      </li>
                      <li>
                        <FaTimesCircle id="listrightIcon" />{" "}
                        <p>
                          You should not travel in the right-hand lane of a
                          motorway, unless there are lane closures.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>{" "}
        </section>
        {/* //////////////////////////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          style={{ textAlign: "center" }}>
          <h2>
            Key <span>terms</span>{" "}
          </h2>
          <hr
            style={{
              opacity: "1",
              border: "2px solid #eb0417",
              margin: "1rem auto",
              maxWidth: "700px",
            }}></hr>
          <div className={styles.features}>
            <img
              src={motorwayStuds}
              alt="motorway"
              style={{
                maxWidth: "650px",
                width: "100%",
                margin: "10px",
                borderRadius: "10px",
                filter:
                  "drop-shadow(0.35rem 0.35rem 0.4rem rgba(44, 44, 44, 0.8))",
              }}
            />
            <div className={styles.hazardTestWorkListDiv23}>
              <img
                src={motorwayBreakdowns}
                alt="motorway"
                style={{ maxWidth: "850px", width: "100%", margin: "10px" }}
              />
            </div>
          </div>
        </section>

        {/* ////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h1>
            What to do if you <span>breakdown or have an accident</span>
          </h1>
          <h2
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              marginTop: "1rem",
            }}>
            Only stop on the motorway if;
          </h2>
          <div className={styles.bgColorList33} style={{ textAlign: "center" }}>
            <ul type="none">
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>There are red flashing lights above every lane.</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  You’re told to do so by the police, Driver and Vehicle
                  Standards Agency (DVSA) officers or traffic officers.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>You’re stuck in a traffic jam.</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>You have an emergency or breakdown.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ////////////////////////////////////////////////////////////// */}
        {/* <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Before a <span>Motorway Journey</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={mway} alt="motorwayLogo" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    When it comes to driving on the motorway, small mistakes can
                    have huge consequences. If you’re not familiar with speed
                    limits, lane discipline and even what to do if you break
                    down on the motorway, you could end up endangering yourself
                    and the motorists around you.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section> */}
        {/* ////////////////////////////////////////////////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h3 style={{ fontSize: "1.5rem" }}>
                  If you are stopped in an emergency on the hard shoulder you
                  should:
                </h3>
                <section id={styles.resLists1}>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      Warn other drivers that you have broken down by switching
                      on your hazard lights.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      If visibility is poor or its night-time, switch on the
                      sidelights and don’t open the offside doors (those nearest
                      the carriageway). Instead, you and your passengers should
                      leave the vehicle by the nearside doors, away from the
                      traffic.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      In case another vehicle crashes into yours, you should
                      wait on the embankment near your vehicle, but away from
                      the hard shoulder.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      When you are ready to return to the carriageway you should
                      wait for a safe gap in the traffic and then drive along
                      the hard shoulder to gain speed before moving out onto the
                      main carriageway in the same way you’d use the slip road
                      when first entering the motorway.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h3 style={{ fontSize: "1.5rem" }}>
                  <span>
                    You should use one of the emergency telephones if you’re
                    able to.
                  </span>
                </h3>
                <section id={styles.resLists2}>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      Normally at one-mile intervals. Marker posts at 100-metre
                      intervals point you in the direction of the nearest phone.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      Connected directly to a control centre, where the operator
                      will deal with your call and direct the appropriate
                      services to help you.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      You should stand facing the oncoming traffic if you need
                      to use the emergency telephone. This is so that you can
                      see any hazards approaching.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
          </section>
        </section>
        {/* ////////////////////////////////////////////////////////////// */}

        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <ul type="none">
              <h2 style={{ fontSize: "1.5rem" }}>
                If you cannot get onto the{" "}
                <span>Hard shoulder when you break down, you should:</span>
              </h2>
              <section id={styles.resLists12}>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>Obey all speed limits.</p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>Keep a safe distance from the vehicle ahead.</p>
                </li>
              </section>
            </ul>
          </div>
        </section>
        {/* /////////////////////////////////////////////////// */}

        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <h3>
            Joining <span>The Motorway</span>
          </h3>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={towingTruck} alt="towingTruck" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <FaTimesCircle id="listrightIcon" />{" "}
                  <p>
                    Use the slip road to build up your speed to match the
                    traffic already on the motorway before merging
                  </p>
                </li>
                <li>
                  <FaTimesCircle id="listrightIcon" />{" "}
                  <p>Give way to traffic already on the motorway.</p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* /////////////////////////////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <h1>
            Smart Motorway and <span>Motorway Signs</span>
          </h1>

          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <FaTimesCircle id="listrightIcon" />{" "}
                <p>
                  Smart motorways are a contentious topic, but for now, they’re
                  here to stay. Many people are of the opinion that smart
                  motorways are more dangerous than conventional motorways,
                  because of the lack of a hard shoulder.
                </p>
              </li>
              <li>
                <FaTimesCircle id="listrightIcon" />{" "}
                <p>
                  A smart motorway is a section of a motorway that uses traffic
                  management methods to increase capacity and reduce congestion
                  in, particularly busy areas. These methods include using the
                  hard shoulder as a running lane and using variable speed
                  limits to control the flow of traffic.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////////////////// */}

        <section
          className={styles.hazardTestWorkListSection}
          id={styles.hazardTestWorkListSection}>
          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex1}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={crawler} alt="crawler" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <FaTimesCircle id="listrightIcon" />{" "}
                  <p>
                    Crawler Lane – Where the motorway goes uphill steeply, there
                    may be a separate lane for slow-moving vehicles, known as a
                    crawler lane. This helps the faster-moving traffic to flow
                    more easily and will be signposted.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section style={{ textAlign: "center", color: "white" }}>
          <p>
            To view all Motorway Road Signs{" "}
            <a
              href="https://assets.publishing.service.gov.uk/media/656ef4271104cf0013fa74ef/know-your-traffic-signs-dft.pdf"
              style={{
                textAlign: "center",
                color: "#dd0067",
                textDecoration: "none",
              }}>
              {" "}
              Click Here
            </a>{" "}
            – You will find all the motorway signs from pages 89 to 93.
          </p>
        </section>

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
              <Link to="/takequizCatName/Motorway-Rules">
                {" "}
                <button>Start Quiz</button>
              </Link>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./css/VehicleLoading.module.css";

import { FaCheckCircle } from "react-icons/fa";
import trailerLarge from "../../../assets/images/trailer-large-1024x492.jpg";
import roofRack from "../../../assets/images/Roof-Racks-20-1024x683.jpg";
import CarryingPassenger from "../../../assets/images/carryingPassenger.jpg";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function VehicleLoading() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Topic: Vehicle "; // First part before "Driving"
    const secondPart = "Loading";
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
                  to="/takequizCatName/Vehicle-Loading"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Start Quiz</button>
                </Link>
                <Link to="/video-clips" style={{ textDecoration: "none" }}>
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
            What is <span>Vehicle Loading?</span>
          </h2>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={trailerLarge} alt="trailerLarge" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    The 14th topic is Vehicle Loading. The vehicle loading
                    section of the driving theory test contains questions about
                    how to load your vehicle, towing trailers and caravans, and
                    the use of roof racks, etc. The questions in this section
                    are all to do with the safety of yourself and other road
                    users, minimizing environmental impact and costs of fuel, as
                    well as staying within the law.
                  </p>
                </li>
                <p style={{ fontWeight: "700" }}>
                  Effects of vehicle loading on fuel consumption.
                </p>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    It is important to note that the extra weight you’re
                    carrying will increase your vehicle’s fuel consumption. This
                    will increase even more if you’re carrying a load on a roof
                    rack due to the increased wind resistance and drag this
                    creates.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Loading your <span>Vehicle Safely.</span>
          </h2>

          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  Before attempting to load your vehicles with people or goods,
                  you should ensure that you know how to do so safely and the
                  effects that carrying loads may have.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  There may be a tendency to think that as long as you have
                  space in your car, it is safe to fill it. However, this would
                  be incorrect and unsafe as you’d be putting yourself at risk
                  of overloading your car. Overloading can seriously affect the
                  vehicle’s handling, especially the steering and braking, and
                  therefore makes it much harder to drive smoothly, and respond
                  to road conditions and hazards in a safe and timely manner.
                </p>
              </li>
              <p style={{ fontWeight: "700" }}>
                Once you have ensured that you have a suitable amount to load
                into your vehicle without overloading, you need to make sure
                that you load your vehicle carefully to avoid upsetting its
                stability. You can do this by:
              </p>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  Making sure that the load is securely fastened, with rope,
                  bungee cord or a seatbelt, so that it can’t move when you’re
                  cornering or braking.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  Ensuring that your load doesn’t obstruct your view when you’re
                  driving, or stick out where it could be dangerous or
                  obstructive to other road users.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>Distributing the weight evenly.</p>
              </li>
            </ul>
          </div>
        </section>
        {/* ////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Car Handling when <span>Carrying a Heavy Load.</span>
          </h2>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={roofRack} alt="roofRack" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    Carrying a load may affect how your car handles, even if
                    it’s not overloaded. For example, carrying goods on a roof
                    rack will increase wind resistance which may make your
                    vehicle less stable. If you are using a roof rack, you need
                    to be aware of the fact that the load is exposed to the
                    elements, and you may therefore need to protect it from
                    rain, sleet or snow by covering it. Specially-designed roof
                    boxes are available, which cut down the wind resistance and
                    help to ensure that loads are kept secure and dry.
                  </p>
                </li>
                <p style={{ fontWeight: "700" }}>
                  The effect of carrying goods on your car’s handling and
                  suspension mean that, when you’re carrying or towing a heavy
                  load, you may need to make adjustments to your vehicle, such
                  as:
                </p>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>Increasing the air pressure of your tires.</p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>Adjusting the aim of your headlights.</p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Carrying <span>Passengers safely.</span>
          </h2>

          <section
            className={styles.AdiParttwoDisplayFlex}
            id={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={CarryingPassenger} alt="CarryingPassenger" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    Carrying goods can be tricky, but ensuring the safety of
                    passengers is vital. All passengers MUST wear seat belts,
                    provided they are fitted. This is the responsibility of you
                    as the driver, regardless of the passenger’s age. If the
                    passenger is under 14 years of age, they must wear a
                    suitable restraint when travelling in your vehicle. The type
                    of restraint varies with the age of the child and may be a
                    baby carrier, child seat or booster seat (and can be front
                    or rear facing) but it MUST be suitable for the child’s
                    weight and size.
                  </p>
                </li>
              </ul>
            </div>
          </section>
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
              <Link to="/takequizCatName/Vehicle-Loading">
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

import React, { useEffect } from "react";
import styles from "../../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../../assets/images/L-Plate.jpg";
import roundAbouts from "../../../../assets/images/roundabouts.png";
import parkedCars from "../../../../assets/images/parkedCars.png";
import junction from "../../../../assets/images/junction.png";
import Bends from "../../../../assets/images/bends.png";
import roadworks from "../../../../assets/images/roadWorks.png";
import roadSurface from "../../../../assets/images/roadSurface.png";
import zebra from "../../../../assets/images/zebraCrossing.png";
import toucan from "../../../../assets/images/toucan.png";
import equestrian from "../../../../assets/images/equestrian.png";
import pelican from "../../../../assets/images/pelican.png";
import puffin from "../../../../assets/images/puffin.png";
import emergencyService from "../../../../assets/images/emergencyService.png";
import builtUpTraffic from "../../../../assets/images/builtupTraffic.png";
import Cyclist from "../../../../assets/images/cyclistsImg.png";
import pedestrian from "../../../../assets/images/pedestrian.png";
import carDrivers from "../../../../assets/images/carDrivers.png";
import MotorCyclists from "../../../../assets/images/MotorCyclistsImg.png";
import cyclists from "../../../../assets/images/Cyclistssss.png";
import HorseRiders from "../../../../assets/images/horse-ridersImges.png";
import DriversOfLargeVehicle from "../../../../assets/images/diversLargeVehicle.png";
import VehicleCarrying from "../../../../assets/images/vehicalscarrying.png";
import overtakingVehicle from "../../../../assets/images/overtaking vehicles.png";
import disabledPoweredVehicle from "../../../../assets/images/disabledPawer.png";
import OlderDrivers from "../../../../assets/images/olderDrivers.png";
import Rain from "../../../../assets/images/rainImg.png";
import Ice from "../../../../assets/images/iceImg.png";
import Fog from "../../../../assets/images/fogImg.png";
import BrightSun from "../../../../assets/images/sunSet.png";
import { Link } from "react-router-dom";

import { useRef } from "react";
import gsap from "gsap";

export default function HazardPreceptions() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = " Forget the rest,"; // First part before "Driving"
    const secondPart = "learn with the best!"; // Second part after "Driving"

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
              <div className={styles.gGpFrontListP}>
                <p>
                  Unlock your driving potential with Smartlearner Learn from
                  certified instructors in a safe, supportive environment. Start
                  your journey to becoming a confident, skilled driver today!
                </p>
              </div>
              <div className={styles.alertBtn}>
                <Link to="/Contact-Us" style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ////////////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <p id={styles.hazardTestWorkListSectionPara}>
            In this video, we will be discussing Hazard Perception and some tips
            and tricks{" "}
            <span>
              To ensure you fully understand this portion of the exam.
            </span>
          </p>

          <div className={styles.innerTheorySupportContent}>
            <div className={styles.theorySupportContentVideo}>
              <iframe
                width="1020"
                height="531"
                style={{ borderRadius: "30px" }}
                src="https://www.youtube.com/embed/SdQRkmdhwJs"
                title="Hazard perception test 2024: official DVSA guide"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            </div>
          </div>
        </section>

        {/* <section className={styles.hazardTestWorkListSection}>
          <h2>
            What is <span>a hazard?</span>
          </h2>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  A hazard is a situation that may require a driver or rider to
                  respond by taking action, such as changing speed or direction.
                  To watch videos on how to handle the hazard perception test,
                  click the button at the bottom of the page.
                </p>
              </li>
            </ul>
          </div>
        </section>
       

        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Static <span>hazards</span>
          </h2>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  A static hazard is a road feature that doesn’t change and
                  where there is an increased risk of danger developing
                </p>
              </li>
            </ul>
          </div>
        </section> */}

        {/* ///////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>Static Hazard</h2>
          <section className={styles.imagesHSection}>
            <div id={styles.imagesHSection}>
              <img src={roundAbouts} alt="roundAbouts" />
              <img src={parkedCars} alt="parkedCars" />
              <img src={junction} alt="junction" />
              <img src={Bends} alt="Bends" />
              <img src={roadworks} alt="roadworks" />
              <img src={roadSurface} alt="roadSurface" />
            </div>
          </section>{" "}
        </section>
        {/* ///////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Different types <span>Of crossings</span>
          </h2>

          <section className={styles.imagesHSection}>
            <p id={styles.hazardTestWorkListSectionPara2}>
              There will often be a road sign warning{" "}
              <span>that you are approaching a static hazard. </span>
            </p>
            <div id={styles.imagesHSection}>
              <img src={zebra} alt="zebra" />
              <img src={toucan} alt="toucan" />
              <img src={equestrian} alt="equestrian" />
              <img src={pelican} alt="pelican" />
              <img src={puffin} alt="puffin" />
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>Moving hazards</h2>
          <section className={styles.imagesHSection}>
            <p id={styles.hazardTestWorkListSectionPara2}>
              Moving hazards tend to be{" "}
              <span> hazards caused by other road users.</span>{" "}
            </p>
            <div id={styles.imagesHSection}>
              <img src={emergencyService} alt="emergencyService" />
              <img src={builtUpTraffic} alt="builtUpTraffic" />
              <img src={Cyclist} alt="Cyclist" />
            </div>
          </section>
        </section>
        {/* ///////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Road user and<span> what to do</span>
          </h2>
          <section className={styles.imagesHSection2}>
            <div id={styles.imagesHSection}>
              <section>
                <img src={pedestrian} alt="pedestrian" />{" "}
                <p>
                  If you see pedestrians in the road, be patient and wait for
                  them to finish crossing. On country roads there may be no
                  pavement, so look out for pedestrians in the road. They may be
                  walking towards you on your side of the road.{" "}
                </p>
              </section>
              <section>
                <img src={carDrivers} alt="carDrivers" />{" "}
                <p>
                  Hazards caused by other drivers are all too common and can
                  lead to emotional reactions. An emotional reaction may affect
                  your ability to drive safely and could increase your
                  likelihood of causing an incident. Stay calm and make
                  allowances for other drivers. Remember, even experienced
                  drivers can make mistakes.{" "}
                </p>
              </section>
              <section>
                <img src={MotorCyclists} alt="MotorCyclists" />

                <p>
                  Look out for motorcyclists, especially when you’re emerging
                  from a junction, turning into a road on your right or changing
                  lanes or moving out to overtake.{" "}
                </p>
              </section>
              <section>
                <img src={cyclists} alt="cyclists" />
                <p>
                  Be aware of cyclists and give them plenty of room. They may
                  wobble or swerve to avoid drains or potholes. At junctions or
                  traffic lights, give cyclists time to turn or pull away. When
                  travelling in slow traffic, before you turn left, check for
                  cyclists filtering through the traffic on your left.
                </p>{" "}
              </section>
              <section>
                <img src={HorseRiders} alt="HorseRiders" />
                <p>
                  Horses can be unpredictable and easily spooked. Reduce your
                  speed and give them plenty of room when overtaking.{" "}
                </p>{" "}
              </section>
              <section>
                <img src={DriversOfLargeVehicle} alt="DriversOfLargeVehicle" />
                <p>
                  If you see a bus at a bus stop, remember that people may get
                  off and then cross the road, or that the bus may be about to
                  move off. School buses might stop at places other than bus
                  stops. At some bridges, high vehicles may need to use the
                  centre of the road to be able to pass underneath. Large goods
                  vehicles over 13 metres long have red and yellow markings at
                  the back of the vehicle.{" "}
                </p>{" "}
              </section>
              <section>
                <img src={VehicleCarrying} alt="VehicleCarrying" />
                <p>
                  Some vehicles have information signs on the back, to show that
                  they contain a hazardous load. Learn what the signs mean.{" "}
                </p>{" "}
              </section>
              <section>
                <img src={overtakingVehicle} alt="overtakingVehicle" />

                <p>
                  Watch out for vehicles, especially motorcyclists, overtaking
                  and cutting in front of you. If you need to, drop back to keep
                  a safe distance from the vehicle in front. When turning right,
                  don’t forget to check to your right for overtaking vehicles
                  before making the turn.{" "}
                </p>
              </section>
              <section>
                <img
                  src={disabledPoweredVehicle}
                  alt="disabledPoweredVehicle"
                />

                <p>
                  Reduce your speed and be careful. These small vehicles are
                  extremely vulnerable on the road because they’re difficult to
                  see and they travel slow.
                </p>
              </section>
              <section>
                <img src={OlderDrivers} alt="OlderDrivers" />

                <p>
                  Older drivers may not react very quickly, so be patient with
                  them. You can practise spotting hazards in everyday situations
                  such as when you’re on a bus, as a passenger in a car, or
                  riding a bicycle.{" "}
                </p>
              </section>
            </div>
          </section>{" "}
        </section>
        {/* ///////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <p id={styles.hazardTestWorkListSectionPara2}>
            Different types of weather such as rain, ice fog and even bright
            sunlight can create extra hazards. They can make it harder to see
            the road or affecting your control of the vehicle. Change the way
            you drive or ride to suit the weather conditions. The road
            conditions can be another hazard and some road users will be
            affected more than others.{" "}
            <span>
              {" "}
              For example, a loose road surface will be a greater hazard for a
              motorcyclist than for a car driver, but the car driver needs to be
              aware of this and make allowances as necessary.
            </span>
          </p>

          <div id={styles.imagesHSection}>
            <section>
              <img src={Rain} alt="pedestrian" />
              <p>
                Double your distance from the vehicle in front to four seconds.
              </p>
            </section>
            <section>
              <img src={Ice} alt="Ice" />
              <p>
                Slow down and increase your separation distance: allow up to 10
                times the gap you’d leave in the dry.
              </p>
            </section>
            <section>
              <img src={Fog} alt="Fog" />
              <p>Slow down and use dipped headlights.</p>
            </section>
            <section>
              <img src={BrightSun} alt="BrightSun" />
              <p>Be aware that sunlight can dazzle you or other drivers.</p>
            </section>
          </div>
        </section>

        <div className={styles.TMnextPage}>
          <Link to="/hazard-clips">
            <button className={styles.TMnextButton}>Hazard Videos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

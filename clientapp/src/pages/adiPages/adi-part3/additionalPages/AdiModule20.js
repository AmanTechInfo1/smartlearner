import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import backgroundImage from "../../../../assets/images/control-junction.jpg";
import { motion } from "framer-motion";

const faultData = [
  {
    title: "Awareness / planning",
    description:
      "Reasons to record a fault under ‘awareness / planning’ include:",
    shortDec: (
      <>
        <ul>
          <li>
            1. not considering the actions of vulnerable road users such as
            pedestrians, cyclists, motorcyclists and horse riders
          </li>
          <li>2. not anticipating road and traffic conditions in good time</li>
          <li>
            3. reacting to other road users at the last moment rather than in
            good time
          </li>
        </ul>
      </>
    ),

    faults: [
      {
        type: "Driving fault",
        example: "Late reaction to what other road users are doing",
      },
      {
        type: "Serious fault",
        example:
          "Last minute and sudden reaction to other road users compromising their safety",
      },
      {
        type: "Dangerous fault",
        example:
          "Any situation brought about by a last minute and sudden reaction to other road users that results in actual danger to the pupil, instructor, general public or property",
      },
    ],
  },
  {
    title: "Clearance",
    description:
      "The pupil should allow plenty of room when passing stationary vehicles and obstructions. They should be able to display the readiness to be prepared to slow down or stop, as a door may open, a child may run out or a vehicle may pull out without warning.",
    shortDec: (
      <>
        <ul>
          <li>
            Record a fault under ‘clearance’ if the pupil drives too close to
            stationary vehicles and obstructions.
          </li>
        </ul>
      </>
    ),
    faults: [
      {
        type: "Driving fault",
        example:
          "Passes too close to a stationary vehicle when road conditions allowed the correct clearance",
      },
      {
        type: "Serious fault",
        example:
          "Narrowly avoids a collision with a stationary vehicle when road conditions enable the correct and safe course to be taken",
      },
      {
        type: "Dangerous fault",
        example:
          "Passes dangerously close to or striking a stationary vehicle, resulting in actual danger to the pupil, instructor, general public or property",
      },
    ],
  },
  //////////////////////////////////////
  {
    title: "Following distance",
    description: (
      <>
        The car must always be a safe distance between the pupil and other
        vehicles.
        <ul>
          <li>1. On wet or slippery roads it takes much longer to stop.</li>
          <li>
            2. When the car has stopped in traffic queues, sufficient space
            should be left to pull out if the vehicle in front has problems.
          </li>
        </ul>
      </>
    ),
    shortDec: (
      <>
        Reasons to record a fault under ‘following distance’ include:
        <ul>
          <li>1. getting too close to moving vehicles</li>
          <li>2. pulling up too close to vehicle ahead</li>
        </ul>
      </>
    ),
    faults: [
      {
        type: "Driving fault",
        example: "Not maintaining the full separation distance required",
      },
      {
        type: "Serious fault",
        example:
          "Driving too close to the vehicle ahead, where the separation distance left little margin for error",
      },
      {
        type: "Dangerous fault",
        example:
          "Any situation brought about by dangerously driving too close to the car in front that results in actual danger to the pupil, instructor, general public or property - the instructor must take action as necessary to increase separation distance and avoid the possibility of a collision",
      },
    ],
  },
  //////////////////////////////////////
  {
    title: "Use of speed",
    description: (
      <>
        Reasons to record a fault under ‘use of speed’ include:
        <ul>
          <li>
            1. driving too fast for prevailing road traffic and weather
            conditions
          </li>
          <li>2. breaking the speed limit</li>
        </ul>
      </>
    ),
    faults: [
      {
        type: "Driving fault",
        example:
          "Driving too fast for the road or traffic conditions for a short period",
      },
      {
        type: "Serious fault",
        example:
          "Driving too fast for the road or traffic conditions, exceeding speed limits",
      },
      {
        type: "Dangerous fault",
        example:
          "Any situation brought about by the inability to meet approaching traffic that results in actual danger to the pupil, instructor, general public or property",
      },
    ],
  },
  //////////////////////////////////////
  {
    title: "Progress",
    description: (
      <>
        On the form you need to record any faults made related to:
        <ul>
          <li>
            <a
              className={styles.Adi3Module19link}
              href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#appropriate-speed-marking">
              {" "}
              appropriate speed
            </a>
          </li>
          <li>
            <a
              className={styles.Adi3Module19link}
              href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#undue-hesitation-marking">
              {" "}
              undue hesitation
            </a>
          </li>
        </ul>
      </>
    ),
    shortDec: (
      <>
        The pupil should drive at a safe and appropriate speed for the
        prevailing road and traffic conditions. Speed limits are not target
        speeds and there will be occasions where pupils need to reduce their
        speed to deal safely with situations such as narrow residential streets
        or busy high streets - this should not be considered as a fault.
        <ul>
          Appropriate speed <br />
          Reasons to record a fault under ‘appropriate speed’ include:
          <li>
            1. not driving at an appropriate speed for the road and traffic
            conditions
          </li>
          <li>2. holding up following traffic</li>
        </ul>
      </>
    ),
    faults: [
      {
        type: "Driving fault",
        example:
          "Driving at 20mph in a 30mph area with no mitigating circumstances",
      },
      {
        type: "Serious fault",
        example:
          "Driving on a dual carriageway significantly below the permitted speed limit, affecting following road users",
      },
      {
        type: "Dangerous fault",
        example:
          "Driving at a speed significantly below the speed limit and creating a situation that encourages other road users to put themselves at risk",
      },
    ],
  },
  //////////////////////////////////////
  {
    title: "Undue hesitation",
    description: (
      <>
        Reasons to record a fault under ‘undue hesitation’ include:
        <ul>
          <li>
            1. stopping unnecessarily at junctions (except traffic light
            controlled junctions) and other hazards
          </li>
          <li>2. not proceeding when it is safe to do so at junctions</li>
        </ul>
      </>
    ),
    faults: [
      {
        type: "Driving fault",
        example:
          "Shows a lack of judgement by not proceeding when it is safe and correct to do so",
      },
      {
        type: "Serious fault",
        example:
          "Stopping and waiting when it is safe and reasonable to proceed",
      },
      {
        type: "Dangerous fault",
        example:
          "Undue hesitation is unlikely to become dangerous in itself unless it creates situations that encourage other road users to put themselves at risk",
      },
    ],
  },
  //////////////////////////////////////
  {
    title: "Response to signs/signals",
    description: (
      <>
        On the form you need to record any faults made related to:
        <ul>
          <li>
            <a
              className={styles.Adi3Module19link}
              href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#traffic-signs-marking">
              {" "}
              traffic signs
            </a>
          </li>
          <li>
            <a
              className={styles.Adi3Module19link}
              href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#road-markings-marking">
              {" "}
              road markings
            </a>
          </li>
          <li>
            <a
              className={styles.Adi3Module19link}
              href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#traffic-lights-marking">
              {" "}
              traffic lights
            </a>
          </li>
          <li>
            <a
              className={styles.Adi3Module19link}
              href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#traffic-controllers-marking">
              {" "}
              traffic controllers
            </a>
          </li>
          <li>
            <a
              className={styles.Adi3Module19link}
              href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#other-road-users-marking">
              {" "}
              other road users
            </a>
          </li>
          The pupil should:
          <li>
            1. be able to understand and be able to react to all traffic signs
            and road markings
          </li>
          <li>
            2. act correctly at traffic lights, checking that the road is clear
            before proceeding when the green light shows
          </li>
          <li>
            3. obey all signals given by police officers, traffic wardens and
            school crossing patrols
          </li>
          <li>
            4. display the awareness to be able to react to signals given by
            other road users, including people in charge of animals, and be
            ready to act accordingly
          </li>
        </ul>
      </>
    ),
    shortDec: (
      <>
        Traffic signs <br />
        Reasons to record a fault under ‘traffic signs’ include:
        <ul>
          <li>1. going to the wrong side of a keep left sign</li>
          <li>2. not complying with a stop sign</li>
          <li>3. not complying with a no entry sign</li>
          <li>
            4. driving in a bus lane when times on the sign prohibit its use
          </li>
          <li>5. not complying with mandatory signs</li>
        </ul>
      </>
    ),

    faults: [
      {
        type: "Driving fault",
        example:
          "Late reaction to a clearly visible sign that shows a lower speed limit change",
      },
      {
        type: "Serious fault",
        example:
          "Attempting to continue into a road with a clearly visible no entry sign",
      },
      {
        type: "Dangerous fault",
        example:
          "A situation that requires the instructor to take action in order to prevent actual danger",
      },
    ],
  },
  //////////////////////////////////////
  {
    title: "Road markings",
    description: (
      <>
        Reasons to record a fault under ‘road markings’ include:
        <ul>
          <li>1. crossing the solid white centre lines unnecessarily</li>
          <li>2. not conforming to directional arrows</li>
          <li>
            3. stopping in a yellow box junction when the exit is not clear
          </li>
        </ul>
      </>
    ),

    faults: [
      {
        type: "Driving fault",
        example:
          "Straddling lanes with separate clear visible painted directional arrows in individual lanes on approach to a junction",
      },
      {
        type: "Serious fault",
        example:
          "Entering and stopping in a clearly marked yellow box junction when going ahead at a junction",
      },
      {
        type: "Dangerous fault",
        example:
          "A situation that has caused actual danger to other road users",
      },
    ],
  },
  //////////////////////////////////////
  {
    title: "Traffic lights",
    description: (
      <>
        Reasons to record a fault under ‘traffic lights include:
        <ul>
          <li>1. waiting at a green filter light when safe to proceed</li>
          <li>
            2. waiting to turn right in a junction, when the red repeater light
            is on the opposite side and it is safe to proceed
          </li>
          <li>3. not conforming to a red light</li>
          <li>4. making a late reaction to the amber traffic light</li>
          <li>5. remaining at the stop line when safe to move forwards</li>
          <li>
            6. stopping beyond the solid white line going into an area
            designated for cyclists
          </li>
        </ul>
      </>
    ),

    faults: [
      {
        type: "Driving fault",
        example:
          "Late reaction to an amber traffic light, with no effect to safety",
      },
      {
        type: "Serious fault",
        example:
          "Failing to comply correctly and promptly with an appropriate traffic light or breaching a legal requirement",
      },
      {
        type: "Dangerous fault",
        example:
          "A breach of a legal requirement that results in actual danger to the pupil, instructor, general public or property - the instructor may have to take action to avoid a legal requirement being breached",
      },
    ],
  },
  //////////////////////////////////////
  {
    title: "Traffic controllers",
    description: (
      <>
        Record a fault under ‘traffic controllers’ if the pupil fails to respond
        to:
        <ul>
          <li>1. police</li>
          <li>2. traffic warden</li>
          <li>3. traffic warden</li>
          <li>4. school crossing patrol</li>
          <li>5. other persons directing traffic</li>
        </ul>
      </>
    ),

    faults: [
      {
        type: "Driving fault",
        example:
          "A late reaction to a traffic controller holding a stop sign at temporary road works",
      },
      {
        type: "Serious fault",
        example:
          "No reaction to a school crossing controller waiting to step into the road",
      },
      {
        type: "Dangerous fault",
        example:
          "Driving towards a school crossing patrol resulting in the instructor having to take action to prevent actual danger to the public",
      },
    ],
  },

  // ///////////////////////////
  {
    title: "Other road users",
    description: (
      <>
        Record a fault under ‘other road users’ if the pupil does not react
        appropriately to the signals given by other road users.
      </>
    ),

    faults: [
      {
        type: "Driving fault",
        example:
          "Does not continue ahead safely past a car that is signalling and waiting to turn right from a major to minor road",
      },
      {
        type: "Serious fault",
        example:
          "Waiting behind a bus that has clearly signalled and has stopped, inconveniencing following traffic that could overtake",
      },
      {
        type: "Dangerous fault",
        example:
          "A situation that has caused the instructor to take action to prevent actual danger taking place",
      },
    ],
  },
  //////////////////////////////////////
  {
    title: "Examiner took action (ETA)",
    description: (
      <>
        Record a fault under ‘ETA’ if at any point your pupil’s driving becomes
        dangerous and you have to take action to correct it. This action may be:
        <ul>
          <li>1. physical</li>
          <li>2. verbal</li>

          <h3>Eco (fuel-efficient driving)</h3>
          <li>On the form you can record any faults made related to:</li>

          <li>
            <a
              className={styles.Adi3Module19link}
              href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#appropriate-speed-marking">
              {" "}
              control
            </a>
          </li>
          <li>
            <a
              className={styles.Adi3Module19link}
              href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#undue-hesitation-marking">
              {" "}
              planning
            </a>
          </li>
        </ul>
      </>
    ),
    shortDec: (
      <>
        The pupil should drive in an eco friendly manner to reduce pollution and
        save fuel. They should:
        <ul>
          <li>1. plan well ahead and choose appropriate gears</li>
          <li>
            2. avoid heavy braking and over revving of the engine, particularly
            when stopped or moving off
          </li>
          <li>
            3. consider stopping the engine when stopped for long periods of
            time
          </li>
          <li>
            4. Although eco-safe driving is assessed during the driving test, it
            does not affect the overall result. You use this when you give
            feedback at the end of the test.
          </li>
        </ul>
      </>
    ),
  },

  // /////////////////////////////////
  {
    title: "Give feedback at the end of the test",

    description: (
      <>
        The pupil will pass the test if they make:
        <ul>
          <li>1. no more than 15 driving faults (sometimes called ‘minors’)</li>
          <li>2. no serious or dangerous faults (sometimes called ‘majors’)</li>
        </ul>
      </>
    ),
    shortDec: (
      <>
        When giving the feedback at the end of the test, you could either:
        <ul>
          <li>1. give the feedback as though you’re the examiner</li>
          <li>2. ask their pupil how they think they did</li>
        </ul>
      </>
    ),
  },

  ///////////////////////////////////

  {
    title: "Giving feedback as though you’re the examiner",
    description: (
      <>
        You could give the result and feedback while still roleplaying as the
        examiner. This will give the pupil a feel for how much feedback the
        examiner will give.
        <ul>
          <li>
            Offer the pupil a brief explanation of the faults that you have
            recorded on the marking sheet. Explain all serious and dangerous
            faults, and a selection of repeated driving faults.
          </li>
          <li>
            If the pupil fails the test due to making 15 or more driving faults,
            you’ll need to explain all of the faults.
          </li>
        </ul>
      </>
    ),
    shortDec: (
      <>
        <h2>End the mock test and give feedback</h2>
        When the mock test is finished, you can stop roleplaying as the examiner
        and:
        <ul>
          <li>
            1. give more feedback about their driving during the mock test
          </li>

          <li>2. ask coaching questions about any faults</li>
          <li>
            3. answer any questions they have about the test and how they drove
          </li>
          <li>
            4. use the results of the mock test to plan their future lessons
          </li>
        </ul>
      </>
    ),
  },
  //////////////////////////////////////

  //////////////////////////////////////
];

const colors = ["#4db6ac", "#7986cb", "#ba68c8", "#ffb74d", "#81c784"];

const Adi3Module20 = () => {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Awareness"; // First part before "Driving"

    // Split both parts into individual characters and map them to <span>
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

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={styles.AdiModuleOnecontainer}>
      <section
        className={styles.AdiModuleOneheader}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}>
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>
      <div className={styles.Adi3Module19container}>
        <div className={styles.Adi3Module19header}>
          {faultData?.map((section, idx) => (
            <button
              key={idx}
              className={styles.Adi3Module19navButton}
              onClick={() => handleClick(`section-${idx}`)}>
              {section.title}
            </button>
          ))}
        </div>

        {faultData?.map((section, idx) => (
          <motion.div
            id={`section-${idx}`}
            key={idx}
            className={styles.Adi3Module19card}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}>
            <h2 className={styles.Adi3Module19title}>{section.title}</h2>
            <p className={styles.Adi3Module19description}>
              {section.description}
            </p>
            <p className={styles.Adi3Module19description}>{section.shortDec}</p>
            <div className={styles.tableWrapper3}>
              <table className={styles.Adi3Module19table}>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  {section?.faults?.map((fault, i) => (
                    <tr
                      key={i}
                      className={styles.Adi3Module19row}
                      style={{
                        backgroundColor: colors[i % colors.length],
                      }}>
                      <td className={styles.Adi3Module19faultType}>
                        {fault.type}
                      </td>
                      <td className={styles.Adi3Module19faultExample}>
                        {fault.example}
                      </td>
                    </tr>
                  ))}
                  {section?.links2?.map((link, i) => (
                    <tr
                      key={`link-${i}`}
                      className={styles.Adi3Module19row}
                      style={{ backgroundColor: "#689f38" }}>
                      <td className={styles.Adi3Module19faultType}>
                        {link.title}
                      </td>
                      <td className={styles.Adi3Module19faultExample}>
                        <a
                          href={link.link}
                          className={styles.Adi3Module19link}
                          target="_blank"
                          rel="noopener noreferrer">
                          {link.title}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Adi3Module20;

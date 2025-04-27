import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

import { motion } from "framer-motion";

export default function Adi3ModuleEight() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Route Planning"; // First part before "Driving"

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
  //   //////////////////////////////////////////////////////////////////////
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;

  //   //////////////////////////////////////////////////////////////
  const [text, setText] = useState("");
  const [savedTexts, setSavedTexts] = useState([]); // Store multiple saved texts
  const [isEditing, setIsEditing] = useState(false); // Track if the user is editing
  const [editIndex, setEditIndex] = useState(null);
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const saveText = () => {
    if (text.trim()) {
      // If editing an existing item, replace it
      if (isEditing) {
        const updatedTexts = [...savedTexts];
        updatedTexts[editIndex] = text;
        setSavedTexts(updatedTexts);
        setIsEditing(false); // Reset editing flag
        setEditIndex(null);
      } else {
        setSavedTexts([...savedTexts, text]);
      }
      localStorage.setItem(
        `notepadTexts1Part3page8_${userId}`,
        JSON.stringify([...savedTexts, text])
      );

      setText("");
    }
  };

  const editText = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setText(savedTexts[index]); // Set the text to be edited
    if (textareaRef.current) {
      textareaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Delete the selected text
  const deleteText = (index) => {
    const updatedTexts = savedTexts.filter((_, i) => i !== index);
    setSavedTexts(updatedTexts);
    localStorage.setItem(
      `notepadTexts1Part3page8_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTexts1Part3page8_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);
  //   ///////////////////////////////////////////////////////////////////

  return (
    <div className={styles.AdiModuleOnecontainer}>
      <section className={styles.AdiModuleOneheader}>
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>

      {/* //////////////////////////////////////// */}
      <div style={{ maxWidth: "1640px", margin: "1rem auto" }}>
        <div className={styles.adisix2ndintro}>
          <p>
            Effective route planning is a crucial part of delivering successful
            driving lessons. When you first start out on the roads with a
            student, you’ll likely have learners from various areas, and it’s
            unlikely you’ll know every road, shortcut, or hazard in their local
            neighbourhood. That’s where proper route planning becomes essential.
          </p>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////// */}
      <section className={styles.AdiModuleOneTextArea}>
        {/* ////////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            What type of roads do you think you would be looking for a beginner?
          </label>
          <textarea
            ref={textareaRef}
            value={text}
            onChange={handleChange}
            rows="5"
            cols="30"
            placeholder="Write your thoughts here..."
          />
          <br />
          <button onClick={saveText}>{isEditing ? "Update" : "Save"}</button>

          <div className={styles.thoughtsListArea}>
            {savedTexts.length === 0 ? (
              <p>No saved thoughts.</p>
            ) : (
              <ul>
                {savedTexts.map((savedText, index) => (
                  <li key={index}>
                    <p>{savedText}</p>
                    <span>
                      <FaEdit
                        onClick={() => editText(index)}
                        id={styles.editListIcon}
                      />

                      <IoTrashBin
                        onClick={() => deleteText(index)}
                        id={styles.binListIcon}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
      <div style={{ maxWidth: "1640px", margin: "1rem auto" }}>
        <div className={styles.adisix2ndintro}>
          <p>
            Before the first lesson, you should have already spoken to your
            learner to discuss their previous driving experience, confidence
            level, and personal goals. Now, it's time to plan the best route to
            maximise their learning experience. Your route will change based on
            their skill level, experience, and the specific goals of the lesson.
          </p>
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////////////////////////? */}
      <div className={styles.adi3eight1stcontainer}>
        <h1 className={styles.adi3eight1stmainHeading}>
          Planning for Driving Lessons
        </h1>

        <section className={styles.adi3eight1stsection}>
          <h2 className={styles.adi3eight1stheading}>
            Planning for a Beginner with No Experience
          </h2>
          <p>
            If your learner is a complete beginner, choosing the right area is
            vital. The location should be:{" "}
          </p>
          <ul className={styles.adi3eight1stchecklist}>
            <li>
              ✅ No more than 10 minutes from their address (since you’ll need
              to drive them there)
            </li>
            <li>
              ✅ Quiet with minimal traffic and hazards (avoid busy junctions,
              schools, or heavily parked streets)
            </li>
            <li>
              ✅ Safe for practicing basic car control, such as moving off,
              stopping, and turning
            </li>
          </ul>

          <div className={styles.adi3eight1stsubSection}>
            <h3>Getting Started</h3>
            <p>
              <strong>The Drive to the Training Area</strong>
            </p>
            <p>
              On the way to the practice location, use this time to start
              questioning your learner about their existing knowledge. Ask them
              about the cockpit drill, controls, and basic road rules—this keeps
              the lesson productive from the start.
            </p>
          </div>

          <div className={styles.adi3eight1stsubSection}>
            <h3>Finding a Suitable Area</h3>
            <p>
              Use Google Maps to scout out quiet residential streets or
              industrial estates with minimal traffic. If possible, visit the
              area yourself beforehand to assess its suitability.
            </p>
          </div>

          <div className={styles.adi3eight1stsubSection}>
            <h3>Lesson Focus</h3>
            <p>
              The first lesson should include fundamental skills such as moving
              off safely, stopping, steering control, and making simple left and
              right turns.
            </p>
            <p>
              At the end of the lesson, review their progress and set goals for
              the next session. This allows you to plan the next route in
              advance, ensuring the lesson remains structured and progressive.
            </p>
          </div>
        </section>

        <section className={styles.adi3eight1stsection}>
          <h2 className={styles.adi3eight1stheading}>
            Planning for a Learner with Experience
          </h2>
          <p>
            If the student has previous experience, your route planning will
            depend on:
          </p>
          <ul className={styles.adi3eight1stchecklist}>
            <li>✅ How much driving they have done</li>
            <li>✅ What their main challenges are</li>
            <li>✅ Whether they have taken (or failed) a test before</li>
          </ul>

          <div className={styles.adi3eight1stsubSection}>
            <h3>Getting Started</h3>
            <p>
              Begin by driving them to a moderately quiet area and allow them to
              demonstrate their current ability. Use open questions to assess
              their knowledge and confidence as they drive.
            </p>
            <p>
              Once you’re comfortable with their competency, you can gradually
              introduce more complex roads while ensuring they remain safe and
              in control.
            </p>
          </div>

          <div className={styles.adi3eight1stsubSection}>
            <h3>Matching the Route to Their Goals</h3>
            <p>
              Each lesson should be structured around the learner’s specific
              goals. For example:
            </p>
            <ul className={styles.adi3eight1stchecklist}>
              <li>
                {" "}
                ✅ <strong>Roundabouts:</strong> Start with small
                mini-roundabouts and progress to multi-lane roundabouts as they
                gain confidence.{" "}
              </li>
              <li>
                ✅ <strong>Pedestrian Crossings:</strong> Choose a route with a
                variety of pedestrian crossings, such as zebra crossings,
                pelican crossings, and puffin crossings, ensuring they get
                well-rounded exposure
              </li>
              <li>
                ✅ <strong>Dual Carriageways:</strong> If appropriate, include a
                section with dual carriageways to practice lane discipline and
                merging.
              </li>
            </ul>
          </div>

          <div className={styles.adi3eight1stsubSection}>
            <h3>Adapting Your Route in Real Time</h3>
            <p>
              No lesson will go exactly as planned. Traffic conditions,
              roadworks, or unexpected challenges may require you to adjust your
              route on the fly. This is why having a good knowledge of the area
              is essential.
            </p>
            <ul className={styles.adi3eight1stchecklist}>
              <li>
                ✅Always have backup routes in case your planned route is
                unsuitable on the day.
              </li>
              <li>
                {" "}
                ✅ Be aware of common hazards in the area at different times of
                the day (e.g., school traffic, rush hour congestion).
              </li>
              <li>
                ✅ If a student struggles with a perticular skill, adapt the
                route to reinforce that skill before moving on.
              </li>
            </ul>
          </div>
        </section>

        <div className={styles.adi3eight1stfinalNote}>
          <p>
            A well-planned route ensures that every lesson is structured,
            efficient, and maximizes the student’s learning experience. Whether
            you’re working with a beginner or an experienced learner, tailoring
            the route to their needs and skill level is key. Stay flexible,
            observe their progress, and always plan ahead to make the most of
            your lesson time.
          </p>
        </div>
      </div>

      {/* //////////////////////////////////////////////////////////////// */}
    </div>
  );
}

import React from "react";
import styles from "./AdiModuleOne.module.css";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { Link } from "react-router-dom";
import coastmethods from "../../../../../assets/part3videos/coastmethod.mp4"

export default function AdiModuleFour() {
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);

  const toggleGlossary = () => {
    setIsVisible((prevState) => !prevState); // Toggle visibility
  };
  const toggleGlossary2 = () => {
    setIsVisible2((prevState) => !prevState); // Toggle visibility
  };
  const toggleGlossary3 = () => {
    setIsVisible3((prevState) => !prevState); // Toggle visibility
  };
  const toggleGlossary4 = () => {
    setIsVisible4((prevState) => !prevState); // Toggle visibility
  };
  const toggleGlossary5 = () => {
    setIsVisible5((prevState) => !prevState); // Toggle visibility
  };

  // /////////////////////////////////////////////////////////////
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
        `notepadTextspage4_${userId}`,
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
      `notepadTextspage4_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTextspage4_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  // //////////////////////////////////////////////////////////
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "The COAST Method in Advanced Driving"; // First part before "Driving"

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

  return (
    <>
      <div className={styles.AdiModuleOnecontainer}>
        <section className={styles.AdiModuleOneheader}>
          <div className="opicity"></div>
          <section className={styles.AdiModuleOneheading}>
            {" "}
            <h1 ref={textRef}>{splitText()}</h1>
          </section>
        </section>
        <div className={styles.videoContainer}>
          <h2 className={styles.videotitle}>Watch Our Video</h2>
          <video className={styles.videodesign} controls muted loop>
            <source src={coastmethods} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={styles.AdiModuleContentBox}>
          <div className={styles.AdiModuleContentParaBox}>
            <p>
              Now you have completed your first initial assessment and you have
              base knowledge of what the examiner is going to be looking for in
              the exam. Lets look at the COAST model.
              <br />
              The COAST method is a foundational approach in advanced driving
              that focuses on proactive, safe, and efficient driving. COAST
              stands for Concentration, Observation, Anticipation, Space, and
              Time. This method encourages drivers to stay ahead of potential
              hazards, reduce risks, and drive more smoothly.
              <br></br>
              For advanced drivers, such as those preparing for the ADI Part 2
              exam, mastering the COAST method demonstrates professionalism and
              competence on the road.
            </p>
          </div>
        </div>

        <section className={styles.instructorContainer}>
          <div className={styles.AdiModuleContentBox}>
            <h2>🚗 C – Concentration: Stay Sharp, Stay Safe!</h2>{" "}
            <p style={{ color: "white" }}>
              Driving isn’t the time for multitasking. Your car, the road, and
              other drivers deserve your full attention. One quick glance at
              your phone or a daydream about dinner could mean missing a crucial
              hazard. Stay locked in!
            </p>
            <div className={styles.dropdownContainer}>
              {" "}
              <div className={styles.downArrowiconDiv}>
                <FaRegArrowAltCircleDown
                  onClick={toggleGlossary}
                  className={`${styles.downArrowicon} ${
                    isVisible ? styles.rotate : ""
                  }`}
                />
                <p>CLICK ME</p>
              </div>
              <div className={styles.AdiModuleContentParaBox121}>
                <div
                  className={`${styles.AdiModuleContentParaBox23} ${
                    isVisible ? styles.glossarycontainerOneshow : ""
                  }`}
                >
                  <p>
                    How to Stay Laser-Focused:
                    <br />✅ Put your phone on "Do Not Disturb"—that
                    notification can wait!
                  </p>
                  <p>
                    ✅ Try mindfulness techniques, like taking deep breaths at
                    red lights, to stay present.
                  </p>
                  <p>
                    ✅ If you're on a long drive, take regular breaks—your brain
                    needs rest too!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.AdiModuleContentBox}>
            <div className={styles.AdiModuleContentParaBox}>
              <p>
                🚦 Quick Challenge: Can you drive for 10 minutes without any
                distractions (no music changes, no taking your eyes off the
                road, no zoning out)? Give it a go!
              </p>
            </div>
            <h2>👀 O – Observation: Eyes Everywhere!</h2>
            <p style={{ color: "white" }}>
              Think of yourself as a detective scanning for clues. The more you
              see, the better you can react. Look far ahead, check your mirrors
              often, and always be aware of what's happening around you.
            </p>
            <div className={styles.dropdownContainer}>
              {" "}
              <div className={styles.downArrowiconDiv}>
                <FaRegArrowAltCircleDown
                  onClick={toggleGlossary2}
                  className={`${styles.downArrowicon} ${
                    isVisible2 ? styles.rotate : ""
                  }`}
                />
                <p>CLICK ME</p>
              </div>
              <div className={styles.AdiModuleContentParaBox122}>
                <div
                  className={`${styles.AdiModuleContentParaBox23} ${
                    isVisible2 ? styles.glossarycontainerOneshow : ""
                  }`}
                >
                  <p>
                    Your Observation Toolkit:
                    <br />✅ Mirrors, Mirrors, Mirrors! Before you brake,
                    accelerate, turn, or change lanes—check your mirrors
                  </p>
                  <p>
                    ✅ Look as far down the road as possible spotting a hazard
                    early gives you time to react.
                  </p>
                  <p>
                    ✅ Keep an eye on pedestrians, cyclists, and vehicles that
                    might do something unpredictable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.AdiModuleContentBox}>
            <div className={styles.AdiModuleContentParaBox}>
              <p>
                🕵 Quick Challenge:While driving, count how many times you check
                your mirrors in five minutes. The more, the better!
              </p>
            </div>
            <h2>🔮A – Anticipation: Predict & Prepare!</h2>
            <p style={{ color: "white" }}>
              Driving is like a game of chess—you need to think ahead. If a ball
              rolls into the street, **what happens next?** If a car ahead is
              slowing down, why? Being one step ahead helps you stay out of
              trouble.
            </p>
            <div className={styles.dropdownContainer}>
              {" "}
              <div className={styles.downArrowiconDiv}>
                <FaRegArrowAltCircleDown
                  onClick={toggleGlossary3}
                  className={`${styles.downArrowicon} ${
                    isVisible3 ? styles.rotate : ""
                  }`}
                />
                <p>CLICK ME</p>
              </div>
              <div className={styles.AdiModuleContentParaBox123}>
                <div
                  className={`${styles.AdiModuleContentParaBox23} ${
                    isVisible3 ? styles.glossarycontainerOneshow : ""
                  }`}
                >
                  <p>
                    🔹 How to Stay Ahead of the Game: <br /> ✅Ask yourself,
                    "What if?"– What if that cyclist suddenly swerves? What if
                    the car ahead slams its brakes?
                  </p>
                  <p>
                    ✅ Look for clues—brake lights, pedestrians near crosswalks,
                    or a car creeping forward at a junction.
                  </p>
                  <p>
                    ✅Adjust your speed and position to **stay in control** of
                    the situation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.AdiModuleContentBox}>
            <div className={styles.AdiModuleContentParaBox}>
              <p>
                🔮 Quick Challenge: On your next drive, try to predict what a
                driver or pedestrian will do before they do it. Were you right?
              </p>
            </div>
            <h2>↔️ S – Space: Keep Your Bubble!</h2>
            <p style={{ color: "white" }}>
              Ever had someone tailgate you? Annoying, right? Space is your
              safety net—it gives you time to react and avoid last-second panic
              stops.
            </p>

            <div className={styles.dropdownContainer}>
              {" "}
              <div className={styles.downArrowiconDiv}>
                <FaRegArrowAltCircleDown
                  onClick={toggleGlossary4}
                  className={`${styles.downArrowicon} ${
                    isVisible4 ? styles.rotate : ""
                  }`}
                />
                <p>CLICK ME</p>
              </div>
              <div className={styles.AdiModuleContentParaBox124}>
                <div
                  className={`${styles.AdiModuleContentParaBox23} ${
                    isVisible4 ? styles.glossarycontainerOneshow : ""
                  }`}
                >
                  <p>
                    🔹 Space-Saving Strategies: <br /> ✅ Follow the two-second
                    rule—pick a stationary object, and when the car ahead passes
                    it, you should take at least two seconds to reach the same
                    spot. (In bad weather, make it four seconds!)
                  </p>
                  <p>
                    ✅ Leave extra room when passing parked cars—someone might
                    open a door unexpectedly.
                  </p>
                  <p>
                    ✅ Stay out of blind spots—if you can’t see a truck’s
                    mirrors, they can’t see you!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.AdiModuleContentBox}>
            <div className={styles.AdiModuleContentParaBox}>
              <p>
                🚗 Quick Challenge: Check your following distance during your
                next drive —are you two seconds behind the car in front? If not,
                ease off the gas!
              </p>
            </div>
            <h2>⏳ T – Time: No Need to Rush!</h2>
            <p style={{ color: "white" }}>
              Speeding and last-minute lane changes are recipes for stress and
              mistakes. Give yourself plenty of time to react, and you’ll be a
              safer, calmer driver.
            </p>

            <div className={styles.dropdownContainer}>
              {" "}
              <div className={styles.downArrowiconDiv}>
                <FaRegArrowAltCircleDown
                  onClick={toggleGlossary5}
                  className={`${styles.downArrowicon} ${
                    isVisible5 ? styles.rotate : ""
                  }`}
                />
                <p>CLICK ME</p>
              </div>
              <div className={styles.AdiModuleContentParaBox125}>
                <div
                  className={`${styles.AdiModuleContentParaBox23} ${
                    isVisible5 ? styles.glossarycontainerOneshow : ""
                  }`}
                >
                  <p>
                    🔹 Time Management on the Road:
                    <br />✅ Leave earlier—rushing leads to risky decisions.
                  </p>
                  <p>
                    ✅ Slow down in complex driving situations (like busy
                    intersections or unfamiliar roads).
                  </p>
                  <p>
                    ✅ Expect delays—traffic, construction, and slow drivers
                    happen! A relaxed mindset keeps you in control.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.AdiModuleContentBox}>
            <div className={styles.AdiModuleContentParaBox}>
              <p>
                ⏳ Quick Challenge: Next time you're in traffic, resist the urge
                to weave between lanes. Instead, stay in one and see if you
                actually reach your destination any faster (spoiler: you
                probably won’t!).
              </p>
            </div>
          </div>
        </section>

        <div className={styles.AdiModuleOneTextBox}>
          <label>Write your answer below</label>
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

        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h1>Start Quiz</h1>
            <h3>15 Questions</h3>
            <p></p>
            <Link to="/takequizCatName/The-COAST-Method-in-Advanced-Driving">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}

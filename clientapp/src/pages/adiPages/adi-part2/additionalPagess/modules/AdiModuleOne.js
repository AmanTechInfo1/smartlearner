import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./AdiModuleOne.module.css";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdiModuleOne() {
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;

  const [text, setText] = useState("");
  const [savedTexts, setSavedTexts] = useState([]); // Store multiple saved texts
  const [isEditing, setIsEditing] = useState(false); // Track if the user is editing
  const [editIndex, setEditIndex] = useState(null);
  const textareaRef = useRef(null);

  // ///////////////////////////////////////////////
  const [text2, setText2] = useState("");
  const [savedTexts2, setSavedTexts2] = useState([]); // Store multiple saved texts
  const [isEditing2, setIsEditing2] = useState(false); // Track if the user is editing
  const [editIndex2, setEditIndex2] = useState(null);
  const textareaRef2 = useRef(null);

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
        `notepadTexts_${userId}`,
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
      `notepadTexts_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTexts_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  // //////////////////////////////////////////////////////////////////
  const handleChange2 = (e) => {
    setText2(e.target.value);
  };

  const saveText2 = () => {
    if (text2.trim()) {
      // If editing an existing item, replace it
      if (isEditing2) {
        const updatedTexts2 = [...savedTexts2];
        updatedTexts2[editIndex2] = text2;
        setSavedTexts2(updatedTexts2);
        setIsEditing2(false); // Reset editing flag
        setEditIndex2(null);
      } else {
        setSavedTexts2([...savedTexts2, text2]);
      }
      localStorage.setItem(
        `notepadTexts2_${userId}`,
        JSON.stringify([...savedTexts2, text2])
      );

      setText2("");
    }
  };

  const editText2 = (index) => {
    setIsEditing2(true);
    setEditIndex2(index);
    setText2(savedTexts2[index]); // Set the text to be edited
    if (textareaRef2.current) {
      textareaRef2.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Delete the selected text
  const deleteText2 = (index) => {
    const updatedTexts2 = savedTexts2.filter((_, i) => i !== index);
    setSavedTexts2(updatedTexts2);
    localStorage.setItem(
      `notepadTexts2_${userId}`,
      JSON.stringify(updatedTexts2)
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(`notepadTexts2_${userId}`);
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  // ////////////////////////

  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Human Checks Before Setting Off to Drive"; // First part before "Driving"

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
      {" "}
      <div className={styles.AdiModuleOnecontainer}>
        <section className={styles.AdiModuleOneheader}>
          <div className="opicity"></div>
          <section className={styles.AdiModuleOneheading}>
            {" "}
            <h1 ref={textRef}>{splitText()}</h1>
          </section>
        </section>

        <section className={styles.AdiModuleOneTextArea}>
          <h2>
            What do you think we mean by human readiness to drive and can you
            give some examples ? Think back to your part 1
          </h2>
          {/* ////////////////////////////////////////////////////////////// */}
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
        </section>
        {/* ///////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleContentBox}>
          <h2>Human Readiness to Drive</h2>
          <div className={styles.AdiModuleContentParaBox}>
            <p>
              Human readiness to drive refers to the factors related to you that
              can influence your ability to drive safely. These factors can be
              grouped into three key areas: physical well-being, mental
              well-being, and emotional well-being. Ensuring you are fully
              prepared in all these areas before getting behind the wheel is
              crucial for safe driving.
            </p>
          </div>
          {/* ////////////////////////////////////////////////////////////// */}
          <div className={styles.flipContainer}>
            <div className={styles.flipbox}>
              <div className={styles.flipboxfront}>
                {/* <FaHandPointRight  /> */}
                <h3 id={styles.fafapointing}>Click To Reveal The Answer</h3>
              </div>

              <div className={styles.flipboxback}>
                <ul>
                  <li>
                    <strong>Physical Well-Being</strong> Focuses on your body's
                    condition. Are you well-rested, healthy, and physically
                    capable of driving? Lack of sleep, illness, or the effects
                    of medication can impair your reaction time and focus,
                    increasing the risk of an accident.
                  </li>
                  <li>
                    <strong>Mental Well-Being</strong> Relates to your level of
                    focus, awareness, and preparedness. Do you know your route,
                    traffic conditions, and potential hazards? Feeling mentally
                    sharp and free from distractions helps you stay attentive
                    and make quick, safe decisions.
                  </li>
                  <li>
                    <strong>Emotional Well-Being</strong> Considers how your
                    feelings and emotions affect your driving. Strong emotions
                    like stress, anger, or sadness can cloud judgment and make
                    you more prone to impulsive or reckless behaviour on the
                    road.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////////////// */}

        <section className={styles.instructorContainer}>
          <div className={styles.innerInstructorContainer}>
            <h2>Below are some key considerations for each category:</h2>

            <div className={styles.detailsContainer}>
              {/* <DrivingInstructorUI /> */}
              <div className={styles.flipContainer2}>
                <div className={styles.flipbox2}>
                  <div
                    className={styles.flipboxfront2}
                    id={styles.flipboxfront23}
                  >
                    <div className="opicity"></div>
                    <h2>CLICK TO FLIP</h2>
                  </div>
                  <div
                    className={styles.trainingDetails}
                    id={styles.trainingDetails1}
                  >
                    <h3>Physical Well-Being</h3>
                    <hr />
                    <p>
                      Have you had enough sleep? Fatigue can slow reaction times
                      and increase the risk of accidents.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.flipContainer2}>
                <div className={styles.flipbox2}>
                  <div
                    className={styles.flipboxfront2}
                    id={styles.flipboxfront24}
                  >
                    <div className="opicity"></div>
                    <h2>CLICK TO FLIP</h2>
                  </div>
                  <div
                    className={styles.trainingDetails}
                    id={styles.trainingDetails2}
                  >
                    <h3>Mental Well-Being</h3>
                    <hr />
                    <p>
                      Do you know your route and expected traffic conditions?
                      Planning ahead reduces stress and distractions.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.flipContainer2}>
                <div className={styles.flipbox2}>
                  <div
                    className={styles.flipboxfront2}
                    id={styles.flipboxfront25}
                  >
                    <div className="opicity"></div>
                    <h2>CLICK TO FLIP</h2>
                  </div>

                  <div
                    className={styles.trainingDetails}
                    id={styles.trainingDetails3}
                  >
                    <h3>Emotional Well-Being</h3>
                    <hr />
                    <p>
                      Are you feeling overwhelmed, anxious, or angry? Strong
                      emotions can impair decision- making and focus.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.flipContainer2}>
                <div className={styles.flipbox2}>
                  <div
                    className={styles.flipboxfront2}
                    id={styles.flipboxfront26}
                  >
                    <div className="opicity"></div>
                    <h2>CLICK TO FLIP</h2>{" "}
                  </div>
                  <div className={styles.trainingDetails}>
                    <h3>Physical Well-Being</h3>
                    <hr />
                    <p>
                      Are you feeling unwell or taking medication that may
                      affect your driving? Some medications cause dizziness or
                      drowsiness.
                      <br />
                      Have you eaten and stayed hydrated? Low energy and
                      dehydration can make you feel weak or sluggish.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.flipContainer2}>
                <div className={styles.flipbox2}>
                  <div
                    className={styles.flipboxfront2}
                    id={styles.flipboxfront27}
                  >
                    <div className="opicity"></div>
                    <h2>CLICK TO FLIP</h2>
                  </div>
                  <div
                    className={styles.trainingDetails}
                    id={styles.trainingDetails5}
                  >
                    <h3>Mental Well-Being</h3>
                    <hr />
                    <p>
                      Are you able to stay focused and alert? Avoid driving if
                      you feel mentally exhausted or easily distracted.
                      <br />
                      Are you in the right mindset to drive safely? If you feel
                      rushed or stressed, take a moment to regain composure.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.flipContainer2}>
                <div className={styles.flipbox2}>
                  <div
                    className={styles.flipboxfront2}
                    id={styles.flipboxfront28}
                  >
                    <div className="opicity"></div>
                    <h2>CLICK TO FLIP</h2>
                  </div>
                  <div
                    className={styles.trainingDetails}
                    id={styles.trainingDetails6}
                  >
                    <h3>Emotional Well-Being</h3>
                    <hr />
                    <p>
                      Have you recently experienced something upsetting?
                      Emotional distress can take your attention away from the
                      road.
                      <br />
                      Are you calm and patient? Impulsive reactions can lead to
                      risky driving behaviour.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            By taking a moment to assess your readiness in these three areas,
            you can help ensure a safer, more responsible driving experience for
            yourself and others on the road.
          </label>
          <textarea
            ref={textareaRef2}
            value={text2}
            onChange={handleChange2}
            rows="5"
            cols="30"
            placeholder="Write your thoughts here..."
          />
          <br />
          <button onClick={saveText2}>{isEditing2 ? "Update" : "Save"}</button>

          <div className={styles.thoughtsListArea}>
            {savedTexts2.length === 0 ? (
              <p>No saved thoughts.</p>
            ) : (
              <ul>
                {savedTexts2.map((savedText2, index) => (
                  <li key={index}>
                    <p>{savedText2}</p>
                    <span>
                      <FaEdit
                        onClick={() => editText2(index)}
                        id={styles.editListIcon}
                      />

                      <IoTrashBin
                        onClick={() => deleteText2(index)}
                        id={styles.binListIcon}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* ////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////// */}
        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h1>Start Quiz</h1>
            <h3>15 Questions</h3>
            <p>
              Here’s a quick summary quiz to test your understanding of of Part
              2: Human checks before setting off
            </p>
            <Link to="/takequizCatName/Human-Checks">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

import { motion } from "framer-motion";
import movingOff from "../../../../assets/images/moving-off.png";
import forwordbaypark from "../../../../assets/images/forwordbaypark.png";
import reversebaypark from "../../../../assets/images/reversebaypark.png";
import parallelpark from "../../../../assets/images/parallelpark.png";
import parkonright from "../../../../assets/images/parkonright.png";
import emergencystop from "../../../../assets/images/emergencystop.png";
import vehicleClearance from "../../../../assets/images/vehicleclearence.png";
import majortominorright from "../../../../assets/images/majortoright.png";
import majortominorleft from "../../../../assets/images/majortoleft.png";
import majortomajorright from "../../../../assets/images/majortomajorright.png";
import majortomajorleft from "../../../../assets/images/majortomajorleft.png";
import Crossroads from "../../../../assets/images/crossroads-p3.png";
import pedestrianCrossing from "../../../../assets/images/pedestrian.png";
import meetingOncoming from "../../../../assets/images/Meeting-oncoming-traffic.png";
import planningAnticipation from "../../../../assets/images/Anticipation-and-planning.png";
import MockTests from "../../../../assets/images/Mock-testsp3.png";
import { Link } from "react-router-dom";
import backgroundImage from "../../../../assets/images/lessonStructure.jpg";

export default function Adi3Modulefive() {
  const skills = [
    { title: "Moving off Stopping", img: movingOff },
    { title: "Forward Bay Park", img: forwordbaypark },
    { title: "Reverse Bay park", img: reversebaypark },
    { title: "Parallel park", img: parallelpark },
    { title: "Park on the right", img: parkonright },
    { title: "Emergency stop", img: emergencystop },
    { title: "Vehicle clearance", img: vehicleClearance },
    { title: "Major to minor right turns", img: majortominorright },
    { title: "Major to minor left turns", img: majortominorleft },
    { title: "Major to major right turns", img: majortomajorright },
    { title: "Major to major left turns", img: majortomajorleft },
    { title: "Crossroads", img: Crossroads },
    { title: "Pedestrian Crossings", img: pedestrianCrossing },
    { title: "Meeting oncoming traffic", img: meetingOncoming },
    { title: "Anticipation and planning", img: planningAnticipation },
    { title: "Mock Tests", img: MockTests },
  ];

  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;

  //   //////////////////////////////////////////////////////////////
  const [text, setText] = useState("");
  const [savedTexts, setSavedTexts] = useState([]); // Store multiple saved texts
  const [isEditing, setIsEditing] = useState(false); // Track if the user is editing
  const [editIndex, setEditIndex] = useState(null);
  const textareaRef = useRef(null);

  const [typedText, setTypedText] = useState("");
  const [colorIndex, setColorIndex] = useState(0);

  const fullText = "Write your thoughts here...";
  const colors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF"];

  useEffect(() => {
    let charIndex = 0;
    let currentText = "";
    let isClearing = false;
    const interval = setInterval(() => {
      if (!isClearing) {
        currentText += fullText[charIndex];
        setTypedText(currentText);
        charIndex++;
        if (charIndex >= fullText.length) {
          isClearing = true;
          setTimeout(() => {
            currentText = "";
            setTypedText("");
            charIndex = 0;
            isClearing = false;
            setColorIndex((prev) => (prev + 1) % colors.length);
          }, 1000); // pause after full text
        }
      }
    }, 120);

    return () => clearInterval(interval);
  }, [colorIndex]);

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
        `notepadTexts1Part3page5_${userId}`,
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
      `notepadTexts1Part3page5_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTexts1Part3page5_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  // ///////////////////////////////////////////////
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Lesson Structure"; // First part before "Driving"

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

  //   /////////////////////////////////////////////////////////////////

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

      {/* ///////////////////////////////////////// */}
      <section className={styles.adiModuleSectionPart}>
        <section className={styles.firstLessonModulecontainer}>
          <motion.div
            className={styles.firstLessonModulecard}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <h2 className={styles.firstLessonModuletitle}>
              How do you determine what to teach?
            </h2>
            <p className={styles.firstLessonModuletext}>
              Before starting a lesson, it's crucial to touch base with the
              learner to confirm their booking time, obtain their license
              number, and inquire about their prior driving experience. This
              helps you gauge where to begin in the curriculum. For example, if
              a learner recently failed their driving test due to a serious
              fault, you likely won't need to revisit the basics like moving off
              and stopping, as you would with someone who's never driven before.
            </p>
            <p className={styles.firstLessonModuletext}>
              It's also important to ask the learner what they aim to achieve in
              the lesson. Do they want an assessment to understand their current
              driving skills? Or are they looking to start from scratch?
            </p>
            <p className={styles.firstLessonModuletext}>
              If they claim to have experience in certain areas, assess their
              abilities firsthand. You can adjust their existing knowledge
              rather than going over the fundamentals again.
            </p>
          </motion.div>
        </section>
      </section>

      {/* ///////////////////////////////////////////////////// */}
      <section className={styles.AdiModuleOneTextArea}>
        <h2>What are the key topics to cover?</h2>
        {/* ////////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            Take some time to think about the essential skills every learner
            should master. Write down as many topics as you can think of, and
            use this as a reference point for your lessons.
          </label>

          <div className={styles.textareaWrapper}>
            {/* Colorful typing effect behind transparent textarea */}
            {text.length === 0 && (
              <div
                className={styles.fakePlaceholder}
                style={{ color: colors[colorIndex] }}>
                {typedText}
              </div>
            )}
          </div>

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
      {/* ///////////////////////////////////////////////////////// */}
      <section className={styles.adi5SectionPage}>
        <div className={styles.adi5Imgcontainer}>
          {skills.map((skill, index) => (
            <div className={styles.adi5Imgcard} key={index}>
              <img
                src={skill.img}
                alt={skill.title}
                className={styles.adi5Imgimage}
              />
              <p className={styles.adi5Imgtitle}>{skill.title}</p>
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#dddddd",
            textAlign: "center",
            maxWidth: "1240px",
            width: "100%",
            margin: "2rem auto",
          }}>
          While these topics serve as a solid foundation, keep in mind that the
          order and focus may vary based on your learner's needs and
          preferences. This is simply a guide to help structure your lessons. It
          is imperative you have excellent knowledge and understanding in all
          subjects, how can you teach someone else something you don’t know?
        </p>
      </section>

      <div className={styles.adiLastNextbtn}>
        <Link to="/gde-matrix-grow">
          {" "}
          <button className={styles.adinextbtns}>Next Page</button>
        </Link>
      </div>
      {/* ///////////////////////////////////// */}
      <div className={styles.quizStartDiv}>
        <section className={styles.startQuizSection}>
          <h1>Start Quiz</h1>
          <h3>15 Questions</h3>
          <p>
            Here’s a quick summary quiz to test your understanding of of Part 3:
            Lesson Structure the lesson before setting off
          </p>
          <Link to="/takequizCatName/lesson-structure">
            {" "}
            <button>Start Quiz</button>
          </Link>
        </section>
      </div>
    </div>
  );
}

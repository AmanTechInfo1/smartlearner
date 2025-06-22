import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import backgroundImage from "../../../../assets/images/lessonPlanning.jpg";

import { Link } from "react-router-dom";

export default function Adi3ModuleSeven() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Lesson Planning"; // First part before "Driving"

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

  // ///////////////////////////////////////////////////////////////
  const steps = [
    {
      title: "Before the lesson",
      items: [
        "Review learner goals",
        "Pre-plan suitable route",
        "Prepare materials/tools",
      ],
    },
    {
      title: "Start of the lesson",
      items: [
        "Reconfirm goals",
        "Check prior knowledge",
        "Observe confidence/nerves",
      ],
    },
    {
      title: "Set Objectives",
      items: [
        "Define specific targets",
        "Agree on responsibility",
        "Discuss expected outcome",
      ],
    },
    {
      title: "Practical driving time",
      items: [
        "Travel to suitable area",
        "Practice with feedback",
        "Adjust support or lesson subject as needed",
      ],
    },
    {
      title: "Wrap up",
      items: ["Return on time", "Reflect & debrief", "Plan next lesson"],
    },
  ];

  // ////////////////////////////////////////////////////////////////////
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
        `notepadTexts1Part3page7_${userId}`,
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
      `notepadTexts1Part3page7_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTexts1Part3page7_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  //   ////////////////////////////////////////////////
  const [text2, setText2] = useState("");
  const [savedTexts2, setSavedTexts2] = useState([]); // Store multiple saved texts
  const [isEditing2, setIsEditing2] = useState(false); // Track if the user is editing
  const [editIndex2, setEditIndex2] = useState(null);
  const textareaRef2 = useRef(null);

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
        `notepadTexts2Part3page7_${userId}`,
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
      `notepadTexts2Part3page7_${userId}`,
      JSON.stringify(updatedTexts2)
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page7_${userId}`
    );
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  //   /////////////////////////////////////////////////
  const [text3, setText3] = useState("");
  const [savedTexts3, setSavedTexts3] = useState([]); // Store multiple saved texts
  const [isEditing3, setIsEditing3] = useState(false); // Track if the user is editing
  const [editIndex3, setEditIndex3] = useState(null);
  const textareaRef3 = useRef(null);

  const handleChange3 = (e) => {
    setText3(e.target.value);
  };

  const saveText3 = () => {
    if (text3.trim()) {
      // If editing an existing item, replace it
      if (isEditing3) {
        const updatedTexts3 = [...savedTexts3];
        updatedTexts3[editIndex3] = text3;
        setSavedTexts3(updatedTexts3);
        setIsEditing3(false); // Reset editing flag
        setEditIndex3(null);
      } else {
        setSavedTexts3([...savedTexts3, text3]);
      }
      localStorage.setItem(
        `notepadTexts3Part3page7_${userId}`,
        JSON.stringify([...savedTexts3, text3])
      );

      setText3("");
    }
  };

  const editText3 = (index) => {
    setIsEditing3(true);
    setEditIndex3(index);
    setText3(savedTexts3[index]); // Set the text to be edited
    if (textareaRef3.current) {
      textareaRef3.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Delete the selected text
  const deleteText3 = (index) => {
    const updatedTexts3 = savedTexts3.filter((_, i) => i !== index);
    setSavedTexts3(updatedTexts3);
    localStorage.setItem(
      `notepadTexts3Part3page7_${userId}`,
      JSON.stringify(updatedTexts3)
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(
      `notepadTexts3Part3page7_${userId}`
    );
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);
  // //////////////////////////////////////////////////////////////////

  const sections = [
    {
      title: "Recap of Previous Lesson",
      content: [
        "Did you do any practice? Watch any videos? Help from family/friends?",
        "Do you have any questions? What would you like to do today?",
      ],
    },
    {
      title: "Lesson Planning",
      content: [
        "What would you like to learn today and why?",
        "How is that going to help your development?",
        "What is your current skill level?",
        "What level would you like to achieve today?",
        "What help do you want from me? (Talk through, explanation, demonstration, etc.)",
        "Agree on training location and transport method.",
      ],
    },
    {
      title: "Risk Management",
      content: [
        "Who is responsible for the vehicle and passengers? Driver.",
        "Drive carefully, be aware of road users and controls.",
        "Instructor may intervene if necessary for safety.",
      ],
    },
    {
      title: "Teaching & Learning Strategies",
      content: [
        "Practice the agreed goal using preferred learning style.",
        "Evaluate progress: rate from 1-10.",
        "Analyze what went well and what needs improvement.",
        "Adjust lesson if unexpected faults happen.",
      ],
    },
    {
      title: "Debrief",
      content: [
        "Reflect on the lesson.",
        "Encourage extra practice with family/friends, and videos.",
        "Explore goals for the next lesson.",
      ],
    },
  ];

  return (
    <div className={styles.AdiModuleOnecontainer}>
      <section
        className={styles.AdiModuleOneheader}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>

      <div style={{ maxWidth: "1640px", margin: "1rem auto" }}>
        <div className={styles.adisix2ndintro}>
          <p>
            Lesson planning is an essential part of delivering structured,
            meaningful and student-focused driving instruction. By preparing in
            advance and keeping the learner’s goals at the forefront, you can
            ensure each session maximises progress and builds confidence behind
            the wheel.
          </p>
        </div>
      </div>

      {/* /////////////////////////////////////////////////// */}
      <div className={styles.adi3module7firstcontainer}>
        {steps.map((step, index) => (
          <div key={index} className={styles.adi3module7firststepContainer}>
            <div className={styles.adi3module7firststep}>
              <h2 className={styles.adi3module7firsttitle}>{step.title}</h2>
              <ul className={styles.adi3module7firstlist}>
                {step.items.map((item, idx) => (
                  <li key={idx} className={styles.adi3module7firstlistItem}>
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>
            {index !== steps.length - 1 && (
              <div className={styles.adi3module7firstarrow}>
                <FaLongArrowAltRight id={styles.adi3module7firstarrow} />
                <FaLongArrowAltDown id={styles.adi3module7firstarrow2} />
              </div>
            )}
          </div>
        ))}
      </div>
      {/* //////////////////////////////////////////// */}
      <div className={styles.firstLessonModulesecondthirdcontainer}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.firstLessonModulesecondthirdheading}
        >
          Before the Lesson: Set a Clear Plan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={styles.firstLessonModulesecondthirddescription}
        >
          Your learner’s previous lesson or introductory call should have helped
          you identify what they want to work on next. Use that insight to
          pre-plan an appropriate and progressive lesson structure.
        </motion.p>

        <motion.div
          className={styles.firstLessonModulesecondthirdsection}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <ul>
            <li>Focus on the learner’s short-term and long-term goals</li>
            <li>
              Design activities that are challenging enough to promote growth,
              but still within their capabilities
            </li>
            <li>
              Be flexible – always have a Plan B in case the learner’s mindset
              or circumstances have changed on the day
            </li>
          </ul>
        </motion.div>
      </div>
      {/* /////////////////////////////////////////// */}
      <section className={styles.AdiModuleOneTextArea}>
        {/* ////////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            Why is it important to reconfirm the learner’s goals at the start of
            each lesson, even if they were discussed previously?
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
      {/* ////////////////////////////////////////////////////// */}
      <div className={styles.firstLessonModulesecondthirdcontainer}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.firstLessonModulesecondthirdheading}
        >
          At the Start of the Lesson: Reconfirm and Recalibrate
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={styles.firstLessonModulesecondthirddescription}
        >
          Begin the session by checking in with the student:
        </motion.p>

        <motion.div
          className={styles.firstLessonModulesecondthirdsection}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <ul>
            <li>Reconfirm their goals with open-ended, probing questions</li>
            <li>Assess their existing knowledge of the subject</li>
            <li>Ask: “What do you want to practice today—and why?”</li>
            <li>
              Pay close attention to verbal and non-verbal cues (e.g., nervous
              body language, uncertainty)
            </li>
            <p>
              This ensures that the lesson remains learner-centred, adaptive,
              and relevant.
            </p>
          </ul>
        </motion.div>
      </div>
      {/* ////////////////////////////////////////////// */}
      <div className={styles.firstLessonModulesecondthirdcontainer}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.firstLessonModulesecondthirdheading}
        >
          Define the Objectives and Roles Clearly
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={styles.firstLessonModulesecondthirddescription}
        >
          Set specific, measurable goals for the session. For example: What do
          you want to achieve by the end of today's lesson? I want to be able to
          complete a reverse bay park with no help.
        </motion.p>

        <motion.div
          className={styles.firstLessonModulesecondthirdsection}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2>This conversation helps ensure that goals are:</h2>
          <ul>
            <li>Clear</li>
            <li>Achievable</li>
            <li>Motivating</li>
          </ul>
        </motion.div>
        <motion.div
          className={styles.firstLessonModulesecondthirdscores}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h2>Then, agree on the balance of responsibility for the session:</h2>
          <ul>
            <li>Will you guide them step-by-step?</li>
            <li>Will they attempt the skill independently?</li>
            <li>What kind of support will you provide, and when?</li>
          </ul>
        </motion.div>
      </div>
      {/* ///////////////////////////////////////////// */}
      <div className={styles.firstLessonModulesecondthirdcontainer}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.firstLessonModulesecondthirdheading}
        >
          Choose the Right Practice Area
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={styles.firstLessonModulesecondthirddescription}
        >
          Select a suitable environment that matches the learner’s objective.
          Keep it local—within a 10-minute drive from the starting point.
          <br /> ✅ Practicing mini roundabouts? Pick a route with multiple mini
          roundabouts, not dual carriageways.
        </motion.p>

        <motion.div
          className={styles.firstLessonModulesecondthirdsection}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2>The practice area should:</h2>
          <ul>
            <li>Align with the lesson goals</li>
            <li>Be safe and manageable for the learner’s current ability</li>
            <li>Allow opportunities to repeat and reflect</li>
          </ul>
        </motion.div>
      </div>
      {/* //////////////////////////////////////// */}
      <section className={styles.AdiModuleOneTextArea}>
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            How would you choose a suitable practice area for a lesson on
            pedestrian crossings ? What factors would influence your decision?
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
      </section>
      {/* //////////////////////////////////////////////// */}
      <section className={styles.AdiModuleOneTextArea}>
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            Explain why having a Plan B is important when pre-planning lessons.
            Give an example of when this might be necessary
          </label>
          <textarea
            ref={textareaRef3}
            value={text3}
            onChange={handleChange3}
            rows="5"
            cols="30"
            placeholder="Write your thoughts here..."
          />
          <br />
          <button onClick={saveText3}>{isEditing3 ? "Update" : "Save"}</button>

          <div className={styles.thoughtsListArea}>
            {savedTexts3.length === 0 ? (
              <p>No saved thoughts.</p>
            ) : (
              <ul>
                {savedTexts3.map((savedText3, index) => (
                  <li key={index}>
                    <p>{savedText3}</p>
                    <span>
                      <FaEdit
                        onClick={() => editText3(index)}
                        id={styles.editListIcon}
                      />

                      <IoTrashBin
                        onClick={() => deleteText3(index)}
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
      {/* //////////////////////////////////////////// */}
      <div className={styles.firstLessonModulesecondthirdcontainer}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.firstLessonModulesecondthirdheading}
        >
          Adjust Responsibility as Skills Grow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={styles.firstLessonModulesecondthirddescription}
        >
          As learners become more confident, gradually shift more responsibility
          onto them. This helps build independent driving habits.
        </motion.p>

        <motion.div
          className={styles.firstLessonModulesecondthirdsection}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2>However, always:</h2>
          <ul>
            <li>Discuss and agree before making these changes</li>
            <li>Ensure the learner feels comfortable and supported</li>
            <li>Be ready to step back in if needed</li>
          </ul>
        </motion.div>

        {/* ///////////////////////////////////////////// */}
        <motion.div
          className={styles.firstLessonModulesecondthirdsection}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2>Wrap-Up and Reflect</h2>
          <p>
            Always keep an eye on time to ensure you return to the drop-off
            location within the scheduled lesson duration.
            <br />
            At the end of the session, conduct a short debrief:
          </p>
          <ul>
            <li>Ask the learner to reflect on their performance</li>
            <li>What went well?</li>
            <li>What could be improved?</li>
            <li>What would they like to work on next time?</li>
          </ul>
        </motion.div>
      </div>

      {/* //////////////////////////////////////////////////// */}
      <div className={styles.adi3module72ndcontainer}>
        <h1 className={styles.adi3module72ndmainHeading}>
          🚗 Lesson Recap & Planning
        </h1>
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className={styles.adi3module72ndsection}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h2 className={styles.adi3module72ndsectionTitle}>
              {section.title}
            </h2>
            <ul className={styles.adi3module72ndsectionContent}>
              {section.content.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* //////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////// */}
      <div className={styles.LessonPlanningcontainer}>
        <div className={styles.LessonPlanningcontainer2}>
          <motion.h1
            className={styles.adi3module72ndmainHeading}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Lesson Planning
          </motion.h1>

          <motion.p
            className={styles.LessonPlanningdescription}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Now that you’re familiar with the concept of the lesson structure
            "cake," it’s time to explore how to effectively plan a lesson. There
            is no single, fixed way to teach any lesson your approach should
            always be tailored to the individual learner. That said, it's
            important to consider the specific skills required to successfully
            engage with each subject.
          </motion.p>
          <motion.p
            className={styles.LessonPlanningdescription}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {" "}
            Each learner may begin at a different “layer” of the cake depending
            on their prior knowledge and experience. You’ll uncover this by
            asking questions and encouraging learners to explore what they
            already know.
          </motion.p>

          <motion.div
            className={styles.LessonPlanningsection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h2 className={styles.adi3module72ndsectionTitle}>Task</h2>
            <h3>Skill Brainstorming A–Z</h3>
            <p>
              For each lesson subject, take a blank piece of paper and
              brainstorm the full range of skills (from A to Z) needed to master
              that subject. For example:
            </p>
            <ul>
              <li>Moving and stopping</li>
              <li>
                Understanding and using the car's controls (e.g. pedals, gear
                stick, steering wheel)
              </li>
              <li>How to move the car in a straight line</li>
              <li>How to stop the car safely</li>
              <li>Making proper observations</li>
              <li>Using signals correctly</li>
              <p>
                Repeat this process for each subject. Once completed, you'll
                have a strong foundation to begin creating your lesson plans.
                Remember, lesson plans are flexible and should evolve based on
                the learner’s progress.
              </p>
            </ul>
          </motion.div>

          <motion.div
            className={styles.LessonPlanningsection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <h2 className={styles.adi3module72ndsectionTitle}>
              Starting the Lesson Plan
            </h2>
            <p>
              When planning a lesson, start by identifying the{" "}
              <strong>main objective</strong>.
            </p>
            <p>
              For example: <em>Park on the right</em>.
            </p>
            <ul>
              <li>
                <strong>What can the learner already do?</strong> (Assess their
                current skill set.)
              </li>
              <li>
                <strong>
                  What is the first goal or skill they need to work on?
                </strong>{" "}
                (Refer back to the lesson structure cake.)
              </li>
              <li>
                <strong>
                  What prior knowledge do they have about this skill?
                </strong>
                <ul>
                  <li>Do they understand what it is and why it matters?</li>
                  <li>Are they aware of the risks and factors involved?</li>
                </ul>
              </li>
              <li>
                <strong>What are the gaps in their understanding?</strong>
                <ul>
                  <li>What are they missing or unsure about?</li>
                  <li>
                    Are there any unconscious biases affecting how they approach
                    the task?
                  </li>
                </ul>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.LessonPlanningsection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <h2 className={styles.adi3module72ndsectionTitle}>
              Providing Support
            </h2>
            <p>
              Consider how best to support the learner in achieving the goal.
              Refer to their VARK questionnaire—understanding how they learn
              best (Visual, Auditory, Reading/Writing, Kinesthetic) will help
              you choose the most effective teaching strategies. This might
              include:
            </p>
            <ul>
              <li>Demonstrations</li>
              <li>Videos</li>
              <li>Diagrams</li>
              <li>Hands-on practice</li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.LessonPlanningsection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <h2 className={styles.adi3module72ndsectionTitle}>
              Sharing Responsibility
            </h2>
            <p>Now, begin to shift some responsibility to the learner:</p>
            <ul>
              <li>Will you identify a safe space for practice?</li>
              <li>
                Will you handle observations while they focus on the task?
              </li>
              <li>
                How will you gradually step back as their confidence and skill
                grow?
              </li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.LessonPlanningsection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <h2 className={styles.adi3module72ndsectionTitle}>
              Practice and Progression
            </h2>
            <p>
              Practice should be tailored to the learner’s pace. As their
              confidence builds, you’ll slowly reduce your support, allowing
              them to take more control. This promotes independence and lasting
              learning.
            </p>
          </motion.div>

          <motion.div   
            className={styles.LessonPlanningsection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
          >
            <h2 className={styles.adi3module72ndsectionTitle}>
              Confirming Learning
            </h2>
            <p>
              Always finish by confirming what’s been learned. You can do this
              through reflective questioning, discussion, or demonstration. The
              goal is to ensure the learner can explain and apply the skill
              confidently.
            </p>
            <p>
              Below is a blank lesson plan template along with a few completed
              examples. Download, print, and begin filling out your own
              plans—these will become your personalised guide as you develop
              your teaching approach.
            </p>
          </motion.div>
        </div>
      </div>

      {/* //////////////////////////////////////////// */}

      {/* //////////////////////////////////////////// */}
      <div style={style.adiDownLoadcontainer}>
        <h2 style={style.adiDownLoadheading}>
          Get Your Lesson Planning Documents
        </h2>
        <p style={style.adiDownLoadsubtext}>
          Click below to download all documents as a ZIP file.
        </p>
        <a
          href="/lessonPlanning-Docs.zip"
          download
          style={style.adiDownLoadbutton}
        >
          <FaDownload style={style.adiDownLoadicon} />
          Download ZIP
        </a>
      </div>

      <div className={styles.adiLastNextbtn}>
        <Link to="/route-planning">
          {" "}
          <button className={styles.adinextbtns}>Next Page</button>
        </Link>
      </div>
      {/* ///////////////////////////////////////////// */}
      <div className={styles.quizStartDiv}>
        <section className={styles.startQuizSection}>
          <h1>Start Quiz</h1>
          <h3>15 Questions</h3>
          <p>
            Here’s a quick summary quiz to test your understanding of of Part 3:
            Lesson Planning the lesson before setting off
          </p>
          <Link to="/takequizCatName/lesson-planning">
            {" "}
            <button>Start Quiz</button>
          </Link>
        </section>
      </div>

      {/* //////////////////////////////////////////// */}
    </div>
  );
}
const style = {
  adiDownLoadcontainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "50vh",
    background: "linear-gradient(135deg,rgb(125, 0, 67),rgb(3, 27, 94))",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    margin: "50px auto",
    maxWidth: "600px",
  },
  adiDownLoadheading: {
    fontSize: "2rem",
    marginBottom: "10px",
    color: "white",
  },
  adiDownLoadsubtext: {
    fontSize: "1rem",
    marginBottom: "30px",
    color: "white",
  },
  adiDownLoadbutton: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 24px",
    backgroundColor: "#007BFF",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
  },
  adiDownLoadicon: {
    fontSize: "1.2rem",
  },
};

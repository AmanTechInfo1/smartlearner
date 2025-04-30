import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function () {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "GDE MATRIX and GROW Model"; // First part before "Driving"

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

  //   ///////////////////////////////////////////////////////////////
  const levels = [
    {
      level: "1. Vehicle Control (Basic Skills)",
      focus:
        "The student practices braking, accelerating smoothly, and steering correctly.",
      teaching: [
        "Instructor guides them in maintaining a steady speed.",
        "Teaches smooth stopping at traffic lights and pedestrian crossings.",
        "Ensures proper use of mirrors and indicators.",
      ],
    },
    {
      level: "2. Traffic Situations (Tactical Decisions)",
      focus:
        "The student learns to adjust speed, anticipate other drivers, and handle intersections.",
      teaching: [
        "Instructor asks: 'What do you notice about the cyclists ahead?'",
        "Helps them decide when to slow down or change lanes.",
        "Practices safe following distances and reaction to traffic signals.",
      ],
    },
    {
      level: "3. Goals and Context of Driving (Strategic Planning)",
      focus:
        "The student considers when and where to drive based on personal comfort and risks.",
      teaching: [
        "Discusses: 'Would you feel comfortable driving here at night or in heavy rain?'",
        "Encourages thinking about distractions (e.g., music, passengers).",
      ],
    },
    {
      level: "4. Goals for Life & Personal Factors",
      focus:
        "The student reflects on their driving habits, attitudes, and risks.",
      teaching: [
        "Instructor asks: 'How do you think stress or being in a hurry might affect your driving?'",
        "Discusses peer pressure and risky behaviors, like speeding to impress friends.",
      ],
    },
  ];

  //   ///////////////////////////////////////////////////////////////////////////////////////////
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
        `notepadTexts1Part3page6_${userId}`,
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
      `notepadTexts1Part3page6_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTexts1Part3page6_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);
  //   //////////////////////////////////////////////////////////////////
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
        `notepadTexts2Part3page6_${userId}`,
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
      `notepadTexts2Part3page6_${userId}`,
      JSON.stringify(updatedTexts2)
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page6_${userId}`
    );
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);
  // /////////////////////////////////////////////////////////////////////////////
  const steps = [
    {
      title: "Goal (G) – Setting a Clear Objective",
      content: [
        "The first step in the GROW model is to establish a meaningful and motivating goal. In driver instruction, this might be mastering roundabouts, improving hazard awareness, or building confidence in urban traffic. Goals should challenge the learner, giving them a sense of achievement once accomplished. Rather than simply telling learners what to focus on, instructors should guide them toward discovering their own goals. This creates buy-in and personal commitment. Asking the right questions helps unlock motivation:",
      ],
      questions: [
        "What are you trying to achieve in today’s lesson?",
        "What part of driving feels most challenging for you right now?",
        "How will achieving this goal improve your driving?",
        "What excites you most about reaching this milestone?",
        "How will you measure success?",
        "What skills will you develop along the way?",
        "By keeping the focus on the future and growth, learners feel empowered and motivated to improve.",
      ],
    },
    {
      title: "Reality (R) – Assessing the Current Situation",
      content: [
        "Before progress can be made, the learner must understand where they currently stand in relation to their goal. This step involves honest self-assessment and identifying strengths, weaknesses, and areas for improvement. The goal should feel like a stretch—challenging but achievable—rather than overwhelming.",
      ],
      questions: [
        "What’s happening right now with your driving?",
        "How do you feel about your current ability in this area?",
        "What challenges are you facing?",
        "What do you believe needs to change?",
        "On a scale of 1-10, how would you rate your skill level?",
        "If nothing changes, how would that impact your driving experience?",
        "By helping learners reflect on their current skills, instructors can bridge the gap between where they are and where they want to be.",
      ],
    },
    {
      title: "Options (O) – Exploring Possible Solutions",
      content: [
        "Once the learner understands their current reality, the next step is to brainstorm ways to move forward. This includes identifying obstacles and possible strategies to overcome them. Obstacles may be external (e.g., traffic conditions, road layout) or internal (e.g., confidence, mindset, motivation). Rather than giving direct solutions, instructors should help learners generate their own strategies—increasing engagement and problem-solving skills.",
      ],
      questions: [
        "What obstacles might you face in achieving this goal?",
        "What strategies have worked for you in the past?",
        "How can you overcome any barriers?",
        "What small changes could help you improve?",
        "Which of these options do you feel most confident about trying?",
        "What support or guidance would help you succeed?",
        "Encouraging learners to explore different approaches ensures they feel in control of their progress and can adapt their learning style to suit their needs.",
      ],
    },
    {
      title: "Will (W) – Committing to an Action Plan",
      content: [
        "The final step is turning options into concrete actions. Learners should commit to specific steps, outlining what they will do, when they will do it, and how they will track progress.",
      ],
      questions: [
        "What is the first step you will take?",
        "What are the next steps? When will you do them?",
        "How will you handle obstacles if they arise?",
        "How will you measure your progress?",
        "How will achieving this goal help you in the future?",
        "Do you need additional support or coaching?",
        "By setting clear, measurable steps, learners feel more accountable and engaged in their development.",
      ],
    },
  ];
  // //////////////////////////////////////////////////////////////////////////////
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
        `notepadTexts3Part3page6_${userId}`,
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
      `notepadTexts3Part3page6_${userId}`,
      JSON.stringify(updatedTexts3)
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(
      `notepadTexts3Part3page6_${userId}`
    );
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  //   //////////////////////////////////////////////////////////////////////
  const [text4, setText4] = useState("");
  const [savedTexts4, setSavedTexts4] = useState([]); // Store multiple saved texts
  const [isEditing4, setIsEditing4] = useState(false); // Track if the user is editing
  const [editIndex4, setEditIndex4] = useState(null);
  const textareaRef4 = useRef(null);

  const handleChange4 = (e) => {
    setText4(e.target.value);
  };

  const saveText4 = () => {
    if (text4.trim()) {
      // If editing an existing item, replace it
      if (isEditing4) {
        const updatedTexts4 = [...savedTexts4];
        updatedTexts4[editIndex4] = text4;
        setSavedTexts4(updatedTexts4);
        setIsEditing4(false); // Reset editing flag
        setEditIndex4(null);
      } else {
        setSavedTexts4([...savedTexts4, text4]);
      }
      localStorage.setItem(
        `notepadTexts4Part3page6_${userId}`,
        JSON.stringify([...savedTexts4, text4])
      );

      setText4("");
    }
  };

  const editText4 = (index) => {
    setIsEditing4(true);
    setEditIndex4(index);
    setText4(savedTexts4[index]); // Set the text to be edited
    if (textareaRef4.current) {
      textareaRef4.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Delete the selected text
  const deleteText4 = (index) => {
    const updatedTexts4 = savedTexts4.filter((_, i) => i !== index);
    setSavedTexts4(updatedTexts4);
    localStorage.setItem(
      `notepadTexts4Part3page6_${userId}`,
      JSON.stringify(updatedTexts4)
    );
  };

  useEffect(() => {
    const savedData4 = localStorage.getItem(
      `notepadTexts4Part3page6_${userId}`
    );
    if (savedData4) {
      setSavedTexts4(JSON.parse(savedData4));
    }
  }, []);
  //   ///////////////////////////////////////////////////////////
  const [text5, setText5] = useState("");
  const [savedTexts5, setSavedTexts5] = useState([]); // Store multiple saved texts
  const [isEditing5, setIsEditing5] = useState(false); // Track if the user is editing
  const [editIndex5, setEditIndex5] = useState(null);
  const textareaRef5 = useRef(null);

  const handleChange5 = (e) => {
    setText5(e.target.value);
  };

  const saveText5 = () => {
    if (text5.trim()) {
      // If editing an existing item, replace it
      if (isEditing5) {
        const updatedTexts5 = [...savedTexts5];
        updatedTexts5[editIndex5] = text5;
        setSavedTexts5(updatedTexts5);
        setIsEditing5(false); // Reset editing flag
        setEditIndex5(null);
      } else {
        setSavedTexts5([...savedTexts5, text5]);
      }
      localStorage.setItem(
        `notepadTexts5Part3page6_${userId}`,
        JSON.stringify([...savedTexts5, text5])
      );

      setText5("");
    }
  };

  const editText5 = (index) => {
    setIsEditing5(true);
    setEditIndex5(index);
    setText5(savedTexts5[index]); // Set the text to be edited
    if (textareaRef5.current) {
      textareaRef5.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Delete the selected text
  const deleteText5 = (index) => {
    const updatedTexts5 = savedTexts5.filter((_, i) => i !== index);
    setSavedTexts5(updatedTexts5);
    localStorage.setItem(
      `notepadTexts5Part3page6_${userId}`,
      JSON.stringify(updatedTexts5)
    );
  };

  useEffect(() => {
    const savedData5 = localStorage.getItem(
      `notepadTexts5Part3page6_${userId}`
    );
    if (savedData5) {
      setSavedTexts5(JSON.parse(savedData5));
    }
  }, []);

  return (
    <div className={styles.AdiModuleOnecontainer}>
      <section className={styles.AdiModuleOneheader}>
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>

      {/* ////////////////////////////////////////////////////////////// */}
      <div className={styles.adiSixModule1stcontainer}>
        <h1 className={styles.adiSix1sttitle}>How the GDE Matrix Works</h1>
        <p className={styles.adiSix1stdescription}>
          The Goals for Driver Education (GDE) Matrix structures driver
          education into different hierarchical levels and addresses key
          influencing factors shaping a driver's decisions.
          <br /> By combining these elements, it ensures that driver training is
          not just about technical skills, but also about understanding risks,
          personal decision-making, and external influences.
        </p>

        <section className={styles.adiSix1stsection}>
          <h2 className={styles.adiSix1stsubTitle}>
            1. Breaking Down Driving into Four Levels
          </h2>
          <p>
            Each level in the matrix represents a different aspect of driving,
            from basic control to personal attitudes:
          </p>
          <ul className={styles.adiSix1stlist}>
            <li>
              <span>Vehicle Control (Basic Skills)</span> – Learning how to
              physically operate a car.
            </li>
            <li>
              <span>Traffic Situations (Tactical Decision-Making)</span> –
              Applying skills to navigate real-world traffic.
            </li>
            <li>
              <span>Goals and Context of Driving (Strategic Planning)</span> –
              Making choices about when, where, and how to drive.
            </li>
            <li>
              <span>
                Goals for Life and Skills for Living (Personal Influence)
              </span>{" "}
              – Understanding how personal values and emotions impact driving
              behaviour.
            </li>
          </ul>
        </section>

        <section className={styles.adiSix1stsection}>
          <h2 className={styles.adiSix1stsubTitle}>
            2. Addressing Three Key Influencing Factors
          </h2>
          <ul className={styles.adiSix1stlist}>
            <li>
              <span>Knowledge and Skills</span> – Teaching essential driving
              rules, techniques, and mechanics.
            </li>
            <li>
              <span>Risk Awareness and Assessment</span> – Training drivers to
              recognize and manage dangers.
            </li>
            <li>
              <span>Self-Evaluation and Personal Factors</span> – Encouraging
              self-reflection and responsible decision-making.
            </li>
          </ul>
        </section>

        <section className={styles.adiSix1stsection}>
          <h2 className={styles.adiSix1stsubTitle}>
            Why the GDE Matrix is Important
          </h2>
          <p className={styles.adiSix1stparagraph}>
            Traditional driver education often focuses only on vehicle control
            and traffic rules. The GDE Matrix expands this by addressing why
            drivers make certain decisions and how personal factors influence
            their behaviour.
          </p>
          <p className={styles.adiSix1stparagraph}>
            It emphasises risk awareness. Many accidents happen not due to lack
            of skill, but because drivers fail to recognize dangers or make poor
            decisions.
          </p>
          <p className={styles.adiSix1stparagraph}>
            It encourages self-reflection. By understanding their own
            tendencies, biases, and emotions, drivers can avoid overconfidence
            and risky behavior.
          </p>
          <p className={styles.adiSix1stparagraph}>
            It accounts for personal and societal influences. Peer pressure,
            fatigue, distractions, and emotional states all impact driving, and
            the GDE Matrix helps drivers manage these factors.
          </p>
        </section>
      </div>

      {/* /////////////////////////////////////////////////////////////////////// */}
      <div className={styles.adisix2ndcontainer}>
        <h1 className={styles.adisix2ndheading}>GDE Matrix in Action</h1>

        <div className={styles.adisix2ndintro}>
          <h2>
            Lesson Topic: <span>Navigating Urban Traffic</span>
          </h2>
          <p>
            <strong>Scenario:</strong> The student will drive through a busy
            city area, dealing with intersections, pedestrians, cyclists, and
            traffic lights.
          </p>
        </div>

        <div className={styles.adisix2ndlevels}>
          {levels.map((item, index) => (
            <div className={styles.adisix2ndlevelCard} key={index}>
              <h3 className={styles.adisix2ndlevelTitle}>{item.level}</h3>
              <p className={styles.adisix2ndfocus}>{item.focus}</p>
              <ul className={styles.adisix2ndteachingList}>
                {item.teaching.map((point, idx) => (
                  <li key={idx} className={styles.adisix2ndteachingPoint}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////// */}
      <section className={styles.AdiModuleOneTextArea}>
        {/* ////////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            Now try and write an example for a lesson on Pedestrian crossings
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
      {/* ////////////////////////////////////////////////////////////////// */}
      <div className={styles.AdiModuleOneTextBox} style={{ marginTop: "2rem" }}>
        <label>
          What were your results and how will you use this during your own
          learning ?
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

      {/* //////////////////////////////////////////////////////////////// */}
      <div className={styles.adiSix3rdcontainer}>
        <h1 className={styles.adiSix3rdmainHeading}>
          How the <span className={styles.adiSix3rdglowText}>GROW</span>{" "}
          Coaching Model Enhances Driver Instruction
        </h1>
        <p className={styles.adiSix1stdescription}>
          The GROW coaching model (Goal, Reality, Options, Will) is a powerful
          framework used in coaching and education to guide individuals toward
          achieving their objectives. It is particularly effective in driver
          instruction, as it encourages learners to take ownership of their
          progress, reflect on their development, and actively engage in
          problem-solving.
        </p>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`${styles.adiSix3rdstepCard} ${
              styles[`adiSix3rdstep${index}`]
            }`}
          >
            <h2 className={styles.adiSix3rdstepTitle}>{step.title}</h2>
            {step.content.map((para, idx) => (
              <p key={idx} className={styles.adiSix3rdstepContent}>
                {para}
              </p>
            ))}
            <h3 className={styles.adiSix3rdquestionHeading}>
              ✅ Key Questions:
            </h3>
            <ul className={styles.adiSix3rdquestionList}>
              {step.questions.map((question, qIndex) => (
                <li key={qIndex} className={styles.adiSix3rdquestionItem}>
                  {question}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* ////////////////////////////////////////////////////// */}
      <section className={styles.AdiModuleOneTextArea}>
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            How might using the GROW model help a learner feel more involved and
            motivated during a lesson? Can you think of a goal-setting question
            you might ask to help a future pupil identify what they want to
            achieve?"
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
        {/* /////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            what ways do you think shifting from giving instructions to using a
            coaching approach—like the GROW model—might change how a learner
            experiences a driving lesson?
          </label>
          <textarea
            ref={textareaRef4}
            value={text4}
            onChange={handleChange4}
            rows="5"
            cols="30"
            placeholder="Write your thoughts here..."
          />
          <br />
          <button onClick={saveText4}>{isEditing4 ? "Update" : "Save"}</button>

          <div className={styles.thoughtsListArea}>
            {savedTexts4.length === 0 ? (
              <p>No saved thoughts.</p>
            ) : (
              <ul>
                {savedTexts4.map((savedText4, index) => (
                  <li key={index}>
                    <p>{savedText4}</p>
                    <span>
                      <FaEdit
                        onClick={() => editText4(index)}
                        id={styles.editListIcon}
                      />

                      <IoTrashBin
                        onClick={() => deleteText4(index)}
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
      {/* ////////////////////////////////////////////////////////////////////// */}

      {/* //////////////////////////////////////////////////// */}
      <div className={styles.adiSixModule1stcontainer}>
        <p className={styles.adiSix1stdescription}>
          By using the GROW coaching model, driving instructors shift from
          simply giving instructions to empowering learners. This approach
          fosters:
        </p>

        <section className={styles.adiSix1stsection}>
          <ul className={styles.adiSix1stlist}>
            <li>
              <span>🚗 Active Learning –</span> Encouraging students to
              problem-solve and reflect on their own progress.
            </li>
            <li>
              <span>🚦 Self-Awareness –</span> Helping learners understand their
              strengths, weaknesses, and mindset.
            </li>
            <li>
              <span>🔑 Confidence & Responsibility </span> Giving drivers
              control over their development, leading to safer and more
              independent driving.
            </li>
          </ul>
        </section>
      </div>
      {/* //////////////////////////////////////////////////////// */}
      <div className={styles.AdiModuleOneTextBox}>
        <label>
          You notice the learner you are teaching tends to speed on lessons. You
          have mentioned this before, but the pupil continues to do it. What
          type of questions could you ask using the grow model?
        </label>
        <textarea
          ref={textareaRef5}
          value={text5}
          onChange={handleChange5}
          rows="5"
          cols="30"
          placeholder="Write your thoughts here..."
        />
        <br />
        <button onClick={saveText5}>{isEditing5 ? "Update" : "Save"}</button>

        <div className={styles.thoughtsListArea}>
          {savedTexts5.length === 0 ? (
            <p>No saved thoughts.</p>
          ) : (
            <ul>
              {savedTexts5.map((savedText5, index) => (
                <li key={index}>
                  <p>{savedText5}</p>
                  <span>
                    <FaEdit
                      onClick={() => editText5(index)}
                      id={styles.editListIcon}
                    />

                    <IoTrashBin
                      onClick={() => deleteText5(index)}
                      id={styles.binListIcon}
                    />
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

             <div className={styles.adiLastNextbtn}>
                          <Link to="/lesson-planning">
                            {" "}
                            <button className={styles.adinextbtns}>Next Page</button>
                          </Link>
                        </div>

      {/* ///////////////////////////////////////////////////// */}
      <div className={styles.quizStartDiv}>
        <section className={styles.startQuizSection}>
          <h1>Start Quiz</h1>
          <h3>15 Questions</h3>
          <p>
            Here’s a quick summary quiz to test your understanding of of Part 3:
            GDE MATRIX and GROW Model the lesson before setting off
          </p>
          <Link to="/takequizCatName/gde-matrix">
            {" "}
            <button>Start Quiz</button>
          </Link>
        </section>
      </div>
    </div>
  );
}

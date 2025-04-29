import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

import { motion } from "framer-motion";
import { FaLightbulb, FaCheckCircle, FaThumbtack } from "react-icons/fa";
import { BookOpen, Ear, Eye, HandMetal, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Adi3ModuleFour() {
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
        `notepadTexts1Part3page4_${userId}`,
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
      `notepadTexts1Part3page4_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTexts1Part3page4_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  //   //////////////////////////////////////////////////////////////////////

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
        `notepadTexts2Part3page4_${userId}`,
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
      `notepadTexts2Part3page4_${userId}`,
      JSON.stringify(updatedTexts2)
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page4_${userId}`
    );
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  // ///////////////////////////////////////////////////////////////////////////////////////////////

  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Learning Needs and Styles"; // First part before "Driving"

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

  //   //////////////////////////////////////////////////////////////////
  const learningStyles = [
    {
      icon: <Eye size={48} color="#00BFFF" />,
      title: "Visual Learners",
      description:
        "Visual learners prefer to see information, such as through charts, diagrams, and written instructions.",
    },
    {
      icon: <Ear size={48} color="#FF69B4" />,
      title: "Auditory Learners",
      description:
        "Auditory learners benefit from listening to information, such as lectures or discussions.",
    },
    {
      icon: <BookOpen size={48} color="#ADFF2F" />,
      title: "Reading/Writing Learners",
      description:
        "Reading/Writing learners learn best by reading and writing, often enjoying notes, essays, and written instructions.",
    },
    {
      icon: <HandMetal size={48} color="#FFA500" />,
      title: "Kinesthetic Learners",
      description:
        "Kinesthetic learners learn through physical activity and hands-on experiences.",
    },
  ];
  //   ////////////////////////////////////

  return (
    <div className={styles.AdiModuleOnecontainer}>
      <section className={styles.AdiModuleOneheader}>
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>
      <section className={styles.adi4section}>
        <div className={styles.adi4firstcontainer}>
          <motion.h1
            className={styles.adi4firstheading}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Inclusive Driving Lessons
          </motion.h1>

          <motion.p
            className={styles.adi4firstparagraph}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A a driving instructor, you will work with learners from diverse
            backgrounds, each with unique needs and abilities. It is essential
            to treat every student with fairness and respect, ensuring that no
            one experiences discrimination. Some learners may have learning
            disabilities that impact how they process information and develop
            driving skills.
          </motion.p>

          <motion.p
            className={styles.adi4firstparagraph}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            By understanding these challenges, you can tailor your teaching
            approach to create a supportive learning environment. Personalizing
            lessons not only helps reduce anxiety but also builds confidence,
            ensuring that every learner has the opportunity to become a safe and
            responsible driver—not just pass their test.
          </motion.p>

          <motion.div
            className={styles.adi4firstsection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className={styles.adi4firstsubheading}>
              Types of Learning Disabilities & Their Impact on Driving Lessons
            </h2>
            <p>
              Learning disabilities can affect a person's ability to process
              information, follow instructions, or respond to situations
              quickly. As a driving instructor, understanding these challenges
              and adapting teaching methods can help learners succeed. Here are
              some common learning disabilities and how they relate to driving
              lessons:
            </p>
            <div className={styles.adi4firstcard}>
              <h3 className={styles.adi4firstcardTitle}>
                1. Dyslexia (Affects reading, writing, and processing speed)
              </h3>
              <p>
                <FaThumbtack className={styles.adi4firsticon} />{" "}
                <strong>Challenges:</strong>
              </p>
              <ul>
                <li>Difficulty reading road signs quickly</li>
                <li>Struggling with written theory test questions</li>
                <li>Problems remembering complex verbal instructions</li>
              </ul>

              <p>
                <FaLightbulb className={styles.adi4firsticon} />{" "}
                <strong>How to Adapt Lessons:</strong>
              </p>
              <ul>
                <li>
                  <FaCheckCircle className={styles.adi4firstcheckIcon} /> Use
                  symbols, colors, or voice recordings instead of written notes.
                </li>
                <li>
                  <FaCheckCircle className={styles.adi4firstcheckIcon} /> Give
                  step-by-step spoken instructions instead of long written
                  explanations.
                </li>
                <li>
                  <FaCheckCircle className={styles.adi4firstcheckIcon} /> Use
                  practical demonstrations rather than theory-heavy teaching.
                </li>
              </ul>

              <p className={styles.adi4firstexample}>
                <strong>Example:</strong> Instead of saying, “Turn left at the
                second exit,” show the learner a simple diagram or use verbal
                repetition.
              </p>
            </div>

            <div className={styles.adi4firstcard}>
              <h3 className={styles.adi4firstcardTitle}>
                2. Dyspraxia (Affects coordination and motor skills)
              </h3>
              <p>
                <FaThumbtack className={styles.adi4firsticon} />{" "}
                <strong>Challenges:</strong>
              </p>
              <ul>
                <li>
                  Difficulty with fine motor control (steering, gear changes,
                  clutch control)
                </li>
                <li>Slow reaction times to hazards</li>
                <li>
                  Problems with spatial awareness (e.g., parking, lane
                  positioning)
                </li>
              </ul>

              <p>
                <FaLightbulb className={styles.adi4firsticon} />{" "}
                <strong>How to Adapt Lessons:</strong>
              </p>
              <ul>
                <li>
                  <FaCheckCircle className={styles.adi4firstcheckIcon} /> Give
                  extra time for practicing physical car control.
                </li>
                <li>
                  <FaCheckCircle className={styles.adi4firstcheckIcon} /> Use
                  hand-over-hand steering techniques and simplified gear change
                  strategies.
                </li>
                <li>
                  <FaCheckCircle className={styles.adi4firstcheckIcon} />{" "}
                  Provide calm and patient reassurance to boost confidence.
                </li>
              </ul>

              <p className={styles.adi4firstexample}>
                <strong>Example:</strong> If a learner struggles with parking,
                break it into smaller steps and use visual guides (e.g., cones
                or markers).
              </p>
            </div>

            {/* ////////////////////////////////////////////////////////// */}
            <div className={styles.adi4firstcard}>
              <h3 className={styles.adi4firstcardTitle}>
                3. ADHD (Attention Deficit Hyperactivity Disorder) (Affects
                focus, impulsivity, and memory)
              </h3>
              <p>
                <FaThumbtack className={styles.adi4firsticon} />{" "}
                <strong>Challenges:</strong>
              </p>
              <ul>
                <li>
                  Easily distracted by surroundings (e.g., pedestrians, signs)
                </li>
                <li>
                  Struggles with multi-tasking (e.g., checking mirrors while
                  driving)
                </li>
                <li>
                  Impulsive decision-making (e.g., braking too late, rushing
                  junctions)
                </li>
              </ul>

              <p>
                <FaLightbulb className={styles.adi4firsticon} />{" "}
                <strong>How to Adapt Lessons:</strong>
              </p>
              <ul>
                <li>
                  <FaCheckCircle className={styles.adi4firstcheckIcon} /> Keep
                  lessons short and structured to maintain focus.
                </li>
                <li>
                  <FaCheckCircle className={styles.adi4firstcheckIcon} /> Use
                  clear, direct instructions without overwhelming information
                </li>
                <li>
                  <FaCheckCircle className={styles.adi4firstcheckIcon} />{" "}
                  Encourag regular breaks and hands-on practice
                </li>
              </ul>

              <p className={styles.adi4firstexample}>
                <strong>Example:</strong> Instead of saying, “Make sure you
                check your mirrors regularly,” set a reminder like “Every 10
                seconds, check your mirrors.”
              </p>
            </div>
            {/* //////////////////////////////////////////////////////////////////// */}
            <div className={styles.adi4firstcard}>
              <h3 className={styles.adi4firstcardTitle}>
                4. Autism Spectrum Disorder (ASD) (Affects social interaction,
                sensory processing, and routine)
              </h3>
              <p>
                <FaThumbtack className={styles.adi4firsticon} />{" "}
                <strong>Challenges:</strong>
              </p>
              <ul>
                <li>Sensory overload from busy roads, noises, and lights</li>
                <li>
                  Struggles with unpredictable situations (e.g., unexpected lane
                  closures)
                </li>
                <li>
                  Prefers structured routines and may find changing routes
                  stressful
                </li>
              </ul>

              <p>
                <FaLightbulb className={styles.adi4firsticon} />{" "}
                <strong>How to Adapt Lessons:</strong>
              </p>
              <ul>
                <li>
                  <FaCheckCircle className={styles.adi4firstcheckIcon} /> Keep a
                  consistent lesson structure and avoid sudden changes.
                </li>
                <li>
                  <FaCheckCircle className={styles.adi4firstcheckIcon} /> Use
                  simple, clear instructions with no ambiguity.
                </li>
                <li>
                  <FaCheckCircle className={styles.adi4firstcheckIcon} /> Allow
                  the learner to practice in quieter areas before progressing to
                  busier roads.
                </li>
              </ul>

              <p className={styles.adi4firstexample}>
                <strong>Example:</strong> If a learner finds roundabouts
                overwhelming, practice in quiet area first, then gradually build
                confidence in real traffic.
              </p>
            </div>
            {/* ////////////////////////////////////////////// */}
            <div className={styles.adi4firstcard}>
              <h3 className={styles.adi4firstcardTitle}>
                5. Learning Difficulties (General Processing Delays)
              </h3>
              <p>
                <FaThumbtack className={styles.adi4firsticon} />{" "}
                <strong>Challenges:</strong>
              </p>
              <ul>
                <li>Slower to absorb and apply driving skills</li>
                <li>May need repeated practice to remember key tasks</li>
                <li>Difficulty with quick decision-making</li>
              </ul>

              <p>
                <FaLightbulb className={styles.adi4firsticon} />{" "}
                <strong>How to Adapt Lessons:</strong>
              </p>
              <ul>
                <li>
                  <FaCheckCircle className={styles.adi4firstcheckIcon} /> Use
                  repetition and allow extra time to practice key skills.
                </li>
                <li>
                  <FaCheckCircle className={styles.adi4firstcheckIcon} /> Avoid
                  information overload—teach one concept at a time.
                </li>
                <li>
                  <FaCheckCircle className={styles.adi4firstcheckIcon} /> Offer
                  visual and hands-on learning rather than relying on
                  explanations alone.
                </li>
              </ul>

              <p className={styles.adi4firstexample}>
                <strong>Example:</strong> If a learner struggles to remember
                mirror-signal-manoeuvre (MSM), use a mnemonic or hand signals to
                reinforce the habit.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ///////////////////////////////////////////////// */}
      <section className={styles.AdiModuleOneTextArea}>
        {/* ////////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            How might misunderstanding a learner’s behaviour lead to unfair
            treatment or missed teaching opportunities
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
          <p style={{ marginTop: "1rem", textAlign: "center" }}>
            Understanding learning disabilities allows instructors to
            personalise lessons, reduce anxiety, and boost learner confidence.
            The goal isn’t just to pass a test—it’s to make sure every learner
            becomes a safe and capable driver.
          </p>
        </div>
      </section>
      {/* ////////////////////////////////////////////////////// */}
      <section className={styles.adi4section2}>
        <div className={styles.adi4secondcontainer}>
          <motion.h1
            className={styles.adi4secondheading}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            How Can You Support Your Learner?
          </motion.h1>
          <motion.p
            className={styles.adi4secondsubheading}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            When working with each client, it's essential to understand how you
            can best support their learning needs. There’s no one-size-fits-all
            approach to coaching and driving instruction.
          </motion.p>
          <motion.p
            className={styles.adi4secondsubheading}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Think about how you personally prefer to learn. Do you like reading
            instructions and books, watching video tutorials, or diving in and
            learning through hands-on experience? Take a moment to reflect on
            your own learning style.
          </motion.p>
          <motion.p
            className={styles.adi4secondsubheading}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            One of the best ways to help your learner is by asking them directly
            how they learn best and what kind of support they need from you. If
            they’re unsure, encourage them to complete a VARK Questionnaire.
          </motion.p>
          <motion.div
            className={styles.adi4secondvarkInfo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ marginBottom: "2rem" }}
          >
            <HelpCircle size={36} color="#87CEFA" />
            <p>
              The VARK Questionnaire is a tool designed to identify an
              individual's preferred learning style. "VARK" stands for
              <strong> Visual, Auditory, Reading/Writing, Kinesthetic </strong>
              the four primary learning styles. Understanding their preferences
              will allow you to tailor your teaching methods to suit their
              needs, enhancing their learning experience.
            </p>
          </motion.div>

          <div className={styles.adi4secondcardGrid}>
            {learningStyles.map((style, index) => (
              <motion.div
                key={index}
                className={styles.adi4secondcard}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={styles.adi4secondicon}>{style.icon}</div>
                <h3>{style.title}</h3>
                <p>{style.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className={styles.adi4secondvarkInfo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <HelpCircle size={36} color="#87CEFA" />
            <p>
              By completing the VARK questionnaire, individuals can identify
              their dominant learning style(s), which helps instructors tailor
              lessons to suit the learner’s preferences, improving understanding
              and retention of information.
            </p>
          </motion.div>
          <p
            style={{
              textAlign: "center",
              marginTop: "2rem",
              color: "#cccccc",
              fontSize: "1.2rem",
              textDecoration: "none",
            }}
          >
            Have a go yourself{" "}
            <a
              target="_blank"
              href="https://vark-learn.com/the-vark-questionnaire/"
              style={{
                color: "rgb(50, 228, 255)",
                textDecoration: "none",
              }}
            >
              Here
            </a>
          </p>
        </div>
      </section>
      {/* //////////////////////////////////////////////// */}
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
      {/* /////////////////////////////// */}
      <div className={styles.quizStartDiv}>
        <section className={styles.startQuizSection}>
          <h1>Start Quiz</h1>
          <h3>15 Questions</h3>
          <p>
            Here’s a quick summary quiz to test your understanding of of Part 3:
            Learning Needs and Styles the lesson before setting off
          </p>
          <Link to="/takequizCatName/learning-styles">
            {" "}
            <button>Start Quiz</button>
          </Link>
        </section>
      </div>
    </div>
  );
}

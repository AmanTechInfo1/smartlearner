import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Adi3Module12() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Giving Feedback that Drives Learning Forward"; // First part before "Driving"

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

  //   ///////////////////////////////////////////////////////////////////
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;

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
        `notepadTexts1Part3page12_${userId}`,
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
      `notepadTexts1Part3page12_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(
      `notepadTexts1Part3page12_${userId}`
    );
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  //   ///////////////////////////////////////////////////////////////
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
        `notepadTexts2Part3page12_${userId}`,
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
      `notepadTexts2Part3page12_${userId}`,
      JSON.stringify(updatedTexts2)
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page12_${userId}`
    );
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  //   ////////////////////////////////////////////////////////////
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
        `notepadTexts3Part3page12_${userId}`,
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
      `notepadTexts3Part3page12_${userId}`,
      JSON.stringify(updatedTexts3)
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(
      `notepadTexts3Part3page12_${userId}`
    );
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  ///////////////////////////////////////////////////////////////////////
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
        `notepadTexts4Part3page12_${userId}`,
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
      `notepadTexts4Part3page12_${userId}`,
      JSON.stringify(updatedTexts4)
    );
  };

  useEffect(() => {
    const savedData4 = localStorage.getItem(
      `notepadTexts4Part3page12_${userId}`
    );
    if (savedData4) {
      setSavedTexts4(JSON.parse(savedData4));
    }
  }, []);

  //   ////////////////////////////////////////////////////////

  return (
    <div className={styles.AdiModuleOnecontainer}>
      <section className={styles.AdiModuleOneheader}>
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>

      {/* ////////////////////////////////////////////////////// */}
      <section className={styles.AdiModuleOneTextArea}>
        {/* ////////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            Why do you think receiving feedback during a driving lesson is
            important, and how might it help you improve as a instructor
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
      <section className={styles.AdiModuleOneTextArea}>
        <h2>🌀 Feedforward, Not Just Feedback</h2>
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            How do you think an instructor can give feedback in a way that
            builds your confidence rather than knocks it?"
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
      {/* /////////////////////////////////////////////////////// */}
      <div className={styles.Adi3Module121stcontainer}>
        <section className={styles.Adi3Module121sttoastSection}>
          <h2>🥪 Take something as simple as making toast:</h2>
          <p>You see the toast pop up.</p>
          <p>You hear the familiar click.</p>
          <p>You smell if it's burned.</p>
          <p>You touch the hot edge.</p>
          <p>You taste to check if it’s done just right.</p>
          <p className={styles.Adi3Module121stcompare}>
            Now apply that to something far more complex—like learning to drive.
          </p>
        </section>

        <section className={styles.Adi3Module121stsensorySection}>
          <h2>🚗 Sensory Feedback in Driving</h2>
          <p className={styles.Adi3Module121stcompare}>
            When learning to drive, three senses are especially critical:
          </p>
          <ul>
            <li>
              <span className={styles.Adi3Module121stsense}>👀 Sight</span> –
              mirrors, road signs, vehicle positioning
            </li>
            <li>
              <span className={styles.Adi3Module121stsense}>👂 Sound</span> –
              engine noise, sirens, tire feedback
            </li>
            <li>
              <span className={styles.Adi3Module121stsense}>✋ Touch</span> –
              steering feel, brake pressure, clutch resistance
            </li>
          </ul>
          <p>
            Occasionally, other senses come into play—like smell, if a learner
            rides the clutch too hard. The challenge for new drivers is not only
            interpreting this feedback, but knowing what it means and how to
            respond.
          </p>
        </section>

        <section className={styles.Adi3Module121stguidanceSection}>
          <h2>🧑‍🏫 Instructor's Role</h2>
          <p>
            This is where instructor guidance becomes vital. Your job is to help
            learners make sense of what they’re experiencing. For example:
          </p>
          <div className={styles.Adi3Module121stexamples}>
            <p className={styles.Adi3Module121stcorrect}>
              ✅ “That’s the smooth feel we’re looking for in a gear change.”
            </p>
            <p className={styles.Adi3Module121stincorrect}>
              ❌ “Taking that roundabout at that speed? Let’s break that down.”
            </p>
          </div>
        </section>

        <section className={styles.Adi3Module121stbrainSection}>
          <h2>🧠 Filing the Experience: How the Brain categories Driving </h2>
          <p>
            The brain works like a filing cabinet, storing experiences based on
            the emotions and outcomes associated with them.
          </p>
          <p>
            For instance, if a learner takes a corner too quickly but feels
            exhilarated rather than concerned, they might subconsciously file
            that behaviour as “fun” or “harmless”—even if it was unsafe. Without
            constructive feedback, that habit can be repeated and reinforced.
          </p>
          <p>
            <span className={styles.Adi3Module121stintercept}>
              Your role is to intercept that filing process: 🚦
            </span>
          </p>
          <ul>
            <li>Help reframe experiences.</li>
            <li>Replace bad habits with safe, repeatable behaviors.</li>
          </ul>
        </section>
      </div>
      <section className={styles.AdiModuleOneTextArea}>
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            Why do you think it’s important to reflect on how a driving
            situation made you feel, and how might those emotions affect your
            future driving decisions?
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
      {/* ///////////////////////////////////////////////////////////// */}
      <div className={styles.adi3Module12secondcontainer}>
        <div className={styles.adi3Module12secondtitle}>
          <h1>🧠 NLP and Driving Triggers: Creating Emotional Roadmaps</h1>
        </div>

        <div className={styles.adi3Module12secondcontent}>
          <div style={{ maxWidth: "1640px", margin: "1rem auto" }}>
            <div className={styles.adisix2ndintro}>
              <p style={{ marginBottom: "0px" }}>
                Neuro-Linguistic Programming (NLP) offers useful insights.
                Emotional{" "}
                <span className={styles.adi3Module12secondemphasis}>
                  “flags”
                </span>{" "}
                often attach themselves to certain roads or scenarios:
              </p>
            </div>
          </div>

          <div className={styles.adi3Module12secondflags}>
            <div className={styles.adi3Module12secondgreenFlag}>
              <span>Green Flags:</span> Confidence, comfort, and success.
            </div>
            <div className={styles.adi3Module12secondredFlag}>
              <span>Red Flags:</span> Stress, past mistakes, or uncertainty.
            </div>
          </div>

          <section className={styles.Adi3Module121stbrainSection}>
            <p>
              If a learner tightens their grip near a particular bend, they may
              be replaying a previous scare—even if they handled it fine. As the
              instructor, you can help overwrite those red flags with positive
              experiences.
            </p>
            <p>
              Example: “Jake, that bend felt tricky last time. What can we do
              differently now to make it feel more controlled?”
            </p>

            <p>
              Repetition, reassurance, and reflection help turn past tension
              into future confidence.
            </p>
          </section>

          <section className={styles.Adi3Module121stsensorySection}>
            <h2>⏱️ Timing Matters: Proactive vs. Reactive Feedback</h2>
            <p className={styles.Adi3Module121stcompare}>
              Feedback is most effective when it precedes a potential error—not
              just follows one. Proactive questions might include:
            </p>
            <ul>
              <li>“What speed feels right for this bend?”</li>
              <li>“Is this roundabout tighter than the last?”</li>
              <li>“How early can you spot the pedestrian crossing?”</li>
            </ul>
            <p>
              This encourages decision-making before mistakes occur. However, if
              a safe mistake does happen, it can become a valuable teaching
              moment.
            </p>
            <p>
              <strong>Prompt for reflection:</strong> What are the potential
              risks if a learner doesn’t receive timely feedback after an error?
            </p>
          </section>

          {/* /////////////////////// */}

          <section className={styles.Adi3Module121stsensorySection}>
            <h2>🗣 Feedback as Dialogue, Not Criticism</h2>
            <p className={styles.Adi3Module121stcompare}>
              Feedback should be a conversation, not a correction. Compare these
              two approaches:
            </p>
            <div className={styles.adi3Module12secondfeedbackExample}>
              <div className={styles.adi3Module12secondoldFeedback}>
                🚫 “You forgot to signal.”
              </div>
              <div className={styles.adi3Module12secondnewFeedback}>
                ✅ “How did that last turn feel to you?”
              </div>
            </div>

            <p className={styles.Adi3Module121stcompare}>
              Coach-led feedback builds self-awareness and accountability, which
              are essential for safe, independent driving.
            </p>
          </section>
        </div>
      </div>
      {/* ////////////////////////////////////////////////// */}

      <section className={styles.AdiModuleOneTextArea}>
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            Why might asking questions before a driving decision help someone
            learn more effectively than giving feedback after a mistake
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

      {/* ////////////////////////////////////////////////// */}
      <div className={styles.adi3Module3rdcontainer}>
        <h1 className={styles.adi3Module3rdheading}>
          Celebrate Success, Not Just Mistakes
        </h1>
        <p className={styles.adi3Module3rdtext} style={{textAlign:'center'}}>
          Avoid making “pulling over” synonymous with criticism. Stop to
          highlight progress, reflect on a tricky junction, or simply allow for
          a reset.
        </p>

        <div className={styles.adi3Module3rdencouragement}>
          <p className={styles.adi3Module3rdquote}>
            “That was a great response to the cyclist—calm, patient, and
            well-timed. What did you notice early on that helped you react like
            that?”
          </p>
          <p className={styles.adi3Module3rdprompt}>
            What kind of language can reinforce good behaviour while still
            promoting improvement?
          </p>
        </div>

        <div className={styles.adi3Module3rdpowerOfMistakes}>
          <h2 className={styles.adi3Module3rdsubHeading}>
            💥 The Power of Safe Mistakes
          </h2>
          <p className={styles.adi3Module3rdtext}>
            Sometimes, the best way for a learner to truly understand is to
            experience a controlled mistake:
            <ul>
              <li>Let them stall in a quiet car park.</li>
              <li>Let them choose the wrong gear and feel the hesitation.</li>
              <li>
                Let them roll back slightly on a hill to understand clutch bite.
              </li>
            </ul>
            These are powerful lessons that build resilience and readiness for
            real-world driving.
          </p>

          <p className={styles.adi3Module3rdprompt}>
            Describe a situation where allowing a learner to make a mistake
            could improve their driving long-term. 🚀
          </p>
        </div>

        <div className={styles.adi3Module3rdfeedForward}>
          <h2 className={styles.adi3Module3rdsubHeading}>
            From Feedback to Feedforward
          </h2>
          <p className={styles.adi3Module3rdquote}>
            “It’s not about what went wrong. It’s about what we do next.”
          </p>
          <p className={styles.adi3Module3rdtext}>
            Effective feedback is feedforward—a springboard for future
            improvement. You’re not just helping a learner pass a test. You’re
            developing a reflective, responsible, and confident driver for life.
          </p>
        </div>
      </div>


       <div className={styles.adiLastNextbtn}>
                    <Link to="/adapting-lessons">
                      {" "}
                      <button className={styles.adinextbtns}>Next Page</button>
                    </Link>
                  </div>
      {/* ///////////////////// */}

       <div className={styles.quizStartDiv}>
              <section className={styles.startQuizSection}>
                <h1>Start Quiz</h1>
                <h3>15 Questions</h3>
                <p>
                  Here’s a quick summary quiz to test your understanding of of Part 3:
                  giving feedback before setting off
                </p>
                <Link to="/takequizCatName/giving-feedback">
                  {" "}
                  <button>Start Quiz</button>
                </Link>
              </section>
            </div>

    </div>
  );
}

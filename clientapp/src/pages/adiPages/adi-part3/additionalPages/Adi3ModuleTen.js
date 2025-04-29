import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Adi3ModuleTen() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "client centred learning"; // First part before "Driving"

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

  //   ////////////////////////////////////////////////////
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
        `notepadTexts1Part3page10_${userId}`,
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
      `notepadTexts1Part3page10_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(
      `notepadTexts1Part3page10_${userId}`
    );
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);
  //   //////////////////////////////////////////////////////////////

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
        `notepadTexts2Part3page10_${userId}`,
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
      `notepadTexts2Part3page10_${userId}`,
      JSON.stringify(updatedTexts2)
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page10_${userId}`
    );
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  //   ///////////////////////////////////////////////////////////////////
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
        `notepadTexts3Part3page10_${userId}`,
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
      `notepadTexts3Part3page10_${userId}`,
      JSON.stringify(updatedTexts3)
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(
      `notepadTexts3Part3page10_${userId}`
    );
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  //   ////////////////////////////////////////////////////////////////////

  const features = [
    {
      icon: "🎯",
      title: "Shared Goal Setting",
      description: "Agree on objectives together",
    },
    {
      icon: "🧏‍♂️",
      title: "Active Listening",
      description: "Listen to the pupil’s needs, ideas, concerns",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Work together, not top-down teaching",
    },
    {
      icon: "🎯",
      title: "Personalised Approach",
      description: "Adjust teaching based on learner’s progress",
    },
    {
      icon: "💡",
      title: "Guided Discovery",
      description: "Encourage thinking over giving answers",
    },
  ];

  //   //////////////////////////////////////////////////

  return (
    <div className={styles.AdiModuleOnecontainer}>
      <section className={styles.AdiModuleOneheader}>
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>

      {/* //////////////////////////////////////////////////// */}
      <section className={styles.AdiModuleOneTextArea}>
        {/* ////////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>What do you think client centred learning is?</label>
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
      <div className={styles.adi10Module1stcontainer}>
        <h1 className={styles.adi10Module1stheading}>
          Understanding Client-Centred Learning
        </h1>
        <div className={styles.adi10Module1stcard}>
          <p className={styles.adi10Module1sttext}>
            Client-Centred Learning (CCL) is an educational approach that
            prioritises the learner's needs, goals, and preferences throughout
            the learning journey. In the context of the ADI Part 3 examination,
            it refers to how well a driving instructor can tailor each lesson to
            the unique abilities and learning style of their pupil, with the
            ultimate aim of developing independent, safe, and thoughtful
            drivers. <br />
            Unlike traditional teaching models that focus heavily on
            instructor-led direction, CCL encourages a more collaborative and
            reflective process. The instructor works alongside the learner to
            build understanding, set realistic goals, and foster the ability to
            self-assess and take responsibility for progress.
          </p>
        </div>

        <h2 className={styles.adi10Module1stsubheading}>
          Client-Centred Learning in Practice
        </h2>
        <div className={styles.adi10Module1stcard}>
          <p className={styles.adi10Module1sttext}>
            During the ADI Part 3 test, the DVSA examiner assesses your ability
            to deliver lessons that are aligned with client-centred principles.
            This includes the way you plan, deliver, adapt, and reflect upon the
            lesson in collaboration with the learner. <br />
            At the start of the lesson, the learner should be involved in goal
            setting. This means that instead of the instructor deciding what
            will be taught, the session should begin with a conversation that
            explores what the learner wants to achieve, what they feel confident
            in, and where they think they need further support.
            <br />
            This open dialogue forms the basis of a mutually agreed lesson plan.
            The instructor must then guide the pupil toward achieving their
            goals by offering support that matches the learner’s current stage
            of development. The level of instruction and intervention should
            vary according to the pupil’s ability, ensuring they are neither
            overwhelmed nor under-challenged.
          </p>
        </div>

        <h2 className={styles.adi10Module1stsubheading}>
          Promoting Reflection and Independent Thinking
        </h2>
        <div className={styles.adi10Module1stcard}>
          <p className={styles.adi10Module1sttext}>
            An essential aspect of CCL is the encouragement of self-reflection.
            Rather than simply telling a learner what they did right or wrong,
            instructors should invite the pupil to consider their own
            performance. For example, after completing a manoeuvre, ask, <br />
            <span className={styles.adi10Module1stquote}>
              “How do you think that went?”
            </span>{" "}
            or
            <span className={styles.adi10Module1stquote}>
              “What would you do differently next time?”
            </span>
          </p>
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////// */}
      <section className={styles.AdiModuleOneTextArea}>
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            Write down a few more questions you could ask when your pupil makes
            a mistake
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
      <div className={styles.adi10Module1stcontainer}>
        <h2 className={styles.adi10Module1stsubheading}>
          Adapting to the Learner’s Needs
        </h2>
        <div className={styles.adi10Module1stcard}>
          <p className={styles.adi10Module1sttext}>
            Client-Centred Learning requires the instructor to remain adaptable.
            This means recognising when a learner is struggling or anxious and
            adjusting the lesson accordingly. The instructor should be able to
            read verbal and non-verbal cues—such as tone of voice or body
            language—and respond with empathy and encouragement. <br />
            For example, if a pupil appears nervous about joining a roundabout,
            rather than pushing them through it, the instructor might ask, “What
            part of this situation make you feel usure? "or" would you like to
            talk through what we are trying to do before trying again ?"
            <br />
            This tailored, supportive method ensures that learners feel safe and
            respected, increasing their engagement and confidence.
          </p>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////// */}
      <section className={styles.AdiModuleOneTextArea}>
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            How do you think you might recognise when a learner is feeling
            unsure or anxious during a lesson, and how would you adapt your
            approach in that situation?
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
        {/* ///////////////////////////////////////////////////// */}
      </section>

      {/* /////////////////////////////////////////////// */}

      <div className={styles.adi10Module1stcontainer}>
        <h2 className={styles.adi10Module1stsubheading}>
          Shared Responsibility and Learning Outcomes
        </h2>
        <div className={styles.adi10Module1stcard}>
          <p className={styles.adi10Module1sttext}>
            A final component of client-centred instruction is the concept of
            shared responsibility. While the instructor is the expert, the
            learner is actively involved in shaping the learning process.
            Together, they identify objectives, evaluate progress, and make
            decisions about when and how to increase levels of independence.{" "}
            <br />
            For example, if a pupil is beginning to grasp the skill of parallel
            parking, the instructor might say, “You’ve done a few great attempts
            with my help—do you feel ready to try one more with less input from
            me?” This kind of dialogue promotes autonomy and reinforces trust in
            the pupil's own abilities.
            <br />
            At the conclusion of the lesson, the instructor should invite the
            learner to reflect on what they’ve achieved, what could be improved,
            and what they’d like to focus on next time. This ongoing cycle of
            discussion and reflection is central to the CCL model and is a key
            area of focus in the Part 3 marking criteria.
            <br />
            Client-Centred Learning is not just a teaching method—it’s a
            mindset. For driving instructors preparing for the ADI Part 3,
            understanding and applying CCL is vital. It enables you to deliver
            personalised, effective lessons that empower learners to take
            ownership of their progress and prepare them for a lifetime of safe
            driving.
            <br />
            By embedding CCL principles into your lesson planning,
            communication, feedback, and goal setting, you demonstrate your
            ability to develop competent and confident drivers—exactly what the
            DVSA is looking for in a qualified ADI.
          </p>
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////////// */}
      <div className={styles.adi10Module2ndcontainer}>
        <h1 className={styles.adi10Module2ndheading}>
          Quick Recap: What Makes a Lesson Client-Centred?
        </h1>
        <div className={styles.adi10Module2ndcardsWrapper}>
          {features.map((feature, index) => (
            <div key={index} className={styles.adi10Module2ndcard}>
              <div className={styles.adi10Module2ndicon}>{feature.icon}</div>
              <h2 className={styles.adi10Module2ndtitle}>{feature.title}</h2>
              <p className={styles.adi10Module2nddescription}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* /////////////////////////////////////// */}

      <div className={styles.quizStartDiv}>
        <section className={styles.startQuizSection}>
          <h1>Start Quiz</h1>
          <h3>15 Questions</h3>
          <p>
            Here’s a quick summary quiz to test your understanding of of Part 3:
            Client Centred Learning the lesson before setting off
          </p>
          <Link to="/takequizCatName/client-centred-learning">
            {" "}
            <button>Start Quiz</button>
          </Link>
        </section>
      </div>

      {/* /////////////////////////////////////////// */}
    </div>
  );
}

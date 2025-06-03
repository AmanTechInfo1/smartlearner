import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import backgroundImage from "../../../../assets/images/interventionbanner.jpg";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Adi3Module15() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Intervention"; // First part before "Driving"

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
        `notepadTexts1Part3page15_${userId}`,
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
      `notepadTexts1Part3page15_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(
      `notepadTexts1Part3page15_${userId}`
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
        `notepadTexts2Part3page15_${userId}`,
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
      `notepadTexts2Part3page15_${userId}`,
      JSON.stringify(updatedTexts2)
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page15_${userId}`
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
        `notepadTexts3Part3page15_${userId}`,
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
      `notepadTexts3Part3page15_${userId}`,
      JSON.stringify(updatedTexts3)
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(
      `notepadTexts3Part3page15_${userId}`
    );
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  //   ////////////////////////////////////////////////////////////////////////////////

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

      {/* ////////////////////////////////////////////////////// */}
      <div className={styles.adi3module151stcontainer}>
        <div className={styles.adi3module151stheader}>
          <h1>When and Why Should a Driving Instructor Intervene?</h1>
          <p>
            Intervention, whether verbal or physical, is a critical tool for
            driving instructors—but it must be applied with care, precision, and
            purpose. A well-timed, necessary intervention can protect both
            learner and public safety. However, overusing it, or stepping in
            unnecessarily, can undermine the learner’s confidence, hinder
            progress, and damage trust in the instructor-learner relationship.
          </p>
        </div>

        <div className={styles.adi3module151stsection}>
          <h2>🚦 Importance of Balanced Intervention</h2>
          <p>
            How would you feel if your partner, son daughter or loved one had
            paid £35+ for an hour lesson with an instructor that didn’t let them
            drive? The instructor used the brakes for them, changed the gears
            for them and constantly had one hand on the wheel. When asked what
            they learned, they said nothing.
          </p>
          <p className={styles.adi3module151sthighlight}>
            This is what happens when you over intervene, controlling everything
            for the learner.
          </p>
        </div>
      </div>
      <section className={styles.AdiModuleOneTextArea}>
        {/* ////////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            What do you think is meant by Risk Management and Responsibility?
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

      <div className={styles.adi3module151stcontainer}>
        <div className={styles.adi3module151stsection}>
          <h2>
            ✋ Physical vs Verbal Intervention: Both Are Powerful, But Use
            Wisely
          </h2>
          <p>
            Physical intervention—like using the dual controls or grabbing the
            steering wheel—should be a last resort and always followed by clear
            explanation. If you do need to step in physically, make your learner
            aware of it immediately or as soon as it’s safe to do so. Otherwise,
            it may confuse them or give a false impression of their ability.
          </p>
          <p className={styles.adi3module151sttip}>
            💡 Golden Rule: Intervene only when necessary, and always with clear
            instruction and reasoning.
          </p>
        </div>

        <div className={styles.adi3module151stsection}>
          <h2>🧠 Understanding Context: When is Intervention Justified?</h2>
          <p>
            <strong>Example: The "Empty Road" Left Turn</strong>
            <br />
            You’ve agreed your learner is driving independently. They approach a
            left turn perfectly—except they forget to indicate.
          </p>
          <ul>
            <li>You verbally prompt: “What signal should you use?”</li>
            <li>You activate the indicator yourself.</li>
          </ul>
        </div>
      </div>
      <section className={styles.AdiModuleOneTextArea}>
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            Write down how you would manage responsibility and what potential
            risks there could be.
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
      <div style={{ maxWidth: "1640px", margin: "1rem auto" }}>
        <div className={styles.adisix2ndintro}>
          <p>
            Once an answer has been submitted, reveal this text below <br />
            You could have allowed the action to play out and used it as a
            reflective moment afterward. The learner might even self-identify
            the missed signal. Or they may have consciously decided it wasn’t
            needed due to the absence of other road users. That opens up
            valuable discussion about judgment, risk, and situational awareness.
          </p>
        </div>
      </div>

      <div className={styles.adi3module151stcontainer}>
        <div className={styles.adi3module151stsection}>
          <p>
            <strong>Example 2: The Busy Junction Signal Miss</strong>
            <br />
            Same scenario—independent driving, missed signal—but this time:
          </p>
          <ul>
            <li>Oncoming traffic.</li>
            <li>Vehicles behind and at the junction.</li>
          </ul>
        </div>
      </div>
      <section className={styles.AdiModuleOneTextArea}>
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            Write your thoughts about how you would physically or verbally
            intervene if needed on a lesson, how would you do it and what would
            you say to ensure it is communicated correctly and effectively?
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
      {/* ///////////////////////////////////////////////////////////////// */}
      <div className={styles.adi3Module153rdcontainer}>
        <h1 className={styles.adi3Module153rdmainHeading}>
          Mastering Intervention and Communication
        </h1>

        <div className={styles.adi3Module153rdsection}>
          <p className={styles.adi3Module153rdtext}>
            Here, a{" "}
            <span className={styles.adi3Module153rdhighlight}>
              Missed signals
            </span>{" "}
            creates risk. Intervention—at least verbal—is warranted. If the
            learner fails to react,
            <span className={styles.adi3Module153rdhighlight}>
              - physical intervention
            </span>{" "}
            may be essential.
          </p>
          <p className={styles.adi3Module153rdtext}>
            This scenario justifies a deeper discussion
            <span className={styles.adi3Module153rdhighlight}>
              - post-manoeuvre
            </span>{" "}
            about{" "}
            <span className={styles.adi3Module153rdhighlight}>
              communication
            </span>{" "}
            with other road users and why timing and visibility matter.
          </p>
          <p className={styles.adi3Module153rdtext}>
            Many instructors feel they must talk constantly to demonstrate
            value. But silence can be golden. Excessive instruction can lead to
            cognitive overload, especially in the intense environment of a
            moving vehicle.
          </p>
          <p>
            Sometimes, allowing space and silence allows learners to process,
            reflect, and act independently. It sends a powerful message:{" "}
            <span className={styles.adi3Module153rdhighlight}>
              {" "}
              “You’ve got this.”
            </span>
          </p>
        </div>

        <div className={styles.adi3Module153rdsection}>
          <h2 className={styles.adi3Module153rdsubHeading}>
            What Are You Nonverbally Communicating?
          </h2>
          <p className={styles.adi3Module153rdtext}>
            Learners are highly tuned in to your cues. If you're hovering over
            the pedals or inching your hand toward the wheel,
            <span className={styles.adi3Module153rdhighlight}>
              they may assume you expect something to go wrong.
            </span>
            This creates tension and undermines their confidence,
            <span className={styles.adi3Module153rdquote}>
              - even if you never intervene.
            </span>
          </p>
          <p className={styles.adi3Module153rdtext}>
            Show calmness and trust through your posture and gestures.{" "}
            <span className={styles.adi3Module153rdhighlight}>
              {" "}
              Let the learner lead,{" "}
            </span>{" "}
            and step in only when risk demands it.
          </p>
        </div>

        <div className={styles.adi3Module153rdsection}>
          <h2 className={styles.adi3Module153rdsubHeading}>
            Getting the Balance Right: Intervention as a Learning Tool
          </h2>
          <p className={styles.adi3Module153rdtext}>
            The goal is{" "}
            <span className={styles.adi3Module153rdhighlight}>
              minimal, meaningful intervention.
            </span>
            Every time you step in unnecessarily, you set your pupil
            back—sometimes literally. But{" "}
            <span className={styles.adi3Module153rdhighlight}>
              strategic, justified intervention
            </span>{" "}
            followed by a reflective conversation enhances their understanding
            and growth.
          </p>
        </div>

        <div className={styles.adi3Module153rdsection}>
          <h2 className={styles.adi3Module153rdsubHeading}>Key principles:</h2>

          <ul className={styles.adi3Module153rdlist}>
            <li>Use verbal cues first.</li>
            <li>Explain physical interventions immediately after.</li>
            <li>Adjust based on your pupil’s capabilities.</li>
          </ul>
        </div>

        <div className={styles.adi3Module153rdsection}>
          <h2 className={styles.adi3Module153rdsubHeading}>
            Teach the "What If" Mindset
          </h2>
          <p className={styles.adi3Module153rdtext}>
            Help your learners think beyond the moment. What if the brakes
            failed? What if someone emerged suddenly from a hidden junction?
          </p>
          <p>
            Many young drivers operate with a sense of invincibility. Fostering
            realistic risk awareness—without fear-mongering—instils safer
            driving habits.
          </p>
          <p>
            Share personal experiences if relevant. For example, I once
            approached a motorway roundabout at 70mph, only to discover complete
            brake failure. Thanks to sheer luck, I avoided disaster—but the
            memory stays with me, and I use it to highlight why proactive risk
            management matters.
          </p>
        </div>

        <div className={styles.adi3Module153rdsection}>
          <h2 className={styles.adi3Module153rdsubHeading}>
            Promote Safe, Independent Learning
          </h2>
          <p className={styles.adi3Module153rdtext}>
            Interventions may also include non-driving elements—like switching
            on lights or demisting windows. In early stages, it’s fine to
            assist. But always transition those tasks back to the learner as
            soon as they’re ready.
          </p>
          <p>
            Your role isn’t just to teach driving. It’s to build a safe,
            self-aware driver who takes responsibility confidently. That means
            knowing{" "}
            <span className={styles.adi3Module153rdhighlight}>
              {" "}
              when to step in, and when to step back.
            </span>{" "}
          </p>
          <p>
            Your interventions—whether verbal, physical, or silent—should always
            serve one goal:{" "}
            <span className={styles.adi3Module153rdhighlight}>
              {" "}
              progressive independence within a safe learning environment.
            </span>
          </p>
        </div>
      </div>

      <div className={styles.adiLastNextbtn}>
        <Link to="/trainee-badge">
          {" "}
          <button className={styles.adinextbtns}>Next Page</button>
        </Link>
      </div>

      {/* ///////////////////////////////////////////////////////// */}
      <div className={styles.quizStartDiv}>
        <section className={styles.startQuizSection}>
          <h1>Start Quiz</h1>
          <h3>15 Questions</h3>
          <p>
            Here’s a quick summary quiz to test your understanding of of Part 3:
            intervention the lesson before setting off
          </p>
          <Link to="/takequizCatName/intervention">
            {" "}
            <button>Start Quiz</button>
          </Link>
        </section>
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

import { motion } from "framer-motion";

export default function Adi3ModuleNine() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Giving Route Directions"; // First part before "Driving"

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

  //   ////////////////////////////////////////////////////////////////////////////////
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
        `notepadTexts1Part3page9_${userId}`,
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
      `notepadTexts1Part3page9_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTexts1Part3page9_${userId}`);
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
        `notepadTexts2Part3page9_${userId}`,
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
      `notepadTexts2Part3page9_${userId}`,
      JSON.stringify(updatedTexts2)
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page9_${userId}`
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
        `notepadTexts3Part3page9_${userId}`,
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
      `notepadTexts3Part3page9_${userId}`,
      JSON.stringify(updatedTexts3)
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(
      `notepadTexts3Part3page9_${userId}`
    );
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  //   ////////////////////////////////////////////////////////
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
        `notepadTexts4Part3page9_${userId}`,
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
      `notepadTexts4Part3page9_${userId}`,
      JSON.stringify(updatedTexts4)
    );
  };

  useEffect(() => {
    const savedData4 = localStorage.getItem(
      `notepadTexts4Part3page9_${userId}`
    );
    if (savedData4) {
      setSavedTexts4(JSON.parse(savedData4));
    }
  }, []);
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
      {/* ///////////////////////////////////// */}
      <div className={styles.adi3Nine1stcontainer}>
        <h1 className={styles.adi3Nine1stheading}>
          Are Your Directions <span>Crystal Clear?</span>
        </h1>
        <h2 className={styles.adi3Nine1stsubHeading}>
          Giving Instructions That Actually Land!
        </h2>
        <p className={styles.adi3Nine1stparagraph}>
          Let’s be honest—you didn’t just hop into a car one day and become a
          driving pro overnight. You’ve probably got years of experience behind
          the wheel. You can juggle traffic, tunes, weather, maybe even sip a
          coffee (not recommended), and still make it to your destination.
        </p>
        <p className={styles.adi3Nine1stparagraph}>
          But here’s the thing: your learner can’t do that...{" "}
          <span className={styles.adi3Nine1sthighlight}>yet.</span>
        </p>
        <p className={styles.adi3Nine1stparagraph}>
          They’re not on autopilot like you. They’re not zoning in and out while
          changing radio stations and merging lanes at the same time. Remember
          what it was like when you were learning to drive?
          <span className={styles.adi3Nine1stimportant}>
            {" "}
            Nerve-wracking.
          </span>{" "}
          Everything took 100% of your brainpower. And to top it off, there were
          fewer cars, fewer distractions, and far less complicated road layouts
          back then!
        </p>
        <p className={styles.adi3Nine1stparagraph}>
          Today’s learners are navigating a jungle of cars, tech, sat navs, and
          blinking dashboard lights. So, the instructions they receive from you,
          their instructor, need to be absolutely on point. 🚨
        </p>
        <div className={styles.adi3Nine1struleBox}>
          <span className={styles.adi3Nine1struleEmoji}>🚨</span>
          <span className={styles.adi3Nine1struleText}>
            The Golden Rule:{" "}
            <strong>Clear, Timely, and Unambiguous Instructions</strong>
          </span>
        </div>
      </div>

      {/* ///////////////////////////////////////////////////// */}
      <section className={styles.AdiModuleOneTextArea}>
        {/* ////////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>What do you think is a timely instruction?</label>
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
            As a driving instructor, one of your superpowers is being able to
            guide your learner in a way that builds their confidence, not
            confusion.
          </p>
        </div>
      </div>

      <div className={styles.AdiModuleOneTextBox} style={{ marginTop: "2rem" }}>
        <label>
          How might a vague instruction like 'Turn left' cause confusion during
          a lesson
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
      {/* ////////////////////////////////////////////////////// */}
      <div style={{ maxWidth: "1640px", margin: "1rem auto" }}>
        <div className={styles.adisix2ndintro}>
          <p>
            If you’re vague, too early, too late—or worse, inconsistent—they’re
            going to panic, freeze, or do something unexpected. You’ll go from
            instructor to emergency co-pilot in a heartbeat.
          </p>
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////////// */}
      <div className={styles.adi3Nine2ndcontainer}>
        <h1 className={styles.adi3Nine2ndheading}>
          🔑 Use the ADI Method (Not Just for the Badge!)
        </h1>
        <p className={styles.adi3Nine2ndintro}>
          A brilliant little acronym that stuck with me from my early training
          was <strong>ADI</strong>:
          <br />{" "}
          <span className={styles.adi3Nine2ndhighlight}>
            Alert - Direct - Identify
          </span>
        </p>

        <div className={styles.adi3Nine2ndsection}>
          <h2 className={styles.adi3Nine2ndsubheading}>👋 ALERT</h2>
          <p>Get their attention—use their name!</p>
        </div>

        <div className={styles.adi3Nine2ndsection}>
          <h2 className={styles.adi3Nine2ndsubheading}>🗣 DIRECT</h2>
          <p>Clearly say what you want them to do.</p>
        </div>

        <div className={styles.adi3Nine2ndsection}>
          <h2 className={styles.adi3Nine2ndsubheading}>🧭 IDENTIFY</h2>
          <p>Give them a visual cue so they know where to do it.</p>
        </div>

        <div className={styles.adi3Nine2ndexample}>
          <h3>✅ Example:</h3>
          <p>
            <strong>“Okay, Raj...”</strong> (Alert)
          </p>
          <p>
            <strong>“Take the next road on the left, please.”</strong> (Direct)
          </p>
          <p>
            <strong>“It’s just after the blue car.”</strong> (Identify)
          </p>
          <p>
            This method keeps things flowing and avoids misunderstandings. But
            let’s see how easily it can go sideways.
          </p>
        </div>

        <div className={styles.adi3Nine2ndwarning}>
          <h2>⚠️ Same Words, Different Outcomes</h2>

          <div className={styles.adi3Nine2ndsubsection}>
            <h3>❌ Example 1:</h3>
            <p>“Ok Raj...”</p>
            <p>“Turn left...”</p>
            <p>“At the end of the road.”</p>
            <p className={styles.adi3Nine2ndnote}>
              Wait—what if there’s a turning on the left before the end of the
              road? They might take it! Or worse, turn into someone’s driveway
              😬.
            </p>
          </div>

          <div className={styles.adi3Nine2ndsubsection}>
            <h3>✅ Example 2:</h3>
            <p>“Ok Raj...”</p>
            <p>“At the end of the road...”</p>
            <p>“Turn left.”</p>
            <p className={styles.adi3Nine2ndnote}>
              🎯 See the difference? By saying when first, then what, you let
              the learner mentally prep for the move.
            </p>
          </div>
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////// */}
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
      </section>

      {/* /////////////////////////////////////////////////////// */}
      <div className={styles.adi3Nine2ndcontainer}>
        <div className={styles.adi3Nine2ndsection}>
          <h2>👀 How You Say It Matters</h2>
          <p>
            Face your pupil, watch their expressions, and explain why you'll
            sometimes make eye contact.
          </p>
        </div>

        <div className={styles.adi3Nine2ndsection}>
          <h2>👁 Don't Just Speak—Communicate</h2>
          <p>
            Discuss expectations early on, and always check for understanding to
            avoid mistakes.
          </p>
        </div>
      </div>
      <div className={styles.adi3Nine2ndcontainer}>
        <div className={styles.adi3Nine2ndsection}>
          <h2>🎙 Commentary Driving = Your Secret Weapon</h2>
          <p>
            Practice giving yourself directions while driving alone. Seriously!
            Say them out loud. Get the rhythm, timing, and tone right. Then
            think, how would I phrase that for a learner? <br /> As your pupils
            improve, you can give directions closer to real-time. But early on,
            timing is everything.<br/> Too early = confusion. <br/> Too late = panic. <br/>Just
            right = success.
          </p>
        </div>
      </div>
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

      <div className={styles.adi3Nine2ndcontainer}>
        <div className={styles.adi3Nine2ndbonus}>
          <h2>💡 Bonus Tips for Clear Instruction:</h2>
          <ul>
            <li>Avoid confusing filler words.</li>
            <li>Use gestures wisely—don’t rely solely on them.</li>
            <li>Clarify instructions with landmarks.</li>
            <li>Stay calm, consistent, and adaptable.</li>
          </ul>
        </div>
      </div>

      {/* /////////////////////////////////////////////////////// */}
    </div>
  );
}

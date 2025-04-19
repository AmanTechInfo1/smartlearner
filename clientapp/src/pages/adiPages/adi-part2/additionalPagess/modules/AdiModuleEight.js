import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./AdiModuleOne.module.css";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdiModuleEight() {
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
        `notepadTextspage8_${userId}`,
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
      `notepadTextspage8_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTextspage8_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);
  // ////////////////////////////////////////////////////

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
        `notepadText2spage8_${userId}`,
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
      `notepadText2spage8_${userId}`,
      JSON.stringify(updatedTexts2)
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(`notepadText2spage8_${userId}`);
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  // /////////////////////////////////////////////////////////////
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
        `notepadText3spage8_${userId}`,
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
      `notepadText3spage8_${userId}`,
      JSON.stringify(updatedTexts3)
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(`notepadText3spage8_${userId}`);
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  // ////////////////////////////////////////////////////
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Space in the COAST Method for Advanced Driving"; // First part before "Driving"

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

        {/* /////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextArea}>
          <h2>Mastering Space: The Secret to Smooth and Safe Driving 🚗💨</h2>
        </div>

        {/* ///////////////////////////////////////////////////// */}
        <section className={styles.AdiModuleOneTextArea}>
          <h2>Why Does Space Matter?</h2>
          {/* ////////////////////////////////////////////////////////////// */}
          <div className={styles.AdiModuleOneTextBox}>
            <label>Write your thoughts below</label>
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

        {/* /////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleContentBox}>
          <div className={styles.AdiModuleContentParaBox}>
            <p>
              Imagine you're playing a high-stakes game of chess, but instead of
              pieces on a board, you're surrounded by cars, cyclists,
              pedestrians, and unpredictable road conditions. In this game,
              space is your best friend —it gives you the time to think, the
              room to move, and the control to keep everything running smoothly.
            </p>
          </div>
          <div
            className={styles.AdiModuleContentParaBoxm3}
            style={{ marginTop: "1rem" }}
          >
            <p>
              In advanced driving, space isn’t just about avoiding
              accidents—it’s about staying ahead of the game. The more space you
              manage, the more calm, professional, and in control you’ll look
              behind the wheel. And guess what? Your examiner will definitely
              notice.
            </p>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleContentBox}>
          <h2>Think Fast, React Faster: The Power of Space</h2>
          <div className={styles.AdiModuleContentParaBoxm2}>
            <p>
              Ever been stuck behind someone who slams their brakes at the last
              second? Annoying, right? That’s what happens when drivers don’t
              leave enough space. Keeping a safe distance isn’t just about
              comfort —it’s your buffer zone for reacting to the unexpected.
            </p>
          </div>
          <div
            className={styles.AdiModuleContentParaBoxm3}
            style={{ marginTop: "1rem" }}
          >
            <p>
              More space means more time to react. It cuts down the risk of
              collisions, makes driving less stressful, and keeps everything
              flowing smoothly. Plus, when you're managing space well, you’re
              always ready for what’s next—whether it’s a sudden stop, a merging
              vehicle, or a cyclist swerving into the road.
            </p>
          </div>
        </div>
        {/* //////////////////////////////////////////////////////////// */}
        <section
          className={styles.adisevenhintsSection}
          style={{ background: "linear-gradient(135deg, #037cd2, #000240)" }}
        >
          <div className={styles.adisevenheading}>
            Types of Space You Need to Master
          </div>
          <div className={styles.AdiModuleContentParaBox}>
            <p>
              Not all space is created equal! Here’s where you need to keep your
              distance:
            </p>
          </div>
          <div className={styles.adiseventipBox2}>
            <h3>🚘 Following Distance</h3>
            <p>
              If you’re too close to the car in front, you’re asking for
              trouble. Use the 2-second rule in good weather— double it when the
              roads are wet. That means picking a fixed point ahead, watching
              when the car in front passes it, and counting, "One thousand and
              one, one thousand and two." If you reach the point too soon, back
              off!
            </p>
          </div>

          <div className={styles.adiseventipBox2}>
            <h3>🛑 Stopping Distance</h3>
            <p>
              Braking takes longer than you think—especially in bad weather.
              Always leave enough space to stop within the visible distance
              ahead. If you can’t see past a bend or a hill, slow down and
              expect the unexpected.
            </p>
          </div>

          <div className={styles.adiseventipBox2}>
            <h3>🏍 Side Space</h3>
            <p>
              Cyclists, motorcyclists, and parked cars all need their personal
              space. When overtaking, leave at least 1.5 meters—or more if you
              can. And when driving near parked cars, be ready for the dreaded
              door swing from an unsuspecting passenger.
            </p>
          </div>

          <div className={styles.adiseventipBox2}>
            <h3>🚛 Space Behind</h3>
            <p>
              Got a tailgater breathing down your neck? Don’t hit the brakes to
              “teach them a lesson”—that’s a recipe for disaster. Instead,
              gradually slow down to encourage them to back off. If they’re
              still too close, find a safe place to let them pass.
            </p>
          </div>

          <div className={styles.adiseventipBox2}>
            <h3>🚦 Space at Junctions and Roundabouts</h3>
            <p>
              Ever seen someone creep forward at a red light, only to get stuck
              in the middle of the road? Don’t be that driver. Always leave
              enough room for other vehicles to move freely—especially large
              ones that need extra turning space.
            </p>
          </div>
        </section>

        {/* ////////////////////////////////////////////// */}
        <section
          className={styles.adisevenhintsSection}
          style={{ marginTop: "1rem", background: "#00a06d" }}
        >
          <div className={styles.adisevenheading}>
            How to Keep Your Space Like a Pro
          </div>
          <div className={styles.AdiModuleContentParaBox}>
            <p>
              Space management isn’t just about keeping your distance—it’s about
              reading the road and staying ahead of the game. Here’s how to
              master it:
            </p>
          </div>
          <div className={styles.adiseventipBox}>
            <h3 style={{ color: "#63ffa7" }}>👀 Anticipate What’s Coming</h3>
            <p>
              Watch for brake lights, turn signals, and changes in traffic flow.
              The sooner you spot a potential issue, the easier it is to adjust
              your space before it becomes a problem.
            </p>
          </div>

          <div className={styles.adiseventipBox}>
            <h3 style={{ color: "#63ffa7" }}>📍 Position Yourself Smartly</h3>
            <p>
              Your lane position can make a big difference. When passing parked
              cars, move slightly to the left to avoid unexpected door swings.
              When stopped in traffic, leave enough space to maneuver around the
              car in front if needed.
            </p>
          </div>

          <div className={styles.adiseventipBox}>
            <h3 style={{ color: "#63ffa7" }}>
              🏎 Adapt to Speed and Conditions
            </h3>
            <p>
              The faster you're going, the more space you need. On a dry road,
              you might be fine with the 2-second rule, but in rain or fog? Give
              yourself extra room.
            </p>
          </div>

          <div className={styles.adiseventipBox}>
            <h3 style={{ color: "#63ffa7" }}>
              😡 Handle Close-Followers with Confidence
            </h3>
            <p>
              If someone’s tailgating you, don’t panic. Stay cool, slow down
              gradually, and let them pass if necessary. It’s better to lose a
              few seconds than risk an accident.
            </p>
          </div>
        </section>

        {/* /////////////////////////////////////////////////////// */}
        <section
          className={styles.adisevenhintsSection}
          style={{ marginTop: "1rem" }}
        >
          <div className={styles.adisevenheading}>
            🛞 On-the-Road Spacing Challenge
          </div>

          <div className={styles.adiseventipBox}>
            <h3 style={{ color: "#e563ff" }}>1️⃣ Following Distance Check:</h3>
            <p>
              Pick a fixed point (like a road sign) and test your 2-second rule.
              If you reach the point too soon, back off and adjust your
              distance.
            </p>
          </div>

          <div className={styles.adiseventipBox}>
            <h3 style={{ color: "#e563ff" }}>2️⃣ Side Space Awareness:</h3>
            <p>
              When passing cyclists or parked cars, keep that 1.5-meter gap. If
              space is tight, slow down and wait for a safer moment to overtake.
            </p>
          </div>

          <div className={styles.adiseventipBox}>
            <h3 style={{ color: "#e563ff" }}>3️⃣ Reaction Space Test:</h3>
            <p>
              As you approach junctions or roundabouts, leave enough room to
              stop safely if needed. Stay alert and be ready to adjust if
              traffic flow changes suddenly.
            </p>
          </div>
        </section>

        {/* ///////////////////////////////////////////////// */}
        <div className={styles.AdiModuleContentBox}>
          <div className={styles.AdiModuleContentParaBox}>
            <p>
              Practice the Following Distance Check during your next three
              driving sessions, especially in varying traffic and weather
              conditions.
            </p>
          </div>
        </div>
        {/* //////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            Observe other drivers’ spacing habits and identify where
            improvements could be made.
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

        {/* //////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            Have you ever experienced a situation where maintaining proper space
            saved you from a collision?
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
        {/* ///////////////////////////////////////////////// */}
        <div className={styles.AdiModuleContentBox}>
          <h2>
            Final Thought: Are You Giving Yourself Enough Room to Breathe?
          </h2>
          <div className={styles.AdiModuleContentParaBoxm2}>
            <p>
              Space isn’t just empty air between vehicles—it’s your safety net,
              your escape route, and your best tool for stress-free driving.
              Master it, and you’ll be on your way to becoming a smooth,
              confident, and professional driver.
            </p>
          </div>
          <div
            className={styles.AdiModuleContentParaBoxm3}
            style={{ marginTop: "1rem" }}
          >
            <p>
              Next time you're behind the wheel, ask yourself: Do I have enough
              space to handle anything that happens next? Keep practicing, and
              soon, space management will feel like second nature! 🚗✨
            </p>
          </div>
        </div>

        {/* /////////////////// */}
        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h1>Start Quiz</h1>
            <h3>15 Questions</h3>
            <p>
              Here’s a quick summary quiz to test your understanding of of Part
              2: Human checks before setting off
            </p>
            <Link to="/takequizCatName/Space-in-the-COAST-Method">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
        {/* ///////////////////////////////////////////// */}
      </div>
    </>
  );
}

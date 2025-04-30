import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./AdiModuleOne.module.css";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import time from "../../../../../assets/part3videos/time.mp4";

export default function AdiModuleNine() {
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
        `notepadTextspage9_${userId}`,
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
      `notepadTextspage9_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTextspage9_${userId}`);
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
        `notepadText2spage9_${userId}`,
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
      `notepadText2spage9_${userId}`,
      JSON.stringify(updatedTexts2)
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(`notepadText2spage9_${userId}`);
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  // /////////////////////////////////////////////////////////////////
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Time in the COAST Method for Advanced Driving"; // First part before "Driving"

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

        <div className={styles.videoContainer}>
          <h2 className={styles.videotitle}>Watch Our Video</h2>
          <video className={styles.videodesign} controls muted loop>
            <source src={time} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* //////////////////////////////////////////////////// */}
        <section className={styles.AdiModuleOneTextArea}>
          <h2>How could giving yourself more time help with your driving?</h2>
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
        {/* //////////////////////////////////////////////////// */}
        <section
          className={styles.adisevenhintsSection}
          style={{
            background:
              "linear-gradient(135deg,rgb(44, 3, 210),rgb(216, 27, 226))",
          }}>
          <div className={styles.adisevenheading}>
            🚘 Why Does Time Matter in Driving?
          </div>
          <div className={styles.AdiModuleContentBox}>
            <div className={styles.AdiModuleContentParaBox}>
              <p>
                Imagine driving is like playing chess—if you only focus on the
                piece right in front of you, you’ll always be caught off guard.
                But if you plan three moves ahead, you can anticipate, adapt,
                and stay in control. That’s exactly what time management in
                driving is all about!
              </p>
            </div>
            <div
              className={styles.AdiModuleContentParaBox}
              style={{ marginTop: "1rem" }}>
              <p>
                Time isn’t just about how fast you go—it’s about how much room
                you give yourself to think, react, and make the right decisions.
                The more time you allow, the smoother, safer, and less stressful
                your journey will be. Plus, mastering time is a major part of
                the COAST method, helping you drive with confidence and
                professionalism.
              </p>
            </div>
          </div>

          <div
            className={styles.adiseventipBox}
            style={{
              background:
                "linear-gradient(135deg,rgb(198, 0, 145),rgb(99, 0, 26))",
            }}>
            <h3 style={{ color: "rgb(49, 234, 255)" }}>
              More Time = Fewer Surprises
            </h3>
            <p>
              Ever slammed on the brakes at the last second? Or misjudged a gap
              at a roundabout? That’s what happens when you don’t give yourself
              enough time. When you manage time well, you:
            </p>
            <ul>
              <li>
                <strong>Spot hazards early</strong> and react before they become
                a problem.
              </li>
              <li>
                <strong>Stay calm</strong> under pressure, avoiding last-minute
                panic moves.
              </li>
              <li>
                <strong>Glide through traffic</strong> smoothly, instead of
                jerky stops and rushed maneuvers.{" "}
              </li>
              <li>
                <strong>Create a safety buffer,</strong> reducing the chances of
                accidents or close calls.
              </li>
            </ul>
            <p>
              In short—time is your best tool for stress-free, professional
              driving.
            </p>
          </div>
        </section>
        {/* //////////////////////////////////////////////////////// */}
        <section
          className={styles.adisevenhintsSection}
          style={{
            background:
              "linear-gradient(135deg,rgb(0, 198, 181),rgb(4, 63, 146))",
            marginTop: "1rem",
          }}>
          <div className={styles.adisevenheading}>
            How to Be a Time-Management Pro on the Road
          </div>

          <div className={styles.adiseventipBox}>
            <h3 style={{ color: "rgb(49, 234, 255)" }}>
              🔭 Look Ahead to Your Limit Points
            </h3>
            <p>
              Think of your eyes like a radar scanning for threats far ahead. By
              spotting bends, traffic lights, or merging vehicles early, you can
              predict what’s coming and adjust your approach smoothly—no more
              last-minute surprises!
            </p>
          </div>

          <div className={styles.adiseventipBox}>
            <h3 style={{ color: "rgb(49, 234, 255)" }}>
              🏎 Adjust Speed to Conditions
            </h3>
            <p>
              Driving in heavy rain? Thick fog? Rush hour chaos? These
              situations demand more reaction time. Slowing down slightly gives
              you extra moments to process what’s happening, so you’re never
              caught off guard.
            </p>
          </div>

          <div className={styles.adiseventipBox}>
            <h3 style={{ color: "rgb(49, 234, 255)" }}>
              🚦 Master the Art of a Smooth Approach
            </h3>
            <p>
              Rushing toward a red light just to slam the brakes? Not a great
              move. Instead, ease off the accelerator early when approaching:
            </p>
            <ul>
              <li>
                <strong>Junctions </strong> – Slow down in advance so you don’t
                have to stop suddenly.
              </li>
              <li>
                <strong>Roundabouts</strong> - Use time to assess gaps and enter
                confidently.
              </li>
              <li>
                <strong>Traffic lights </strong> - If you see an amber light,
                use the extra seconds to decide whether to stop or go safely.
              </li>
            </ul>
          </div>

          <div className={styles.adiseventipBox}>
            <h3 style={{ color: "rgb(49, 234, 255)" }}>
              🛑 Give Hazards the Time They Deserve
            </h3>
            <p>
              People and cars can be unpredictable. A pedestrian might step onto
              the road. A parked car could pull out. Instead of reacting too
              late, give yourself extra time to observe and anticipate.
            </p>
          </div>

          <div className={styles.adiseventipBox}>
            <h3 style={{ color: "rgb(49, 234, 255)" }}>
              ⏳ More Space = More Time
            </h3>
            <p>
              Keeping a safe distance (like the 2-second rule) isn’t just about
              avoiding crashes—it’s about buying yourself time to react. The
              more space you create, the longer you have to make smart
              decisions.
            </p>
          </div>
          <div className={styles.adiseventipBox}>
            <h3 style={{ color: "rgb(49, 234, 255)" }}>
              When Time Management is a Game-Changer
            </h3>

            <ul>
              <li>
                <strong>1️⃣ Merging Lanes </strong> – Don’t just squeeze in at
                the last second! Use time to assess gaps and merge smoothly.
              </li>
              <li>
                <strong> 2️⃣ Overtaking –</strong> Rushed overtakes are risky.
                Take time to scan the road ahead and make sure there’s enough
                space.
              </li>
              <li>
                <strong>3️⃣ Bends & Corners – </strong> - Approaching too fast?
                Bad move. Give yourself time to adjust speed and position before
                the bend.
              </li>
            </ul>
          </div>
        </section>

        <section
          className={styles.adisevenhintsSection}
          style={{
            background:
              "linear-gradient(135deg,rgb(219, 74, 255),rgb(99, 4, 146))",
            marginTop: "1rem",
          }}>
          <div className={styles.adisevenheading}>
            🚗 Ready for a Challenge? Test Your Time Awareness!
          </div>

          <div className={styles.adiseventipBox}>
            <h3 style={{ color: "rgb(183, 129, 255)" }}>
              📝 Pre-Drive Planning
            </h3>
            <p>Before you hit the road, ask yourself:</p>

            <ul>
              <li>Do I know my route and any tricky areas I might face?</li>
              <li>Will weather or traffic affect my timing today?</li>
              <li>
                Am I mentally prepared to stay calm and anticipate hazards?
              </li>
            </ul>
            <p>
              2️⃣ <strong>Smooth Approaches Challenge:</strong> For 10 minutes,
              ease off the accelerator early when approaching junctions,
              roundabouts, or traffic lights. Notice how much smoother and
              stress-free your driving feels.
            </p>
          </div>
        </section>
        {/* //////////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            Have you ever experienced a situation where better timing could have
            improved your reaction or decision?
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
        <div className={styles.AdiModuleOneTextArea}>
          <h2>
            Final Thought: Are You Controlling Time or Is It Controlling You?
          </h2>
          <div className={styles.AdiModuleContentParaBox}>
            <p>
              Great drivers don’t just react —they stay ahead of the game.
              Managing time well gives you the power to drive smoother, smarter,
              and safer. So, next time you're behind the wheel, remember: more
              time means more control! 🚗✨
            </p>
          </div>
        </div>

        <div className={styles.adiLastNextbtn}>
          <Link to="/quizModule-Ten">
            {" "}
            <button className={styles.adinextbtns}>Next Page</button>
          </Link>
        </div>

        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h1>Start Quiz</h1>
            <h3>15 Questions</h3>
            <p></p>
            <Link to="/takequizCatName/Time-in-the-COAST-Method-for-Advanced-Driving">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>

        {/* ////////////////////////////////////////////////////////// */}
      </div>
    </>
  );
}

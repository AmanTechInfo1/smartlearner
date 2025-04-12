import React from "react";
import styles from "./AdiModuleOne.module.css";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { Trophy } from "lucide-react";

export default function AdiModuleFive() {
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
        `notepadTextspage5_${userId}`,
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
      `notepadTextspage5_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTextspage5_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  // ////////////////////////////////////////////////////////

  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Concentration in the Coast Method"; // First part before "Driving"

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
      <div className={styles.AdiModuleOnecontainer}>
        <section className={styles.AdiModuleOneheader}>
          <div className="opicity"></div>
          <section className={styles.AdiModuleOneheading}>
            {" "}
            <h1 ref={textRef}>{splitText()}</h1>
          </section>
        </section>

        <div className={styles.AdiModuleContentBox}>
          <div className={styles.AdiModuleContentParaBoxm2}>
            <p>
              Mastering Concentration: The Key to Advanced Driving Success{" "}
              <br /> Ready to Train Your Brain for the Road? <br /> Imagine
              this: You’re cruising along, everything is going smoothly, and
              suddenly—whoops!—you realize you’ve missed a turn or didn’t notice
              that car creeping up in your blind spot. What happened? Your mind
              wandered!
            </p>
          </div>
          <div className={styles.AdiModuleContentParaBoxm3}>
            <p>
              Concentration is the backbone of advanced driving. In the COAST
              method, it’s the first and most crucial element because, without
              it, everything else—observation, anticipation, space, and time
              management— falls apart faster than a house of cards in a
              windstorm.
              <br />
              And guess what? In an advanced driving test, the examiner is
              watching you like a hawk, assessing how well you stay focused and
              react under pressure. So, let’s sharpen that concentration!
            </p>
          </div>
        </div>

        {/* /////////////////////////////////////////////// */}
        <section className={styles.AdiModuleOneTextArea}>
          {/* ////////////////////////////////////////////////////////////// */}
          <div className={styles.AdiModuleOneTextBox}>
            <label>
              Why Does Concentration Matter So Much? Write your thoughts below
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
        <div className={styles.AdiModuleContentBox}>
          <div className={styles.AdiModuleContentParaBox}>
            <p>
              If you think of your brain as a GPS, losing focus is like a bad
              signal—it leads to wrong turns, missed hazards, and slower
              reactions. Here’s why keeping your mental engine running at full
              power is a game- changer:
            </p>
          </div>
        </div>
        <div className={styles.AdiModuleContentBox}>
          <h2>🚗 Dodging Distractions Like a Pro</h2>
          <div className={styles.AdiModuleContentParaBoxm2}>
            <p>
              Have you ever been halfway through a drive and realised you don’t
              remember the last five minutes? That’s because distractions—both
              external (noisy passengers, roadside billboards) and internal
              (fatigue, stress)—can sneak up on you. Identifying them is the
              first step to shutting them down!
            </p>
          </div>
        </div>

        <div className={styles.AdiModuleContentBox}>
          <h2>⚡ Fast Reactions, Smooth Moves</h2>
          <div className={styles.AdiModuleContentParaBoxm3}>
            <p>
              A focused driver spots a hazard early and reacts in time—whether
              it’s a child running into the road or a sudden lane change from a
              reckless driver. Keeping your concentration dialled in buys you
              precious seconds that could make all the difference.
            </p>
          </div>
        </div>

        <div className={styles.AdiModuleContentBox}>
          <h2>🎭 Driving Like a Pro (Because You Are!)</h2>
          <div className={styles.AdiModuleContentParaBoxm4}>
            <p>
              A smooth, confident driver anticipates traffic flow, avoids jerky
              movements, and stays one step ahead. This not only keeps you safe
              but also impresses the examiner—they love to see drivers who stay
              calm, collected, and always in control.
            </p>
          </div>
        </div>

        <div className={styles.AdiModuleContentBox}>
          <div className={styles.AdiModuleContentParaBox}>
            <p>
              How to Keep Your Head in the Game While Driving
              <br />
              So, how do you train yourself to stay locked in behind the wheel?
            </p>
          </div>

          <div className={styles.adiModulewrapper}>
            <div className={styles.adiModulecontent}>
              <Trophy size={50} className={styles.adiModuleicon} />
              <h1 className={styles.adiModuleheading}>Commentary drive</h1>
              <p>
                <strong>A commentary drive</strong> is like turning your inner
                thoughts into a live sports broadcast—except you're the star
                player!
              </p>
              <p>
                As you drive,{" "}
                <strong>say everything you notice out loud</strong>: “Speed
                limit is 40, checking mirrors, car ahead is braking, pedestrian
                at the crossing—might step out.” Sounds simple, right?
              </p>
              <p>
                But this trick forces your brain to stay{" "}
                <strong>laser-focused</strong> on what’s happening around you.
                The best part? It keeps distractions at bay and trains you to{" "}
                <strong>anticipate hazards</strong> before they happen.
              </p>
              <p>The examiners love to hear commentary drive on your test!</p>
              <p>
                The more you train your brain, the more natural it becomes. And
                when the examiner sees your laser-sharp focus? Boom—advanced
                driving success unlocked! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

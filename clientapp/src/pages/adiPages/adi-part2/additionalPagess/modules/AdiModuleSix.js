import React from "react";
import styles from "./AdiModuleOne.module.css";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { Trophy } from "lucide-react";
import tunnelVision from "../../../../../assets/images/tunnelVissonImg.png";
import funnelVision from "../../../../../assets/images/funnelVision.png";
import farRearImg from "../../../../../assets/images/far-near-rear-VissionImg.png";
import limitPoints from "../../../../../assets/images/limitPoints.png";
import roadImage from "../../../../../assets/images/2ndRuleImg.png";
import cloudImage from "../../../../../assets/images/rainFogImg.png";
import { FaChevronDown } from "react-icons/fa";

export default function AdiModuleSix() {
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;

  const [showHints, setShowHints] = useState(false);

  const toggleHints = () => {
    setShowHints((prev) => !prev);
  };

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
        `notepadTexts6_${userId}`,
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
      `notepadTexts6_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTexts6_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  // /////////////////////////////////////////////////////////////////

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
        `notepadText2spage6_${userId}`,
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
      `notepadText2spage6_${userId}`,
      JSON.stringify(updatedTexts2)
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(`notepadText2spage6_${userId}`);
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  /////////////////////////////////////////////////////////////////
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
        `notepadText3spage6_${userId}`,
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
      `notepadText3spage6_${userId}`,
      JSON.stringify(updatedTexts3)
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(`notepadText3spage6_${userId}`);
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  // /////////////////////////////////////////////////////////////

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
        `notepadText4spage6_${userId}`,
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
      `notepadText4spage6_${userId}`,
      JSON.stringify(updatedTexts4)
    );
  };

  useEffect(() => {
    const savedData4 = localStorage.getItem(`notepadText4spage6_${userId}`);
    if (savedData4) {
      setSavedTexts4(JSON.parse(savedData4));
    }
  }, []);

  // /////////////////////////////////////////////////////////////

  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Observation in the COAST Method for Advanced Driving"; // First part before "Driving"

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
          <h2>See More, Drive Smarter!</h2>
          <div className={styles.AdiModuleContentParaBoxm2}>
            <p>
              Imagine driving as a high-speed puzzle—every road sign, every
              bend, every movement from other drivers is a clue. The more pieces
              you spot early, the smoother and safer your drive will be. That’s
              where <strong>observation</strong> comes in! It’s not just about
              looking around; it’s about actively <strong>scanning</strong>,{" "}
              <strong>analysing</strong>, and <strong>predicting</strong> what’s
              coming next.
            </p>
          </div>
          <div className={styles.AdiModuleContentParaBoxm3}>
            <p>
              In the COAST method, observation is your superpower. It helps you
              spot hazards, read the road ahead, and make proactive
              decisions—exactly what examiners want to see in an advanced
              driver. But to truly level up your skills, you need to go beyond
              basic looking and start reading the road like a pro.
            </p>
          </div>
        </div>

        <section className={styles.AdiModuleOneTextArea}>
          <h2>How do you view the road?</h2>
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

        {/* ////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextArea}>
          <h2>Do you use Tunnel Vision or Funnel Vision?</h2>
          <div className={styles.AdiModuleContentBoxImgbox}>
            <img src={tunnelVision} alt="tunnul-Vision" />
            <img src={funnelVision} alt="funnel-Vision" />
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            Which do you think is better for the best view of the road, Write
            your thoughts below
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
        {/* //////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleContentBox}>
          <div className={styles.AdiModuleContentParaBoxm2}>
            <p>
              Imagine you're cruising down the road, feeling like a pro—until
              tunnel vision kicks in, turning your view into a narrow spotlight.
              Suddenly, everything outside your immediate line of sight
              vanishes, like you're playing a driving game with blinders on
            </p>
          </div>
          <div
            className={styles.AdiModuleContentParaBoxm3}
            style={{ marginTop: "1rem" }}
          >
            <p>
              Using funnel vision strategically while driving—by shifting focus
              between far, mid, rear, and side views— helps you stay aware of
              everything happening around you. Instead of getting locked onto
              just one point, you’re actively scanning the road ahead, checking
              your mirrors, and keeping an eye on potential hazards.
            </p>
          </div>
        </div>

        {/* /////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextArea}>
          <h2>
            When you drive down the road, you should be scanning the road ahead
            and behind in a funnel vision. From far, middle, near to rear.
          </h2>
          <div className={styles.AdiModuleContentParaBox}>
            <p>
              Looking far ahead helps you anticipate traffic flow, mid-range
              vision keeps you aware of immediate surroundings, and rear/side
              checks ensure you know what’s happening behind and beside you.
              This balanced visual approach reduces surprises, improves reaction
              time, and makes you a smoother, safer driver! 🚗👀✅
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src={farRearImg}
              alt=""
              style={{
                marginTop: "1rem",
                maxWidth: "800px",
                width: "100%",
              }}
            />
          </div>
        </div>
        {/* //////////////////////////////////////////////////////////////////////////////////////// */}
        <section className={styles.AdiModuleOneTextArea}>
          <h2>LIMIT POINTS – Subheading</h2>
          <div className={styles.AdiModuleOneTextBox}>
            <label>
              Do you know what a limit point is? Write your thoughts below
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
            <button onClick={saveText3}>
              {isEditing3 ? "Update" : "Save"}
            </button>

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

        {/* ////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextArea}>
          <h2>What is your limit point?</h2>
          <div className={styles.AdiModuleContentParaBox}>
            <p>
              Ever noticed how the road ahead seems to meet the horizon and then
              shifts as you drive? That’s the limit point—the furthest point you
              can clearly see on the road. Think of it as your
              distance-to-danger gauge.
              <br />
              The limit point is The furthest point to which you have an
              uninterrupted view of the road surface
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src={limitPoints}
              alt=""
              style={{
                marginTop: "1rem",
                maxWidth: "600px",
                width: "100%",
              }}
            />
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////////////////// */}
        <section className={styles.AdiModuleContentBoxcontainer}>
          <h2 className={styles.AdiModuleContentBoxheading}>
            Understanding the Limit Point
          </h2>
          <p className={styles.AdiModuleContentBoxintro}>
            Turn into a hazard-spotting pro! Here’s how:
          </p>

          <div className={styles.AdiModuleContentBoxtip}>
            <h3>🛑 Judging Safe Speeds</h3>
            <p>
              If the <strong>limit point</strong> is moving away from you, the
              road is opening up—
              <span className={styles.AdiModuleContentBoxhighlight}>
                {" "}
                time to gently accelerate!
              </span>
            </p>
            <p>
              If it’s coming closer, something’s lurking ahead—
              <span className={styles.AdiModuleContentBoxhighlight}>
                {" "}
                ease off the gas and be ready to stop.
              </span>
            </p>
          </div>

          <div className={styles.AdiModuleContentBoxtip}>
            <h3>👀 Spotting Hidden Hazards</h3>
            <p>
              The limit point changes as you approach bends, hills, and dips,
              revealing
              <span className={styles.AdiModuleContentBoxhighlight}>
                {" "}
                what’s waiting just around the corner.
              </span>
            </p>
          </div>

          <div className={styles.AdiModuleContentBoxtip}>
            <h3>🎯 Navigating Curves Like a Pro</h3>
            <p>
              Tracking the limit point in a bend helps you
              <span className={styles.AdiModuleContentBoxhighlight}>
                {" "}
                adjust speed smoothly
              </span>
              , preventing sudden braking or swerving.
            </p>
          </div>

          <h3 className={styles.AdiModuleContentBoxsubheading}>
            Why Observation Makes You an Elite Driver
          </h3>

          <div className={styles.AdiModuleContentBoxtip}>
            <h4>🚨 Better Hazard Awareness</h4>
            <p>
              The earlier you spot a problem, the more time you have to
              <span className={styles.AdiModuleContentBoxhighlight}>
                {" "}
                react smoothly and safely.
              </span>
            </p>
          </div>

          <div className={styles.AdiModuleContentBoxtip}>
            <h4>⚙️ Smoother, More Confident Driving</h4>
            <p>
              Good observation means
              <span className={styles.AdiModuleContentBoxhighlight}>
                {" "}
                fewer surprises
              </span>
              —so no last-minute panic braking or jerky lane changes.
            </p>
          </div>
        </section>

        {/* ///////////////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            What external factors can affect your observations? Write thoughts
            below
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

        {/* ////////////////////////////////////////////////////////////////////////// */}
        <div className={styles.adi2ndImgcontainer}>
          <h3 onClick={toggleHints} className={styles.adi2ndImgclickText}>
            CLICK TO REVEAL TWO HINTS{" "}
            <FaChevronDown
              className={`${styles.adi2ndImgarrow} ${showHints ? styles.adi2ndImgrotate : ""}`}
            />
          </h3>

          <div className={`${styles.adi2ndImghintContainer} ${showHints ? styles.adi2ndImgshow : ''}`}>
            
              <div className={styles.adi2ndImghintBox}>
                <img
                  src={roadImage}
                  alt="2 Second Rule"
                  className={styles.adi2ndImgimage}
                />
                <div className={styles.adi2ndImgtooltip}>
                  <strong>2 Second rule</strong>
                  <p>
                    Have you ever heard the saying only a fool breaks the two
                    second rule? This is the...
                  </p>
                </div>
              </div>

              <div className={styles.adi2ndImghintBox}>
                <img
                  src={cloudImage}
                  alt="Weather Conditions"
                  className={styles.adi2ndImgimage}
                />
                <div className={styles.adi2ndImgtooltip}>
                  <p>
                    When you’re driving in rain, fog or snow, your vision is
                    impaired. This can affect your observations.
                  </p>
                </div>
              </div>
            </div>
         

          <div className={styles.adi2ndImgnote}>
            <p>
              On your next drive, take into account the weather conditions and
              the types of roads you are on, try and identify the limit point
              and begin using funnel vision to identify hazards.
            </p>
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////////////////// */}
      </div>
    </>
  );
}

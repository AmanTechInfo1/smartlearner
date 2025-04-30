import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./AdiModuleOne.module.css";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import anticipation from "../../../../../assets/part3videos/anticipation.mp4"

export default function AdiModuleSeven() {
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
        `notepadTextspage7_${userId}`,
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
      `notepadTextspage7_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTextspage7_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  // /////////////////////////////////////////////////////////////////////////////////////
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
        `notepadText2spage7_${userId}`,
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
      `notepadText2spage7_${userId}`,
      JSON.stringify(updatedTexts2)
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(`notepadText2spage7_${userId}`);
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
        `notepadText3spage7_${userId}`,
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
      `notepadText3spage7_${userId}`,
      JSON.stringify(updatedTexts3)
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(`notepadText3spage7_${userId}`);
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  // //////////////////////////////////////////////////////////////////////////
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
        `notepadText4spage7_${userId}`,
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
      `notepadText4spage7_${userId}`,
      JSON.stringify(updatedTexts4)
    );
  };

  useEffect(() => {
    const savedData4 = localStorage.getItem(`notepadText4spage7_${userId}`);
    if (savedData4) {
      setSavedTexts4(JSON.parse(savedData4));
    }
  }, []);

  ////////////////////////////////////////////////////////////////////////////////////
  const [text5, setText5] = useState("");
  const [savedTexts5, setSavedTexts5] = useState([]); // Store multiple saved texts
  const [isEditing5, setIsEditing5] = useState(false); // Track if the user is editing
  const [editIndex5, setEditIndex5] = useState(null);
  const textareaRef5 = useRef(null);

  // ////////////////////////////////////////////////////////////////////////
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
        `notepadText5spage7_${userId}`,
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
      `notepadText5spage7_${userId}`,
      JSON.stringify(updatedTexts5)
    );
  };

  useEffect(() => {
    const savedData5 = localStorage.getItem(`notepadText5spage7_${userId}`);
    if (savedData5) {
      setSavedTexts5(JSON.parse(savedData5));
    }
  }, []);

  // ///////////////////////////////////////////////////////////////////////////////////////

  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Anticipation in the COAST Method for Advanced Driving"; // First part before "Driving"

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

         <div className={styles.videoContainer}>
                  <h2 className={styles.videotitle}>Watch Our Video</h2>
                  <video className={styles.videodesign} controls muted loop>
                    <source src={anticipation} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

        <div className={styles.AdiModuleContentBox}>
          <h2>What is Anticipation and Why Does It Matter?</h2>
          <div className={styles.AdiModuleContentParaBoxm2}>
            <p>
              Imagine you’re watching a movie, and you just know what’s going to
              happen next. That’s anticipation— except in driving, it’s not just
              about guessing right, it’s about staying safe and in control.
              <br />
              Anticipation is your ability to predict what might happen on the
              road based on what you see and know. It’s what separates reactive
              drivers (who panic at surprises) from proactive drivers (who are
              always one step ahead).
            </p>
          </div>
          <div className={styles.AdiModuleContentParaBoxm3} style={{marginTop:'1rem'}}>
            <p>
              In advanced driving, anticipation is key. The examiner in your ADI
              Part 2 exam will be watching to see if you can read the road like
              a pro, spot risks early, and make smooth, calculated decisions. No
              crystal ball required—just sharp observation and smart thinking!
              <br />
              Think back to what you learned during Observation, You can
              anticipate actions by doing good observations!
            </p>
          </div>
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////// */}

        <section className={styles.adisevenhintsSection}>
          <div className={styles.adisevenheading}>🚘 Here are your hints:</div>

          <div className={styles.adiseventipBox}>
            <h3>👀 Look Far Ahead and Stay Aware</h3>
            <p>
              The road isn’t just what’s right in front of you—it’s everything
              happening in your surroundings.
            </p>
            <p>
              🎙 Try a commentary drive—say out loud everything you see and what
              you think might happen next.
            </p>
            <p>
              🪞 Keep checking your mirrors—what’s happening behind and to your
              sides matters just as much as what’s in front!
            </p>
          </div>

          <div className={styles.adiseventipBox}>
            <h3>🚶‍♂️ Read Other Road Users Like a Detective</h3>
            <p>
              People are predictable—if you know what to look for. Ask yourself:
            </p>
            <ul>
              <li>❓ What’s happening now?</li>
              <li>❓ What might happen next?</li>
            </ul>
            <p>Examples:</p>
            <ul>
              <li>
                🚗 A parked car with brake lights on? It’s probably about to
                move.
              </li>
              <li>
                🚶‍♀️ A pedestrian at a crossing looking at traffic? They might
                step out.
              </li>
              <li>
                🚴‍♂️ A cyclist glancing over their shoulder? They could be about
                to turn.
              </li>
            </ul>
          </div>

          <div className={styles.adiseventipBox}>
            <h3>🚦 Let Road Signs and Markings Be Your Guide</h3>
            <p>
              Signs aren’t just there for decoration—they’re telling you what’s
              coming!
            </p>
            <ul>
              <li>
                🛑 "Give Way" sign? Time to slow down and scan for traffic.
              </li>
              <li>
                ↩️ Sharp bend sign? Reduce speed before you get there, not
                during the turn!
              </li>
            </ul>
          </div>

          <div className={styles.adiseventipBox}>
            <h3>🌧 Adjust for Weather and Road Conditions</h3>
            <p>Rain, fog, or ice? Time to think ahead.</p>
            <ul>
              <li>
                🌧 Wet roads? Increase your stopping distance and drive smoothly.
              </li>
              <li>
                🌫 Fog ahead? Start scanning for cars with dim tail lights
                appearing suddenly.
              </li>
            </ul>
          </div>

          <div className={styles.adiseventipBox}>
            <h3>🔮 Use the "What If?" Game</h3>
            <p>This is where you train your anticipation reflex:</p>
            <ul>
              <li>❓ What if that driver suddenly slams on the brakes?</li>
              <li>❓ What if the cyclist swerves?</li>
              <li>❓ What if the light turns red just as I approach?</li>
            </ul>
            <p>
              By constantly asking yourself these questions, you’ll be ready for
              anything—instead of being caught off guard.
            </p>
          </div>
        </section>

        {/* ?///////////////??///////////////////////////////// */}
        <section className={styles.AdiModuleOneTextArea}>
          <h2>
            Before starting your next drive, ask yourself the following
            questions to focus your anticipation:
          </h2>
          {/* ////////////////////////////////////////////////////////////// */}
          <div className={styles.AdiModuleOneTextBox}>
            <label>What are the weather and road conditions?</label>
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
          {/* ////////////////////////////////////////////////////////////// */}
          <div className={styles.AdiModuleOneTextBox}>
            <label>
              2. What potential hazards might I encounter in this environment
              (e.g., pedestrians, roundabouts, parked cars)?
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
            <button onClick={saveText2}>
              {isEditing2 ? "Update" : "Save"}
            </button>

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

          <div className={styles.AdiModuleOneTextBox}>
            <label>
              3. How can I prepare for these hazards before setting off?
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

          <div className={styles.AdiModuleOneTextBox}>
            <label>
              4. - After the drive, write down: - The hazards you identified. -
              How you responded to them.
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
            <button onClick={saveText4}>
              {isEditing4 ? "Update" : "Save"}
            </button>

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

          <div className={styles.AdiModuleOneTextBox}>
            <label>
              Any hazards you missed and how you could improve next time.
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
            <button onClick={saveText5}>
              {isEditing5 ? "Update" : "Save"}
            </button>

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
        </section>
        <div className={styles.AdiModuleContentBox}>
          <h2>What is Anticipation and Why Does It Matter?</h2>
          <div className={styles.AdiModuleContentParaBoxm2}>
            <p>
              Ask a trainer, mentor, or trusted observer to review your driving
              and provide feedback on your anticipation.
            </p>
          </div>
          <div className={styles.AdiModuleContentParaBoxm3}>
            <p>
              Discuss areas where you excelled and where improvement is needed.
            </p>
          </div>
        </div>

        <div className={styles.adiLastNextbtn}>
                          <Link to="/quizModule-eight">
                            {" "}
                            <button className={styles.adinextbtns}>Next Page</button>
                          </Link>
                        </div>

        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h1>Start Quiz</h1>
            <h3>15 Questions</h3>
            <p></p>
            <Link to="/takequizCatName/Anticipation-in-the-COAST-Method-for-Advanced-Driving">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}

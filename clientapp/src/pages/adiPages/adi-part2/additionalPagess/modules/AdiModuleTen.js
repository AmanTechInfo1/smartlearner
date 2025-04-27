import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./AdiModuleOne.module.css";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import roadImg from "../../../../../assets/images/moduleNine1Img.png";
import road2Img from "../../../../../assets/images/moduleNine2Img.png";
import tug from "../../../../../assets/part3videos/tug.mp4";

export default function AdiModuleTen() {
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
        `notepadTextspage10_${userId}`,
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
      `notepadTextspage10_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTextspage10_${userId}`);
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
        `notepadText2spage10_${userId}`,
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
      `notepadText2spage10_${userId}`,
      JSON.stringify(updatedTexts2)
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(`notepadText2spage10_${userId}`);
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
        `notepadText3spage10_${userId}`,
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
      `notepadText3spage10_${userId}`,
      JSON.stringify(updatedTexts3)
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(`notepadText3spage10_${userId}`);
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
        `notepadText4spage10_${userId}`,
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
      `notepadText4spage10_${userId}`,
      JSON.stringify(updatedTexts4)
    );
  };

  useEffect(() => {
    const savedData4 = localStorage.getItem(`notepadText4spage10_${userId}`);
    if (savedData4) {
      setSavedTexts4(JSON.parse(savedData4));
    }
  }, []);

  // ///////////////////////////////////////////////////////
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Mastering the TUG Method for Safer and Smoother Driving"; // First part before "Driving"

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
            <source src={tug} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* /////////////////////////////////////////////////// */}
        <section
          className={styles.adisevenhintsSection}
          style={{
            marginTop: "1rem",
            background:
              "linear-gradient(135deg,rgb(85, 1, 107),rgb(155, 29, 218))",
          }}
        >
          <div className={styles.adisevenheading}>What’s the TUG Method?</div>

          <div className={styles.adiseventipBox}>
            <p>
              Think of the TUG Method as your personal driving toolkit. It’s a
              simple yet powerful way to make sure you stay in control, aware of
              your surroundings, and connected with other road users. Here’s the
              breakdown:
            </p>
            <ul>
              <li>
                <strong>Take:</strong> Take information. Grab that space to make
                sure you have maximum visibility and safety to take in the most
                information from your observations.
              </li>
              <li>
                <strong>Use:</strong> Take full advantage of the information
                around you to make smarter decisions.
              </li>
              <li>
                <strong>Give:</strong> Let other road users know exactly what
                you’re doing with clear signals and positioning.
              </li>
            </ul>
            <p>
              "Take" is all about positioning your car for the best view and the
              quickest reaction time. It's like being the road superhero, always
              ready for whatever comes your way! 💪
            </p>
            <p>
              <strong>Examples of Taking Space:</strong>
            </p>
            <ul>
              <li>
                <strong>Country Roads:</strong>
                If the road’s narrow, shift a little closer to the center to get
                a better view of oncoming traffic.
              </li>
              <li>
                <strong>Bends:</strong>
                Steer towards the center line to see more around the curve (but
                always check if it’s safe!).
              </li>
            </ul>
          </div>

          <div className={styles.adiseventipBox}>
            <h3>Why Does Taking Space Help?</h3>

            <ul>
              <li>
                <strong>Better hazard detection</strong> (so you can react
                early).
              </li>
              <li>
                <strong>More time to think and act.</strong>
              </li>
            </ul>
          </div>

          <div className={styles.adiseventipBox}>
            <h3>Activity: Positioning Practice!</h3>
            <p>
              Look at this diagram of a curved country road. Where would you
              position your vehicle for optimal visibility? Remember what we
              have previously studied regarding limit points and funnel vision.
              Write down why that position works best for safety. 🤔
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src={roadImg}
              alt=""
              style={{
                marginTop: "1rem",
                maxWidth: "500px",
                width: "100%",
              }}
            />
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.AdiModuleOneTextArea}>
          {/* ////////////////////////////////////////////////////////////// */}
          <div className={styles.AdiModuleOneTextBox}>
            <label>Write down your reasoning :</label>
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
        {/* ///////////////////////////////////////////////////// */}
        <section
          className={styles.adisevenhintsSection}
          style={{
            background:
              "linear-gradient(135deg,rgb(32, 106, 138),rgb(4, 37, 146))",
            marginTop: "1rem",
          }}
        >
          <div className={styles.adisevenheading}>
            Use – Making the Most of the Road's Info 🔍
          </div>
          <p>
            "Use" means you’re actively soaking in everything around you—the
            road signs, the weather, the vehicles ahead, and those cyclists
            weaving in and out. Being a road detective helps you make the best
            choices on the fly! 🕵♂️
          </p>

          <div className={styles.adiseventipBox}>
            <h3 style={{ color: "rgb(129, 242, 255)" }}>
              How to Use Information:
            </h3>

            <ul>
              <h4>
                {" "}
                <strong>1. Approaching a Roundabout:</strong>
              </h4>
              <li>Spot those road signs early to know which exit is yours.</li>
              <li>
                Observe the other drivers—are they indicating? What’s their
                position?
              </li>
            </ul>

            <ul>
              <h4>
                <strong>2. Urban Driving:</strong>
              </h4>
              <li>
                Look out for parked cars, pedestrians, and cyclists. They’re
                ready to pop up in your path, and you need to be ready!
              </li>
            </ul>
          </div>
        </section>
        {/* //////////////////////////////////////////////////////////////// */}
        <section className={styles.AdiModuleOneTextArea}>
          {/* ////////////////////////////////////////////////////////////// */}
          <div className={styles.AdiModuleOneTextBox}>
            <label>
              What are some ways you can give information to other road users?
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
        </section>

        {/* ///////////////////////////////////////////////////////////////// */}
        <section
          className={styles.adisevenhintsSection}
          style={{
            background:
              "linear-gradient(135deg,rgb(162, 0, 65),rgb(141, 4, 146))",
            marginTop: "1rem",
          }}
        >
          <div className={styles.adisevenheading}>
            Give – Let Others Know Your Moves 💬
          </div>
          <div className={styles.AdiModuleContentParaBox}>
            <p>
              "Give" is all about communication! When you’re clear about your
              intentions, other drivers can adjust accordingly, making the road
              safer for everyone. 🚦
            </p>
          </div>
          <div className={styles.adiseventipBox}>
            <h3 style={{ color: "rgb(255, 129, 165)" }}>
              How to Give Information:
            </h3>

            <ul>
              <li>
                <strong> 1. Indicators:</strong> Signal early when changing
                lanes or turning.
              </li>
              <li>
                <strong>2. Brake Lights:</strong> Gradually press the brake to
                warn the car behind that you’re slowing down.
              </li>
              <li>
                <strong>3. Positioning:</strong> Move your car a little to the
                side before turning to give others the heads-up.
              </li>
            </ul>
          </div>
          <div className={styles.adiseventipBox}>
            <h3 style={{ color: "rgb(255, 129, 165)" }}>
              Example: Changing Lanes on the Motorway:
            </h3>

            <ul>
              <li>
                <strong> Signal early.</strong>
              </li>
              <li>
                <strong>Check your mirrors and blind spots.</strong>
              </li>
              <li>
                <strong>Change lanes smoothly</strong> so everyone’s on the same
                page.
              </li>
            </ul>
          </div>
        </section>

        <div
          className={styles.AdiModuleOneTextBox}
          style={{ marginTop: "1rem" }}
        >
          <label>
            Imagine you’re about to merge onto a busy motorway. Write out the
            steps you’d take to signal, position, and change lanes safely and
            clearly. Think about the other road users—how would you make sure
            everyone knows your next move?
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
        {/* ///////////////////////////////////////////////////////////// */}
        <section
          className={styles.adisevenhintsSection}
          style={{ marginTop: "1rem" }}
        >
          <div className={styles.adisevenheading}>
            Final Activity: TUG in Action!
          </div>
          <p>
            Put your TUG skills to the test! Imagine you’re driving on a rural
            road, and there's a sharp bend ahead. An oncoming car is visible but
            distant, and the road narrows right after the bend.
          </p>

          <div className={styles.adiseventipBox}>
            <h3>Write down your response in a step-by-step format:</h3>
            <p>
              <strong>1. How would you take space </strong> to maximise
              visibility and safety?
            </p>
            <p>
              <strong>2. How would you use the information</strong> from the
              road and other vehicles to make the best decision?
            </p>
            <p>
              <strong>How would you give information</strong> to the oncoming
              driver and other road users?
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src={road2Img}
              alt=""
              style={{
                marginTop: "1rem",
                maxWidth: "350px",
                width: "100%",
              }}
            />
          </div>
        </section>

        <div className={styles.AdiModuleContentBox}>
          <div className={styles.AdiModuleContentParaBoxm2}>
            <p style={{ textAlign: "center", marginBottom: "0px" }}>
              Once you’ve written it, review your plan with an instructor or a
              fellow learner.
            </p>
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
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

        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h1>Start Quiz</h1>
            <h3>15 Questions</h3>
            <p></p>
            <Link to="/takequizCatName/Mastering-the-TUG-Method">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
        {/* /////////////////////////////////////////////////////////// */}
      </div>
    </>
  );
}

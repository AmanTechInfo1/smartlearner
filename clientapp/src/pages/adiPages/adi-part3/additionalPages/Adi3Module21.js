import React, { useEffect, useRef, useState } from "react";
import styles from "./Adi3Module.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import gsap from "gsap";
import backgroundImage from "../../../../assets/images/questionsTech.jpg";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

const CollapsibleSection = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.Adi3Module21section}>
      <div
        className={styles.Adi3Module21sectionHeader}
        onClick={() => setOpen(!open)}
      >
        <h3>{title}</h3>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {open && (
        <div className={styles.Adi3Module21sectionContent}>{children}</div>
      )}
    </div>
  );
};

const Adi3Module21 = () => {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Conducting Mock Tests"; // First part before "Driving"

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

  //   ////////////////////////////////////////////
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
        `notepadTexts1Part3page37_${userId}`,
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
      `notepadTexts1Part3page37_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTexts1Part3page37_${userId}`);
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
        `notepadTexts2Part3page27_${userId}`,
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
      `notepadTexts2Part3page27_${userId}`,
      JSON.stringify(updatedTexts2)
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page27_${userId}`
    );
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  return (
    <div className={styles.AdiModuleOnecontainer}>
      <section
        className={styles.AdiModuleOneheader}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>

      <div className={styles.Adi3Module21container}>
        <h1 className={styles.Adi3Module21heading}>🚗 Conducting Mock Tests</h1>

        <p className={styles.Adi3Module21intro}>
          As your learner progresses and begins to consider booking their
          practical driving test, it’s important to start incorporating mock
          test scenarios into their lessons. These practice tests should
          simulate the real test environment and help both you and the learner
          gain a realistic understanding of their independent driving ability.
        </p>

        <p className={styles.Adi3Module21intro}>
          Mock tests should begin at least 2–3 months before the actual test
          date. This allows enough time to manage expectations and address any
          areas that need improvement. Conducting a mock test just a week before
          the real test is not helpful—if the learner performs poorly, it may be
          too late to postpone the test with the DVSA, and they may have already
          invested a significant amount of money in preparation.
        </p>
        <p className={styles.Adi3Module21intro}>
          This is why managing expectations and encouraging learner
          responsibility is so crucial. By preparing early, you give your
          learner the best chance of success and reduce the risk of last-minute
          surprises.
        </p>
        <p className={styles.Adi3Module21intro}>
          Each mock test should be carried out exactly as an official driving
          examiner would conduct it, to provide an accurate and constructive
          experience.
        </p>

        <section className={styles.AdiModuleOneTextArea}>
          {/* ////////////////////////////////////////////////////////////// */}
          <div className={styles.AdiModuleOneTextBox}>
            <label style={{ color: "black" }}>
              Write down below how you would conduct a mock test and what
              elements you think you need to cover
            </label>
            <textarea
              ref={textareaRef}
              value={text}
              onChange={handleChange}
              rows="5"
              cols="30"
              placeholder="Write your thoughts here..."
              style={{ backgroundColor: "white",color:"black" }}
              
            />
            <br />
            <button onClick={saveText}>{isEditing ? "Update" : "Save"}</button>

            <div className={styles.thoughtsListArea}>
              {savedTexts.length === 0 ? (
                <p style={{ color: "black" }}>No saved thoughts.</p>
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

        <CollapsibleSection title="🧠 So what should a test look like?">
          <p>Here is exactly what should be covered in the mock test</p>
          <p>
            The mock test should take about 40 minutes and include everything
            covered during a normal driving test. This includes:
          </p>
          <ul>
            <li>checking your pupil’s driving licence</li>
            <li>an eyesight check</li>
            <li>‘show me, tell me’ vehicle safety questions</li>
            <li>general driving ability</li>
            <li>reversing the car</li>
            <li>independent driving</li>
            <li>emergency stop</li>
            <li>giving the test result and feedback</li>
          </ul>
          <p>
            Conducting a mock test just a week before the real one may be too
            late if the learner performs poorly.
          </p>
        </CollapsibleSection>

        <CollapsibleSection title="🎯 What mock test routes should include">
          <p>
            Your route should start in a suitable place to check your pupils
            eyesight and carry out a ‘tell me’ safety question.
          </p>
          <p>
            <strong>Types of roads to include</strong>
          </p>
          <p>Mock test routes should include as many of these as possible:</p>
          <ul>
            <li>✅ rural roads with higher speed limits</li>
            <li>✅ urban roads</li>
            <li>
              ✅ dual carriageways, including those with the national speed
              limit
            </li>
            <li>✅ multi-lane roundabouts</li>
            <li>✅ one-way systems</li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection title="🔍Driving abilities your pupil will need to demonstrate">
          <p>
            When you plan the route, make sure it includes opportunities for
            your pupil to:
          </p>
          <ul>
            <li>✅change lanes</li>
            <li>✅ pass parked or stationary vehicles and obstacles</li>
            <li>✅ approach and cross junctions</li>
            <li>
              ✅ observe road markings, signs and react appropriately to
              potential or actual risks
            </li>
          </ul>
          <p>
            Each route you create should be as consistent as possible, with
            similar hazards on each route.
          </p>
        </CollapsibleSection>

        <CollapsibleSection title="✍️ Plan where you’ll do the manoeuvres">
          <p>
            Depending on which manoeuvre you ask the pupil to do on the route,
            it will need to include:
          </p>
          <ul>
            <li>
              ✅a straight section of a main road, with clear visibility ahead
              and behind where you can pull up on the right and reverse
            </li>
            <li>
              ✅ a straight section of a main road with cars parked on left,
              with clear visibility ahead and behind where you can parallel park
            </li>
            <li>
              ✅a car park suitable for parking in a bay (either driving into a
              bay and reversing out, or reversing in and driving out)
            </li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection title="✍️ Choose suitable car parks">
          <p>When you choose car parks to use, make sure that:</p>
          <ul>
            <li>
              ✅there are no restrictions stopping you from practising in it
            </li>
            <li>
              ✅ it can be driven around and exited if no bays are available
            </li>
            <li>✅there are several bays to choose from</li>
            <li>
              ✅ bays require the pupil to steer into them on the left or right
            </li>
            <li>✅ bays are clearly defined</li>
            <li>✅ you use a quieter area of the car park</li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection title="✍️ Plan the independent driving section of the route">
          <p>
            You need to ask your pupil to drive independently for 20 minutes of
            the mock test. This can be either:
          </p>
          <ul>
            <li>✅ following directions from a sat nav</li>
            <li>✅ following traffic signs</li>
          </ul>
          <p>
            1 out of 5 real driving tests ask candidates to follow traffic
            signs, so you should make sure you have mock test routes which also
            use traffic signs.
          </p>
        </CollapsibleSection>

        <CollapsibleSection title="✍️ Set up a sat nav to give directions">
          <p>You can set up your sat nav to give directions by either:</p>
          <ul>
            <li>
              ✅ creating, saving and using set routes, if your device has that
              feature
            </li>
            <li>
              ✅ setting a destination to drive to - however, be aware the
              device might not always suggest the exact route you want to use
            </li>
          </ul>
          <p>
            DVSA examiners use a TomTom Start 52 sat nav for the driving test,
            as it can save custom routes. However, you do not need to use the
            same make and model for mock tests.
          </p>
        </CollapsibleSection>

        <section className={styles.AdiModuleOneTextArea}>
          <div className={styles.AdiModuleOneTextBox}>
            <label style={{ color: "black" }}>
              Why do you think its important to mimic the same words the
              examiner uses? Write your thoughts below
            </label>
            <textarea
              ref={textareaRef2}
              value={text2}
              onChange={handleChange2}
              rows="5"
              cols="30"
              placeholder="Write your thoughts here..."
              style={{ backgroundColor: "white" }}
            />
            <br />
            <button onClick={saveText2}>
              {isEditing2 ? "Update" : "Save"}
            </button>

            <div className={styles.thoughtsListArea}>
              {savedTexts2.length === 0 ? (
                <p style={{ color: "black" }}>No saved thoughts.</p>
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
        <p style={{ fontSize: "1rem", textAlign: "center" }}>
          We use the examiners words so that there shouldn’t be anything the
          learner doesn’t understand or misinterprets on the test
        </p>
      </div>
    </div>
  );
};

export default Adi3Module21;

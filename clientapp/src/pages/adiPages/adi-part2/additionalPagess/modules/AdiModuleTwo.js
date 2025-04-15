import styles from "./AdiModuleOne.module.css";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdiModuleTwo() {
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;

  const [hoveredLetter, setHoveredLetter] = useState(null);

  const [text, setText] = useState("");
  const [savedTexts, setSavedTexts] = useState([]); // Store multiple saved texts
  const [isEditing, setIsEditing] = useState(false); // Track if the user is editing
  const [editIndex, setEditIndex] = useState(null);
  const textareaRef = useRef(null);

  const [text2, setText2] = useState("");
  const [savedTexts2, setSavedTexts2] = useState([]); // Store multiple saved texts
  const [isEditing2, setIsEditing2] = useState(false); // Track if the user is editing
  const [editIndex2, setEditIndex2] = useState(null);
  const textareaRef2 = useRef(null);

  const [text3, setText3] = useState("");
  const [savedTexts3, setSavedTexts3] = useState([]); // Store multiple saved texts
  const [isEditing3, setIsEditing3] = useState(false); // Track if the user is editing
  const [editIndex3, setEditIndex3] = useState(null);
  const textareaRef3 = useRef(null);

  const [text4, setText4] = useState("");
  const [savedTexts4, setSavedTexts4] = useState([]); // Store multiple saved texts
  const [isEditing4, setIsEditing4] = useState(false); // Track if the user is editing
  const [editIndex4, setEditIndex4] = useState(null);
  const textareaRef4 = useRef(null);

  const [text5, setText5] = useState("");
  const [savedTexts5, setSavedTexts5] = useState([]); // Store multiple saved texts
  const [isEditing5, setIsEditing5] = useState(false); // Track if the user is editing
  const [editIndex5, setEditIndex5] = useState(null);
  const textareaRef5 = useRef(null);

  // ////////////////////////////////////////////////////////////////////
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
        `notepadTextspage2_${userId}`,
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
      `notepadTextspage2_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTextspage2_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  // //////////////////////////////////////////////////////////////////
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
        `notepadText2spage2_${userId}`,
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
      `notepadText2spage2_${userId}`,
      JSON.stringify(updatedTexts2)
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(`notepadText2spage2_${userId}`);
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  // //////////////////////////////////////////////////////////////
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
        `notepadText3spage2_${userId}`,
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
      `notepadText3spage2_${userId}`,
      JSON.stringify(updatedTexts3)
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(`notepadText3spage2_${userId}`);
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  // //////////////////////////////////////////////////////////////
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
        `notepadText4spage2_${userId}`,
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
      `notepadText4spage2_${userId}`,
      JSON.stringify(updatedTexts4)
    );
  };

  useEffect(() => {
    const savedData4 = localStorage.getItem(`notepadText4spage2_${userId}`);
    if (savedData4) {
      setSavedTexts4(JSON.parse(savedData4));
    }
  }, []);

  // ///////////////////////////////////////////////////////////
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
        `notepadText5spage2_${userId}`,
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
      `notepadText5spage2_${userId}`,
      JSON.stringify(updatedTexts5)
    );
  };

  useEffect(() => {
    const savedData5 = localStorage.getItem(`notepadText5spage2_${userId}`);
    if (savedData5) {
      setSavedTexts5(JSON.parse(savedData5));
    }
  }, []);

  // ////////////////////////////////////////////////////

  const words = {
    P: "Petrol",
    O: "Oil",
    W: "Water",
    D: "Damage",
    E: "Electrics",
    R: "Rubber",
    Y: "You",
  };

  // /////////////////////////////////////////////////////
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Vehicle Checks to Perform Before the Test"; // First part before "Driving"

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

        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.AdiModuleOneTextArea}>
          <h2>
            What types of things were you asked, and did you need to check?
          </h2>
          {/* ////////////////////////////////////////////////////////////// */}
          <div className={styles.AdiModuleOneTextBox}>
            <label>Write your answer below</label>
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

        {/* //////////////////////////////////// */}
        <div className={styles.AdiModuleContentBox}>
          <div className={styles.AdiModuleContentParaBox}>
            <p>
              Before starting any journey, it is essential to carry out a few
              basic vehicle checks to ensure your car is safe, roadworthy, and
              performing efficiently. These checks help prevent breakdowns,
              improve safety, and reduce the risk of accidents.
              <br />
              A great way to remember your vehicle checks is the POWERY model.
              <br />
              Have a think about what each letter could mean in relation to
              vehicle checks and click each letter to reveal the answer.
            </p>
          </div>

          {/* /////////////////////////////////////////////////////////////// */}
          <div className={styles.powerword}>
            <span
              className={styles.powerwordletter}
              onMouseEnter={() => setHoveredLetter("P")}
              onMouseLeave={() => setHoveredLetter(null)}
            >
              P
              <p>
                {" "}
                {hoveredLetter === "P" && (
                  <span className="word">{words["P"]}</span>
                )}
              </p>
            </span>
            <p id={styles.powerwordPara}>
              Ensure that you have sufficient fuel for your journey
            </p>
            <span
              className={styles.powerwordletter}
              onMouseEnter={() => setHoveredLetter("O")}
              onMouseLeave={() => setHoveredLetter(null)}
            >
              O
              <p>
                {" "}
                {hoveredLetter === "O" && (
                  <span className="word">{words["O"]}</span>
                )}
              </p>
            </span>
            <p id={styles.powerwordPara}>
              Check your oil level when the engine is cold using the Dipstick
              and min and max marker
            </p>
            <span
              className={styles.powerwordletter}
              onMouseEnter={() => setHoveredLetter("W")}
              onMouseLeave={() => setHoveredLetter(null)}
            >
              W
              <p>
                {hoveredLetter === "W" && (
                  <span className="word">{words["W"]}</span>
                )}
              </p>
            </span>
            <p id={styles.powerwordPara}>
              Check you Radiator (and screen wash) water levels, including
              coolant/antifreeze mixture are all in between the min and max
              makers
            </p>
            <span
              className={styles.powerwordletter}
              onMouseEnter={() => setHoveredLetter("D")}
              onMouseLeave={() => setHoveredLetter(null)}
            >
              D
              <p>
                {" "}
                {hoveredLetter === "D" && (
                  <span className="word">{words["D"]}</span>
                )}
              </p>
            </span>
            <p id={styles.powerwordPara}>
              Check for damage on the car, windscreen cracks.
            </p>
            <span
              className={styles.powerwordletter}
              onMouseEnter={() => setHoveredLetter("E")}
              onMouseLeave={() => setHoveredLetter(null)}
            >
              E
              <p>
                {" "}
                {hoveredLetter === "E" && (
                  <span className="word">{words["E"]}</span>
                )}
              </p>
            </span>
            <p id={styles.powerwordPara}>
              Ensure all electrics are working such as headlights, brake lights,
              indicators, hazard lights, number plate lights, interior warning
              lights
            </p>
            <span
              className={styles.powerwordletter}
              onMouseEnter={() => setHoveredLetter("R")}
              onMouseLeave={() => setHoveredLetter(null)}
            >
              R
              <p>
                {hoveredLetter === "R" && (
                  <span className="word">{words["R"]}</span>
                )}
              </p>
            </span>
            <p id={styles.powerwordPara}>
              Check your tyres! Your tread depth should be 1.6mm and have no
              cuts bulges or tears. Check your tyre pressure using a pressure
              gauge when cold
            </p>
            <span
              className={styles.powerwordletter}
              onMouseEnter={() => setHoveredLetter("Y")}
              onMouseLeave={() => setHoveredLetter(null)}
            >
              Y
              <p>
                {hoveredLetter === "Y" && (
                  <span className="word">{words["Y"]}</span>
                )}
              </p>
            </span>
            <p id={styles.powerwordPara}>
              How do you feel? Ensure you Not tired/under influence of drink or
              drugs, wearing any spectacles prescribed
            </p>
          </div>
        </div>

        {/* ////////////////////////////////////////////////////////////// */}
        <section className={styles.instructorContainer}>
          <div className={styles.AdiModuleContentBox}>
            <h2>Vehicle Technology</h2>
            <div className={styles.AdiModuleContentParaBox}>
              <p>
                During your part 2 test the examiner will want you to make use
                of your vehicle technology if appropriate. Below are some
                examples of vehicle technology that you must be confident with.
              </p>
            </div>
            <div className={styles.detailsContainer}>
              {/* <DrivingInstructorUI /> */}
              <div className={styles.flipContainer2}>
                <div className={styles.flipbox2}>
                  <div
                    className={styles.flipboxfront2}
                    id={styles.flipboxfront233}
                  >
                    <div className="opicity"></div>
                    <h2>CLICK TO FLIP</h2>
                  </div>
                  <div
                    className={styles.trainingDetails}
                    id={styles.trainingDetails1}
                  >
                    <h3>Dashboard controls:</h3>
                    <hr />
                    <p>
                      Know the location and function of key controls such as
                      lights, wipers, hazard lights
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.flipContainer2}>
                <div className={styles.flipbox2}>
                  <div
                    className={styles.flipboxfront2}
                    id={styles.flipboxfront244}
                  >
                    <div className="opicity"></div>
                    <h2>CLICK TO FLIP</h2>
                  </div>
                  <div
                    className={styles.trainingDetails}
                    id={styles.trainingDetails2}
                  >
                    <h3>Electronic parking brake:</h3>
                    <hr />
                    <p>
                      If applicable, ensure you can operation the electronic
                      parking brake confidently, including hill starts
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.flipContainer2}>
                <div className={styles.flipbox2}>
                  <div
                    className={styles.flipboxfront2}
                    id={styles.flipboxfront255}
                  >
                    <div className="opicity"></div>
                    <h2>CLICK TO FLIP</h2>
                  </div>

                  <div
                    className={styles.trainingDetails}
                    id={styles.trainingDetails3}
                  >
                    <h3>Sat Nav:</h3>
                    <hr />
                    <p>
                      Be comfortable following directions from a sat nav – this
                      may be required during the test
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.flipContainer2}>
                <div className={styles.flipbox2}>
                  <div
                    className={styles.flipboxfront2}
                    id={styles.flipboxfront266}
                  >
                    <div className="opicity"></div>
                    <h2>CLICK TO FLIP</h2>{" "}
                  </div>
                  <div className={styles.trainingDetails}>
                    <h3>Eco Driving Features:</h3>
                    <hr />
                    <p>
                      Understand how to use stop -start features if applicable
                      Understand and confidently use cruise control or speed
                      limiters if applicable
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.flipContainer2}>
                <div className={styles.flipbox2}>
                  <div
                    className={styles.flipboxfront2}
                    id={styles.flipboxfront277}
                  >
                    <div className="opicity"></div>
                    <h2>CLICK TO FLIP</h2>
                  </div>
                  <div
                    className={styles.trainingDetails}
                    id={styles.trainingDetails5}
                  >
                    <h3>Air conditioning/Demisters:</h3>
                    <hr />
                    <p>
                      Know how to adjust temperature setting and clear
                      windscreen fog quickly and efficiently
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.flipContainer2}>
                <div className={styles.flipbox2}>
                  <div
                    className={styles.flipboxfront2}
                    id={styles.flipboxfront288}
                  >
                    <div className="opicity"></div>
                    <h2>CLICK TO FLIP</h2>
                  </div>
                  <div
                    className={styles.trainingDetails}
                    id={styles.trainingDetails6}
                  >
                    <h3>Reversing aids:</h3>
                    <hr />
                    <p>
                      Familiarise yourself with reversing cameras or sessions
                      and understand their use and limitations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* //////////////////////////////////////////////////////////////// */}
        <section className={styles.AdiModuleContentBox}>
          <h2>Task:</h2>
          <div className={styles.AdiModuleContentParaBox}>
            <p>Spend 15 minutes inside your vehicle exploring the following:</p>
          </div>
          <div className={styles.AdiModuleContentBoxLists}>
            <ul>
              <li>
                <strong>Locate and operate:</strong>
                <br />
                Wipers, lights, and hazard indicators.
                <br />
                Air conditioning and demister settings.
                <br />
                Speed Limiter/Cruise Control and other technologies
              </li>
              <li>
                Practice using the sat-nav to input a destination and follow
                directions.
              </li>
              <li>
                Test reversing aids in a safe location to understand their
                functionality.
              </li>
            </ul>
          </div>
        </section>

        {/* ///////////////////////////////////////////////////////////// */}
        <section className={styles.AdiModuleOneTextArea}>
          {/* ////////////////////////////////////////////////////////////// */}
          <div className={styles.AdiModuleOneTextBox}>
            <label>
              If you are using your trainers car, take some time to study this.
              Write down below what is different about their car to yours and
              how this could affect your driving and test.
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

        {/* /////////////////////////////////////////////////////////////////////////// */}
        <section className={styles.AdiModuleOneTextArea}>
          <h2>
            After completing the activity, answer the following questions:
          </h2>
          {/* ////////////////////////////////////////////////////////////// */}
          <div className={styles.AdiModuleOneTextBox}>
            <label>Which vehicle checks did you find easiest?</label>
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

        {/* /////////////////////////////////////////////////////////////////////// */}
        <section className={styles.AdiModuleOneTextArea}>
          {/* ////////////////////////////////////////////////////////////// */}
          <div className={styles.AdiModuleOneTextBox}>
            <label>
              Are there any vehicle features you need more practice with (e.g.,
              sat-nav, electronic parking brake)?
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
        </section>
        {/* ////////////////////////////////////////////////////////////// */}
        <section className={styles.AdiModuleOneTextArea}>
          {/* ////////////////////////////////////////////////////////////// */}
          <div className={styles.AdiModuleOneTextBox}>
            <label>
              What steps will you take to improve your familiarity with these
              features before the test?
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
        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h1>Start Quiz</h1>
            <h3>15 Questions</h3>
            <p></p>
            <Link to="/takequizCatName/Vehicle-Checks">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}

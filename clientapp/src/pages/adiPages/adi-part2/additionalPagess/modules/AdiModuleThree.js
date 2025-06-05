import React from "react";
import styles from "./AdiModuleOne.module.css";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { Link } from "react-router-dom";
import backgroundImage from "../../../../../assets/images/whatjpg.jpg";

export default function AdiModuleThree() {
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;
  const skills = [
    "Observing hazards early",
    "Planning my actions",
    "Smooth Gear Changes",
    "Eco Safe Driving Habits",
    "Maintaining Vehicle Control",
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);

  const toggleGlossary = () => {
    setIsVisible((prevState) => !prevState); // Toggle visibility
  };
  const toggleGlossary2 = () => {
    setIsVisible2((prevState) => !prevState); // Toggle visibility
  };
  const toggleGlossary3 = () => {
    setIsVisible3((prevState) => !prevState); // Toggle visibility
  };
  const toggleGlossary4 = () => {
    setIsVisible4((prevState) => !prevState); // Toggle visibility
  };
  const toggleGlossary5 = () => {
    setIsVisible5((prevState) => !prevState); // Toggle visibility
  };

  // ////////////////////////////////////////////////////////////////////////////////
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
        `notepadTextspage3_${userId}`,
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
      `notepadTextspage3_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTextspage3_${userId}`);
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
        `notepadText2spage3_${userId}`,
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
      `notepadText2spage3_${userId}`,
      JSON.stringify(updatedTexts2)
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(`notepadText2spage3_${userId}`);
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
        `notepadText3spage3_${userId}`,
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
      `notepadText3spage3_${userId}`,
      JSON.stringify(updatedTexts3)
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(`notepadText3spage3_${userId}`);
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
        `notepadText4spage3_${userId}`,
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
      `notepadText4spage3_${userId}`,
      JSON.stringify(updatedTexts4)
    );
  };

  useEffect(() => {
    const savedData4 = localStorage.getItem(`notepadText4spage3_${userId}`);
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
        `notepadText5spage3_${userId}`,
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
      `notepadText5spage3_${userId}`,
      JSON.stringify(updatedTexts5)
    );
  };

  useEffect(() => {
    const savedData5 = localStorage.getItem(`notepadText5spage3_${userId}`);
    if (savedData5) {
      setSavedTexts5(JSON.parse(savedData5));
    }
  }, []);

  // ////////////////////////////////////////////////////////////////////////////////
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart =
      "What is Advanced Driving in Relation to the ADI Part 2 Exam?"; // First part before "Driving"

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

  // ///////////////////////////////////////////////////////////////////
  const [skillFeedback, setSkillFeedback] = useState({});

  const handleSkillClick = (skill, feedbackType) => {
    const updatedFeedback = {
      ...skillFeedback,
      [skill]: {
        userId,
        feedback: feedbackType,
      },
    };
    setSkillFeedback(updatedFeedback);

    // Save to localStorage
    localStorage.setItem("userSkillFeedback", JSON.stringify(updatedFeedback));
  };

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("userSkillFeedback"));
    if (savedFeedback) {
      setSkillFeedback(savedFeedback);
    }
  }, []);

  return (
    <>
      <div className={styles.AdiModuleOnecontainer}>
        <section
          className={styles.AdiModuleOneheader}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "bottom",
          }}>
          <div className="opicity"></div>
          <section className={styles.AdiModuleOneheading}>
            {" "}
            <h1 ref={textRef}>{splitText()}</h1>
          </section>
        </section>
        <div className={styles.AdiModuleContentBox}>
          <div className={styles.AdiModuleContentParaBox}>
            <p>
              Advanced driving requires a high level of skill, awareness, and
              control to ensure safety, efficiency, and professionalism on the
              road. It involves a combination of observation, planning, vehicle
              control, eco-safe driving, legal compliance, and the right
              mindset. Mastering these components is essential for anyone aiming
              to drive at an advanced level, particularly for those preparing
              for professional driving tests.
            </p>
          </div>
        </div>
        <div className={styles.videoContainer}>
          <h2 className={styles.videotitle}>Watch Our Video</h2>
          <div className={styles.videodesign}>
            <iframe
              width="100%"
              height="300px"
              src="https://www.youtube.com/embed/JJqpyJE1lO4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
        </div>
        <section className={styles.instructorContainer}>
          <div className={styles.AdiModuleContentBox}>
            <h2>Observation and Planning</h2>
            <div className={styles.dropdownContainer}>
              {" "}
              <div className={styles.downArrowiconDiv}>
                <FaRegArrowAltCircleDown
                  onClick={toggleGlossary}
                  className={`${styles.downArrowicon} ${
                    isVisible ? styles.rotate : ""
                  }`}
                />
                <p>CLICK ME</p>
              </div>
              <div className={styles.AdiModuleContentParaBox121}>
                <div
                  className={`${styles.AdiModuleContentParaBox23} ${
                    isVisible ? styles.glossarycontainerOneshow : ""
                  }`}>
                  <p>
                    One of the most crucial aspects of advanced driving is
                    observation. A skilled driver constantly scans the road
                    ahead, to the sides, and behind using mirrors to maintain
                    full awareness of their surroundings. This includes
                    identifying potential hazards early, such as pedestrians,
                    cyclists, changing road conditions, or unpredictable
                    weather. By actively monitoring these factors, drivers can
                    make informed decisions and reduce the likelihood of
                    accidents.
                  </p>
                  <p>
                    Planning is equally important, as it allows drivers to
                    anticipate how hazards may develop and take the necessary
                    precautions. This involves adjusting speed and positioning
                    the vehicle appropriately for maximum safety and efficiency.
                    For example, when approaching a bend, an advanced driver
                    will position their vehicle to optimise visibility and
                    control. Similarly, at junctions or roundabouts, they will
                    assess traffic flow in advance to ensure smooth navigation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.AdiModuleContentBox}>
            <h2>Vehicle Control</h2>
            <div className={styles.dropdownContainer}>
              {" "}
              <div className={styles.downArrowiconDiv}>
                <FaRegArrowAltCircleDown
                  onClick={toggleGlossary2}
                  className={`${styles.downArrowicon} ${
                    isVisible2 ? styles.rotate : ""
                  }`}
                />
                <p>CLICK ME</p>
              </div>
              <div className={styles.AdiModuleContentParaBox122}>
                <div
                  className={`${styles.AdiModuleContentParaBox23} ${
                    isVisible2 ? styles.glossarycontainerOneshow : ""
                  }`}>
                  <p>
                    Maintaining full control of the vehicle is essential for
                    advanced driving. This starts with smooth acceleration and
                    braking. A skilled driver applies gentle, progressive
                    pressure to the accelerator and brakes, avoiding sudden
                    jolts that could destabilize the vehicle or cause discomfort
                    to passengers. This smooth driving style not only enhances
                    safety but also improves fuel efficiency.
                  </p>
                  <p>
                    Gear selection is another key factor in vehicle control.
                    Advanced drivers use the appropriate gear for their speed
                    and road conditions, shifting smoothly to avoid unnecessary
                    engine strain. Keeping the engine within its optimal power
                    range helps maintain efficiency and control, particularly
                    when navigating challenging road conditions such as steep
                    inclines or heavy traffic.
                  </p>
                  <p>
                    Steering technique also plays a vital role in advanced
                    driving. A controlled and consistent approach, such as the
                    push-pull method, ensures precise handling, particularly
                    when manoeuvring through bends and turns. Maintaining a firm
                    yet relaxed grip on the wheel allows for quick adjustments
                    while keeping the vehicle stable and balanced.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.AdiModuleContentBox}>
            <h2>Eco-Safe Driving</h2>
            <div className={styles.dropdownContainer}>
              {" "}
              <div className={styles.downArrowiconDiv}>
                <FaRegArrowAltCircleDown
                  onClick={toggleGlossary3}
                  className={`${styles.downArrowicon} ${
                    isVisible3 ? styles.rotate : ""
                  }`}
                />
                <p>CLICK ME</p>
              </div>
              <div className={styles.AdiModuleContentParaBox123}>
                <div
                  className={`${styles.AdiModuleContentParaBox23} ${
                    isVisible3 ? styles.glossarycontainerOneshow : ""
                  }`}>
                  <p>
                    Eco-safe driving is an integral part of advanced driving,
                    focusing on minimizing fuel consumption and reducing wear
                    and tear on the vehicle. This involves maintaining a steady
                    speed, avoiding harsh acceleration, and using higher gears
                    where possible. By driving smoothly and efficiently, drivers
                    can lower emissions, save on fuel costs, and extend the
                    lifespan of their vehicle. Simple habits such as
                    anticipating traffic flow, coasting when appropriate, and
                    reducing unnecessary braking all contribute to a more
                    environmentally friendly and cost-effective driving style.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.AdiModuleContentBox}>
            <h2>Legal Compliance</h2>
            <div className={styles.dropdownContainer}>
              {" "}
              <div className={styles.downArrowiconDiv}>
                <FaRegArrowAltCircleDown
                  onClick={toggleGlossary4}
                  className={`${styles.downArrowicon} ${
                    isVisible4 ? styles.rotate : ""
                  }`}
                />
                <p>CLICK ME</p>
              </div>
              <div className={styles.AdiModuleContentParaBox124}>
                <div
                  className={`${styles.AdiModuleContentParaBox23} ${
                    isVisible4 ? styles.glossarycontainerOneshow : ""
                  }`}>
                  <p>
                    Adhering to road laws and regulations is fundamental to
                    advanced driving. Drivers must strictly follow the Highway
                    Code, ensuring they comply with speed limits, road signs,
                    and traffic signals at all times. Correct procedures must
                    also be demonstrated at pedestrian crossings, roundabouts,
                    and junctions, showing an understanding of right-of-way
                    rules and safe interactions with other road users. Legal
                    compliance not only prevents penalties and fines but also
                    reinforces responsible driving habits that promote road
                    safety.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.AdiModuleContentBox}>
            <h2>Mindset and Professionalism</h2>
            <div className={styles.dropdownContainer}>
              {" "}
              <div className={styles.downArrowiconDiv}>
                <FaRegArrowAltCircleDown
                  onClick={toggleGlossary5}
                  className={`${styles.downArrowicon} ${
                    isVisible5 ? styles.rotate : ""
                  }`}
                />
                <p>CLICK ME</p>
              </div>
              <div className={styles.AdiModuleContentParaBox125}>
                <div
                  className={`${styles.AdiModuleContentParaBox23} ${
                    isVisible5 ? styles.glossarycontainerOneshow : ""
                  }`}>
                  <p>
                    Beyond technical skills, advanced driving requires the right
                    mindset. A professional driver remains composed under
                    pressure, adapting smoothly to changing road conditions and
                    unexpected situations. Courtesy and respect for other road
                    users are also essential, whether allowing pedestrians to
                    cross safely, giving way to merging traffic, or maintaining
                    a safe following distance. By demonstrating patience and
                    awareness, advanced drivers contribute to a safer and more
                    cooperative driving environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.AdiModuleContentBox}>
            <div className={styles.AdiModuleContentParaBox}>
              <p>
                In summary, advanced driving is a combination of skill,
                awareness, efficiency, and professionalism. By mastering
                observation and planning, maintaining precise vehicle control,
                driving in an eco-friendly manner, following legal requirements,
                and fostering a responsible mindset, drivers can enhance their
                safety and competence on the road.
              </p>
            </div>
          </div>
        </section>
        {/* ////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleContentBox}>
          <div className={styles.adimoduletableContainer}>
            <table className={styles.adimoduleskillTable}>
              <thead>
                <tr>
                  <th>Skill</th>
                  <th>
                    Confident <span className={styles.adimoduletick}>✔</span>
                  </th>
                  <th>
                    Needs Improvement{" "}
                    <span className={styles.adimodulecross}>✘</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {skills.map((skill, index) => {
                  const feedback = skillFeedback[skill]?.feedback;

                  return (
                    <tr key={index}>
                      <td>{skill}</td>
                      <td
                        className={styles.iconCell}
                        onClick={() => handleSkillClick(skill, "confident")}
                        style={{
                          cursor: "pointer",
                          color: feedback === "confident" ? "green" : "#ccc",
                        }}>
                        ✔
                      </td>
                      <td
                        className={styles.iconCell}
                        onClick={() =>
                          handleSkillClick(skill, "needsImprovement")
                        }
                        style={{
                          cursor: "pointer",
                          color:
                            feedback === "needsImprovement" ? "red" : "#ccc",
                        }}>
                        ✘
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.AdiModuleContentBox}>
          <div className={styles.AdiModuleContentParaBox}>
            <p style={{ marginTop: "0.8rem" }}>
              1. Go for a short drive in a controlled environment (with your
              trainer if needed).
            </p>
            <p style={{ marginTop: "0.8rem" }}>
              2. During the drive, focus on the following tasks:<br></br>- Spot
              hazards early (e.g., parked cars, cyclists, or junctions).
              <br />- Verbally describe what you see and explain how you’re
              responding to it (e.g., slowing down, changing lanes).
            </p>
            <p style={{ marginTop: "0.8rem" }}>
              {" "}
              E.g. I am going to take the next turn on the left, I am beginning
              my observations checking my centre left mirror, applying my left
              indicator, slowing down slowly with my brake, checking my left
              mirror before I turn’
            </p>
          </div>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////// */}
        <section className={styles.AdiModuleOneTextArea}>
          {/* ////////////////////////////////////////////////////////////// */}
          <div className={styles.AdiModuleOneTextBox}>
            <label>
              3. Ask your trainer or a trusted observer to provide feedback on
              your performance. What was the feedback? Did you do better or
              worse than you predicted? What will you learn from this?
            </label>
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

        <section className={styles.AdiModuleOneTextArea}>
          <h2>After the activity, answer these questions:</h2>
          {/* ////////////////////////////////////////////////////////////// */}
          <div className={styles.AdiModuleOneTextBox}>
            <label>
              1. What was your biggest strength in advanced driving?
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
              Which area needs the most improvement (e.g., smoother control,
              better planning)?
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
              3. What will you do differently in your next practice session to
              enhance your skills?
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
              - Practice advanced driving during your day whether it be driving
              to work or on the school run, focusing on your weakest skill from
              the self-assessment.
            </label>
            <label>
              What do you think is the most challenging aspect of advanced
              driving, and how do you plan to improve it?
            </label>
            <label>
              Review the Highway Code to reinforce legal compliance and driving
              etiquette.
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
        <div className={styles.adiLastNextbtn}>
          <Link to="/quizModulefour">
            {" "}
            <button className={styles.adinextbtns}>Next Page</button>
          </Link>
        </div>

        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h1>Start Quiz</h1>
            <h3>15 Questions</h3>
            <p></p>
            <Link to="/takequizCatName/Advanced-Driving-in-Relation-to-the-ADI">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FaCheckCircle, FaLightbulb, FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Adi3Moduletwo() {
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
        `notepadTexts1Part3_${userId}`,
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
      `notepadTexts1Part3_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTexts1Part3_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  //   //////////////////////////////////////////////////////////////////////

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
        `notepadText2sPart3_${userId}`,
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
      `notepadText2sPart3_${userId}`,
      JSON.stringify(updatedTexts2)
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(`notepadText2sPart3_${userId}`);
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  //   /////////////////////////////////////////////////////////////////
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
        `notepadText3sPart3_${userId}`,
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
      `notepadText3sPart3_${userId}`,
      JSON.stringify(updatedTexts3)
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(`notepadText3sPart3_${userId}`);
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  //////////////////////////////////////////////////////

  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "What makes a good instructor?"; // First part before "Driving"

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

  //   /////////////////////////////////////////////////////////////////
  const Section = ({ title, items, example }) => (
    <motion.div
      className={styles.Adi3rdlastsection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <FaCheckCircle /> {item}
          </li>
        ))}
      </ul>
      {example && (
        <p className={styles.Adi3rdlastexample}>
          <FaLightbulb /> {example}
        </p>
      )}
    </motion.div>
  );
  //   ///////////////////////////////////////////////////////////////

  return (
    <div className={styles.AdiModuleOnecontainer}>
      <section className={styles.AdiModuleOneheader}>
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>

      {/* ////////////////////////////////////////////////////////////// */}
      <section className={styles.AdiModuleOneTextArea}>
        {/* ////////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            Think back to your own driving lessons—do you remember your
            instructor? <br /> What stood out to you? Were they patient and
            encouraging, or did they make you feel nervous? What qualities did
            you appreciate, and what could have been better? Take a moment to
            reflect and jot down your thoughts.
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

      <div className={styles.Adiparttwowrapper}>
        <motion.div
          className={styles.Adiparttwocontainer}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className={styles.Adiparttwoparagraph}
            whileHover={{ scale: 1.02 }}
          >
            Being a driving instructor is more than just teaching someone to
            operate a car. You become a teacher, coach, mentor, and sometimes
            even a confidant. Your students will look to you not just for
            driving skills but for confidence, reassurance, and guidance.
          </motion.p>

          <motion.p
            className={styles.Adiparttwoparagraph}
            whileHover={{ scale: 1.02 }}
          >
            Now, consider this: What do you want your students to remember about
            you? When they reflect on their lessons years from now, what
            qualities do you hope stand out? Think about the impact you want to
            have and note down your thoughts.
          </motion.p>
        </motion.div>
      </div>

      {/* //////////////////////////////////////////////////////////////////////////////// */}
      <div className={styles.AdiModuleOneTextBox}>
        <label>
          Which do you think is better for the best view of the road, Write your
          thoughts below
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

      {/* //////////////////////////////////////////////////////////////////////////// */}
      <div className={styles.Adiparttwowrapper}>
        <motion.div
          className={styles.Adiparttwocontainer}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p className={styles.paragraph} whileHover={{ scale: 1.02 }}>
            As an instructor, you play a crucial role in shaping a learner’s
            driving habits. The way you teach, support, and guide them will
            influence how they drive long after you’re no longer in the car with
            them.
          </motion.p>

          <motion.p className={styles.paragraph} whileHover={{ scale: 1.02 }}>
            Imagine this: A student you trained for a year is involved in a
            fatal road collision. How would that make you feel? Now, flip the
            perspective—what if it was your friend or family member learning
            from another instructor? How would you want them to be taught and
            treated?
          </motion.p>

          <motion.p className={styles.paragraph} whileHover={{ scale: 1.02 }}>
            This is why your job isn’t just about helping learners pass a
            test—it’s about creating safer drivers for life.
          </motion.p>

          <motion.h2
            className={styles.subheading}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Sparkles size={24} className={styles.icon} /> Customer Service
          </motion.h2>
        </motion.div>
      </div>
      {/* ///////////////////////////////////////////////////////////////// */}
      <section className={styles.AdiModuleOneTextArea}>
        <div className={styles.AdiModuleOneTextBox}>
          <label>1. What do you class as good customer service?</label>
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
      </section>

      {/* //////////////////////////////////////////////////////////////////////////// */}
      <div className={styles.Adi3rdlastcontainer}>
        <motion.h1
          className={styles.Adi3rdlasttitle}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          What Makes Good Customer Service in Driving Instruction
        </motion.h1>

        <Section
          title="1. Clear and Effective Communication"
          items={[
            "Listening to the Learner: Understanding their concerns, anxieties, and goals.",
            "Explaining Clearly: Giving easy-to-follow instructions in a calm, patient manner.",
            "Providing Constructive Feedback: Explaining how to improve supportively.",
          ]}
        />

        <Section
          title="2. Responsiveness & Efficiency"
          items={[
            "Punctuality: Arriving on time and keeping lessons well-structured.",
            "Quick Support: Responding promptly to booking inquiries.",
            "Following Up: Checking in on progress and readiness for tests.",
          ]}
          example="Sending a quick text before lessons to confirm times or following up after a test with encouragement."
        />

        <Section
          title="3. Empathy & Understanding"
          items={[
            "Calming Nerves: Being patient and reassuring.",
            "Adjusting to Different Learning Styles.",
            "Staying Patient: Supporting students who take longer to grasp concepts.",
          ]}
          example="A nervous learner struggles with roundabouts. Instead of rushing, break it down calmly and practice at quieter times."
        />

        <Section
          title="4. Knowledge & Expertise"
          items={[
            "Mastering the National Standard.",
            "Understanding Road Laws & Test Requirements.",
            "Providing Valuable Tips beyond just passing the test.",
          ]}
          example="Teaching eco-friendly driving techniques and hazard perception."
        />

        <Section
          title="5. Professionalism & Positive Attitude"
          items={[
            "Maintaining a Calm Demeanour.",
            "Respecting the Learner.",
            "Dressing & Behaving Professionally.",
          ]}
          example="If a learner stalls, reassure them with calm encouragement."
        />

        <Section
          title="6. Personalisation & Going the Extra Mile"
          items={[
            "Tailoring Lessons to the Learner.",
            "Providing Extra Resources.",
            "Offering Flexible Lesson Times.",
          ]}
          example="If a student struggles with parking, create a personalised strategy."
        />

        <Section
          title="7. Accountability & Problem-Solving"
          items={[
            "Taking Responsibility for scheduling mistakes.",
            "Adapting When Challenges Arise.",
            "Ensuring a Positive Experience.",
          ]}
          example="If roadworks interrupt, use it as a learning opportunity."
        />

        <Section
          title="8. Consistency Across All Channels"
          items={[
            "Professionalism in Messages & Calls.",
            "Clear Pricing & Booking Policies.",
            "Using Social Media & Reviews Wisely.",
          ]}
          example="A smooth booking system avoids confusion and builds trust."
        />

        <motion.div
          className={styles.whyItMatters}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2>
            Why Good Customer Service Matters <FaCar />
          </h2>
          <ul>
            <li>🚗 Happy learners = more referrals and better reviews.</li>
            <li>
              🚗 A positive, patient approach creates safer, more confident
              drivers.
            </li>
            <li>
              🚗 It's about lifelong driving skills, not just passing a test.
            </li>
          </ul>
        </motion.div>
      </div>

      <div className={styles.adiLastNextbtn}>
              <Link to="/legal-stuff">
                {" "}
                <button className={styles.adinextbtns}>Next Page</button>
              </Link>
            </div>

      {/* //////////////////////////////////////////////////////////// */}
      <div className={styles.quizStartDiv}>
        <section className={styles.startQuizSection}>
          <h1>Start Quiz</h1>
          <h3>15 Questions</h3>
          <p>
            Here’s a quick summary quiz to test your understanding of of Part 3:
            Good Instructor the lesson before setting off
          </p>
          <Link to="/takequizCatName/good-instructor">
            {" "}
            <button>Start Quiz</button>
          </Link>
        </section>
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Adi3Module14() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Risk Management and Responsibility"; // First part before "Driving"

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

  // /////////////////////////////////////////////////////////////////////
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
        `notepadTexts1Part3page14_${userId}`,
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
      `notepadTexts1Part3page14_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(
      `notepadTexts1Part3page14_${userId}`
    );
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  //   ///////////////////////////////////////////////////////////////
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
        `notepadTexts2Part3page14_${userId}`,
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
      `notepadTexts2Part3page14_${userId}`,
      JSON.stringify(updatedTexts2)
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page14_${userId}`
    );
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  //   //////////////////////////////////////////////////////////////////////
  const cards = [
    {
      title: "Risk Management",
      content: `
      This is about how well the instructor identifies, communicates, and manages safety risks during a driving lesson. The examiner is looking to see that the
instructor takes proactive steps to ensure safety.
      - Identifying potential hazards (e.g., busy junctions, pedestrians, incorrect road positioning).
      - Intervening appropriately — verbally or physically (dual controls) — to avoid danger.
      - Giving timely instructions to avoid placing the learner in unsafe situations.
      - Encouraging self-awareness in the learner, helping them recognise risks and think about safe decisions.
      - Not letting the learner drive beyond their ability, especially in complex situations.

      You’ll be marked poorly if:
      - You allow the pupil to make dangerous mistakes without intervention.
      - You miss obvious hazards or give unclear directions that put the learner or others at risk.
      `,
    },
    {
      title: "🧭 Responsibility",
      content: `
      "Sharing responsibility" during a driving lesson is a big concept in the ADI Part 3 exam.
      It means:
      - Balancing control between instructor and learner.
      - Helping learners gradually take more responsibility.
      - Staying ready to intervene if needed.

      It's not just instructing or controlling — it's about empowering safe, independent driving.
      `,
    },
  ];

  ///////////////////////////////////////////////////////////////////////////

  return (
    <div className={styles.AdiModuleOnecontainer}>
      <section className={styles.AdiModuleOneheader}>
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>

      <section className={styles.AdiModuleOneTextArea}>
        {/* ////////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            What do you think is meant by Risk Management and Responsibility?
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
      {/* ///////////////////////////////////////////////////// */}

      <div className={styles.adi3Module142ndwrapper}>
        <h1 className={styles.adi3Module142ndheading}>
          🚗 Driving Lesson Mastery
        </h1>
        <div className={styles.adi3Module142ndcards}>
          {cards.map((card, index) => (
            <div className={styles.adi3Module142ndcard} key={index}>
              <div className={styles.adi3Module142ndinner}>
                <div className={styles.adi3Module142ndfront}>
                  <h2>{card.title}</h2>
                  <p className={styles.adi3Module142ndtap}>Tap to reveal</p>
                </div>
                <div className={styles.adi3Module142ndback}>
                  <p>{card.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ////////////////////////////////////////////////////////////// */}
      <div className={styles.adi3Module143rdcontainer}>
        <section className={styles.adi3Module143rdsection}>
          <h1 className={styles.adi3Module143rdmainHeading}>
            Understanding the Balance of Responsibility
          </h1>
          <p className={styles.adi3Module143rdparagraph}>
            As a driving instructor, you hold the full licence, you have the
            experience, and you’re the safety net. That means you’ve got a
            duty—not just to your pupil, but to every other road user—to make
            sure that every lesson takes place in a controlled, safe learning
            environment.
          </p>
          <p className={styles.adi3Module143rdparagraph}>
            But here's the twist: your learner is behind the wheel. So,
            naturally, some responsibility for managing risk starts to shift in
            their direction. The key word here?{" "}
            <span className={styles.highlight}>Shared</span>. Because handing
            over 100% of that responsibility on day one is like throwing someone
            in the deep end and hoping they swim.
          </p>
        </section>

        <section className={styles.adi3Module143rdsection}>
          <h2 className={styles.adi3Module143rdsubHeading}>
            So... Who Does What?
          </h2>
          <p className={styles.adi3Module143rdparagraph}>
            At the start of a learner’s journey, they’re likely focused on not
            stalling, not mounting a kerb, and figuring out where their feet go.
            <span className={styles.highlight}>That’s normal. </span> Their
            capacity for broader risk awareness is limited. So your job is to
            clearly define who handles what—and adjust it as they grow.
          </p>
          <p className={styles.adi3Module143rdparagraph}>
            This isn't a one-time talk. It's a fluid, ongoing agreement. And
            like every skill you teach, how responsibility is shared should
            evolve lesson by lesson.
          </p>
        </section>

        <section className={styles.adi3Module143rdsection}>
          <h2 className={styles.adi3Module143rdsubHeading}>
            Why It Matters More Than You Think
          </h2>
          <p className={styles.adi3Module143rdparagraph}>
            New drivers are statistically more likely to be involved in an
            accident within two years of passing their test. That’s not
            necessarily about poor skills or bad luck
            <span className={styles.highlight}>
              its often about undeveloped
            </span>{" "}
            risk preception and decision-making.
          </p>
        </section>

        <section className={styles.adi3Module143rdsection}>
          <h2 className={styles.adi3Module143rdsubHeading}>
            Example Guided Script
          </h2>
          <div className={styles.adi3Module143rdscript}>
            <p>
              <span className={styles.adi3Module143rdinstructor}>
                INSTRUCTOR:
              </span>{" "}
              "Alright Maya, if you look ahead you’ll notice a small shop with a
              red sign on the left. Just before that is a road on the right, and
              I’d like you to take that turning."
            </p>
            <p>
              <span className={styles.adi3Module143rdstudent}>MAYA:</span>{" "}
              "Okay, I see it."
            </p>
            <p>
              <span className={styles.adi3Module143rdinstructor}>
                INSTRUCTOR:
              </span>{" "}
              "Great. As we approach, have a look in your centre mirror to check
              who’s behind us, and then glance at your right-hand mirror to see
              if anything’s coming up alongside us. Let me know what you
              notice."
            </p>
            <p>
              <span className={styles.adi3Module143rdstudent}>MAYA:</span>{" "}
              "Nothing in either mirror, all clear."
            </p>
            <p>
              <span className={styles.adi3Module143rdinstructor}>
                INSTRUCTOR:
              </span>{" "}
              "Perfect. Now, let’s let other road users know our intention—go
              ahead and switch on your right indicator."
            </p>
            <p>
              <span className={styles.adi3Module143rdstudent}>MAYA:</span>{" "}
              "Right signal on."
            </p>
            {/* continue script similarly */}
            <p>
              <span className={styles.adi3Module143rdinstructor}>
                INSTRUCTOR:
              </span>{" "}
              "Nice. Now come off the accelerator gently and begin to apply some
              light pressure on the brake. Let the speed drop and tell me when
              you’ve reached about 10 miles per hour."
            </p>
            <p>
              <span className={styles.adi3Module143rdstudent}>MAYA:</span>{" "}
              "Okay... that’s 10 now."
            </p>
            {/* ////////////////////////////////////////////////// */}
            <p>
              <span className={styles.adi3Module143rdinstructor}>
                INSTRUCTOR:
              </span>{" "}
              "Good. Now press the clutch pedal all the way down, shift from
              second gear into first, and bring the clutch pedal back up fully."
            </p>
            <p>
              <span className={styles.adi3Module143rdstudent}>MAYA:</span>{" "}
              "Done!"
            </p>
            {/* ///////////////////////////////////////////////////////// */}
            <p>
              <span className={styles.adi3Module143rdinstructor}>
                INSTRUCTOR:
              </span>{" "}
              "Excellent. Now, as we approach the junction, look into the new
              road to make sure it's safe and clear. Begin your turn to the
              right, steering as needed, and once you’ve made the turn, gently
              straighten the wheel so we’re driving nicely in the new road."
            </p>
            <p>
              <span className={styles.adi3Module143rdstudent}>MAYA:</span>{" "}
              "Alright! That felt smooth!"
            </p>
          </div>
        </section>

        <section className={styles.adi3Module143rdsection}>
          <h2 className={styles.adi3Module143rdsubHeading}>
            From Guided to Independent: A Gradual Shift
          </h2>
          <p className={styles.adi3Module143rdparagraph}>
            Risk-sharing isn’t static. As your learner gains experience, you
            scale back your input. At first, it’s full guidance. Then prompting.
            Eventually, they take the reins completely. That’s when you know
            they’re test-ready—and more importantly, road-ready.
          </p>
          <p className={styles.adi3Module143rdparagraph}>
            But remember: you must stick to the roles you agreed on. If you set
            your pupil up for independent driving, don’t swoop in with full
            instructions five minutes later. That’s not support—it’s
            over-instruction. And it will be noticed during your Part 3 or
            Standards Check.
          </p>
        </section>

        <section className={styles.adi3Module143rdsection}>
          <h2 className={styles.adi3Module143rdsubHeading}>
            Common Pitfalls (and How to Avoid Them)
          </h2>
          <p className={styles.adi3Module143rdparagraph}>
            New instructors sometimes misjudge this balance. They outline who’s
            responsible for what, then override those roles the moment things
            feel uncomfortable. If you're constantly taking over, your pupil
            never learns how to deal with risk—or build the confidence to try.
          </p>
          <p className={styles.adi3Module143rdparagraph}>
            Instead, keep the conversation going. Adapt roles as needed, based
            on real-time progress. Let your pupil take ownership when they’re
            ready. Coach, don’t control.
          </p>
        </section>

        <section className={styles.adi3Module143rdsection}>
          <h2 className={styles.adi3Module143rdsubHeading}>
            Activity Scenario
          </h2>
          <p className={styles.adi3Module143rdparagraph}>
            At the heart of it all, your job is to empower. You’re not just
            teaching them to drive—you’re helping them become safe, self-reliant
            drivers who can manage risk when you’re no longer in the passenger
            seat.
          </p>
          <p>So, ask yourself at the start of every lesson:</p>
          <ul>
            <li>Does my pupil know what they’re responsible for today?</li>
            <li>Do I know what I’ll be managing?</li>
            <li>Are we both clear and comfortable with this arrangement?</li>
          </ul>
          <p>
            Risk management isn’t a lecture. It’s a partnership. Make it a
            two-way street, and your learners will thank you—not just on test
            day, but every day they hit the road.
          </p>
        </section>

        <footer className={styles.adi3Module143rdfooter}>
          <p>🚗 Scenario:</p>
        </footer>
      </div>
      <div style={{ maxWidth: "1640px", margin: "1rem auto" }}>
        <div className={styles.adisix2ndintro}>
          <p>
            You’re giving a driving lesson to a 17-year-old student named Jamie.
            This is Jamie’s third lesson. The first two were in quiet
            residential areas where they practiced basic controls, turns, and
            stops. Today, you’re planning to introduce them to driving on a
            moderately busy main road for the first time.
          </p>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////// */}
      <section className={styles.AdiModuleOneTextArea}>
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            Write down how you would manage responsibility and what potential
            risks there could be
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
      </section>

      {/* ////////////////////////////////////////////////////////// */}
      <div className={styles.quizStartDiv}>
        <section className={styles.startQuizSection}>
          <h1>Start Quiz</h1>
          <h3>15 Questions</h3>
          <p>
            Here’s a quick summary quiz to test your understanding of of Part 3:
            Risk Management and Responsibility the lesson before setting off
          </p>
          <Link to="/takequizCatName/risk-management-responsbilities">
            {" "}
            <button>Start Quiz</button>
          </Link>
        </section>
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Adi3Module17() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Questioning Techniques"; // First part before "Driving"

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
  //   ////////////////////////////////////////////////

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
        `notepadTexts1Part3page17_${userId}`,
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
      `notepadTexts1Part3page17_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(
      `notepadTexts1Part3page17_${userId}`
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
        `notepadTexts2Part3page17_${userId}`,
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
      `notepadTexts2Part3page17_${userId}`,
      JSON.stringify(updatedTexts2)
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page17_${userId}`
    );
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  //   //////////////////////////////////////////////

  return (
    <div className={styles.AdiModuleOnecontainer}>
      <section className={styles.AdiModuleOneheader}>
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>
      {/* /////////////////////////////////////////////// */}
      <div className={styles.Adi3Module17container}>
        <div className={styles.Adi3Module17contentWrapper}>
          <h1 className={styles.Adi3Module17title}>Let’s Set the Scene</h1>
          <p className={styles.Adi3Module17text}>
            Imagine a driving lesson where your pupil isn’t just following
            instructions but actively thinking, reflecting, and even smiling
            while learning. Sounds pretty ideal, right? Well, that’s the magic
            of asking the right questions. Great questions don’t just fill
            silence—they spark conversations, uncover hidden knowledge, build
            trust, and turn a routine lesson into a memorable learning
            experience.
          </p>
          <h2 className={styles.Adi3Module17subTitle}>
            Why Bother Asking Questions?
          </h2>
          <p className={styles.Adi3Module17text}>
            Think of questions as the steering wheel of a good lesson—they help
            guide the direction you take with your pupil. A well-timed question
            gets them thinking about why they’re doing something, not just how.
            It invites them into the learning process instead of leaving them in
            the passenger seat. You learn what they know (and don’t), help them
            solve problems, and get to the bottom of those “I’m not sure why I
            did that” moments. It’s also a great way to build rapport, clear up
            confusion, and make sure everyone’s on the same road—literally and
            figuratively.
          </p>
          <h2 className={styles.Adi3Module17subTitle}>
            Beyond the Skill: Attitude & Behaviour Behind the Wheel
          </h2>
          <p className={styles.Adi3Module17text}>
            It’s not just about knowing how to use the clutch or when to check
            your mirrors—your pupil’s mindset plays a massive role in how they
            drive. Nervous? They might freeze at a roundabout. Overconfident?
            They might speed into a situation without assessing risk.
            Distracted, frustrated, tired, hesitant... all of these emotional
            states shape their behaviour on the road.
          </p>
          <p className={styles.Adi3Module17text}>
            That’s where open questions come in. Instead of asking, “Did you see
            that car?” (which invites a yes/no answer), try, “What were you
            thinking as you approached that junction?” or “How did you feel when
            the car pulled out in front of you?” These types of questions help
            you dig deeper, past the surface-level actions and into the
            motivations, feelings, and beliefs driving those actions.
          </p>
          <h2 className={styles.Adi3Module17subTitle}>
            Question Styles – Not One-Size-Fits-All
          </h2>
          <p className={styles.Adi3Module17text}>
            Questions come in all shapes and sizes, and knowing when and how to
            use them makes all the difference.
          </p>
          <p className={styles.Adi3Module17text}>
            When the car’s parked and the pressure’s low, go for the deep stuff.
            Ask reflective questions that make your learner pause and think:
            “What was your plan there?” or “How did that feel?” These spark
            honest conversations and help them connect the dots between thought,
            emotion, and action. Keep it casual, too—natural, chatty questions
            can break down nerves and make the lesson feel more like a team
            effort.
          </p>
          <p className={styles.Adi3Module17text}>
            Once you’re rolling, your questions need to keep up with the pace.
            On-the-move queries should be quick and focused: “Is this your
            exit?” or “What’s the speed limit here?” These keep attention sharp
            and check understanding without overloading their brain. And don’t
            forget the classics—“show me” and “tell me” questions are perfect
            for testing practical know-how.
          </p>
          <p className={styles.Adi3Module17text}>
            To really understand what’s going on in your pupil’s head, follow
            up. If they say they felt nervous, ask “What do you think made you
            feel that way?” or “Has that happened before?” You’re not just
            diagnosing the issue—you’re coaching them toward self-awareness,
            which is essential for developing safe, independent driving habits.
          </p>
          <h2 className={styles.Adi3Module17subTitle}>
            Top Tips for Asking Like a Pro
          </h2>
          <p className={styles.Adi3Module17text}>
            First things first: safety always comes first. Make sure the car
            (and your pupil) are under control before diving into a question.
            Then, really listen to their answers—showing genuine interest not
            only builds confidence but also strengthens your connection.
            Finally, keep your questions clear and well-timed. Confusing or
            poorly timed ones can distract or overwhelm your learner, and that’s
            the last thing we want when they’re trying to merge onto a
            roundabout.
          </p>
          <p className={styles.Adi3Module17text}>
            Your learner’s success isn’t just about technique—it’s about
            mindset. By asking open, thoughtful questions, you help them become
            more self-aware, more confident, and ultimately, more responsible
            behind the wheel. So next time something feels “off” in their
            driving, don’t just correct the action. Ask them what’s going on
            beneath the surface—and watch how the learning unfolds from there.
          </p>
        </div>
      </div>
      {/* //////////////////////////////////////////////// */}
      <div className={styles.adi3Module142ndwrapper2}>
        <div className={styles.adi3Module142ndcards}>
          <div className={styles.adi3Module142ndcard}>
            <div className={styles.adi3Module142ndinner}>
              <div className={styles.adi3Module142ndfront}>
                <h3>1. When They Seem Nervous or Hesitant</h3>{" "}
                <p className={styles.adi3Module142ndtap}>Tap to reveal</p>
              </div>
              <div
                className={styles.adi3Module142ndback}
                id={styles.aid3Module172ndback}
              >
                <p>
                  <strong>What you might see:</strong> Late decisions, excessive
                  braking, avoiding situations like roundabouts or junctions.
                </p>
                <strong>Try asking:</strong>
                <br />
                <ul>
                  <li>
                    “What’s going through your mind as you approach this?”
                  </li>
                  <li>“What part of this situation makes you feel unsure?”</li>
                  <li>
                    “When you paused there, what were you thinking about?”
                  </li>
                  <li>
                    “Have you felt this way in similar situations before?”
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.adi3Module142ndcards}>
          <div className={styles.adi3Module142ndcard}>
            <div className={styles.adi3Module142ndinner}>
              <div className={styles.adi3Module142ndfront}>
                <h3>2. When They’re Overconfident or Rushing</h3>{" "}
                <p className={styles.adi3Module142ndtap}>Tap to reveal</p>
              </div>
              <div
                className={styles.adi3Module142ndback}
                id={styles.aid3Module172ndback}
              >
                <p>
                  <strong>What you might see:</strong> Speeding, poor
                  observations, not anticipating hazards.
                </p>
                <strong>Try asking:</strong>
                <br />
                <ul>
                  <li>“What made you choose to go at that speed?”</li>
                  <li>“How did you assess that it was safe to continue?”</li>
                  <li>
                    “If you had to do that again, would you change anything?”
                  </li>
                  <li>“What might you have missed in that situation?”</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* ////////////////////////////////////////////////////////////////// */}
        <div className={styles.adi3Module142ndcards}>
          <div className={styles.adi3Module142ndcard}>
            <div className={styles.adi3Module142ndinner}>
              <div className={styles.adi3Module142ndfront}>
                <h3>3. When a Mistake Happens</h3>{" "}
                <p className={styles.adi3Module142ndtap}>Tap to reveal</p>
              </div>
              <div
                className={styles.adi3Module142ndback}
                id={styles.aid3Module172ndback}
              >
                <p>
                  <strong>What you might see:</strong> Wrong lane, missed
                  signal, confusion at roundabouts.
                </p>
                <strong>Try asking:</strong>
                <br />
                <ul>
                  <li>“What do you think happened there?”</li>
                  <li>“What was your plan as you approached?”</li>
                  <li>
                    “Was that what you intended to do, or did something change
                    last minute?”
                  </li>
                  <li>“What would you do differently next time?”</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* /////////////////////////////////////////////////// */}
        <div className={styles.adi3Module142ndcards}>
          <div className={styles.adi3Module142ndcard}>
            <div className={styles.adi3Module142ndinner}>
              <div className={styles.adi3Module142ndfront}>
                <h3>4. When They Seem Distracted or Disengaged</h3>{" "}
                <p className={styles.adi3Module142ndtap}>Tap to reveal</p>
              </div>
              <div
                className={styles.adi3Module142ndback}
                id={styles.aid3Module172ndback}
              >
                <p>
                  <strong>What you might see:</strong> Lack of focus, zoning
                  out, passive learning.
                </p>
                <strong>Try asking:</strong>
                <br />
                <ul>
                  <li>“You seemed a bit distracted—what’s on your mind?”</li>
                  <li>“Is anything making it hard to concentrate today?”</li>
                  <li>“What part of today’s lesson feels most challenging?”</li>
                  <li>“Is there something you’d like to focus on instead?”</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////// */}
        <div className={styles.adi3Module142ndcards}>
          <div className={styles.adi3Module142ndcard}>
            <div className={styles.adi3Module142ndinner}>
              <div className={styles.adi3Module142ndfront}>
                <h3>5. When You Want to Build Confidence</h3>{" "}
                <p className={styles.adi3Module142ndtap}>Tap to reveal</p>
              </div>
              <div
                className={styles.adi3Module142ndback}
                id={styles.aid3Module172ndback}
              >
                <p>
                  <strong>What you might see:</strong> Timid decision-making,
                  second-guessing, relying too much on you.
                </p>
                <strong>Try asking:</strong>
                <br />
                <ul>
                  <li>“What do you feel you did well in that situation?”</li>
                  <li>
                    “How did it feel when you made that decision yourself?”
                  </li>
                  <li>“What helped you stay in control there?”</li>
                  <li>
                    “What would you say to someone else in your situation?”
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////////// */}
        <div className={styles.adi3Module142ndcards}>
          <div className={styles.adi3Module142ndcard}>
            <div className={styles.adi3Module142ndinner}>
              <div className={styles.adi3Module142ndfront}>
                <h3>6. When You’re Reviewing or Reflecting at the End</h3>{" "}
                <p className={styles.adi3Module142ndtap}>Tap to reveal</p>
              </div>
              <div
                className={styles.adi3Module142ndback}
                id={styles.aid3Module172ndback}
              >
                <p>
                  <strong>What you might see:</strong> Pupil unsure how they’ve
                  done or waiting for you to lead the summary.
                </p>
                <strong>Try asking:</strong>
                <br />
                <ul>
                  <li>“What do you think went well today?”</li>
                  <li>“What would you like to get better at next time?”</li>
                  <li>“What helped you stay focused today?”</li>
                  <li>
                    “If you had to score today’s drive out of 10, what would you
                    give it—and why?”
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat the above structure for each point */}
      </div>
      <div className={styles.Adi3Module17container}>
        <div className={styles.Adi3Module17contentWrapper}>
          <h1 className={styles.Adi3Module17title}>🧠 Bonus Tip:</h1>
          <h4 style={{ textAlign: "center" }}>
            Turn Closed Questions Into Open Ones
          </h4>

          <div className={styles.adi3module17contentbox}>
            <ul>
              <li>
                <strong>Instead of: </strong> ❌ “Did you check your mirrors?”
              </li>
              <li>
                <strong>Try: </strong> ✅ “What did you see in your mirrors
                before changing lanes?”
              </li>
              <li>
                <strong>Instead of: </strong> ❌ “Did you feel ready?”
              </li>
              <li>
                <strong>Try:</strong> ✅ “What made you feel ready—or not
                ready—for that manoeuvre?”
              </li>
            </ul>
            <ul>
              <p>Try and turn these closed questions into open ones:</p>
              <li>“Did you see that pedestrian?”</li>
              <li>“Was that the right speed?”</li>
              <li>“Did you feel nervous?”</li>
              <li>“Are you ready to try that again?”</li>
            </ul>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////// */}
      <section className={styles.AdiModuleOneTextArea}>
        {/* ////////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>Write your thoughts :</label>
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
      <section className={styles.AdiModuleOneTextArea}>
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            Start to think about the curriculum for learning to drive, what
            types of questions could you ask for the subjects Write your
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
      </section>
   <div className={styles.adiLastNextbtn}>
        <Link to="/body-language">
          {" "}
          <button className={styles.adinextbtns}>Next Page</button>
        </Link>
      </div>
      {/* ///////////////////////////////////////// */}

      <div className={styles.quizStartDiv}>
        <section className={styles.startQuizSection}>
          <h1>Start Quiz</h1>
          <h3>15 Questions</h3>
          <p>
            Here’s a quick summary quiz to test your understanding of of Part 3:
            Questioning Techniques the lesson before setting off
          </p>
          <Link to="/takequizCatName/questioning-techniques">
            {" "}
            <button>Start Quiz</button>
          </Link>
        </section>
      </div>
      {/* ============================= */}
    </div>
  );
}

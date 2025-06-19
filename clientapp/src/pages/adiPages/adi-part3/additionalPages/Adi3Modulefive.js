import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

import { motion } from "framer-motion";
import movingOff from "../../../../assets/images/moving-off.png";
import forwordbaypark from "../../../../assets/images/forwordbaypark.png";
import reversebaypark from "../../../../assets/images/reversebaypark.png";
import parallelpark from "../../../../assets/images/parallelpark.png";
import parkonright from "../../../../assets/images/parkonright.png";
import emergencystop from "../../../../assets/images/emergencystop.png";
import vehicleClearance from "../../../../assets/images/vehicleclearence.png";
import majortominorright from "../../../../assets/images/majortoright.png";
import majortominorleft from "../../../../assets/images/majortoleft.png";
import majortomajorright from "../../../../assets/images/majortomajorright.png";
import majortomajorleft from "../../../../assets/images/majortomajorleft.png";
import Crossroads from "../../../../assets/images/crossroads-p3.png";
import pedestrianCrossing from "../../../../assets/images/pedestrian.png";
import meetingOncoming from "../../../../assets/images/Meeting-oncoming-traffic.png";
import planningAnticipation from "../../../../assets/images/Anticipation-and-planning.png";
import MockTests from "../../../../assets/images/Mock-testsp3.png";
import { Link } from "react-router-dom";
import backgroundImage from "../../../../assets/images/lessonStructure.jpg";

export default function Adi3Modulefive() {
  const skills = [
    { title: "Moving off Stopping", img: movingOff },
    { title: "Forward Bay Park", img: forwordbaypark },
    { title: "Reverse Bay park", img: reversebaypark },
    { title: "Parallel park", img: parallelpark },
    { title: "Park on the right", img: parkonright },
    { title: "Emergency stop", img: emergencystop },
    { title: "Vehicle clearance", img: vehicleClearance },
    { title: "Major to minor right turns", img: majortominorright },
    { title: "Major to minor left turns", img: majortominorleft },
    { title: "Major to major right turns", img: majortomajorright },
    { title: "Major to major left turns", img: majortomajorleft },
    { title: "Crossroads", img: Crossroads },
    { title: "Pedestrian Crossings", img: pedestrianCrossing },
    { title: "Meeting oncoming traffic", img: meetingOncoming },
    { title: "Anticipation and planning", img: planningAnticipation },
    { title: "Mock Tests", img: MockTests },
  ];

  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;

  //   //////////////////////////////////////////////////////////////
  const [text, setText] = useState("");
  const [savedTexts, setSavedTexts] = useState([]); // Store multiple saved texts
  const [isEditing, setIsEditing] = useState(false); // Track if the user is editing
  const [editIndex, setEditIndex] = useState(null);
  const textareaRef = useRef(null);

  const [typedText, setTypedText] = useState("");
  const [colorIndex, setColorIndex] = useState(0);

  const fullText = "Write your thoughts here...";
  const colors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF"];

  useEffect(() => {
    let charIndex = 0;
    let currentText = "";
    let isClearing = false;
    const interval = setInterval(() => {
      if (!isClearing) {
        currentText += fullText[charIndex];
        setTypedText(currentText);
        charIndex++;
        if (charIndex >= fullText.length) {
          isClearing = true;
          setTimeout(() => {
            currentText = "";
            setTypedText("");
            charIndex = 0;
            isClearing = false;
            setColorIndex((prev) => (prev + 1) % colors.length);
          }, 1000); // pause after full text
        }
      }
    }, 120);

    return () => clearInterval(interval);
  }, [colorIndex]);

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
        `notepadTexts1Part3page5_${userId}`,
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
      `notepadTexts1Part3page5_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTexts1Part3page5_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);


  // /////////////////////////////////////////
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
          `notepadTexts2Part3pagew7_${userId}`,
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
        `notepadTexts2Part3pagew7_${userId}`,
        JSON.stringify(updatedTexts2)
      );
    };
  
    useEffect(() => {
      const savedData2 = localStorage.getItem(
        `notepadTexts2Part3pagew7_${userId}`
      );
      if (savedData2) {
        setSavedTexts2(JSON.parse(savedData2));
      }
    }, []);

  // ///////////////////////////////////////////////
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Lesson Structure"; // First part before "Driving"

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


  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };
  

    const cakeLayers = [
      {
        title: "We’ve now reached the top layer of our lesson plan cake.",
        description:
          "At this stage, the learner takes full responsibility for moving and stopping the car. With these core skills now in place, you’re ready to progress to the next focus area—such assteering",
      },
      {
        title: "Now we reach the upper layer of our lesson plan cake.",
        description:
          "At this point, the student can confidently move the car in a straight line. It may now be appropriate to begin handing over more responsibility— such as managing observations and overall safety. Up until now, you've taken the lead in these areas, but if the learner is ready, this is the time to gradually transfer that responsibility to them.",
      },
      {
        title: "This is the second layer of our lesson plan cake.",
        description:
          "Once the learner has a solid grasp of the foundational skills, you can begin to introduce more responsibility. At this stage, that might involve moving the car in a straight line from point A to point B—using only first gear and focusing on straight steering. During this phase, you share responsibility for safety and observations, allowing the learner to concentrate solely on controlling the car and stopping. You may need to repeat this stage several times until they demonstrate consistent competence.",
      },
      {
        title: "This is the base layer of our lesson plan cake—the foundation.",
        description:
          "Represents the very first step in teaching a subject. For example, if the subject is Moving Off and  whopping, the foundational skill might be understanding how the clutch works and how to find the ng point. At this stage, there’s no need for the car to move—focus solely on the relevant",
      },
    ];

  //   /////////////////////////////////////////////////////////////////

  return (
    <div className={styles.AdiModuleOnecontainer}>
      <section
        className={styles.AdiModuleOneheader}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}>
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>

      {/* ///////////////////////////////////////// */}
      <section className={styles.adiModuleSectionPart}>
        <section className={styles.firstLessonModulecontainer}>
          <motion.div
            className={styles.firstLessonModulecard}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <h2 className={styles.firstLessonModuletitle}>
              How do you determine what to teach?
            </h2>
            <p className={styles.firstLessonModuletext}>
              Before starting a lesson, it's crucial to touch base with the
              learner to confirm their booking time, obtain their license
              number, and inquire about their prior driving experience. This
              helps you gauge where to begin in the curriculum. For example, if
              a learner recently failed their driving test due to a serious
              fault, you likely won't need to revisit the basics like moving off
              and stopping, as you would with someone who's never driven before.
            </p>
            <p className={styles.firstLessonModuletext}>
              It's also important to ask the learner what they aim to achieve in
              the lesson. Do they want an assessment to understand their current
              driving skills? Or are they looking to start from scratch?
            </p>
            <p className={styles.firstLessonModuletext}>
              If they claim to have experience in certain areas, assess their
              abilities firsthand. You can adjust their existing knowledge
              rather than going over the fundamentals again.
            </p>
          </motion.div>
        </section>
      </section>

      {/* ///////////////////////////////////////////////////// */}
      <section className={styles.AdiModuleOneTextArea}>
        <h2>What are the key topics to cover?</h2>
        {/* ////////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            Take some time to think about the essential skills every learner
            should master. Write down as many topics as you can think of, and
            use this as a reference point for your lessons.
          </label>

          <div className={styles.textareaWrapper}>
            {/* Colorful typing effect behind transparent textarea */}
            {text.length === 0 && (
              <div
                className={styles.fakePlaceholder}
                style={{ color: colors[colorIndex] }}>
                {typedText}
              </div>
            )}
          </div>

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
      {/* ///////////////////////////////////////////////////////// */}
      <section className={styles.adi5SectionPage}>
        <div className={styles.adi5Imgcontainer}>
          {skills.map((skill, index) => (
            <div className={styles.adi5Imgcard} key={index}>
              <img
                src={skill.img}
                alt={skill.title}
                className={styles.adi5Imgimage}
              />
              <p className={styles.adi5Imgtitle}>{skill.title}</p>
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#dddddd",
            textAlign: "center",
            maxWidth: "1240px",
            width: "100%",
            margin: "2rem auto",
          }}>
          While these topics serve as a solid foundation, keep in mind that the
          order and focus may vary based on your learner's needs and
          preferences. This is simply a guide to help structure your lessons. It
          is imperative you have excellent knowledge and understanding in all
          subjects, how can you teach someone else something you don’t know?
        </p>
      </section>

      {/* ///////////////////////////////////////////// */}

      <div className={styles.Adi3Module22container}>
        <motion.h1
          className={styles.Adi3Module22title}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          Subjects vs Skill Sets
        </motion.h1>

        <motion.p
          className={styles.Adi3Module22para}
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="visible"
        >
          When planning a lesson, it’s essential to have a clear idea of what
          your learner would benefit from. However, it’s equally important to
          remember that lesson plans should be flexible. Think of your lesson
          plan as a guide rather than a rigid structure—something that can
          evolve based on your student’s needs. There is no one-size-fits-all
          ABCD format that works for every learner or every session. Instead,
          you should develop your own approach that’s adaptable and
          student-centered.
        </motion.p>

        <motion.div
          className={styles.Adi3Module22box}
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="visible"
        >
          <strong>
            What do you think the difference between subjects vs skillsets is?
          </strong>
          <div className={styles.AdiModuleOneTextBox}>
            <textarea
              style={{
                backgroundColor: "white",
                color: "black",
                marginTop: "1rem",
              }}
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
        </motion.div>

        <motion.h2
          className={styles.Adi3Module22subTitle}
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
        >
          Let’s explore an important distinction:
        </motion.h2>

        <motion.div
          className={styles.Adi3Module22table}
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.Adi3Module22column}>
            <h3>Subjects</h3>
            <p>
              Subjects are the broader topics or goals of a lesson. For example:{" "}
              <em>
                Forward Bay Parking, Emergency Stop, Moving Off and Stopping.
              </em>
            </p>
          </div>
          <div className={styles.Adi3Module22column}>
            <h3>Skill Sets</h3>
            <p>
              Skill sets are the specific skills needed to achieve the overall
              subject. For example:{" "}
              <em>
                How to find the biting point, how to move the car in a straight
                line, how to steer accurately into a bay.
              </em>
            </p>
          </div>
        </motion.div>

        <motion.p
          className={styles.Adi3Module22para}
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate="visible"
        >
          Your lesson should be designed to break down each subject into
          manageable, bite-sized chunks. These chunks are the individual skills
          that, when combined, lead to mastery of the subject.
        </motion.p>

        <motion.p
          className={styles.Adi3Module22para}
          variants={fadeUp}
          custom={6}
          initial="hidden"
          animate="visible"
        >
          We don’t just teach <strong>what</strong> to do—we focus on{" "}
          <strong>how</strong>, <strong>why</strong>, and <strong>when</strong>{" "}
          to do it. We also develop the behaviours that support those skills,
          which leads to a deeper, more practical understanding.
        </motion.p>

        <motion.h2
          className={styles.Adi3Module22subTitle}
          variants={fadeUp}
          custom={7}
          initial="hidden"
          animate="visible"
        >
          The Importance of Structure and Simplicity
        </motion.h2>

        <motion.div
          className={styles.Adi3Module22scenario}
          variants={fadeUp}
          custom={8}
          initial="hidden"
          animate="visible"
        >
          <p>
            Now imagine this scenario: It’s your first day training for your
            Part 3 exam to become a driving instructor. Your trainer bombards
            you with a list of instructions:
          </p>
          <blockquote>
            “First ask the student this, then say that, now tell them to do
            this, and then... go!”
          </blockquote>
          <p>
            How would you feel? Overwhelmed? Confused? Unprepared? Probably.
          </p>
          <p>
            This is exactly why we break things down. Teaching should be
            delivered in clear, manageable steps so learners can absorb and
            apply what they're being taught. It’s more important that a student
            understands the
            <strong> why</strong>, <strong>how</strong>, and{" "}
            <strong>when</strong> than simply ticking off tasks.
          </p>
          <p>
            You may not complete an entire subject in one lesson—and that’s
            absolutely okay. As long as the learner is developing the necessary
            skills, they’re making progress.
          </p>
        </motion.div>

        <motion.div
          className={styles.Adi3Module22scenario}
          variants={fadeUp}
          custom={8}
          initial="hidden"
          animate="visible"
        >
          <p>
            <strong>So, How Do You Plan a Lesson?</strong>
          </p>
          <p>Start with this key question:</p>
          <p>
            <strong>
              “What skills do I need to teach in order to cover this subject?”
            </strong>
          </p>
          <p>
            We like to refer to this as building your{" "}
            <strong>“Lesson Plan Cake”</strong> —a layered approach to
            structuring learning in a way that is digestible, logical, and
            effective.
          </p>
        </motion.div>

        <div className={styles.Adi3Module22container2}>
          <h1 className={styles.Adi3Module22heading2}>Lesson Plan Cake</h1>
          <div className={styles.Adi3Module22cakeWrapper}>
            {cakeLayers.map((layer, index) => (
              <motion.div
                key={index}
                className={styles.Adi3Module22layer}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <h2 className={styles.Adi3Module22layerTitle}>{layer.title}</h2>
                <p className={styles.Adi3Module22description}>
                  {layer.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className={styles.Adi3Module22scenario}
          variants={fadeUp}
          custom={8}
          initial="hidden"
          animate="visible"
        >
          <p>
            Remember, When teaching, always focus on the{" "}
            <blockquote>
              <strong>whys, hows, and whens</strong>
            </blockquote>{" "}
            of each skill. Help your learners understand the reasoning behind
            what they’re doing—not just the actions themselves.
          </p>

          <p>
            Avoid simply giving them all the answers. Instead, use open
            questions and guided discovery to encourage them to think for
            themselves. This builds real understanding and confidence.
          </p>
          <p>
            <strong> Never say things like:</strong>
          </p>
          <ul>
            <li>✅ “Because I said so.”</li>
            <li>✅ “That’s just what you have to do to pass the test.”</li>
          </ul>
          <p>
            These responses shut down learning and don’t support long-term
            development. Your goal is to help learners understand{" "}
            <strong>whys</strong> something matters, <strong> hows </strong> to
            do it effectively, and <strong>whens</strong> to apply it in
            real-world situations. That’s what creates a safe, skilled, and
            independent driver.
          </p>
          <p>
            This is why it's essential for you, as an instructor, to fully
            understand the individual skills required within each subject—so you
            can teach them effectively and at the right pace.
          </p>
          <p>
            Also, remember:{" "}
            <strong>
              not every learner will start at the bottom layer of your cake.
            </strong>
            Some may already have prior knowledge or experience and could begin
            at the second, third, or even top layer. You’ll discover this
            through the effective use of open questions during your lesson.
          </p>
          <p>
            <strong>Task:</strong>
          </p>
          <p>
            For each driving topic, create your own Lesson Plan Cake. <br />
            Ask yourself:
          </p>
          <p>
            <strong>
              What specific skills are required to complete this subject?
            </strong>
          </p>
          <p>
            Break the subject down into clear, progressive layers—starting from
            foundational skills up to full independence.
          </p>
        </motion.div>
      </div>


      {/* //////////////////////////////////////////////////// */}

      <div className={styles.adiLastNextbtn}>
        <Link to="/gde-matrix-grow">
          {" "}
          <button className={styles.adinextbtns}>Next Page</button>
        </Link>
      </div>
      {/* ///////////////////////////////////// */}
      <div className={styles.quizStartDiv}>
        <section className={styles.startQuizSection}>
          <h1>Start Quiz</h1>
          <h3>15 Questions</h3>
          <p>
            Here’s a quick summary quiz to test your understanding of of Part 3:
            Lesson Structure the lesson before setting off
          </p>
          <Link to="/takequizCatName/lesson-structure">
            {" "}
            <button>Start Quiz</button>
          </Link>
        </section>
      </div>
    </div>
  );
}

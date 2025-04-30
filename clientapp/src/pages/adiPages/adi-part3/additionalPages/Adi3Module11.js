import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Adi3Module11() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Body Language"; // First part before "Driving"

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

  //   ///////////////////////////////////////////////////////////////////
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
        `notepadTexts1Part3page11_${userId}`,
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
      `notepadTexts1Part3page11_${userId}`,
      JSON.stringify(updatedTexts)
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(
      `notepadTexts1Part3page11_${userId}`
    );
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  //   ///////////////////////////////////////////////////

  return (
    <div className={styles.AdiModuleOnecontainer}>
      <section className={styles.AdiModuleOneheader}>
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>

      {/* ////////////////////////////////////////////////////// */}
      <div className={styles.adi11Modulecontainer}>
        <h1 className={styles.adi11Moduleheading}>
          🎭 Body Language: <span>Your Silent Superpower</span>
        </h1>

        <div className={styles.adi11Modulecontent}>
          <p className={styles.adi11Moduleparagraph}>
            Could you ever tell from someone's body language they weren’t happy
            with something you said, or just weren’t listening to you?
          </p>

          <p className={styles.adi11Moduleparagraph}>
            Imagine this: your learner stalls at a busy junction. Their heart’s
            racing, they’re gripping the wheel, and they glance at you, hoping
            for some kind of sign that the world isn’t ending.
          </p>
          <p>
            Now, you don’t even need to say a word—because your face, your
            posture, your energy? That is the message.
          </p>

          <div className={styles.adi11ModulehighlightBox}>
            <p>
              Your face, your posture, your energy?{" "}
              <strong>That is the message.</strong>
            </p>
          </div>

          <p className={styles.adi11Moduleparagraph}>
            When you’re{" "}
            <span className={styles.adi11Modulebold}>
              calm, confident, and open
            </span>
            , your learner feels safe. When you tense up, flinch, or raise your
            eyebrows at the wrong time... oof. You’ve just spoken volumes, even
            if your mouth said nothing.
          </p>

          <div className={styles.adi11ModuletipBox}>
            <h2>✨ So how do you harness that silent superpower?</h2>
            <ul>
              <li>
                ✨ Start by becoming aware of what your body’s saying. Sit tall
                but relaxed, like you’re in control but not on edge. When they
                nail a manoeuvre, give a genuine smile or even a celebratory
                “nice one!” with a little fist bump. That little moment will
                stick in their memory way more than a tick in a box.
              </li>
              <li>
                ✨ When you’re asking reflective questions—especially the deeper
                ones like “What were you thinking as you approached that?” Make
                eye contact if you’re stationary, and let your body show that
                you’re listening, not judging. A nod here, a smile there, a
                simple "hmm" of encouragement—these micro-movements tell your
                learner: I'm with you.
              </li>
              <li>
                ✨ Got a visual learner? Break out the hand gestures. Use your
                hands to show a lane change or the movement of a car at a
                roundabout. These little “air diagrams” help them see the
                situation, not just hear about it.
              </li>
              <li>
                ✨ Now let’s talk nerves. You know that moment when your learner
                misses a gear and panic creeps in? They’ll be watching you to
                see how bad it was. If your shoulders rise and you tense up like
                a startled meerkat, they’ll feel like they just failed. But if
                you keep your cool, smile, and calmly help them recover, they’ll
                learn that mistakes aren’t disasters—they’re part of the
                process.
              </li>
              <li>
                ✨ And hey, sometimes your body language can lighten the mood. A
                playful raise of the eyebrow when they forget to cancel the
                indicator for the fifth time or a mock gasp when they finally
                nail that parallel park can create shared laughs—and that builds
                trust.
              </li>
              <li>
                ✨ But a little warning: learners pick up on everything. Crossed
                arms, tapping your pen, checking your watch—it can come off as
                disapproval or impatience, even if that’s not your intent. So
                check in with yourself from time to time. Are you showing up
                with the same presence you’d want from a mentor?
              </li>
            </ul>
          </div>

          <p className={styles.adi11Moduleparagraph}>
            But remember, learners notice everything. Crossed arms? Tapping
            pens? Checking watches?{" "}
            <span className={styles.adi11Modulewarning}>
              It speaks louder than you think.
            </span>
          </p>

          <p className={styles.adi11Moduleparagraph}>
            So check yourself often: Are you showing up with the presence of the
            mentor you would want?
          </p>
        </div>
      </div>

      {/* /////////////////////////////////////////////////// */}
      <section className={styles.AdiModuleOneTextArea}>
        {/* ////////////////////////////////////////////////////////////// */}
        <div className={styles.AdiModuleOneTextBox}>
          <label>
            Have a think about types of positive and negative body language and
            write them below:
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
 <div className={styles.adiLastNextbtn}>
              <Link to="/giving-instruction-and-feedback">
              
              
                {" "}
                <button className={styles.adinextbtns}>Next Page</button>
              </Link>
            </div>
      {/* //////////////////////////////////////////// */}
       <div className={styles.quizStartDiv}>
              <section className={styles.startQuizSection}>
                <h1>Start Quiz</h1>
                <h3>15 Questions</h3>
                <p>
                  Here’s a quick summary quiz to test your understanding of of Part 3:
                  Body Language before setting off
                </p>
                <Link to="/takequizCatName/body-language">
                  {" "}
                  <button>Start Quiz</button>
                </Link>
              </section>
            </div>
    </div>
  );
}

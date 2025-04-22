import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Adi3Module() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "The National Standard for Driver and"; // First part before "Driving"
    const secondPart = "Rider Training: A Guide for Instructors";
    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    const secondLine = secondPart
      .split("")
      .map((char, index) => <span key={`second-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return (
      <>
        {firstLine}
        <br />
        {secondLine}
      </>
    );
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

  //   ///////////////////////////////////////////////////////////////////////////////////////
  const keyAreas = [
    {
      title: "Instructor Competence 🚗",
      content:
        "A great instructor needs more than just excellent driving skills. To teach effectively, you must understand road laws, driving theory, and risk management while also developing strong communication and coaching techniques.",
    },
    {
      title: "Client-Centred Learning 👨🏫",
      content:
        "Every learner is different, and your teaching approach should reflect that. Training should be tailored to individual needs and abilities, encouraging active learning and self-assessment. A supportive and respectful learning environment is essential for fostering confidence and skill development.",
    },
    {
      title: "Safe & Responsible Driving ⚠️",
      content:
        "Teaching safe driving goes beyond technique—it’s about instilling the right mindset. Instructors should focus on hazard perception, risk awareness, and decision-making. Encouraging eco-friendly driving techniques is also a key part of responsible road use.",
    },
    {
      title: "Lesson Planning & Delivery 📝",
      content:
        "Effective lessons require structure and flexibility. Instructors should follow a structured lesson plan that adapts to the learner’s progress, moving from basic skills to more complex driving scenarios while incorporating both practical and theoretical teaching methods.",
    },
    {
      title: "Legal & Professional Responsibilities ⚖️",
      content:
        "To be a successful instructor, you must comply with DVSA regulations and industry standards. Providing honest, constructive feedback is crucial, as is prioritizing health and safety at all times.",
    },
  ];

  return (
    <div className={styles.AdiModuleOnecontainer}>
      <section className={styles.AdiModuleOneheader}>
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>

      {/* ///////////////////////////////////////////////////////// */}
      <section className={styles.adiModuleSectionPart}>
        <section className={styles.firstLessonModulecontainer}>
          <motion.div
            className={styles.firstLessonModulecard}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className={styles.firstLessonModuletitle}>
              Understanding the National Standard
            </h2>
            <p className={styles.firstLessonModuletext}>
              The National Standard for Driver and Rider Training is the
              official framework that every UK driving and riding instructor
              must follow. Mastering this standard isn’t just about passing your
              test—it’s about becoming a professional, effective instructor who
              delivers high-quality training and shapes safer drivers for the
              future.
            </p>
            <p className={styles.firstLessonModuletext}>
              This standard outlines the essential skills, knowledge, and
              understanding required to provide top-tier instruction. By
              following its guidelines, instructors ensure that learners not
              only pass their tests but also develop safe and responsible
              driving habits. Ultimately, this contributes to improved road
              safety and consistency in training nationwide.
            </p>
            <motion.a
              href="https://www.gov.uk/government/publications/national-standard-for-driver-and-rider-training"
              className={styles.firstLessonModuledownloadBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={20} /> Download the National Standard
            </motion.a>
          </motion.div>
        </section>

        {/* ///////////////////////////////////////////////////////////////////// */}
        <div className={styles.firstLessonModulesecondcontainer}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.firstLessonModulesecondheading}
          >
            Key Areas of the National Standard
          </motion.h1>
          <div className={styles.firstLessonModulesecondcardGrid}>
            {keyAreas.map((area, index) => (
              <motion.div
                key={index}
                className={styles.firstLessonModulesecondcard}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h2 className={styles.firstLessonModulesecondcardTitle}>
                  {area.title}
                </h2>
                <p className={styles.firstLessonModulesecondcardContent}>
                  {area.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////// */}
        <div className={styles.firstLessonModulesecondthirdcontainer}>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.firstLessonModulesecondthirdheading}
          >
            ADI Part 3: The Final Assessment
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={styles.firstLessonModulesecondthirddescription}
          >
            The ADI Part 3 test is the final step in becoming a fully qualified
            Approved Driving Instructor (ADI). This in-car assessment, conducted
            by a DVSA examiner, lasts about 45 minutes. You’ll bring a learner
            and demonstrate your instructional skills in real time.
          </motion.p>

          <motion.div
            className={styles.firstLessonModulesecondthirdsection}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h2>Assessment Areas:</h2>
            <ul>
              <li>Lesson Planning</li>
              <li>Risk Management</li>
              <li>Teaching and Learning Strategies</li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.firstLessonModulesecondthirdscores}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h2>Scoring:</h2>
            <ul>
              <li>
                <strong>0 – 30:</strong> Fail – Performance is unsatisfactory;
                you won’t be added to the ADI register.
              </li>
              <li>
                <strong>31 – 42:</strong> Grade B – You’ll qualify and be added
                to the ADI register.
              </li>
              <li>
                <strong>43 – 51:</strong> Grade A – You’ve demonstrated a high
                standard of instruction.
              </li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.firstLessonModulesecondthirddownload}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <a
              href="https://assets.publishing.service.gov.uk/media/6537d4895e47a50014989903/adi-standards-check-form-example.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={styles.firstLessonModulesecondthirddownloadBtn}
              >
                <Download size={18} /> Download ADI Standards Form
              </button>
            </a>
          </motion.div>
        </div>

        {/* /////////////////////////////////////////////////////////////////// */}
        <div className={styles.istlesson4thcontainer}>
          <motion.h1
            className={styles.istlesson4thtitle}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Understanding the ADI Part 3 Marking Sheet
          </motion.h1>

          <motion.div
            className={styles.istlesson4thsection}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.istlesson4thheading}>Lesson Planning 📍</h2>
            <ul>
              <li>
                <strong>Identifying the learner’s goals and needs:</strong> The
                instructor should encourage the pupil to take an active role in
                setting learning objectives based on their experience and skill
                level.
              </li>
              <li>
                <strong>Appropriateness of the lesson structure:</strong> The
                lesson should be tailored to the learner’s ability, ensuring
                achievable progress within the session.
              </li>
              <li>
                <strong>Suitability of practice areas:</strong> The chosen
                location should align with the lesson’s goals, considering
                factors such as traffic, road type, and weather conditions.
              </li>
              <li>
                <strong>Adaptability of the lesson plan:</strong> A good
                instructor recognizes when adjustments are needed and involves
                the learner in making changes where necessary.
              </li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.istlesson4thsection}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.istlesson4thheading}>Risk Management 🚦</h2>
            <p>
              Risk management is about sharing responsibility for safety between
              the instructor and learner. There are five key competencies in
              this section, with a maximum of 15 points available. Scoring at
              least 8 points is essential to passing.
            </p>
            <p>
              During your lesson, the examiner will assess whether you can
              effectively control situations, maintain awareness of
              surroundings, and ensure overall safety.
            </p>
            <p>
              This doesn’t necessarily mean dramatic interventions—good risk
              management involves anticipating issues before they arise through
              proactive questioning and guidance.
            </p>
          </motion.div>

          <motion.div
            className={styles.istlesson4thsection}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.istlesson4thheading}>
              Teaching & Learning Strategies 🎓
            </h2>
            <p>
              This section evaluates how well you adapt your teaching style to
              support the learner’s development. Effective instruction involves
              clear explanations, encouraging self-reflection, and fostering
              independent thinking rather than simply giving direct commands.
            </p>
            <p>
              Balancing direct instruction with guided learning is essential.
              Constructive feedback should help the learner progress without
              overwhelming them. Lessons should be well-structured, making
              efficient use of practice time, and encouraging learners to apply
              their skills and reflect on their performance.
            </p>
            <p>
              Promoting safe and responsible driving should remain a top
              priority. Instructors must reinforce hazard perception,
              decision-making skills, and overall risk awareness, ensuring that
              learners take responsibility for their actions on the road.
            </p>
          </motion.div>
          <div className={styles.tesmktosdbkjqwpara}>
            <p>
              Mastering the{" "}
              <strong> National Standard for Driver and Rider Training </strong>{" "}
              is the foundation of being a great instructor. By following these
              principles, you won’t just help learners pass their tests—you’ll
              play a vital role in shaping safer drivers and reducing road risks
              for everyone.
            </p>
            <p>
              Stay committed to professional development, embrace client-centred
              learning, and continuously refine your teaching strategies. Not
              only will this ensure your success as an instructor, but it will
              also make UK roads safer for all. 🚗💨
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

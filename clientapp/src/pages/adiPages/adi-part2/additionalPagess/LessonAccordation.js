import React, { useState } from "react";
import styles from "./LessonAccordion.module.css";
import { FaFileAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { MdContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

const LessonAccordation = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.LessonAccordionheader}>
        <span>SKILLS</span>
        <span className={styles.LessonAccordionProgress}>14 Steps | 14 Quizzes</span>
      </div>
      <ul className={styles.listLessonData}>
     

        {/* QUIZ – Agree Goals */}
        <Link to="/quizModuleOne"> <li
          className={`${styles.itemLesson} ${openIndex === 1 ? styles.lessonOpen : ""}`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.lessonRow}>
            <span className={styles.quizIcon}><FaFileAlt /></span> Lesson Content
          </div>
          {openIndex === 1 && <p className={styles.description}>Test your knowledge about goal setting in driving lessons.</p>}
        </li></Link>
       

        {/* Giving Route Directions */}
        <li
          className={`${styles.itemLesson} ${openIndex === 2 ? styles.lessonOpen : ""}`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.lessonRow}>
            <span className={styles.checkIcon}><TiTick /></span>Agree Goals
          </div>
          {openIndex === 2 && <p className={styles.description}>Understand how to give clear and accurate route directions.</p>}
        </li>

        {/* QUIZ – Giving Route Directions */}
        <li
          className={`${styles.itemLesson} ${openIndex === 3 ? styles.lessonOpen : ""}`}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.lessonRow}>
            <span className={styles.quizIcon}><MdContactPage /></span> QUIZ – Giving Route Directions
          </div>
          {openIndex === 3 && <p className={styles.description}>Check your understanding of route directions.</p>}
        </li>

        {/* Route planning & Practice areas */}
     

        {/* QUIZ – Route Planning */}
        <li
          className={`${styles.itemLesson} ${openIndex === 5 ? styles.lessonOpen : ""}`}
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.lessonRow}>
            <span className={styles.quizIcon}><MdContactPage /></span>  Route planning & Practice areas
          </div>
          {openIndex === 5 && <p className={styles.description}>Assess your skills in route planning through a quiz.</p>}
        </li>

        {/* The Levels of Instruction */}
        <li
          className={`${styles.itemLesson} ${openIndex === 6 ? styles.lessonOpen : ""}`}
          onMouseEnter={() => handleMouseEnter(6)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.lessonRow}>
            <span className={styles.checkIcon}><TiTick /></span> QUIZ – Route Planning
          </div>
          {openIndex === 6 && <p className={styles.description}>Learn about the different levels of driving instruction.</p>}
        </li>

        {/* QUIZ – Levels of Instruction */}
        <li
          className={`${styles.itemLesson} ${openIndex === 7 ? styles.lessonOpen : ""}`}
          onMouseEnter={() => handleMouseEnter(7)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.lessonRow}>
            <span className={styles.quizIcon}><MdContactPage /></span> The Levels of Instruction
          </div>
          {openIndex === 7 && <p className={styles.description}>Evaluate your understanding of instruction levels.</p>}
        </li>

        {/* Agree Roles & Responsibilities */}
        <li
          className={`${styles.itemLesson} ${openIndex === 8 ? styles.lessonOpen : ""}`}
          onMouseEnter={() => handleMouseEnter(8)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.lessonRow}>
            <span className={styles.checkIcon}><TiTick /></span> QUIZ – Levels of Instruction
          </div>
          {openIndex === 8 && <p className={styles.description}>Understand the roles and responsibilities in driving training.</p>}
        </li>
      </ul>
    </div>
  );
};

export default LessonAccordation;

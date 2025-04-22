import React, { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import styles from "./LessonModules.module.css";
import { TiTick } from "react-icons/ti";
import { MdContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

export default function LessonModules() {
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
        <span className={styles.LessonAccordionProgress}>
          12 Steps | 10 Quizzes
        </span>
      </div>
      <ul className={styles.listLessonData}>
        {/* QUIZ – Agree Goals */}
        <Link to="/national-standards">
          {" "}
          <li
            className={`${styles.itemLesson} ${
              openIndex === 1 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.quizIcon}>
                <FaFileAlt />
              </span>
              The national standard and SC1 Form
            </div>
            {openIndex === 1 && (
              <p className={styles.description}>
                Test your knowledge about The national standard and SC1 Form
              </p>
            )}
          </li>
        </Link>

        {/* Giving Route Directions */}
        <Link to="">
          <li
            className={`${styles.itemLesson} ${
              openIndex === 2 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.checkIcon}>
                <TiTick />
              </span>
              Quiz The national standard and SC1 Form
            </div>
            {openIndex === 2 && (
              <p className={styles.description}>
                Quiz The national standard and SC1 Form
              </p>
            )}
          </li>
        </Link>

        {/* QUIZ – Giving Route Directions */}
        <Link to="/good-instructor-module">
          {" "}
          <li
            className={`${styles.itemLesson} ${
              openIndex === 3 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.quizIcon}>
                <MdContactPage />
              </span>{" "}
              What Makes a good instructor?
            </div>
            {openIndex === 3 && (
              <p className={styles.description}>
                Check your understanding of What Makes a good instructor?
              </p>
            )}
          </li>
        </Link>

        <Link to="">
          <li
            className={`${styles.itemLesson} ${
              openIndex === 5 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.quizIcon}>
                <TiTick />
              </span>{" "}
              Quiz What Makes a good instructor?
            </div>
            {openIndex === 5 && (
              <p className={styles.description}>
                {" "}
                Quiz What Makes a good instructor?
              </p>
            )}
          </li>
        </Link>

        {/* The Levels of Instruction */}
        <Link to="/legal-stuff">
          {" "}
          <li
            className={`${styles.itemLesson} ${
              openIndex === 6 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.checkIcon}>
                <MdContactPage />
              </span>{" "}
              The legal stuff
            </div>
            {openIndex === 6 && (
              <p className={styles.description}>Learn about The legal stuff</p>
            )}
          </li>
        </Link>

        <Link to="">
          {/* QUIZ – Levels of Instruction */}
          <li
            className={`${styles.itemLesson} ${
              openIndex === 7 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(7)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.quizIcon}>
                <TiTick />
              </span>{" "}
              Quiz The legal stuff
            </div>
            {openIndex === 7 && (
              <p className={styles.description}>Quiz The legal stuff</p>
            )}
          </li>
        </Link>
        {/* Agree Roles & Responsibilities */}
        <Link to="">
          {" "}
          <li
            className={`${styles.itemLesson} ${
              openIndex === 8 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(8)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.checkIcon}>
                <MdContactPage />
              </span>{" "}
              The COAST Method in Advanced Driving
            </div>
            {openIndex === 8 && (
              <p className={styles.description}>
                Understand What is advanced driving
              </p>
            )}
          </li>
        </Link>
        <Link to="">
          <li
            className={`${styles.itemLesson} ${
              openIndex === 9 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(9)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.quizIcon}>
                <TiTick />
              </span>
              Quiz advanced driving
            </div>
            {openIndex === 9 && (
              <p className={styles.description}>Quiz advanced driving</p>
            )}
          </li>
        </Link>
        {/* ///////////////////////////////////////// */}
        <Link to="">
          {" "}
          <li
            className={`${styles.itemLesson} ${
              openIndex === 10 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(10)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.checkIcon}>
                <MdContactPage />
              </span>{" "}
              Concentration in the Coast Method
            </div>
            {openIndex === 10 && (
              <p className={styles.description}>Understand The coast method</p>
            )}
          </li>
        </Link>
        <Link to="">
          <li
            className={`${styles.itemLesson} ${
              openIndex === 11 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(11)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.quizIcon}>
                <TiTick />
              </span>
              Quiz the cost method
            </div>
            {openIndex === 11 && (
              <p className={styles.description}>Quiz the cost method</p>
            )}
          </li>
        </Link>
        {/* ////////////////////////////////////////////////////// */}
        <Link to="">
          {" "}
          <li
            className={`${styles.itemLesson} ${
              openIndex === 12 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(12)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.checkIcon}>
                <MdContactPage />
              </span>{" "}
              Observation in the COAST Method for Advanced Driving
            </div>
            {openIndex === 12 && (
              <p className={styles.description}>
                Understand The Observation in the COAST Method for Advanced
                Driving
              </p>
            )}
          </li>
        </Link>
        <Link to="">
          <li
            className={`${styles.itemLesson} ${
              openIndex === 13 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(13)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.quizIcon}>
                <TiTick />
              </span>
              Quiz Observation
            </div>
            {openIndex === 13 && (
              <p className={styles.description}>Quiz Observation</p>
            )}
          </li>
        </Link>
        {/* /////////////////////////////////////////////// */}
        <Link to="">
          {" "}
          <li
            className={`${styles.itemLesson} ${
              openIndex === 14 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(14)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.checkIcon}>
                <MdContactPage />
              </span>{" "}
              Anticipation in the COAST Method for Advanced Driving
            </div>
            {openIndex === 14 && (
              <p className={styles.description}>
                Understand Anticipation-in-the-COAST-Method-for-Advanced-Driving
              </p>
            )}
          </li>
        </Link>
        <Link to="">
          <li
            className={`${styles.itemLesson} ${
              openIndex === 15 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(15)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.quizIcon}>
                <TiTick />
              </span>
              Quiz Anticipation
            </div>
            {openIndex === 15 && (
              <p className={styles.description}>Quiz Anticipation</p>
            )}
          </li>
        </Link>
        {/* /////////////////////////////////////////////// */}
        <Link to="">
          {" "}
          <li
            className={`${styles.itemLesson} ${
              openIndex === 16 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(16)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.checkIcon}>
                <MdContactPage />
              </span>{" "}
              Space in the COAST Method for Advanced Driving
            </div>
            {openIndex === 16 && (
              <p className={styles.description}>
                Understand Space in the COAST Method for Advanced Driving
              </p>
            )}
          </li>
        </Link>
        <Link to="">
          <li
            className={`${styles.itemLesson} ${
              openIndex === 17 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(17)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.quizIcon}>
                <TiTick />
              </span>
              Quiz anticipation
            </div>
            {openIndex === 17 && (
              <p className={styles.description}>Quiz anticipation</p>
            )}
          </li>
        </Link>
        {/* /////////////////////////////////////////////// */}
        <Link to="">
          {" "}
          <li
            className={`${styles.itemLesson} ${
              openIndex === 18 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(18)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.checkIcon}>
                <MdContactPage />
              </span>{" "}
              Time in the COAST Method for Advanced Driving
            </div>
            {openIndex === 18 && (
              <p className={styles.description}>
                Understand Time in the COAST Method for Advanced Driving
              </p>
            )}
          </li>
        </Link>
        <Link to="">
          <li
            className={`${styles.itemLesson} ${
              openIndex === 19 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(19)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.quizIcon}>
                <TiTick />
              </span>
              Quiz Time in the COAST Method for Advanced Driving
            </div>
            {openIndex === 19 && (
              <p className={styles.description}>
                Space Time in the COAST Method for Advanced Driving
              </p>
            )}
          </li>
        </Link>
        {/* /////////////////////////////////////////////// */}
        <Link to="">
          {" "}
          <li
            className={`${styles.itemLesson} ${
              openIndex === 20 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(20)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.checkIcon}>
                <MdContactPage />
              </span>{" "}
              Mastering the TUG Method for Safer and Smoother Driving
            </div>
            {openIndex === 20 && (
              <p className={styles.description}>
                Mastering the TUG Method for Safer and Smoother Driving
              </p>
            )}
          </li>
        </Link>
        <Link to="">
          <li
            className={`${styles.itemLesson} ${
              openIndex === 21 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(21)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.quizIcon}>
                <TiTick />
              </span>
              Quiz Mastering the TUG Method for Safer and Smoother Driving
            </div>
            {openIndex === 21 && (
              <p className={styles.description}>
                Quiz Mastering the TUG Method for Safer and Smoother Driving
              </p>
            )}
          </li>
        </Link>
        {/* /////////////////////////////////////////////// */}
        <Link to="">
          {" "}
          <li
            className={`${styles.itemLesson} ${
              openIndex === 22 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(22)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.checkIcon}>
                <MdContactPage />
              </span>{" "}
              ⁠Show me tell me questions
            </div>
            {openIndex === 22 && (
              <p className={styles.description}>⁠Show me tell me questions</p>
            )}
          </li>
        </Link>
        <Link to="">
          {" "}
          <li
            className={`${styles.itemLesson} ${
              openIndex === 23 ? styles.lessonOpen : ""
            }`}
            onMouseEnter={() => handleMouseEnter(23)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.lessonRow}>
              <span className={styles.quizIcon}>
                <MdContactPage />
              </span>
              ⁠Booking the Part 2 test
            </div>
            {openIndex === 23 && (
              <p className={styles.description}>⁠Booking the Part 2 test</p>
            )}
          </li>
        </Link>
      </ul>
    </div>
  );
}

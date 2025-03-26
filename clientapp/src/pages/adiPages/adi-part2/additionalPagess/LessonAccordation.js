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
        <span className={styles.LessonAccordionProgress}>
          14 Steps | 14 Quizzes
        </span>
      </div>
      <ul className={styles.listLessonData}>
        {/* QUIZ – Agree Goals */}
        <Link to="/quizModuleOne">
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
              Human checks before setting off to drive
            </div>
            {openIndex === 1 && (
              <p className={styles.description}>
                Test your knowledge about Human checks.
              </p>
            )}
          </li>
        </Link>

        {/* Giving Route Directions */}
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
            Quiz Human checks
          </div>
          {openIndex === 2 && (
            <p className={styles.description}>Quiz Human checks</p>
          )}
        </li>

        {/* QUIZ – Giving Route Directions */}
        <Link to="/quizModuletwo">
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
              ⁠vehicle checks to perform before the test
            </div>
            {openIndex === 3 && (
              <p className={styles.description}>
                Check your understanding of ⁠vehicle checks
              </p>
            )}
          </li>
        </Link>

        {/* Route planning & Practice areas */}

        {/* QUIZ – Route Planning */}
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
            Quiz vehicle checks
          </div>
          {openIndex === 5 && (
            <p className={styles.description}> Quiz vehicle checks</p>
          )}
        </li>

        {/* The Levels of Instruction */}
        <Link to="/quizModulethree">
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
              Familiarising yourself with vehicle technology
            </div>
            {openIndex === 6 && (
              <p className={styles.description}>
                Learn about the familiarising yourself with vehicle technology
              </p>
            )}
          </li>
        </Link>

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
            Quiz vehicle technology
          </div>
          {openIndex === 7 && (
            <p className={styles.description}>Quiz vehicle technology</p>
          )}
        </li>

        {/* Agree Roles & Responsibilities */}
        <Link to="/quizModulefour">
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
              What is advanced driving
            </div>
            {openIndex === 8 && (
              <p className={styles.description}>
                Understand What is advanced driving
              </p>
            )}
          </li>
        </Link>
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
        {/* ///////////////////////////////////////// */}
        <Link to="/quizModulefive">
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
              The coast method
            </div>
            {openIndex === 10 && (
              <p className={styles.description}>Understand The coast method</p>
            )}
          </li>
        </Link>
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
        {/* ////////////////////////////////////////////////////// */}
        <Link to="/quizModulesix">
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
              ⁠Concentration in the Coast method
            </div>
            {openIndex === 12 && (
              <p className={styles.description}>Understand The ⁠Concentration in the Coast method</p>
            )}
          </li>
        </Link>
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
            Quiz concentration
          </div>
          {openIndex === 13 && (
            <p className={styles.description}>Quiz concentration</p>
          )}
        </li>
        {/* /////////////////////////////////////////////// */}
        <Link to="/quizModuleseven">
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
              Observation in the coast method
            </div>
            {openIndex === 14 && (
              <p className={styles.description}>Understand Observation in the coast method</p>
            )}
          </li>
        </Link>
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
            Quiz observation
          </div>
          {openIndex === 15 && (
            <p className={styles.description}>Quiz observation</p>
          )}
        </li>
      </ul>
    </div>
  );
};

export default LessonAccordation;

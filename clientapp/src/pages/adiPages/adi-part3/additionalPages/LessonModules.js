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
      <div className={styles.lessonFlexContainer}>
        <div className={styles.lessonContainer}>
          <div className={styles.LessonAccordionheader}>
            <span>Topics</span>
            <span className={styles.LessonAccordionProgress}>
              18 Steps | 15 Quizzes
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
                onMouseLeave={handleMouseLeave}>
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

            {/* QUIZ – Giving Route Directions */}
            <Link to="/good-instructor-module">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 3 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}>
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

            {/* The Levels of Instruction */}
            <Link to="/legal-stuff">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 6 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(6)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.checkIcon}>
                    <MdContactPage />
                  </span>{" "}
                  The legal stuff
                </div>
                {openIndex === 6 && (
                  <p className={styles.description}>
                    Learn about The legal stuff
                  </p>
                )}
              </li>
            </Link>

            {/* Agree Roles & Responsibilities */}
            <Link to="/learning-style">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 8 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(8)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.checkIcon}>
                    <MdContactPage />
                  </span>{" "}
                  Learning needs and styles
                </div>
                {openIndex === 8 && (
                  <p className={styles.description}>
                    Understand WLearning needs and styles
                  </p>
                )}
              </li>
            </Link>

            {/* ///////////////////////////////////////// */}
            <Link to="/lesson-structure">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 10 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(10)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.checkIcon}>
                    <MdContactPage />
                  </span>{" "}
                  Lesson structure
                </div>
                {openIndex === 10 && (
                  <p className={styles.description}>
                    Understand Lesson structure
                  </p>
                )}
              </li>
            </Link>

            {/* ////////////////////////////////////////////////////// */}
            <Link to="/gde-matrix-grow">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 12 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(12)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.checkIcon}>
                    <MdContactPage />
                  </span>{" "}
                  GDE Matrix and Grow Model
                </div>
                {openIndex === 12 && (
                  <p className={styles.description}>
                    Understand GDE Matrix and Grow Model
                  </p>
                )}
              </li>
            </Link>

            {/* /////////////////////////////////////////////// */}
            <Link to="/lesson-planning">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 14 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(14)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.checkIcon}>
                    <MdContactPage />
                  </span>{" "}
                  Lesson Planning
                </div>
                {openIndex === 14 && (
                  <p className={styles.description}>
                    Understand Lesson Planning
                  </p>
                )}
              </li>
            </Link>

            {/* /////////////////////////////////////////////// */}
            <Link to="/route-planning">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 16 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(16)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.checkIcon}>
                    <MdContactPage />
                  </span>{" "}
                  Route Planning
                </div>
                {openIndex === 16 && (
                  <p className={styles.description}>
                    Understand Route Planning
                  </p>
                )}
              </li>
            </Link>

            {/* /////////////////////////////////////////////// */}
            <Link to="/route-direction">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 18 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(18)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.checkIcon}>
                    <MdContactPage />
                  </span>{" "}
                  Giving Route Directions
                </div>
                {openIndex === 18 && (
                  <p className={styles.description}>
                    Understand Giving Route Directions
                  </p>
                )}
              </li>
            </Link>

            {/* /////////////////////////////////////////////// */}
            <Link to="/client-centred-learning">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 20 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(20)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.checkIcon}>
                    <MdContactPage />
                  </span>{" "}
                  Client Centred Learning
                </div>
                {openIndex === 20 && (
                  <p className={styles.description}>Client Centred Learning</p>
                )}
              </li>
            </Link>

            {/* //////////////////////////////////////////////////// */}
            <Link to="/questioning-techniques">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 2009 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(2009)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.checkIcon}>
                    <MdContactPage />
                  </span>{" "}
                  Questioning techniques
                </div>
                {openIndex === 2009 && (
                  <p className={styles.description}>Questioning techniques</p>
                )}
              </li>
            </Link>

            {/* /////////////////////////////////////////////// */}
            <Link to="/body-language">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 22 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(22)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.checkIcon}>
                    <MdContactPage />
                  </span>{" "}
                  Body Language
                </div>
                {openIndex === 22 && (
                  <p className={styles.description}>Understand Body Language</p>
                )}
              </li>
            </Link>

            {/* //////////////////////////////////////////////////////////////// */}
            <Link to="/giving-instruction-and-feedback">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 223 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(223)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.checkIcon}>
                    <MdContactPage />
                  </span>{" "}
                  Giving Instruction and Feedback
                </div>
                {openIndex === 223 && (
                  <p className={styles.description}>
                    Understand Giving Instruction and Feedback
                  </p>
                )}
              </li>
            </Link>

            {/* /////////////////////////////////////////////////////////// */}
            <Link to="/adapting-lessons">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 1224 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(1224)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.checkIcon}>
                    <MdContactPage />
                  </span>{" "}
                  Adapting Lessons
                </div>
                {openIndex === 1224 && (
                  <p className={styles.description}>
                    Understand Adapting Lessons
                  </p>
                )}
              </li>
            </Link>

            {/* /////////////////////////////////////////////////////////////////// */}
            <Link to="/risk-management-and-responsibility">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 555 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(555)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.checkIcon}>
                    <MdContactPage />
                  </span>{" "}
                  Risk Management and Responsibility
                </div>
                {openIndex === 555 && (
                  <p className={styles.description}>
                    Risk Management and Responsibility
                  </p>
                )}
              </li>
            </Link>

            {/* /////////////////////////////////////////////////////////////////////// */}
            <Link to="/intervention">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 435 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(435)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.checkIcon}>
                    <MdContactPage />
                  </span>{" "}
                  Intervention
                </div>
                {openIndex === 435 && (
                  <p className={styles.description}>Intervention</p>
                )}
              </li>
            </Link>
            <Link to="/control-module">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 4355 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(4355)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.checkIcon}>
                    <MdContactPage />
                  </span>{" "}
                  Control
                </div>
                {openIndex === 4355 && (
                  <p className={styles.description}>Control</p>
                )}
              </li>
            </Link>
            <Link to="/awareness-module">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 4375 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(4375)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.checkIcon}>
                    <MdContactPage />
                  </span>{" "}
                  Awareness
                </div>
                {openIndex === 4375 && (
                  <p className={styles.description}>Awareness</p>
                )}
              </li>
            </Link>
            <Link to="/mockTest-module">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 4323 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(4323)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.checkIcon}>
                    <MdContactPage />
                  </span>{" "}
                  MockTest
                </div>
                {openIndex === 4323 && (
                  <p className={styles.description}>MockTest</p>
                )}
              </li>
            </Link>

            {/* ///////////////////////////////////////////////////////////// */}
            <Link to="/trainee-badge">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 2389 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(2389)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.quizIcon}>
                    <MdContactPage />
                  </span>
                  Trainee badge
                </div>
                {openIndex === 2389 && (
                  <p className={styles.description}>Trainee badge</p>
                )}
              </li>
            </Link>
            {/* //////////////////////////////////////////////////// */}
            <Link to="/book-adi-part-3">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 2304 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(2304)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.quizIcon}>
                    <MdContactPage />
                  </span>
                  How to book adi part 3 Test
                </div>
                {openIndex === 2304 && (
                  <p className={styles.description}>
                    How to book adi part 3 Test
                  </p>
                )}
              </li>
            </Link>

            <Link to="/adi-videos">
              {" "}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 297 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(297)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.quizIcon}>
                    <MdContactPage />
                  </span>
                  Videos of Part 3
                </div>
                {openIndex === 297 && (
                  <p className={styles.description}> Videos of Part 3</p>
                )}
              </li>
            </Link>
          </ul>
        </div>
        {/* //////////////////////////////////////// */}
        <div className={styles.lessonContainer}>
          <div className={styles.LessonAccordionheader}>
            <span>Quiz</span>
            <span className={styles.LessonAccordionProgress}>
              18 Steps | 15 Quizzes
            </span>
          </div>
          <ul className={styles.listLessonData}>
            {/* QUIZ – Agree Goals */}

            {/* Giving Route Directions */}
            <Link to="/takequizCatName/national-standard">
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 2 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}>
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

            <Link to="/takequizCatName/good-instructor">
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 5 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(5)}
                onMouseLeave={handleMouseLeave}>
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

            <Link to="/takequizCatName/legal-stuff">
              {/* QUIZ – Levels of Instruction */}
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 7 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(7)}
                onMouseLeave={handleMouseLeave}>
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

            <Link to="/takequizCatName/learning-styles">
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 9 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(9)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.quizIcon}>
                    <TiTick />
                  </span>
                  Quiz Learning needs and styles
                </div>
                {openIndex === 9 && (
                  <p className={styles.description}>
                    Quiz Learning needs and styles
                  </p>
                )}
              </li>
            </Link>
            {/* ///////////////////////////////////////// */}

            <Link to="/takequizCatName/lesson-structure">
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 11 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(11)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.quizIcon}>
                    <TiTick />
                  </span>
                  Quiz Lesson structure
                </div>
                {openIndex === 11 && (
                  <p className={styles.description}>Quiz Lesson structure</p>
                )}
              </li>
            </Link>
            {/* ////////////////////////////////////////////////////// */}

            <Link to="/takequizCatName/gde-matrix">
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 13 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(13)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.quizIcon}>
                    <TiTick />
                  </span>
                  Quiz GDE Matrix and Grow Model
                </div>
                {openIndex === 13 && (
                  <p className={styles.description}>
                    Quiz GDE Matrix and Grow Model
                  </p>
                )}
              </li>
            </Link>
            {/* /////////////////////////////////////////////// */}

            <Link to="/takequizCatName/lesson-planning">
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 15 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(15)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.quizIcon}>
                    <TiTick />
                  </span>
                  Quiz Lesson Planning
                </div>
                {openIndex === 15 && (
                  <p className={styles.description}>Quiz Lesson Planning</p>
                )}
              </li>
            </Link>
            {/* /////////////////////////////////////////////// */}

            <Link to="/takequizCatName/route-planning">
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 17 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(17)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.quizIcon}>
                    <TiTick />
                  </span>
                  Quiz Route Planning
                </div>
                {openIndex === 17 && (
                  <p className={styles.description}>Quiz Route Planning</p>
                )}
              </li>
            </Link>
            {/* /////////////////////////////////////////////// */}

            <Link to="/takequizCatName/giving-routes">
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 19 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(19)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.quizIcon}>
                    <TiTick />
                  </span>
                  Quiz Giving Route Directions
                </div>
                {openIndex === 19 && (
                  <p className={styles.description}>Giving Route Directions</p>
                )}
              </li>
            </Link>
            {/* /////////////////////////////////////////////// */}

            <Link to="/takequizCatName/client-centred-learning">
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 21 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(21)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.quizIcon}>
                    <TiTick />
                  </span>
                  Quiz Client Centred Learning
                </div>
                {openIndex === 21 && (
                  <p className={styles.description}>
                    Quiz Client Centred Learning
                  </p>
                )}
              </li>
            </Link>
            {/* //////////////////////////////////////////////////// */}

            <Link to="/takequizCatName/questioning-techniques">
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 2109 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(2109)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.quizIcon}>
                    <TiTick />
                  </span>
                  Quiz Questioning techniques
                </div>
                {openIndex === 2109 && (
                  <p className={styles.description}>
                    Quiz Questioning techniques
                  </p>
                )}
              </li>
            </Link>
            {/* /////////////////////////////////////////////// */}

            <Link to="/takequizCatName/body-language">
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 212 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(212)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.quizIcon}>
                    <TiTick />
                  </span>
                  Quiz Body Language
                </div>
                {openIndex === 212 && (
                  <p className={styles.description}>Quiz Body Language</p>
                )}
              </li>
            </Link>

            {/* //////////////////////////////////////////////////////////////// */}

            <Link to="/takequizCatName/giving-feedback">
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 233 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(233)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.quizIcon}>
                    <TiTick />
                  </span>
                  Quiz Giving Instruction and Feedback
                </div>
                {openIndex === 233 && (
                  <p className={styles.description}>
                    Quiz Giving Instruction and Feedback
                  </p>
                )}
              </li>
            </Link>
            {/* /////////////////////////////////////////////////////////// */}

            <Link to="/takequizCatName/adapting">
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 433 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(433)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.quizIcon}>
                    <TiTick />
                  </span>
                  Quiz Adapting Lessons
                </div>
                {openIndex === 433 && (
                  <p className={styles.description}>Quiz Adapting Lessons</p>
                )}
              </li>
            </Link>
            {/* /////////////////////////////////////////////////////////////////// */}

            <Link to="/takequizCatName/risk-management-responsbilities">
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 477 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(477)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.quizIcon}>
                    <TiTick />
                  </span>
                  Quiz Risk Management and Responsibility
                </div>
                {openIndex === 477 && (
                  <p className={styles.description}>
                    Quiz Risk Management and Responsibility
                  </p>
                )}
              </li>
            </Link>
            {/* /////////////////////////////////////////////////////////////////////// */}

            <Link to="/takequizCatName/intervention">
              <li
                className={`${styles.itemLesson} ${
                  openIndex === 427 ? styles.lessonOpen : ""
                }`}
                onMouseEnter={() => handleMouseEnter(427)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.lessonRow}>
                  <span className={styles.quizIcon}>
                    <TiTick />
                  </span>
                  Quiz Intervention
                </div>
                {openIndex === 427 && (
                  <p className={styles.description}>Quiz Intervention</p>
                )}
              </li>
            </Link>

            {/* ///////////////////////////////////////////////////////////// */}

            {/* //////////////////////////////////////////////////// */}
          </ul>
        </div>
      </div>
    </div>
  );
}

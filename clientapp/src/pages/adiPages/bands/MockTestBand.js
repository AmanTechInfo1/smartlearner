import React from "react";
import styles from "../AdiPartOne.module.css";

import { Link } from "react-router-dom";

export default function MockTestBand() {
  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection}>
          <div className={styles.opicity}></div>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>
                  Forget the rest, <span>learn with the best!</span>
                </h1>
              </div>
              <div className={styles.alertBtn}>
              <Link to="/Contact-Us" style={{textDecoration:"none"}}>
                {" "}
                <button id={styles.btn}>Contact Us</button>
              </Link>
              </div>
            </div>
          </div>
        </section>
        {/* ///////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            What pass mark is required <span>for the ADI part 1 test?</span>
          </h2>
          <hr style={{ opacity: "1", border: "1px solid black" }}></hr>

          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  Candidates must achieve a pass rate of 85% or higher in the
                  multiple-choice section of the ADI theory test. This must be
                  made up of at least 20 correct answers for each section.
                </p>
              </li>
              <li>
                <p>
                  The pass mark for the hazard perception test is 57 out of 75.
                  So, candidates should aim to score an average of 3 to 4 points
                  per hazard
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* //////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div id={styles.btnDiv}>
            <h2 style={{ fontSize: "3rem", color: "red", textAlign: "center" }}>
              Test Yourself
            </h2>
          </div>
        </section>
        {/* //////////////////////////////// */}
        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h2>Start Quiz</h2>
            <h3>All Questions</h3>
            <p>
              Click the start quiz button to start the quiz and See your result
            </p>
            <Link to="/takequizCatName/Band-1--Road-Procedures">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
        <div className={styles.TMnextPage}>
          <Link to="/adi-part-one-test">
            {" "}
            <button className={styles.TMnextButton}>
              NEXT PAGE Book your part 1 test{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

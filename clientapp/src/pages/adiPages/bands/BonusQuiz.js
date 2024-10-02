import React from "react";
import styles from "../AdiPartOne.module.css";

import { Link } from "react-router-dom";

export default function BonusQuiz() {
  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection}>
          <div className={styles.opicity}></div>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>Bonus</h1>
              </div>
              <div className={styles.alertBtn}>
                <a style={{ textDecoration: "none" }} href="tel:+4402475092784">
                  <button>Contact Us</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ///////////////////////////////////// */}
        {/* <section className={styles.hazardTestWorkListSection}>
        <h2>
          Part 1 -<span> Mock tests</span>
        </h2>
        <hr style={{ opacity: "1", border: "1px solid black" }}></hr>

        <div className={styles.bgColorList33}>
          <ul type="none">
            <li>
              <p>
                Once you have booked your part one theory test, it goes
                without saying that revision is essential and it is highly
                unlikely that you will be able to pass this with no revision.
                When you’re revising for your part one theory test, there are
                lots of different things you can do to ensure that you’re
                test-ready and arguably, one of the most important things is
                to sit a few mock theory tests. The pass mark is 85. Thus
                making it much stricter than the learners theory test. In
                addition to scoring 90 marks. You will need score at least 20
                out of a possible 25 marks in each of the 4 categories. This
                scoring system makes the test a little bit more difficult. For
                example you may have a total score of 90 but if you have 3
                categories with 20 out of 20 and only 10 out of 20 on the
                other category you would not pass.
              </p>
            </li>
          </ul>
        </div>
      </section> */}
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
            <Link to="/takequizCatName/adi-part-1--Bonus-Quiz">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

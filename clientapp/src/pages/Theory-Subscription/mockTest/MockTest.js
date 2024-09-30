import React from "react";

import styles from "./MockTest.module.css";

import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

export default function MockTest() {
  return (
    <div className={styles.HazardPerceptionPagges}>
      <section className={styles.imageSection}>
        <div className={styles.opicity}></div>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>
                Forget the rest, <span>learn with the best!</span>
              </h1>
            </div>

            <div className={styles.heading2}>
              <h2>
                Multiple <span>Choice</span>{" "}
              </h2>
            </div>
            <div className={styles.alertBtn}>
              <a style={{ textDecoration: "none" }} href="tel:+4402475092784">
                <button>Contact Us</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ////////////////////////////////// */}

      <section className={styles.hazardTestWorkListSection}>
        <h2>
          How does the <span>Test work?</span>
        </h2>
        <div className={styles.hazardTestWorkListDiv}>
          <ul type="none">
            <li>
              <IoMdArrowDropright id="listrightIcon" />{" "}
              <p>You have 57 minutes to answer 50 multiple-choice questions.</p>
            </li>
            <li>
              <IoMdArrowDropright id="listrightIcon" />{" "}
              <p>Before the test starts you’ll get:</p>
            </li>
            <li>
              <IoMdArrowDropright id="listrightIcon" />{" "}
              <p>– Instructions on how the test works.</p>
            </li>
            <li>
              <IoMdArrowDropright id="listrightIcon" />{" "}
              <p>
                – The chance to do a practice question to get used to the
                screens.
              </p>
            </li>
            <li>
              <IoMdArrowDropright id="listrightIcon" />{" "}
              <p>
                A question and several possible answers appear on a screen. You
                have to select the right answer.
              </p>
            </li>
            <li>
              <IoMdArrowDropright id="listrightIcon" />{" "}
              <p>
                Three of the questions are about a short video. It will show a
                normal driving situation, such as:
              </p>
            </li>
            <li>
              <IoMdArrowDropright id="listrightIcon" />{" "}
              <p>– Driving through a town centre.</p>
            </li>
            <li>
              <IoMdArrowDropright id="listrightIcon" />{" "}
              <p>– Driving on a country road.</p>
            </li>
            <li>
              <IoMdArrowDropright id="listrightIcon" />{" "}
              <p>
                The video is silent. You can watch it as many times as you like
                during the test.
              </p>
            </li>
          </ul>
          <ul type="none">
            <h3>
              You can ‘flag’ questions that you want to come back to later. You
              can go back to any question to review and change your answer at
              any point.
            </h3>
            <li>
              <IoMdArrowDropright id="listrightIcon" />{" "}
              <p>
                You can finish the multiple-choice questions part when you’ve
                answered all of the questions. You do not have to use the full
                57 minutes.
              </p>
            </li>
            <li>
              <IoMdArrowDropright id="listrightIcon" />{" "}
              <p>
                You can have a break of up to 3 minutes before the hazard
                perception test starts.
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/* ////////////////////////////////////////////////////// */}
      <section className={styles.mockTestContainerSection}>
        <div className={styles.mockTestHeadingContainerDIv}>
          <h2 style={{ textAlign: "center", color: "red" }}>Test Yourself</h2>
        </div>
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
      </section>
    </div>
  );
}

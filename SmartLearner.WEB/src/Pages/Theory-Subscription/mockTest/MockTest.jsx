import React from "react";

import styles from "./MockTest.module.css";
import { FaHome } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

export default function MockTest() {
  return (
    <>
      <section className={styles.hazardHomeBannerSection}>
        <div className={styles.overlay}></div>
        <div className={styles.hazardHomeBannerHeader}>
          <h2>Multiple Choice</h2>
          <hr />
          <span>
            <FaHome id={styles.hazardHomeIconBannar} />
          </span>
        </div>
      </section>

      {/* ////////////////////////////////// */}

      <section className={styles.hazardTestWorkListSection}>
        <div className={styles.hazardTestWorkListDiv}>
          <h2>How does the test work?</h2>
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
          <h2>To pass you will need to score 43 out of 50.</h2>
        </div>
      </section>
    </>
  );
}

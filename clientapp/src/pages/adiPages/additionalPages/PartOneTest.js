import React from "react";
import styles from "../AdiPartOne.module.css"
import { Link } from "react-router-dom";

export default function PartOneTest() {
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
        </section>{" "}
        <section className={styles.bookTestPartOneSection}>
          <div className={styles.PartOnecontentWrapper}>
            <h1 className={styles.PartOnepageTitle}>Book Your Part 1 Test</h1>

            <div className={styles.PartOnepart}>
              <h2 className={styles.PartOnepartTitle}>Confidence in Your Knowledge</h2>
              <p className={styles.PartOnetext}>
                Knowing you're ready to take the ADI Part 1 test begins with
                feeling confident in your knowledge of all the material covered
                in the exam. This includes a solid understanding of road safety,
                driving laws, and teaching techniques.
              </p>
              <p className={styles.PartOnetext}>
                If you've consistently scored well on practice tests and mock
                exams, especially in areas where you previously struggled, it's
                a strong indicator that you're ready for the real test.
              </p>
            </div>

            <div className={styles.PartOnepart}>
              <h2 className={styles.PartOnepartTitle}>
                Teaching and Instructional Skills
              </h2>
              <p className={styles.PartOnetext}>
                Your ability to explain complex driving concepts clearly and
                confidently is key. Since the role of an ADI involves teaching
                others, you should be able to break down driving laws and safety
                practices in a way that would make sense to learners.
              </p>
              <p className={styles.PartOnetext}>
                If you can teach these concepts or visualize yourself teaching a
                student, it shows you've absorbed the material deeply and are
                prepared to handle the instructional aspect of the exam.
              </p>
            </div>

            <div className={styles.PartOnepart}>
              <h2 className={styles.PartOnepartTitle}>Hazard Perception Readiness</h2>
              <p className={styles.PartOnetext}>
                The ADI Part 1 test includes a section on hazard perception. If
                you’ve practiced with online clips and have developed the
                ability to identify potential hazards swiftly, it shows you're
                ready.
              </p>
              <p className={styles.PartOnetext}>
                Consistently scoring well on mock hazard perception tests is a
                strong indicator you're prepared for the real test.
              </p>
            </div>

            <div className={styles.PartOnepart}>
              <h2 className={styles.PartOnepartTitle}>Emotional Readiness</h2>
              <p className={styles.PartOnetext}>
                Feeling calm and confident, rather than anxious, is a good sign
                that you're mentally prepared for the test. Confidence, backed
                by thorough preparation, is a clear indicator that you're in the
                right mindset to succeed.
              </p>
            </div>

            <div className={styles.PartOnebookTestButtonWrapper}>
              <a
                href="https://www.gov.uk/adi-part-1-test"
                className={styles.PartOnebookTestLink}
              >
                BOOK YOUR TEST HERE
              </a>
             
              <Link to="/test-day-tips"> <button className={styles.PartOnenextPageButton}>Next Test Day Tips  </button> </Link>
            
            </div>
          </div>
         
        </section>
      </div>
    </div>
  );
}

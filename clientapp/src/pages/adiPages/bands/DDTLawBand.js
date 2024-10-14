import React from "react";
import styles from "../AdiPartOne.module.css";

import { Link } from "react-router-dom";

export default function DDTLawBand() {
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
                <a style={{ textDecoration: "none" }} href="tel:+4402475092784">
                  <button>Contact Us</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ///////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Driving tests, <span>disabilities and the law</span>
          </h2>
          <hr style={{ opacity: "1", border: "1px solid black" }}></hr>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="600"
                    height="400"
                    src="https://www.youtube.com/embed/EOEhIw3ix1c"
                    title="Road Safety: Joining the Motorway"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    The ADI Part 1 Band 3 section covers topics related to the
                    Driving Test, Disabilities, and the Law. This band focuses
                    on the process of the driving test itself, including the
                    legal responsibilities of both drivers and instructors. It
                    also explores how to accommodate drivers with disabilities,
                    ensuring that you understand how to modify lessons and adapt
                    to different learners’ needs.
                  </p>
                </li>
                <li>
                  <p>
                    As a future driving instructor, mastering this section is
                    essential for guiding your students through the driving
                    test, from preparing them for what to expect on the day to
                    helping them understand the legal requirements for safe
                    driving. You’ll also need to know how to work with learners
                    who have specific disabilities, ensuring they can approach
                    driving safely and confidently. This band ensures you’re
                    well-versed in both the legal aspects of driving and the
                    inclusivity needed to teach a wide variety of students
                    effectively.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <ul type="none">
            <li className="text-center mt-2 text-danger">
              <h2>
                Practice <span>Test</span>
              </h2>
            </li>
          </ul>
        </section>
        {/* ////////////////////////////////////////// */}
        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h2>Start Quiz</h2>
            <h3>All Questions</h3>
            <p>
              Click the start quiz button to start the quiz and See your result
            </p>
            <Link to="/takequizCatName/Band-3---Driving-Test--Disabilities--and-The-Law">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
        <div className={styles.TMnextPage}>
         
            <Link to="/band-4-publications-techniques"> <button className={styles.TMnextButton}>
              NEXT PAGE Band - 4</button>
            </Link>
          
        </div>
      </div>
    </div>
  );
}

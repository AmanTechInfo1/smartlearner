import React from "react";
import styles from "../AdiPartOne.module.css";

import { Link } from "react-router-dom";

export default function PublicationTechBand() {
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
          <h2>Publications</h2>
          <hr style={{ opacity: "1", border: "1px solid black" }}></hr>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="600"
                    height="400"
                    src="https://www.youtube.com/embed/vNnPgoyk6-8"
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
                    The ADI Part 1 Band 4 section focuses on Publications and
                    Instructional Techniques, which is all about how to
                    effectively teach driving and communicate safety information
                    to learners. This section assesses your understanding of
                    various teaching methods, lesson planning, and how to adapt
                    your instruction to suit different learning styles.
                  </p>
                </li>
                <li>
                  <p>
                    As an aspiring driving instructor, it's not just about
                    knowing the rules of the road, but also about how well you
                    can explain them to students in a clear and engaging way.
                    You’ll need to demonstrate knowledge of how to break down
                    complex driving tasks into manageable lessons and tailor
                    your approach to individual learner needs. This band also
                    involves studying DVSA-recommended publications and teaching
                    resources, which are essential for staying up-to-date with
                    best practices in instruction. Ultimately, Band 4 ensures
                    that you’re not only knowledgeable but also an effective
                    communicator and educator.
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

        {/* ///////////////////////////////////////////// */}

        {/* ////////////////////////////////////////// */}
        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h2>Start Quiz</h2>
            <h3>All Questions</h3>
            <p>
              Click the start quiz button to start the quiz and See your result
            </p>
            <Link to="/takequizCatName/Band-4---Publications-and-Instructional-Techniques">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
        <div className={styles.TMnextPage}>
          <Link to="/Adi-part-1-Bonus-Quiz">
            {" "}
            <button className={styles.TMnextButton}>
              NEXT PAGE Bonus summary{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

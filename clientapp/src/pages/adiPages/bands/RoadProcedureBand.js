import React from "react";
import styles from "../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import { Link } from "react-router-dom";

export default function RoadProcedureBand() {
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
            Road <span>Procedure</span>
          </h2>
          <hr style={{ opacity: "1", border: "1px solid black" }}></hr>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="600"
                    height="400"
                    src="https://www.youtube.com/embed/X3QtZ8R48LY"
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
                    The ADI Part 1 Band 1 section focuses on Road Procedure,
                    which is all about understanding the rules and best
                    practices for safe driving. It covers key topics such as
                    lane discipline, right-of-way, speed limits, and the correct
                    procedures for navigating various road types, including
                    roundabouts, intersections, and pedestrian crossings. This
                    section also addresses how to handle different driving
                    conditions, such as weather or road hazards.
                  </p>
                </li>
                <li>
                  <p>
                    As an aspiring driving instructor, mastering this band is
                    crucial because it forms the foundation of safe driving
                    principles that you'll need to teach your students. You'll
                    be expected to know the Highway Code thoroughly and apply it
                    to real-world driving situations, ensuring that you can
                    clearly and confidently communicate the rules of the road.
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
        {/* /////////////////////////////////////////// */}

        {/* ////////////////////////////////////////// */}
        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h2>Start Quiz</h2>
            <h3>All Questions</h3>
            <p>
              Click the start quiz button to start the quiz and See your result
            </p>
            <Link to="/takequizCatName/Band-1---Road-Procedure">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
        <div className={styles.TMnextPage}>
          <Link to="/band-2-traffic-signs-and-signals">
            {" "}
            <button className={styles.TMnextButton}>NEXT PAGE Band - 2 </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

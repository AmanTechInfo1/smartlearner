import React from "react";
import styles from "../AdiPartOne.module.css";

import Lplateimg from "../../../assets/images/L-Plate.jpg";
import { Link } from "react-router-dom";

export default function TrafficSignalBand() {
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
            Traffic <span>signs and signals</span>
          </h2>
          <hr style={{ opacity: "1", border: "1px solid black" }}></hr>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="600"
                    height="400"
                    src="https://www.youtube.com/embed/1FyKBfic4L8"
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
                    The ADI Part 1 Band 2 section covers a range of topics
                    related to Traffic Signs, Signals, Car Control, Pedestrians,
                    and Mechanical Knowledge. This band tests your understanding
                    of essential road signs and signals, as well as how to
                    control a vehicle safely under various conditions. It also
                    includes knowledge about pedestrian safety and basic
                    mechanical concepts that affect vehicle performance and
                    maintenance.
                  </p>
                </li>
                <li>
                  <p>
                    As an aspiring driving instructor, it’s important to know
                    how to explain the meaning of different traffic signs and
                    signals, and how they guide safe driving. Additionally,
                    understanding car control—such as braking, steering, and
                    acceleration—is key to teaching your students how to handle
                    a vehicle effectively. The mechanical knowledge portion
                    ensures you're familiar with the basic workings of a car,
                    like how the brakes, tires, and engine function, which is
                    vital for teaching students about vehicle maintenance and
                    safety. This band equips you to provide well-rounded
                    instruction on both driving and vehicle management.
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
        {/* ////////////////////////////////////////////////////// */}

        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h2>Start Quiz</h2>
            <h3>All Questions</h3>
            <p>
              Click the start quiz button to start the quiz and See your result
            </p>
            <Link to="/takequizCatName/Band-2---Traffic-Signs-and-Signals--Car-Control--Pedestrians-and-Mechanical-Knowledge">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
        <div className={styles.TMnextPage}>
          
              <Link to="/band-3-driving-tests-disabilities-and-the-law">  <button className={styles.TMnextButton}>NEXT PAGE Band - 3      </button></Link>
      
          </div>
      </div>
    </div>
  );
}

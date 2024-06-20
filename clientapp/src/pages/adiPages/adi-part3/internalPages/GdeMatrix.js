import React from "react";
import styles from "../../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../../assets/images/L-Plate.jpg";
import gdeMatrix from "../../../../assets/images/GDE-matrix.png";
import redCarImg from "../../../../assets/images/redcarimg.png";
import runningImg from "../../../../assets/images/runningManImg.png";
import locationImg from "../../../../assets/images/Location Img.png";
import SkillsImg from "../../../../assets/images/goal-skills.png"


export default function GdeMatrix() {
  return (
    <div>
      <div className={styles.AdiPartOne}>
        <div className={styles.AdiPortalPartOne}>
          <section className={styles.imageSection}>
            <div className={styles.maincontent}>
              <div className={styles.content}>
                <div className={styles.heading1}>
                  <h1>AWARD-WINNING DRIVING LESSONS</h1>
                </div>

                <div className={styles.heading2}>
                  <h2>
                    Forget the rest,
                    <br /> learn with the best!
                  </h2>
                </div>
                <div className={styles.btn}>
                  <button id={styles.btn}>Contact Us</button>
                </div>
              </div>
              <div className={styles.video}>
                <img src={Lplateimg} alt="LogoImg" />
              </div>
            </div>
          </section>
          {/* ///////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <div className={styles.hazardTestWorkListDiv}>
              <h2>Introduction to part 3</h2>
              <hr style={{ opacity: "1", border: "1px solid black" }}></hr>
              <img
                src={gdeMatrix}
                alt="gdeMatrix"
                style={{ width: "100%", maxWidth: "600px", height: "400px" }}
              />
            </div>
          </section>
          {/* ///////////////////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    The GDE is a framework for driver education that emphasises
                    the requirement for the motivational and risk–increasing
                    aspects of driving to be incorporated into driving programs.
                    This is in addition to the current skills-based competencies
                    taught on a daily basis.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    A glance at the GDE matric shows four levels. Level 1 and
                    level 2 are the safe manoeuvring of a vehicle and mastery of
                    traffic situations. These levels have been traditionally
                    addressed by ADIs in order for their pupils to pass their
                    driving test.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    The 3rd level, goals, and context of driving, deal with
                    driver’s decisions relating to the purpose of their journey,
                    the influence of passengers, and the time the drive takes
                    place. The decisions taken by drivers at this level can have
                    a serious impact on driver risk.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Level 4, goals for life and skills for living, highlights
                    the importance of lifestyle factors in determining risk when
                    we drive. Drivers must have an awareness of their
                    personality characteristics at this level and the effect
                    they may have on risk.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Instructors must have an understanding of the GDE and, when
                    relevant, address levels 3 and 4 with their students.
                    Success or failure at the higher levels will affect
                    performance at the lowest two levels.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Instructors should research and fully understand understand
                    of the GDE and how it provides a sound framework for driver
                    education.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <div className={styles.hazardTestWorkListDiv}>
              <p
                style={{
                  color: "red",
                  fontSize: "1.5rem",
                  marginBottom: "0px",
                }}
              >
                The framework consists of four levels and three competencies:
              </p>
              <h2 style={{ color: "red", fontSize: "2rem" }}>
                Level 1: Vehicle Manoeuvring
              </h2>
              <img src={redCarImg} alt="redCarImg" />
              <ul type="none">
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>This level is all about vehicle control skills:</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>– Vehicle maintenance</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>– How to use the controls</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    – How to move away and stop on level roads and gradients
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>– How to change gear and use clutch control</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    – How to deal with junctions, roundabouts and pedestrian
                    crossings
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    {" "}
                    – Where to position the vehicle – How to steer – Where to
                    look
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>– How to carry out the manoeuvres</p>
                </li>
              </ul>
            </div>
          </section>
          {/* ///////////////////////////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <div className={styles.hazardTestWorkListDiv}>
              <h2 style={{ color: "red", fontSize: "2rem" }}>
                Level 2: Integrating with other road users
              </h2>
              <img src={runningImg} alt="running-men" />
              <ul type="none">
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    This level develops the learner so that they can integrate
                    with other road users and get to grips with different
                    traffic situations. The student learns:
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>– Visual scanning – Hazard perception – Use of speed</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>– Judgement and decision making in traffic situations</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>– Road holding – Vehicle limitations – Eco-safe driving</p>
                </li>
              </ul>
            </div>
          </section>
          {/* ///////////////////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <div className={styles.hazardTestWorkListDiv}>
              <h2 style={{ color: "red", fontSize: "2rem" }}>
                Level 3: Goals and context of the Journey
              </h2>
              <img src={locationImg} alt="running-men" style={{backgroundColor:'white'}}/>
              <ul type="none">
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    This level looks at journey specific considerations. The
                    student learns about:
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>– Motivation for the journey</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p> – Route planning</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p> – Distractions</p>
                </li>

                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>– Passenger influence</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p> – Eco-safe driving (specific to the journey)</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p> – Effects of alcohol and drugs on driving</p>
                </li>
              </ul>
            </div>
          </section>
          {/* ////////////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <div className={styles.hazardTestWorkListDiv}>
              <h2 style={{ color: "red", fontSize: "2rem" }}>
                Level 4: Goals for life and skills for living
              </h2>
              <img src={SkillsImg} alt="SkillsImg" />
              <ul type="none">
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    This level focuses on the personality of the driver and how
                    their thoughts and beliefs impact on their behaviour
                    generally and driving behaviour specifically. The student
                    learns about:
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p> – Crash statistics </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p> – Typical risky personalities</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>  – Attitudes to risk</p>
                </li>

                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p> – Personal belief systems</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>– Personal goals for life</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>  – Personal skills for living</p>
                </li>
              </ul>
            </div>
          </section>

          {/* ///////////////////////////////////////////// */}
        </div>
      </div>
    </div>
  );
}

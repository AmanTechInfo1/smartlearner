import React from "react";
import styles from "./css/SafetyMargins.module.css";
import greenRuler from "../../../assets/images/green-ruler.png";

import Lplateimg from "../../../assets/images/L-Plate.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import motorwayCartflow from "../../../assets/images/motorway-contraflow.png";
import absImg from "../../../assets/images/absImg.png";
import { Link } from "react-router-dom";

export default function SafetyMargins() {
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

              <div className={styles.heading2}>
                <h2>
                  Safety <span>Margins</span>{" "}
                </h2>
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

        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            What are <span>Safety margins?</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={greenRuler} alt="greenRuler" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • The 4th topic from the multiple-choice section of the
                    theory test is safety margins. This topic is all about how
                    certain road and weather conditions can affect stopping
                    distances and your ability to handle your vehicle—looking
                    closely at what actions you need to take to make sure you
                    maintain a safe distance (or safety margin) between you and
                    the vehicle in front of you.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ////////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Stopping <span>Distances</span>
          </h2>
          <section className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  The following provided stopping times have been calculated
                  correctly and are imperative to understand whilst driving
                  especially in harsh weather conditions. (hover your cursor
                  over each box for the answer)
                </p>
                <hr style={{ opacity: "1", border: "1px solid green" }}></hr>
              </li>
            </ul>
          </section>
          <section className={styles.theoryPortalYoutubeVideosSection}>
            <div className={styles.theoryPortalYoutubeVideosDiv}>
              <iframe
                style={{
                  borderRadius: "30px",
                  boxShadow: "0 3px 10px rgba(255, 255, 255, 0.644)",
                }}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1afkGSJN9LA"
                title="YouTube video player"></iframe>
            </div>
          </section>
        </section>
        {/* ///////////////////////////////////////////////////////////// */}

        {/* /////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2} id={styles.h2heddings}>
            Important <span>Terms </span>
          </h2>
          <p style={{ textAlign: "center", marginBottom: "2rem" }}>
            {" "}
            If you’re driving at night or in bad weather, you’ll need to make
            sure you’re using your car lights properly. Take care when following
            large vehicles to, you’ll need to fall back to ensure they’re able
            to see you in their mirrors properly.
          </p>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <div className={styles.innerTheorySupportContent}>
                  <div className={styles.theorySupportContentVideo}>
                    <iframe
                      width="345"
                      height="260"
                      src="https://www.youtube.com/embed/iRY8Xsohoh8"
                      title="Tyre Safety Month 2014 Aquaplaning animation - TyreSafe"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen></iframe>
                  </div>
                </div>
                <h2>Aqua Planing</h2>
                <section id={styles.resLists12}>
                  <li>
                    <p>
                      • When roads are wet, your car can aquaplane. This means
                      the tyres have lifted off the surface of the road and are
                      skating on the surface water. If your steering suddenly
                      becomes noticeably light, while driving on a wet road,
                      this is a sign that you are aquaplaning. To correct it
                      ease off the accelerator and allow the tyres to regain
                      grip.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <img src={motorwayCartflow} alt="motorwayCartflow" />
                <h2>
                  <span>Contraflow Systems</span>
                </h2>
                <section id={styles.resLists21}>
                  <li>
                    <p>
                      • A contraflow system is to prevent traffic in peak travel
                      times, to allow everyone to move on, rather than stand
                      still traffic. When entering a contraflow, you must:
                      reduce speed in good time, choose a suitable lane in good
                      time, and keep a safe distance from the vehicle in front
                      of you.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <img src={absImg} alt="absImg" />
                <h2>Anti-lock Brakes (ABS)</h2>
                <section id={styles.resLists12}>
                  <li>
                    <p>
                      • Anti-lock brakes prevent wheels from locking which means
                      tyres are less likely to skid. Vehicles are still able to
                      be steered whilst under braking when anti-lock brakes come
                      into effect. When a road surface is wet or loose, ie.
                      Gravel, the ABS may not work as well. In event of an
                      emergency, apply brakes as soon as possible and firmly to
                      ensure a quick stop.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
          </section>
        </section>
        {/* //////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Driving in <span>Different conditions</span>
          </h2>
          <hr style={{ opacity: "1", border: "1px solid green" }}></hr>
          <div className={styles.hazardTestWorkListDiv}>
            <section className={styles.bgColorList33}>
              <ul type="none">
                <li>
                  <p>
                    • Braking distances on ice and in freezing conditions can be
                    ten times the normal distance.
                  </p>
                </li>
                <li>
                  <p>
                    • Overall stopping distances will be longer when driving in
                    wet conditions.
                  </p>
                </li>
                <li>
                  <p>
                    • In windy conditions take extra care when passing cyclists
                    and motorcyclists. Always allow them plenty of room.
                  </p>
                </li>
                <li>
                  <p>
                    • After driving through floods or a ford the first thing you
                    should do is test your brakes. Driving slowly and applying
                    the breaks gently will also help to dry them.
                  </p>
                </li>
                <li>
                  <p>
                    • In hot weather the road surface can become soft. This can
                    affect your tyre grip and braking.
                  </p>
                </li>
                <li>
                  <p>
                    • Side winds are most dangerous on an open stretch of road
                    as there is no buildings etc to block this.
                  </p>
                </li>
                <li>
                  <p>
                    • When driving on a motorway with surface spray use dipped
                    headlights to visible to others.
                  </p>
                </li>
                <li>
                  <p>
                    • When driving on snow or ice use the highest gear possible,
                    as this helps avoid wheel spin and allows a better grip.
                  </p>
                </li>
                <li>
                  <p>
                    • When approaching a sharp bend in poor conditions, such as
                    ice, you should slow down and avoid sudden steering
                    movements.
                  </p>
                </li>
                <li>
                  <p>
                    • If your number plate, windows, lights, or mirrors are
                    covered in snow or ice you must clear them before staring a
                    journey.
                  </p>
                </li>
                <li>
                  <p>
                    • You can tell you are driving on ice, and black ice,
                    because your tyres make little noise and the steering
                    becomes lighter.
                  </p>
                </li>
                <li>
                  <p>
                    • When driving in fog use dipped headlights, allow more time
                    for your journey, and slow down.
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </section>

        {/* //////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////// */}
        <section className={styles.mockTestContainerSection}>
          <div className={styles.mockTestHeadingContainerDIv}>
            <h2 style={{ textAlign: "center", color: "red" }}>Test YourSelf</h2>
          </div>
          <div className={styles.quizStartDiv}>
            <section className={styles.startQuizSection}>
              <h2>Start Quiz</h2>
              <h3>All Questions</h3>
              <p>
                • Click the start quiz button to start the quiz and See your
                result
              </p>
              <Link to="/takequizCatName/Safety-Margins">
                {" "}
                <button>Start Quiz</button>
              </Link>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

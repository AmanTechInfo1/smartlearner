import React from "react";
import styles from "./PracticeMultiple.module.css";
import greenRuler from "../../../assets/images/green-ruler.png";

import Lplateimg from "../../../assets/images/L-Plate.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import motorwayCartflow from "../../../assets/images/motorway-contraflow.png";
import absImg from "../../../assets/images/absImg.png";

export default function SafetyMargins() {
  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section
          className={styles.imageSection}
          style={{ backgroundColor: "green" }}
        >
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>Forget the rest, learn with the best!</h1>
              </div>

              <div className={styles.heading2}>
                <h2>Safety Margins</h2>
              </div>
              <div className={styles.btn}>
              <button id={styles.btn}>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="tel:02475092784"
                  >
                    Contact Us
                  </a>
                </button>
              </div>
            </div>
            <div className={styles.video}>
              <img src={Lplateimg} alt="LogoImg" />
            </div>
          </div>
        </section>

        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          {/* <h2 style={{ textAlign: "center" }}>Examples of Trigger Scoring</h2> */}

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={greenRuler} alt="greenRuler" />
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h2 style={{ color: "green" }}>What are Safety margins?</h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    The 4th topic from the multiple-choice section of the theory
                    test is safety margins. This topic is all about how certain
                    road and weather conditions can affect stopping distances
                    and your ability to handle your vehicle—looking closely at
                    what actions you need to take to make sure you maintain a
                    safe distance (or safety margin) between you and the vehicle
                    in front of you.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* ////////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2 style={{ color: "green" }}>Stopping Distances</h2>
            <p>
              The following provided stopping times have been calculated
              correctly and are imperative to understand whilst driving
              especially in harsh weather conditions. (hover your cursor over
              each box for the answer)
            </p>
            <hr style={{ opacity: "1", border: "1px solid green" }}></hr>

            <div className={styles.innerTheorySupportContent}>
              <div className={styles.theorySupportContentVideo}>
                <iframe
                  width="980"
                  height="551"
                  src="https://www.youtube.com/embed/1afkGSJN9LA"
                  title="How to remember Stopping Distances (SUPER EASY!!)"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2
            style={{
              color: "green",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Important Terms
          </h2>
          <hr style={{ opacity: "1", border: "1px solid green" }}></hr>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h2
                  style={{
                    color: "green",
                  }}
                >
                  Aqua Planing
                </h2>
                <div className={styles.innerTheorySupportContent}>
                  <div className={styles.theorySupportContentVideo}>
                    <iframe
                      width="447"
                      height="252"
                      src="https://www.youtube.com/embed/iRY8Xsohoh8"
                      title="Tyre Safety Month 2014 Aquaplaning animation - TyreSafe"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    When roads are wet, your car can aquaplane. This means the
                    tyres have lifted off the surface of the road and are
                    skating on the surface water. If your steering suddenly
                    becomes noticeably light, while driving on a wet road, this
                    is a sign that you are aquaplaning. To correct it ease off
                    the accelerator and allow the tyres to regain grip.
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h2
                  style={{
                    color: "green",
                  }}
                >
                  Contraflow Systems
                </h2>
                <img
                  src={motorwayCartflow}
                  alt="motorwayCartflow"
                  style={{ maxWidth: "250px", width: "100%" }}
                />

                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    A contraflow system is to prevent traffic in peak travel
                    times, to allow everyone to move on, rather than stand still
                    traffic. When entering a contraflow, you must: reduce speed
                    in good time, choose a suitable lane in good time, and keep
                    a safe distance from the vehicle in front of you.
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h2
                  style={{
                    color: "green",
                  }}
                >
                  Anti-lock Brakes (ABS)
                </h2>
                <img
                  src={absImg}
                  alt="absImg"
                  style={{ maxWidth: "350px", width: "100%" }}
                />

                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Anti-lock brakes prevent wheels from locking which means
                    tyres are less likely to skid. Vehicles are still able to be
                    steered whilst under braking when anti-lock brakes come into
                    effect. When a road surface is wet or loose, ie. Gravel, the
                    ABS may not work as well. In event of an emergency, apply
                    brakes as soon as possible and firmly to ensure a quick
                    stop.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* //////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2 style={{color:'green' }}>Driving in different conditions</h2>
            <hr style={{ opacity: "1", border: "1px solid green" }}></hr>

            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Braking distances on ice and in freezing conditions can be ten
                  times the normal distance.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Overall stopping distances will be longer when driving in wet
                  conditions.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  In windy conditions take extra care when passing cyclists and
                  motorcyclists. Always allow them plenty of room.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  After driving through floods or a ford the first thing you
                  should do is test your brakes. Driving slowly and applying the
                  breaks gently will also help to dry them.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  In hot weather the road surface can become soft. This can
                  affect your tyre grip and braking.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Side winds are most dangerous on an open stretch of road as
                  there is no buildings etc to block this.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  When driving on a motorway with surface spray use dipped
                  headlights to visible to others.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  When driving on snow or ice use the highest gear possible, as
                  this helps avoid wheel spin and allows a better grip.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  When approaching a sharp bend in poor conditions, such as ice,
                  you should slow down and avoid sudden steering movements.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  If your number plate, windows, lights, or mirrors are covered
                  in snow or ice you must clear them before staring a journey.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  You can tell you are driving on ice, and black ice, because
                  your tyres make little noise and the steering becomes lighter.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  When driving in fog use dipped headlights, allow more time for
                  your journey, and slow down.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* //////////////////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}

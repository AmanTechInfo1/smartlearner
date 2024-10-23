import React from "react";
import styles from "./css/RulesRoads.module.css";

import { FaCheckCircle } from "react-icons/fa";
import listImg from "../../../assets/images/handleiding-300x300.png";
import boxJunction from "../../../assets/images/boxJunction.jpg";
import cycleLane from "../../../assets/images/cycle-lanes.jpg";
import levelCrossing from "../../../assets/images/levelCrossing.jpg";
import Pedestrian from "../../../assets/images/padestrienCrossing.jpg";
import { Link } from "react-router-dom";

export default function RulesOfRoad() {
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
                  Rules of <span>The Road</span>
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
            What are the <span>Rules Of The Road?</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={listImg} alt="ListImg" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    The 10th topic from the multiple-choice section of the
                    theory test is rules of the road. As you’d probably expect
                    from the name, this is an important topic. In fact, it
                    probably encompasses most of the knowledge that you will
                    need when you finally get behind the wheel, including speed
                    limits, designated lanes, positioning on the road and, much
                    more.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* ///////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
            General Rules Of The Road
          </h2>
          <p style={{ textAlign: "center" }}>
            Here are some basic rules you should be following when driving on a
            public road.
          </p>
          <hr style={{ opacity: "1", border: "2px solid purple" }} />
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>You may drive over a footpath to get to a property.</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>No-one has priority at unmarked crossroads.</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  If you are approaching a junction and you realise you are in
                  the wrong lane, you cannot change lanes and must carry on.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>No stopping at any time in clearways.</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  No stopping in urban clearways except to pick up and put down
                  passengers.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* ////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Key <span>Terms</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={boxJunction} alt="boxJunction" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <h2 style={{ color: "#58d3b4", fontSize: "2rem" }}>
                  Box Junction
                </h2>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>Only enter when your exit road is clear.</p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    If turning right, you may wait in the box if oncoming
                    traffic is stopping you from turning right.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={cycleLane} alt="cycleLane" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <h2 style={{ color: "#58d3b4", fontSize: "2rem" }}>
                  Cycle Lane
                </h2>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    You are not allowed to drive in a cycle lane marked with a
                    solid white line.
                  </p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    A broken white line indicates that you may drive or park in
                    the cycle lane if unavoidable.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={levelCrossing} alt="motorwayLogo" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <h2 style={{ color: "#58d3b4", fontSize: "2rem" }}>
                  Level Crossings
                </h2>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    If the train has passed but the lights keep flashing, you
                    must continue waiting.
                  </p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    If the lights come on and the bell rings when you are
                    already on the crossing, keep going until clear.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={Pedestrian} alt="motorwayLogo" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <h2 style={{ color: "#58d3b4", fontSize: "2rem" }}>
                  Pedestrian Crossings
                </h2>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    Zebra crossing: although the actual rule is that you are
                    only obliged to stop once a pedestrian is on the crossing,
                    if you see someone waiting to cross, you should stop and
                    allow them to do so.
                  </p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    Toucan crossing: be aware that cyclists as well as
                    pedestrians may cross.
                  </p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    Pelican crossing: give way to pedestrians still on the
                    crossing when the amber light is flashing.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* ////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Important <span>Manoeuvres</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div
              className={styles.hazardTestWorkListDiv}
              style={{ display: "block" }}>
              <ul type="none">
                <img src={cycleLane} alt="cycleLane" />
                <h2>Turning</h2>
                <section id={styles.resLists12}>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      If turning left from a main road into a minor road, keep
                      well to the left.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      If both you and the oncoming driver are turning right,
                      keep the other vehicle on your right and turn behind it.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      If turning right on a dual carriageway with a very narrow
                      central reservation, make sure the road is clear in both
                      directions before turning.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
            <div
              className={styles.hazardTestWorkListDiv}
              style={{ display: "block" }}>
              <ul type="none">
                <img src={cycleLane} alt="cycleLane" />
                <h2>
                  <span>Parking</span>
                </h2>
                <section id={styles.resLists21}>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>Near a school entrance or exit.</p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>At a bus stop or nearby.</p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>Within 10m of a junction.</p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>Near the brow of a hill.</p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>On the right hand side of a road at night.</p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>In disabled bays without a permit.</p>
                  </li>
                </section>
              </ul>
            </div>
            <div
              className={styles.hazardTestWorkListDiv}
              style={{ display: "block" }}>
              <ul type="none">
                <img src={cycleLane} alt="cycleLane" />
                <h2>Reversing</h2>
                <section id={styles.resLists12}>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      You may remove your seatbelt but don’t reverse any longer
                      than necessary, and always check it’s safe to do so.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      Never reverse from a side road directly into a main road.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      If you are reversing into a side road, be aware that the
                      greatest danger is when the front of your vehicle swings
                      out.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
          </section>
        </section>
        {/* ///////////////////////////////////////////////////////////// */}

        {/* ///////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>Other</h2>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={cycleLane} alt="cycleLane" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    If the obstruction is on your side of the road, you must
                    give way to oncoming traffic.
                  </p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    You must stop when signalled to do so by the police, a
                    traffic officer or at a school crossing patrol nearby.
                  </p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>Always stop at red traffic lights.</p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    If damage or injury is caused in an accident, you must stop
                    immediately.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ////////////////////////////////////// */}
        <section className={styles.mockTestContainerSection}>
          <div className={styles.mockTestHeadingContainerDIv}>
            <h2 style={{ textAlign: "center", color: "red" }}>Test Yourself</h2>
          </div>
          <div className={styles.quizStartDiv}>
            <section className={styles.startQuizSection}>
              <h2>Start Quiz</h2>
              <h3>All Questions</h3>
              <p>
                Click the start quiz button to start the quiz and See your
                result
              </p>
              <Link to="/takequizCatName/Rules-of-the-Road">
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

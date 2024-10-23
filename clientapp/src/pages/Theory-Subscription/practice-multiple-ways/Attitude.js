import React from "react";
import attiduteImg from "../../../assets/images/attitude-M-img.png";
import styles from "./css/Attitude.module.css";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import adaptedImg from "../../../assets/images/dangers-of-tailgating-1024x683.jpg";
import unmarkedImg from "../../../assets/images/unmarked-crossroads.jpg";
import FillerCap from "../../../assets/images/fillerCap.jpeg";
import secondRuleImg from "../../../assets/images/2-second-rule.jpg";
import oneWayStreet from "../../../assets/images/one-wayStreet.jpg";
import tramsImg from "../../../assets/images/tram-sign-drivers.png";
import flashingHeadingImg from "../../../assets/images/flaSHINGHighlights.jpg";
import horsesRoadImg from "../../../assets/images/horse-road-1024x576.jpg";
import { Link } from "react-router-dom";

export default function Attitude() {
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
                <h2>Attitude</h2>
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
          <h2 >
            What is attitude <span>on the road?</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={attiduteImg} alt="attiduteImg" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • The second topic is Attitude. This topic relates to a
                    driver’s attitude towards other road users, the rules of the
                    road, and their own driving in general. It also covers how
                    drivers should react to things that occur on the road.
                  </p>
                </li>
                <li>
                  <p>
                    • It is important that all drivers display a measure of
                    patience, control and awareness when taking to the road,
                    avoiding reckless and careless behaviour that can endanger
                    themselves, and other road users.
                  </p>
                </li>
              </ul>
            </section>
          </section>
          <h2 className={styles.hazardTestH2}>
            Attitude <span>rules:</span>
          </h2>
          <section className={styles.bgColorList2}>
            <ul type="none">
              <li>
                <p>• Give way and follow the rules of who has priority</p>
              </li>
              <li>
                <p>• Be considerate</p>
              </li>
              <li>
                <p>• Make your intentions clear</p>
              </li>
              <li>
                <p>• Use horn and lights carefully</p>
              </li>
              <li>
                <p>• Avoid tailgating</p>
              </li>
              <li>
                <p>• Be careful with animals in the car</p>
              </li>
            </ul>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          {/* <h2 style={{ textAlign: "center" }}>Examples of Trigger Scoring</h2> */}

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <h2>
                Remember P.C.P.C - Positioning,
                <span>Consideration, Priority</span> and, Courtesy
              </h2>
            </div>
          </section>
        </section>
        {/* //////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Key <span>terms</span>{" "}
          </h2>
          <hr style={{ opacity: "1", border: "2px solid #f06400" }}></hr>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}></div>
          </section>
        </section>

        {/* ///////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Adapted <span>Teaching Style</span>
          </h2>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={adaptedImg} alt="adaptedImg" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • Tailgating is when a driver drives behind another vehicle
                    while not leaving sufficient distance to stop without
                    causing a collision if the vehicle in front stops suddenly.
                  </p>
                </li>
                <li>
                  <p>
                    • Is tailgating illegal? Yes, tailgating is a careless
                    driving offence, and you could land yourself a fine of up to
                    £200 or points on your license if you’re caught by the
                    police.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>

        {/* ////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Unmarked <span>Junctions</span>
          </h2>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={unmarkedImg} alt="unmarkedImg" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • The Highway Code reminds us that nobody has priority at
                    unmarked crossroads (rule 146). That means that you don’t
                    have any formal right to emerge onto the junction before
                    other vehicles. Neither do they have the right to go ahead
                    of you, so it is important that you evaluate the current
                    situation and decide when it is safest for you to emerge.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* //////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Filler <span>Cap</span>
          </h2>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={FillerCap} alt="FillerCap" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • A loose filler cap on a diesel fuel tank can cause the
                    road to become slippery for other road users. This is
                    particularly dangerous in wet conditions, although a huge
                    amount of traction (tyre grip) is also lost in drier
                    conditions.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            One-way <span>street</span>
          </h2>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={oneWayStreet} alt="oneWayStreet" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • You can park/overtake on either side of this road type.
                    When wanting to turn right you should position your car in
                    the right-hand lane. If you do enter a one-way street
                    incorrectly, you should not reverse back out again. Drivers
                    in this situation should pull up on the side of the road as
                    early as possible and put the hazard lights on, wait for a
                    gap in the traffic so you can turn your vehicle around, and
                    then drive out of the road safely.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            2 second <span>rule</span>
          </h2>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={secondRuleImg} alt="secondRuleImg" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • In dry conditions, you should always leave a 2-second time
                    gap in between yourself and the car in front of you.
                    Depending on the weather conditions it will depend on the
                    time gap you leave. For example, in wet conditions, it is 4
                    seconds, and in icy conditions, it is x10 more than dry
                    conditions.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Flashing <span>Headlights</span>
          </h2>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={secondRuleImg} alt="secondRuleImg" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • Only flash your headlights to let other road users know
                    that you are there. Do not flash your headlights to convey
                    any other message or intimidate other road users. This is
                    because flashing others, whether pedestrians or motorists,
                    can send mixed signals, thus posing risks for everyone
                    involved.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ///////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>Trams</h2>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={tramsImg} alt="tramsImg" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • Trams are eco-friendly, electric-powered modes of public
                    transport. Their rails pose the most risk to cyclists and
                    they cannot steer to avoid obstacles. Their signs are
                    diamond-shaped.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ///////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>Horses</h2>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={horsesRoadImg} alt="horsesRoadImg" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • If you see horses, slow down and allow plenty of room. If
                    you happen to see a horse at a roundabout, you should never
                    assume which direction they will go. This rule also applies
                    to cyclists.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ///////////////////////////////////////////////////// */}

        {/* /////////////////// */}
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
              <Link to="/takequizCatName/Attitude">
                {" "}
                <button>Start Quiz</button>
              </Link>
            </section>
          </div>
        </section>

        {/* ////////////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}

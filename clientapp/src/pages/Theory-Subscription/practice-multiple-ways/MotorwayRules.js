import React from "react";
import styles from "./css/MotorwayRules.module.css";

import {
  FaTimesCircle,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaTrailer,
  FaCheckCircle,
} from "react-icons/fa";
import motorwayLogo from "../../../assets/images/motorway-logo.png";
import mway from "../../../assets/images/mway.jpg";
import motorwayStuds from "../../../assets/images/motorway-studs-1-rotated.jpg";
import motorwayBreakdowns from "../../../assets/images/brakeDowns.png";
import towingTruck from "../../../assets/images/towingTruck.jpg";
import crawler from "../../../assets/images/crawler.png";
import { Link } from "react-router-dom";

export default function MotorwayRules() {
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
                  Motorway <span>Rules</span>
                </h2>
              </div>
              <div className={styles.alertBtn}>
                <a style={{ textDecoration: "none" }} href="tel:+4402475092784">
                  <button>Contact Us</button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            What are <span>Motorway Rules?</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={motorwayLogo} alt="motorwayLogo" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    The 9th topic from the multiple-choice section in the theory
                    test is motorway rules. When it comes to driving on the
                    motorway, small mistakes can have huge consequences. If
                    you’re not familiar with speed limits, lane discipline and
                    even what to do if you break down on the motorway, you could
                    end up endangering yourself and the motorists around you.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section className={styles.hazardTestH23}>
            <ul type="none">
              <h2>
                The following groups or <span>vehicles cannot travel on the motorway;</span>
              </h2>
            </ul>
          </section>
          <section
            className={styles.bgColorList2}
            style={{ textAlign: "center" }}>
            <ul type="none">
              <li>
                <FaTimesCircle id="listrightIcon" /> <p>Bicycles</p>
              </li>
              <li>
                <FaTimesCircle id="listrightIcon" />{" "}
                <p>Motorcycles with power of under 50 cc</p>
              </li>
              <li>
                <FaTimesCircle id="listrightIcon" />{" "}
                <p>The majority of powered wheelchairs/mobility scooters</p>
              </li>
              <li>
                <FaTimesCircle id="listrightIcon" />{" "}
                <p>Agricultural vehicles</p>
              </li>
              <li>
                <FaTimesCircle id="listrightIcon" />{" "}
                <p>Some slow-moving vehicles</p>
              </li>
              <li>
                <FaTimesCircle id="listrightIcon" /> <p>Pedestrians</p>
              </li>
              <li>
                <FaTimesCircle id="listrightIcon" /> <p>Horse riders</p>
              </li>
            </ul>
          </section>
        </section>

        {/* ///////////////////////////////////////////////////// */}

        {/* //////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Before a <span> Motorway Journey</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={mway} alt="motorwayLogo" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    When it comes to driving on the motorway, small mistakes can
                    have huge consequences. If you’re not familiar with speed
                    limits, lane discipline and even what to do if you break
                    down on the motorway, you could end up endangering yourself
                    and the motorists around you.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Joining the <span>Motorway</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="400"
                    height="226"
                    src="https://www.youtube.com/embed/-LzwsHSZI6o"
                    title="Road Safety: Joining the Motorway"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <FaTimesCircle id="listrightIcon" />{" "}
                  <p>
                    Use the slip road to build up your speed to match the
                    traffic already on the motorway before merging
                  </p>
                </li>
                <li>
                  <FaTimesCircle id="listrightIcon" />{" "}
                  <p>Give way to traffic already on the motorway.</p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
            Driving on a motorway
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <li style={{ textAlign: "center" }}>
                  <p>
                    For most vehicles travelling on the motorway the national
                    speed limit applies. For cars and motorcycles this is 70
                    mph. This limit applies to all lanes except those with signs
                    showing a lower speed limit, you must obey these.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.features}>
          <div className={styles.mainFeatures}>
            <div className={styles.column}>
              <span>
                <FaArrowCircleLeft id={styles.featuresIcon} />
              </span>
              <h3 style={{ color: "#58d3b4" }}>Use the left lane</h3>
              <div className={styles.hazardTestWorkListDiv}>
                <ul type="none">
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>When joining the motorway.</p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>Before you leave the motorway.</p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>Always unless overtaking.</p>
                  </li>
                  <li>
                    <FaTimesCircle id="listrightIcon" />{" "}
                    <p>
                      You shouldn’t overtake on the left unless traffic is
                      moving slowly in queues and the queue on your right is
                      moving more slowly than the one you’re in. In this
                      instance you may overtake on the left.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.column} id={styles.column}>
              <span>
                <FaArrowCircleRight id={styles.featuresIcon} />
              </span>
              <h3>Using center/right lane</h3>
              <div className={styles.hazardTestWorkListDiv}>
                <ul type="none">
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      The middle and right-hand lanes are to be used only for
                      overtaking other vehicles, and you must return to the left
                      lane when you’ve finished overtaking.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      You should only use the center/right lane as normal
                      running lanes if signs tell you to.
                    </p>
                  </li>
                  <li>
                    <FaTimesCircle id="listrightIcon" />{" "}
                    <p>
                      Do not assume the center/right lane are for faster speeds.
                      Even when overtaking you should be careful to not break
                      the speed limit.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.column}>
              <span>
                <FaTrailer id={styles.featuresIcon} />
              </span>
              <h3>Towing a trailer</h3>
              <div className={styles.hazardTestWorkListDiv}>
                <ul type="none">
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      In normal circumstances. you should only travel in the
                      left lane and use the center lane to overtake.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      If your towing the speed limit is lower for you. The speed
                      limit when towing a trailer on a motorway is 60 MPH.
                    </p>
                  </li>
                  <li>
                    <FaTimesCircle id="listrightIcon" />{" "}
                    <p>
                      You should not travel in the right-hand lane of a
                      motorway, unless there are lane closures.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* //////////////////////////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          style={{ textAlign: "center" }}>
          <h2 className={styles.hazardTestH2} style={{ textAlign: "center" }}>
            Key <span>terms</span>{" "}
          </h2>
          <hr style={{ opacity: "1", border: "2px solid #dd0067" }}></hr>

          <img
            src={motorwayStuds}
            alt="motorway"
            style={{ maxWidth: "650px", width: "100%", margin: "10px" }}
          />
          <div className={styles.hazardTestWorkListDiv23}>
            <img
              src={motorwayBreakdowns}
              alt="motorway"
              style={{ maxWidth: "850px", width: "100%", margin: "10px" }}
            />
          </div>
        </section>

        {/* ////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 style={{ textAlign: "center" }}>
            What to do if you <span>breakdown or have an accident</span>
          </h2>
          <h2 style={{ textAlign: "center", fontSize: "1.5rem" }}>
            Only stop on the motorway if;
          </h2>
          <div className={styles.bgColorList33} style={{ textAlign: "center" }}>
            <ul type="none">
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>There are red flashing lights above every lane.</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  You’re told to do so by the police, Driver and Vehicle
                  Standards Agency (DVSA) officers or traffic officers.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>You’re stuck in a traffic jam.</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>You have an emergency or breakdown.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Before a <span>Motorway Journey</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={mway} alt="motorwayLogo" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    When it comes to driving on the motorway, small mistakes can
                    have huge consequences. If you’re not familiar with speed
                    limits, lane discipline and even what to do if you break
                    down on the motorway, you could end up endangering yourself
                    and the motorists around you.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* ////////////////////////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h2 style={{ fontSize: "1.5rem" }}>
                  If you are stopped in an emergency on the hard shoulder you
                  should:
                </h2>
                <section id={styles.resLists12}>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      Warn other drivers that you have broken down by switching
                      on your hazard lights.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      If visibility is poor or its night-time, switch on the
                      sidelights and don’t open the offside doors (those nearest
                      the carriageway). Instead, you and your passengers should
                      leave the vehicle by the nearside doors, away from the
                      traffic.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      In case another vehicle crashes into yours, you should
                      wait on the embankment near your vehicle, but away from
                      the hard shoulder.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      When you are ready to return to the carriageway you should
                      wait for a safe gap in the traffic and then drive along
                      the hard shoulder to gain speed before moving out onto the
                      main carriageway in the same way you’d use the slip road
                      when first entering the motorway.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h2 style={{ fontSize: "1.5rem" }}>
                  <span>
                    You should use one of the emergency telephones if you’re
                    able to.
                  </span>
                </h2>
                <section id={styles.resLists21}>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      Normally at one-mile intervals. Marker posts at 100-metre
                      intervals point you in the direction of the nearest phone.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      Connected directly to a control centre, where the operator
                      will deal with your call and direct the appropriate
                      services to help you.
                    </p>
                  </li>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      You should stand facing the oncoming traffic if you need
                      to use the emergency telephone. This is so that you can
                      see any hazards approaching.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
          </section>
        </section>
        {/* ////////////////////////////////////////////////////////////// */}

        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <ul type="none">
              <h2 style={{ fontSize: "1.5rem" }}>
                If you cannot get onto the{" "}
                <span>Hard shoulder when you break down, you should:</span>
              </h2>
              <section id={styles.resLists12}>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>Obey all speed limits.</p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>Keep a safe distance from the vehicle ahead.</p>
                </li>
              </section>
            </ul>
          </div>
        </section>
        {/* /////////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Joining <span>The Motorway</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={towingTruck} alt="towingTruck" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <FaTimesCircle id="listrightIcon" />{" "}
                  <p>
                    Use the slip road to build up your speed to match the
                    traffic already on the motorway before merging
                  </p>
                </li>
                <li>
                  <FaTimesCircle id="listrightIcon" />{" "}
                  <p>Give way to traffic already on the motorway.</p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* /////////////////////////////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Smart Motorway and <span>Motorway Signs</span>
          </h2>

          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <FaTimesCircle id="listrightIcon" />{" "}
                <p>
                  Smart motorways are a contentious topic, but for now, they’re
                  here to stay. Many people are of the opinion that smart
                  motorways are more dangerous than conventional motorways,
                  because of the lack of a hard shoulder.
                </p>
              </li>
              <li>
                <FaTimesCircle id="listrightIcon" />{" "}
                <p>
                  A smart motorway is a section of a motorway that uses traffic
                  management methods to increase capacity and reduce congestion
                  in, particularly busy areas. These methods include using the
                  hard shoulder as a running lane and using variable speed
                  limits to control the flow of traffic.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={crawler} alt="crawler" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <FaTimesCircle id="listrightIcon" />{" "}
                  <p>
                    Crawler Lane – Where the motorway goes uphill steeply, there
                    may be a separate lane for slow-moving vehicles, known as a
                    crawler lane. This helps the faster-moving traffic to flow
                    more easily and will be signposted.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section style={{ textAlign: "center", color: "white" }}>
          <p>
            To view all Motorway Road Signs{" "}
            <a
              href="https://assets.publishing.service.gov.uk/media/656ef4271104cf0013fa74ef/know-your-traffic-signs-dft.pdf"
              style={{
                textAlign: "center",
                color: "#dd0067",
                textDecoration: "none",
              }}>
              {" "}
              Click Here
            </a>{" "}
            – You will find all the motorway signs from pages 89 to 93.
          </p>
        </section>

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
              <Link to="/takequizCatName/Motorway-Rules">
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

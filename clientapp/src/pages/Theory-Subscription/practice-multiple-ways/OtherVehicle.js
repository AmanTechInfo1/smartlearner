import React from "react";
import styles from "./css/OtherTypes.module.css";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import largeVehicleJunction from "../../../assets/images/truck-oncoming-trasffic.jpg";
import largeVehicle from "../../../assets/images/behindLargeVehicle.jpg";
import trams from "../../../assets/images/trams.jpg";
import busses from "../../../assets/images/London-bus.jpg";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import towingcars from "../../../assets/images/tick-green.jpg";
import sideWinds from "../../../assets/images/side-Winds.jpeg";
import { Link } from "react-router-dom";

export default function OtherVehicle() {
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
                  Other Types <span>Of Vehicles</span>
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
            Large Vehicles at <span>Junctions/Roundabouts</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={largeVehicleJunction} alt="largeVehicleJunction" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    The 7th topic is Other Types of Vehicles. Large vehicles
                    often need to take unorthodox paths at junctions/roundabouts
                    because of their size.
                  </p>
                </li>
                <li>
                  <p>
                    For example, it’s not uncommon to see a large truck indicate
                    left but position to the right. They do this to make it
                    easier for them to turn. If you see a truck turning in front
                    of you you should always leave plenty of room to allow them
                    to turn safely.
                  </p>
                </li>
                <li>
                  <p>
                    Large vehicles can also hide overtaking traffic so always be
                    extra cautious when pulling out at junctions when large
                    vehicles are oncoming. Remember larger vehicles mean larger
                    hazards!
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* //////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            When behind <span>Large vehicles</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={largeVehicle} alt="largeVehicle" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    You must stay well behind a large vehicle as because of the
                    size they often obstruct your view of the road. It’s
                    advisable to leave extra room between your vehicle and
                    theirs as it allows you to see more clearly what is up
                    ahead.
                  </p>
                </li>
                <li>
                  <p>
                    Please remember that before you overtake a larger vehicle
                    you need a clear view. This is because of their length they
                    are longer they take more time to pass.
                  </p>
                </li>
                <li>
                  <p>
                    Beware of surface spray coming from large vehicles when
                    driving behind them on a wet road. If it’s affecting your
                    view drop back.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* ////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Public <span>Transport</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <div className={styles.hazardTestWorkListDiv}>
                  <img src={trams} alt="trams" />
                </div>
                <h2>Trams</h2>
                <section id={styles.resLists12}>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      Are eco friendly because they are powered by electricity.
                    </p>
                  </li>
                  <li>
                    <FaTimesCircle id="listrightIcon" />{" "}
                    <p>
                      Their rails pose threats to cyclists as their wheels could
                      get stuck.
                    </p>
                  </li>
                  <li>
                    <FaTimesCircle id="listrightIcon" />{" "}
                    <p>Cannot steer to avoid obstacles.</p>
                  </li>
                </section>
              </ul>
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <div className={styles.hazardTestWorkListDiv}>
                  <img src={busses} alt="busses" />
                </div>
                <h2>
                  <span>Buses</span>
                </h2>
                <section id={styles.resLists21}>
                  <li>
                    <FaCheckCircle id="listrightIcon" />{" "}
                    <p>
                      If safe, you should should give way to buses looking to
                      move off.
                    </p>
                  </li>
                  <li>
                    <FaTimesCircle id="listrightIcon" />{" "}
                    <p>
                      When overtaking a stopped bus be aware of pedestrians
                      leaving the bus, as they may potentially try crossing
                      infront of the bus.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
          </section>
        </section>

        {/* ////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Towing a <span>Caravan</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={towingcars} alt="towingcars" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    When towing a caravan it is advisable to use an
                    extended-side arm mirror. This is because towing a large
                    trailer or caravan can greatly reduce your view of the road
                    behind. By using an extended-arm side mirror so that you can
                    see clearly behind and down both sides of the caravan, or
                    trailer.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>Sidewinds</h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={sideWinds} alt="sideWinds" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    High-sided vehicles are most affected by windy weather, but
                    strong gusts can also blow a car, cyclist, motorcyclist or
                    horse rider off course. This can happen on open stretches of
                    road exposed to strong crosswinds, or when passing bridges
                    or gaps in hedges.
                  </p>
                </li>
                <li>
                  <p>
                    In very windy weather your vehicle may be affected by
                    turbulence created by large vehicles. Motorcyclists are
                    particularly affected, so keep well back from them when they
                    are overtaking a high-sided vehicle.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////////// */}

        {/* ////////////////////////////////////////////// */}

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
              <Link to="/takequizCatName/Other-Types-of-Vehicles">
                {" "}
                <button>Start Quiz</button>
              </Link>
            </section>
          </div>
        </section>
        {/* ////////////////// */}
      </div>
    </div>
  );
}

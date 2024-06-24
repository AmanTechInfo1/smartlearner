import React from "react";
import styles from "./PracticeMultiple.module.css";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import {
  FaTimesCircle,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaTrailer,
  FaCheckCircle,
} from "react-icons/fa";
import turnLeftSign from "../../../assets/images/turn-left-ahead-sign.jpg";
import circleOrders from "../../../assets/images/30-red-150x150.jpg"
import triangleAhead from "../../../assets/images/triangle.png"
import oneWyroad from  "../../../assets/images/one-way-rectangle-equals-information.png"





export default function RoadTraffic() {
  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section
          className={styles.imageSection}
          style={{ backgroundColor: "#58d3b4" }}
        >
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>Forget the rest, learn with the best!</h1>
              </div>

              <div className={styles.heading2}>
                <h2>Road and Traffic signs</h2>
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
              <img src={turnLeftSign} alt="turnLeftSign" />
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h2 style={{ color: "#58d3b4", fontSize: "2rem" }}>
                  What are road and traffic signs?
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    The 11th topic from the theory test is road and traffic
                    signs. Whilst all of the topics we’ve covered (and are going
                    to cover) are vital in helping you become a safe driver,
                    road and traffic signs probably take the cake in terms of
                    importance. Once you get behind the wheel in your lessons,
                    you’ll need to be able to identify road and traffic signs
                    and know what action(s) you need to take. Otherwise, you
                    could end up endangering yourself and other road users.
                  </p>
                </li>
              </ul>
              <ul type="none">
                <h2 style={{ color: "#58d3b4", fontSize: "1.5rem" }}>
                  In this section of multiple choice, you’ll find out about what
                  you can learn from:
                </h2>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>The shapes of road signs</p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" /> <p>Road markings</p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>The colours of traffic lights and their sequences</p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>Motorway warning lights</p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    The signals used by other drivers and by police officers
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* ///////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
            What do the shapes of signs mean?
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <img src={circleOrders} alt="circleOrders" />
                <h2 style={{ color: "#58d3b4", fontSize: "1.5rem" }}>
                  Circle = Orders
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Circular signs give orders – they must be followed to stay
                    within the law. Circles with a red border tell you what you
                    must not do (e.g. take a U-turn). Blue circles usually give
                    positive instruction, such as ‘turn left ahead’.
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <img src={triangleAhead} alt="triangleAhead" />
                <h2 style={{ color: "#58d3b4", fontSize: "1.5rem" }}>
                  Triangle = Warning
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Triangular signs warn. Road signs in the shape of an
                    equilateral triangle are designed to warn you about the road
                    layout or any hazards that lie ahead, such as sharp bends.
                    They almost always have a red border.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <img src={oneWyroad} alt="one-way" />
                <h2 style={{ color: "#58d3b4", fontSize: "1.5rem" }}>
                  Rectangle = Information
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Rectangular signs inform. Blue rectangular signs give
                    information on motorways, green signs direct you on primary
                    roads, while white signs give directions on minor roads.
                    Rectangular signs can also indicate bus lanes and congestion
                    charge zones.
                  </p>
                </li>
              </ul>
            </div>
          
          </section>
        </section>
      </div>
    </div>
  );
}

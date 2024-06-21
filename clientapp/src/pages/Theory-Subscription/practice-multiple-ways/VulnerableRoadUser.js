import React from "react";
import styles from "./PracticeMultiple.module.css";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import vulnerableroad from "../../../assets/images/Vulnerable-road-users.png";
import roadSafty from "../../../assets/images/roadUserVulnerableuser.png"
import { IoMdArrowDropright } from "react-icons/io";
import {
  FaWalking,
  FaBlind,
  FaBaby,
  FaBiking,
  FaMotorcycle,
  FaHorse,
} from "react-icons/fa";

export default function VulnerableRoadUser() {
  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section
          className={styles.imageSection}
          style={{ backgroundColor: "Orange" }}
        >
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>Forget the rest, learn with the best!</h1>
              </div>

              <div className={styles.heading2}>
                <h2>Vulnerable road users</h2>
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
              <img src={vulnerableroad} alt="vulnerableroad" />
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h2 style={{ color: "Orange" }}>
                  Who are Vulnerable road users?
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    The 6th topic from the theory test is vulnerable road users.
                    So far, the topics we’ve covered mostly look at what you
                    need to do to keep yourself safe when behind the wheel. This
                    time, we’re focusing on the people who are most vulnerable
                    on the road, from cyclists to horse riders, and how you need
                    to act in order to ensure their safety.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 style={{ textAlign: "center", color: "orange" }}>
            Who are Vulnerable road users?
          </h2>
          <hr style={{ opacity: "1", border: "2px solid orange" }}></hr>
          <p style={{ textAlign: "center" }}>
            Road users may be defined as vulnerable with regard to their degree
            of protection in traffic such as pedestrians, cyclists,
            non-motorised road users and motorcyclists, or their degree of
            mobility, such as the young, the elderly, and people with
            disabilities or special needs.
          </p>
        </section>
        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.thMultipleChoiceSection}>
          <div className={styles.thMultipleChioceHeader}>
            <h2 style={{ color: "orange" }}>
              Who is classed as a vulnerable road user?
            </h2>
          </div>
          <div className={styles.thMultipleChoiceListContainer}>
            <section className={styles.features}>
              <div className={styles.mainFeatures}>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaWalking id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Pedestrian</h3>
                </div>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaBlind id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Elderly</h3>
                </div>

                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaBaby id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Children</h3>
                </div>

                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaBiking id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Cyclist</h3>
                </div>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaMotorcycle id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Motorbikes</h3>
                </div>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaHorse id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Horses</h3>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* ////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2 style={{ color: "green" }}>
              Why are they classed as vulnerable road users?
            </h2>
            <hr style={{ opacity: "1", border: "1px solid green" }}></hr>

            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Limited protection from traffic. (They do not have any
                  protection from others i.e. not in another vehicle with
                  airbags and walls to take the impact)
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Capability to understand. (Young children are sometimes unable
                  to understand the dangers of the road and how to keep
                  themselves safe)
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Reduced Reactions. (The elderly may have reduced vision,
                  hearing or awareness to their surroundings. They are also
                  likely to be slower when crossing the road, unable to run
                  across like children can)
                </p>
              </li>
            
            </ul>
          </div>
        </section>
        {/* ////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection} style={{ textAlign: "center"}}>
          <h2 style={{ textAlign: "center", color: "orange" }}>
          Learn the warning signs!
          </h2>
          <hr style={{ opacity: "1", border: "2px solid orange" }}></hr>
          <img src={roadSafty} alt="roadSafty" style={{ maxWidth:'800px', width:'100%'}}/>       
        </section>

        {/* ///////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}

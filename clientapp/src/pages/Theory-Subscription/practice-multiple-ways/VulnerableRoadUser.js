import React from "react";
import styles from "./PracticeMultiple.module.css";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import vulnerableroad from "../../../assets/images/Vulnerable-road-users.png";

import roadSafty from "../../../assets/images/roadUserVulnerableuser.png";

import { IoMdArrowDropright } from "react-icons/io";
import {
  FaWalking,
  FaBlind,
  FaBaby,
  FaBiking,
  FaMotorcycle,
  FaHorse,
} from "react-icons/fa";
import dogGuid from "../../../assets/images/guide-dog.jpg";
import horseriding from "../../../assets/images/horse-rider.jpg";
import motorbikecycle from "../../../assets/images/motorbikes-cyclist.jpg";
import schoolChilderns from "../../../assets/images/childern-School.jpg";
import disabilityScooters from "../../../assets/images/disability-scooter.jpeg";
import { Link } from "react-router-dom";

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
        <section
          className={styles.hazardTestWorkListSection}
          style={{ textAlign: "center" }}
        >
          <h2 style={{ textAlign: "center", color: "orange" }}>
            Learn the warning signs!
          </h2>
          <hr style={{ opacity: "1", border: "2px solid orange" }}></hr>
          <img
            src={roadSafty}
            alt="roadSafty"
            style={{ maxWidth: "800px", width: "100%" }}
          />
        </section>

        {/* /////////////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          style={{ textAlign: "center" }}
        >
          <h2 style={{ textAlign: "center", color: "orange" }}>
            How to deal with Vulnerable Road Users
          </h2>
          <hr style={{ opacity: "1", border: "2px solid orange" }}></hr>
        </section>
        {/* /////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <img src={dogGuid} alt="dogGuide" />
            <h2 style={{ color: "Orange", fontSize: "2rem" }}>
              Disability Scooters
            </h2>
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Pedestrian with a white stick – This means that they are
                  blind, so cannot see you approach or stop the vehicle. Allow
                  extra time and care when crossing.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <img src={horseriding} alt="horseriding" />
            <h2 style={{ color: "Orange", fontSize: "2rem" }}>Horses</h2>
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  When you decide to overtake a horse rider, make sure you can
                  do so safely before you move out. Leave them plenty of room
                  and pass slowly. Passing too closely at speed could startle
                  the horse and unseat the rider.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  You should also never assume which way a horse rider is going
                  to go. Horses and their riders move more slowly than other
                  road users. They might not have time to cut across heavy
                  traffic to take up a position in the right-hand lane. For this
                  reason, a horse and rider may approach a roundabout in the
                  left-hand lane even though they’re turning right.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <img src={motorbikecycle} alt="motorbikecycle" />
            <h2 style={{ color: "Orange", fontSize: "2rem" }}>
              Motorbike/Cyclists
            </h2>
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  These vehicles require you to take extra care when you see
                  them. They are most vulnerable at roundabouts and junctions.
                  Cyclists may be in the left lane, but this doesn’t mean they
                  are going left they could be going in any direction. They will
                  stay in the left lane close to the side of the road for their
                  own safety as horses can be easily scared by other cars and
                  cyclists may be blown over by a strong gust of wind.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Note: You should NEVER overtake these road users at a
                  junction.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <img src={schoolChilderns} alt="schoolChilderns" />
            <h2 style={{ color: "Orange", fontSize: "2rem" }}>
              Children/Schools
            </h2>
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Children can pose a massive threat whilst driving. When
                  driving through domestic areas and by schools, you should
                  drive at a slower speed, just in case a child runs out from
                  behind a parked car into the road. As children are often very
                  small, they cannot be seen hidden behind parked cars.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* ////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <img src={disabilityScooters} alt="disabilityScooters" />
            <h2 style={{ color: "Orange", fontSize: "2rem" }}>
              Disability Scooters
            </h2>
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  You must also be cautious if you see a disabled persons
                  vehicle (Such as an electric scooter) these will usually be
                  equipped with a yellow flashing light to indicate they are
                  slow, their maximum speed is 8MPH.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////////////// */}
        <section>
          <h2
            style={{ textAlign: "center", color: "yellow", fontSize: "2rem" }}
          >
            Test yourself
          </h2>
          <div id={styles.btnDiv}>
            <Link to="/">
              <button id={styles.hazzardBtn}> 25 Questions​</button>
            </Link>
            <Link to="/">
              <button id={styles.hazzardBtn}>75 Questions​</button>
            </Link>
            <Link to="/">
              <button id={styles.hazzardBtn}>All Questions​</button>
            </Link>
          </div>
        </section>

        {/* ///////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}

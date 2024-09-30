import React from "react";
import styles from "./css/Valnerable.module.css";
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
                  Vulnerable <span>Road Users</span>
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
            Who are <span>Vulnerable Road Users?</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={vulnerableroad} alt="vulnerableroad" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
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
          <h2>
            Who are <span>Vulnerable Road Users?</span>
          </h2>
          <hr style={{ opacity: "1", border: "2px solid orange" }}></hr>
          <section className={styles.bgColorList33}>
            <p style={{ textAlign: "center" }}>
              Road users may be defined as vulnerable with regard to their
              degree of protection in traffic such as pedestrians, cyclists,
              non-motorised road users and motorcyclists, or their degree of
              mobility, such as the young, the elderly, and people with
              disabilities or special needs.
            </p>
          </section>
        </section>
        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.thMultipleChoiceSection}>
          <div className={styles.thMultipleChioceHeader}>
            <h2>
              Who is classed as a <span>Vulnerable Road Users?</span>
            </h2>
          </div>
          <div className={styles.thMultipleChoiceListContainer}>
            <section className={styles.features}>
              <div className={styles.mainFeatures}>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaWalking id={styles.featuresIcon} />
                  </span>
                  <h3>Pedestrian</h3>
                </div>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaBlind id={styles.featuresIcon} />
                  </span>
                  <h3>Elderly</h3>
                </div>

                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaBaby id={styles.featuresIcon} />
                  </span>
                  <h3>Children</h3>
                </div>

                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaBiking id={styles.featuresIcon} />
                  </span>
                  <h3>Cyclist</h3>
                </div>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaMotorcycle id={styles.featuresIcon} />
                  </span>
                  <h3>Motorbikes</h3>
                </div>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaHorse id={styles.featuresIcon} />
                  </span>
                  <h3>Horses</h3>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* ////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Why are they classed as <span>Vulnerable Road Users?</span>
          </h2>
          <hr style={{ opacity: "1", border: "2px solid orange" }}></hr>
          <section className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  • Limited protection from traffic. (They do not have any
                  protection from others i.e. not in another vehicle with
                  airbags and walls to take the impact)
                </p>
              </li>
              <li>
                <p>
                  • Capability to understand. (Young children are sometimes
                  unable to understand the dangers of the road and how to keep
                  themselves safe)
                </p>
              </li>
              <li>
                <p>
                  • Reduced Reactions. (The elderly may have reduced vision,
                  hearing or awareness to their surroundings. They are also
                  likely to be slower when crossing the road, unable to run
                  across like children can)
                </p>
              </li>
            </ul>
          </section>
        </section>

        {/* ////////////////////////////////////////////// */}

        {/* ////////////////////////////////////////////// */}
        <section
          className={styles.hazardTestWorkListSection}
          style={{ textAlign: "center" }}>
          <h2>
            Learn the <span>Warning Signs!</span>
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
          style={{ textAlign: "center" }}>
          <h2>
            How to deal with <span>Vulnerable Road Users</span>
          </h2>
          <hr style={{ opacity: "1", border: "2px solid orange" }}></hr>
        </section>
        {/* /////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Disability <span>Scooters</span>
          </h2>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={dogGuid} alt="dogGuide" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    Pedestrian with a white stick – This means that they are
                    blind, so cannot see you approach or stop the vehicle. Allow
                    extra time and care when crossing.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>

        {/* //////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>Horses</h2>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={horseriding} alt="horseriding" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • When you decide to overtake a horse rider, make sure you
                    can do so safely before you move out. Leave them plenty of
                    room and pass slowly. Passing too closely at speed could
                    startle the horse and unseat the rider.
                  </p>
                </li>
                <li>
                  <p>
                    • You should also never assume which way a horse rider is
                    going to go. Horses and their riders move more slowly than
                    other road users. They might not have time to cut across
                    heavy traffic to take up a position in the right-hand lane.
                    For this reason, a horse and rider may approach a roundabout
                    in the left-hand lane even though they’re turning right.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}> Motorbike/Cyclists</h2>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={motorbikecycle} alt="motorbikecycle" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • These vehicles require you to take extra care when you see
                    them. They are most vulnerable at roundabouts and junctions.
                    Cyclists may be in the left lane, but this doesn’t mean they
                    are going left they could be going in any direction. They
                    will stay in the left lane close to the side of the road for
                    their own safety as horses can be easily scared by other
                    cars and cyclists may be blown over by a strong gust of
                    wind.
                  </p>
                </li>
                <li>
                  <p>
                    • Note: You should NEVER overtake these road users at a
                    junction.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            {" "}
            Children<span>/</span>Schools
          </h2>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={schoolChilderns} alt="schoolChilderns" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    Children can pose a massive threat whilst driving. When
                    driving through domestic areas and by schools, you should
                    drive at a slower speed, just in case a child runs out from
                    behind a parked car into the road. As children are often
                    very small, they cannot be seen hidden behind parked cars.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            {" "}
            Disability <span>Scooters</span>
          </h2>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={disabilityScooters} alt="disabilityScooters" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    You must also be cautious if you see a disabled persons
                    vehicle (Such as an electric scooter) these will usually be
                    equipped with a yellow flashing light to indicate they are
                    slow, their maximum speed is 8MPH.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>

        {/* ///////////////////////////////////////////////////////////////// */}

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
              <Link to="/takequizCatName/Vulnerable-Road-Users">
                {" "}
                <button>Start Quiz</button>
              </Link>
            </section>
          </div>
        </section>

        {/* ///////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}

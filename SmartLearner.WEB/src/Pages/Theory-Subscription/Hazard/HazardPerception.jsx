import React from "react";
import styles from "./Hazard.module.css";
import { FaHome } from "react-icons/fa";
import { IoMdArrowDropright  } from "react-icons/io";
import HazardVideos from "./HazardVideos";

export default function HazardPerception() {
  return (
    <>
      <section className={styles.hazardHomeBannerSection}>
        <div className={styles.overlay}></div>
        <div className={styles.hazardHomeBannerHeader}>
          <h2>Hazard Awareness</h2>
          <hr />
          <span>
            <FaHome id={styles.hazardHomeIconBannar} />
          </span>
        </div>
      </section>

      {/* ////////////////////////////////// */}

      <section className={styles.hazardTestWorkListSection}>
        <div className={styles.hazardTestWorkListDiv}>
          <h2>How does the test work?</h2>
          <ul type="none">
            <li>
              <IoMdArrowDropright  id="listrightIcon"/>{" "}
              <p>
                Before you start the hazard perception test, you’ll be shown a
                video about how it works.
              </p>
            </li>
            <li>
              <IoMdArrowDropright  id="listrightIcon"/>{" "}
              <p>You’ll then watch 14 video clips. The clips:</p>
            </li>
            <li>
              <IoMdArrowDropright  id="listrightIcon"/>{" "}
              <p>– Feature everyday road scenes.</p>
            </li>
            <li>
              <IoMdArrowDropright  id="listrightIcon"/>{" "}
              <p>
                – Contain at least one ‘developing hazard’ – but one of the
                clips features 2 developing hazards.
              </p>
            </li>
            <li>
              <IoMdArrowDropright  id="listrightIcon"/>{" "}
              <p>
                You get points for spotting the developing hazards as soon as
                they start to happen.
              </p>
            </li>
          </ul>
          <ul type="none">
            <h3>
              A developing hazard is something that would cause you to take
              action, like changing speed or direction.
            </h3>
            <li>
              <IoMdArrowDropright  id="listrightIcon"/>{" "}
              <p>
                You can score up to <b>5 points</b> for each developing hazard.
              </p>
            </li>
            <li>
              <IoMdArrowDropright  id="listrightIcon"/>{" "}
              <p>
                To get a high score, click the mouse as soon as you see the
                hazard starting to develop.
              </p>
            </li>
            <li>
              <IoMdArrowDropright  id="listrightIcon"/>{" "}
              <p>
                You do not lose points if you click and get it wrong. However,
                you will not score anything if you click continuously or in a
                pattern.
              </p>
            </li>
            <li>
              <IoMdArrowDropright  id="listrightIcon"/>{" "}
              <p>
                You only get one attempt at each clip. You cannot review or
                change your responses.
              </p>
            </li>
            <li>
              <IoMdArrowDropright  id="listrightIcon"/>{" "}
              <p>
                You’ll get the result at the test centre after taking the theory
                test. You must pass both parts to pass the test. You’ll get a
                letter with a pass certificate number at the test centre.
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/* ////////////////////////////////////////////////////// */}

      <section className={styles.hazardVideoContainerSection}>
        <div><h2>Hazard perception videos</h2>
        <p>Below we have created videos to guide you through hazard perception clips.</p></div>
        <HazardVideos/>
      </section>
    </>
  );
}

import React from "react";
import styles from "./Hazard.module.css";
import { FaHome } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import HazardVideos from "../../../pages/Theory-Subscription/Hazard/HazardVideos";
import { Link } from "react-router-dom";

export default function HazzardClips() {
  return (
    <div className={styles.HazardPerceptionPagges}>
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
                Hazard <span>Perception Clips</span>{" "}
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

      {/* ////////////////////////////////// */}

   
      {/* ////////////////////////////////////////////////////// */}

      <section className={styles.hazardTestWorkListSection}>
        <div>
          <h2>
            Hazard <span>Perception videos</span>
          </h2>
          <p style={{ textAlign: "center" }}>
            Below we have created videos to guide you through hazard perception
            clips.
          </p>
        </div>
        <HazardVideos />
      </section>
      <div className={styles.TMnextPage}>
          <button className={styles.TMnextButton}>
            <Link to="/Adi-part-1-MockTest">
              NEXT PAGE MockTest
            </Link>
          </button>
        </div>
    </div>
  );
}

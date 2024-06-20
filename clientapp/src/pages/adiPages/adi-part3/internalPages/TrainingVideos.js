import React from "react";
import styles from "../../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../../assets/images/L-Plate.jpg";

export default function TrainingVideos() {
  const videoURLs = [
    "https://www.youtube.com/embed/aBaqogvNPOI",
    "https://www.youtube.com/embed/86u6Bx-Ma3A",
    "https://www.youtube.com/embed/GV1FCFWipXQ",
    "https://www.youtube.com/embed/ZNQat_6-z3Y",
    "https://www.youtube.com/embed/UPDG-vBshLs",
    "https://www.youtube.com/embed/j-eFbWjB0tw",
    "https://www.youtube.com/embed/aEX3F9d-a2s",
    "https://www.youtube.com/embed/W9o1EOeB9Bw",
    "https://www.youtube.com/embed/C7X3mtnVu0Y",
    "https://www.youtube.com/embed/z_IhHp1ZJgA",
    "https://www.youtube.com/embed/JED7rvxglfs",
    "https://www.youtube.com/embed/8VduV7iaKZc",
    "https://www.youtube.com/embed/ScIf9t8KsNg",
    "https://www.youtube.com/embed/OJ9sUT2IEzc",
    "https://www.youtube.com/embed/npYlCcfdAKw",
    "https://www.youtube.com/embed/3c2pFeQbrUk",
  ];

  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection}>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>AWARD-WINNING DRIVING LESSONS</h1>
              </div>

              <div className={styles.heading2}>
                <h2>
                  Forget the rest,
                  <br /> learn with the best!
                </h2>
              </div>
              <div className={styles.btn}>
                <button id={styles.btn}>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="tel:02475092784
"
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

        {/* ////////////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>Giving instruction and feedback</h2>
            <hr style={{ opacity: "1", border: "1px solid red" }}></hr>
            <p>
              In the videos below our instructor trainers Raj, Laila and Moh
              will be talking through the steps of how to teach the following
              subjects.{" "}
            </p>
          </div>
        </section>
        {/* //////////////////////////////////////////////////// */}
        <div className={styles.AdiParttwoVideo}>
          <h2>Manoeuvres Video Materials</h2>
          <div className={styles.hazardVideosGridContainer}>
            {videoURLs.map((url, index) => (
              <div className={styles.hazardGridItem} key={index}>
                <iframe
                  width="200"
                  height="120"
                  src={url}
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

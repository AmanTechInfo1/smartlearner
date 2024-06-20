import React from "react";
import styles from "../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import { Link } from "react-router-dom";

export default function RoadProcedureBand() {
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
                <button id={styles.btn}>Contact Us</button>
              </div>
            </div>
            <div className={styles.video}>
              <img src={Lplateimg} alt="LogoImg" />
            </div>
          </div>
        </section>
        {/* ///////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2 >Road procedure</h2>
            <hr style={{opacity:'1',border:'1px solid black'}}></hr>
            <p className="text-dark">
              In this video, we will be discussing road procedure. This is one
              of the 4 main topics you will be tested on during your part 1 ADI
              theory test.{" "}
            </p>
            <div className={styles.innerTheorySupportContent}>
              <div className={styles.theorySupportContentVideo}>
                <iframe
                  width="100%"
                  height="600px"
                  src="https://www.youtube.com/embed/X3QtZ8R48LY"
                  title="YouTube Video"
                ></iframe>
              </div>
            </div>

            
          </div>
          <ul type="none">
            <li className="text-center mt-2 text-danger">
              <p>
                Practice Test
              </p>
            </li>
          </ul>
          <div id={styles.btnDiv}>
            <Link to="">
              <button id={styles.hazzardBtn}>25 Questions</button>
            </Link>
            <Link to="">
              <button id={styles.hazzardBtn}>50 Questions</button>
            </Link>
            <Link to="">
              <button id={styles.hazzardBtn}>75 Questions</button>
            </Link>
            <Link to="">
              <button id={styles.hazzardBtn}>All Questions</button>
            </Link>
            
          </div>
        </section>
      </div>
    </div>
  );
}

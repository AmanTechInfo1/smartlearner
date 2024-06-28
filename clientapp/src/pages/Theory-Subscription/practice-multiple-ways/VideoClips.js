import React from "react";
import styles from "./PracticeMultiple.module.css";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import { IoMdArrowDropright } from "react-icons/io";

export default function VideoClips() {

const videoURLs = [
"https://www.youtube.com/embed/R_R0tDWry7Y",
"https://www.youtube.com/embed/Bz5vUmXG2eg",
"https://www.youtube.com/embed/7-piGp7tw90",
"https://www.youtube.com/embed/KPpjQw9U4Pg",
"https://www.youtube.com/embed/87-vlN6K8lw",
"https://www.youtube.com/embed/XbqGW2bFSgc",
"https://www.youtube.com/embed/9FlCxeP7QPs",
"https://www.youtube.com/embed/m7voGvNBjXY",
"https://www.youtube.com/embed/QLFxPP9axq8",

    
];

  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section
          className={styles.imageSection}
          style={{ backgroundColor: "purple" }}
        >
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>Forget the rest, learn with the best!</h1>
              </div>

              <div className={styles.heading2}>
                <h2>Vehicle handling</h2>
              </div>
              <div className={styles.btn}>
              <a style={{textDecoration:"none"}} href="tel:+4402475092784"><button id={styles.btn}>Contact Us</button></a>
              </div>
            </div>
            <div className={styles.video}>
              <img src={Lplateimg} alt="LogoImg" />
            </div>
          </div>
        </section>
        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 style={{ textAlign: "center" }}>What are the video clips?</h2>

          <div className={styles.hazardTestWorkListDiv}>
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  At the end of your theory test you will be shown a video clip,
                  you will then have 3 questions to answer based on these
                  videos.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  You can play the video clip as many times as you would like
                  during the 3 questions.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* //////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 style={{ textAlign: "center" }}>
            What type of questions can I get?
          </h2>

          <div className={styles.hazardTestWorkListDiv}>
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>Questions may vary depending on the video clip shown.</p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  For example, you may see a clip of a carvan swerving side to
                  side on a motorway, questions can be surrounding the hazard
                  that is happening, you may also get questions such as the
                  speed limit for the road.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  It is important to take note of every detail in the video,
                  look out for road signs, road markings, weather condtions etc.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////// */}
        <section>
        <h2 style={{textAlign:'center'}}>Test YourSelf</h2>
        </section>
        <div className={styles.hazardVideosGridContainer}>
           
      {videoURLs.map((url, index) => (
        <div className={styles.hazardGridItem} key={index}>
          <iframe width="200" height="120" src={url} allowFullScreen></iframe>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
}

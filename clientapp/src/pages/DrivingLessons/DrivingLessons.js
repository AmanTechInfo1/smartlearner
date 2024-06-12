import React from "react";
import styles from "./DrivingLesson.module.css";
import passImg from "../../assets/images/passImg.png";
import { IoCall } from "react-icons/io5";
import { HiMailOpen } from "react-icons/hi";
export default function DrivingLessons() {
  return (
    <div className={styles.drivingLessonsPage}>
      <div className={styles.DrivingLessonsPagedivFront}>
        <section className={styles.DrivingLessonsSectionFront}>
          <div id={styles.dLFrontHeading}>
            <h2>
              <span> 86% PASS </span>
             <br /><span  style={{animationDelay: '0.5s'}}>RATE FOR FIRST</span> 
              <br /> <span style={{animationDelay: '1s'}}>TIME PASSES</span> 
            </h2>
          </div>
          <div id={styles.dLFrontImg}>
            <img src={passImg} alt="Pass Img" />
          </div>
        </section>
      </div>
      {/* /////////////// calling details ////////////////// */}

      <div className={styles.drivingLessonsCd}>
          <section className={styles.drivinglCall}>
            <IoCall id={styles.IconsS}/>
              <p>02475 092 784</p>
          </section>
          <section>
          <HiMailOpen id={styles.IconsS}/>
          <p>Admin@Smartlearner.com</p>
          </section>
      </div>
      {/* /////////////////////////////////////////// */}

      <div className={styles.whyChooseSml}>
        <div className={styles.whyChooseSmlGHeading}>
          <h2>Why Choose Smartlearner</h2>
        </div>
        <div className={styles.whyChooseSmlListdiv}>
          <section className={styles.whyChooseSmlLists}>
              <p>We are the highest-rated and fast-growing independent driving school in the West Midlands</p>
              <p>We offer everything you could ever need to get yourself on the road</p>
              <p>We take into consideration your availability, requirements lesson location, and anything else you may require</p>
              <p>We then choose the perfect instructor for you</p>
          </section>
        </div>
      </div>
    </div>
  );
}

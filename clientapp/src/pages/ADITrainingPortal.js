// import React from 'react'
import styles from "./css/AdiPortal.module.css";
import adiImg from "../assets/images/finished-road-map-1.png";
import poster from "../assets/images/video-poster-img.jpg";
import {
  FaBook,
  FaCarSide,
  FaChalkboardTeacher,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import smartlearnerLogo from "../assets/images/White-Logo-Fixed-1024x174.png"

export default function ADITrainingPortal() {
  return (
    <div className={styles.ADITrainingPortalPage}>
      <div className={styles.adiPortalPage}>
        <div className={styles.adiPortalPageFirstdiv}></div>
        <div className={styles.adiPortalPageSeconddiv}>
          <h2>Welcome TO ADI</h2>
          <p>
            This road map shows the journey to become a fully qualified driving
            instructor.
          </p>
          <img src={adiImg} alt="adiImg" />
        </div>
        <div className={styles.adiPortalPageThirddiv}>
          <h2>Welcome Message</h2>
          <div className={styles.adiPortalVideo}>
            <video controls poster={poster} preload="none">
              <source
                src="src/assets/videos/Video-1smartlearner-B.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className={styles.adiLearningSupport}>
            <h2>Learning Materials</h2>
            <div id={styles.hrAdiLearningText}>
              <hr id={styles.hrAdi} />
              <p>Please see the below content.</p>
              <hr id={styles.hrAdi} />
            </div>
          </div>
          <div className={styles.adiTrainingPortalLearning}>
            <div className={styles.adiTrainingPortalLearningInnerContent}>
              <FaBook id={styles.adiPortalFaIcons} />
              <h2>Part 1 - Theory</h2>
              <button className={styles.adiPortalBtnLearning}>
                Get Learning
              </button>
            </div>
            <div className={styles.adiTrainingPortalLearningInnerContent}>
              <FaCarSide id={styles.adiPortalFaIcons} />
              <h2>Part 2 - Driving Ability</h2>
              <button className={styles.adiPortalBtnLearning}>
                Get Learning
              </button>
            </div>
            <div className={styles.adiTrainingPortalLearningInnerContent}>
              <FaChalkboardTeacher id={styles.adiPortalFaIcons} />
              <h2>Part 3 - Teaching</h2>
              <button className={styles.adiPortalBtnLearning}>
                Get Learning
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.adiPortalFooterSection}>
        <div className={styles.adiPortalFooterInnerContainer}>
          <img src={smartlearnerLogo} alt="smartlearnerLogo" />
          <div className={styles.adiFooterContactInfo}>
            {" "}
            <a href="tel:+1234567890">
              <FaPhone id={styles.adiFaIcons}/> +1 (234) 567-890
            </a><br/>
            <a href="mailto:example@example.com">
              <FaEnvelope id={styles.adiFaIcons}/> example@example.com
            </a>
          </div>
          <div className={styles.adiFooterAddressInfo}>
            <FaLocationDot id={styles.adiFaIcons}/>
            <p>4 Wheel Wright Building, Hen Lane, Coventry, CV6 4LB</p>
          </div>
          <div className={styles.adiSocialIcons}>
            <a href="https://www.facebook.com">
              <FaFacebook id={styles.adiSocialFaIcons}/>
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter id={styles.adiSocialFaIcons}/>
            </a>
            <a href="https://www.instagram.com">
              <FaInstagram id={styles.adiSocialFaIcons}/>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

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
import smartlearnerLogo from "../assets/images/White-Logo-Fixed-1024x174.png";
import { Link } from "react-router-dom";

import OurPartners1 from "../assets/images/our partners/BYLC_Logo.png";

import OurPartners2 from "../assets/images/our partners/gocv-1024x546.png";
import OurPartners3 from "../assets/images/our partners/Highways_England_logo.svg.png";
import OurPartners4 from "../assets/images/our partners/ii_Awards24_LOGO_acciDONT-long-1080x441.png";
import OurPartners5 from "../assets/images/our partners/JLR-Logo-2008 (1).png";

import OurPartners7 from "../assets/images/our partners/Screenshot 2024-05-02 at 13.51.33.png";
import OurPartners8 from "../assets/images/our partners/Screenshot 2024-05-02 at 13.55.26.png";
import OurPartners9 from "../assets/images/our partners/Screenshot 2024-05-02 at 14.05.12.png";
import OurPartners10 from "../assets/images/our partners/The-Tree-Council-Logo-1.png";
import OurPartners11 from "../assets/images/our partners/Sqa_logo.png";
import OurPartners12 from "../assets/images/our partners/THT_logo_1854x.png";
import OurPartners13 from "../assets/images/our partners/West_Midlands_Fire_Service_crest.svg.png";

export default function ADITrainingPortal() {
  return (
    <div className={styles.ADITrainingPortalPage}>
      <div className={styles.adiPortalPage}>
        <div className={styles.adiPortalPageFirstdiv}>
          <div className={styles.opicity}></div>
          <section>
            <h2>Welcome TO PDI</h2>
          </section>
        </div>
        <div className={styles.adiPortalPageSeconddiv}>
          <p>
            This road map shows the journey to become a fully qualified driving
            instructor.
          </p>
          <img src={adiImg} alt="adiImg" />
        </div>
        <div className={styles.adiPortalPageThirddiv}>
          <h2>Welcome Message</h2>
          <div className={styles.adiPortalVideo}>
            <iframe
              width="671"
              height="378"
              
              src="https://www.youtube.com/embed/iHRbw3qpLyM"
              title="Tommy Welcome Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen></iframe>
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
              <Link to="/adi-part-one">
                <button className={styles.adiPortalBtnLearning}>
                  Get Learning
                </button>
              </Link>
            </div>
            <div className={styles.adiTrainingPortalLearningInnerContent}>
              <FaCarSide id={styles.adiPortalFaIcons} />
              <h2>Part 2 - Driving Ability</h2>
              <Link to="/adi-part-2">
                <button className={styles.adiPortalBtnLearning}>
                  Get Learning
                </button>
              </Link>
            </div>
            <div className={styles.adiTrainingPortalLearningInnerContent}>
              <FaChalkboardTeacher id={styles.adiPortalFaIcons} />
              <h2>Part 3 - Teaching</h2>
              <Link to="/adi-part-3">
                <button className={styles.adiPortalBtnLearning}>
                  Get Learning
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.adiPortalFooterSection}>
        <div className={styles.adiPortalFooterInnerContainer}>
          <img src={smartlearnerLogo} alt="smartlearnerLogo" />
          <div className={styles.adiFooterContactInfo}>
            {" "}
            <a href="tel:+4402475092784">
              <FaPhone id={styles.adiFaIcons} /> +4402475092784
            </a>
            <br />
            <a href="mailto:admin@smartlearner.com">
              <FaEnvelope id={styles.adiFaIcons} /> admin@smartlearner.com
            </a>
          </div>
          <div className={styles.adiFooterAddressInfo}>
            <FaLocationDot id={styles.adiFaIcons} />
            <p>4 Wheel Wright Building, Hen Lane, Coventry, CV6 4LB</p>
          </div>
          <div className={styles.adiSocialIcons}>
            <a href="https://www.facebook.com/smartlearnerdrivingschool">
              <FaFacebook id={styles.adiSocialFaIcons} />
            </a>
            <a href="https://twitter.com/smartlearner">
              <FaTwitter id={styles.adiSocialFaIcons} />
            </a>
            <a href="https://www.instagram.com/smartlearnerdrivingschool/">
              <FaInstagram id={styles.adiSocialFaIcons} />
            </a>
          </div>
        </div>
      </section>
      {/* /////////////////////////////////////Our Partners////////////////////////// */}

      {/* <section className={styles.ourPartnersSection}>
        <div className={styles.bgOverlay}></div>
        <h2>Our Partners</h2>
        <div className={styles.partnerSection}>
          <img src={OurPartners1} alt="" />

          <img src={OurPartners2} alt="" />
          <img src={OurPartners3} alt="" />
          <img src={OurPartners4} alt="" />
          <img src={OurPartners5} alt="" />
          <img src={OurPartners7} alt="" />
          <img src={OurPartners8} alt="" />
          <img src={OurPartners9} alt="" />
          <img src={OurPartners10} alt="" />
          <img src={OurPartners11} alt="" />
          <img src={OurPartners12} alt="" />
          <img src={OurPartners13} alt="" />
        </div>
      </section> */}
    </div>
  );
}

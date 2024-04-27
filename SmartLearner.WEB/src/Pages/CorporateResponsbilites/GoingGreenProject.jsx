// import React from 'react'
import styles from "./GoingGreen.module.css";

import {
  FaBuilding,
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTwitter,
  FaYoutube,
  FaBolt,
} from "react-icons/fa";
import LogoTreeImg from "../../assets/images/Tree-Logo-300x300.png";
import TreeImg from "../../assets/images/Tree-1024x213.png";
import TreePlanting from "../../assets/images/Tree-planting-at-Stretton-.jpg";

export default function GoingGreenProject() {
  return (
    <div>
      <section className={styles.imageSection}>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>Going Green Project</h1>
            </div>

            <div className={styles.heading2}>
              <p>
                SmartLearner Driving School is the epitome of environmental
                sustainability, advocating and participating in green practices
                in and out of the establishment. We inspire instructors,
                students, and our whole community to commit to greener ways of
                driving, with aspirations of environmental preservation through
                tree planting, and education on environmentally safe driving.
              </p>
              <p>
                We are committed to reducing our carbon footprint, hence our
                going green project! We consistently take the relevant steps
                towards becoming a sustainable and eco-friendly company.
              </p>
            </div>
          </div>
          <div className={styles.video}>
            <img src={LogoTreeImg} alt="LogoTreeImg" />
          </div>
        </div>
      </section>
      {/* ////////////////////////////////////////////////// */}
      <section className={styles.treeSection}>
        <h2>“Prevention is better than cure." - Desiderius Erasmus</h2>
        <img src={TreeImg} alt="TreeImg" />
      </section>
      {/* ///////////////////////////////////////// */}
      <section className={styles.greenPurposeSection}>
        <div className={styles.greenPurposeHeading}>
          <h2>OUR GREEN PURPOSE</h2>
          <hr />
        </div>
        <div className={styles.greenPurposeDetails}>
          <img src={TreePlanting} alt="TreePlanting" />
          <div className={styles.greenPurposeDetailsContent}>
            <div className={styles.detailsofGreenGo}>
              <h2>Our ETHOS</h2>
              <p>
                As a driving school, we understand that we are one of the most
                significant contributors to the release of CO2, therefore must
                hold accountability and responsibility in taking action to
                negate our impact on our environment. We believe in
                environmental restoration and green space creation. We believe
                that even our smallest acts lead to the biggest results that
                positively impact our local community and our environmental
                future
              </p>
            </div>
            <div className={styles.detailsofGreenGo}>
              <h2>OUR PURPOSE</h2>
              <p>
                {" "}
                We have estimated each year we release approximately 10 tons of
                CO2e, in the atmosphere, per instructor. Smartlearner currently
                has 40 instructors. This means each year we emit around 400 tons
                of CO2e into our atmosphere! In order to combat this and offset
                our carbon emissions, Smartlearner will plant 10 trees per
                instructor. This is as a tree absorbs 1 tonne of CO2e per
                lifetime.
              </p>
              <p>
                {" "}
                Help SmartLearner make our local community more eco-friendly and
                take step to creating a better now and a better future. Join our
                Going Green Project.{" "}
              </p>
            </div>
          </div>
        </div>
        <div id={styles.goGreenBtn}>
          <button>Call Us</button>
        </div>
        <div className={styles.socialFollowIcons}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook id={styles.FollowIcons} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram id={styles.FollowIcons} />
          </a>
          <a
            href="https://www.snapchat.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSnapchat id={styles.FollowIcons} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter id={styles.FollowIcons} />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube id={styles.FollowIcons} />
          </a>
        </div>
      </section>
      {/* ///////////////////////////////////////////////////////// */}
      {/* //////////////////////go green /////////////////////// */}
      <section className={styles.features}>
        <h4>Our Other Projects</h4>
        <p>
          Click the icons below to find out more about SmartLearners current
          efforts to save our planet.
        </p>
        <div className={styles.mainFeatures}>
          <div className={styles.column}>
            <span>
              <FaBolt id={styles.featuresIcon} />
            </span>

            <h3>Electric Car Scheme</h3>
            <p>
              SmartLearner will now provide lessons in an electric car,
              commissioned by Coventry city council. Helping our air become
              cleaner and helping our community breathe a little easier.
            </p>
          </div>
          <div className={styles.column}>
            <span>
              <FaBuilding id={styles.featuresIcon} />
            </span>

            <h3>Our Office Efforts</h3>
            <p>
              We are a business that cares about our planet and the future. We
              want to become better everyday by implementing eco friendly and
              sustainable practices within our office.
            </p>
          </div>
        </div>
      </section>
      {/* /////////////////////////////////////////// */}
    </div>
  );
}

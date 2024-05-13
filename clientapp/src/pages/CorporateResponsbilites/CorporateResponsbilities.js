// import React from 'react'
import {
  FaBolt,
  FaTree,
  FaBuilding,
  FaRecycle,
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import WorldHand from "../../assets/images/World-Hands-1-287x300.png";
import styles from "./CorporateResponsbilities.module.css";
import { FaHandshake } from "react-icons/fa";

export default function CorporateResponsbilities() {
  return (
    <div>
      <section className={styles.imageSection}>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>SmartLearner's Corporate Social Responsibility</h1>
            </div>

            <div className={styles.heading2}>
              <p>
                Here at Smart Learner driving school it is our social
                responsibility to reducing our carbon footprint! Throughout 2023
                and the future we plan to take steps towards becoming a
                sustainable and eco-friendly company.
              </p>
            </div>
          </div>
          <div className={styles.video}>
            <img src={WorldHand} alt="WorldHand" />
          </div>
        </div>
      </section>
      <section className={styles.ourCSRresponsbilities}>
        <h2>Our Planet. Our Corporate Social Responsibility.</h2>
        <p>
          Lockdown due to coronavirus (COVID-19) was a hard time for the world,
          however, it has it’s benefits. One of the major positive impacts COVID
          had was on our environment. There us no doubt that carbon emissions
          have sharply fallen in the recent year and this has had a instant
          affect on our planet. Clear water in the Venice canals, blue skies
          over Delhi and wild animals are roaming in locked-down cities.
        </p>
        <p>
          However, the reality is that these changes are short-lived and we will
          likely see a rocketing rebound in carbon emissions. That is unless we
          take action to secure a greener and more sustainable future.
        </p>
        <p>
          As a driving school, we are one of the biggest contributors to the
          release of CO2 and therefore must take action to negate our impact on
          our planet. We aim to become more environmentally sustainable and
          establish green goals for our future. We are already actively taking
          steps to secure a green future for our City and our planet.
        </p>
      </section>
      {/* //////////////////////////// Why choose section ////////////////////////////*/}
      <section className={styles.features}>
        <h4>How are we helping to save our planet?</h4>
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
              <FaTree id={styles.featuresIcon} />
            </span>

            <h3>Going Green Project</h3>
            <p>
              As a driving school, with 50 instructors, we are one of the
              biggest contributors to the release of C02 in our atmosphere. To
              combat this we will be planting trees in and around our local
              community.
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
      {/* //////////////////////go green /////////////////////// */}
      <section className={styles.goGreenSection}>
        <div className={styles.goGreenSectionHeading}>
          <span>
            <FaHandshake id={styles.featuresIcon2} />
          </span>
          <h2>Smartlearner Pladges</h2>
          <hr />
        </div>
        <ul type="none">
          <li className={styles.pladges}>
            <span>
              <FaBolt id={styles.featuresIcon} />
            </span>
            <p>
              By 2025, 35% of our fleet will be fully electric, with hopes of
              all vehicles being 100% electric by 2030.
            </p>
          </li>
          <li className={styles.pladges}>
            <span>
              <FaTree id={styles.featuresIcon} />
            </span>

            <p>
              By the end of 2023, we will have planted over 200 trees around
              Coventry's community and residential areas. Collaborating and
              partnering up with multiple schools & colleges to plant trees
              within their chosen areas within the West Midlands and
              Warwickshire.
            </p>
          </li>
          <li className={styles.pladges}>
            <span>
              <FaRecycle id={styles.featuresIcon} />
            </span>

            <p>
              Our office will engage focus on becoming more environmentally
              friendly and focus on being sustainable
            </p>
          </li>
        </ul>
      </section>

      {/* /////////////SOCIAL ICONS */}
      <section>
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
    </div>
  );
}

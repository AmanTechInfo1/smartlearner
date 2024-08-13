// import React from 'react'
import styles from "./GoCv.module.css";
import goCv from "../../assets/images/goCVwhiteLogo.png";
import coventryCityCouncil from "../../assets/images/coventryCityCouncil.png";
import smartlearnerLogo from "../../assets/images/White-Logo-Fixed-1024x174.png";
import smartlearner2ndLogo from "../../assets/images/White-Logo-Fixed-1024x174.png";
import Accordion from "../../components/ui/accordation/Accordion"

export default function GoCv() {
  return (
    <div className={styles.goCv}>
      <div className={styles.goCvFirstdiv}>
        <section className={styles.goCvFirstSection}>
          <div className={styles.goCvFirstSectionHeading}>
            <h2>Go CV PARTNERSHIP</h2>
            <hr />
          </div>
          <div className={styles.goCvFirstSectionHeadingImg}>
            <img src={goCv} alt="goCv" id={styles.goCvImg} />
            <img
              src={smartlearnerLogo}
              alt="smartlearnerLogo"
              id={styles.smartlearnerLogo}
            />
            <img
              src={coventryCityCouncil}
              alt="coventryCityCouncil"
              id={styles.coventryCityCouncil}
            />
          </div>
        </section>
      </div>

      {/* /////////////////////////////////////// */}
      <section className={styles.goCv2ndSection}>
        <div id={styles.goCv2ndSection}>
          <h2>IN COLLABORATION WITH</h2>
          <img src={smartlearner2ndLogo} alt="smartlearnerLogo" />
        </div>
        <section>
          <p>
            SmartLearner Driving School regularly sponsors and partners with GO
            CV to support events and attractions for underprivileged individuals
            and families in conventry.
          </p>
          <p>
            Our Collaboration helps fund local businesses and projects,
            providing low-cost or free tickets to local events.
          </p>
          <p>
            Together,Smartlearner and GO CV strive to offer the best deals for
            Coventry residents, benefiting the entire community.
          </p>
        </section>
      </section>
      {/* ///////////////////////////// */}
        <section className={styles.sponsorSec}>
          <div className={styles.sponsorHeadin}>
              <h2>SPONSORSHIPS</h2>
          </div>
          <Accordion/>
        </section>
    </div>
  );
}

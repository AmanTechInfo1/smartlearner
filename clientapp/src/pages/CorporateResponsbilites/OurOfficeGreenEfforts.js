// import React from 'react'
import styles from "./OurOffice.module.css";
import buildingImg from "../../assets/images/buildingImg.png";
import greenStarImg from "../../assets/images/greenStar.png";
export default function OurOfficeGreenEfforts() {
  return (
    <div className={styles.OurOfficeGreenEfforts}>
      <div className={styles.eCsfront}>
        <section className={styles.eCSfrontSection}>
          <h2>OUR OFFICE EFFORTS</h2>
          <hr />
          <p>
            Here at Smart Learner driving school we are committed to reducing our
            carbon footprint! We plan to take steps towards becoming a more
            sustainable and eco-friendly company.
          </p>
        </section>

        {/* ////////////////////////////////////////// */}

        <section className={styles.ourSecondrySection}>
          <div className={styles.ourSecondryDiv}>
            <section className={styles.headinSection}>
              <h2>
                HOW IS OUR OFFICE <br />
                SUPPORTING THIS CHANGE?
              </h2>
              <img src={buildingImg} alt="buildingImg" />
            </section>
            <section className={styles.ourSecondryPSec}>
              <p>
                OFFICE SmartLearner Driving School is dedicated to
                sustainability,implementing eco-friendly practices both on the
                road and in our office.
              </p>
              <p>
                We are committed to reducing our carbon footprint through various
                initiatives aligned with our projects. Below are examples of our
                current practices and future plans.
              </p>
              <p>Smartlearner's instructors aren't the only ones going green</p>
              <p>
                Our office is committed to decreasing their carbon emissions and
                becoming more sustainable
              </p>
            </section>
          </div>
        </section>
        {/* //////////////////////////////////////// */}
        <section className={styles.ourOPresEfforts}>
          <hr />
          <div className={styles.ourOPresEffortsHead}>
            <h2>OUR PRESENT EFFORTS</h2>
            <section className={styles.ourOPresList}>
              <ul type="none">
                <li>
                  <span>
                    <img src={greenStarImg} alt="greenStarImg" />
                  </span>
                  <p>Discarding paper diaries for an online paper service</p>
                </li>
                <li>
                  <span>
                    <img src={greenStarImg} alt="greenStarImg" />
                  </span>
                  <p>
                    Newsletters online sent by email, discarding paper post
                  </p>
                </li>
                <li>
                  <span>
                    <img src={greenStarImg} alt="greenStarImg" />
                  </span>
                  <p>
                    Reduced the size of our learner logs and all lesson material
                    are now online.
                  </p>
                </li>
                <li>
                  <span>
                    <img src={greenStarImg} alt="greenStarImg" />
                  </span>
                  <p>
                    We currently have 1 electric charging port that is ready to
                    use This shows that we are ready, set and raring to go with
                    plans to implement MORE electric cars!
                  </p>
                </li>
                <li>
                  <span>
                    <img src={greenStarImg} alt="greenStarImg" />
                  </span>
                  <p>
                    Implemented LED Lights which are energy efficient.An
                    evaluated 99% to 100% are UV emissions free.
                  </p>
                </li>
                <li>
                  <span>
                    <img src={greenStarImg} alt="greenStarImg" />
                  </span>
                  <p>
                    We have estimated that Smart Learner have approximately
                    decreased 15% of our carbon emissions through these
                    environmentally friendly practices.
                  </p>
                </li>
                <li>
                  <span>
                    <img src={greenStarImg} alt="greenStarImg" />
                  </span>
                  <p>
                    We provide online Zoom sessions for theory reducing
                    learner's travel emissions.
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.ourOPresEfforts}>
          <hr />
          <div className={styles.ourOPresEffortsHead}>
            <h2>OUR CONTINUOUS EFFORTS</h2>
            <section className={styles.ourOPresList}>
              <ul type="none">
                <li>
                  <span>
                    <img src={greenStarImg} alt="greenStarImg" />
                  </span>
                  <p>
                    Conserve energy within the office, by turning off lights,
                    switches and electrical appliances when the office day is
                    done
                  </p>
                </li>
                <li>
                  <span>
                    <img src={greenStarImg} alt="greenStarImg" />
                  </span>
                  <p>
                    We will further our actions to keeping our office paperless
                    as much as we can Only printing when absolutely necessary
                  </p>
                </li>
                <li>
                  <span>
                    <img src={greenStarImg} alt="greenStarImg" />
                  </span>
                  <p>Planting trees within our local area.</p>
                </li>
                <li>
                  <span>
                    <img src={greenStarImg} alt="greenStarImg" />
                  </span>
                  <p>
                    We are also planning to reduce our CO2e output by moving to
                    electric cars with no emissions.
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

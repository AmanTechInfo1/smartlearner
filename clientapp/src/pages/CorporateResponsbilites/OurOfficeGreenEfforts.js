// import React from 'react'
import styles from "./OurOffice.module.css";
import renewableEnergy from "../../assets/images/renewable-energy-logo.png";
import OurGreenEffortsGimg from "../../assets/images/ourGreenEfforts-GImg.jpg";
import { FaCity } from "react-icons/fa";
import {
  FaArrowCircleRight,
  FaTrophy,
  FaBuilding,
  FaBolt,
} from "react-icons/fa";

export default function OurOfficeGreenEfforts() {
  return (
    <div>
      <section className={styles.imageSection}>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>Our Office Efforts</h1>
            </div>

            <div className={styles.heading2}>
              <p>
                Here at Smart Learner driving school we are commited to reducing
                our carbon footprint! Throughout 2021 we plan to take steps
                towards becoming a sustainable and eco-friendly company.
              </p>
            </div>
          </div>
          <div className={styles.video}>
            <img src={renewableEnergy} alt="renewableEnergy" />
          </div>
        </div>
      </section>

      {/* /////////////////////////////////// */}
      <section className={styles.OurOffice2ndSection}>
        <h2>How is our office supporting this change?</h2>
        <div className={styles.OurOffice2ndDiv}>
          <div className={styles.OurOffice2ndDivImg}>
            <img src={OurGreenEffortsGimg} alt="OurGreenEfforts" />
          </div>
          <div className={styles.OurOffice2ndDivParagraph}>
            <p>
              Smartlearner driving school is a business that genuinely walk the
              walk and talk the talk. We have also further established more in
              office practices that are eco-friendly, coming hand in hand with
              the projects that we have set.{" "}
            </p>
            <p>
              We are committed to decreasing our carbon footprint not only on
              the roads, but also in the SmartLearner office.
            </p>
            <p>
              Down below are examples of practices of what we have done so far
              and what we want set in place for the near future.{" "}
            </p>
          </div>
        </div>
      </section>
      {/* //////////////////////////////////////////////////////////////////// */}
      <section className={styles.OurOfficeListSection}>
        <div className={styles.OurOfficedluoifs}>
          <div className={styles.OurOfficeListDivHeading}>
            <span>
              {" "}
              <FaCity id={styles.featuresListIcon} />
            </span>
            <h2>How is our office supporting this change?</h2>
            <p>
              SmartLearner’s instructors aren’t the only ones going green. Our
              office is committed to decreasing their carbon emissions and
              becoming more sustainable.
            </p>
          </div>
          <div className={styles.OurOfficeListsDivSection}>
            <div className={styles.OurOfficeListDetails}>
              <h2>So Far...</h2>
              <ul type="none">
                <li>
                  <span>
                    <FaArrowCircleRight id={styles.listArrowIcon} />
                  </span>
                  <p>Discarding paper diaries for an online paper service.</p>
                </li>
                <li>
                  <span>
                    <FaArrowCircleRight id={styles.listArrowIcon} />
                  </span>
                  <p>
                    Newsletters online sent by email, a more environmentally
                    friendly alternative rather than paper post.
                  </p>
                </li>
                <li>
                  <span>
                    <FaArrowCircleRight id={styles.listArrowIcon} />
                  </span>
                  <p>
                    Already have 1 hybrid car in rotation with our driving
                    instructor.
                  </p>
                </li>
                <li>
                  <span>
                    <FaArrowCircleRight id={styles.listArrowIcon} />
                  </span>
                  <p>
                    We have reduced the size of our learner logs and all lesson
                    material are now online.
                  </p>
                </li>
                <li>
                  <span>
                    <FaArrowCircleRight id={styles.listArrowIcon} />
                  </span>
                  <p>
                    We are currently providing online Driving Theory assistance,
                    so that customers can learn from the comfort of their home,
                    instead of travelling to the site, in result further
                    reducing carbon emission emitted. (Which also additionally
                    caters to individuals that may not be able to travel due to
                    covid-19 restrictions.)
                  </p>
                </li>
                <li>
                  <span>
                    <FaArrowCircleRight id={styles.listArrowIcon} />
                  </span>
                  <p>
                    We currently have 1 electric charging port that is ready to
                    use (This shows that we are ready, set and raring to go with
                    plans to implement MORE electric cars!)
                  </p>
                </li>
                <li>
                  <span>
                    <FaArrowCircleRight id={styles.listArrowIcon} />
                  </span>
                  <p>
                    We already have implemented LED Lights which are energy
                    efficient. An evaluated 99% to 100% are UV emissions free.
                  </p>
                </li>
                <li>
                  <span>
                    <FaTrophy id={styles.listArrowIcon} />
                  </span>
                  <p>
                    We have estimated that Smart Learner have approximately
                    decreased 15% of our carbon emissions through these
                    environmentally friendly practices.
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.OurOfficeListDetails}>
              <h2>The Future...</h2>
              <ul type="none">
                <li>
                  <span>
                    <FaArrowCircleRight id={styles.listArrowIcon} />
                  </span>
                  <p>
                    Implement recycling program within the office. Have 3
                    separate bins, one for recycling, compost and a general
                    waste.
                  </p>
                </li>
                <li>
                  <span>
                    <FaArrowCircleRight id={styles.listArrowIcon} />
                  </span>
                  <p>
                    Conserve energy within the office, by turning off lights,
                    switches and electrical appliances when the office day is
                    done.
                  </p>
                </li>
                <li>
                  <span>
                    <FaArrowCircleRight id={styles.listArrowIcon} />
                  </span>
                  <p>
                    We will further our actions to keeping our office paperless
                    as much as we can. Only printing when absolutely necessary.
                  </p>
                </li>
                <li>
                  <span>
                    <FaArrowCircleRight id={styles.listArrowIcon} />
                  </span>
                  <p>Planting trees within our local area.</p>
                </li>
                <li>
                  <span>
                    <FaArrowCircleRight id={styles.listArrowIcon} />
                  </span>
                  <p>
                    We are also planning to reduce our CO2e output by moving to
                    electric cars with no emissions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
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
    </div>
  );
}

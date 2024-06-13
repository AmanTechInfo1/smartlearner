import React from "react";
import styles from "./ElectricCar.module.css";
import electricCar from '../../assets/images/electric-Car.png'
import electricCarScheme from '../../assets/images/electric carScheme.png'
export default function ElectricCarScheme() {
  return (
    <div className={styles.ElectricCarScheme}>
      {/* /////////////////// frontc ///////////////////// */}
      <div className={styles.eCsfront}>
        <section className={styles.eCSfrontSection}>
          <h2>ELECTRIC CAR SCHEME</h2>
          <hr />
          <p>
            Here at SmartLearer Driving school we are commited to reducing our
            carbon footprint!
          </p>
          <p>
            Throughout 2024 and the future, we continiously strive to become an
            even more sustainable and eco-friendly company.
          </p>
        </section>
        <section className={styles.eCs2ndSectiondiv}>
          <section className={styles.eCs2ndSectionhead}>
            <h2>
              {" "}
              <span>SKY BLUE CITY</span> TURNS GREEN
            </h2>
            <hr></hr>
            <p>In Partnership with Coventry City Council</p>
          </section>
          <section className={styles.electricCarSchemeSection}>
            <div className={styles.ecs2ndimgSection}>
              <img src={electricCar} alt="electricCar" />
              <img src={electricCarScheme} alt="electricCar-Scheme" />
            </div>
            <div className={styles.ecs2ndListSection}>
              <p>
                As a driving school, we're committed to reducing our CO2
                emissions. SmartLearner is partnering with Coventry city council
                to offer electric cars for our instructors and students.
              </p>
              <p>
                This initiative sets a green example for our community and
                promotes eco-conscious driving choices. With this change, we aim
                to raise awareness about CO2 emissions and their impact on air
                quality.
              </p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

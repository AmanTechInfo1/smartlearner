import React from "react";
import styles from "./ElectricCar.module.css";
import electricCar from '../../assets/images/electric-Car.png'
import electricCarScheme from '../../assets/images/electric carScheme.png'

import treesImgs from "../../assets/images/trees-img.png";
import BuildingImg from "../../assets/images/buliding img.png";
import treeImg from "../../assets/images/tree img.png";
import { Link } from "react-router-dom";
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
              <span>SKY BLUE CITY</span> <span style={{color:'rgb(3, 154, 3)'}}>TURNS GREEN</span>
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
        {/* /////////////////////////////////////////// */}
        <section className={styles.textMainSection}>
          <section className={styles.textEscsection}>
            <p>
              Thanks to Coventry city council's support we're leading the way
              towards a healthier environment.
              <span>
                {" "}
                SmartLearner is proud to be the first driving school in the West
                Midlands with an electric car.
              </span>
            </p>
          </section>
          <section className={styles.treeImgsSection}>
            <img src={treesImgs} alt="trees-Img" />
            <img src={treesImgs} alt="trees-Img" />
            <img src={treesImgs} alt="trees-Img" />
          </section>
          <hr />
        </section>

        {/* ////////////////////////////////////// */}
        <section className={styles.escBDSection}>
          <div className={styles.escBdHeading}>
            <h2>ELECTRIC ENGINES</h2>
          </div>
          <section className={styles.escBenifits}>
            <div className={styles.escBDDiv} id={styles.escBDDivcd}>
              <section>
                <h2>BENEFITS</h2>
                <p>
                  Electrically powered - electricity can be renewable resource
                  gasoline cannot.
                </p>
                <p>Electric engines do not release co2 emissions.</p>
                <p>
                  Annual tax and maintenance costs (including MOTs and
                  servicing) for electric vehicles are 49% lower than for petrol
                  models.
                </p>
              </section>
            </div>
            <div className={styles.escBDDiv}  id={styles.escBDDivdc}>
              <div>
                {" "}
                <h2>DISADVANTAGES</h2>
                <p>Recharging the battery takes times</p>
                <p>It can sometimes difficult to find a charging station.</p>
                <p>
                  Insurance costs are on average 25% higher for electric
                  vehicles.
                </p>
              </div>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////// */}
        <section className={styles.escBDSection}>
          <div className={styles.escBdHeading}>
            <h2>COMBUSTION ENGINES</h2>
            <hr/>
          </div>
          <section className={styles.escBenifits}>
            <div className={styles.escBDDiv}  id={styles.escBDDivcd}>
              <section>
                <h2>BENEFITS</h2>
                <p>Gas powered cars have more power.</p>
                <p>Have better agility in terms of acceleration and speed.</p>
                <p>Can be refilled quickly.</p>
              </section>
            </div>
            <div className={styles.escBDDiv}  id={styles.escBDDivdc}>
              <div>
                {" "}
                <h2>DISADVANTAGES</h2>
                <p>
                  Gas powered vehicles emit harmful emissions causing pollution
                  to our atmosphere.
                </p>
                <p>
                  The cost of fuel is expensive. For an electric car to travel
                  100 miles would cost around 4p per mile in comparison to gas
                  powered car costing 9p per mile. fuel costing fuel costing £5
                  more.
                </p>
              </div>
            </div>
          </section>
        </section>
        {/* ///////////////////////////////////////////// */}
        <section className={styles.escBDSection}>
          <div className={styles.escBdHeading}>
            <h2>OUR OTHER PROJECTS</h2>
            <hr/>
          </div>
        <section className={styles.csr3rdDivSecLinks}>

            <Link to="/Going-Green-Project"  id={styles.escBDDivcd}>
              <img src={treeImg} alt="eclectric-Img" />
              <p>Going Green Project</p>
            </Link>
            <Link to="/Our-Office-Green-Efforts"  id={styles.escBDDivdc}>
              <img src={BuildingImg} alt="eclectric-Img" />
              <p>Our Office Efforts</p>
            </Link>
          </section>
          </section>

      </div>
    </div>
  );
}

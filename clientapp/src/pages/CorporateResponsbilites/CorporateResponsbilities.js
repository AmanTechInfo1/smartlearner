import React from "react";
import styles from "./CorporateResponsbilities.module.css";
import earthImg from "../../assets/images/earthImg.png";
import eclectricImg from "../../assets/images/electric wave.png";
import BuildingImg from "../../assets/images/buliding img.png";
import treeImg from "../../assets/images/tree img.png";
import { Link } from "react-router-dom";
import handShake from "../../assets/images/hand shake.png";

export default function CorporateResponsbilities() {
  return (
    <div className={styles.csrPages}>
      <div className={styles.csrpages}>
        <div className={styles.csrPageFront}>
          <section className={styles.csrSectionFornt}>
            <h2>
              CORPORATE <br /> SOCIAL <br />RESPONSIBILITY
            </h2>
            <hr />
          </section>
        </div>
        {/* ///////////////////////////////////////////////// */}
        <div className={styles.csrPagesLd}>
          <p>
            Here at SmartLearner driving school it is our social responsibility
            to reducing our carbon footprint!
          </p>
          <p>
            Throughout 2024 and the future we plan to take steps towords
            becoming a sustainable and eco-friendly company
          </p>
        </div>

        <div className={styles.csr2ndDiv}>
          <section className={styles.csr2ndDivHS}>
            <div className={styles.csr2ndDivHeading}>
              <h2>
                {" "}
                OUR PLANET.
                <br />
                OUR RESPONSIBILITY{" "}
              </h2>
            </div>
            <div className={styles.csr2ndDivImg}>
              <img src={earthImg} alt="earth Img" />
            </div>
          </section>
          <div className={styles.csr2ndListDiv}>
            <p>
              Lockdown due to coronavirus (COVID-19) was a hard time for the
              world, however, it has it's benefits. One of the major positive
              impacts COVID had was on our environment.
            </p>
            <p>
              There us no doubt that carbon emissions have sharply fallen in the
              recent year and this has had a instant affect on our planet.
            </p>
            <p>
              Clear water in the Venice canals, blue skies over Delhi and wild
              animals are roaming in locked-down cities.
            </p>
          </div>
        </div>
        {/* /////////////////////////////////////////////// */}
        <div className={styles.csr3rddiv}>
          <hr />
          <section className={styles.csr3rdDivSec}>
            <h2>SL SAVING THE PLANET</h2>
            <p>
              Click the <span>icons</span> icons below to find out more about
              SmartLearners current efforts to save our planet
            </p>
          </section>
          <section className={styles.csr3rdDivSecLinks}>
            <Link to='/Electric-Car-Scheme'>
              <img src={eclectricImg} alt="eclectric-Img" />
              <p>Electric Car Scheme</p>
            </Link>
            <Link to='/Going-Green-Project'>
              <img src={treeImg} alt="eclectric-Img" />
              <p>Going Green Project</p>
            </Link>
            <Link to='/Our-Office-Green-Efforts'>
              <img src={BuildingImg} alt="eclectric-Img" />
              <p>Our Office Efforts</p>
            </Link>
          </section>
        </div>

        {/* ////////////////////////////////////////////////////// */}
        <div className={styles.smartlearnerPladgesSection}>
          <section id={styles.smartlearnerPladges}>
            <img src={handShake} alt="hand-Shake" />
            <h2>SMARTLEARNER PLADGES</h2>
            <hr />
          </section>
          <section className={styles.smartlearnerPlListSection}>
            <div className={styles.smartlearnerPlLists}>
              <img src={eclectricImg} alt="eclectric-Img" />
              <p>
                By 2025, 35% of our fleet will be fully electric, with hopes of
                all vehicles being 100% electric by 2030{" "}
              </p>
            </div>
            <div className={styles.smartlearnerPlLists}>
              <img src={treeImg} alt="tree-Img" />
              <p>
                By the end of 2024, we will have planted over 200 trees
                Coventry's community and residental areas. Collaborating and
                partnering up with multiple schools & colleges to plant trees
                within the West Midlands and Warwickshire.
              </p>
            </div >
            <div className={styles.smartlearnerPlLists}>
              <img src={BuildingImg} alt="building-Img" />
              <p>
                Our office will engage focus on becoming more enviornmentally
                freindly and focus on being sustainable.
              </p>
            </div> 
          </section>
        </div>
        {/* /////////////////////////////////////////////////// */}
        

      </div>
    </div>
  );
}

import React from 'react'
import styles from "../AdiPartOne.module.css";
import { Link } from 'react-router-dom';



export default function PartOneTrainnigMaterial() {
  return (
<div className={styles.AdiPartOne}>
    <div className={styles.AdiPortalPartOne}>
      <section className={styles.imageSection}>
        <div className={styles.opicity}></div>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>
                Forget the rest, <span>learn with the best!</span>
              </h1>
            </div>
            <div className={styles.alertBtn}>
              <a style={{ textDecoration: "none" }} href="tel:+4402475092784">
                <button>Contact Us</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.hazardTestWorkListSection}>
       
        <div id={styles.btnDiv}>
        <Link to="/trainning-material">
            <button id={styles.hazzardBtn}>Training Material</button>
          </Link>
          <Link to="/band-1-Road-Procedure">
            <button id={styles.hazzardBtn}>Part 1 Band 1 summary</button>
          </Link>
          <Link to="/takequizCatName/Band-1---Road-Procedure">
            <button id={styles.hazzardBtn}>Band 1 Practice Questions </button>
          </Link>
          <Link to="/band-2-traffic-signs-and-signals">
            <button id={styles.hazzardBtn} className={styles.hazzardBtn}>
              Band 2 summary
            </button>
          </Link>
          <Link to="/takequizCatName/Band-2---Traffic-Signs-and-Signals--Car-Control--Pedestrians-and-Mechanical-Knowledge">
            <button id={styles.hazzardBtn} className={styles.hazzardBtn}>
             Band 2 Practice Questions
            </button>
          </Link>
          <Link to="/band-3-driving-tests-disabilities-and-the-law">
            <button id={styles.hazzardBtn}> Band 3 summary</button>
          </Link>
          <Link to="/takequizCatName/Band-3---Driving-Test--Disabilities--and-The-Law">
            <button id={styles.hazzardBtn}> Band 3 Practice Questions</button>
          </Link>
          <Link to="/band-4-publications-techniques">
            <button id={styles.hazzardBtn} className={styles.hazzardBtn}>
            Band 4 summary
            </button>
          </Link>
          <Link to="/takequizCatName/Band-4---Publications-and-Instructional-Techniques">
            <button id={styles.hazzardBtn} className={styles.hazzardBtn}>
            Band 4 Practice Questions
            </button>
          </Link>
          
          <Link to="/Adi-part-1-Bonus-Quiz">
            <button id={styles.hazzardBtn}>Bonus Quiz</button>
          </Link>
         
          <Link to="/hazard-preception-part-2">
            <button id={styles.hazzardBtn}>Hazard Preception</button>
          </Link>
          <Link to="/Adi-part-1-MockTest">
            <button id={styles.hazzardBtn}>Mock Test summary</button>
          </Link>
          <Link to="/adi-part-one-test">
            <button id={styles.hazzardBtn}>Book your part 1 test</button>
          </Link>
          <Link to="/test-day-tips">
            <button id={styles.hazzardBtn}>Test day Tips</button>
          </Link>
        
        </div>
        </section>
        <div className={styles.TMnextPage}>
          <Link to="/trainning-material">
            {" "}
            <button className={styles.TMnextButton}>
              NEXT PAGE Trainning Material
            </button>
          </Link>
        </div></div></div>
  )
}

// import React from 'react'
import styles from './GoCv.module.css'
import goCv from "../../assets/images/goCVwhiteLogo.png"
import coventryCityCouncil from "../../assets/images/coventryCityCouncil.png"
import smartlearnerLogo from "../../assets/images/White-Logo-Fixed-1024x174.png"


export default function GoCv() {
  return (
    <div>
      <div className={styles.goCvFirstdiv}>
      <section className={styles.goCvFirstSection}>
        <div className={styles.goCvFirstSectionHeading}>
          <h2>Go CV PARTNERSHIP</h2>
          <hr />
        </div>
        <div className={styles.goCvFirstSectionHeadingImg}>
          <img src={goCv} alt="goCv" id={styles.goCvImg}/>
          <img src={smartlearnerLogo} alt="smartlearnerLogo"  id={styles.smartlearnerLogo} />
          <img src={coventryCityCouncil} alt="coventryCityCouncil"  id={styles.coventryCityCouncil}/>
        </div>
        
      </section>
      </div>
    </div>
  )
}

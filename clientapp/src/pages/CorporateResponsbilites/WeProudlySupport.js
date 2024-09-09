// import React from 'react'
import smartlearnerLogo from "../../assets/images/White-Logo-Fixed-1024x174.png";
import styles from "./WeSupport.module.css";
import smartlearnerSupoort from "../../assets/images/smartlearnerSupportImg.png"
import bylc from "../../assets/images/BYLC.png"
import wmfs from "../../assets/images/WestMidLand.png";
import jaguarlandrover from "../../assets/images/jaguar.jpg";
import governmentLogo from "../../assets/images/Highways_England.jpg";
import coventry from "../../assets/images/Coventry.jpg";
import coventryAir from "../../assets/images/Electric-Fleet.jpg";
import gocv from "../../assets/images/gocv.png";  
import greendino from "../../assets/images/Green-Dino.png";
import coventrycollege from "../../assets/images/covcollege.png";
import sqa from "../../assets/images/SQA.png";
import thehonesttruth from "../../assets/images/THT_logo.png";
import treecouncil from "../../assets/images/trreeCouncil.jpg";
import unhcr from "../../assets/images/ARC.png";
import nuneatonlionsclub from "../../assets/images/Lion-Club.png";
import bedwortheagles from "../../assets/images/unitedToAchieve.jpg";


export default function WeProudlySupport() {
  return (
    <div className={styles.weProudlySupport}>
      <section className={styles.imageSection}>
      <img src={smartlearnerLogo} alt="smartlearner-Logo"/>
        <h2>IN PARTNERSHIP WITH</h2>
      </section>
      {/* /////////////////////////////////////////// */}

      <section className={styles.whoDoWeSupport}>
        
        <div className={styles.mainFeatures}>
          <div className={styles.column}>
            <a href="https://www.intelligentinstructor.co.uk/intelligent-instructor-award-winners-2022/">
              <img src={smartlearnerSupoort} alt="smartlearnerSupoort" />
            </a>
            <p>
              We have won the title of Regional Driving School of the year 2
              years running at the Intelligent Instructor Awards.{" "}
            </p>
          </div>
          <div className={styles.column}>
            <a href="http://www.bylc.co.uk/">
              <img src={bylc} alt="bylc" />
            </a>
            <p>
              We work closely with BYLC to provide educational experiences on
              road safety to young people across Warwickshire.
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://www.wmfs.net/">
              <img src={wmfs} alt="wmfs" />
            </a>
            <p>
              We have attended many events alongside the West Midlands Fire
              Service to assist in their road safety VR experiences.
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://wellbeing.jaguarlandrover.com/learning-at-jlr">
              <img src={jaguarlandrover} alt="jaguarlandrover" />
            </a>
            <p>
              We work with Jaguar Land Rover on their Employee Learner Scheme to
              help employees to learn new skills such as learning to drive.
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://www.gov.uk/government/organisations/highways-england">
              <img src={governmentLogo} alt="governmentLogo" />
            </a>
            <p>
              We attend events with Highway England to promote road safety but
              also support other projects they are part of such as the ‘Electric
              Fleet First Campaign’
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://www.coventry.gov.uk/">
              <img src={coventry} alt="coventry" />
            </a>
            <p>
              We have worked on many road projects with the Coventry City
              Council. These include; Electric Fleet First, Kick Starter Scheme,
              and other road safety aspects.
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://www.coventry.gov.uk/pollution-1/air-quality/8">
              <img src={coventryAir} alt="coventryAir" />
            </a>
            <p>
              We are taking part in the ‘Electric Fleet First Campaign’. We have
              been using our electric car to promote going green to our
              instructors and pupils
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://go-cv.co.uk/">
              <img src={gocv} alt="gocv" />
            </a>
            <p>
              We work alongside Go CV to help provide less fortunate families,
              who live in Coventry, with days out completely free of charge.{" "}
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://en.greendino.nl/">
              <img src={greendino} alt="greendino" />
            </a>
            <p>
              We work with Green Dino to support their projects that include
              virtual reality simulated driving lessons and even online driving
              lessons. These project are proven to help increase driver safety
              while decreasing the amount of lessons needed
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://www.sqa.org.uk/sqa/70972.html">
              <img src={sqa} alt="sqa" />
            </a>
            <p>
              We work with SQA to deliver the ‘Safe Road User Award’ which gives
              young people the chance to earn a qualification while helping them
              prepare for their theory and change their attitude towards road
              safety.
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://www.coventrycollege.ac.uk/">
              <img src={coventrycollege} alt="coventrycollege" />
            </a>
            <p>
              We work with College Coventry as a work placement for apprentices.
              We love taking young people on and helping them develop into
              industries they care about including Management, Marketing, and
              Admin.
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://www.thehonesttruth.co.uk/">
              <img src={thehonesttruth} alt="thehonesttruth" />
            </a>
            <p>
              We are part of ‘The Honest Truth’ which is a national road safety
              campaign across England. Their mission is to deliver no-nonsense,
              straight-talking road safety education, hence the name.
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://treecouncil.org.uk/">
              <img src={treecouncil} alt="treecouncil" />
            </a>
            <p>
              We work with the local tree wardens to help plant trees in local
              parks, schools, and communal areas. This is part of our going
              green scheme!
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://www.unhcr.org/uk/afghanistan.html">
              <img src={unhcr} alt="unhcr" />
            </a>
            <p>
              We supported a family of 8 in Afghanistan by sending food and
              supplies during hardship.
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://nuneatonlionsclub.org/">
              <img src={nuneatonlionsclub} alt="nuneatonlionsclub" />
            </a>
            <p>
              We regularly donate to Nuneaton Lions Club. They encourage people
              to join together and take action to better their local community.
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://bedwortheagles.com/">
              <img src={bedwortheagles} alt="bedwortheagles" />
            </a>
            <p>
              We sponsor Bedworth Eagles JFC helping young children to chase
              their dreams of becoming professional footballers while staying
              active.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

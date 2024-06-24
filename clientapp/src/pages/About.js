// import React from 'react'
import styles from "./css/About.module.css";
import AboutPageImg from "../assets/images/image_2021_03_03T15_33_28_479Z-1024x768.png";

export default function About() {
  return (
    <>
      <section className={styles.aboutPageSection} style={{backgroundColor:'black', color:'white'}}>
        <h2>About SmartLearner Driving School</h2>
        <div className={styles.smartLearnerAboutPageContent}>
          <img src={AboutPageImg} alt="AboutImg" />
          <div className={styles.aboutPageContent}>
            {" "}
            <p>
              SmartLearner was founded in 2004 with the vision of becoming the
              best driving school in Coventry. Now in 2021, we have far
              surpassed our original goals. We are the highest-rated driving
              school in Warwickshire and the West Midlands. SmartLearner was
              even voted the ‘Regional Driving School Of The Year’ at the
              Intelligent Instructor Awards 2021 and 2022!
            </p>
            <p>
              Our learners regularly achieve a higher-than-average pass rate
              with a below-average number of lessons. This is because we have
              over 50 instructors all based locally who are trained to the
              highest standard! Our driving instructors teach in both Manual and
              Automatic. We have an amazing team of friendly and enthusiastic
              local Male and Female instructors. SmartLearner also doesn’t shy
              away from the use of modern technology to enhance our pupils
              driving experience.
            </p>
            <p>
              At <span>Smart Learner Driving School</span> we understand that
              every learner is different! That is why we offer custom lesson
              plans for every pupil based on their current experience and unique
              learning styles. We offer our pupils so much more than just
              driving lessons. At SmartLearner we offer a range of services to
              support our learners in achieving their goals. Our other services
              include;
            </p>
            <p>
              <ul>
                <li> Intensive Driving Courses</li>
                <li>1-2-1 Theory Support</li>
                <li>Simulated Driving Lessons</li>
                <li>Driving Instructor Training</li>
              </ul>
            </p>
            <p>
              SmartLearner Driving School also has a vested interest in road
              safety and has worked with the local police/fire service, Highways
              England, Coventry City Council and road safety charities that
              include; Because Your Life Counts¹, IAM Road Smart², and Aquarius³
              to try and reduce the number of unnecessary road traffic
              collisions each year.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

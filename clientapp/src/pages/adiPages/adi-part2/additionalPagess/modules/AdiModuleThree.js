import React from "react";
import styles from "./AdiModuleThree.module.css";

export default function AdiModuleThree() {
  return (
    <>
      {" "}
      <div className={styles.AdiModuleOnecontainer}>
        <section className={styles.AdiModuleOneheader}>
          <h1>What is Advanced Driving in Relation to the ADI Part 2 Exam?</h1>
          <div className={styles.AdiModuleOnevideo}>
            <p> VIDEO – WHAT IS ADVANCED DRIVING</p>
          </div>
        </section>

        <section className={styles.AdiModuleOneobjectives}>
          <h2>Objective:</h2>
          <p>By the end of this lesson, you will:</p>
          <ul>
            <li>
              {" "}
              1. Understand the concept of advanced driving and how it relates
              to the ADI Part 2 exam.{" "}
            </li>
            <li>
              {" "}
              2. Learn how advanced driving techniques are assessed during the
              exam.
            </li>
            <li>
              3. Participate in an activity to evaluate and improve your
              advanced driving skills.{" "}
            </li>
          </ul>
        </section>

        <section className={styles.AdiModuleOneintroduction}>
          <h2>1. Introduction</h2>
          <p>
            Advanced driving refers to a high standard of driving that
            prioritizes safety, efficiency, and precision. It involves using
            refined techniques to anticipate hazards, manage risks, and drive in
            a way that is smooth, controlled, and eco-friendly.
          </p>
          <p>
            For the ADI Part 2 exam, you are expected to demonstrate advanced
            driving skills that set you apart as a professional driver and
            future driving instructor. Mastery of advanced driving not only
            helps you pass the test but also prepares you to teach safe driving
            habits to learners.
          </p>
        </section>

        <section className={styles.AdiModuleOnechecks}>
          <h2>2. The Key Components of Advanced Driving </h2>

          <div className={styles.AdiModuleOnecheckList}>
            <h3>A. Observation and Planning </h3>
            <ul>
              <li>
                <strong>Observation :</strong> Constantly scan the road ahead,
                to the sides, and behind using mirrors. Identify potential
                hazards early, including other road users, weather conditions,
                and changes in the road layout.
              </li>
              <li>
                <strong>Planning :</strong> - Anticipate how hazards may develop
                and adjust your driving accordingly.
                <br /> - Position your vehicle for maximum safety and
                efficiency, such as in bends or at junctions.
              </li>
            </ul>
          </div>

          <div className={styles.AdiModuleOnecheckList}>
            <h3>B. Vehicle Control</h3>
            <ul>
              <li>
                <strong>Smooth Acceleration and Braking :</strong> Apply gentle,
                progressive pressure on the accelerator and brakes to avoid
                jolts.
              </li>
              <li>
                <strong>Gear Selection :</strong> Use the appropriate gear for
                the speed and road conditions.
                <br /> Shift gears smoothly and efficiently, minimizing
                unnecessary revving or strain on the engine.
              </li>
              <li>
                <strong>Steering :</strong>Use a consistent, smooth steering
                technique (e.g., push-pull method). <br />
                Maintain full control of the vehicle through bends and turns.
              </li>
            </ul>
          </div>

          <div className={styles.AdiModuleOnecheckList}>
            <h3>C. Eco-Safe Driving</h3>
            <ul>
              <li>
                Drive in a way that minimises fuel consumption and reduces wear
                and tear on the vehicle. <br /> Examples include using higher
                gears where possible, avoiding harsh acceleration, and
                maintaining steady speeds.
              </li>
            </ul>
          </div>
          <div className={styles.AdiModuleOnecheckList}>
            <h3>D. Legal Compliance</h3>
            <ul>
              <li>
                Adhere strictly to the Highway Code, including speed limits,
                road signs, and traffic signals. <br /> Be prepared to
                demonstrate correct procedures at pedestrian crossings,
                roundabouts, and junctions.
              </li>
            </ul>
          </div>
          <div className={styles.AdiModuleOnecheckList}>
            <h3>E. Mindset and Professionalism</h3>
            <ul>
              <li>
                Maintain composure and professionalism throughout the drive.
                <br /> Demonstrate courtesy to other road users and adaptability
                to changing situations.
              </li>
            </ul>
          </div>
        </section>

        
      </div>
    </>
  );
}

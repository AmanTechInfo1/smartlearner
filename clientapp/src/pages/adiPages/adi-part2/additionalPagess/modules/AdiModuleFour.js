import React from "react";
import styles from "./AdiModuleFour.module.css";

export default function AdiModuleFour() {
  return (
    <>
      {" "}
      <div className={styles.AdiModuleOnecontainer}>
        <section className={styles.AdiModuleOneheader}>
          <h1>The COAST Method in Advanced Driving</h1>
          <div className={styles.AdiModuleOnevideo}>
            <p> INSERT VIDEO - COAST</p>
          </div>
        </section>

        <section className={styles.AdiModuleOneobjectives}>
          <h2>Objective:</h2>
          <p>By the end of this lesson, you will:</p>
          <ul>
            <li> 1. Understand the COAST method and its components.</li>
            <li>
              {" "}
              2. . Learn how to apply the COAST method to improve advanced
              driving techniques.
            </li>
            <li>
              3. Complete an activity to practice and reflect on using the COAST
              method in real-world scenarios.
            </li>
          </ul>
        </section>

        <section className={styles.AdiModuleOneintroduction}>
          <h2>1. Introduction to the COAST Method </h2>
          <p>
            The COAST method is a foundational approach in advanced driving that
            focuses on proactive, safe, and efficient driving. COAST stands for
            Concentration, Observation, Anticipation, Space, and Time. This
            method encourages drivers to stay ahead of potential hazards, reduce
            risks, and drive more smoothly.
          </p>
          <p>
            For advanced drivers, such as those preparing for the ADI Part 2
            exam, mastering the COAST method demonstrates professionalism and
            competence on the road.
          </p>
        </section>

        <section className={styles.AdiModuleOnechecks}>
          <h2>2. Breaking Down COAST </h2>

          <div className={styles.AdiModuleOnecheckList}>
            <ul>
              <li>
                <strong> C - Concentration :</strong> Stay fully focused on
                driving and avoid distractions. <br />
                Monitor the road environment, your vehicle, and other road users
                at all times.
                <br />
                <strong>Key Tips: </strong> Turn off mobile devices or put them
                in "Do Not Disturb" mode.
                <br />
                Use mindfulness techniques to maintain focus during long drives.
              </li>
              <li>
                <strong> O - Observation :</strong> Continuously scan the road
                ahead, behind, and to the sides.
                <br />
                Look far ahead to identify developing hazards early.
                <br />
                <strong>Key Tips :</strong> Effective use of mirrors, be sure to
                check your mirrors before braking acceleration turning changing
                lanes etc.
              </li>

              <li>
                <strong>A - Anticipation :</strong> Predict how hazards may
                develop and plan your response.
                <br />
                Consider the actions of other road users, such as cyclists,
                pedestrians, and drivers.
                <br />
                <strong>Key Tips :</strong> Ask yourself, "What if?" to prepare
                for unexpected scenarios <br /> Adjust your speed and position
                based on what you see and predict.
              </li>
              <li>
                <strong>S - Space :</strong> Maintain a safe distance from other
                road users, allowing room to react.
                <br />
                Position your vehicle to maximize visibility and safety.
                <br />
                <strong>Key Tips :</strong>Follow the two-second rule in normal
                conditions and increase to four seconds in poor weather. <br />{" "}
                Keep a buffer zone when passing stationary vehicles or parked
                cars.
              </li>
              <li>
                <strong>T - Time :</strong> Give yourself time to react by
                driving at an appropriate speed. <br /> Avoid rushing or making
                impulsive decisions.
                <br />
                <strong>Key Tips :</strong> Leave earlier to reduce time
                pressures. <br /> Slow down as needed to manage complex or busy
                driving situations.
              </li>
            </ul>
          </div>

         
        </section>
      </div>
    </>
  );
}

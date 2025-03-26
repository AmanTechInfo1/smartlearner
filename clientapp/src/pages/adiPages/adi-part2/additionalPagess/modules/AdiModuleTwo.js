import React from "react";
import styles from "./AdiModuletwo.module.css";

export default function AdiModuleTwo() {
  return (
    <>
      {" "}
      <div className={styles.AdiModuleOnecontainer}>
        <section className={styles.AdiModuleOneheader}>
          <h1>Vehicle Checks to Perform Before the Test</h1>
        </section>
        <section className={styles.AdiModuleOneintroduction}>
          <h2>Roadworthiness Checks:</h2>
          <p>
            A great way to remember your own and vehicle checks is the POWDER
            Model
          </p>
        </section>
        <div className={styles.AdiModuleOnecheckList}>
          <h3>'Roadcraft', the Police Drivers' Handbook</h3>
          <ul>
            <li>
              <strong>Petrol :</strong> Ensure that you have sufficient fuel for
              your journey
            </li>
            <li>
              <strong>Oil :</strong> Oil level. Secure oil filler cap and
              dipstick
            </li>
            <li>
              <strong>Water :</strong> Radiator (and screen wash) water levels,
              including coolant/antifreeze mixture
            </li>
            <li>
              <strong>Damage :</strong> Visual inspection of exterior looking
              for insecure items and/or damage
            </li>
            <li>
              <strong>Electrics :</strong> Verify operation of electrical
              systems , Lights mandatory running lights (main and dipped beam)
              Brake and reversing lights , Indicators and hazard warning lights
              , Number plate light (rear), High intensity lights, Emergency
              warning lights (blue, headlight flash, rear red) Interior
              instrument warning lights, Audible warning systems (horn/two tone
              horns), Audible warning systems (horn/two tone horns)
            </li>
            <li>
              <strong>Rubber :</strong> Wheels - wheel nuts secured to correct
              torque setting Tyres - tread depth/free from cuts, bulges,
              tears/pressure/compatibility, Peddle Rubbers
            </li>
            <li>
              <strong>You :</strong> Not tired/under influence of drink or
              drugs, wearing any spectacles prescribed
            </li>
          </ul>
        </div>

        <section className={styles.AdiModuleOneintroduction}>
          <h2>Familiarising Yourself with Vehicle Technology</h2>
          <p>
            Modern vehicles often come equipped with advanced technology that
            can aid your driving. You must be confident in operating these
            systems, as the examiner may expect you to use them during the test.
          </p>
        </section>

        <section className={styles.AdiModuleOnechecks}>
          <div className={styles.AdiModuleOnecheckList}>
            <h3>1. Dashboard Controls:</h3>
            <ul>
              <li>
                Know the location and function of key controls, including
                lights, wipers, and hazard lights.
              </li>
            </ul>
          </div>

          <div className={styles.AdiModuleOnecheckList}>
            <h3>2. Electronic Parking Brake</h3>
            <ul>
              <li>
                If applicable, ensure you can operate the electronic parking
                brake confidently, including hill starts.
              </li>
            </ul>
          </div>

          <div className={styles.AdiModuleOnecheckList}>
            <h3>3. Sat-Nav :</h3>
            <ul>
              <li>
                Be comfortable programming and following directions from the
                sat-nav, as this may be required during the test.
              </li>
            </ul>
          </div>

          <div className={styles.AdiModuleOnecheckList}>
            <h3>4. Eco-Driving Features :</h3>
            <ul>
              <li>
                Understand how to use start-stop systems and fuel-efficiency
                indicators if available.
              </li>
              <li>
                Understand when and how you should use speed limiters or cruise
                control if applicable
              </li>
            </ul>
          </div>
          <div className={styles.AdiModuleOnecheckList}>
            <h3>5. Air Conditioning/Demisters :</h3>
            <ul>
              <li>
                Know how to adjust temperature settings and clear windscreen fog
                quickly and efficiently.{" "}
              </li>
            </ul>
          </div>
          <div className={styles.AdiModuleOnecheckList}>
            <h3>6. Reversing Aids :</h3>
            <ul>
              <li>
                Familiarise yourself with reversing cameras or sensors and
                understand their limitations.{" "}
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

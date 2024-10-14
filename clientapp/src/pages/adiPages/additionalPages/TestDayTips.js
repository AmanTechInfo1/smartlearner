import React from 'react'
import styles from "../AdiPartOne.module.css"
import { Link } from 'react-router-dom'

export default function TestDayTips() {
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
        {/* ////////////////////////////////////////////// */}
        <div className={styles.testDayTips}>
      <section className={styles.testDayheader}>
        <h1>Test Day Tips</h1>
        <p>The day of the test can be nerve-wracking, but with the right strategies, you can walk in with confidence.</p>
      </section>

      <section className={styles.testDaypart} id={styles.testDaybeforeTest}>
        <h2>Before the Test</h2>
        <ul>
          <li>
            <strong>Get a Good Night’s Sleep</strong> - Rest is crucial. A well-rested mind is sharper and better at recalling information.
          </li>
          <li>
            <strong>Arrive Early</strong> - Aim to arrive at least 10 minutes before your test. This gives you time to relax and settle in.
          </li>
        </ul>
      </section>

      <section className={styles.testDaypart} id={styles.testDayduringTest}>
        <h2>During the Test</h2>
        <ul>
          <li>
            <strong>Stay Calm</strong> - It’s natural to feel nervous, but don’t let anxiety take over. Take deep breaths and focus on the questions.
          </li>
          <li>
            <strong>Read Questions Carefully</strong> - Take your time to read each question thoroughly. Misreading a question could lead to a wrong answer.
          </li>
          <li>
            <strong>Review Your Answers</strong> - If you finish the Multiple Choice section early, use the remaining time to review your answers. Double-checking can help catch any mistakes.
          </li>
        </ul>
      </section>

      <section className={styles.testDaypart} id={styles.testDayafterTest}>
        <h2>After the Test</h2>
        <p>You’ll get your results immediately after completing the test. If you pass, congratulations! You’re one step closer to becoming an ADI.</p>
        <p>If you don’t pass, don’t be discouraged. Use the feedback provided to identify areas that need improvement and focus on those when preparing for your retake.</p>
      </section>

     
    </div>
    <div className={styles.TMnextPage}>
          <Link to="/goodluck">
            <button className={styles.TMnextButton}>NEXT PAGE</button>
          </Link>
        </div>
         </div></div>

  )
}

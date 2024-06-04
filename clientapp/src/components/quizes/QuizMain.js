import React from "react";
import styles from "./Quiz.module.css";
import { Link } from "react-router-dom";

export default function QuizMain() {
  return (
    <div className={styles.quizStartDiv}>
      <section className={styles.startQuizSection}>

        <h2>THEORY TRAINING - MOCK TEST</h2>
        <h3>50 Questions</h3>
        <p>
          See the navigation bar at the top, It helps to move back and forth
          between questions easily. After skiping a question its box remains
          black and indicates that you haven't answered it.
        </p>
        <Link to="/quiz">
          <button>Start Quiz</button>
        </Link>
      </section>
    </div>
  );
}

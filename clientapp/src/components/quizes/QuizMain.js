import React, { useState } from "react";
import styles from "./Quiz.module.css";
import Quiz from "../takequizes/Quiz";

export default function QuizMain() {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className={styles.quizStartDiv}>
      {!quizStarted ? (
        <section className={styles.startQuizSection}>
          <h2>THEORY TRAINING - MOCK TEST</h2>
          <h3>50 Questions</h3>
          <p>
            See the navigation bar at the top, It helps to move back and forth
            between questions easily. After skipping a question its box remains
            black and indicates that you haven't answered it.
          </p>
          <button onClick={startQuiz}>Start Quiz</button>
        </section>
      ) : (
        <Quiz />
      )}
    </div>
  );
}

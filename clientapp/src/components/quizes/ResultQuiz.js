import React from 'react'
import styles from './Quiz.module.css'
export default function ResultQuiz({ score, totalQuestions, onRestart }) {
  return (
    <div>
       <div className={styles.quizResult}>
      <h2>Quiz Completed</h2>
      <p>
        You scored {score} out of {totalQuestions}
      </p>
    </div>
    <button onClick={onRestart}>Restart Quiz</button>
    </div>
  )
}

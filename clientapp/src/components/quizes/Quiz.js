import React, { useState, useEffect } from 'react';
import ResultQuiz from './ResultQuiz';
import styles from './Quiz.module.css';

const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "Berlin", isCorrect: false },
      { answerText: "Madrid", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Lisbon", isCorrect: false },
    ],
  },
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalTimer, setTotalTimer] = useState(3600);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalTimer((prevTotalTimer) => {
        if (prevTotalTimer > 0) {
          return prevTotalTimer - 1;
        } else {
          clearInterval(interval);
          setEndTime(Date.now());
          setShowResult(true);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAnswerOptionClick = (index, isCorrect) => {
    const currentQuestionData = questions[currentQuestion];
    const userAnswer = currentQuestionData.answerOptions[index].answerText;

    const answerText = userAnswer || "Not Answered";

    const correctAnswer = currentQuestionData.answerOptions.find(option => option.isCorrect).answerText;

    setAnsweredQuestions((prev) => [
      ...prev,
      {
        questionText: currentQuestionData.questionText,
        userAnswer: answerText, // Use the answerText here
        correctAnswer,
      },
    ]);

    setSelectedOption(index);
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
      } else {
        setEndTime(Date.now());
        setShowResult(true);
      }
    }, 2000);
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
    } else {
      setEndTime(Date.now());
      setShowResult(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  const handleQuestionSelect = (questionIndex) => {
    setCurrentQuestion(questionIndex);
    setSelectedOption(null);
  };

  const endQuiz = () => {
    setEndTime(Date.now());
    setShowResult(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setTotalTimer(3600);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setStartTime(Date.now());
    setEndTime(null);
    setAnsweredQuestions([]);
  };

  if (showResult) {
    return (
      <ResultQuiz
        score={score}
        totalQuestions={questions.length}
        onRestart={restartQuiz}
        quizName="Theory Training - Mock Test"
        startTime={startTime}
        endTime={endTime}
        questions={answeredQuestions} // pass the answered questions
      />
    );
  }

  return (
    <div className={styles.quizDiv}>
      <div className={styles.quiz}>
        <div className={styles.totalTimer}>
          Total time left: {Math.floor(totalTimer / 60)}:{totalTimer % 60 < 10 ? `0${totalTimer % 60}` : totalTimer % 60}
        </div>
        <div className={styles.questionCount}>
          Question {currentQuestion + 1}/{questions.length}
        </div>
        <div className={styles.questionText}>{questions[currentQuestion].questionText}</div>
        <div className={styles.answerSection}>
          {questions[currentQuestion].answerOptions.map((answerOption, index) => {
            let buttonClass = "";
            if (selectedOption === index) {
              buttonClass = answerOption.isCorrect ? styles.correct : styles.incorrect;
            } else if (selectedOption !== null && answerOption.isCorrect) {
              buttonClass = styles.correct;
            }
            return (
              <button
                key={index}
                className={buttonClass}
                onClick={() => handleAnswerOptionClick(index, answerOption.isCorrect)}
                disabled={selectedOption !== null}
              >
                {answerOption.answerText}
              </button>
            );
          })}
        </div>
        <div className={styles.navigationButtons}>
          <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
            Previous
          </button>
          <button onClick={endQuiz}>End Quiz</button>
          <button onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1 || selectedOption === null}>
            Next
          </button>
        </div>
        <div className={styles.questionSelect}>
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => handleQuestionSelect(index)}
              style={{ border: answeredQuestions[index] ? "2px solid pink" : "none" }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

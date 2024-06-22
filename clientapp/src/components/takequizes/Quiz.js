import React, { useState, useEffect } from 'react';
import ResultQuiz from './ResultQuiz';
import styles from './Quiz.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswerRandomQuestion, getQuizRandomQuestionFailure, getQuizRandomQuestionOutputFailure, getQuizResult, getRandomQuestion } from '../../redux/features/quizSlice';
import Confetti from 'react-confetti'

import useWindowSize from 'react-use/lib/useWindowSize'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { imageBaseUrl } from '../../utils/constants';
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

  const { cid, id } = useParams();



  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalTimer, setTotalTimer] = useState(3600);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [answered, setAnswered] = useState("");


  const { oneQuiz, oneQuizOutput, quizResult } = useSelector(state => state.quiz)



  const { width, height } = useWindowSize()


  useEffect(() => {


    dispatch(getRandomQuestion(cid, id))
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

  const handleAnswerOptionClick = (answerOption, answerImage) => {

    // alert(answerOption)


    let finData = {
      questionId: oneQuiz.questionId,
      answer: answerOption,
      answerImage: answerImage
    }

    setAnswered(answerOption)


    dispatch(getAnswerRandomQuestion(finData))

  };

  const handleNextQuestion = () => {

    dispatch(getQuizRandomQuestionOutputFailure())
    dispatch(getQuizRandomQuestionFailure())
    dispatch(getRandomQuestion(cid, id))
    // const nextQuestion = currentQuestion + 1;
    // if (nextQuestion < questions.length) {
    //   setCurrentQuestion(nextQuestion);
    //   setSelectedOption(null);
    // } else {
    //   setEndTime(Date.now());
    //   setShowResult(true);
    // }
  };

  const handlePreviousQuestion = () => {

    dispatch(getQuizRandomQuestionOutputFailure())
    // if (currentQuestion > 0) {
    //   setCurrentQuestion(currentQuestion - 1);
    //   setSelectedOption(null);
    // }
  };

  const handleQuestionSelect = (questionIndex) => {
    setCurrentQuestion(questionIndex);
    setSelectedOption(null);
  };

  const endQuiz = () => {

    navigate("/admin/quizResult")

    // setEndTime(Date.now());
    // setShowResult(true);
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
    <>
      {
        oneQuizOutput.answerAttempt == "Correct" ? <Confetti
          run={oneQuizOutput.answerAttempt == "Correct"}
          width={width}
          wind={0}
          height={height}
        /> : <>
        </>
      }

      <div className={styles.quizDiv}>
        <div className={styles.quiz}>

          {
            oneQuiz?.question ?
              <>
                <div className={styles.totalTimer}>
                  Category : {oneQuiz?.quizCategory}
                  {/* Total time left: {Math.floor(totalTimer / 60)}:{totalTimer % 60 < 10 ? `0${totalTimer % 60}` : totalTimer % 60} */}
                </div>
                <div className={styles.totalTimer}>
                  Module Name : {oneQuiz?.quizModuleName}
                  {/* Total time left: {Math.floor(totalTimer / 60)}:{totalTimer % 60 < 10 ? `0${totalTimer % 60}` : totalTimer % 60} */}
                </div>
                <div className={styles.questionCount}>
                  {/* {currentQuestion + 1}/{questions.length} */}
                  Question : {oneQuiz?.question}
                </div>


                <div className={styles.questionCount}>
                  {oneQuiz?.questionImage && <img width={200} src={`${oneQuiz?.questionImage!= "" ? imageBaseUrl + oneQuiz?.questionImage : ""}`} />}
                </div>
                <div className={styles.OptionsText}>{"Options :-"} </div>



                <div className={styles.answerSection}>
                  {/* {oneQuiz?.option?.map((answerOption, index) => {
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
                })} */}

                  {oneQuiz?.option?.map((answerOption, index) => {
                    return (
                      <button
                        // key={index}
                        disabled={oneQuizOutput.answerAttempt}
                        style={{ backgroundColor: oneQuizOutput.answerAttempt == "Incorrect" ? "Option" + (index + 1) == answered ? "red" : oneQuizOutput.correctAnswer == "Option" + (index + 1) ? "green" : "" : oneQuizOutput.correctAnswer == "Option" + (index + 1) ? "green" : "" }}
                        onClick={() => handleAnswerOptionClick("Option" + (index + 1), "Image" + (index + 1))}
                      // disabled={selectedOption !== null}
                      >
                        {answerOption != "" ? answerOption : ""} &nbsp; &nbsp; {oneQuiz?.optionImage[index] != "" && <img width={200} src={`${oneQuiz?.optionImage[index] != "" ? imageBaseUrl + oneQuiz?.optionImage[index] : ""}`} />}
                      </button>
                    );
                  })}



                </div>
              </>
              : <>
                <div className={styles.totalTimer}>
                  No Question Available
                </div>
              </>}
          <div className={styles.navigationButtons}>
            {/* <button onClick={handlePreviousQuestion}>
              Previous
            </button> */}
            {/* <button onClick={endQuiz}>End Quiz</button> */}
            <button onClick={endQuiz}>View Result</button>
            {
              oneQuizOutput.answerAttempt ? <button onClick={handleNextQuestion}>
                Next
              </button> : <></>
            }
          </div>



          {/* <div className={styles.questionSelect}>
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionSelect(index)}
                  style={{ border: answeredQuestions[index] ? "2px solid pink" : "none" }}
                >
                  {index + 1}
                </button>
              ))}
            </div> */}
        </div>
      </div>
    </>
  );
};

export default Quiz;

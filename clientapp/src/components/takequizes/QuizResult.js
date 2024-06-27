import React, { useState, useEffect } from 'react';
import ResultQuiz from './ResultQuiz';
import styles from './Quiz.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswerRandomQuestion, getQuizRandomQuestionFailure, getQuizRandomQuestionOutputFailure, getQuizResult, getRandomQuestion } from '../../redux/features/quizSlice';
import Confetti from 'react-confetti'

import useWindowSize from 'react-use/lib/useWindowSize'
import { useNavigate } from 'react-router-dom';
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

const QuizResult = () => {


  const dispatch = useDispatch()
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalTimer, setTotalTimer] = useState(3600);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [answered, setAnswered] = useState("");

  console.log("Dasdasdasdasdas")


  let navigate = useNavigate()

  let url = window.location.pathname.split("/").pop()

  const { oneQuiz, oneQuizOutput,loading, quizResult } = useSelector(state => state.quiz)

  const handleAnswerOptionClick = (answerOption) => {

    // alert(answerOption)


    let finData = {
      questionId: oneQuiz.questionId,
      answer: answerOption
    }

    setAnswered(answerOption)


    dispatch(getAnswerRandomQuestion(finData))

  };



  useEffect(() => {

    dispatch(getQuizResult(url))
  }, [])
  const handleNextQuestion = () => {

    dispatch(getQuizRandomQuestionOutputFailure())
    dispatch(getQuizRandomQuestionFailure())
    dispatch(getRandomQuestion())
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

    // dispatch(getQuizResult())

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



  return (
    <>
      <div className="container mx-auto p-1">
        <h2 className="text-center text-2xl font-semibold mb-4">
          {/* Test Has Been Completed */}
        </h2>
        <div className="overflow-x-auto">
          <table
            className="min-w-full bg-white dark:bg-zinc-800 border border-black"
            id={styles.resultTableData}
          >
            <thead>
              <tr className="w-full bg-zinc-800 bg-dark dark:bg-zinc-700 text-white">
                <th className="py-2 px-4 text-left border border-black">
                  Quiz Name
                </th><th className="py-2 px-4 text-left border border-black">
                  Module
                </th><th className="py-2 px-4 text-left border border-black">
                  Question
                </th>
                <th className="py-2 px-4 text-left border border-black">Answer Attempt</th>
                <th className="py-2 px-4 text-left border border-black">Answer Correct</th>
                <th className="py-2 px-4 text-left border border-black">
                  Answer Choose
                </th>
                <th className="py-2 px-4 text-left border border-black">Submit Time</th>


                {
                  url == "quizViewResult" && <>
                    <th className="py-2 px-4 text-left border border-black">User Name</th>
                    <th className="py-2 px-4 text-left border border-black">Email</th>
                    <th className="py-2 px-4 text-left border border-black">Phone Number</th>
                  </>
                }
              </tr>
            </thead>
            <tbody>

              {
                quizResult.map((itm) => {
                  return <tr className="border-b dark:border-zinc-700">
                    <td className="py-2 px-4 border border-black">{itm.result.name}</td>
                    <td className="py-2 px-4 border border-black">{itm.moduleresult.moduleName}</td>
                    <td className="py-2 px-4 border border-black">{itm.question.question}</td>
                    <td className="py-2 px-4 border border-black">
                      {itm.answerAttempt}
                    </td>
                    <td className="py-2 px-4 border border-black">
                      {itm.question.answer}
                    </td>
                    <td className="py-2 px-4 border border-black">
                      {itm.answer}
                      {/* {`${Math.floor(
                      duration / 60
                    )}m ${duration % 60}s`} */}
                    </td>
                    <td className="py-2 px-4 border border-black">
                      {/* {`${percentage}%`} */}
                      {new Date(itm.createdOn).toLocaleString()}
                    </td>

                    {
                      url == "quizViewResult" && <>
                        <td className="py-2 px-4 border border-black">
                          {itm.user.username}
                        </td>
                        <td className="py-2 px-4 border border-black">
                          {itm.user.email}
                        </td>
                        <td className="py-2 px-4 border border-black">
                          {itm.user.phoneNumber}
                        </td>
                      </>
                    }
                  </tr>
                })
              }

            </tbody>
          </table>
        </div>

        {
          url != "quizViewResult" && <div className={styles.restartQuizBtn}>
            <button
              onClick={
                () => {
                  navigate("/quizCategoryHome")
                }
              }
              className="mt-4 bg-black text-white py-1 px-3 rounded"
            >
              Go To Quiz
            </button>
          </div>
        }

      </div>
    </>
  );
};

export default QuizResult;

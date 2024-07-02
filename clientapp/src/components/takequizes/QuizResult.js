import React, { useState, useEffect } from 'react';
import ResultQuiz from './ResultQuiz';
import styles from './Quiz.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswerRandomQuestion, getQuizRandomQuestionFailure, getQuizRandomQuestionOutputFailure, getQuizResult, getRandomQuestion } from '../../redux/features/quizSlice';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

const QuizResult = () => {
  const dispatch = useDispatch();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalTimer, setTotalTimer] = useState(3600);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [answered, setAnswered] = useState("");

  let navigate = useNavigate();
  let url = window.location.pathname.split("/").pop();

  const { oneQuiz, oneQuizOutput, loading, quizResult } = useSelector(state => state.quiz);

  const handleAnswerOptionClick = (answerOption) => {
    let finData = {
      questionId: oneQuiz.questionId,
      answer: answerOption
    };

    setAnswered(answerOption);
    dispatch(getAnswerRandomQuestion(finData));
  };

  useEffect(() => {
    dispatch(getQuizResult(url));
  }, [dispatch, url]);

  const handleNextQuestion = () => {
    dispatch(getQuizRandomQuestionOutputFailure());
    dispatch(getQuizRandomQuestionFailure());
    dispatch(getRandomQuestion());
  };

  const handlePreviousQuestion = () => {
    dispatch(getQuizRandomQuestionOutputFailure());
  };

  const handleQuestionSelect = (questionIndex) => {
    setCurrentQuestion(questionIndex);
    setSelectedOption(null);
  };

  const endQuiz = () => {};

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
    <div style={{backgroundColor:'black', color:'white', paddingBottom:'5rem'}}>
      <div className="container mx-auto p-1" >
        <h2 className="text-center text-2xl font-semibold mb-4">
          {/* Test Has Been Completed */}
        </h2>
        <div className="overflow-x-auto">
          <table
            className="min-w-full bg-dark dark:bg-zinc-800 border border-danger"
            id={styles.resultTableData}
          >
            <thead >
              <tr className="w-full bg-zinc-800  dark:bg-zinc-700 text-white"style={{backgroundColor:'black'}}>
                <th className="py-2 px-4 text-left border border-danger">
                  Quiz Name
                </th>
                <th className="py-2 px-4 text-left border border-danger">
                  Module
                </th>
                <th className="py-2 px-4 text-left border border-danger">
                  Question
                </th>
                <th className="py-2 px-4 text-left border border-danger">Answer Attempt</th>
                <th className="py-2 px-4 text-left border border-danger">Answer Correct</th>
                <th className="py-2 px-4 text-left border border-danger">
                  Answer Choose
                </th>
                <th className="py-2 px-4 text-left border border-danger">Submit Time</th>

                {url === "quizViewResult" && (
                  <>
                    <th className="py-2 px-4 text-left border border-danger">User Name</th>
                    <th className="py-2 px-4 text-left border border-danger">Email</th>
                    <th className="py-2 px-4 text-left border border-danger">Phone Number</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {quizResult.map((itm) => (
                <tr className="border-b dark:border-zinc-700" key={itm.result?._id}>
                  <td className="py-2 px-4 border border-danger">{itm.result?.name || 'N/A'}</td>
                  <td className="py-2 px-4 border border-danger">{itm.moduleresult?.moduleName || 'N/A'}</td>
                  <td className="py-2 px-4 border border-danger">{itm.question?.question.replace(">", "><br/>") || 'N/A'}</td>
                  <td className="py-2 px-4 border border-danger">{itm.answerAttempt || 'N/A'}</td>
                  <td className="py-2 px-4 border border-danger">{itm.question?.answer || 'N/A'}</td>
                  <td className="py-2 px-4 border border-danger">{itm.answer || 'N/A'}</td>
                  <td className="py-2 px-4 border border-danger">
                    {new Date(itm.createdOn).toLocaleString() || 'N/A'}
                  </td>

                  {url === "quizViewResult" && (
                    <>
                      <td className="py-2 px-4 border border-danger">{itm.user?.username || 'N/A'}</td>
                      <td className="py-2 px-4 border border-danger">{itm.user?.email || 'N/A'}</td>
                      <td className="py-2 px-4 border border-danger">{itm.user?.phoneNumber || 'N/A'}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {url !== "quizViewResult" && (
          <div className={styles.restartQuizBtn}>
            {/* <button
              onClick={() => {
                navigate("/takequizCatName");
              }}
              className="mt-4 bg-black text-white py-1 px-3 rounded"
            >
              Go To Quiz
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizResult;

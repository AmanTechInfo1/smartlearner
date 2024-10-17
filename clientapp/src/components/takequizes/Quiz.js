import React, { useState, useEffect, useRef } from "react";
import ResultQuiz from "./ResultQuiz";
import styles from "./Quiz.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAnswerRandomQuestion,
  getQuizRandomQuestionFailure,
  getQuizRandomQuestionOutputFailure,
  getQuizResult,
  getRandomQuestion,
  getRandomQuestionByName,
} from "../../redux/features/quizSlice";
import Confetti from "react-confetti";

import useWindowSize from "react-use/lib/useWindowSize";
import { useNavigate, useParams } from "react-router-dom";
import { imageBaseUrl } from "../../utils/constants";

import LoadingWeb from "../loader/LoadingWeb";

const Quiz = () => {
  const { cid, id } = useParams();

  const myDivRef = useRef(null);
  const myDivRefQue = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalTimer, setTotalTimer] = useState(3600);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [answered, setAnswered] = useState("");
  const [questionTranslate, setQuestionTranslate] = useState("en");

  const { oneQuiz, oneQuizOutput, loading, quizResult } = useSelector(
    (state) => state.quiz
  );

  const { width, height } = useWindowSize();

  const handleTranslation = async (question) => {
    let queeeopt = [];
    const formdata = new FormData();
    formdata.append("question", question);

    let option1 = document.getElementById("laboption1").innerHTML;
    if (option1) {
      queeeopt.push(option1);
      formdata.append("option1", option1);
    }
    let option2 = document.getElementById("laboption2").innerHTML;
    if (option2) {
      queeeopt.push(option2);
      formdata.append("option2", option2);
    }
    let option3 = document.getElementById("laboption3").innerHTML;
    if (option3) {
      queeeopt.push(option3);
      formdata.append("option3", option3);
    }
    let option4 = document.getElementById("laboption4").innerHTML;
    if (option4) {
      queeeopt.push(option4);
      formdata.append("option4", option4);
    }

    // formdata.append("options", question);
    // formdata.append("lang", "hi");
    formdata.append("lang", questionTranslate);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.smartlearner.com/api/roles/translate`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (myDivRef != null && myDivRef.current != null) {
          myDivRef.current.innerHTML = result.question;
          if (option1) {
            document.getElementById("option1").innerHTML = result.option1;
          }
          if (option2) {
            document.getElementById("option2").innerHTML = result.option2;
          }
          if (option3) {
            document.getElementById("option3").innerHTML = result.option3;
          }
          if (option4) {
            document.getElementById("option4").innerHTML = result.option4;
          }
        }
        return result;
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (myDivRef != null && myDivRef.current != null) {
      handleTranslation(myDivRefQue.current.innerHTML);
    }
  }, [myDivRefQue.current, questionTranslate]);

  useEffect(() => {
    dispatch(getRandomQuestionByName(cid));
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
      answerImage: answerImage,
    };

    setAnswered(answerOption);

    dispatch(getAnswerRandomQuestion(finData));
  };

  const handleNextQuestion = () => {
    dispatch(getQuizRandomQuestionOutputFailure());
    dispatch(getQuizRandomQuestionFailure());
    dispatch(getRandomQuestionByName(cid, id));
    // const nextQuestion = currentQuestion + 1;
    // if (nextQuestion < questions.length) {
    //   setCurrentQuestion(nextQuestion);
    //   setSelectedOption(null);
    // } else {
    //   setEndTime(Date.now());
    //   setShowResult(true);
    // }
  };

  const endQuiz = () => {
    navigate("/quizResult");

    // setEndTime(Date.now());
    // setShowResult(true);
  };

  return (
    <>
      {oneQuizOutput.answerAttempt == "Correct" ? (
        <Confetti
          run={oneQuizOutput.answerAttempt == "Correct"}
          width={width}
          wind={0}
          height={height}
        />
      ) : (
        <></>
      )}
      <div className={styles.quizContainer}>
        <div className={styles.quizDiv}>
          <div className={styles.quiz}>
            {loading ? (
              <>
                <LoadingWeb />
              </>
            ) : oneQuiz?.question ? (
              <>
                <div className={styles.totalTimer}>
                  {/* <select onChange={(e)=>{
                    setQuestionTranslate(e.target.value)
                  }}>

                    {
                      Object.entries(languageCodes).map((itm)=>{
                        return <option value={itm[1]}>{itm[0]}</option>
                      })
                    }
                  </select> */}
                </div>
                <div className={styles.totalTimer}>
                  <span> Category : </span> <p>{oneQuiz?.quizCategory}</p>
                  {/* Total time left: {Math.floor(totalTimer / 60)}:{totalTimer % 60 < 10 ? `0${totalTimer % 60}` : totalTimer % 60} */}
                </div>
                <div className={styles.totalTimer}>
                  {/* Module Name : {oneQuiz?.quizModuleName} */}
                  {/* Total time left: {Math.floor(totalTimer / 60)}:{totalTimer % 60 < 10 ? `0${totalTimer % 60}` : totalTimer % 60} */}
                </div>
                <div className={styles.questionCount}>
                  {/* {currentQuestion + 1}/{questions.length} */}
                  <span>Question: </span>
                  <div
                    ref={myDivRef}
                    dangerouslySetInnerHTML={{
                      __html: oneQuiz?.question.replace(
                        ">",
                        "><br/>",
                        "</td> </tr> </tbody> </table>",
                        `"<table class="box questionbox"><br/> <tbody> <tr> <td>"`
                      ),
                    }}></div>
                  <div
                    style={{ display: "none" }}
                    ref={myDivRefQue}
                    dangerouslySetInnerHTML={{
                      __html: oneQuiz?.question.replace(
                        ">",
                        "><br/>",
                        "</td> </tr> </tbody> </table>",
                        `"<table class="box questionbox"><br/> <tbody> <tr> <td>"`
                      ),
                    }}></div>
                </div>

                <div className={styles.questionCount}>
                  {oneQuiz?.questionImage && (
                    <img
                      width={200}
                      src={`${
                        oneQuiz?.questionImage != ""
                          ? oneQuiz?.questionImage.includes("https")
                            ? oneQuiz?.questionImage
                            : imageBaseUrl + oneQuiz?.questionImage
                          : ""
                      }`}
                    />
                  )}
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
                        style={{
                          backgroundColor:
                            oneQuizOutput.answerAttempt == "Incorrect"
                              ? "Option" + (index + 1) == answered
                                ? "#780000"
                                : oneQuizOutput.correctAnswer ==
                                  "Option" + (index + 1)
                                ? "green"
                                : ""
                              : oneQuizOutput.correctAnswer ==
                                "Option" + (index + 1)
                              ? "green"
                              : "",
                        }}
                        onClick={() =>
                          handleAnswerOptionClick(
                            "Option" + (index + 1),
                            "Image" + (index + 1)
                          )
                        }
                        // disabled={selectedOption !== null}
                      >
                        {answerOption != "" ? (
                          <p id={"option" + (index + 1)}>{answerOption}</p>
                        ) : (
                          ""
                        )}{" "}
                        &nbsp; &nbsp;{" "}
                        {answerOption != "" ? (
                          <p
                            style={{ display: "none" }}
                            id={"laboption" + (index + 1)}>
                            {answerOption}
                          </p>
                        ) : (
                          ""
                        )}{" "}
                        &nbsp; &nbsp;{" "}
                        {oneQuiz?.optionImage[index] != "" && (
                          <img
                            width={200}
                            src={`${
                              oneQuiz?.optionImage[index] != ""
                                ? oneQuiz?.optionImage[index].includes("https")
                                  ? oneQuiz?.optionImage[index]
                                  : imageBaseUrl + oneQuiz?.optionImage[index]
                                : ""
                            }`}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <div className={styles.totalTimer}>No Question Available</div>
              </>
            )}
            <div className={styles.navigationButtons}>
              {/* <button onClick={handlePreviousQuestion}>
              Previous
            </button> */}
              {/* <button onClick={endQuiz}>End Quiz</button> */}
              <button onClick={endQuiz}>View Result</button>
              {oneQuizOutput.answerAttempt ? (
                <button onClick={handleNextQuestion}>Next</button>
              ) : (
                <></>
              )}
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
      </div>
    </>
  );
};

export default Quiz;

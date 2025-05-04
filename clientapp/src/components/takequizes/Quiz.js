import React, { useState, useEffect, useRef } from "react";
import styles from "./Quiz.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAnswerRandomQuestion,
  getQuizRandomQuestionFailure,
  getQuizRandomQuestionOutputFailure,
  getRandomQuestionByName,
  restartQuiz,
  resetQuizRestarted,
  resetOneQuizOutput,
} from "../../redux/features/quizSlice";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { useNavigate, useParams } from "react-router-dom";
import LoadingWeb from "../loader/LoadingWeb";
import { imageBaseUrl } from "../../utils/constants";
import httpHandler from "../../utils/httpHandler";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { getQuizCategoryById } from "../../redux/features/quizCategorySlice";

const languageCodes = {
  Auto: "auto",
  English: "en",
  Portuguese: "pt",
  Afrikaans: "af",
  Albanian: "sq",
  Amharic: "am",

  Armenian: "hy",
  Azerbaijani: "az",
  Basque: "eu",
  Belarusian: "be",
  Bengali: "bn",
  Bosnian: "bs",
  Bulgarian: "bg",
  Catalan: "ca",
  Cebuano: "ceb",
  Chichewa: "ny",
  "Chinese (Simplified)": "zh-CN",
  "Chinese (Traditional)": "zh-TW",
  Corsican: "co",
  Croatian: "hr",
  Czech: "cs",
  Danish: "da",
  Dutch: "nl",
  Esperanto: "eo",
  Estonian: "et",
  Filipino: "tl",
  Finnish: "fi",
  French: "fr",
  Frisian: "fy",
  Galician: "gl",
  Georgian: "ka",
  German: "de",
  Greek: "el",
  Gujarati: "gu",
  "Haitian Creole": "ht",
  Hausa: "ha",
  Hawaiian: "haw",
  Hebrew: "iw",
  Hindi: "hi",
  Hmong: "hmn",
  Hungarian: "hu",
  Icelandic: "is",
  Igbo: "ig",
  Indonesian: "id",
  Irish: "ga",
  Italian: "it",
  Japanese: "ja",
  Javanese: "jw",
  Kannada: "kn",
  Kazakh: "kk",
  Khmer: "km",
  Kinyarwanda: "rw",
  Korean: "ko",
  Kurdish: "ku",
  Kyrgyz: "ky",
  Lao: "lo",
  Latin: "la",
  Latvian: "lv",
  Lithuanian: "lt",
  Luxembourgish: "lb",
  Macedonian: "mk",
  Malagasy: "mg",
  Malay: "ms",
  Malayalam: "ml",
  Maltese: "mt",
  Maori: "mi",
  Marathi: "mr",
  Mongolian: "mn",
  "Myanmar (Burmese)": "my",
  Nepali: "ne",
  Norwegian: "no",
  "Odia (Oriya)": "or",
  Pashto: "ps",
  Persian: "fa",
  Polish: "pl",
  Punjabi: "pa",
  Romanian: "ro",
  Russian: "ru",
  Samoan: "sm",
  "Scots Gaelic": "gd",
  Serbian: "sr",
  Sesotho: "st",
  Shona: "sn",

  Sinhala: "si",
  Slovak: "sk",
  Slovenian: "sl",
  Somali: "so",
  Spanish: "es",
  Sundanese: "su",
  Swahili: "sw",
  Swedish: "sv",
  Tajik: "tg",
  Tamil: "ta",
  Tatar: "tt",
  Telugu: "te",
  Thai: "th",
  Turkish: "tr",
  Turkmen: "tk",
  Ukrainian: "uk",

  Uyghur: "ug",
  Uzbek: "uz",
  Vietnamese: "vi",
  Welsh: "cy",
  Xhosa: "xh",
  Yiddish: "yi",
  Yoruba: "yo",
  Zulu: "zu",
};

const Quiz = () => {
  const { cid, id } = useParams();
  const myDivRef = useRef(null);
  const myDivRefQue = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState(null);

  const [questionTranslate, setQuestionTranslate] = useState("en-Us");
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [answered, setAnswered] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [hasTranslated, setHasTranslated] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [categoryFetched, setCategoryFetched] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [visibleQuestions, setVisibleQuestions] = useState(10); // Initially show 10 questions
  const [showAll, setShowAll] = useState(false);
  const [translatedQuestionText, setTranslatedQuestionText] = useState("");
  const [translatedOptions, setTranslatedOptions] = useState({});

  const [confettiActive, setConfettiActive] = useState(false);

  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  const {
    oneQuiz,
    oneQuizOutput,
    outputData,
    isQuizRestarted,
    TotalQuestions,
    AttemptedQuestions,
    loading,
  } = useSelector((state) => state.quiz);
  const { quizCategory } = useSelector((state) => state.quizCategory);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (window.responsiveVoice) {
      // Ensure ResponsiveVoice is ready
      window.responsiveVoice.onready = () => {
        console.log("ResponsiveVoice is ready.");
      };
    }
  }, []);

  const speak = (text) => {
    if (text) {
      const Voice = "Hindi Female"; // Get the language code
      window.responsiveVoice.speak(text, Voice); // Use ResponsiveVoice
    } else {
      console.error("No text provided to speak.");
    }
  };

  const handleTranslationAndSpeech = async () => {
    if (hasTranslated) return;
    setHasTranslated(true);
    setIsTranslating(true);
    const formdata = new FormData();
    const question =
      oneQuiz[currentQuestionIndex]?.question || "No question provided";

    formdata.append("question", question);
    formdata.append("lang", questionTranslate);

    ["option1", "option2", "option3", "option4"].forEach((option) => {
      const optionText = document.getElementById(`lab${option}`)?.innerHTML;
      if (optionText) {
        formdata.append(option, optionText);
      }
    });

    try {
      const response = await httpHandler.post("/api/quiz/translate", formdata);

      const result = await response.data;
      if (myDivRef.current) {
        setTranslatedQuestionText(result.question);
      }

      ["option1", "option2", "option3", "option4"].forEach((option) => {
        if (result[option]) {
          setTranslatedOptions({
            option1: result.option1,
            option2: result.option2,
            option3: result.option3,
            option4: result.option4,
          });
        }
      });
      console.log("Translation response:", result);
    } catch (error) {
      console.error("Translation error:", error.message);
    } finally {
      setIsTranslating(false);
    }
  };
  useEffect(() => {
    if (questionTranslate !== "en-Us") {
      handleTranslationAndSpeech();
    }
  }, [questionTranslate, currentQuestionIndex]);

  const hasFetchedRef = useRef(false);
  useEffect(() => {
    // Create a ref to track if the API has already been called

    if (!hasFetchedRef.current) {
      dispatch(getRandomQuestionByName(cid));
      hasFetchedRef.current = true; // Set it to true to avoid re-triggering
    }
  }, [cid, dispatch]); // Keep dependencies for `cid` and `dispatch`

  const handleAnswerOptionClick = (answerOption, answerImage) => {
    let finData = {
      questionId: oneQuiz[currentQuestionIndex].questionId,
      answer: answerOption,
      answerImage: answerImage,
    };

    setAnswered(answerOption);
    setAnsweredQuestions((prev) => [...prev, finData]);
    dispatch(getAnswerRandomQuestion(finData));
  };

  const resetTranslation = () => {
    setHasTranslated(false);
    setIsTranslating(false);
  };
  const stopSpeech = () => {
    if (window.responsiveVoice) {
      window.responsiveVoice.cancel(); // This stops any ongoing speech
    }
  };

  const totalQuestions = Object.keys(oneQuiz).length;

  const handleQuestionClick = (index) => {
    stopSpeech();
    resetTranslation();

    setCurrentQuestionIndex(index);
    // Optionally reset quiz output when changing question

    // If the question is not already answered, mark it as answered
    if (!answeredQuestions.includes(index)) {
      setAnsweredQuestions((prev) => [...prev, index]);
    }
    setConfettiActive(false);
  };

  const handleNextQuestion = () => {
    stopSpeech();
    resetTranslation();

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }

    if (currentQuestionIndex === totalQuestions - 1) {
      setQuizCompleted(true); // Mark the quiz as completed when the last question is answered
    }

    setConfettiActive(false);
  };

  useEffect(() => {
    if (oneQuizOutput.answerAttempt === "Correct") {
      setConfettiActive(true); // Enable confetti when the answer is correct
    }
  }, [oneQuizOutput]);

  const endQuiz = () => {
    navigate("/quizResult");
    dispatch(resetOneQuizOutput());
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleToggle = () => {
    if (showAll) {
      setVisibleQuestions(10); // Reset to show only 10 questions
    } else {
      setVisibleQuestions(totalQuestions); // Show all questions
    }
    setShowAll(!showAll); // Toggle the state to switch between "See More" and "See Less"
  };

  // /////////////////////////

  useEffect(() => {
    // Only dispatch getQuizCategoryById if the category is not fetched yet
    if (oneQuiz[currentQuestionIndex]?.category) {
      dispatch(getQuizCategoryById(oneQuiz[currentQuestionIndex].category));
    }
  }, [dispatch, oneQuiz[currentQuestionIndex]?.category]);

  const prevTimerRef = useRef();
  const intervalRef = useRef();

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  useEffect(() => {
    if (quizCategory?.timer) {
      setTimer(quizCategory?.timer * 60); // Convert minutes to seconds
    }
  }, [quizCategory]);

  useEffect(() => {
    prevTimerRef.current = timer;

    if (timer > 0 && !isPaused) {
      // Start or continue the timer if it's not paused
      intervalRef.current = setInterval(() => {
        setTimer((prevTime) => prevTime - 1); // Decrease the timer by 1 every second
      }, 1000);
    } else {
      // Clear the interval when the timer is paused
      clearInterval(intervalRef.current);
    }
    // Clean up interval on component unmount or when the timer hits 0
    return () => clearInterval(intervalRef.current);
  }, [timer, isPaused]);

  useEffect(() => {
    if (timer === 0) {
      setTimeUp(true); // Set the "Time's Up!" state when the timer ends

      setQuizEnded(true); // End the quiz when the timer hits 0
    }
  }, [timer]);

  const handlePauseResume = () => {
    setIsPaused((prevState) => !prevState); // Toggle the pause/resume state
  };

  ///////////////////////////////////////////////////////////////////////////////////////

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setQuestionTranslate(selectedLanguage);
    setHasTranslated(false);
  };

  useEffect(() => {
    if (isQuizRestarted) {
      dispatch(resetQuizRestarted()); // Reset the restart status after handling
    }
  }, [isQuizRestarted, dispatch]);

  const handleRestart = () => {
    stopSpeech();
    dispatch(restartQuiz(cid));
    setQuizCompleted(false);
    setCategoryFetched(false);
    // Reset the category fetched flag for restart
    if (quizCategory?.timer) {
      setTimer(quizCategory?.timer * 60); // Convert minutes to seconds
    }

    // Dispatch the restart action
  };

  const backbtn = () => {
    navigate(-2);
  };

  return (
    <>
      {confettiActive && (
        <Confetti run={confettiActive} width={width} height={height} />
      )}
      <div className={styles.quizContainer}>
        <div className={styles.quizDiv}>
          <div className={styles.quiz}>
            {loading ? (
              <LoadingWeb />
            ) : timeUp ? (
              <div className={styles.totalTimer333}>
                <span>Time's Up!</span>
                <button
                  onClick={handleRestart}
                  className="btn btn-secondary bg-danger">
                  Restart Quiz
                </button>
              </div>
            ) : quizCompleted ? (
              <div className={styles.totalTimer333}>
                <span>Quiz Completed!</span>
                <button
                  onClick={handleRestart}
                  className="btn btn-secondary bg-danger">
                  Restart Quiz
                </button>
              </div>
            ) : oneQuiz[currentQuestionIndex]?.question ? (
              <>
                <div className={styles.totalTimer2}>
                  <div className={styles.totalTimer}>
                    <select onChange={handleLanguageChange}>
                      {Object.entries(languageCodes).map((itm) => (
                        <option key={itm[1]} value={itm[1]}>
                          {itm[0]}
                        </option>
                      ))}
                    </select>
                    {isTranslating && <span>Loading...</span>}
                  </div>
                  <div className={styles.totalTimer2}>
                    {quizCategory?.timer && (
                      <div className={styles.totalTimer}>
                        <span
                          style={{
                            border: "none",
                            padding: "5px 10px",
                            backgroundColor: "white",
                            color: "black",
                            fontWeight: "400",
                            fontSize: "18px",
                          }}>
                          Time left: {formatTime(timer)}
                        </span>
                        <button
                          onClick={handlePauseResume}
                          id={styles.linkButton}>
                          {isPaused ? "Resume" : "Pause"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                {TotalQuestions && AttemptedQuestions !== undefined && (
                  <div className={styles.questionDataNumbers}>
                    <p>Attempted : {AttemptedQuestions}</p>
                    <p>TotalQuestions : {TotalQuestions}</p>
                  </div>
                )}
                <div>
                  <div
                    className={styles.questionNumbers}
                    style={{ marginBottom: "1rem" }}>
                    {Array.from({ length: totalQuestions }, (_, index) => {
                      if (index < visibleQuestions) {
                        return (
                          <button
                            key={index}
                            id={styles.questionNumbering}
                            className={`question-number ${
                              currentQuestionIndex === index ? "active" : ""
                            } ${
                              answeredQuestions.includes(index)
                                ? "answered"
                                : ""
                            }`}
                            onClick={() => handleQuestionClick(index)}>
                            {index + 1}
                          </button>
                        );
                      }
                      return null;
                    })}
                    {totalQuestions > 10 && (
                      <button
                        className={styles.seeMoreButton}
                        onClick={handleToggle}>
                        {showAll ? "See Less" : "See More"}
                      </button>
                    )}
                  </div>
                </div>
                <div className={styles.totalTimer}>
                  <span>Category: </span>
                  <p>
                    {oneQuiz[currentQuestionIndex]?.quizCategory ||
                      "Not specified"}
                  </p>
                </div>
                <div className={styles.questionCount}>
                  <span>Question: </span>
                  <div
                    ref={myDivRef}
                    id="questionTextt"
                    dangerouslySetInnerHTML={{
                      __html: oneQuiz[currentQuestionIndex]?.question.replace(
                        ">",
                        "><br/>"
                      ),
                    }}
                  />
                  <button
                    disabled={!hasTranslated || isTranslating}
                    style={{
                      marginTop: "8px",
                      border: "none",
                      backgroundColor: "darkblue",
                      cursor:
                        !hasTranslated || isTranslating
                          ? "not-allowed"
                          : "pointer",
                      opacity: !hasTranslated || isTranslating ? 0.5 : 1,
                    }}
                    onClick={() => speak(translatedQuestionText)}>
                    🔊
                  </button>
                </div>
                {oneQuiz[currentQuestionIndex]?.questionImage && (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      style={{
                        maxWidth: "300px",
                        width: "100%",
                        borderRadius: "6px",
                        filter:
                          "drop-shadow(0.35rem 0.35rem 0.4rem rgba(19, 19, 19, 0.8))",
                      }}
                      src={
                        imageBaseUrl +
                        oneQuiz[currentQuestionIndex]?.questionImage
                      }
                      alt="Question"
                    />
                  </div>
                )}
                <div className={styles.answerSection}>
                  {oneQuiz[currentQuestionIndex]?.option?.map(
                    (answerOption, index) => {
                      // Check if there are matching output items based on questionId
                      const outputItem = outputData.find(
                        (item) =>
                          item.questionId ===
                          oneQuiz[currentQuestionIndex]?.questionId
                      );
                      // Check if the user has selected an answer and if it's correct or incorrect
                      // Check if the user has selected an answer and if it's correct or incorrect
                      const isAnswerSelected =
                        outputItem?.answerAttempt !== undefined;
                      const isCorrect = outputItem?.answerAttempt === "Correct";

                      const isSelectedAnswer =
                        `Option${index + 1}` === outputItem?.answer;
                      const isButtonDisabled =
                        outputItem?.questionId ===
                        oneQuiz[currentQuestionIndex]?.questionId;

                      // Determine the background color and icon display logic
                      let buttonBackgroundColor = "";
                      let showTick = false;
                      let showCross = false;

                      if (isAnswerSelected) {
                        // If the selected answer is the user's choice and it's incorrect
                        if (isSelectedAnswer && !isCorrect) {
                          buttonBackgroundColor = "#e40000"; // Red for incorrect selected answer
                          showCross = true; // Show cross icon
                        } else if (isSelectedAnswer && isCorrect) {
                          buttonBackgroundColor = "#00a600"; // Green for correct answer
                          showTick = true;
                        } else if (
                          !isSelectedAnswer &&
                          outputItem?.correctAnswer === `Option${index + 1}`
                        ) {
                          // If the user did not select the correct option, show it in green
                          buttonBackgroundColor = "#00a600"; // Green for correct answer
                          showTick = true; // Show tick icon
                        }
                      } else if (
                        isCorrect &&
                        outputItem?.correctAnswer === `Option${index + 1}`
                      ) {
                        // If no answer selected yet, highlight the correct option in green
                        buttonBackgroundColor = "#00a600"; // Green for correct option
                      }

                      return (
                        <button
                          key={index}
                          disabled={isButtonDisabled} // Disable button if the questionId matches
                          style={{
                            backgroundColor: buttonBackgroundColor,
                            cursor: isButtonDisabled
                              ? "not-allowed"
                              : "pointer",
                          }}
                          onClick={() =>
                            handleAnswerOptionClick(
                              "Option" + (index + 1),
                              "Image" + (index + 1)
                            )
                          }>
                          {answerOption && (
                            <>
                              <p id={"option" + (index + 1)}>{answerOption}</p>
                              <p
                                style={{ display: "none" }}
                                id={"laboption" + (index + 1)}>
                                {answerOption}
                              </p>
                              <button
                                disabled={!hasTranslated || isTranslating}
                                style={{
                                  border: "none",
                                  cursor:
                                    !hasTranslated || isTranslating
                                      ? "not-allowed"
                                      : "pointer",
                                  opacity:
                                    !hasTranslated || isTranslating ? 0.5 : 1,
                                }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const optionKey = `option${index + 1}`;
                                  const textToSpeak =
                                    translatedOptions[optionKey];
                                  if (textToSpeak) {
                                    speak(textToSpeak);
                                  }
                                }}>
                                🔊
                              </button>
                              {oneQuiz[currentQuestionIndex]?.optionImage[
                                index
                              ] && (
                                <img
                                  style={{ maxWidth: "120px", width: "100%" }}
                                  src={
                                    oneQuiz[currentQuestionIndex]?.optionImage[
                                      index
                                    ].includes("https")
                                      ? oneQuiz[currentQuestionIndex]
                                          ?.optionImage[index]
                                      : imageBaseUrl +
                                        oneQuiz[currentQuestionIndex]
                                          ?.optionImage[index]
                                  }
                                />
                              )}
                              {/* Show the Tick icon if the selected answer is correct */}
                              {showTick && (
                                <TiTick
                                  style={{
                                    color: "white",
                                    fontSize: "20px",
                                    fontWeight: "900",
                                  }}
                                />
                              )}
                              {/* Show the Cross icon if the selected answer is incorrect */}
                              {showCross && (
                                <RxCross2
                                  style={{
                                    color: "white",
                                    fontSize: "20px",
                                    fontWeight: "900",
                                  }}
                                />
                              )}
                            </>
                          )}
                        </button>
                      );
                    }
                  )}
                </div>
              </>
            ) : (
              <div className={styles.totalTimer}>
                Quiz Completed Veiw result
                <button
                  className="btn btn-secondary bg-danger"
                  onClick={handleRestart}>
                  Restart Quiz
                </button>
              </div>
            )}

            <div className={styles.navigationButtons}>
              <button onClick={endQuiz}>View Result</button>
              <button
                onClick={backbtn}
                className="btn btn-secondary bg-info ml-3 py-2 px-3 ">
                Back
              </button>
              {oneQuizOutput.answerAttempt && !quizCompleted && !timeUp && (
                <button onClick={handleNextQuestion}>Next</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;

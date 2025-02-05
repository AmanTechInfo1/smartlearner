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

  const [timer, setTimer] = useState(null);

  const [questionTranslate, setQuestionTranslate] = useState("en-Us");
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [answered, setAnswered] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [hasTranslated, setHasTranslated] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [categoryFetched, setCategoryFetched] = useState(false);

  const { oneQuiz, oneQuizOutput, isQuizRestarted, loading } = useSelector(
    (state) => state.quiz
  );
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
    const question = oneQuiz?.question || "No question provided";

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
      if (result.question) {
        speak(result.question);
      }

      ["option1", "option2", "option3", "option4"].forEach((option) => {
        if (result[option]) {
          speak(result[option]); // Speak translated options
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
    dispatch(getRandomQuestionByName(cid));
  }, [dispatch, cid]);

  const handleAnswerOptionClick = (answerOption, answerImage) => {
    let finData = {
      questionId: oneQuiz.questionId,
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
  const handleNextQuestion = () => {
    stopSpeech();
    resetTranslation();
    dispatch(getQuizRandomQuestionOutputFailure());
    dispatch(getQuizRandomQuestionFailure());
    dispatch(getRandomQuestionByName(cid, id));
  };

  const endQuiz = () => {
    navigate("/quizResult");
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    // Only dispatch getQuizCategoryById if the category is not fetched yet
    if (oneQuiz?.category != quizCategory?._id && !categoryFetched) {
      dispatch(getQuizCategoryById(oneQuiz.category));
      setCategoryFetched(true); // Mark category as fetched
    }
  }, [dispatch, oneQuiz?.category, categoryFetched]);

  const prevTimerRef = useRef();

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  useEffect(() => {
    if (quizCategory?.timer) {
      setTimer(quizCategory?.timer * 60); // Convert minutes to seconds
    }
    console.log("timmmerrr", quizCategory?.timer * 60);
  }, [quizCategory]);

  useEffect(() => {
    prevTimerRef.current = timer;

    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1); // Decrease the timer by 1 every second
      }, 1000);

      // Clean up interval on component unmount or when the timer hits 0
      return () => clearInterval(interval);
    }
  }, [timer]);

  useEffect(() => {
    if (timer === 0) {
      setQuizEnded(true); // End the quiz when the timer hits 0
    }
  }, [timer]);

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
    setQuizEnded(false);
    setCategoryFetched(false);
    // Reset the category fetched flag for restart
    if (quizCategory?.timer) {
      setTimer(quizCategory?.timer * 60); // Convert minutes to seconds
    }
    // Dispatch the restart action
  };

  const backbtn = () => {
    navigate(-1);
    
     
  }
  

  const totalQuestions = oneQuiz?.question?.length || 0; // Assuming options length gives total questions
  const allQuestionsAnswered = answeredQuestions.length >= totalQuestions;

  return (
    <>
      {oneQuizOutput.answerAttempt === "Correct" && (
        <Confetti run={true} width={width} height={height} />
      )}
      <div className={styles.quizContainer}>
        <div className={styles.quizDiv}>
          <div className={styles.quiz}>
            {loading ? (
              <LoadingWeb />
            ) : quizEnded ? (
              <div className={styles.totalTimer333}>
                <span>Time's Up!</span>
                <button
                  onClick={handleRestart}
                  className="btn btn-secondary bg-danger"
                >
                  Restart Quiz
                </button>
              </div>
            ) : oneQuiz?.question ? (
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
                    <button
                      style={{
                        border: "none",
                        borderRadius: "6px",
                        padding: "4px 15px",
                        backgroundColor: "red",
                        color: "white",
                        fontWeight: "400",
                      }}
                      onClick={handleTranslationAndSpeech}
                    >
                      Speak
                    </button>
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
                          }}
                        >
                          Time left: {formatTime(timer)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className={styles.totalTimer}>
                  <span>Category: </span>
                  <p>{oneQuiz?.quizCategory || "Not specified"}</p>
                </div>
                <div className={styles.questionCount}>
                  <span>Question: </span>
                  <div
                    ref={myDivRef}
                    dangerouslySetInnerHTML={{
                      __html: oneQuiz?.question.replace(">", "><br/>"),
                    }}
                  />
                </div>
                {oneQuiz?.questionImage && (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      style={{
                        maxWidth: "200px",
                        width: "100%",
                        borderRadius: "6px",
                        boxShadow: "0px 4px 10px rgba(31, 31, 31, 0.74)",
                      }}
                      src={imageBaseUrl + oneQuiz?.questionImage}
                      alt="Question"
                    />
                  </div>
                )}
                <div className={styles.answerSection}>
                  {oneQuiz?.option?.map((answerOption, index) => {
                    return (
                      <button
                        key={index}
                        disabled={oneQuizOutput.answerAttempt}
                        style={{
                          backgroundColor:
                            oneQuizOutput.answerAttempt === "Incorrect"
                              ? "Option" + (index + 1) === answered
                                ? "#e40000"
                                : oneQuizOutput.correctAnswer ===
                                  "Option" + (index + 1)
                                ? "#00a600"
                                : ""
                              : oneQuizOutput.correctAnswer ===
                                "Option" + (index + 1)
                              ? "#00a600"
                              : "",
                        }}
                        onClick={() =>
                          handleAnswerOptionClick(
                            "Option" + (index + 1),
                            "Image" + (index + 1)
                          )
                        }
                      >
                        {answerOption && (
                          <>
                            <p id={"option" + (index + 1)}>{answerOption}</p>
                            <p
                              style={{ display: "none" }}
                              id={"laboption" + (index + 1)}
                            >
                              {answerOption}
                            </p>
                            {oneQuiz?.optionImage[index] && (
                              <img
                                style={{ maxWidth: "120px", width: "100%" }}
                                src={`${
                                  oneQuiz?.optionImage[index].includes("https")
                                    ? oneQuiz?.optionImage[index]
                                    : imageBaseUrl + oneQuiz?.optionImage[index]
                                }`}
                              />
                            )}

                            {oneQuizOutput.answerAttempt && (
                              <>
                                {oneQuizOutput.correctAnswer ===
                                `Option${index + 1}` ? (
                                  <TiTick
                                    style={{
                                      color: "white",
                                      fontSize: "20px",
                                      fontWeight: "900",
                                    }}
                                  />
                                ) : oneQuizOutput.answerAttempt ===
                                  "Incorrect" ? (
                                  <RxCross2
                                    style={{
                                      color: "white",
                                      fontSize: "20px",
                                      fontWeight: "900",
                                    }}
                                  />
                                ) : null}
                              </>
                            )}
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className={styles.totalTimer}>
                Quiz Completed Veiw result
                <button
                  className="btn btn-secondary bg-danger"
                  onClick={handleRestart}
                >
                  Restart Quiz
                </button>
              </div>
            )}

            <div className={styles.navigationButtons}>
              <button onClick={endQuiz}>View Result</button>
              <button
                onClick={backbtn}
                className="btn btn-secondary bg-info ml-3 py-2 px-3 "
              >
                Back
              </button>
              {oneQuizOutput.answerAttempt && (
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

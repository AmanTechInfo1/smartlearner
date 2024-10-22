import React, { useState, useEffect, useRef } from "react";
import ResultQuiz from "./ResultQuiz";
import styles from "./Quiz.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAnswerRandomQuestion,
  getQuizRandomQuestionFailure,
  getQuizRandomQuestionOutputFailure,
  getRandomQuestionByName,
} from "../../redux/features/quizSlice";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { useNavigate, useParams } from "react-router-dom";
import LoadingWeb from "../loader/LoadingWeb";
import { imageBaseUrl } from "../../utils/constants";
import httpHandler from "../../utils/httpHandler";

const languageCodes = {
  English: "en",
  Portuguese: "pt",
  "Brazilian Portuguese": "pt-BR",
  Afrikaans: "af",
  Albanian: "sq",
  Amharic: "am",
  Arabic: "ar",
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
  Sindhi: "sd",
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
  Urdu: "ur",
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
  const [totalTimer, setTotalTimer] = useState(3600);
  const [showResult, setShowResult] = useState(false);
  const [questionTranslate, setQuestionTranslate] = useState("en");
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [answered, setAnswered] = useState("");
  const [availableVoices, setAvailableVoices] = useState([]);
  const [isTranslating, setIsTranslating] = useState(false);

  const { oneQuiz, oneQuizOutput, loading } = useSelector(
    (state) => state.quiz
  );
  const { width, height } = useWindowSize();

  const handleTranslation = async () => {
    setIsTranslating(true); // Start loading
    const formdata = new FormData();
    const question = myDivRefQue.current?.innerHTML || "No question provided";

    formdata.append("question", question);
    formdata.append("lang", questionTranslate);

    // Adding options to formdata
    ["option1", "option2", "option3", "option4"].forEach((option) => {
      const optionText = document.getElementById(`lab${option}`)?.innerHTML;
      if (optionText) {
        formdata.append(option, optionText);
      }
    });

    try {
      const response = await httpHandler.post("/api/roles/translate", formdata);

      const result = response.data;

      if (myDivRef.current) {
        myDivRef.current.innerHTML = result.question;
      }
      ["option1", "option2", "option3", "option4"].forEach((option) => {
        if (result[option]) {
          document.getElementById(option).innerHTML = result[option];
        }
      });
      console.log("Translation response:", result);

      // readQuestionAndOptions();
    } catch (error) {
      console.error("Translation error:", error.message);
    } finally {
      setIsTranslating(false); // End loading
    }
  };

  useEffect(() => {
    dispatch(getRandomQuestionByName(cid));
    const interval = setInterval(() => {
      setTotalTimer((prevTotalTimer) => {
        if (prevTotalTimer > 0) {
          return prevTotalTimer - 1;
        } else {
          clearInterval(interval);
          setShowResult(true);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
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

  const handleNextQuestion = () => {
    dispatch(getQuizRandomQuestionOutputFailure());
    dispatch(getQuizRandomQuestionFailure());
    dispatch(getRandomQuestionByName(cid, id));
  };
  const endQuiz = () => {
    navigate("/quizResult");
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setQuestionTranslate(selectedLanguage);

    handleTranslation();
  };

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
            ) : oneQuiz?.question ? (
              <>
                <div className={styles.totalTimer}>
                  <select onChange={handleLanguageChange}>
                    {Object.entries(languageCodes).map((itm) => (
                      <option key={itm[1]} value={itm[1]}>
                        {itm[0]}
                      </option>
                    ))}
                  </select>
                  {isTranslating && <span>Loading...</span>}
                  {/* <button onClick={readQuestionAndOptions}>
                    Read Question & Options
                  </button> */}
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
                  <div
                    style={{ display: "none" }}
                    ref={myDivRefQue}
                    dangerouslySetInnerHTML={{
                      __html: oneQuiz?.question.replace(">", "><br/>"),
                    }}
                  />
                </div>

                <div className={styles.answerSection}>
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
              <div className={styles.totalTimer}>No Question Available</div>
            )}
            <div className={styles.navigationButtons}>
              <button onClick={endQuiz}>View Result</button>
              <button onClick={endQuiz}>End Quiz</button>
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

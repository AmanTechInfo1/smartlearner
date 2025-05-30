import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizResult } from "../../redux/features/quizSlice";
import { useNavigate } from "react-router-dom";
import LoadingWeb from "../../components/loader/LoadingWeb";
import styles from "./QuizResult.module.css";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const AllResult = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 20;
  const { quizResult } = useSelector((state) => state.quiz);
  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth.userDetails._id);
  const url = window.location.pathname.split("/").pop();

  useEffect(() => {
    if (userId) {
      setLoading(true);
      dispatch(getQuizResult(userId, url)).then(() => {
        setLoading(false);
      });
    }
  }, [dispatch, userId, url]);

  const currentTime = new Date();
  const twentyFourHoursAgo = new Date(currentTime - 24 * 60 * 60 * 1000);

  // Filter results to only include those within the last 24 hours
  const filteredQuizResults = quizResult.filter((itm) => {
    const createdOn = new Date(itm.createdOn);
    return createdOn >= twentyFourHoursAgo;
  });

  const sortedQuizResults = [...filteredQuizResults].sort(
    (a, b) => new Date(b.createdOn) - new Date(a.createdOn)
  );

  const groupedResults = quizResult.reduce((acc, itm) => {
    const quizName = itm.result?.name;
    const band = itm.question?.band || " ";

    if (!acc[quizName]) {
      acc[quizName] = {};
    }
    if (!acc[quizName][band]) {
      acc[quizName][band] = { results: [], correct: 0, incorrect: 0 };
    }

    // Check if the answer was correct or incorrect
    const isCorrect = itm.answerAttempt === "Correct";
    if (isCorrect) {
      acc[quizName][band].correct += 1;
    } else {
      acc[quizName][band].incorrect += 1;
    }

    acc[quizName][band].results.push(itm);

    return acc;
  }, {});

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = Object.values(groupedResults)
    .flat()
    .slice(indexOfFirstItem, indexOfLastItem);

  const truncateQuizName = (name) => {
    const words = name.split(" ");
    return words.length > 5 ? `${words.slice(0, 4).join(" ")}...` : name;
  };

  const getAnswerText = (question, answer) => {
    const answerIndex = parseInt(answer.replace("Option", "")) - 1;
    return question?.option[answerIndex] || "N/A";
  };

  const getAnswer2Text = (question, answer) => {
    if (!question || !answer || !question.option) return "N/A"; // Safe check for undefined question or answer
    const answerIndex = parseInt(answer.replace("Option", "")) - 1;
    return question.option[answerIndex] || "N/A"; // Safe access to the option array
  };

  const calculatePercentage = (correct, incorrect) => {
    const total = correct + incorrect;
    return total > 0 ? ((correct / total) * 100).toFixed(2) : 0;
  };

  const getPassOrFail = (percentage) => {
    return percentage >= 80 ? (
      <span style={{ color: "green", margin: "0px 0.5rem" }}>Pass</span>
    ) : (
      <span style={{ color: "red", margin: "0px 0.5rem" }}>Fail</span>
    );
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        paddingTop: "4rem",
        paddingBottom: "5rem",
      }}>
      <div className="container mx-auto p-1">
        <h2 className="text-center text-2xl font-semibold mb-4">
          Quiz Results{" "}
          <button
            onClick={() => navigate(-1)}
            className="btn btn-secondary bg-info ml-5 py-3 px-5 ">
            Go Back
          </button>
        </h2>
        {loading ? (
          <LoadingWeb />
        ) : (
          <>
            <div className="mb-4">
              {Object.keys(groupedResults).map((quizName, index) => (
                <button
                  key={`${quizName}-${index}`}
                  onClick={() => {
                    // Scroll to the quiz category section when button is clicked
                    const element = document.getElementById(quizName);
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className={styles.catebtn}>
                  {truncateQuizName(quizName)}
                </button>
              ))}
            </div>

            {Object.entries(groupedResults).map(([quizName, bands]) => (
              <div key={quizName} id={quizName} className="mb-5">
                <h3 className="text-xl font-semibold">{quizName}</h3>

                {Object.entries(bands).map(([band, data], index) => {
                  const { results, correct, incorrect } = data;
                  const percentage = calculatePercentage(correct, incorrect);
                  const passOrFail = getPassOrFail(percentage);

                  return (
                    <div key={`${band}-${index}`}>
                      <h4>{band}</h4>
                      <p style={{ fontSize: "1.5rem", fontWeight: "500" }}>
                        Total Score: {percentage}% ({passOrFail})
                        <span style={{ color: "green", marginLeft: "1rem" }}>
                          Correct:{" "}
                        </span>{" "}
                        {correct}{" "}
                        <span style={{ color: "red" }}>Incorrect: </span>
                        {incorrect}
                      </p>

                      <div className={styles.tableWrapperCollapse}>
                        <div className={styles.tableWrapperScroller}>
                          <table
                            className={`${styles.quizResultTable} bg-dark dark:bg-zinc-800 border `}>
                            <thead>
                              <tr
                                className="w-full bg-zinc-800 dark:bg-zinc-700 text-white"
                                id={styles.tableRowBg}>
                                {[
                                  "Quiz Name",
                                  "Question",
                                  "Correct Answer",
                                  "Answer Attempt",
                                  "Description",
                                  "Submit Time",
                                ].map((header) => (
                                  <th
                                    key={header}
                                    className="py-2 px-4 text-left border ">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody id={styles.tablebodyRowBg}>
                              {results.map((itm, index) => (
                                <tr
                                  className="border-b dark:border-zinc-700"
                                  key={`${itm.result?._id}-${index}`}>
                                  <td className="py-2 px-4 border ">
                                    {quizName || "N/A"}
                                  </td>
                                  <td className="py-2 px-4 border ">
                                    {itm.question?.question.replace(
                                      ">",
                                      "><br/>"
                                    ) || "N/A"}
                                  </td>
                                  <td className="py-2 px-4 border border-light bg-success">
                                    {getAnswer2Text(
                                      itm.question,
                                      itm?.question?.answer
                                    )}
                                  </td>

                                  <td
                                    className="py-2 px-4 border border-light"
                                    style={{
                                      backgroundColor:
                                        itm.answerAttempt === "Incorrect"
                                          ? "#990309"
                                          : "#024902",
                                    }}>
                                    {getAnswerText(itm.question, itm.answer)}
                                    {itm.answerAttempt === "Correct" ? (
                                      <TiTick
                                        style={{
                                          color: "white",
                                          fontSize: "22px",
                                          fontWeight: "700",
                                          marginLeft: "10px",
                                        }}
                                      />
                                    ) : (
                                      <ImCross
                                        style={{
                                          color: "white",
                                          fontSize: "15px",
                                          fontWeight: "400",
                                          marginLeft: "10px",
                                        }}
                                      />
                                    )}
                                  </td>
                                  <td className="py-2 px-4 border ">
                                    {itm.question?.description || "N/A"}
                                  </td>
                                  <td className="py-2 px-4 border ">
                                    {new Date(itm.createdOn).toLocaleString() ||
                                      "N/A"}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AllResult;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizResult } from "../../redux/features/quizSlice";
import { useNavigate } from "react-router-dom";
import LoadingWeb from "../../components/loader/LoadingWeb";

const QuizResult = () => {
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

  const sortedQuizResults = [...quizResult].sort(
    (a, b) => new Date(b.createdOn) - new Date(a.createdOn)
  );

  const groupedResults = sortedQuizResults.reduce((acc, itm) => {
    const quizName = itm.result?.name;
    if (quizName && quizName !== "N/A") {
      if (!acc[quizName]) {
        acc[quizName] = [];
      }
      acc[quizName].push(itm);
    }
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

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        paddingBottom: "5rem",
      }}>
      <div className="container mx-auto p-1">
        <h2 className="text-center text-2xl font-semibold mb-4">
          Quiz Results{" "}
          <button
            onClick={() => navigate(-2)}
            className="btn btn-secondary bg-info ml-5 py-3 px-5 ">
            Go Back
          </button>
        </h2>
        {loading ? (
          <LoadingWeb />
        ) : (
          <>
            <div className="mb-4">
              {Object.keys(groupedResults).map((quizName) => (
                <button
                  key={quizName}
                  onClick={() =>
                    document
                      .getElementById(quizName)
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn btn-danger me-2 my-1"
                  style={{ minWidth: "120px", margin: "0.5rem" }}>
                  {truncateQuizName(quizName)}
                </button>
              ))}
            </div>

            {Object.entries(groupedResults).map(([quizName, results]) => (
              <div key={quizName} id={quizName} className="mb-5">
                <h3 className="text-xl font-semibold">{quizName}</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-dark dark:bg-zinc-800 border border-danger">
                    <thead>
                      <tr className="w-full bg-zinc-800 dark:bg-zinc-700 text-white">
                        {[
                          "Quiz Name",
                          "Question",
                          "Answer Attempt",
                          "Answer Correct",
                          "Answer Choose",
                          "Submit Time",
                          "User Name",
                        ].map((header) => (
                          <th
                            key={header}
                            className="py-2 px-4 text-left border border-danger">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((itm) => (
                        <tr
                          className="border-b dark:border-zinc-700"
                          key={itm.result?._id}>
                          <td className="py-2 px-4 border border-danger">
                            {quizName || "N/A"}
                          </td>
                          <td className="py-2 px-4 border border-danger">
                            {itm.question?.question.replace(">", "><br/>") ||
                              "N/A"}
                          </td>
                          <td className="py-2 px-4 border border-light bg-danger">
                            {itm.answerAttempt || "N/A"}
                          </td>
                          <td className="py-2 px-4 border border-light bg-success">
                            {itm.question?.answer || "N/A"}
                          </td>
                          <td className="py-2 px-4 border border-light bg-info">
                            {itm.answer || "N/A"}
                          </td>
                          <td className="py-2 px-4 border border-danger">
                            {new Date(itm.createdOn).toLocaleString() || "N/A"}
                          </td>
                          <td className="py-2 px-4 border border-danger">
                            {itm.user?.username || "N/A"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default QuizResult;

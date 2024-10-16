import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizResult } from "../../redux/features/quizSlice";
import { useNavigate } from "react-router-dom";

const QuizResult = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const { quizResult } = useSelector((state) => state.quiz);
  const navigate = useNavigate();

  const userId = useSelector((state) => state.auth.userDetails._id);
  const url = window.location.pathname.split("/").pop();

  useEffect(() => {
    if (userId) {
      dispatch(getQuizResult({ url, userId }));
    }
  }, [dispatch, url, userId]);

  // Group results by Quiz Name, filtering out N/A
  const groupedResults = quizResult.reduce((acc, itm) => {
    const quizName = itm.result?.name;
    if (quizName && quizName !== "N/A") {
      if (!acc[quizName]) {
        acc[quizName] = [];
      }
      acc[quizName].push(itm);
    }
    return acc;
  }, {});

  // Pagination logic
  const totalPages = Math.ceil(
    Object.values(groupedResults).flat().length / itemsPerPage
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Flatten grouped results for current page display
  const currentItems = Object.values(groupedResults)
    .flat()
    .slice(indexOfFirstItem, indexOfLastItem);

  // Helper function to truncate quiz names
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
          Quiz Results
        </h2>

        {/* Navigation Buttons */}
        <div className="mb-4">
          {Object.keys(groupedResults).map((quizName) => (
            <button
              key={quizName}
              onClick={() =>
                document
                  .getElementById(quizName)
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="btn btn-danger me-2 my-1" // Added margin
              style={{ minWidth: "120px", margin: "0.5rem" }} // Ensured uniform size
            >
              {truncateQuizName(quizName)}
            </button>
          ))}
        </div>

        {/* Render each group of quiz results */}
        {Object.entries(groupedResults).map(([quizName, results]) => (
          <div key={quizName} id={quizName} className="mb-5">
            <h3 className="text-xl font-semibold">{quizName}</h3>
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
                      {itm.question?.question.replace(">", "><br/>") || "N/A"}
                    </td>
                    <td className="py-2 px-4 border border-danger">
                      {itm.answerAttempt || "N/A"}
                    </td>
                    <td className="py-2 px-4 border border-danger">
                      {itm.question?.answer || "N/A"}
                    </td>
                    <td className="py-2 px-4 border border-danger">
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
        ))}

        {/* Pagination controls */}
      </div>
    </div>
  );
};

export default QuizResult;

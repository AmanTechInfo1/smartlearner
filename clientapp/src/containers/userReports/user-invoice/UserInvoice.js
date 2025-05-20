import React, { useEffect, useState } from "react";
import styles from "./UserInvoice.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../../../redux/features/userSlice";
import { fetchUserSubscriptions } from "../../../redux/features/subscriptionSlice";
import {
  getAllQuizzes,
  getQuizResultAdmin,
} from "../../../redux/features/quizSlice";
import { getUserOrderById } from "../../../redux/features/orderSlice";
import { Table } from "antd";
import Loader from "../../../components/loader/Loader";

import { FaArrowAltCircleLeft } from "react-icons/fa";

const UserInvoice = () => {
  const navigate = useNavigate();

  const params = useParams();
  const dispatch = useDispatch();
  const [isQuizLoading, setIsQuizLoading] = useState(true);

  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserById(params.invoiceId));
  }, [dispatch, params.invoiceId]);

  useEffect(() => {
    if (params.invoiceId) {
      dispatch(fetchUserSubscriptions(params.invoiceId));
    }
  }, [dispatch, params.invoiceId]);

  const { userSubscription } = useSelector((state) => state.subscription);

  const { quizResult, quizzes } = useSelector((state) => state.quiz);

  const [summary, setSummary] = useState([]);
  const userReportId = params.invoiceId;
  const userEmail = user?.email;

  useEffect(() => {
    if (userReportId) {
      setIsQuizLoading(true);
      Promise.all([
        dispatch(getQuizResultAdmin(userReportId)),
        dispatch(getAllQuizzes("", 1, 1000)),
      ]).then(() => {
        setIsQuizLoading(false);
      });
    }
  }, [dispatch, userReportId]);

  useEffect(() => {
    if (quizResult && quizResult.length > 0) {
      const categoryMap = {};
      let correctCount = 0; // To count the correct attempts
      let incorrectCount = 0;
      let totalAttempts = 0;
      let totalCorrect = 0;

      quizResult.forEach((entry) => {
        const categoryName = entry?.result?.name || "Unknown Category";
        if (!categoryMap[categoryName]) {
          categoryMap[categoryName] = {
            attempted: 0,
            total: 0,
            correct: 0,
            incorrect: 0,
          };
        }
        categoryMap[categoryName].attempted += 1;
        totalAttempts += 1;
        if (entry.answerAttempt === "Correct") {
          categoryMap[categoryName].correct += 1;
          correctCount += 1;
          totalCorrect += 1;
        } else {
          categoryMap[categoryName].incorrect += 1;
          incorrectCount += 1;
        }
      });

      quizzes.forEach((quiz) => {
        const categoryName = quiz?.categoryName || "Unknown";
        if (!categoryMap[categoryName]) {
          categoryMap[categoryName] = {
            attempted: 0,
            total: 0,
            correct: 0,
            incorrect: 0,
          };
        }
        categoryMap[categoryName].total += 1;
      });

      const summaryArray = Object.entries(categoryMap).map(
        ([categoryName, { attempted, total, correct, incorrect }]) => {
          let note = "";
          let multiplier = 1;

          if (attempted === 0) {
            note = "";
          } else if (attempted > total) {
            multiplier = Math.ceil(attempted / total);
            note = `(${multiplier} times attempts)`;
          } else {
            note = `(1 time attempt)`;
          }

          const correctPercentage =
            total > 0 ? ((correct / total) * 100).toFixed(2) : 0;
          const incorrectPercentage =
            total > 0 ? ((incorrect / total) * 100).toFixed(2) : 0;

          const categoryTotalPercentage =
            attempted > 0 ? ((correct / attempted) * 100).toFixed(2) : 0;

          const timeSpentSeconds = attempted * 30;
          const minutes = Math.floor(timeSpentSeconds / 60);
          const seconds = timeSpentSeconds % 60;
          const timeSpentFormatted = `${minutes}m ${seconds}s`;

          return {
            categoryName,
            attempted,
            total,
            multiplier,
            note,
            overAttempted: attempted > total,

            correct,
            incorrect,
            correctPercentage,
            incorrectPercentage,
            categoryTotalPercentage,
            timeSpentFormatted,
          };
        }
      ).filter((item) => item.attempted > 0);

      setSummary(summaryArray);
    }
  }, [quizResult, quizzes]);

  ///////////////////////////////////////////////////////////////

  const { userOrders, totalOrderCount } = useSelector((state) => state.order);

  const [state, setState] = useState({
    search: "",
    page: 1,
    pageSize: 5,
  });

  useEffect(() => {
    if (user?.email) {
      dispatch(getUserOrderById(userEmail, state.page, state.pageSize));
    }
  }, [dispatch, state.page, state.pageSize, userEmail]);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, page: 1, pageSize });
  };

  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return <button className="btn btn-sm btn-primary">Previous</button>;
    }
    if (type === "next") {
      return <button className="btn btn-sm btn-primary">Next</button>;
    }
    return originalElement;
  };

  // ///////////////////////////////////////////////////////
  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },

    {
      title: "Cart Items",
      dataIndex: "myCart",
      render: (cartItems) =>
        Array.isArray(cartItems) ? (
          <ul style={{ paddingLeft: 16 }}>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.service} , {item.price}£ {item.count}quantity
              </li>
            ))}
          </ul>
        ) : (
          "-"
        ),
    },
    {
      title: "Created On",
      dataIndex: "createdOn",
      align: "center",
      sorter: (a, b) => new Date(a.createdOn) - new Date(b.createdOn),
      render: (text) => {
        const date = new Date(text);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short", // Use 'long' for full month namesdxzc
          day: "2-digit",
        });
      },
    },
  ];

  const backbtn = () => {
    navigate("/admin/userReport");
  };

  // /////////////////////////////////////////////////////////

  return (
    <div className={styles.userReportInvoicecontainer2}>
      <FaArrowAltCircleLeft id={styles.backsbtn} onClick={backbtn} />
      <div className={styles.userReportInvoicecontainer}>
        <div className={styles.userReportInvoiceleftCard}>
          <div className={styles.userReportInvoiceprofileCard}>
            <img
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              alt="avatar"
              className={styles.userReportInvoiceavatar}
            />
            <h2>{user?.username}</h2>
            <div className={styles.userReportcardnames}>
              {" "}
              <p>
                <strong>Email</strong>
              </p>
              <p>{user?.email}</p>{" "}
            </div>
            <div className={styles.userReportcardnames}>
              <p>
                <strong>PhoneNumber</strong>
              </p>
              <p>{user?.phoneNumber}</p>
            </div>
            <div className={styles.userReportcardnames}>
              <p>
                <strong>Role</strong>
              </p>
              <p>{user?.roleName}</p>
            </div>
          </div>
        </div>

        <div className={styles.userReportInvoicerightCard}>
          <div className={styles.userReportInvoiceinfoCard}>
            <div className={styles.userReportInvoicesubscription}>
              <strong>Active Subscriptions :</strong>
              <p>
                {userSubscription.length > 0 &&
                userSubscription[0]?.subscriptionId?.planname
                  ? userSubscription[0].subscriptionId.planname
                  : "No Subscription"}
              </p>
            </div>
          </div>

          {/* //////////////////////////////////////////////////////// */}
          <div className={styles.usersContainer}>
            {userOrders && userOrders.length > 0 ? (
              <Table
                className="table-striped"
                pagination={{
                  current: state.page,
                  pageSize: state.pageSize,
                  total: totalOrderCount,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                  onChange: (page, pageSize) =>
                    setState({ ...state, page, pageSize }),
                }}
                style={{ overflowX: "auto" }}
                columns={columns}
                dataSource={userOrders}
                rowKey={(record) => record._id}
              />
            ) : (
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "600",
                  padding: "1rem",
                }}>
                No orders found.
              </p>
            )}
          </div>

          {/* //////////////////////////////////////////////// */}
        </div>
      </div>

      <div
        className={styles.userReportInvoicerightCard}
        style={{ marginTop: "1.5rem" }}>
        {isQuizLoading ? (
          <p style={{ textAlign: "center", fontWeight: "600" }}>
            Loading quiz results...
          </p>
        ) : summary?.length === 0 ? (
          <p
            className={styles.userReportInvoiceinfoCard}
            style={{ textAlign: "center", fontWeight: "600" }}>
            No quizzes have been attempted.
          </p>
        ) : (
          summary.map(
            ({
              categoryName,
              attempted,
              total,
              note,
              overAttempted,
              correct,
              incorrect,
              correctPercentage,
              incorrectPercentage,
              categoryTotalPercentage,
              timeSpentFormatted,
            }) => (
              <div
                className={styles.userReportInvoiceinfoCard}
                key={categoryName}>
                <div className={styles.userReportInvoicesubscription}>
                  <strong>{categoryName}</strong>
                  <p>
                    {attempted} attempted / {total} total{" "}
                    {note && <span>{note}</span>}
                    <br />
                    <span>
                      |{" "}
                      <strong>
                        Total Accuracy: {categoryTotalPercentage}%
                      </strong>
                    </span>
                    <br />
                    Correct: {correct} ({correctPercentage}%)
                    <br />
                    Incorrect: {incorrect} ({incorrectPercentage}%)
                    <br />
                    <span style={{ fontSize: "0.9em", color: "#555" }}>
                      Time spent: {timeSpentFormatted}
                    </span>
                  </p>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default UserInvoice;

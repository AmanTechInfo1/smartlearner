import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { getUserReports } from "../../redux/features/userReportsSlice";
import { Input, Table } from "antd";
import styles from "../../assets/css/admin.module.css";
import { FaFileInvoice } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

const UserReport = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, users, usersCount } = useSelector(
    (state) => state.userReport
  );

  const [state, setState] = useState({
    search: "",
    page: 1,
    pageSize: 10,
  });

  const [showAddPostcodeModal, setShowAddPostcodeModal] = useState(false);
  const toggleAddPostcodeModal = () =>
    setShowAddPostcodeModal(!showAddPostcodeModal);

  const [showEditPostcodeModal, setShowEditPostcodeModal] = useState(false);
  const toggleEditPostcodeModal = () =>
    setShowEditPostcodeModal(!showEditPostcodeModal);

  useEffect(() => {
    dispatch(getUserReports(state.search, state.page, state.pageSize));
  }, [dispatch, state.search, state.page, state.pageSize]);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, page: 1, pagesize: pageSize });
  };
  const handleSearchChange = (e) => {
    setState({ ...state, search: e.target.value });
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

  const columns = [
    {
      title: "User Name",
      dataIndex: "username",
      align: "center",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Phone No.",
      dataIndex: "phoneNumber",
      align: "center",
      sorter: (a, b) => a.phoneNumber.length - b.phoneNumber.length,
    },
    {
      title: "Joined On",
      dataIndex: "createdOn",
      align: "center",
      sorter: (a, b) => new Date(a.createdOn) - new Date(b.createdOn),
      render: (text) => {
        const date = new Date(text);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short", // Use 'long' for full month name
          day: "2-digit",
        });
      },
    },
    {
      title: "Action",
      align: "left",
      render: (text, record) => (
        <div
          className="d-flex justify-content-center"
          data-popper-placement="bottom-end">
          <Link
            className="dropdown-item px-2 text-success"
            onClick={(e) => {
              navigate(`/admin/userreport-invoice/${record._id}`);
            }}>
            <FaFileInvoice />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className={styles.usersContainer}>
        <div className={styles.usersHeading}>
          <h2 className={styles.userHeading}>User Reports</h2>
        </div>
        <div className="search-container mb-3">
          <Input
            placeholder="Search by Username or Email"
            value={state.search}
            onChange={handleSearchChange}
            allowClear
          />
         </div>
        {!loading ? (
          <Table
            className="table-striped"
            pagination={{
              current: state.page,
              pageSize: state.pageSize,
              total: usersCount,
              showTotal: (total, range) =>
                `Showing ${range[0]} to ${range[1]} of ${total} entries`,
              showSizeChanger: true,
              onShowSizeChange: onShowSizeChange,
              itemRender: itemRender,
              onChange: (page, pageSize) =>
                setState({ ...state, page, pagesize: pageSize }),
            }}
            style={{ overflowX: "auto" }}
            columns={columns}
            dataSource={users}
            rowKey={(record) => record._id}
          />
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default UserReport;

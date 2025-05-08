import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { getUserReports } from "../../redux/features/userReportsSlice";
import { Table } from "antd";
import styles from "../../assets/css/admin.module.css";
import { LiaUserEditSolid } from "react-icons/lia";

import { Link, useNavigate } from "react-router-dom";

const UserReport = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, userReport, userReportCount } = useSelector(
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
      dataIndex: "userName",
      align: "center",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Complete Address",
      dataIndex: "completeAddress",
      align: "center",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Phone No.",
      dataIndex: "phoneNumber",
      align: "center",
      sorter: (a, b) => a.phoneNumber.length - b.phoneNumber.length,
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
            <LiaUserEditSolid />
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
        {!loading ? (
          <Table
            className="table-striped"
            pagination={{
              current: state.page,
              pageSize: state.pageSize,
              total: userReportCount,
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
            dataSource={userReport}
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

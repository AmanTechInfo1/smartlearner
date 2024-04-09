import React, { useState } from "react";
import styles from "./css/AdminApp.module.css";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";

const AdminUsers = () => {
  const dispatch = useDispatch();
  const { loading, users, usersCount } = useSelector((state) => state.user);
  const [state, setState] = useState({
    search: "",
    page: 1,
    pageSize: 10,
  });

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
      title: "UserName",
      dataIndex: "username",
      sorter: (a, b) => a.username.length - b.username.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Action",
      render: (text, record) => (
        <div
          className="d-flex justify-content-around"
          data-popper-placement="bottom-end"
        >
          <Link
            to={`/update-client/${record.clientIdentifier}/${companyId}`}
            className="dropdown-item px-2 text-success"
            onClick={() => {
              handleEditClick(record.clientIdentifier);
            }}
          >
            <i className="fa fa-pencil m-r-5" />
          </Link>
          <Link
            className="dropdown-item px-2 text-danger"
            to="#"
            onClick={() => {
              handleDeleteClick(record.clientIdentifier);
            }}
          >
            <i className="fa fa-trash-o m-r-5" />
          </Link>
        </div>
      ),
    },
  ];

  const handleSave = (editedUser) => {};

  return (
    <>
      <div className={styles.usersContainer}>
        <div className={styles.usersHeading}>
          <h2 className={styles.userHeading}>Users</h2>
          <button
            className={styles.addButton}
            onClick={() => setAddUserFormVisible(true)}
          >
            Add User
          </button>
        </div>
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
          rowKey={(record) => record.clientIdentifier}
        />
      </div>
    </>
  );
};

export default AdminUsers;

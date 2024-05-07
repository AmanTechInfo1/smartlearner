import React, { useEffect, useState } from "react";
import styles from "../css/AdminApp.module.css";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../../features/userSlice";
import { Link } from "react-router-dom";
import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBin6Fill } from "react-icons/ri";
import AddUserModal from "./components/AddUserModal";
import { getListRoles } from "../../../features/rolesSlice";

const Users = () => {
    const dispatch = useDispatch();
    const { loading, users, usersCount } = useSelector((state) => state.user);
    const [showUserAddModal, setUserAddModal] = useState(false);
    const toggleAddUserModal = () => setUserAddModal(!showUserAddModal);

    const [state, setState] = useState({
        search: "",
        page: 1,
        pageSize: 10,
    });

    useEffect(() => {
        dispatch(getAllUsers(state.search, state.page, state.pageSize));
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

    const handleEditClick = (id) => {
        debugger
    }
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
            title: "Mobile Number",
            dataIndex: "phoneNumber",
            sorter: (a, b) => a.phoneNumber.length - b.phoneNumber.length,
        },
        {
            title: "Action",
            render: (text, record) => (
                <div
                    className="d-flex justify-content-around"
                    data-popper-placement="bottom-end"
                >
                    <Link
                        to={`#`}
                        className="dropdown-item px-2 text-success"
                        onClick={() => {
                            handleEditClick(record._id);
                        }}
                    >
                        <LiaUserEditSolid />
                    </Link>
                    <Link
                        className="dropdown-item px-2 text-danger"
                        to="#"
                        onClick={() => {
                            handleDeleteClick(record._id);
                        }}
                    >
                        <RiDeleteBin6Fill />
                    </Link>
                </div>
            ),
        },
    ];

    const handleAddUserClick = () => {
        dispatch(getListRoles());
        toggleAddUserModal();
    }
    const handleSave = (editedUser) => { };

    return (
        <>
            <div className={styles.usersContainer}>
                <div className={styles.usersHeading}>
                    <h2 className={styles.userHeading}>Users</h2>
                    <button
                        className={styles.addButton}
                        onClick={handleAddUserClick}
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
                    rowKey={(record) => record._id}
                />
            </div>
            <AddUserModal
                showUserAddModal={showUserAddModal}
                toggleAddUserModal={toggleAddUserModal}
            />
        </>
    );
};

export default Users;

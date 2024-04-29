import React, { useEffect, useState } from "react";
import styles from "./../css/AdminApp.module.css";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { getAllRoles } from "../../../features/rolesSlice";
import AddRoleModal from "./components/AddRoleModal";
import EditRoleModal from "./components/EditRoleModal";
import Loader from "../../../component/loader/Loader";

const Roles = () => {
  const dispatch = useDispatch();
  const { loading, roles, rolesCount } = useSelector((state) => state.roles);
  const [addRoleModalOpen, setAddRoleModalOpen] = useState(false);
  const toggleAddRoleModal = () => setAddRoleModalOpen(!addRoleModalOpen);

  const [editRoleModalOpen, setEditRoleModalOpen] = useState(false);
  const toggleEditRoleModal = () => setEditRoleModalOpen(!editRoleModalOpen);

  const [roleObj, setRoleObj] = useState();
  const [state, setState] = useState({
    search: "",
    page: 1,
    pageSize: 10,
  });

  useEffect(() => {
    dispatch(getAllRoles(state.search, state.page, state.pageSize));
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
    const role = roles.find((role) => role._id === id);
    setRoleObj(role);
    toggleEditRoleModal();
  }

  const handleDeleteClick = (id) => {
    console.log(id);
  }

  const columns = [
    {
      title: "Role Name",
      dataIndex: "name",
      align: "center",
      sorter: (a, b) => a.username.length - b.username.length,
    },
    {
      title: "Action",
      align: "center",
      render: (text, record) => (
        <div
          className="d-flex justify-content-center"
          data-popper-placement="bottom-end"
        >
          <Link
            to={"#"}
            className="dropdown-item px-2 text-success"
            onClick={() => {
              handleEditClick(record._id);
            }}
          >
            <LiaUserEditSolid />
          </Link>
          <Link
            className="dropdown-item px-2 text-danger"
            to={"#"}
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

  return (
    <>
      <div className={styles.usersContainer}>
        <div className={styles.usersHeading}>
          <h2 className={styles.userHeading}>Roles</h2>
          <button
            className={styles.addButton}
            onClick={toggleAddRoleModal}
          >
            Add Role
          </button>
        </div>
        {!loading ? (
          <Table
            className="table-striped"
            pagination={{
              current: state.page,
              pageSize: state.pageSize,
              total: rolesCount,
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
            dataSource={roles}
            rowKey={(record) => record._id}
          />
        ) : (
          <Loader />
        )}
      </div>
      <AddRoleModal
        addRoleModalOpen={addRoleModalOpen}
        toggleAddRoleModal={toggleAddRoleModal}
      />
      <EditRoleModal
        roleObj={roleObj}
        editRoleModalOpen={editRoleModalOpen}
        toggleEditRoleModal={toggleEditRoleModal}
      />
    </>
  );
};

export default Roles;
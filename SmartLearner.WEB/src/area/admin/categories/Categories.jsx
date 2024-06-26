import React, { useEffect, useState } from "react";
import AddCategoryModal from "./components/AddCategoryModal";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../component/loader/Loader";
import { deleteCategory, getAllCategories } from "../../../features/categorySlice";
import { Table } from "antd";
import styles from '../css/AdminApp.module.css';
import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBin6Fill } from "react-icons/ri";
import EditCategoryModal from "./components/EditCategoryModal";
import { Button } from "reactstrap";
import { confirmAlert } from 'react-confirm-alert';

const Categories = () => {
    const dispatch = useDispatch();
    const { categoryLoading, categories, categoryCount } = useSelector((state) => state.category);
    const [categoryObj, setCategoryObj] = useState();
    const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
    const toggleAddCategoryModal = () => setShowAddCategoryModal(!showAddCategoryModal);

    const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);
    const toggleEditCategoryModal = () => setShowEditCategoryModal(!showEditCategoryModal);

    const [state, setState] = useState({
        search: "",
        page: 1,
        pageSize: 10,
    });

    useEffect(() => {
        dispatch(getAllCategories(state.search, state.page, state.pageSize))
    }, [dispatch, state.search, state.page, state.pageSize])

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
        const category = categories.find((category) => category._id === id);
        setCategoryObj(category);
        setShowEditCategoryModal(true);
    }

    const handleDeleteClick = (id) => {
        confirmAlert({
            title: "Confirm to delete",
            message: "Are you sure to do this.",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => handleDelete(id),
                },
                {
                    label: "No",
                },
            ],
        });
    };

    const handleDelete = (id) => {
        dispatch(deleteCategory(id));
    }

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            align: "center",
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: "Description",
            dataIndex: "description",
            align: "center",
            sorter: (a, b) => a.description.length - b.description.length,
            render: (text) => (
                <span title={text}>
                    {text.length > 40 ? `${text.substring(0, 40)}...` : text}
                </span>
            ),
        },
        {
            title: "Action",
            align: "left",
            render: (text, record) => (
                <div
                    className="d-flex justify-content-center"
                    data-popper-placement="bottom-end"
                >
                    <Button
                        to={"#"}
                        className="dropdown-item px-2 text-success"
                        onClick={() => {
                            handleEditClick(record._id);
                        }}
                    >
                        <LiaUserEditSolid />
                    </Button>
                    <Button
                        className="dropdown-item px-2 text-danger"
                        to={"#"}
                        onClick={() => {
                            handleDeleteClick(record._id);
                        }}
                    >
                        <RiDeleteBin6Fill />
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <>
            <div className={styles.usersContainer}>
                <div className={styles.usersHeading}>
                    <h2 className={styles.userHeading}>Categories</h2>
                    <button
                        className={styles.addButton}
                        onClick={toggleAddCategoryModal}
                    >
                        Add Category
                    </button>
                </div>
                {!categoryLoading ? (
                    <Table
                        className="table-striped"
                        pagination={{
                            current: state.page,
                            pageSize: state.pageSize,
                            total: categoryCount,
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
                        dataSource={categories}
                        rowKey={(record) => record._id}
                    />
                ) : (
                    <Loader />
                )}
            </div>
            <AddCategoryModal
                showAddCategoryModal={showAddCategoryModal}
                toggleAddCategoryModal={toggleAddCategoryModal}
            />

            <EditCategoryModal
                categoryObj={categoryObj}
                showEditCategoryModal={showEditCategoryModal}
                toggleEditCategoryModal={toggleEditCategoryModal}
            />
        </>
    );
};

export default Categories;
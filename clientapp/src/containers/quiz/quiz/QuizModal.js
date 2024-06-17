import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteQuizCategory, getAllQuizCategories, getListQuizCategories, getQuizCategoryById } from "../../../redux/features/quizCategorySlice";
import { Table } from "antd";
import styles from "../../../assets/css/admin.module.css";
import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Button } from "reactstrap";
import Loader from "../../../components/loader/Loader";
import AddQuizModal from "../component/AddQuizModal";
import EditQuizModal from "../component/EditQuizModal";
import { deleteQuiz, getAllQuizzes, getQuizById } from "../../../redux/features/quizSlice";
import EditQuizUpdatedModal from "./component/EditQuizModal";
import AddQuizUpdatedModal from "./component/AddQuizModal";

const QuizModal = () => {
    const dispatch = useDispatch();
    const { loading, quizzes, quizzesCount } = useSelector((state) => state.quiz);
    const [quizCategoryObj, setQuizCategoryObj] = useState();

    const [showAddQuizCategoryModal, setShowAddQuizCategoryModal] = useState(false);
    const toggleAddQuizCategoryModal = () => setShowAddQuizCategoryModal(!showAddQuizCategoryModal);

    const [showEditQuizCategoryModal, setShowEditQuizCategoryModal] = useState(false);
    const toggleEditQuizCategoryModal = () => setShowEditQuizCategoryModal(!showEditQuizCategoryModal);

    const [state, setState] = useState({
        search: "",
        page: 1,
        pageSize: 10, 
    });

    useEffect(() => {
        dispatch(getAllQuizzes(state.search, state.page, state.pageSize));
    }, [dispatch, state.search, state.page, state.pageSize]);

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

    const handleAddClick = () => {
        dispatch(getListQuizCategories());
    }
    const handleEditClick = (id) => {
        dispatch(getListQuizCategories());
        dispatch(getQuizById(id));
        // dispatch(getAllQuizCategories(id))
        toggleEditQuizCategoryModal();
    };

    const handleDelete = (id) => {
        dispatch(deleteQuiz(id));
    };

    const columns = [
        {
            title: "Question",
            dataIndex: "question",
            align: "center",
            sorter: (a, b) => a.question.length - b.question.length,
        },
        {
            title: "Answer",
            dataIndex: "answer",
            align: "center",
            sorter: (a, b) => a.answer.length - b.answer.length,
        },
        {
            title: "Option",
            dataIndex: "option",
            align: "center",
            sorter: (a, b) => a.answer.length - b.answer.length,
            render: (text) => {
                console.log("texttexttext", text )
                return <span title={text}>
                    {text.join(", ")}
                    {/* {text} */}
                </span>
            },
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
            title: "Category",
            dataIndex: "categoryName",
            align: "center",
            sorter: (a, b) => a?.categoryName.length - b?.categoryName.length
        },
        {
            title: "Module Name",
            dataIndex: "moduleName",
            align: "center",
            sorter: (a, b) => a?.moduleName.length - b?.moduleName.length
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
                        className="dropdown-item px-2 text-success"
                        onClick={(e) => {
                            e.preventDefault();
                            handleEditClick(record._id);
                        }}
                    >
                        <LiaUserEditSolid />
                    </Button>
                    <Button
                        className="dropdown-item px-2 text-danger"
                        onClick={(e) => {
                            e.preventDefault();
                            handleDelete(record._id);
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
                    <h2 className={styles.userHeading}>Quiz</h2>
                    <button
                        className={styles.addButton}
                        onClick={(e)=>{
                            e.preventDefault()
                            toggleAddQuizCategoryModal()
                            handleAddClick()
                        }}
                    >
                        Add Quiz
                    </button>
                </div>
                {!loading ? (
                    <Table
                        className="table-striped"
                        pagination={{
                            current: state.page,
                            pageSize: state.pageSize,
                            total: quizzesCount,
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
                        dataSource={quizzes}
                        rowKey={(record) => record._id}
                    />
                ) : (
                    <Loader />
                )}
            </div>
            <AddQuizUpdatedModal
                state={state}
                showAddQuizCategoryModal={showAddQuizCategoryModal}
                toggleAddQuizCategoryModal={toggleAddQuizCategoryModal}
            />
            <EditQuizUpdatedModal  
                state={state}
                quizCategoryObj={quizCategoryObj}
                showEditQuizCategoryModal={showEditQuizCategoryModal}
                toggleEditQuizCategoryModal={toggleEditQuizCategoryModal}
            />
        </>
    );
};

export default QuizModal;

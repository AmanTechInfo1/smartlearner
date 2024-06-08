import React, { useEffect, useState } from "react";
import AddQuizModal from "./component/AddQuizModal";
import EditQuizModal from "./component/EditQuizModal";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import styles from "../../assets/css/admin.module.css";
import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Button } from "reactstrap";
import Loader from "../../components/loader/Loader";
import { deleteQuiz, getAllQuizzes, getQuizById } from "../../redux/features/quizSlice";


const QuizModal = () => {
    const dispatch = useDispatch();
 const { loading, quizzes, quizzesCount } = useSelector((state) => state.quiz);
    const [quizObj, setQuizObj] = useState();

    const [showAddQuizModal, setShowAddQuizModal] = useState(false);
    const toggleAddQuizModal = () => setShowAddQuizModal(!showAddQuizModal);

    const [showEditQuizModal, setShowEditQuizModal] = useState(false);
    const toggleEditQuizModal = () => setShowEditQuizModal(!showEditQuizModal);

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

    const handleEditClick = (id) => {
        dispatch(getQuizById(id));
        toggleEditQuizModal();
    };

    const handleDelete = (id) => {
        dispatch(deleteQuiz(id))
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            align: "center",
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: "Category",
            dataIndex: "category",
            align: "center",
            sorter: (a, b) => a.category.length - b.category.length,
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
                    <h2 className={styles.userHeading}>Quizzes</h2>
                    <button
                        className={styles.addButton}
                        onClick={toggleAddQuizModal}
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
            <AddQuizModal
                showAddQuizModal={showAddQuizModal}
                toggleAddQuizModal={toggleAddQuizModal}
            />
            <EditQuizModal
                quizObj={quizObj}
                showEditQuizModal={showEditQuizModal}
                toggleEditQuizModal={toggleEditQuizModal}
            />
        </>
    );
};

export default QuizModal;

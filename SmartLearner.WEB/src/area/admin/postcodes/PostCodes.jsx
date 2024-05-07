import React, { useEffect, useState } from "react";
import AddPostcodeModal from "./components/AddPostcodeModal";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../component/loader/Loader";
import { deletePostcode, getAllPostcodes } from "../../../features/postcodeSlice";
import { Table } from "antd";
import styles from '../css/AdminApp.module.css';
import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBin6Fill } from "react-icons/ri";
import EditPostcodeModal from "./components/EditPostcodeModal";
import { Button } from "reactstrap";
import { confirmAlert } from "react-confirm-alert";

const Postcodes = () => {
    const dispatch = useDispatch();
    const { postcodeLoading, postcodes, postcodeCount } = useSelector((state) => state.postcode);
    const [postcodeObj, setPostcodeObj] = useState();
    const [showAddPostcodeModal, setShowAddPostcodeModal] = useState(false);
    const toggleAddPostcodeModal = () => setShowAddPostcodeModal(!showAddPostcodeModal);

    const [showEditPostcodeModal, setShowEditPostcodeModal] = useState(false);
    const toggleEditPostcodeModal = () => setShowEditPostcodeModal(!showEditPostcodeModal);

    const [state, setState] = useState({
        search: "",
        page: 1,
        pageSize: 10,
    });

    useEffect(() => {
        dispatch(getAllPostcodes(state.search, state.page, state.pageSize))
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
        const postcode = postcodes.find((postcode) => postcode._id === id);
        setPostcodeObj(postcode);
        setShowEditPostcodeModal(true);
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
        dispatch(deletePostcode(id));
    }

    const columns = [
        {
            title: "Postcode",
            dataIndex: "postcode",
            align: "center",
            sorter: (a, b) => a.postcode.length - b.postcode.length,
        },
        {
            title: "City",
            dataIndex: "city",
            align: "center",
            sorter: (a, b) => a.city.length - b.city.length,
        },
        {
            title: "Country",
            dataIndex: "country",
            align: "center",
            sorter: (a, b) => a.country.length - b.country.length,
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
                    <h2 className={styles.userHeading}>Postcodes</h2>
                    <button
                        className={styles.addButton}
                        onClick={toggleAddPostcodeModal}
                    >
                        Add Postcode
                    </button>
                </div>
                {!postcodeLoading ? (
                    <Table
                        className="table-striped"
                        pagination={{
                            current: state.page,
                            pageSize: state.pageSize,
                            total: postcodeCount,
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
                        dataSource={postcodes}
                        rowKey={(record) => record._id}
                    />
                ) : (
                    <Loader />
                )}
            </div>
            <AddPostcodeModal
                showAddPostcodeModal={showAddPostcodeModal}
                toggleAddPostcodeModal={toggleAddPostcodeModal}
            />

            <EditPostcodeModal
                postcodeObj={postcodeObj}
                showEditPostcodeModal={showEditPostcodeModal}
                toggleEditPostcodeModal={toggleEditPostcodeModal}
            />
        </>
    );
};

export default Postcodes;
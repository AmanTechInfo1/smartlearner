import React, { useEffect, useState } from "react";
import styles from "../../assets/css/admin.module.css";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { LiaUserEditSolid } from "react-icons/lia";
import { deleteRole, getAllRoles, getRoleById, setRoleNull } from "../../redux/features/roleSlice";

import Loader from "../../components/loader/Loader";

import { Link } from "react-router-dom";
import OrderInvoice from "./component/OrderInvoice";

function Order() {
    const dispatch = useDispatch();
    const { roleLoading, roles, rolesCount } = useSelector((state) => state.roles);
    const [state, setState] = useState({
        search: "",
        page: 1,
        pageSize: 10,
    });

  

    const [OrderInvoiceModalOpen, setOrderInvoiceModalOpen] = useState(false);
    const toggleOrderInvoiceModal = () => setOrderInvoiceModalOpen(!OrderInvoiceModalOpen);

    const [OrderObj, setOrderObj] = useState();


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
       
        toggleOrderInvoiceModal();
    };

   

    const columns = [
        {
            title: "Order Name",
            dataIndex: "name",
            align: "center",
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: "User",
            dataIndex: "name",
            align: "center",
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: "Price",
            dataIndex: "price",
            align: "center",
            sorter: (a, b) => a.price - b.price,
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
                        onClick={(event) => {
                            event.preventDefault();
                            handleEditClick(record._id);
                        }}
                    >
                        <LiaUserEditSolid />
                    </Link>
                    {/* <Link
                        className="dropdown-item px-2 text-danger"
                        to={"#"}
                        onClick={() => {
                            handleDeleteClick(record._id);
                        }}>
                        <RiDeleteBin6Fill />
                    </Link> */}
                </div>
            ),
        },
    ];
    return (
        <>
            <div className={styles.usersContainer}>
                <div className={styles.usersHeading}>
                    <h2 className={styles.userHeading}>Orders</h2>
                    
                </div>
                {!roleLoading ? (
                    <Table
                        className="table-striped"
                        pagination={{
                            current: state.page,
                            pageSize: state.pageSize,
                            total: "",
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
                        dataSource={""}
                        rowKey={(record) => record._id}
                    />
                ) : (
                    <Loader />
                )}
            </div>
           <OrderInvoice OrderObj={OrderObj} 
          OrderInvoiceModalOpen={OrderInvoiceModalOpen}
          toggleOrderInvoiceModal={toggleOrderInvoiceModal} />
           
        </>
    )
}

export default Order
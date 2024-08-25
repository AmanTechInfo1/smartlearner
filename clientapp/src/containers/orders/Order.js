import React, { useEffect, useState } from "react";
import styles from "../../assets/css/admin.module.css";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { LiaUserEditSolid } from "react-icons/lia";
import { FaFileInvoice } from "react-icons/fa";
import { deleteRole, getAllRoles, getRoleById, setRoleNull } from "../../redux/features/roleSlice";

import Loader from "../../components/loader/Loader";

import { Link, useNavigate } from "react-router-dom";
import OrderInvoice from "./component/OrderInvoice";
import { getAllOrders } from "../../redux/features/orderSlice";

function Order() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, orderCount } = useSelector((state) => state.order);
    const orders = useSelector((state) => {
        return state.order.orders.map((itm) => {
            return {
                ...itm,
                userName: itm.user ? itm.user.username : "Unknown User",
                completeAddress: `${itm.streetAddress1}, ${itm.streetAddress2 ? itm.streetAddress2 + ", " : ""}${itm.city}, ${itm.county}, ${itm.postcode}`
            }
        });
    });
    
    const [state, setState] = useState({
        search: "",
        page: 1,
        pageSize: 10,
    });

  

    const [OrderInvoiceModalOpen, setOrderInvoiceModalOpen] = useState(false);
    const toggleOrderInvoiceModal = () => setOrderInvoiceModalOpen(!OrderInvoiceModalOpen);

    const [OrderObj, setOrderObj] = useState();


    useEffect(() => {
        dispatch(getAllOrders(state.search, state.page, state.pageSize));
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
            title: "Order Id",
            dataIndex: "orderNo",
            align: "center",
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: "User",
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
            title: "Sub Total",
            dataIndex: "subtotal",
            align: "center",
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: "Service Charge",
            dataIndex: "serviceCharge",
            align: "center",
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: "Total",
            dataIndex: "total",
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
                    <Link
                        onClick={(event) => {
                            event.preventDefault();
                            navigate(`/admin/orderInvoice/${record._id}`)
                        }}
                    >
                        <FaFileInvoice />
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
                {!loading ? (
                    <Table
                        className="table-striped"
                        pagination={{
                            current: state.page,
                            pageSize: state.pageSize,
                            total: orderCount,
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
                        dataSource={orders}
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
import React, { useEffect, useState } from "react";
import styles from "./products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../features/productSlice";
import AddProductModal from "./components/AddProductModal";
import EditProductModal from "./components/EditProductModal";
import { Table } from "antd";

const Products = () => {
    const dispatch = useDispatch();
    const { loading, products, productCount } = useSelector((state) => state.product);
    const [showAddProductModalOpen, setAddProductModalOpen] = useState(false);
    const toggleAddProductModal = () => setAddProductModalOpen(!showAddProductModalOpen);

    const [showEditProductModalOpen, setEditProductModalOpen] = useState(false);
    const toggleEditProductModal = () => setEditProductModalOpen(!showAddProductModalOpen);
    const [state, setState] = useState({
        search: "",
        page: 1,
        pageSize: 10,
    });

    useEffect(() => {
        dispatch(getAllProducts(state.search, state.page, state.pageSize))
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

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            align: "center",
            sorter: (a, b) => a.username.length - b.username.length,
        },
        {
            title: "Price",
            dataIndex: "price",
            align: "center",
            sorter: (a, b) => a.username.length - b.username.length,
        },
        {
            title: "Stock",
            dataIndex: "stock",
            align: "center",
            sorter: (a, b) => a.username.length - b.username.length,
        },
        {
            title: "Transmission",
            dataIndex: "transmission",
            align: "center",
            sorter: (a, b) => a.username.length - b.username.length,
        },
        {
            title: "Postcode",
            dataIndex: "postcode",
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
                    <h2 className={styles.userHeading}>Products</h2>
                    <button
                        className={styles.addButton}
                        onClick={toggleAddProductModal}
                    >
                        Add Product
                    </button>
                </div>
                <Table
                    className="table-striped"
                    pagination={{
                        current: state.page,
                        pageSize: state.pageSize,
                        total: productCount,
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
                    dataSource={products}
                    rowKey={(record) => record._id}
                />
            </div>
            <AddProductModal
                showAddProductModalOpen={showAddProductModalOpen}
                toggleAddProductModal={toggleAddProductModal}
            />
            <EditProductModal
                //roleObj={roleObj}
                showEditProductModalOpen={showEditProductModalOpen}
                toggleEditProductModal={toggleEditProductModal}
            />
        </>
    );
};

export default Products;
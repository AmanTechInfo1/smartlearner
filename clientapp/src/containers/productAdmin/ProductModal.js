import React, { useEffect, useState } from "react";
import styles from "../../assets/css/admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, deleteProduct } from "../../redux/features/productSlice";
import AddProductModel from "./components/AddProductModel";
import EditProductModal from "./components/EditProductModal";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { getListAreas } from "../../redux/features/areaSlice";

const ProductModal = () => {
    const dispatch = useDispatch();
    const { loading, products, productCount } = useSelector((state) => state.product);
    const [showAddProductModalOpen, setAddProductModalOpen] = useState(false);
    const [showEditProductModalOpen, setEditProductModalOpen] = useState(false);
    const [editProduct, setEditProduct] = useState(null);

    const toggleAddProductModal = () => setAddProductModalOpen(!showAddProductModalOpen);
    const toggleEditProductModal = () => setEditProductModalOpen(!showEditProductModalOpen);

    const [state, setState] = useState({
        search: "",
        page: 1,
        pageSize: 10,
    });

    useEffect(() => {
        dispatch(getAllProducts(state.search, state.page, state.pageSize));
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

    const handleAddUserClick = () =>{
        dispatch(getListAreas())
        toggleAddProductModal();
    }
    const handleEditClick = (id) => {
        const product = products.find((product) => product._id === id);
        setEditProduct(product);
        toggleEditProductModal();
    };

    const handleDeleteClick = (id) => {
        dispatch(deleteProduct(id));
    };

    const columns = [
        {
            title: "Name",
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
            title: "Stock",
            dataIndex: "stock",
            align: "center",
            sorter: (a, b) => a.stock - b.stock,
        },
        {
            title: "Transmission",
            dataIndex: "transmission",
            align: "center",
            sorter: (a, b) => a.transmission.length - b.transmission.length,
        },
        {
            title: "Postcode",
            dataIndex: "postcode",
            align: "center",
            sorter: (a, b) => a.postcode.length - b.postcode.length,
        },
        {
            title: "Action",
            align: "center",
            render: (text, record) => (
                <div className="d-flex justify-content-center" data-popper-placement="bottom-end">
                    <Link
                        to={"#"}
                        className="dropdown-item px-2 text-success"
                        onClick={() => handleEditClick(record._id)}
                    >
                        <LiaUserEditSolid />
                    </Link>
                    <Link
                        className="dropdown-item px-2 text-danger"
                        to={"#"}
                        onClick={() => handleDeleteClick(record._id)}
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
                    <button className={styles.addButton} onClick={handleAddUserClick}>
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
                        onChange: (page, pageSize) => setState({ ...state, page, pageSize }),
                    }}
                    style={{ overflowX: "auto" }}
                    columns={columns}
                    dataSource={products}
                    rowKey={(record) => record._id}
                />
            </div>
            <AddProductModel
                showAddProductModalOpen={showAddProductModalOpen}
                toggleAddProductModal={toggleAddProductModal}
            />
            <EditProductModal
                showEditProductModalOpen={showEditProductModalOpen}
                toggleEditProductModal={toggleEditProductModal}
                product={editProduct}
            />
        </>
    );
};

export default ProductModal;

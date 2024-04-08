import React, { useState } from "react";
import styles from "./css/AdminProducts.module.css";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

const AdminProductPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 100,
      category: "Category A",
      createDate: "2024-04-07",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      category: "Category B",
      createDate: "2024-04-06",
    },
    {
      id: 3,
      name: "Product 3",
      price: 100,
      category: "Category A",
      createDate: "2024-04-07",
    },
    {
      id: 4,
      name: "Product 4",
      price: 200,
      category: "Category B",
      createDate: "2024-04-06",
    },
    {
      id: 5,
      name: "Product 5",
      price: 100,
      category: "Category A",
      createDate: "2024-04-07",
    },
    {
      id: 6,
      name: "Product 6",
      price: 200,
      category: "Category B",
      createDate: "2024-04-06",
    },
    {
      id: 7,
      name: "Product 7",
      price: 100,
      category: "Category A",
      createDate: "2024-04-07",
    },
    {
      id: 8,
      name: "Product 8",
      price: 200,
      category: "Category B",
      createDate: "2024-04-06",
    },
    {
      id: 9,
      name: "Product 9",
      price: 100,
      category: "Category A",
      createDate: "2024-04-07",
    },
    {
      id: 10,
      name: "Product 10",
      price: 200,
      category: "Category B",
      createDate: "2024-04-06",
    },
    {
      id: 11,
      name: "Product 11",
      price: 100,
      category: "Category A",
      createDate: "2024-04-07",
    },
  ]);

  const [categories, setCategories] = useState([
    "Category A",
    "Category B",
    "Category C",
    "Category D",
    "Category E",
    "Category F",
    "Category G",
    "Category H",
    "Category I",
    "Category J",
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleRemoveProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
    setSelectedProducts(selectedProducts.filter((id) => id !== productId));
  };

  const handleAddCategory = () => {
    const newCategory = prompt("Enter the name of the new category:");
    if (newCategory) {
      setCategories([...categories, newCategory]);
    }
  };

  const handleSelectProduct = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  const handleRemoveSelectedProducts = () => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => !selectedProducts.includes(product.id))
    );
    setSelectedProducts([]);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.adminPageContainer}>
      <div className={styles.productTableContainer}>
        <h2>Product Details</h2>
        <div id={styles.productListTable}>
          <table className={styles.productTable}>
            <thead>
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Category</th>
                <th>Creation Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product) => (
                <tr key={product.id}>
                  <td data-label="Name:" >
                    <div id={styles.firstId}>
                      <input 
                       id={styles.productCheckbox}
                        type="checkbox"
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => handleSelectProduct(product.id)}
                      />
                      {product.name}
                    </div>
                  </td>
                  <td data-label="Price:">${product.price}</td>
                  <td data-label="Category:">{product.category}</td>
                  <td data-label="Date:">{product.createDate}</td>
                  <td>
                    <button>
                      <MdEdit />
                    </button>
                    <button
                      id={styles.productRemoveBtn}
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.pdButtons}>
        <p>Total Products: {products.length}</p>
          <div className={styles.pagination}>
            <button
              id={styles.paginationbtn}
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {" "}
              <FaLessThan />
              <FaLessThan />{" "}
            </button>
            <button
              id={styles.paginationbtn}
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastProduct >= products.length}
            >
              <FaGreaterThan />
              <FaGreaterThan />
            </button>
          </div>
          <button
            id={styles.productRemoveBtn}
            onClick={handleRemoveSelectedProducts}
          >
            <MdDelete />
          </button>
        </div>
      </div>

      <div className={styles.categoryTableContainer}>
        <h3>Categories</h3>
        <div id={styles.categoryTable}>
          <table className={styles.categoryTable}>
            <thead></thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category}>
                  <td>{category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button onClick={handleAddCategory}>
          <IoIosAddCircle />
        </button>
      </div>
    </div>
  );
};

export default AdminProductPage;

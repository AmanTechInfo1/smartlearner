import React from "react";

import { FaSearch } from "react-icons/fa";
import styles from "./Filter.module.css";




export default function FilterSection({ search, setSearch }) {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.searchBox}>
        <form >
          <input
            type="text"
            className={styles.searchInput}
            name="text"
            placeholder="Type to search..."
            value={search}
            onChange={handleSearchChange}
          />
          
        </form>
      </div>

      {/* 
      <div className={styles.filterCategory}>
        <h3>Category</h3>
        <div className={styles.filterCategories}>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={updateFilterValue}>
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.filteredPrice}>
        <h3> Search by Price</h3>
        <div className={styles.filteredPriceRange}>
          {" "}
          <p>
            {minPrice}- <span>--{price}--</span>-{maxPrice}
          </p>
          <input
            type="range"
            name="price"
            value={price}
            onChange={updateFilterValue}
          />
        </div>
      </div> */}
    </div>
  );
}

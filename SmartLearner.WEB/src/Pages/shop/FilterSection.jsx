import React from "react";
import { useFilterContext } from "../../component/Context/FilterContext";
import { FaSearch } from "react-icons/fa";
import styles from "./Filter.module.css";

export default function FilterSection() {
  const {
    filters: { text, category, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    return (newVal = ["all", ...new Set(newVal)]);
  };

  // we need to have the individual data of each in an array format
  const categoryData = getUniqueData(all_products, "category");

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.searchBox}>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className={styles.searchInput}
            name="text"
            placeholder="Type to search..."
            value={text}
            onChange={updateFilterValue}
          />
          <div className={styles.searchButton}>
            <FaSearch id={styles.searchBtn} />
          </div>
        </form>
      </div>

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
      </div>
    </div>
  );
}

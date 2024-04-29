import React from "react";
import { useFilterContext } from "../../component/Context/FilterContext";
import { FaCheck } from "react-icons/fa";
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
    <div className={styles.wrapper}>
      <div className={styles.filterSearch}>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className={styles.filterCategory}>
        <h3>Category</h3>
        <div>
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

      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <h2> {price}</h2>
        </p>
        <input
          type="range"
          name="price"
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      <div className="filter-clear">
        <button className="btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
}

// import React from 'react'
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../../component/Context/FilterContext";
import styles from "./Sort.module.css";

export default function Sort() {
  const { filter_products, sorting } = useFilterContext();
  return (
    <>
      {/* 1st column  */}
      <div className={styles.productData}>
        <p>{`${filter_products.length} Product Available`}</p>
      </div>

      {/* 3rd column  */}
      <div className={styles.sortSelection}>
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id={styles.sort}
            className={styles.sortSelectionStyle}
            onClick={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </>
  );
}

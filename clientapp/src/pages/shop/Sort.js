// import React from 'react'
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../../components/context/FilterContext";
import styles from "./Sort.module.css";

export default function Sort() {
  const { filter_products, sorting } = useFilterContext();
  return (
    <>
      <section className={styles.sortListProductSection}>
        {" "}
        <div className={styles.sortproductDataLength}>
          <p>{`${filter_products.length} Total Products`}</p>
        </div>
        <div className={styles.sortSelectionForm}>
          <form action="#">
            <label htmlFor="sort"></label>
            <select
              name="sort"
              id={styles.sort}
              className={styles.sortSelectionStyle}
              onClick={sorting}>
              <option value="lowest">Sort by price: Low to High</option>

              <option value="highest">Sort by price: High to Low</option>

              <option value="a-z">Sort by ascending: (A - Z)</option>

              <option value="z-a">sort by descending order: (Z - A)</option>
            </select>
          </form>
        </div>
      </section>
    </>
  );
}

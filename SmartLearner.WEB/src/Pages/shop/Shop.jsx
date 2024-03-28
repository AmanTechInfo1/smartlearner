// import React from 'react'
import FilterSection from "./FilterSection";
import ProductList from "./ProductList";
import styles from "./Shop.module.css";
import Sort from "./Sort";




export default function Shop() {

   

  return (
    <div className={styles.shopWrapper}>
      <div className={styles.shopPage}>
        <div className={styles.shopGridView}>
          <div>
            <FilterSection />
          </div>
          <section className={styles.productView}>
            <div className={styles.sortFilters}>
              <Sort />
            </div>
            <div className={styles.productsListView}>
              <ProductList />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

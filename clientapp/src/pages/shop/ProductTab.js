import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { products } from "../../assets/data/Products";

import styles from './ProductTab.module.css';
import { NavLink } from "react-router-dom";
import Products from "./Products";
import { useSelector } from "react-redux";

export default function ProductTab() {
  let filter_productsCategory = useSelector((state) => state.product.productsCategory);

  let filter_products_category = useSelector((state) => {
    return state.product.productsCategory.map((its) => its["_id"]);
  });

  // Limit the categories to only the first 4
  const limited_categories = filter_products_category.slice(0, 4);

  const [activeCategory, setActiveCategory] = useState(limited_categories[0] || "");
  const [activeCategoryProducts, setActiveCategoryProducts] = useState([]);

  useEffect(() => {
    if (activeCategory) {
      const filteredProducts = products.filter(
        (product) => product.category === activeCategory
      );
      setActiveCategoryProducts(filteredProducts);
    }
  }, [activeCategory]);

  const handleSelect = (category) => {
    setActiveCategory(category);
  };

  return (
    <Tabs
      activeKey={activeCategory}
      onSelect={handleSelect}
      className="mb-3"
      justify
    >
      {limited_categories.map((category) => (
        <Tab key={category} eventKey={category} title={category}>
          <div className={styles.productGrid}>
            {filter_productsCategory
              .filter((itm) => itm._id === activeCategory)
              .length > 0 &&
              filter_productsCategory
                .filter((itm) => itm._id === activeCategory)[0]["data"]
                .map((product, id) => (
                  <div className={styles.gridViewWrapper} key={id}>
                    <Products curElem={product} />
                  </div>
                ))}
          </div>

          <div className={styles.gridViewSection}>
            <div className={styles.veiwAllBtn}>
              <NavLink to="/shop">
                <button>View All</button>
              </NavLink>
            </div>
          </div>
        </Tab>
      ))}
    </Tabs>
  );
}

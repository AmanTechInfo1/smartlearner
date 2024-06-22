import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { products } from "../../assets/data/Products";

import styles from './ProductTab.module.css'
import { FaStar, FaAngleDoubleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Products from "./Products";
import { useSelector } from "react-redux";

export default function ProductTab() {

  let filter_productsCategory = useSelector((state) => {
    return state.product.productsCategory
  })

  let filter_products_category = useSelector((state) => {
    return state.product.productsCategory.map((its) => {
      return its["_id"]
    })
  })

  console.log(filter_productsCategory, "filter_productsCategoryfilter_productsCategory")



  const [activeCategory, setActiveCategory] = useState("");
  const [activeCategoryProducts, setActiveCategoryProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === activeCategory
    );
    setActiveCategoryProducts(filteredProducts);
  }, [activeCategory]);

  const handleSelect = (category) => {
    setActiveCategory(category);
  };


  console.log(filter_productsCategory.filter((itm) => itm._id == activeCategory), "filter_productsCategory[activeCategory]")

  return (
    <Tabs
      activeKey={activeCategory}
      onSelect={handleSelect}
      className="mb-3"
      justify>

      {filter_products_category.map((category) => (
        <Tab key={category} eventKey={category} title={category}>
          <div className={styles.productGrid}>
            <div style={{ display: "grid", gridTemplateColumns: "33.33% 33.33% 33.33%" }}>
              {filter_productsCategory.filter((itm) => itm._id == activeCategory).length > 0 && filter_productsCategory.filter((itm) => itm._id == activeCategory)[0]["data"].map((product, id) => (
                <div className={styles.gridViewWrapper}>
                 
                  <div>
                    <Products key={id} curElem={product} />
                  </div>

                  {/* </div> */}

                </div>
              ))}
            </div>
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

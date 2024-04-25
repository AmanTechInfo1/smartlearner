import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { products } from "../../assets/data/Products";
import styles from "./ProductTab.module.css";
import { FaStar, FaAngleDoubleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function ProductTab() {
  const [activeCategory, setActiveCategory] = useState("Intensive");
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

    return (
    <Tabs
      activeKey={activeCategory}
      onSelect={handleSelect}
      className="mb-3"
      justify>
      {["Theory", "SPT", "Intensive", "ADI", "SMT"].map((category) => (
        <Tab key={category} eventKey={category} title={category}>
          <div className={styles.productGrid}>
            {activeCategoryProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <img src={product.image} alt={product.name} />
                <div className={styles.productDetails}>
                  <h3>{product.name}</h3>
                  <div className={styles.ratingAndPrice}>
                    <div className={styles.rating}>
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={
                            index < product.rating ? styles.filled : ""
                          }>
                          <FaStar />
                        </span>
                      ))}
                    </div>
                    <p className={styles.price}>${product.price}</p>
                  </div>
                  <ul type="none" className={styles.cardDetails}>
                    <li>
                      <p>
                        Course Duration{" "}
                        <span id={styles.arrowIcon}>
                          {" "}
                          <FaAngleDoubleRight
                            id={styles.productmenuArrowIcon}
                          />
                        </span>
                      </p>{" "}
                      <p className={styles.duration}>{product.duration}</p>
                    </li>
                    <li>
                      <p>
                        Experience{" "}
                        <span id={styles.arrowIcon}>
                          {" "}
                          <FaAngleDoubleRight
                            id={styles.productmenuArrowIcon}
                          />
                        </span>
                      </p>{" "}
                      <p className={styles.duration}>{product.experience}</p>
                    </li>
                    <li>
                      <p>
                        Transmission{" "}
                        <span id={styles.arrowIcon}>
                          {" "}
                          <FaAngleDoubleRight
                            id={styles.productmenuArrowIcon}
                          />
                        </span>
                      </p>{" "}
                      <p className={styles.duration}>{product.Transmission}</p>
                    </li>
                  </ul>

                  <div className={styles.buttons}>
                    <button
                      className={styles.bookNow}
                      disabled={product.inCart}
                      onClick={() =>
                        addToCart(product.id, product.name, product.price)
                      }>
                      {product.inCart ? (
                        <span>In Cart</span>
                      ) : (
                        <span>Book Now</span>
                      )}
                    </button>
                    <NavLink to={`/product/${product.id}`}>
                      <button className={styles.more}>More Info</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.veiwAllBtn}>
            <NavLink to="/shop">
              <button>View All</button>
            </NavLink>
          </div>
        </Tab>
      ))}
    </Tabs>
  );
}

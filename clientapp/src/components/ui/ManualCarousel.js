import React, { useEffect, useState } from "react";
import LplateImg from "../../assets/images/L-Plate.jpg";
import starImg from "../../assets/images/star.png";
import cartImg from "../../assets/images/cartImg.png";
import styles from "../../pages/css/home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../redux/features/cartSlice";
import { getAllProductsCategory } from "../../redux/features/productSlice";

function ManualCorousel() {
  const [quantities, setQuantities] = useState({});
  const [expandedCategory, setExpandedCategory] = useState(""); // Initialize with an empty string or the ID of the category you want expanded

  const data = useSelector((state) => {
    return state.product.productsCategory;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsCategory("", 0));
  }, [dispatch]);

  const myCart = useSelector((state) => state.cart.cart || []);

  const handleExpandCategory = (id) => {
    if (expandedCategory === id) {
      setExpandedCategory(""); // Collapse the category if already expanded
    } else {
      setExpandedCategory(id); // Expand the clicked category
    }
  };

  const handleIncrease = (id, qty) => {
    dispatch(getIncreaseCart(id, qty));
  };

  const handleDecrease = (id, qty) => {
    dispatch(getDecreaseCart(id, qty));
  };

  const addToCart = (info, index) => {
    const productId = `${info.itemId}_${index}`;
    dispatch(
      getAddToCart({
        id: productId,
        count: 1,
        service: info.itemName,
        price: info.itemPrice,
      })
    );
  };

  const filteredData = (categoryName) => {
    return data.filter((item) => item._id === categoryName);
  };

  // Function to get the first category ID or identifier
  const getFirstCategoryId = () => {
    if (data.length > 0) {
      return data[0]._id; // Adjust this based on your data structure
    }
    return "";
  };

  useEffect(() => {
    // Set the first category as expanded initially
    const firstCategoryId = getFirstCategoryId();
    setExpandedCategory(firstCategoryId);
  }, [data]);

  return (
    <>
      <section className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {/* Display columns for categories "Theory", "One More", etc. */}
          {["One More", "Theory Packages"].map((categoryName) =>
            filteredData(categoryName).map((item) => (
              <div
                key={item.id}
                className={`${styles.carouselColumn} ${
                  expandedCategory === item._id ? styles.expanded : ""
                }`}
                onClick={() => handleExpandCategory(item._id)}
              >
                <div className={styles.carouselColumnHeading}>
                  <img src={LplateImg} alt="" />
                  <h2>{item._id}</h2>
                </div>
                {expandedCategory === item._id ? (
                  <ul type="none">
                    {item.data.map((info, index) => (
                      <li key={index} className={styles.expandedColData}>
                        <p>{info.name}</p>
                        <p>{info.price}</p>
                        <div className={styles.btnGroup}>
                          {myCart.length === 0 ||
                          !myCart.find(
                            (cartItem) =>
                              cartItem.id === `${info.itemId}_${index}`
                          ) ? (
                            <button
                              className={styles.bookNow}
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent collapse on button click
                                addToCart(info, index);
                              }}
                            >
                              Book Now
                            </button>
                          ) : (
                            <div id={styles.cartTableBtn}>
                              <div className={styles.quantityControl}>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation(); // Prevent collapse on button click
                                    handleDecrease(
                                      `${info.itemId}_${index}`,
                                      1
                                    );
                                  }}
                                  className={styles.decreaseButton}
                                >
                                  -
                                </button>
                                <span>
                                  {myCart.find(
                                    (cartItem) =>
                                      cartItem.id === `${info.itemId}_${index}`
                                  )?.count || 0}
                                </span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation(); // Prevent collapse on button click
                                    handleIncrease(
                                      `${info.itemId}_${index}`,
                                      1
                                    );
                                  }}
                                  className={styles.increaseButton}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                    <Link to="/cart">
                      <button className={styles.addtoCartButtoncontent}>
                        <img src={cartImg} alt="cartImg" />
                      </button>
                    </Link>
                  </ul>
                ) : (
                  <div
                    className={`${styles.carouselStarImgContainer} ${
                      expandedCategory === item._id ? styles.compress : ""
                    }`}
                  >
                    <img src={starImg} alt="starImg" />
                    <img src={starImg} alt="starImg" />
                    <img src={starImg} alt="starImg" />
                    <img src={starImg} alt="starImg" />
                    <img src={starImg} alt="starImg" />
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}

export default ManualCorousel;

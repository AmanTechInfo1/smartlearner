import React, { useEffect, useState } from "react";
import LplateImg from "../../assets/images/content3.png";
import yellowStarImg from "../../assets/images/yellowStar.png"; // Yellow star image
import cartImg from "../../assets/images/bannerCart.png";
import styles from "../../pages/css/home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../redux/features/cartSlice";
import { getAllProductsCategory } from "../../redux/features/productSlice";

function TheoryCorousel() {
  const [quantities, setQuantities] = useState({});
  const [expandedCategory, setExpandedCategory] = useState("");

  const data = useSelector((state) => state.product.productsCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsCategory("", 0));
  }, [dispatch]);

  const myCart = useSelector((state) => state.cart.cart || []);

  useEffect(() => {
    const offersManualCategory = data.find(
      (item) => item._id === "Theory Support"
    );
    if (offersManualCategory) {
      setExpandedCategory(offersManualCategory._id);
    }
  }, [data]);

  const handleExpandCategory = (id) => {
    if (expandedCategory === id) {
      setExpandedCategory("");
    } else {
      setExpandedCategory(id);
    }
  };

  const handleIncrease = (id, qty) => {
    dispatch(getIncreaseCart(id, qty));
  };

  const handleDecrease = (id, qty) => {
    dispatch(getDecreaseCart(id, qty));
  };

  const addToCart = (info, index) => {
    const productId = `${info._id}_${index}_${info.price}_${info.name}`;
    dispatch(
      getAddToCart({
        id: productId,
        count: 1,
        service: info.name,
        price: info.price,
      })
    );
  };

  const filteredData = (categoryName) => {
    return data.filter((item) => item._id === categoryName);
  };

  // Map category names to star colors
  const starColorMap = {
    "Theory Support": {
      starImg: yellowStarImg, // Assuming this category has a yellow star
      color: "#f1c40f", // Yellow color for text and button
    },
    // Add more categories if needed with respective star images and colors
  };

  return (
    <>
      <section className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {["Theory Support"].map((categoryName) =>
            filteredData(categoryName).map((item) => (
              <div
                key={item.id}
                className={`${styles.carouselColumn} ${
                  expandedCategory === item._id ? styles.expanded : ""
                }`}
                onClick={() => handleExpandCategory(item._id)}>
                <div className={styles.carouselColumnHeading}>
                  <img
                    id={styles.CorouselImgBanner}
                    src={LplateImg}
                    alt="Category Image"
                  />
                  <div className={styles.CorouselhaddingBanner}>
                    <h2
                      style={{
                        color:
                          starColorMap[item._id]?.color || "inherit", // Dynamic text color
                      }}>
                      {item._id === "Theory Support"
                        ? expandedCategory === item._id
                          ? "THEORY SUPPORT"
                          : "THEORY"
                        : "THEORY SUPPORT"}
                    </h2>
                    {expandedCategory === item._id && (
                      <Link to="/cart">
                        <span>
                          <img
                            id={styles.CorouselImgcart}
                            src={cartImg}
                            alt="cartImg"
                          />
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
                {expandedCategory === item._id ? (
                  <ul type="none">
                    {item.data.map((info, index) => (
                      <div key={index}>
                        <li className={styles.expandedColData}>
                          <span
                            style={{
                              color: "white",
                              backgroundColor: "black",
                              display: "flex",
                              justifyContent: "space-between",
                              maxWidth: "235px",
                              width: "100%",
                              borderRadius: "40px 0px 0px 40px",
                              padding: "8px",
                            }}>
                            <p style={{ marginBottom: "0px" }}>{info.name}</p>
                            <p style={{ marginBottom: "0px" }}>
                              £ {info.price}
                            </p>
                          </span>
                          <div className={styles.btnGroup}>
                            {myCart.length === 0 ||
                            !myCart.find(
                              (cartItem) =>
                                cartItem.id ===
                                `${info._id}_${index}_${info.price}_${info.name}`
                            ) ? (
                              <button
                                className={styles.bookNow}
                                style={{
                                  backgroundColor:
                                    starColorMap[item._id]?.color || "#ff0000", // Dynamic button color
                                }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  addToCart(info, index);
                                }}>
                                Book
                              </button>
                            ) : (
                              <div id={styles.cartTableBtn}>
                                <div className={styles.quantityControl}>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleDecrease(
                                        `${info._id}_${index}_${info.price}_${info.name}`,
                                        1
                                      );
                                    }}
                                    className={styles.decreaseButton}>
                                    -
                                  </button>
                                  <span>
                                    {myCart.find(
                                      (cartItem) =>
                                        cartItem.id ===
                                        `${info._id}_${index}_${info.price}_${info.name}`
                                    )?.count || 0}
                                  </span>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleIncrease(
                                        `${info._id}_${index}_${info.price}_${info.name}`,
                                        1
                                      );
                                    }}
                                    className={styles.increaseButton}>
                                    +
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </li>
                      </div>
                    ))}
                  </ul>
                ) : (
                  <div
                    className={`${styles.carouselStarImgContainer} ${
                      expandedCategory === item._id ? styles.compress : ""
                    }`}>
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
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

export default TheoryCorousel;

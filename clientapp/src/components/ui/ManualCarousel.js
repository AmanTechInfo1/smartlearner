import React, { useEffect, useState } from "react";
import LplateImg from "../../assets/images/content3.png";
import redStarImg from "../../assets/images/redStar.png"; // Assuming it's the correct image for Manual
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

function ManualCorousel() {
  const [expandedCategory, setExpandedCategory] = useState("");
  const data = useSelector((state) => state.product.productsCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsCategory("", 0));
  }, [dispatch]);

  const myCart = useSelector((state) => state.cart.cart || []);

  useEffect(() => {
    const offersManualCategory = data.find(
      (item) => item._id === "Offers manual"
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
    const productId = `${info._id}_${index}_${info.price}`;
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

  // Function to get the heading and button color based on the category
  const getColorForCategory = (categoryName) => {
    switch (categoryName) {
      case "Offers manual":
        return "#ff0000"; // Red for Offers manual
      case "manual":
        return "#ff0000"; // Red for manual
      default:
        return "gold"; // Default color for other categories
    }
  };

  return (
    <>
      <section className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {["Offers manual", "manual"].map((categoryName) =>
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
                        color: getColorForCategory(item._id), // Dynamic color for heading
                      }}>
                      {item._id === "Offers manual"
                        ? expandedCategory === item._id
                          ? "One Time Special Offer".toUpperCase()
                          : "Offers".toUpperCase()
                        : "Manual".toUpperCase()}
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
                            <p style={{ marginBottom: "0px",width:'35px' }}>
                              £ {info.price}
                            </p>
                          </span>
                          <div className={styles.btnGroup}>
                            {myCart.length === 0 ||
                            !myCart.find(
                              (cartItem) =>
                                cartItem.id ===
                                `${info._id}_${index}_${info.price}`
                            ) ? (
                              <button
                                className={styles.bookNow}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  addToCart(info, index);
                                }}
                                style={{
                                  backgroundColor: getColorForCategory(
                                    item._id
                                  ), // Dynamic color for button
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
                                        `${info._id}_${index}_${info.price}`,
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
                                        `${info._id}_${index}_${info.price}`
                                    )?.count || 0}
                                  </span>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleIncrease(
                                        `${info._id}_${index}_${info.price}`,
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
                    <img src={redStarImg} alt="starImg" />
                    <img src={redStarImg} alt="starImg" />
                    <img src={redStarImg} alt="starImg" />
                    <img src={redStarImg} alt="starImg" />
                    <img src={redStarImg} alt="starImg" />
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

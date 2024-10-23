import React, { useEffect, useState } from "react";
import LplateImg from "../../assets/images/content3.png";
import starImg from "../../assets/images/yellowStar.png"; // Assuming yellow star
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

function PassPlusCarousel() {
  const [expandedCategory, setExpandedCategory] = useState("");

  const data = useSelector((state) => state.product.productsCategory);
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.cart.cart || []);

  useEffect(() => {
    dispatch(getAllProductsCategory("", 0));
  }, [dispatch]);

  useEffect(() => {
    const offersManualCategory = data.find((item) => item._id === "Pass Plus");
    if (offersManualCategory) {
      setExpandedCategory(offersManualCategory._id);
    }
  }, [data]);

  const handleExpandCategory = (id) => {
    setExpandedCategory(expandedCategory === id ? "" : id);
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

  // Function to determine the button color based on the star color (yellow in this case)
  const getButtonColor = () => {
    return "#FFD700"; // Yellow color (matching the yellow star)
  };

  return (
    <>
      <section className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {["Pass Plus"].map((categoryName) =>
            filteredData(categoryName).map((item) => (
              <div
                key={item.id}
                className={`${styles.carouselColumn} ${
                  expandedCategory === item._id ? styles.expanded : ""
                }`}
                onClick={() => handleExpandCategory(item._id)}
              >
                <div className={styles.carouselColumnHeading}>
                  <img id={styles.CorouselImgBanner} src={LplateImg} alt="Category Image" />
                  <div className={styles.CorouselhaddingBanner}>
                    <h2 style={{ color: getButtonColor() }}>
                      {item._id === "Pass Plus"
                        ? expandedCategory === item._id
                          ? "PASS PLUS"
                          : "PASS PLUS"
                        : "PASS PLUS"}
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
                            }}
                          >
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
                                style={{
                                  backgroundColor: getButtonColor(), // Apply the yellow button color
                                  color: "white",
                                }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  addToCart(info, index);
                                }}
                              >
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
                                    className={styles.decreaseButton}
                                  >
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
                                    className={styles.increaseButton}
                                  >
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

export default PassPlusCarousel;

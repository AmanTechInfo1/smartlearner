import React, { useEffect, useState } from "react";
import LplateImg from "../../assets/images/1200px-Lplate.svg.png";
import redStarImg from "../../assets/images/redStar.png";
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
import { Toaster } from "react-hot-toast";

function ManualCarousel() {
  const wordLimit = 15;
  const [isReadMore, setIsReadMore] = useState(false);
  const handleReadMoreToggle = (index) => {
    setIsReadMore((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the specific section's read more state
    }));
  };

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

  const getColorForCategory = (categoryName) => {
    switch (categoryName) {
      case "Offers manual":
        return "#810000";
      case "manual":
        return "#810000";
      default:
        return "gold";
    }
  };

  // Separate category arrays
  const offerCategories = filteredData("Offers manual");
  const manualCategories = filteredData("manual");

  return (
    <section className={styles.carouselContainer}>
      <div>
        <Toaster />
      </div>
      <div className={styles.carousel}>
        {/* Rendering Offers Manual */}
        {offerCategories.map((item) => (
          <div
            style={{
              background: "linear-gradient(  135deg, #6f00ab, #e3aaff)",
            }}
            key={item.id}
            className={`${styles.carouselColumn} ${
              expandedCategory === item._id ? styles.expanded : ""
            }`}
            onClick={() => handleExpandCategory(item._id)}>
            {/* Header Section */}
            <div className={styles.carouselColumnHeading}>
              <img
                id={styles.CorouselImgBanner}
                src={LplateImg}
                alt="Category Image"
              />
              <div className={styles.CorouselhaddingBanner}>
                <h2 style={{ color: getColorForCategory(item._id) }}>
                  {expandedCategory === item._id
                    ? "Special Offer".toUpperCase()
                    : "Offers".toUpperCase()}
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

            {/* Render items for the selected category */}
            {expandedCategory === item._id ? (
              <ul type="none">
                {item.data.map((info, index) => (
                  <div>
                    <li key={index} className={styles.expandedColData}>
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
                        <p style={{ marginBottom: "0px", width: "43px" }}>
                          £ {info.price}
                        </p>
                      </span>

                      {/* Book Now / Quantity Controls */}
                      <div className={styles.btnGroup}>
                        {myCart.length === 0 ||
                        !myCart.find(
                          (cartItem) =>
                            cartItem.id === `${info._id}_${index}_${info.price}`
                        ) ? (
                          <button
                            className={styles.bookNow}
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart(info, index);
                            }}
                            style={{
                              backgroundColor: getColorForCategory(item._id),
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
                    <section
                      style={{
                        backgroundColor: "#a05dc1",
                        border: "1px solid #a9a9a9",
                      }}
                      className={styles.corouselDescription}>
                      <p>
                        {isReadMore[index]
                          ? info.description // Show full content
                          : info.description
                              .split(" ")
                              .slice(0, wordLimit)
                              .join(" ") + "..."}
                      </p>
                      {info.description.split(" ").length > wordLimit && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReadMoreToggle(index);
                          }}>
                          {isReadMore[index] ? "Read Less" : "Read More"}
                        </button>
                      )}
                    </section>
                  </div>
                ))}
              </ul>
            ) : (
              // Displaying the "star" icons when not expanded
              <div
                className={`${styles.carouselStarImgContainer} ${
                  expandedCategory === item._id ? styles.compress : ""
                }`}>
                {[...Array(5)].map((_, idx) => (
                  <img key={idx} src={redStarImg} alt="starImg" />
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Rendering Manual (Above £100) */}
        {manualCategories.map((item) => {
          const above100Products = item.data.filter(
            (product) => product.price > 100
          );

          return (
            <div
              key={item.id}
              style={{
                background: "linear-gradient(  135deg, #6f00ab, #e3aaff)",
              }}
              className={`${styles.carouselColumn} ${
                expandedCategory === item._id ? styles.expanded : ""
              }`}
              onClick={() => handleExpandCategory(item._id)}>
              {/* Header Section for Above £100 */}
              <div className={styles.carouselColumnHeading}>
                <img
                  id={styles.CorouselImgBanner}
                  src={LplateImg}
                  alt="Category Image"
                />
                <div className={styles.CorouselhaddingBanner}>
                  <h2 style={{ color: getColorForCategory(item._id) }}>
                    {expandedCategory === item._id
                      ? "package deals".toUpperCase()
                      : "package deals".toUpperCase()}
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

              {/* Render items above £100 */}
              {expandedCategory === item._id && above100Products.length > 0 && (
                <ul type="none">
                  {above100Products.map((info, index) => (
                    <div>
                      <li key={index} className={styles.expandedColData}>
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
                          <p style={{ marginBottom: "0px", width: "43px" }}>
                            £ {info.price}
                          </p>
                        </span>

                        {/* Book Now / Quantity Controls */}
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
                                backgroundColor: getColorForCategory(item._id),
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
                      <section
                        style={{
                          backgroundColor: "#a05dc1",
                          border: "1px white #a9a9a9",
                        }}
                        className={styles.corouselDescription}>
                        <p>
                          {isReadMore[index]
                            ? info.description // Show full content
                            : info.description
                                .split(" ")
                                .slice(0, wordLimit)
                                .join(" ") + "..."}
                        </p>
                        {info.description.split(" ").length > wordLimit && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleReadMoreToggle(index);
                            }}>
                            {isReadMore[index] ? "Read Less" : "Read More"}
                          </button>
                        )}
                      </section>
                    </div>
                  ))}
                </ul>
              )}
              {expandedCategory !== item._id && (
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
          );
        })}

        {/* Rendering Manual (Below £100) */}
        {manualCategories.map((item) => {
          const below100Products = item.data.filter(
            (product) => product.price <= 100
          );

          return (
            <div
              key={item.id}
              style={{
                background: "linear-gradient(  135deg, #6f00ab, #e3aaff)",
              }}
              className={`${styles.carouselColumn} ${
                expandedCategory === item._id ? styles.expanded : ""
              }`}
              onClick={() => handleExpandCategory(item._id)}>
              {/* Header Section for Below £100 */}
              <div className={styles.carouselColumnHeading}>
                <img
                  id={styles.CorouselImgBanner}
                  src={LplateImg}
                  alt="Category Image"
                />
                <div className={styles.CorouselhaddingBanner}>
                  <h2 style={{ color: getColorForCategory(item._id) }}>
                    {expandedCategory === item._id
                      ? "single lessons".toUpperCase()
                      : "single lessons".toUpperCase()}
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

              {/* Render items below £100 */}
              {expandedCategory === item._id && below100Products.length > 0 && (
                <ul type="none">
                  {below100Products.map((info, index) => (
                    <div>
                      <li key={index} className={styles.expandedColData}>
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
                          <p style={{ marginBottom: "0px", width: "43px" }}>
                            £ {info.price}
                          </p>
                        </span>

                        {/* Book Now / Quantity Controls */}
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
                                backgroundColor: getColorForCategory(item._id),
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
                      <section
                        style={{
                          backgroundColor: "#a05dc1",
                          border: "1px white #a9a9a9",
                        }}
                        className={styles.corouselDescription}>
                        <p>
                          {isReadMore[index]
                            ? info.description // Show full content
                            : info.description
                                .split(" ")
                                .slice(0, wordLimit)
                                .join(" ") + "..."}
                        </p>
                        {info.description.split(" ").length > wordLimit && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleReadMoreToggle(index);
                            }}>
                            {isReadMore[index] ? "Read Less" : "Read More"}
                          </button>
                        )}
                      </section>
                    </div>
                  ))}
                </ul>
              )}
              {expandedCategory !== item._id && (
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
          );
        })}
      </div>
    </section>
  );
}

export default ManualCarousel;

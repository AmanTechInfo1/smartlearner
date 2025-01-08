import React, { useEffect, useState } from "react";
import LplateImg from "../../assets/images/1200px-Lplate.svg.png";
import starImg from "../../assets/images/redStar.png";
import cartImg from "../../assets/images/bannerCart.png";
import styles from "../../pages/css/home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../redux/features/cartSlice";
import { getAllProductsCategory } from "../../redux/features/productSlice";



function IntensiveCorousel() {

  const navigate = useNavigate();

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
  const myCart = useSelector((state) => state.cart.cart || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsCategory("", 0));
  }, [dispatch]);

  useEffect(() => {
    const offersIntensiveCategory = data.find(
      (item) => item._id === "Intensive"
    );
    if (offersIntensiveCategory) {
      // Set default expanded category
      setExpandedCategory(`${offersIntensiveCategory._id}_below500`);
    }
  }, [data]);

  const handleExpand = (categoryId, productType) => {
    const categoryIdentifier = `${categoryId}_${productType}`;
    setExpandedCategory(
      expandedCategory === categoryIdentifier ? "" : categoryIdentifier
    );
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
      },navigate)
    );
  };

  const filteredData = (categoryName) => {
    return data.filter((item) => item._id === categoryName);
  };

  // Function to get the button color based on the category
  const getButtonColorForCategory = (categoryName) => {
    switch (categoryName) {
      case "Intensive":
        return "#ff9c08"; // LimeGreen color matching the green star for Intensive category
      default:
        return "black"; // Default color if category doesn't match
    }
  };

  return (
    <section className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {/* Display products below £500 */}
        {filteredData("Intensive").map((item) => {
          const below500Products = item.data.filter(
            (product) => product.price < 500
          );

          return (
            <div
              style={{
                background: "linear-gradient(135deg, rgb(155 73 0), #ffae88)",
              }}
              key={item.id}
              className={`${styles.carouselColumn} ${
                expandedCategory === `${item._id}_below500`
                  ? styles.expanded
                  : ""
              }`}
              onClick={() => handleExpand(item._id, "below500")} // Expand products below £500
            >
              <div className={styles.carouselColumnHeading}>
                <img
                  id={styles.CorouselImgBanner}
                  src={LplateImg}
                  alt="Category Image"
                />
                <div className={styles.CorouselhaddingBanner}>
                  <h2 style={{ color: "#ff9c08" }}>
                    {expandedCategory === `${item._id}_below500`
                      ? "MAN.-AUTO.-INTENSIVE"
                      : "INTENSIVE"}
                  </h2>
                  {expandedCategory === `${item._id}_below500` && (
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

              {expandedCategory === `${item._id}_below500` &&
                below500Products.length > 0 && (
                  <ul type="none">
                    {below500Products.map((info, index) => (
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
                            <p style={{ marginBottom: "0px", width: "49px" }}>
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
                                  backgroundColor: getButtonColorForCategory(
                                    item._id
                                  ),
                                  color: "white",
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
                            backgroundColor: "#d1945fbc",
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
                )}
              {expandedCategory !== `${item._id}_below500` && (
                <div
                  className={`${styles.carouselStarImgContainer} ${
                    expandedCategory === `${item._id}_below500`
                      ? styles.compress
                      : ""
                  }`}>
                  <img src={starImg} alt="starImg" />
                  <img src={starImg} alt="starImg" />
                  <img src={starImg} alt="starImg" />
                  <img src={starImg} alt="starImg" />
                  <img src={starImg} alt="starImg" />
                </div>
              )}
            </div>
          );
        })}

        {/* Display products between £500 and £1000 */}
        {filteredData("Intensive").map((item) => {
          const between500And1000Products = item.data.filter(
            (product) => product.price >= 500 && product.price <= 1400
          );

          return (
            <div
              style={{
                background: "linear-gradient(135deg, rgb(155 73 0), #ffae88)",
              }}
              key={item.id}
              className={`${styles.carouselColumn} ${
                expandedCategory === `${item._id}_between500_1000`
                  ? styles.expanded
                  : ""
              }`}
              onClick={() => handleExpand(item._id, "between500_1000")} // Expand products between £500 and £1000
            >
              <div className={styles.carouselColumnHeading}>
                <img
                  id={styles.CorouselImgBanner}
                  src={LplateImg}
                  alt="Category Image"
                />
                <div className={styles.CorouselhaddingBanner}>
                  <h2 style={{ color: "#ff9c08" }}>
                    {expandedCategory === `${item._id}_between500_1000`
                      ? "MAN.-AUTO.-INTENSIVE"
                      : "INTENSIVE"}
                  </h2>
                  {expandedCategory === `${item._id}_between500_1000` && (
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

              {expandedCategory === `${item._id}_between500_1000` &&
                between500And1000Products.length > 0 && (
                  <ul type="none">
                    {between500And1000Products.map((info, index) => (
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
                            <p style={{ marginBottom: "0px", width: "49px" }}>
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
                                  backgroundColor: getButtonColorForCategory(
                                    item._id
                                  ),
                                  color: "white",
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
                            backgroundColor: "#d1945fbc",
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
                )}
              {expandedCategory !== `${item._id}_between500_1000` && (
                <div
                  className={`${styles.carouselStarImgContainer} ${
                    expandedCategory === `${item._id}_between500_1000`
                      ? styles.compress
                      : ""
                  }`}>
                  <img src={starImg} alt="starImg" />
                  <img src={starImg} alt="starImg" />
                  <img src={starImg} alt="starImg" />
                  <img src={starImg} alt="starImg" />
                  <img src={starImg} alt="starImg" />
                </div>
              )}
            </div>
          );
        })}

        {/* Display products above £1000 */}
        {filteredData("Intensive").map((item) => {
          const above1000Products = item.data.filter(
            (product) => product.price > 1400
          );

          return (
            <div
              style={{
                background: "linear-gradient(135deg, rgb(155 73 0), #ffae88)",
              }}
              key={item.id}
              className={`${styles.carouselColumn} ${
                expandedCategory === `${item._id}_above1000`
                  ? styles.expanded
                  : ""
              }`}
              onClick={() => handleExpand(item._id, "above1000")} // Expand products above £1000
            >
              <div className={styles.carouselColumnHeading}>
                <img
                  id={styles.CorouselImgBanner}
                  src={LplateImg}
                  alt="Category Image"
                />
                <div className={styles.CorouselhaddingBanner}>
                  <h2 style={{ color: "#ff9c08" }}>
                    {expandedCategory === `${item._id}_above1000`
                      ? "MAN.-AUTO.-INTENSIVE"
                      : "INTENSIVE"}
                  </h2>
                  {expandedCategory === `${item._id}_above1000` && (
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

              {expandedCategory === `${item._id}_above1000` &&
                above1000Products.length > 0 && (
                  <ul type="none">
                    {above1000Products.map((info, index) => (
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
                            <p style={{ marginBottom: "0px", width: "49px" }}>
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
                                  backgroundColor: getButtonColorForCategory(
                                    item._id
                                  ),
                                  color: "white",
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
                            backgroundColor: "#d1945fbc",
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
                )}
              {expandedCategory !== `${item._id}_above1000` && (
                <div
                  className={`${styles.carouselStarImgContainer} ${
                    expandedCategory === `${item._id}_above1000`
                      ? styles.compress
                      : ""
                  }`}>
                  <img src={starImg} alt="starImg" />
                  <img src={starImg} alt="starImg" />
                  <img src={starImg} alt="starImg" />
                  <img src={starImg} alt="starImg" />
                  <img src={starImg} alt="starImg" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default IntensiveCorousel;

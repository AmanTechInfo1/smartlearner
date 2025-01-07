import React, { useEffect, useState } from "react";
import LplateImg from "../../assets/images/1200px-Lplate.svg.png";
import redStarImg from "../../assets/images/redStar.png";
import blueStarImg from "../../assets/images/blueStarImg.png";
import yellowStarImg from "../../assets/images/yellowStar.png";
import greenStarImg from "../../assets/images/greenStar.png";
import goldStarImg from "../../assets/images/goldstar.png";
import redCartImg from "../../assets/images/redCartImg.png";
import yellowCartImg from "../../assets/images/yellowCartImg.png";
import pinkCartImg from "../../assets/images/pinkCartImg.png";
import greenCartImg from "../../assets/images/greenCartImg.png";
import cartbanner from "../../assets/images/bannerCart.png";
import defaultCartImg from "../../assets/images/bannerCart.png";
import styles from "../../pages/css/home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../redux/features/cartSlice";
import { getAllProductsCategory } from "../../redux/features/productSlice";

function DrivingInstructorUI() {
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
      (item) => item._id === "instructor training part one"
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

  // Function to return the correct star image array based on category
  const getStarImagesForCategory = (categoryName) => {
    switch (categoryName) {
      case "instructor training part one":
        return [redStarImg, redStarImg, redStarImg, redStarImg, redStarImg];
      case "instructor training part two":
        return [
          blueStarImg,
          blueStarImg,
          blueStarImg,
          blueStarImg,
          blueStarImg,
        ];
      case "instructor training part three":
        return [
          yellowStarImg,
          yellowStarImg,
          yellowStarImg,
          yellowStarImg,
          yellowStarImg,
        ];

      default:
        return [
          goldStarImg,
          goldStarImg,
          goldStarImg,
          goldStarImg,
          goldStarImg,
        ];
    }
  };

  // Function to return the correct cart image based on category
  const getCartImageForCategory = (categoryName) => {
    switch (categoryName) {
      case "instructor training part one":
        return redCartImg;
      case "instructor training part two":
        return pinkCartImg;
      case "instructor training part three":
        return yellowCartImg;

      default:
        return defaultCartImg;
    }
  };

  // Function to return the corresponding color for each category heading and buttons
  const getHeadingAndButtonColorForCategory = (categoryName) => {
    switch (categoryName) {
      case "instructor training part one":
        return "red";
      case "instructor training part two":
        return "#00a1f1";
      case "instructor training part three":
        return "#FFD700";

      default:
        return "gold";
    }
  };
  const getBgColor = (categoryName) => {
    switch (categoryName) {
      case "instructor training part one":
        return "linear-gradient(  135deg, #6f00ab, #e3aaff)";
      case "instructor training part two":
        return "linear-gradient(  135deg, #010269, #008efa)";
      case "instructor training part three":
        return "linear-gradient(135deg, rgb(155 73 0), #ffae88)";

      default:
        return "gold";
    }
  };
  const getdescBgColor = (categoryName) => {
    switch (categoryName) {
      case "instructor training part one":
        return "#a05dc1";
      case "instructor training part two":
        return "#4b99f5";
      case "instructor training part three":
        return "#d1945fbc";

      default:
        return "gold";
    }
  };

  return (
    <>
      <section
        className={styles.carouselContainer}
        style={{ maxWidth: "1300px", margin: "0px auto" }}>
        <div
          className={styles.carousel}
          style={{ justifyContent: "flex-start" }}>
          {[
            "instructor training part one",
            "instructor training part two",
            "instructor training part three",
          ].map((categoryName) =>
            filteredData(categoryName).map((item) => (
              <div
                style={{
                  background: getBgColor(categoryName),
                }}
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
                          getHeadingAndButtonColorForCategory(categoryName),
                      }}>
                      Instructor Trainnig
                    </h2>
                    {expandedCategory === item._id && (
                      <Link to="/cart">
                        <span>
                          <img
                            id={styles.CorouselImgcart}
                            src={cartbanner} // Dynamic cart image
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
                            <p style={{ marginBottom: "0px", width: "49x" }}>
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
                                  backgroundColor:
                                    getHeadingAndButtonColorForCategory(
                                      categoryName
                                    ),
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
                            backgroundColor: getdescBgColor(categoryName),
                            border: "1px solid #a9a9a9",
                          }}
                          className={styles.corouselDescription}
                          sadxazdc>
                          {info.description}
                        </section>
                      </div>
                    ))}
                  </ul>
                ) : (
                  <div
                    className={`${styles.carouselStarImgContainer} ${
                      expandedCategory === item._id ? styles.compress : ""
                    }`}>
                    {getStarImagesForCategory(categoryName).map((star, idx) => (
                      <img key={idx} src={star} alt={`starImg${idx}`} />
                    ))}
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

export default DrivingInstructorUI;

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
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../redux/features/cartSlice";
import { getAllProductsCategory } from "../../redux/features/productSlice";
import {
  fetchPlans,
  createPayment,
  createUserSubscription,
  checkTrialEligibility,
  pdiApplyCouponCode,
  fetchUserSubscriptions,
} from "../../redux/features/subscriptionSlice";
import { toast } from "react-hot-toast";
import { PayPalButtons } from "@paypal/react-paypal-js";

function DrivingInstructorUI() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id; // Added optional chaining for safety
  const { plans, loading, error } = useSelector((state) => state.subscription);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserSubscriptions(userId));
    }
    dispatch(fetchPlans());
  }, [dispatch, userId]);

  const wordLimit = 15;
  const [isReadMore, setIsReadMore] = useState(false);
  const handleReadMoreToggle = (index) => {
    setIsReadMore((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the specific section's read more state
    }));
  };

  const [quantities, setQuantities] = useState({});
  const [expandedCategory, setExpandedCategory] = useState("");

  const data = useSelector((state) => state.product.productsCategory);

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
      getAddToCart(
        {
          id: productId,
          count: 1,
          service: info.name,
          price: info.price,
        },
        navigate
      )
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

  const handleCreateSubscription = async (plan) => {
    try {
      const order = await dispatch(createPayment(plan._id)).unwrap();
      console.log("Order received from payment creation:", order);
      if (order && order.id) {
        return order.id;
      } else {
        throw new Error("Order ID not received");
      }
    } catch (error) {
      console.error("Error during subscription creation:", error);
      throw error;
    }
  };

  const handleApprovePayment = async (plan, actions) => {
    try {
      const order = await actions.order.capture();
      console.log("Order captured:", order);
      if (!order || !order.id) {
        console.error("No order ID received");
        return;
      }

      const subscriptionData = {
        userId: userId,
        subscriptionId: plan._id,
        orderId: order.id,
        isTrial: false,
      };

      await dispatch(createUserSubscription(subscriptionData)).unwrap();
      console.log("User subscription created successfully.");
      navigate("/paymentSuccess");
      toast.success("subscription added");
    } catch (error) {
      console.error("Error during order approval:", error);
    }
  };
  const paidPlansComplete = plans.filter(
    (plan) => plan.planCategory === "Complete packages"
  );
  const paidPlansPartOne = plans.filter(
    (plan) => plan.planCategory === "pdi-part-one packages"
  );
  const paidPlansPartTwo = plans.filter(
    (plan) => plan.planCategory === "pdi-part-two packages"
  );
  const paidPlansPartThree = plans.filter(
    (plan) => plan.planCategory === "pdi-part-three packages"
  );
  return (
    <section
      className={styles.carouselContainer}
      style={{ maxWidth: "1300px", margin: "0px auto" }}>
      <div className={styles.carousel} style={{ justifyContent: "flex-start" }}>
        {["instructor training part one", "instructor training part two"].map(
          (categoryName) =>
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
                      {(() => {
                        switch (categoryName) {
                          case "instructor training part one":
                            return "Instructor Training";
                          case "instructor training part two":
                            return "Bolt on Training";

                          default:
                            return "Instructor Training"; // Default case
                        }
                      })()}
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

        {filteredData("instructor training part three").map((item) => {
          return (
            <div
              style={{
                background: getBgColor("instructor training part three"),
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
                      color: getHeadingAndButtonColorForCategory(
                        "instructor training part three"
                      ),
                    }}>
                    Online Courses
                  </h2>
                  {/* {expandedCategory === item._id && (
                      <Link to="/cart">
                        <span>
                          <img
                            id={styles.CorouselImgcart}
                            src={cartbanner} // Dynamic cart image
                            alt="cartImg"
                          />
                        </span>
                      </Link>
                    )} */}
                </div>
              </div>
              {expandedCategory === item._id ? (
                <ul type="none">
                  {paidPlansComplete.map((plan, index) => (
                    <div>
                      <li className={styles.expandedColData}>
                        <span
                          style={{
                            color: "white",
                            backgroundColor: "black",
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            borderRadius: "40px 0px 0px 40px",
                            padding: "8px",
                          }}>
                          <p style={{ marginBottom: "0px" }}>Complete Course</p>
                          <p style={{ marginBottom: "0px", width: "49x" }}>
                            £ {plan.price}
                          </p>
                        </span>
                        <div className={styles.btnGroup}>
                          <button
                            className={styles.bookNow}
                            style={{ backgroundColor: "#ffa500" }}
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate("/complete-subscription");
                            }}>
                            Book
                          </button>
                        </div>
                      </li>

                      <section
                        style={{
                          backgroundColor: getdescBgColor(
                            "instructor training part three"
                          ),
                          border: "1px solid #a9a9a9",
                        }}
                        className={styles.corouselDescription}>
                        <p>
                          {isReadMore["id111111"]
                            ? "Our SmartLearners online instructor training portal provides comprehensive theoretical modules for all three parts of the driving instructor qualification. This self-paced platform covers the key concepts and knowledge required for the Part 1 theory test, Part 2 driving ability test, and Part 3 instructional exam. It offers in-depth learning materials and resources to support your preparation, but please note that it does not include any practical training or test fees. The portal is a great way to build your foundation and study at your convenience before progressing to the next stages of your instructor journey." // Show full content
                            : "Our SmartLearners online instructor training portal provides comprehensive theoretical modules for all three parts of the driving instructor qualification. This self-paced platform covers the key concepts and knowledge required for the Part 1 theory test, Part 2 driving ability test, and Part 3 instructional exam. It offers in-depth learning materials and resources to support your preparation, but please note that it does not include any practical training or test fees. The portal is a great way to build your foundation and study at your convenience before progressing to the next stages of your instructor journey."
                                .split(" ")
                                .slice(0, 10)
                                .join(" ") + "..."}
                        </p>
                        {"Our SmartLearners online instructor training portal provides comprehensive theoretical modules for all three parts of the driving instructor qualification. This self-paced platform covers the key concepts and knowledge required for the Part 1 theory test, Part 2 driving ability test, and Part 3 instructional exam. It offers in-depth learning materials and resources to support your preparation, but please note that it does not include any practical training or test fees. The portal is a great way to build your foundation and study at your convenience before progressing to the next stages of your instructor journey.".split(
                          " "
                        ).length > 10 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleReadMoreToggle("id111111");
                            }}>
                            {isReadMore["id111111"] ? "Read Less" : "Read More"}
                          </button>
                        )}
                      </section>
                    </div>
                  ))}
                  {paidPlansPartOne.map((plan, index) => (
                    <div>
                      <li className={styles.expandedColData}>
                        <span
                          style={{
                            color: "white",
                            backgroundColor: "black",
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            borderRadius: "40px 0px 0px 40px",
                            padding: "8px",
                          }}>
                          <p style={{ marginBottom: "0px" }}>Online Part 1</p>
                          <p style={{ marginBottom: "0px", width: "49x" }}>
                            £ {plan.price}
                          </p>
                        </span>
                        <div className={styles.btnGroup}>
                          <button
                            className={styles.bookNow}
                            style={{ backgroundColor: "#ffa500" }}
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate("/part-one-subscription");
                            }}>
                            Book
                          </button>
                        </div>
                      </li>

                      <section
                        style={{
                          backgroundColor: getdescBgColor(
                            "instructor training part three"
                          ),
                          border: "1px solid #a9a9a9",
                        }}
                        className={styles.corouselDescription}>
                        <p>
                          {isReadMore["id2222222"]
                            ? "Our SmartLearners online instructor training portal provides comprehensive theoretical modules for all three parts of the driving instructor qualification. This self-paced platform covers the key concepts and knowledge required for the Part 1 theory test, Part 2 driving ability test, and Part 3 instructional exam. It offers in-depth learning materials and resources to support your preparation, but please note that it does not include any practical training or test fees. The portal is a great way to build your foundation and study at your convenience before progressing to the next stages of your instructor journey." // Show full content
                            : "Our SmartLearners online instructor training portal provides comprehensive theoretical modules for all three parts of the driving instructor qualification. This self-paced platform covers the key concepts and knowledge required for the Part 1 theory test, Part 2 driving ability test, and Part 3 instructional exam. It offers in-depth learning materials and resources to support your preparation, but please note that it does not include any practical training or test fees. The portal is a great way to build your foundation and study at your convenience before progressing to the next stages of your instructor journey."
                                .split(" ")
                                .slice(0, 10)
                                .join(" ") + "..."}
                        </p>
                        {"Our SmartLearners online instructor training portal provides comprehensive theoretical modules for all three parts of the driving instructor qualification. This self-paced platform covers the key concepts and knowledge required for the Part 1 theory test, Part 2 driving ability test, and Part 3 instructional exam. It offers in-depth learning materials and resources to support your preparation, but please note that it does not include any practical training or test fees. The portal is a great way to build your foundation and study at your convenience before progressing to the next stages of your instructor journey.".split(
                          " "
                        ).length > 10 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleReadMoreToggle("id2222222");
                            }}>
                            {isReadMore["id2222222"]
                              ? "Read Less"
                              : "Read More"}
                          </button>
                        )}
                      </section>
                    </div>
                  ))}
                  {paidPlansPartTwo.map((plan, index) => (
                    <div>
                      <li className={styles.expandedColData}>
                        <span
                          style={{
                            color: "white",
                            backgroundColor: "black",
                            display: "flex",
                            justifyContent: "space-between",

                            width: "100%",
                            borderRadius: "40px 0px 0px 40px",
                            padding: "8px",
                          }}>
                          <p style={{ marginBottom: "0px" }}>Online Part 2</p>
                          <p style={{ marginBottom: "0px", width: "49x" }}>
                            £ {plan.price}
                          </p>
                        </span>
                        <div className={styles.btnGroup}>
                          <button
                            className={styles.bookNow}
                            style={{ backgroundColor: "#ffa500" }}
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate("/part-two-subscription");
                            }}>
                            Book
                          </button>
                        </div>
                      </li>

                      <section
                        style={{
                          backgroundColor: getdescBgColor(
                            "instructor training part three"
                          ),
                          border: "1px solid #a9a9a9",
                        }}
                        className={styles.corouselDescription}>
                        <p>
                          {isReadMore["id33333333"]
                            ? "Our SmartLearners online instructor training portal provides comprehensive theoretical modules for all three parts of the driving instructor qualification. This self-paced platform covers the key concepts and knowledge required for the Part 1 theory test, Part 2 driving ability test, and Part 3 instructional exam. It offers in-depth learning materials and resources to support your preparation, but please note that it does not include any practical training or test fees. The portal is a great way to build your foundation and study at your convenience before progressing to the next stages of your instructor journey." // Show full content
                            : "Our SmartLearners online instructor training portal provides comprehensive theoretical modules for all three parts of the driving instructor qualification. This self-paced platform covers the key concepts and knowledge required for the Part 1 theory test, Part 2 driving ability test, and Part 3 instructional exam. It offers in-depth learning materials and resources to support your preparation, but please note that it does not include any practical training or test fees. The portal is a great way to build your foundation and study at your convenience before progressing to the next stages of your instructor journey."
                                .split(" ")
                                .slice(0, 10)
                                .join(" ") + "..."}
                        </p>
                        {"Our SmartLearners online instructor training portal provides comprehensive theoretical modules for all three parts of the driving instructor qualification. This self-paced platform covers the key concepts and knowledge required for the Part 1 theory test, Part 2 driving ability test, and Part 3 instructional exam. It offers in-depth learning materials and resources to support your preparation, but please note that it does not include any practical training or test fees. The portal is a great way to build your foundation and study at your convenience before progressing to the next stages of your instructor journey.".split(
                          " "
                        ).length > 10 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleReadMoreToggle("id33333333");
                            }}>
                            {isReadMore["id33333333"]
                              ? "Read Less"
                              : "Read More"}
                          </button>
                        )}
                      </section>
                    </div>
                  ))}
                  {paidPlansPartThree.map((plan, index) => (
                    <div>
                      <li className={styles.expandedColData}>
                        <span
                          style={{
                            color: "white",
                            backgroundColor: "black",
                            display: "flex",
                            justifyContent: "space-between",

                            width: "100%",
                            borderRadius: "40px 0px 0px 40px",
                            padding: "8px",
                          }}>
                          <p style={{ marginBottom: "0px" }}>Online Part 3</p>
                          <p style={{ marginBottom: "0px", width: "49x" }}>
                            £ {plan.price}
                          </p>
                        </span>
                        <div className={styles.btnGroup}>
                          <button
                            className={styles.bookNow}
                            style={{ backgroundColor: "#ffa500" }}
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate("/part-three-subscription");
                            }}>
                            Book
                          </button>
                        </div>
                      </li>

                      <section
                        style={{
                          backgroundColor: getdescBgColor(
                            "instructor training part three"
                          ),
                          border: "1px solid #a9a9a9",
                        }}
                        className={styles.corouselDescription}>
                        <p>
                          {isReadMore["id44444444"]
                            ? "Our SmartLearners online instructor training portal provides comprehensive theoretical modules for all three parts of the driving instructor qualification. This self-paced platform covers the key concepts and knowledge required for the Part 1 theory test, Part 2 driving ability test, and Part 3 instructional exam. It offers in-depth learning materials and resources to support your preparation, but please note that it does not include any practical training or test fees. The portal is a great way to build your foundation and study at your convenience before progressing to the next stages of your instructor journey." // Show full content
                            : "Our SmartLearners online instructor training portal provides comprehensive theoretical modules for all three parts of the driving instructor qualification. This self-paced platform covers the key concepts and knowledge required for the Part 1 theory test, Part 2 driving ability test, and Part 3 instructional exam. It offers in-depth learning materials and resources to support your preparation, but please note that it does not include any practical training or test fees. The portal is a great way to build your foundation and study at your convenience before progressing to the next stages of your instructor journey."
                                .split(" ")
                                .slice(0, 10)
                                .join(" ") + "..."}
                        </p>
                        {"Our SmartLearners online instructor training portal provides comprehensive theoretical modules for all three parts of the driving instructor qualification. This self-paced platform covers the key concepts and knowledge required for the Part 1 theory test, Part 2 driving ability test, and Part 3 instructional exam. It offers in-depth learning materials and resources to support your preparation, but please note that it does not include any practical training or test fees. The portal is a great way to build your foundation and study at your convenience before progressing to the next stages of your instructor journey.".split(
                          " "
                        ).length > 10 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleReadMoreToggle("id44444444");
                            }}>
                            {isReadMore["id44444444"]
                              ? "Read Less"
                              : "Read More"}
                          </button>
                        )}
                      </section>
                    </div>
                  ))}
                </ul>
              ) : (
                <div
                  className={`${styles.carouselStarImgContainer} ${
                    expandedCategory === item._id ? styles.compress : ""
                  }`}>
                  {getStarImagesForCategory(
                    "instructor training part three"
                  ).map((star, idx) => (
                    <img key={idx} src={star} alt={`starImg${idx}`} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default DrivingInstructorUI;

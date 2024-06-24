import React, { useEffect, useState } from "react";
import LplateImg from "../../assets/images/L-Plate.jpg";
import starImg from "../../assets/images/star.png";
import cartImg from "../../assets/images/cartImg.png";
import styles from "../../pages/css/home.module.css";
import { getAllProductsCategory } from "../../redux/features/productSpecialSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../redux/features/cartSlice";

function Carousel() {
  const [quantities, setQuantities] = useState({});

  const data = useSelector((state) => {
    return state.productSpecial.productsCategory;
  });
  const [expandedCol, setExpandedCol] = useState(0);

  const dispatch = useDispatch();

  const handleColumnClick = (id) => {
    if (expandedCol === id) {
      setExpandedCol(null); // Then set the expanded column to null after a short delay
    } else {
      setExpandedCol(id);
    }
  };
  useEffect(() => {
    dispatch(getAllProductsCategory("", 0, 0));
  }, [""]);

  const myCart = useSelector((state) => state.cart.cart || []);

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

  return (
    <>
      <section className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {data.map((item, index) => (
            <div
              key={index}
              className={`${styles.carouselColumn} ${
                expandedCol === index ? styles.expanded : ""
              }`}
              onClick={() => handleColumnClick(index)}
            >
              <div className={styles.carouselColumnHeading}>
                <img src={LplateImg} alt="" />
                <h2>{item.title}</h2>
              </div>
              {expandedCol === index ? (
                <ul type="none">
                  {item.fullInfo.map((info, index) => (
                    <li key={index} className={styles.expandedColData}>
                      <p>{info.itemName}</p>
                      <p>{info.itemPrice}</p>
                      <div className={styles.btnGroup}>
                        {myCart.length === 0 ||
                        !myCart.find(
                          (item) => item.id === `${info.itemId}_${index}`
                        ) ? (
                          <button
                            className={styles.bookNow}
                            // disabled={inCart}
                            onClick={() => addToCart(info, index)}
                          >
                            Book Now
                          </button>
                        ) : (
                          <div id={styles.cartTableBtn}>
                            {" "}
                            <div className={styles.quantityControl}>
                              <button
                                onClick={() =>
                                  handleDecrease(`${info.itemId}_${index}`, 1)
                                }
                                className={styles.decreaseButton}
                              >
                                -
                              </button>
                              <span>
                                {myCart.find(
                                  (item) =>
                                    item.id === `${info.itemId}_${index}`
                                )?.count || 0}
                              </span>
                              <button
                                onClick={() =>
                                  handleIncrease(`${info.itemId}_${index}`, 1)
                                }
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
                    expandedCol === index ? styles.compress : ""
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
          ))}
        </div>
      </section>
    </>
  );
}

export default Carousel;

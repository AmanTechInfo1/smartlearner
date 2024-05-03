import styles from "./css/Home.module.css";
import { useState } from "react";
import LplateImg from "..//assets/images/L-Plate.jpg";
import starImg from "../assets/images/star.png";
import cartImg from "../assets/images/cartImg.png";

const data = [
  {
    id: 1,
    title: "MANUAL",
    shortInfo: "Short info 1",
    fullInfo: [
      { itemName: "1 HOUR MANUAL", itemPrice: "$34", itemQuantity: 0 },
      { itemName: "1.5 HOUR MANUAL", itemPrice: "$51", itemQuantity: 0 },
      { itemName: "2 HOUR MANUAL", itemPrice: "$64", itemQuantity: 0 },
      { itemName: "5 HOUR MANUAL", itemPrice: "$160", itemQuantity: 0 },
      { itemName: "10 HOUR MANUAL", itemPrice: "$310", itemQuantity: 0 },
      { itemName: "20 HOUR MANUAL", itemPrice: "$600", itemQuantity: 0 },
    ],
  },
  {
    id: 2,
    title: "AUTOMATIC",
    shortInfo: "Short info 2",
    fullInfo: [
      { itemName: "1 HOUR AUTOMATIC", itemPrice: "$34", itemQuantity: 0 },
      { itemName: "1.5 HOUR AUTOMATIC", itemPrice: "$51", itemQuantity: 0 },
      { itemName: "2 HOUR AUTOMATIC", itemPrice: "$64", itemQuantity: 0 },
      { itemName: "5 HOUR AUTOMATIC", itemPrice: "$160", itemQuantity: 0 },
      { itemName: "10 HOUR AUTOMATIC", itemPrice: "$310", itemQuantity: 0 },
      { itemName: "20 HOUR AUTOMATIC", itemPrice: "$600", itemQuantity: 0 },
    ],
  },
  {
    id: 3,
    title: "THEORY",
    shortInfo: "Short info 3",
    fullInfo: [
      { itemName: "1 HOUR THEORY", itemPrice: "$34", itemQuantity: 0 },
      { itemName: "1.5 HOUR THEORY", itemPrice: "$51", itemQuantity: 0 },
      { itemName: "2 HOUR THEORY", itemPrice: "$64", itemQuantity: 0 },
      { itemName: "5 HOUR THEORY", itemPrice: "$160", itemQuantity: 0 },
      { itemName: "10 HOUR THEORY", itemPrice: "$310", itemQuantity: 0 },
      { itemName: "20 HOUR THEORY", itemPrice: "$600", itemQuantity: 0 },
    ],
  },
  {
    id: 4,
    title: "Intensive",
    shortInfo: "Short info 4",
    fullInfo: [
      { itemName: "1 HOUR THEORY", itemPrice: "$34", itemQuantity: 0 },
      { itemName: "1.5 HOUR THEORY", itemPrice: "$51", itemQuantity: 0 },
      { itemName: "2 HOUR THEORY", itemPrice: "$64", itemQuantity: 0 },
      { itemName: "5 HOUR THEORY", itemPrice: "$160", itemQuantity: 0 },
      { itemName: "10 HOUR THEORY", itemPrice: "$310", itemQuantity: 0 },
      { itemName: "20 HOUR THEORY", itemPrice: "$600", itemQuantity: 0 },
    ],
  },
];

export default function Carousel() {
  const [quantities, setQuantities] = useState({});
  const [expandedCol, setExpandedCol] = useState(data[0].id);

  const handleIncrease = (id, e) => {
    e.stopPropagation();
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const handleDecrease = (id, e) => {
    e.stopPropagation();
    if (quantities[id] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: prevQuantities[id] - 1,
      }));
    }
  };

  const handleColumnClick = (id) => {
    if (expandedCol === id) {
      setExpandedCol(null); // Then set the expanded column to null after a short delay
    } else {
      setExpandedCol(id);
    }
  };
  const calculateTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;

    data.forEach((item) => {
      item.fullInfo.forEach((info) => {
        totalQuantity += quantities[info.itemName] || 0;
        totalPrice +=
          (quantities[info.itemName] || 0) *
          parseFloat(info.itemPrice.replace("$", ""));
      });
    });

    return { totalQuantity, totalPrice };
  };

  const handleAddToCart = (item) => {
    const selectedItems = item.fullInfo
      .filter((info) => quantities[info.itemName] > 0)
      .map((info) => ({
        itemName: info.itemName,
        itemPrice: info.itemPrice,
        itemQuantity: quantities[info.itemName],
        itemTotalPrice:
          (quantities[info.itemName] || 0) *
          parseFloat(info.itemPrice.replace("$", "")),
      }));

    const totalItemsPrice = selectedItems.reduce(
      (acc, curr) => acc + curr.itemTotalPrice,
      0
    );

    const cartData = {
      selectedItems: selectedItems,
      totalItemsPrice: `$${totalItemsPrice.toFixed(2)}`,
    };

    console.log(cartData);
    setQuantities({});
  };

  return (
    <section className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {data.map((item) => (
          <div
            key={item.id}
            className={`${styles.carouselColumn} ${
              expandedCol === item.id ? styles.expanded : ""
            }`}
            onClick={() => handleColumnClick(item.id)}>
            <div className={styles.carouselColumnHeading}>
              <img src={LplateImg} alt="" />
              <h2>{item.title}</h2>
            </div>
            {expandedCol === item.id ? (
              <ul type="none">
                {item.fullInfo.map((info, index) => (
                  <li key={index} className={styles.expandedColData}>
                    <p>{info.itemName}</p>
                    <p>{info.itemPrice}</p>
                    <div className={styles.btnGroup}>
                      <button
                        className={styles.incrementBtn}
                        onClick={(e) => handleIncrease(info.itemName, e)}>
                        <span className={styles.materialSymbolsOutlined}>
                          +
                        </span>
                      </button>
                      {/* Display quantity for the specific item */}
                      <p className={styles.counterText}>
                        {quantities[info.itemName] || 0}
                      </p>
                      <button
                        className={styles.decrementBtn}
                        onClick={(e) => handleDecrease(info.itemName, e)}>
                        <span className={styles.materialSymbolsOutlined}>
                          -
                        </span>
                      </button>
                    </div>
                  </li>
                ))}
                <button
                  className={styles.addtoCartButtoncontent}
                  onClick={() => handleAddToCart(item)}>
                  <img src={cartImg} alt="cartImg" />
                </button>
              </ul>
            ) : (
              <div
                className={`${styles.carouselStarImgContainer} ${
                  expandedCol === item.id ? styles.compress : ""
                }`}>
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
  );
}

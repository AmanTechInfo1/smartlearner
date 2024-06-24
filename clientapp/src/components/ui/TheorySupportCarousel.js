import React, { useEffect, useState } from "react";
import LplateImg from "../../assets/images/L-Plate.jpg";
import starImg from "../../assets/images/star.png";
import cartImg from "../../assets/images/cartImg.png";
import styles from "../../pages/css/home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsCategory } from "../../redux/features/productSlice";




// const data = [
//   {
//     id: 1,
//     title: "Theory Support",
//     shortInfo: "Short info 1",
//     fullInfo: [
//       {
//         itemName: "1 HOUR MANUAL",
//         des: "Perfect for all levels, we support you in both hazard perception ",
//         itemPrice: "$34",
//         itemQuantity: 0,
//       },
//       { itemName: "1.5 HOUR MANUAL", itemPrice: "$51", itemQuantity: 0 },
//       { itemName: "2 HOUR MANUAL", itemPrice: "$64", itemQuantity: 0 },
//       { itemName: "5 HOUR MANUAL", itemPrice: "$160", itemQuantity: 0 },
//       { itemName: "10 HOUR MANUAL", itemPrice: "$310", itemQuantity: 0 },
//       { itemName: "20 HOUR MANUAL", itemPrice: "$600", itemQuantity: 0 },
//     ],
//   },
// ];

function TheorySupportCorousel() {
  const [quantities, setQuantities] = useState({});
  const data = useSelector((state)=>{
    return state.productSpecial.productsCategory
}) 
const [expandedCol, setExpandedCol] = useState(0);
const dispatch = useDispatch()

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
      setExpandedCol(null);
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

  useEffect(()=>{
    dispatch(getAllProductsCategory("",0,0))
},[""])

  return (
    <>
      <section className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {data.map((item) => (
            <div
              key={item.id}
              className={`${styles.carouselColumn} ${
                expandedCol === item.id ? styles.expanded : ""
              }`}
              onClick={() => handleColumnClick(item.id)}
            >
              <div className={styles.carouselColumnHeading}>
                <img src={LplateImg} alt="" />
                <h2>{item.title}</h2>
              </div>
              {expandedCol === item.id ? (
                <ul type="none">
                  {item.fullInfo.map((info, index) => (
                    <div>
                      <li key={index} className={styles.expandedColData}>
                        <h2>{info.des}</h2>
                      </li>
                      <li key={index} className={styles.expandedColData}>
                        <span style={{color:'black',backgroundColor:"white",display:'flex',justifyContent:"space-between",maxWidth:'300px',width:'100%',borderRadius:'6px',padding:'8px'}}>
                          {" "}
                          <p style={{marginBottom:"0px"}}>{info.itemName}</p>
                          <p style={{marginBottom:"0px"}}>{info.itemPrice}</p>
                        </span>

                        <div className={styles.btnGroup}>
                          <button
                            className={styles.incrementBtn}
                            onClick={(e) => handleIncrease(info.itemName, e)}
                          >
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
                            onClick={(e) => handleDecrease(info.itemName, e)}
                          >
                            <span className={styles.materialSymbolsOutlined}>
                              -
                            </span>
                          </button>
                        </div>
                      </li>
                    </div>
                  ))}
                  <button
                    className={styles.addtoCartButtoncontent}
                    onClick={() => handleAddToCart(item)}
                  >
                    <img src={cartImg} alt="cartImg" />
                  </button>
                </ul>
              ) : (
                <div
                  className={`${styles.carouselStarImgContainer} ${
                    expandedCol === item.id ? styles.compress : ""
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

export default TheorySupportCorousel;

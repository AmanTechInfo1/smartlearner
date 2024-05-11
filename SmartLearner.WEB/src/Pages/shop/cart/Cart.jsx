import React from "react";
import styles from "./Cart.module.css";
import { FaTrash } from "react-icons/fa";

import { useCartContext } from "../../../component/Context/CartContext";

export default function Cart() {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  // Function to merge products with the same ID
  const mergeCartItems = (cartItems) => {
    const mergedCart = cartItems.reduce((acc, currentItem) => {
      const existingItemIndex = acc.findIndex(
        (item) => item.id === currentItem.id
      );
      if (existingItemIndex !== -1) {
        acc[existingItemIndex].quantity += currentItem.quantity;
      } else {
        acc.push(currentItem);
      }
      return acc;
    }, []);
    return mergedCart;
  };

  // Preprocess cart data to merge items with the same ID
  const preprocessedCart = mergeCartItems(cart);

  if (cart.length === 0) {
    return <h3>No Cart in Item </h3>;
  }

  return (
    <div className={styles.shoopingCart}>
      <div className={styles.cartDetails}>
        <div className={styles.cartHeading}>
          <table>
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {preprocessedCart.map((item) => (
                <tr key={item.id}>
                  <td id={styles.productTd} data-label="Product:">
                    <div id={styles.tdName}>
                      {" "}
                      <img
                        src={item.image}
                        alt=""
                        height="40px"
                        width="50px"
                        id={styles.productTdImg}
                      />
                      <p>{item.name}</p>
                    </div>
                  </td>
                  <td id={styles.productTd} data-label="Price:">
                    ${item.price}
                  </td>
                  <td id={styles.productTd} data-label="Quantity:">
                    <div className={styles.quantityControl}>
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className={styles.decreaseButton}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleIncrease(item.id)}
                        className={styles.increaseButton}>
                        +
                      </button>
                    </div>
                  </td>
                  <td id={styles.productTd} data-label="Subtotal:">
                    ${item.price * item.quantity}
                  </td>
                  <td id={styles.productTd} data-label="Remove:">
                    <FaTrash
                      id={styles.removeTrash}
                      onClick={() => removeProduct(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

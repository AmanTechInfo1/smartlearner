import { createContext, useContext, useEffect, useReducer } from "react";

import CartReducer from "./Reducer/CartReducer";
const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("smartlearnerCart");
  if (localCartData === []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  //  cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (product, quantity) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { product, quantity },
    });
  };
  // to remove individual item ..........................
  const removeProduct = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  // to store data in localstorage

  useEffect(() => {
    localStorage.setItem("smartlearnerCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart"))["updatedCart"] : [],
    loading: false,
  },
  reducers: {
    IncreaseCart: (state, action) => {
      const updatedCart = state.cart.map(item =>
        item.id === action.payload.id ? { ...item, count: item.count + action.payload.count } : item
      );
      const itemExists = state.cart.some(item => item.id === action.payload.id);
      let datew = [...state.cart, action.payload];
      localStorage.setItem("cart", itemExists ? JSON.stringify({ updatedCart }) : JSON.stringify({ datew }));
      return {
        ...state,
        cart: itemExists ? updatedCart : [...state.cart, action.payload],
      };
    },
    DecreaseCart: (state, action) => {
      const updatedCart = state.cart
        .map(item => item.id === action.payload.id ? { ...item, count: item.count - action.payload.count } : item)
        .filter(item => item.count > 0);
      const itemExists = state.cart.some(item => item.id === action.payload.id);
      localStorage.setItem("cart", JSON.stringify({ updatedCart }));
      return {
        ...state,
        cart: updatedCart,
      };
    },
    AddToCart: (state, action) => {
      let updatedCart = [...state.cart, action.payload];
      localStorage.setItem("cart", JSON.stringify({ updatedCart }));
      return {
        ...state,
        cart: updatedCart,
      };
    },
    EmptyCart: (state) => {
      localStorage.removeItem("cart");
      return {
        ...state,
        cart: [],
      };
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const getIncreaseCart = (id, count) => async (dispatch) => {
  try {
    dispatch(setLoading());
    toast.success("Product added to cart");
    dispatch(IncreaseCart({ id, count }));
  } catch (error) {
    toast.error("Failed to add to cart");
  }
};

export const getDecreaseCart = (id, count) => async (dispatch) => {
  try {
    dispatch(setLoading());
    toast.success("Product quantity decreased in cart");
    dispatch(DecreaseCart({ id, count }));
  } catch (error) {
    toast.error("Failed to decrease in cart");
  }
};

export const getAddToCart = (product) => async (dispatch) => {
  try {
    dispatch(setLoading());
    toast.success("Product added to cart");
    dispatch(AddToCart(product));
  } catch (error) {
    toast.error("Failed to add to cart");
  }
};

export const emptyCart = () => async (dispatch) => {
  try {
    toast.success("Cart emptied successfully");
    dispatch(EmptyCart());
  } catch (error) {
    toast.error("Failed to empty cart");
  }
};

export const { IncreaseCart, DecreaseCart, AddToCart, EmptyCart, setLoading } = cartSlice.actions;

export default cartSlice.reducer;

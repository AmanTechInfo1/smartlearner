import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart"))["updatedCart"]:[],
        loading: false
    },
    reducers: {
        IncreaseCart: (state, action) => {

            console.log(action.payload, "action.payload.id")
            const updatedCart = state.cart.map(item =>
                item.id === action.payload.id ? { ...item, count: item.count + action.payload.count } : item
            );

            const itemExists = state.cart.some(item => item.id === action.payload.id);
            let datew = [...state.cart, action.payload]
            localStorage.setItem("cart", itemExists ? JSON.stringify({ updatedCart }) : JSON.stringify({ datew }))

            console.log({ updatedCart }, "JSON.parse")
            return {
                ...state,
                cart: itemExists ? updatedCart : [...state.cart, action.payload]
            };
        },
        DecreaseCart: (state, action) => {

            console.log(action.payload, "action.payload.id")

            const updatedCart = state.cart.map(item => item.id === action.payload.id ? { ...item, count: item.count - action.payload.count } : item);

            const itemExists = state.cart.some(item => item.id === action.payload.id);


            console.log({ updatedCart }, "JSON.parse")

            let datew = [...state.cart, action.payload]
            localStorage.setItem("cart", itemExists ? JSON.stringify({ updatedCart }) : JSON.stringify({ datew }))
            return {
                ...state,
                cart: itemExists ? updatedCart : [...state.cart, action.payload]
            };

        },
        AddToCart: (state, action) => {
            console.log(action.payload)
            // state.cart.push(action.payload);

            let updatedCart = [...state.cart, action.payload]
            console.log({ updatedCart }, "JSON.parse")
            localStorage.setItem("cart", JSON.stringify({ updatedCart }))
            return {
                ...state,
                cart: updatedCart
            };
            // localStorage.setItem("cart",itemExists ? updatedCart : [...state.cart, action.payload])

            // state.loading = false;
        },
        setLoading: (state) => {
            state.loading = true;
        },
    },
});

export const getIncreaseCart = (id, count) => async (dispatch) => {
    try {
        dispatch(setLoading());
        toast.success("Product Add in Cart");
        dispatch(IncreaseCart({ id, count }))

    } catch (error) {

        console.log(error, "errorerrorerror")
        toast.error("Failed To Add in Cart");
    }
};


export const getDecreaseCart = (id, count) => async (dispatch) => {
    try {
        dispatch(setLoading());
        toast.success("Product Decrease in Cart");
        dispatch(DecreaseCart({ id, count }))

    } catch (error) {
        console.log(error, "errorerrorerror")
        toast.error("Failed To Decrease in Cart");
    }
};


export const getAddToCart = (product) => async (dispatch) => {
    try {
        dispatch(setLoading());
        toast.success("Product Add To Cart in Cart");
        dispatch(AddToCart(product))

    } catch (error) {
        console.log(error, "errorerrorerror")
        toast.error("Failed To Add To Cart in Cart");
    }
};

export const {
    IncreaseCart,
    DecreaseCart,
    AddToCart,
    setLoading
} = cartSlice.actions;

export default cartSlice.reducer;

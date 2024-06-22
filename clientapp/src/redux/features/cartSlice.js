import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import httpHandler from "../../utils/httpHandler";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart"))["updatedCart"] : [],
        loading: false,
        hashcode: "",
        payment: localStorage.getItem("payment") ? JSON.parse(localStorage.getItem("payment")) : {}
    },
    reducers: {


        removeCart: (state, action) => {

            state.cart = [];
        },

        getCompleteCheckoutSuccess: (state, action) => {

            localStorage.setItem("payment", JSON.stringify(action.payload.order))
            state.payment = action.payload.order;
        },
        getCompleteCheckoutFailure: (state) => {
            state.payment = {};
        },
        getGenerateHashCodeSuccess: (state, action) => {
            state.hashcode = action.payload;
        },
        getGenerateHashCodeFailure: (state) => {
            state.hashcode = "";
        },
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
        // DecreaseCart: (state, action) => {

        //     console.log(action.payload, "action.payload.id")

        //     const updatedCart = state.cart.map(item => item.id === action.payload.id ? { ...item, count: item.count - action.payload.count } : item);

        //     const itemExists = state.cart.some(item => item.id === action.payload.id);


        //     console.log({ updatedCart }, "JSON.parse")

        //     let datew = [...state.cart, action.payload]
        //     localStorage.setItem("cart", itemExists ? JSON.stringify({ updatedCart }) : JSON.stringify({ datew }))
        //     return {
        //         ...state,
        //         cart: itemExists ? updatedCart : [...state.cart, action.payload]
        //     };

        // },


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
            console.log(action.payload)
            // state.cart.push(action.payload);
            let updatedCart = []
            if (state.cart) {
                updatedCart = [...state.cart, action.payload]
            } else {
                updatedCart = [action.payload]
            }

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

export const removingCart = (data, cb) => async (dispatch) => {
    try {
        dispatch(setLoading());
        dispatch(removeCart());

    } catch (error) {
        toast.error(error.message);
    }
}

export const getCompleteCheckout = (data, cb) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(
            `/api/order/CompleteCheckout`,
            data
        );
        if (response.data.success) {
            dispatch(getCompleteCheckoutSuccess(response.data.data));
            cb()

        } else {
            toast.error(response.data.message);
            dispatch(getCompleteCheckoutFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getCompleteCheckoutFailure());
    }
};



export const generateHashcodeCheckout = (data, cb, form, additionalData) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(
            `/api/order/generate_hash`,
            data
        );

        console.log(response.data.hash_code, "responseresponseresponse")
        if (response.data.hash_code) {
            dispatch(getGenerateHashCodeSuccess(response.data.hash_code));
            additionalData.value = response.data.hash_code;
            form.appendChild(additionalData);
            form.submit();

        } else {
            toast.error(response.data.message);
            dispatch(getGenerateHashCodeFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getGenerateHashCodeFailure());
    }
};


export const {
    IncreaseCart,
    DecreaseCart,
    AddToCart,
    setLoading,
    removeCart,
    getCompleteCheckoutSuccess,
    getCompleteCheckoutFailure,
    getGenerateHashCodeSuccess,
    getGenerateHashCodeFailure,
    EmptyCart
} = cartSlice.actions;


// export const { IncreaseCart, DecreaseCart, AddToCart, EmptyCart, setLoading } = cartSlice.actions;



export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        productCount: null,
        loading: false,
    },
    reducers: {
        getAllProductsSuccess: (state, action) => {
            state.products = action.payload.products;
            state.productCount = action.payload.totalCount;
            state.loading = false;
        },
        getAllProductsFailure: (state) => {
            state.categories = [];
            state.categoryCount = null;
            state.loading = false;
        },
        createProductSuccess: (state, action) => {
            state.categories.push(action.payload.category);
            state.categoryCount = action.payload.totalCount;
            state.loading = false;
        },
        createProductFailure: (state, action) => {
            state.loading = false;
        },
        setLoading: (state) => {
            state.loading = true;
        },
    },
});

export const getAllProducts = (search, page, pagesize) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/product/get-products?search=${search}&page=${page}&pagesize=${pagesize}`
        );
        if (response.data.success) {
            dispatch(getAllProductsSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getAllProductsFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getAllProductsFailure());
    }
};

export const createCategory = (data, reset, toggleAddCategoryModal) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/product/add-category`, data);
        if (response.data.success) {
            toast.success(response.data.message);
            reset();
            dispatch(createCategorySuccess(response.data.data));
            toggleAddCategoryModal();
        } else {
            toast.error(response.data.message);
            dispatch(createCategoryFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(createCategoryFailure());
    }
}

export const { getAllProductsSuccess, getAllProductsFailure, createProductSuccess, createProductFailure, setLoading } =
    productSlice.actions;

export default productSlice.reducer;
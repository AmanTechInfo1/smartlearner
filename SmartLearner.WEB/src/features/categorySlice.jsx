import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../utils/httpHandler";
import { toast } from "react-hot-toast";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: [],
        categoryCount: null,
        loading: false,
    },
    reducers: {
        getAllCategoriesSuccess: (state, action) => {
            state.categories = action.payload.categories;
            state.categoryCount = action.payload.totalCount;
            state.loading = false;
        },
        getAllCategoriesFailure: (state) => {
            state.categories = [];
            state.categoryCount = null;
            state.loading = false;
        },
        createCategorySuccess: (state, action) => {
            state.categories.push(action.payload.category);
            state.categoryCount = action.payload.totalCount;
            state.loading = false;
        },
        createCategoryFailure: (state, action) => {
            state.loading = false;
        },
        setLoading: (state) => {
            state.loading = true;
        },
    },
});

export const getAllCategories = (search, page, pagesize) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/product/get-categories?search=${search}&page=${page}&pagesize=${pagesize}`
        );
        if (response.data.success) {
            dispatch(getAllCategoriesSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getAllCategoriesFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getAllCategoriesFailure());
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

export const { getAllCategoriesSuccess, getAllCategoriesFailure, createCategorySuccess, createCategoryFailure, setLoading } =
    categorySlice.actions;

export default categorySlice.reducer;
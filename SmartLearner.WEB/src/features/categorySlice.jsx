import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../utils/httpHandler";
import { toast } from "react-hot-toast";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: [],
        categoryCount: null,
        categoryLoading: false,
    },
    reducers: {
        getAllCategoriesSuccess: (state, action) => {
            state.categories = action.payload.categories;
            state.categoryCount = action.payload.totalCount;
            state.categoryLoading = false;
        },
        getAllCategoriesFailure: (state) => {
            state.categories = [];
            state.categoryCount = null;
            state.categoryLoading = false;
        },
        createCategorySuccess: (state, action) => {
            state.categories.push(action.payload.category);
            state.categoryCount = action.payload.totalCount;
            state.categoryLoading = false;
        },
        createCategoryFailure: (state, action) => {
            state.categoryLoading = false;
        },
        updateCategorySuccess: (state, action) => {
            const updatedCategories = state.categories.map((category) =>
                category._id === action.payload.category._id ? action.payload.category : category
            );
            return {
                ...state,
                categories: updatedCategories,
                categoryLoading: false,
            };
        },
        updateCategoryFailure: (state, action) => {
            state.categoryLoading = false;
        },
        deleteCategorySuccess: (state, action) => {
            const categoryId = action.payload;
            state.categories = state.categories.filter(category => category._id !== categoryId);
            state.categoryCount = state.categoryCount - 1;
            state.categoryLoading = false;
        },
        deleteCategoryFailure: (state, action) => {
            state.categoryLoading = false;
        },
        setLoading: (state) => {
            state.categoryLoading = true;
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

export const updateCategory = (categoryID, data, reset, toggleEditCategoryModal) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/product/update-category?id=${categoryID}`, data);
        if (response.data.success) {
            toast.success(response.data.message);
            reset();
            toggleEditCategoryModal();
            dispatch(updateCategorySuccess(response.data.data));
        }
        else {
            toast.error(response.data.message);
            dispatch(updateCategoryFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(updateCategoryFailure());
    }
}

export const deleteCategory = (categoryID) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/product/delete-category?id=${categoryID}`);
        if (response.data.success) {
            toast.success(response.data.message);
            dispatch(deleteCategorySuccess(categoryID));
        }
        else {
            toast.error(response.data.message);
            dispatch(deleteCategoryFailure());
        }
    }
    catch (error) {
        toast.error(error.message);
        dispatch(deleteCategoryFailure());
    }
}
export const { getAllCategoriesSuccess, getAllCategoriesFailure, createCategorySuccess, createCategoryFailure, updateCategorySuccess,
    updateCategoryFailure, deleteCategorySuccess, deleteCategoryFailure, setLoading } =
    categorySlice.actions;

export default categorySlice.reducer;
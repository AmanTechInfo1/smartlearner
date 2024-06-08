import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const quizCategorySlice = createSlice({
    name: "quizCategory",
    initialState: {
        quizCategories: [],
        quizCategoriesCount: null,
        loading: false,
        quizCategoriesList: [],
        quizCategory: null,
    },
    reducers: {
        getAllQuizCategoriesSuccess: (state, action) => {
            state.quizCategories = action.payload.quizCategories;
            state.quizCategoriesCount = action.payload.totalCount;
            state.loading = false;
        },
        getAllQuizCategoriesFailure: (state) => {
            state.quizCategories = [];
            state.quizCategoriesCount = null;
            state.loading = false;
        },
        createQuizCategorySuccess: (state, action) => { 
            state.quizCategories.push(action.payload.quizCategory);
            state.quizCategoriesCount = action.payload.totalCount;
            state.loading = false;
        },
        createQuizCategoryFailure: (state) => {
            state.loading = false;
        },
        editQuizCategorySuccess: (state, action) => {
            const updatedQuizCategory = action.payload.quizCategory;
            state.quizCategories = state.quizCategories.map(quizCategory => quizCategory._id === updatedQuizCategory._id ? updatedQuizCategory : quizCategory);
            state.loading = false;
        },
        editQuizCategoryFailure: (state) => {
            state.loading = false;
        },
        getListQuizCategorySuccess: (state, action) => {
            state.quizCategoriesList = action.payload;
            state.loading = false;
        },
        getListQuizCategoryFailure: (state) => {
            state.quizCategoriesList = [];
            state.loading = false;
        },
        getQuizCategoryByIdSuccess: (state, action) => {
            state.quizCategory = action.payload;
            state.loading = false;
        },
        getQuizCategoryByIdFailure: (state) => {
            state.quizCategory = null;
            state.loading = false;
        },
        deleteQuizCategorySuccess: (state, action) => {
            const quizCategoryId = action.payload;
            state.quizCategories = state.quizCategories.filter(quizCategory => quizCategory._id !== quizCategoryId);
            state.quizCategoriesCount = state.quizCategoriesCount - 1;
            state.loading = false;
        },
        deleteQuizCategoryFailure: (state) => {
            state.loading = false;
        },
        setLoading: (state) => {
            state.loading = true;
        },
    },
});

export const getAllQuizCategories = (search, page, pagesize) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/product/all-quizCategories?search=${search}&page=${page}&pagesize=${pagesize}`
        );
        if (response.data.success) {
            dispatch(getAllQuizCategoriesSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getAllQuizCategoriesFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getAllQuizCategoriesFailure());
    }
};

export const createQuizCategory =
    (data, reset, toggleAddQuizCategoryModal) => async (dispatch) => {
        try {
            dispatch(setLoading());
            const response = await httpHandler.post(`/api/product/add-quizCategory`, data);
            if (response.data.success) {
                toast.success(response.data.message);
                reset();
                toggleAddQuizCategoryModal();
                dispatch(createQuizCategorySuccess(response.data.data));
            } else {
                toast.error(response.data.message);
                dispatch(createQuizCategoryFailure());
            }
        } catch (error) {
            toast.error(error.message);
            dispatch(createQuizCategoryFailure());
        }
    };

export const editQuizCategory = (id, data, toggleEditQuizCategoryModal) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/product/update-quizCategory/${id}`, data);
        if (response.data.success) {
            dispatch(editQuizCategorySuccess(response.data.data));
            toast.success(response.data.message);
            toggleEditQuizCategoryModal();
        } else {
            toast.error(response.data.message);
            dispatch(editQuizCategoryFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(editQuizCategoryFailure());
    }
};

export const getListQuizCategories = () => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(`/api/product/quizCategorylist`);
        if (response.data.success) {
            dispatch(getListQuizCategorySuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getListQuizCategoryFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getListQuizCategoryFailure());
    }
};

export const getQuizCategoryById = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(`/api/product/quizCategory/${id}`);
        if (response.data.success) {
            dispatch(getQuizCategoryByIdSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getQuizCategoryByIdFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getQuizCategoryByIdFailure());
    }
};

export const deleteQuizCategory = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/product/delete-quizCategory/${id}`);
        if (response.data.success) {
            dispatch(deleteQuizCategorySuccess(id));
        } else {
            toast.error(response.data.message);
            dispatch(deleteQuizCategoryFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(deleteQuizCategoryFailure());
    }
};

export const {
    getAllQuizCategoriesSuccess,
    getAllQuizCategoriesFailure,
    createQuizCategorySuccess,
    createQuizCategoryFailure,
    getListQuizCategorySuccess,
    getListQuizCategoryFailure,
    editQuizCategorySuccess,
    editQuizCategoryFailure,
    getQuizCategoryByIdSuccess,
    getQuizCategoryByIdFailure,
    deleteQuizCategorySuccess,
    deleteQuizCategoryFailure,
    setLoading
} = quizCategorySlice.actions;

export default quizCategorySlice.reducer;

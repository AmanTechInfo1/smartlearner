import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const quizSlice = createSlice({
    name: "quiz",
    initialState: {
        quizzes: [],
        quizzesCount: null,
        loading: false,
        quizzesList: [],
        quiz: null,
    },
    reducers: {
        getAllQuizzesSuccess: (state, action) => {
            state.quizzes = action.payload.quizzes;
            state.quizzesCount = action.payload.totalCount;
            state.loading = false;
        },
        getAllQuizzesFailure: (state) => {
            state.quizzes = [];
            state.quizzesCount = null;
            state.loading = false;
        },
        createQuizSuccess: (state, action) => { 
            state.quizzes.push(action.payload.quiz);
            state.quizzesCount = action.payload.totalCount;
            state.loading = false;
        },
        createQuizFailure: (state) => {
            state.loading = false;
        },
        editQuizSuccess: (state, action) => {
            const updatedQuiz = action.payload.quiz;
            state.quizzes = state.quizzes.map(quiz => quiz._id === updatedQuiz._id ? updatedQuiz : quiz);
            state.loading = false;
        },
        editQuizFailure: (state) => {
            state.loading = false;
        },
        getListQuizSuccess: (state, action) => {
            state.quizzesList = action.payload;
            state.loading = false;
        },
        getListQuizFailure: (state) => {
            state.quizzesList = [];
            state.loading = false;
        },
        getQuizByIdSuccess: (state, action) => {
            state.quiz = action.payload;
            state.loading = false;
        },
        getQuizByIdFailure: (state) => {
            state.quiz = null;
            state.loading = false;
        },
        deleteQuizSuccess: (state, action) => {
            const quizId = action.payload;
            state.quizzes = state.quizzes.filter(quiz => quiz._id !== quizId);
            state.quizzesCount = state.quizzesCount - 1;
            state.loading = false;
        },
        deleteQuizFailure: (state) => {
            state.loading = false;
        },
        setLoading: (state) => {
            state.loading = true;
        },
    },
});

export const getAllQuizzes = (search, page, pagesize) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/quiz/all-quizzes?search=${search}&page=${page}&pagesize=${pagesize}`
        );
        if (response.data.success) {
            dispatch(getAllQuizzesSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getAllQuizzesFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getAllQuizzesFailure());
    }
};

export const createQuiz = (data, reset, toggleAddQuizModal) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/quiz/add-quiz`, data);
        if (response.data.success) {
            toast.success(response.data.message);
            reset();
            toggleAddQuizModal();
            dispatch(createQuizSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(createQuizFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(createQuizFailure());
    }
};

export const editQuiz = (id, data, toggleEditQuizModal) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/quiz/update-quiz/${id}`, data);
        if (response.data.success) {
            dispatch(editQuizSuccess(response.data.data));
            toast.success(response.data.message);
            toggleEditQuizModal();
        } else {
            toast.error(response.data.message);
            dispatch(editQuizFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(editQuizFailure());
    }
};

export const getListQuizzes = () => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(`/api/quiz/quizlist`);
        if (response.data.success) {
            dispatch(getListQuizSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getListQuizFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getListQuizFailure());
    }
};

export const getQuizById = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(`/api/quiz/quiz/${id}`);
        if (response.data.success) {
            dispatch(getQuizByIdSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getQuizByIdFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getQuizByIdFailure());
    }
};

export const deleteQuiz = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/quiz/delete-quiz/${id}`);
        if (response.data.success) {
            dispatch(deleteQuizSuccess(id));
        } else {
            toast.error(response.data.message);
            dispatch(deleteQuizFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(deleteQuizFailure());
    }
};

export const {
    getAllQuizzesSuccess,
    getAllQuizzesFailure,
    createQuizSuccess,
    createQuizFailure,
    getListQuizSuccess,
    getListQuizFailure,
    editQuizSuccess,
    editQuizFailure,
    getQuizByIdSuccess,
    getQuizByIdFailure,
    deleteQuizSuccess,
    deleteQuizFailure,
    setLoading
} = quizSlice.actions;

export default quizSlice.reducer;

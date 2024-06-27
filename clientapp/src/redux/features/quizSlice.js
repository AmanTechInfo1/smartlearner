import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const quizSlice = createSlice({
    name: "quiz",
    initialState: {
        quizzes: [],
        quizzesCount: 0,
        quizzesModule: [],
        quizzesModuleCount: 0,
        loading: false,
        quizzesList: [],
        oneQuizOutput:{},
        oneQuiz:{},
        quizResult:[],
        quiz: null,
        oneQuizModule:{},
    },
    reducers: {
        getAllQuizzesSuccess: (state, action) => {
            state.quizzes = action.payload.quizzes;
            state.quizzesCount = action.payload.totalCount;
            state.loading = false;
        },
        getAllQuizzesFailure: (state) => {
            state.quizzes = [];
            state.quizzesCount = 0;
            state.loading = false;
        },
        getAllQuizzesModuleSuccess: (state, action) => {
            state.quizzesModule = action.payload.quizzes;
            state.quizzesModuleCount = action.payload.totalCount;
            state.loading = false;
        },
        getAllQuizzesModuleFailure: (state) => {
            state.quizzesModule = [];
            state.quizzesModuleCount = 0;
            state.loading = false;
        },
        getQuizRandomQuestionSuccess: (state, action) => {
            state.oneQuiz = action.payload;
            state.loading = false;
        },
        getQuizRandomQuestionFailure: (state) => {
            state.oneQuiz = {};
            state.loading = false;
        },
        getQuizResultSuccess: (state, action) => {
            state.quizResult = action.payload;
            state.loading = false;
        },
        getQuizResultFailure: (state) => {
            state.quizResult = [];
            state.loading = false;
        },

        getQuizRandomQuestionOutputSuccess: (state, action) => {
            state.oneQuizOutput = action.payload;
            state.loading = false;
        },
        getQuizRandomQuestionOutputFailure: (state) => {
            state.oneQuizOutput = {};
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
            // const updatedQuiz = action.payload.quiz;
            // state.quizzes = state.quizzes.map(quiz => quiz._id === updatedQuiz._id ? updatedQuiz : quiz);
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

        
        getQuizModuleByIdSuccess: (state, action) => {
            state.oneQuizModule = action.payload;
            state.loading = false;
        },
        getQuizModuleByIdFailure: (state) => {
            state.oneQuizModule = {}
            state.loading = false;
        },
        deleteQuizSuccess: (state, action) => {
            // const quizId = action.payload;
            // state.quizzes = state.quizzes.filter(quiz => quiz._id !== quizId);
            // state.quizzesCount = state.quizzesCount - 1;
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


export const getRandomQuestion = (cid,id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/quiz/getRandomQuestion/${cid}${id?"/"+id:""}`
        );
        if (response.data.success) {
            dispatch(getQuizRandomQuestionSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getQuizRandomQuestionFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getQuizRandomQuestionFailure());
    }
};

export const getRandomQuestionByName = (cid,id=undefined) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/quiz/getRandomQuestionCatName/${cid}${id?"/"+id:""}`
        );
        if (response.data.success) {
            dispatch(getQuizRandomQuestionSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getQuizRandomQuestionFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getQuizRandomQuestionFailure());
    }
};



export const getQuizResult = (type) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/quiz/getQuizResult/${type}`
        );
        if (response.data.success) {
            dispatch(getQuizResultSuccess(response.data.data.quizResult));
        } else {
            toast.error(response.data.message);
            dispatch(getQuizResultFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getQuizResultFailure());
    }
};





export const getAnswerRandomQuestion = (data) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(
            `/api/quiz/answerQuestion`,data
        );
        if (response.data.success) {
            dispatch(getQuizRandomQuestionOutputSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getQuizRandomQuestionOutputFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getQuizRandomQuestionOutputFailure());
    }
};



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

export const createQuiz = (data, reset, toggleAddQuizModal,state) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/quiz/addQuestion`, data);
        if (response.data.success) {
            toast.success(response.data.message);
            reset();
            toggleAddQuizModal();
            dispatch(getAllQuizzes(state.search, state.page, state.pageSize))
            // dispatch(createQuizSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(createQuizFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(createQuizFailure());
    }
};

export const editQuiz = (id, data,reset, toggleEditQuizModal,state) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/quiz/updateQuestion/${id}`, data);
        if (response.data.success) {
            dispatch(editQuizSuccess(response.data.data));
            toast.success(response.data.message);
            reset()
            toggleEditQuizModal();
            dispatch(getAllQuizzes(state.search, state.page, state.pageSize))
        } else {
            toast.error(response.data.message);
            dispatch(editQuizFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(editQuizFailure());
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


export const getAllQuizzesModule = (search, page, pagesize) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/quiz/all-quizzesModule?search=${search}&page=${page}&pagesize=${pagesize}`
        );
        if (response.data.success) {
            dispatch(getAllQuizzesModuleSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getAllQuizzesFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getAllQuizzesFailure());
    }
};



export const createQuizModule = (data, reset, toggleAddQuizModal,state) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/quiz/addquizModule`, data);
        if (response.data.success) {
            toast.success(response.data.message);
            reset();
            toggleAddQuizModal();
            dispatch(getAllQuizzesModule(state.search, state.page, state.pageSize))
            // dispatch(createQuizSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(createQuizFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(createQuizFailure());
    }
};

export const editQuizModule = (id, data,reset, toggleEditQuizModal,state) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/quiz/updatequizModule/${id}`, data);
        if (response.data.success) {
            // dispatch(editQuizSuccess(response.data.data));
            toast.success(response.data.message);
            reset()
            toggleEditQuizModal();
            dispatch(getAllQuizzesModule(state.search, state.page, state.pageSize))
        } else {
            toast.error(response.data.message);
            dispatch(editQuizFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(editQuizFailure());
    }
};



export const deleteQuizModule = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(`/api/quiz/delete-quizModule/${id}`);
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

export const getQuizModuleListQuizzes = () => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(`/api/quiz/quizModulelist`);
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

export const getQuizModuleById = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(`/api/quiz/quizModule/${id}`);
        if (response.data.success) {
            dispatch(getQuizModuleByIdSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getQuizModuleByIdFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getQuizByIdFailure());
    }
};

export const {
    getAllQuizzesSuccess,
    getAllQuizzesFailure,
    getAllQuizzesModuleSuccess,
    getAllQuizzesModuleFailure,
    getQuizRandomQuestionSuccess,
    getQuizRandomQuestionFailure,
    getQuizResultSuccess,
    getQuizResultFailure,
    getQuizRandomQuestionOutputSuccess,
    getQuizRandomQuestionOutputFailure,
    createQuizSuccess,
    createQuizFailure,
    getListQuizSuccess,
    getListQuizFailure,
    editQuizSuccess,
    editQuizFailure,
    getQuizByIdSuccess,
    getQuizByIdFailure,
    getQuizModuleByIdSuccess,
    getQuizModuleByIdFailure,
    deleteQuizSuccess,
    deleteQuizFailure,
    setLoading
} = quizSlice.actions;

export default quizSlice.reducer;

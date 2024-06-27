import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        Quizcards: [],
        cards: [],
        roleLoading: false
    },
    reducers: {
        getDashboardSuccess: (state, action) => {
            state.cards = action.payload;
            state.roleLoading = false;
        },
        getDashboardFailure: (state, action) => {
            state.cards = {};
            state.roleLoading = false;
        },
        getQuizDashboardSuccess: (state, action) => {
            state.Quizcards = action.payload.quiz;
            state.roleLoading = false;
        },
        getQuizDashboardFailure: (state, action) => {
            state.Quizcards = [];
            state.roleLoading = false;
        },
        setLoading: (state, action) => {
            state.roleLoading = true;
        },
    },
});

export const getMyDashboard = () => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/dashboard/getDashboardCards`
        );
        if (response.data.success) {
            dispatch(getDashboardSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getDashboardFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getDashboardFailure());
    }
};




export const getMyQuizCategory = () => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/dashboard/getCategoryCards`
        );
        if (response.data.success) {
            dispatch(getQuizDashboardSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getQuizDashboardFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getDashboardFailure());
    }
};



export const getMyQuizModule = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        // const response = await httpHandler.get(
        //     `/api/dashboard/getModuleCards/${id}`
        // );
        const response = await httpHandler.get(
            `/api/dashboard/getQuenameCards/${id}`
        );
        if (response.data.success) {
            dispatch(getQuizDashboardSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getQuizDashboardFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getDashboardFailure());
    }
};

export const { 
    getDashboardSuccess,
    getDashboardFailure, 
    getQuizDashboardSuccess,
    getQuizDashboardFailure, 
    setLoading } = dashboardSlice.actions;
export default dashboardSlice.reducer;

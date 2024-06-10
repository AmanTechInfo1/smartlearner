import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
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

export const { getDashboardSuccess, getDashboardFailure, setLoading } = dashboardSlice.actions;
export default dashboardSlice.reducer;

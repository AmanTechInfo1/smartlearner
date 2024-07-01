import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        Quizcards: [],
        cards: [],
        plan:[],
        roleLoading: false,
        currentplan:""
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
        getPlanSuccess: (state, action) => {
            state.plan = action.payload;
            state.roleLoading = false;
        },
        getPlanFailure: (state, action) => {
            state.plan = [];
            state.roleLoading = false;
        },
        getCurrentPlanSuccess: (state, action) => {
            state.currentplan = action.payload;
            state.roleLoading = false;
        },
        getCurrentPlanFailure: (state, action) => {
            state.currentplan = "";
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




export const getMySubscription = (cb) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/dashboard/getMySubsciption`
        );
        if (response.data.success) {

            let respData=response.data.data

            if(respData.isSubscription){
                
            }else{
                
                cb()
            }
            // dispatch(getDashboardSuccess(response.data.data));
        } else {
            cb()
            toast.error(response.data.message);
            // dispatch(getDashboardFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getDashboardFailure());
    }
};




export const checkOutMySubscription = (data,cb) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(
            `/api/dashboard/CheckoutMySubsciption`,data
        );
        if (response.data.success) {

            console.log(response.data,"response.data")
            let respData=response.data.data

            console.log(respData,"respDatarespDatarespData")

            if(response.data.success){
                toast.success(response.data.message);
                cb()
            }else{
                toast.error(response.data.message);
            }
            if(respData.isSubscription){

            }else{
                cb()
            }
            // dispatch(getDashboardSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            // dispatch(getDashboardFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getDashboardFailure());
    }
};


export const getMySubscriptionType = (setPlans,cb) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/dashboard/getMySubscriptionType`
        );
        if (response.data.success) {

            let respData=response.data.data
            console.log(respData,"respDatarespData")

            dispatch(getCurrentPlanSuccess(respData?.subscriptionType || ""))
            if(respData.isFreeTrialUsed){
                dispatch(getPlanSuccess(["Standard Subscription","Supported Subscription"]));
            }else{

                setPlans(prev=>{

                    prev[0].view = false
                    return prev
                })
                dispatch(getPlanSuccess(["Free Trial","Standard Subscription","Supported Subscription"]));
                cb()
            }
        } else {
            dispatch(getCurrentPlanFailure())
            toast.error(response.data.message);
            // dispatch(getDashboardFailure());
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
    getPlanSuccess,
    getPlanFailure, 
    getCurrentPlanSuccess,
    getCurrentPlanFailure, 
    getQuizDashboardSuccess,
    getQuizDashboardFailure, 
    setLoading } = dashboardSlice.actions;
export default dashboardSlice.reducer;

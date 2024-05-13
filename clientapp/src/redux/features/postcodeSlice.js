import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const postcodeSlice = createSlice({
    name: "postcode",
    initialState: {
        postcodes: [],
        postcodeCount: null,
        postcodeLoading: false,
    },
    reducers: {
        getAllPostcodesSuccess: (state, action) => {
            state.postcodes = action.payload.postcodes;
            state.postcodeCount = action.payload.totalCount;
            state.postcodeLoading = false;
        },
        getAllPostcodesFailure: (state) => {
            state.postcodes = [];
            state.postcodeCount = null;
            state.postcodeLoading = false;
        },
        createPostcodeSuccess: (state, action) => {
            state.postcodes.push(action.payload.postcode);
            state.postcodeCount = action.payload.totalCount;
            state.postcodeLoading = false;
        },
        createPostcodeFailure: (state, action) => {
            state.postcodeLoading = false;
        },
        updatePostcodeSuccess: (state, action) => {
            const updatedPostcodes = state.postcodes.map((postcode) =>
                postcode._id === action.payload.postcode._id ? action.payload.postcode : postcode
            );
            return {
                ...state,
                postcodes: updatedPostcodes,
                postcodeLoading: false,
            };
        },
        updatePostcodeFailure: (state, action) => {
            state.postcodeLoading = false;
        },
        deletePostcodeSuccess: (state, action) => {
            const postcodeId = action.payload;
            state.postcodes = state.postcodes.filter(postcode => postcode._id !== postcodeId);
            state.postcodeCount = state.postcodeCount - 1;
            state.postcodeLoading = false;
        },
        deletePostcodeFailure: (state, action) => {
            state.postcodeLoading = false;
        },
        setLoading: (state) => {
            state.postcodeLoading = true;
        },
    },
});

export const getAllPostcodes = (search, page, pagesize) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/product/get-postcodes?search=${search}&page=${page}&pagesize=${pagesize}`
        );
        if (response.data.success) {
            dispatch(getAllPostcodesSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getAllPostcodesFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getAllPostcodesFailure());
    }
};

export const createPostcode = (data, reset, toggleAddPostcodeModal) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/product/add-postcode`, data);
        if (response.data.success) {
            toast.success(response.data.message);
            reset();
            dispatch(createPostcodeSuccess(response.data.data));
            toggleAddPostcodeModal();
        } else {
            toast.error(response.data.message);
            dispatch(createPostcodeFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(createPostcodeFailure());
    }
}

export const updatePostcode = (postcodeID, data, reset, toggleEditPostcodeModal) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/product/update-postcode?id=${postcodeID}`, data);
        if (response.data.success) {
            toast.success(response.data.message);
            reset();
            toggleEditPostcodeModal();
            dispatch(updatePostcodeSuccess(response.data.data));
        }
        else {
            toast.error(response.data.message);
            dispatch(updatePostcodeFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(updatePostcodeFailure());
    }
}

export const deletePostcode = (postcodeID) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/product/delete-postcode?id=${postcodeID}`);
        if (response.data.success) {
            toast.success(response.data.message);
            dispatch(deletePostcodeSuccess(postcodeID));
        }
        else {
            toast.error(response.data.message);
            dispatch(deletePostcodeFailure());
        }
    }
    catch (error) {
        toast.error(error.message);
        dispatch(deletePostcodeFailure());
    }
}
export const { getAllPostcodesSuccess, getAllPostcodesFailure, createPostcodeSuccess, createPostcodeFailure, updatePostcodeSuccess,
    updatePostcodeFailure, deletePostcodeSuccess, deletePostcodeFailure, setLoading } =
    postcodeSlice.actions;

export default postcodeSlice.reducer;
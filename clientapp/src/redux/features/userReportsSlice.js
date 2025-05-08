import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const userReportSlice = createSlice({
  name: "userReport",
  initialState: {
    userReport: [],
    userReportCount: null,
    loading: false,
    userReport: null,
  },
  reducers: {
    getAlluserReportSuccess: (state, action) => {
      state.userReport = action.payload.userReport;
      state.userReportCount = action.payload.totalCount;
      state.loading = false;
    },
    getAlluserReportFailure: (state) => {
      state.userReport = [];
      state.userReportCount = null;
      state.loading = false;
    },
  },
});

export const getUserReports =
  (search, page, pagesize) => async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await httpHandler.get(
        `/api/product/all-postcodes?search=${search}&page=${page}&pagesize=${pagesize}`
      );
      if (response.data.success) {
        dispatch(getAlluserReportSuccess(response.data.data));
      } else {
        toast.error(response.data.message);
        dispatch(getAlluserReportFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(getAlluserReportFailure());
    }
  };

export const {
  getAlluserReportSuccess,
  getAlluserReportFailure,

  setLoading,
} = userReportSlice.actions;

export default userReportSlice.reducer;

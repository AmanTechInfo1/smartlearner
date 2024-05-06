import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../utils/httpHandler";
import toast from "react-hot-toast";

const initialState = {
  loading: false,
  error: null,
};

const drivenformSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(drivenFormData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(drivenFormData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(drivenFormData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const drivenFormData = createAsyncThunk(
  "locationForm/drivenFormData",
  async (requestData, { rejectWithValue }) => {
    try {
      const response = await http.get(
        `/api/callbackForm/callback`,
        requestData
      );
      const data = response.data;
      if (!resultData.success) {
        toast.error(resultData.msg || "Something went wrong");
      } else {
        toast.success(resultData.msg || "submitted Successfully");
        reset();
        return resultData;
      }
      return data;
    } catch (error) {
      toast.error("Failed to fetch data");
      return rejectWithValue(error.message);
    }
  }
);

export default drivenformSlice.reducer;

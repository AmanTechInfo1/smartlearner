import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../utils/httpHandler";
import toast from "react-hot-toast";

const initialState = {
  loading: false,
  error: null,
};

const servicesSlice = createSlice({
  name: "service",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(servicesData.pending, (state) => {
        state.loading = true;
      })
      .addCase(servicesData.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(servicesData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const servicesData = createAsyncThunk(
  "serviceForm/servicesData",
  async (requestData, { rejectWithValue }) => {
    try {
      const response = await http.get(`/api/serviceForm/service`, requestData);
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

// Add more async thunks and action creators as needed

export default servicesSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../utils/httpHandler";
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
        state.error = null;
      })
      .addCase(servicesData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(servicesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch data";
      });
  },
});

export const servicesData = createAsyncThunk(
  "serviceForm/servicesData",
  async ({ requestData, reset }, { rejectWithValue }) => {
    try {
      const response = await http.get(`/api/serviceForm/service`, requestData);
      const resultData = response.data;
      if (!resultData.success) {
        toast.error(resultData.msg || "Something went wrong");
      } else {
        toast.success(data.msg || "Submitted successfully");
        reset();
        return data;
      }
      return resultData;
    } catch (error) {
      toast.error("Failed to fetch data");
      return rejectWithValue(error.message);
    }
  }
);



// Add more async thunks and action creators as needed

export default servicesSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../utils/httpHandler";
import toast from "react-hot-toast";

const initialState = {
  loading: false,
  error: null,
};

const enquirySlice = createSlice({
  name: "Enquiry",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(enquiryData.pending, (state) => {
        state.loading = true;
      })
      .addCase(enquiryData.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(enquiryData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const enquiryData = createAsyncThunk(
  "enquiryForm/enquiryData",
  async ({requestData,reset},  { rejectWithValue }) => {
    try {
      const response = await http.post(`/api/enquiryForm/enquiry`, requestData);
      console.log(response.data,"response.data.success")
      const resultData = response.data;
      if (response.data.success) {
        toast.success(response.data.message || "submitted Successfully");
        reset();
      } else {
        toast.success(resultData.msg || "submitted Successfully");
        reset();
        return response.data;
      }

      return resultData;
    } catch (error) {
      toast.error("Failed to fetch data");
      return rejectWithValue(error.message);
    }
  }
);

// Add more async thunks and action creators as needed

export default enquirySlice.reducer;

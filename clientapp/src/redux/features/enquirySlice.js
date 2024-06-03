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
      const response = await http.get(`/api/enquiryForm/enquiry`, requestData);
      const data = response.data;
      if (!data.success) {
        toast.error(data.msg || "Something went wrong");
      } else {
        toast.success(data.msg || "submitted Successfully");
        reset();
        return data;
      }

      return data;
    } catch (error) {
      toast.error("Failed to fetch data");
      return rejectWithValue(error.message);
    }
  }
);

// Add more async thunks and action creators as needed

export default enquirySlice.reducer;

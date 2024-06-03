import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../utils/httpHandler";
import toast from "react-hot-toast";

const initialState = {
  loading: false,
  error: null,
};

const callBackSlice = createSlice({
  name: "callback",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(callBackData.pending, (state) => {
        state.loading = true;
      })
      .addCase(callBackData.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(callBackData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const callBackData = createAsyncThunk(
  "callbackForm/callBackData",
  async ({requestData,reset},{ rejectWithValue }) => {
    try {
      const response = await http.get(
        `/api/callbackForm/callback`,
        requestData
      );
      const data = response.data;
      if (!data.success) {
        toast.error(data.msg || "Something went wrong");
      } else {
        toast.success(data.msg || "submitted Successfully");
        reset();
        return data;
      }
      
    } catch (error) {
      toast.error("Failed to fetch data");
      return rejectWithValue(error.message);
    }
  }
);

// Add more async thunks and action creators as needed

export default callBackSlice.reducer;

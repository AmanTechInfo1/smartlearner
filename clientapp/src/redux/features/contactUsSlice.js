import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../utils/httpHandler";
import toast from "react-hot-toast";

const initialState = {
  loading: false,
  error: null,
};

const contactUsSlice = createSlice({
  name: "contact",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(contactUsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(contactUsData.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(contactUsData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const contactUsData = createAsyncThunk(
  "contactForm/contactUsData",
  async ({requestData,reset}, { rejectWithValue }) => {
    try {
      const response = await http.get(`/api/contactForm/contact`, requestData);
      const resultData = response.data;
      if (!resultData.success) {
        toast.error(resultData.msg || "Something went wrong");
      } else {
        toast.success(resultData.msg || "submitted Successfully");
        reset();
        return resultData;
      }

      return resultData;
    } catch (error) {
      toast.error("Failed to fetch data");
      return rejectWithValue(error.message);
    }
  }
);



export default contactUsSlice.reducer;

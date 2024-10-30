import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";

// Thunks
export const fetchPlans = createAsyncThunk(
  "subscription/fetchPlans",
  async () => {
    const response = await httpHandler.get("/api/subscription/plans"); // Update with your API endpoint
    return response.data;
  }
);

export const createUserSubscription = createAsyncThunk(
  "subscription/createUserSubscription",
  async (subscriptionData) => {
    const response = await httpHandler.post(
      "/api/subscription/create-usersubs",
      subscriptionData
    ); // Update with your API endpoint
    return response.data;
  }
);

export const createPayment = createAsyncThunk(
  "subscription/createPayment",
  async (subscriptionId) => {
    const response = await httpHandler.post(
      "/api/subscription/create-payment",
      { subscriptionId }
    ); // Update with your API endpoint
    return response.data; // Returning the entire response to get the order ID later
  }
);

export const confirmPayment = createAsyncThunk(
  "subscription/confirmPayment",
  async ({ orderId, userId, subscriptionId }) => {
    const response = await httpHandler.post(
      "/api/subscription/confirm-payment",
      { orderId, userId, subscriptionId }
    ); // Update with your API endpoint
    return response.data; // Return user subscription info or payment status
  }
);
export const checkTrialEligibility = createAsyncThunk(
  "subscription/checkTrialEligibility",
  async (userId) => {
    const response = await httpHandler.get(
      `/api/subscription/checkTrial/${userId}`
    );
    return response.data;
  }
);

// Slice
const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: {
    plans: [],
    userSubscription: null, // To store user subscription info
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlans.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPlans.fulfilled, (state, action) => {
        state.loading = false;
        state.plans = action.payload;
      })
      .addCase(fetchPlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createPayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.orderId = action.payload; // Store the order ID
      })
      .addCase(createPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(confirmPayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(confirmPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.userSubscription = action.payload; // Store user subscription info
      })
      .addCase(confirmPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export default subscriptionSlice.reducer;

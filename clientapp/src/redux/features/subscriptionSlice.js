import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast"; // Import toast

const API_URL = "http://localhost:5000/api/subscription"; // Adjust as needed

// Async Thunks for fetching data with toast notifications
export const fetchAllSubscriptionPlans = createAsyncThunk(
  "subscriptions/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/plans`);
      toast.success("Fetched all subscription plans successfully!"); // Success toast
      return response.data;
    } catch (error) {
      toast.error("Failed to fetch subscription plans."); // Error toast
      return rejectWithValue(error.response.data); // Reject with error
    }
  }
);

export const fetchFreeTrialPlans = createAsyncThunk(
  "subscriptions/fetchFreeTrials",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/subscribe`);
      toast.success("Fetched free trial plans successfully!"); // Success toast
      return response.data;
    } catch (error) {
      toast.error("Failed to fetch free trial plans."); // Error toast
      return rejectWithValue(error.response.data); // Reject with error
    }
  }
);

export const fetchUserSubscriptions = createAsyncThunk(
  "subscriptions/fetchUserSubscriptions",
  async (userId, dispatch, navigate, userSubscription, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}/subscriptions/user/${userId}`
      );
      toast.success("Fetched user subscriptions successfully!");

      return response.data;
    } catch (error) {
      toast.error("Failed to fetch user subscriptions."); // Error toast
      return rejectWithValue(error.response.data); // Reject with error
    }
  }
);

export const createUserSubscription = createAsyncThunk(
  "subscriptions/createUserSubscription",
  async (subscriptionData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/subscriptions/user`,
        subscriptionData
      );
      toast.success("User subscription created successfully!"); // Success toast
      return response.data;
    } catch (error) {
      toast.error("Failed to create user subscription."); // Error toast
      return rejectWithValue(error.response.data); // Reject with error
    }
  }
);

export const addSubscriptionPlan = createAsyncThunk(
  "subscriptions/addPlan",
  async (planData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/add-plan`, planData);
      toast.success("Subscription plan added successfully!"); // Success toast
      return response.data;
    } catch (error) {
      toast.error("Failed to add subscription plan."); // Error toast
      return rejectWithValue(error.response.data); // Reject with error
    }
  }
);

export const addFreeTrialPlan = createAsyncThunk(
  "subscriptions/addFreeTrial",
  async (trialData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/add-free-trial`, trialData);
      toast.success("Free trial plan added successfully!"); // Success toast
      return response.data;
    } catch (error) {
      toast.error("Failed to add free trial plan."); // Error toast
      return rejectWithValue(error.response.data); // Reject with error
    }
  }
);

// New thunk for starting a free trial subscription
export const startFreeTrial = createAsyncThunk(
  "subscriptions/startFreeTrial",
  async ({ userId, subscriptionId, trialDuration }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/subscribe`, {
        userId,

        subscriptionId,
      });
      toast.success("Free trial started successfully!"); // Success toast
      return response.data; // Assuming the response contains subscription data
    } catch (error) {
      toast.error("Failed to start free trial."); // Error toast
      return rejectWithValue(error.response.data); // Reject with error
    }
  }
);

// Create the subscription slice
const subscriptionSlice = createSlice({
  name: "subscriptions",
  initialState: {
    plans: [],
    freeTrials: [],
    userSubscriptions: [],
    status: "idle", // or 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSubscriptionPlans.fulfilled, (state, action) => {
        state.plans = action.payload;
      })
      .addCase(fetchFreeTrialPlans.fulfilled, (state, action) => {
        state.freeTrials = action.payload;
      })
      .addCase(fetchUserSubscriptions.fulfilled, (state, action) => {
        state.userSubscriptions = action.payload;
      })
      .addCase(createUserSubscription.fulfilled, (state, action) => {
        state.userSubscriptions.push(action.payload); // Add the new subscription
      })
      .addCase(addSubscriptionPlan.fulfilled, (state, action) => {
        state.plans.push(action.payload);
      })
      .addCase(addFreeTrialPlan.fulfilled, (state, action) => {
        state.freeTrials.push(action.payload);
      })
      .addCase(startFreeTrial.fulfilled, (state, action) => {
        state.userSubscriptions.push(action.payload); // Add the new subscription from free trial
      })
      .addCase(fetchAllSubscriptionPlans.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchFreeTrialPlans.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchUserSubscriptions.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(createUserSubscription.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addSubscriptionPlan.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addFreeTrialPlan.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(startFreeTrial.rejected, (state, action) => {
        state.error = action.error.message; // Handle error for free trial
      });
  },
});

// Export actions and reducer
export const {} = subscriptionSlice.actions;
export default subscriptionSlice.reducer;

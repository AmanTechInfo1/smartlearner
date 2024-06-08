import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../utils/httpHandler";
import toast from "react-hot-toast";
import { ROLES } from "../../constants";

const initialState = {
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(logoutUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ requestData, reset, navigate }, { rejectWithValue }) => {
    try {
      const response = await http.post(`/api/account/register`, requestData);
      const resultData = response.data;
      if (!resultData.success) {
        toast.error(resultData.msg || "Something went wrong");
      } else {
        toast.success(resultData.msg || "Registered Successfully");
        reset();
        navigate("/thanks");
        return resultData;
      }
    } catch (error) {
      toast.error(" went wrong");
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ loginData, navigate }, { rejectWithValue, dispatch }) => {
    try {
      const response = await http.post(`/api/account/login`, loginData);
      const data = response.data;
      if (data.success) {
       
        const user = data.data.user;
        localStorage.setItem("user", JSON.stringify(user));
        toast.success(data.message || "Logged IN Successfully");
        let expiration = user.expiresIn;
        dispatch(autologoutUser(expiration, navigate));
        if (user.role === ROLES.ADMIN) {
          navigate("/admin/dashboard");
        } else {
          toast.success("Ask Admin to assign you a role.");
        }
      } else {
        toast.error(data.message || "Something went wrong");
      }
      return data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem("user");
      return "LoggedOut Successfully";
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const autologoutUser = (expiration, navigate) => async (dispatch) => {
  try {
    setTimeout(() => {
      dispatch(logoutUser());
      navigate("/login");
    }, expiration);
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

export default authSlice.reducer;

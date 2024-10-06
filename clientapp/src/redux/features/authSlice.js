import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import http from "../../utils/httpHandler";
import toast from "react-hot-toast";
import { ROLES } from "../../constants";

const initialState = {
  loading: false,
  userDetails: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    UserDetails: (state, action) => {
      state.userDetails = action.payload;
      state.loading = false;
    },
  },
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
        toast.error(
          resultData.msg || "Something went wrong during registration."
        );
        return rejectWithValue(resultData.msg || "Registration failed");
      } else {
        toast.success(resultData.msg || "Registered Successfully");
        reset();
        navigate("/thanks");
        return resultData;
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
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
        dispatch(UserDetails(user));
        localStorage.setItem("user", JSON.stringify(user));
        toast.success(data.message || "Logged IN Successfully");

        const decodedToken = jwtDecode(user.token);
        const expirationTime = decodedToken.exp * 1000 - Date.now(); 
        console.log(`Expiration time: ${expirationTime} milliseconds`); // Calculate remaining expiration time
        if (expirationTime <= 0) {
          console.warn("Token has already expired, logging out immediately.");
          dispatch(logoutUser());
          navigate("/login");
        } else {
          dispatch(autoLogoutUser(expirationTime, navigate));
        }

        if (user.role === ROLES.ADMIN) {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      } else {
        toast.error(data.message || "Something went wrong");
      }
      return data;
    } catch (error) {
      if (error.response && error.response.status === 500) {
        toast.error("Username or password is incorrect");
      } else {
        toast.error(error.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      localStorage.removeItem("user");
      dispatch(UserDetails({}));
      toast.success("Logged Out Successfully");
      return "LoggedOut Successfully";
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const autoLogoutUser = (expiresIn, navigate) => async (dispatch) => {
  try {
    console.log(`Setting auto logout for ${expiresIn} milliseconds`);
    setTimeout(() => {
      console.log("User is being logged out due to token expiration");
      dispatch(logoutUser());
      navigate("/login");
    }, expiresIn);
  } catch (error) {
    console.error("Error occurred:", error);
  }
};


export const { UserDetails } = authSlice.actions;

export default authSlice.reducer;

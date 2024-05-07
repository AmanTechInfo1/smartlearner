import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../utils/httpHandler";
import { toast } from "react-hot-toast";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    usersCount: null,
    loading: false,
  },
  reducers: {
    createUserSuccess: (state, action) => {
      state.users.push(action.payload.user);
      state.usersCount = action.payload.totalCount;
      state.loading = false;
    },
    createUserFailure: (state, action) => {
      state.loading = false;
    },
    getAllUsersSuccess: (state, action) => {
      state.users = action.payload.users;
      state.usersCount = action.payload.totalCount;
      state.loading = false;
    },
    getAllUsersFailure: (state) => {
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const getAllUsers = (search, page, pagesize) => async (dispatch) => {
  try {
    const response = await httpHandler.get(
      `/api/account/users?search=${search}&page=${page}&pagesize=${pagesize}`
    );
    if (response.data.success) {
      dispatch(getAllUsersSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getAllUsersFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getAllUsersFailure());
  }
};

export const createUser = (data, reset, toggleAddUserModal) => async (dispatch) => {
  try {
    const response = await httpHandler.post(`/api/account/register`, data);
    if (response.data.success) {
      toast.success(response.data.message);
      reset();
      toggleAddUserModal();
      dispatch(createUserSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(createUserFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(createUserFailure());
  }
};

export const { getAllUsersSuccess, getAllUsersFailure, createUserSuccess, createUserFailure, setLoading } =
  userSlice.actions;
export default userSlice.reducer;

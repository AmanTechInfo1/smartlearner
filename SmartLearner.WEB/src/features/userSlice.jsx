import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../utils/httpHandler";
import { toast } from "react-hot-toast";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    usersCount: 12,
    loading: false,
  },
  reducers: {
    getAllUsersSuccess: (state, action) => {
      state.users = action.payload.data.users;
      state.usersCount = action.payload.data.totalCount;
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
    debugger;
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

export const { getAllUsersSuccess, getAllUsersFailure, setLoading } =
  userSlice.actions;
export default userSlice.reducer;

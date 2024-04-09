import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    usersCount: 12,
    loading: false,
  },
});

export default userSlice.reducer;

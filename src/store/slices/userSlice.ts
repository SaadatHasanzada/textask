import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers } from "../actions/user";
import { User } from "../../types/User";
interface UsersState {
  users: User[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  users: [],
  loading: "idle",
} as UsersState;

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = "succeeded";
      })
      .addCase(fetchAllUsers.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default usersSlice.reducer;

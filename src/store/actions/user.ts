import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types/User";

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async (val: boolean) => {
    const response = await axios.get<User[]>("data/initData.json");
    return val ? response.data : response.data?.slice(0, 3);
  }
);

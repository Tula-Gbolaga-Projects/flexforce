import axios from "axios";
import { redirectFunc } from "../../utils/redirect";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  STATUS,
  tokenKey,
  userIdKey,
  roleKey,
  loginKey,
} from "../../utils/constants";

export const userLogin = createAsyncThunk(
  "userlogin",
  async ({ userName, password }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}Authentications/login`,
        { userName, password }
      );

      const token = response.data.token;
      const userId = response.data.userId;
      const role = response.data.roleName;

      localStorage.setItem(tokenKey, token);
      localStorage.setItem(userIdKey, userId);
      localStorage.setItem(roleKey, role);
      localStorage.setItem(loginKey, new Date().getTime());

      const profileInfo = { ...response.data };

      return fulfillWithValue(profileInfo);
    } catch (err) {
      const error = { ...err };
      let message = "Unable to complete request";

      return rejectWithValue(error.response.data || message);
    }
  }
);
const initialState = {
  loginError: "",
  loginStatus: STATUS.IDLE,
  loginData: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loginError = "";
        state.loginStatus = STATUS.PENDING;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loginError = "";
        state.loginStatus = STATUS.RESOLVED;
        state.loginData = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loginError = action.payload;
        state.loginStatus = STATUS.REJECTED;
      });
  },
});
export const { logout } = userSlice.actions;

export const userReducer = userSlice.reducer;

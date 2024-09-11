import axios from "axios";
import { redirectFunc } from "../../utils/redirect";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  STATUS,
  tokenKey,
  userIdKey,
  roleKey,
  loginKey,
  REACT_APP_BASE_URL,
} from "../../utils/constants";

export const userLogin = createAsyncThunk(
  "userlogin",
  async ({ userName, password }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${REACT_APP_BASE_URL}Authentications/login`,
        { userName, password }
      );

      const token = response.data.data.token;
      const userId = response.data.data.userId;
      const role = response.data.data.roleName;

      console.log(token);

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

export const jobSeekerCreation = createAsyncThunk(
  "jobseekercreation",
  async (body, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${REACT_APP_BASE_URL}JobSeekers/create`,
        { ...body }
      );

      const data = { ...response.data };

      return fulfillWithValue(data);
    } catch (err) {
      const error = { ...err };
      let message = "Unable to complete request";

      return rejectWithValue(error.response.data || message);
    }
  }
);

export const adminGetAgencies = createAsyncThunk(
  "adminGetAgencies",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    const token = localStorage.getItem(tokenKey);
    try {
      const response = await axios.get(
        `${REACT_APP_BASE_URL}administrators/agencies/list-all`,
        { headers: { Authorization: "Bearer " + token } }
      );

      const data = { ...response.data };

      return fulfillWithValue(data);
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
  jobSeekerCreationError: "",
  jobSeekerCreationStatus: STATUS.IDLE,
  jobSeekerCreationData: {},
  adminGetAgenciesError: "",
  adminGetAgenciesStatus: STATUS.IDLE,
  adminGetAgenciesData: {},
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
      })
      .addCase(jobSeekerCreation.pending, (state) => {
        state.jobSeekerCreationError = "";
        state.jobSeekerCreationStatus = STATUS.PENDING;
      })
      .addCase(jobSeekerCreation.fulfilled, (state, action) => {
        state.jobSeekerCreationError = "";
        state.jobSeekerCreationStatus = STATUS.RESOLVED;
        state.jobSeekerCreationData = action.payload;
      })
      .addCase(jobSeekerCreation.rejected, (state, action) => {
        state.jobSeekerCreationError = action.payload;
        state.jobSeekerCreationStatus = STATUS.REJECTED;
      })
      .addCase(adminGetAgencies.pending, (state) => {
        state.adminGetAgenciesError = "";
        state.adminGetAgenciesStatus = STATUS.PENDING;
      })
      .addCase(adminGetAgencies.fulfilled, (state, action) => {
        state.adminGetAgenciesError = "";
        state.adminGetAgenciesStatus = STATUS.RESOLVED;
        state.adminGetAgenciesData = action.payload;
      })
      .addCase(adminGetAgencies.rejected, (state, action) => {
        state.adminGetAgenciesError = action.payload;
        state.adminGetAgenciesStatus = STATUS.REJECTED;
      });
  },
});
export const { logout } = userSlice.actions;

export const userReducer = userSlice.reducer;

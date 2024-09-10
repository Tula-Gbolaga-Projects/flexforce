import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./slices";

const rootReducer = combineReducers({
  user: userReducer,
});

const appReducer = (rootState, action) => {
  if (action.type === "user/logout") {
    return rootReducer(undefined, action);
  }
  return rootReducer(rootState, action);
};

export const store = configureStore({
  reducer: appReducer,
});

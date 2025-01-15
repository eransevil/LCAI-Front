// client/src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import filesReducer from "./filesSlice";
import emailReducer from "./emailSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    files: filesReducer,
    email: emailReducer,
  },
});

export default store;

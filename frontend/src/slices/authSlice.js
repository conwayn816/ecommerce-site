import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  csrfToken: null, // Initialize csrfToken
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(state, action) {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout(state) {
      state.userInfo = null;
      state.csrfToken = null; // Clear csrfToken on logout
      localStorage.clear();
    },
    setCsrfToken(state, action) {
      state.csrfToken = action.payload; // Set csrfToken from action payload
    }
  },
});

export const { setCredentials, logout, setCsrfToken } = authSlice.actions;

export default authSlice.reducer;

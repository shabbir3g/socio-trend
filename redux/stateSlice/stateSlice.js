import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    user: {},
    isLoading: false,
    registerError: "",
    googleLoginError: "",
    emailPassLoginError: "",
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setRegisterError: (state, { payload }) => {
      state.registerError = payload;
    },
    setGoogleLoginError: (state, { payload }) => {
      state.googleLoginError = payload;
    },
    setEmailPassLoginError: (state, { payload }) => {
      state.emailPassLoginError = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUser,
  setIsLoading,
  setRegisterError,
  setGoogleLoginError,
  setEmailPassLoginError,
} = counterSlice.actions;

export default counterSlice.reducer;

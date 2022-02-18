import { configureStore } from "@reduxjs/toolkit";
import stateContainer from "./stateSlice/stateSlice";

export const store = configureStore({
  reducer: {
    states: stateContainer,
  },
});

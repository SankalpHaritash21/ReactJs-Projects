import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Projects/Redux-Counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;

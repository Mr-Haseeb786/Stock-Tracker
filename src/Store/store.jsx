import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "../slices/stockSlice/stockSlice";

export const store = configureStore({
  reducer: {
    stock: stockReducer,
  },
});

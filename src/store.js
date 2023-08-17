import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "./amountSlice";
import nameReducer from "./nameSlice";
export const store = configureStore({
  reducer: { amountReducer: amountReducer, nameReducer: nameReducer },
});

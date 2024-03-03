import { combineReducers } from "@reduxjs/toolkit";
import invoiceReducer from "./slices/invoiceSlice";

const rootReducer = combineReducers({
  invoice: invoiceReducer,
});

export default rootReducer;

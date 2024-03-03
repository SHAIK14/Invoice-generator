import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoiceData: null,
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    setInvoiceData: (state, action) => {
      console.log("Action Payload:", action.payload);
      return {
        ...state,
        invoiceData: action.payload,
      };
    },
  },
});

export const { setInvoiceData } = invoiceSlice.actions;

export default invoiceSlice.reducer;

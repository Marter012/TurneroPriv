import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  customerSelected: "",
};

export const CustomersSlice = createSlice({
  name: "customers",
  initialState: INITIAL_STATE,
  reducers: {
    selectCustomer: (state, actions) => {
      return { ...state, customerSelected: actions.payload };
    },
  },
});

export const { selectCustomer } = CustomersSlice.actions;

export default CustomersSlice.reducer;

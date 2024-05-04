import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  Shifts: [],
};

export const ShiftsSlice = createSlice({
  name: "Shifts",
  initialState: INITIAL_STATE,
  reducers: {
    addShifts: (state, actions) => {
      return { ...state, Shifts: actions.payload };
    },
  },
});

export const { addShifts} = ShiftsSlice.actions;

export default ShiftsSlice.reducer;

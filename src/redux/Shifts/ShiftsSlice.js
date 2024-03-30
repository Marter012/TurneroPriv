import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  Shifts: [],
};

export const ShiftsSlice = createSlice({
  name: "Shifts",
  initialState: INITIAL_STATE,
  reducers: {
    getShifts: (state) => {
      return state;
    },
  },
});

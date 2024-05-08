import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  listShifts: "",
  listShiftsDay :"",
};

export const ShiftsSlice = createSlice({
  name: "Shifts",
  initialState: INITIAL_STATE,
  reducers: {
    addShifts: (state, actions) => {
      return { ...state, listShifts: actions.payload };
    },
    addShiftsDay: (state, actions) => {
      return { ...state, listShiftsDay: actions.payload };
    },
  },
});

export const { addShifts,addShiftsDay} = ShiftsSlice.actions;

export default ShiftsSlice.reducer;

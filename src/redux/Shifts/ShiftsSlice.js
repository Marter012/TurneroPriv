import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  activator: false,
  listShifts: "",
  listShiftsDay: "",
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
    activeGet: (state) => {
      return {
        ...state,
        activator: !state.activator,
      };
    },
  },
});

export const { addShifts, addShiftsDay, activeGet } = ShiftsSlice.actions;

export default ShiftsSlice.reducer;

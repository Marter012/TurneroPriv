import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  hidden: false,
  selected: 1,
  shiftSelected: "",
};

export const SelectedShifts = createSlice({
  name: "selectedShifts",
  initialState: INITIAL_STATE,
  reducers: {
    selectedNavShifts: (state, actions) => {
      return {
        ...state,
        selected: actions.payload,
      };
    },
    toggleNavShifts: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },

    toggleShifts: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },
    selectedShift: (state, actions) => {
      return {
        ...state,
        shiftSelected: actions.payload,
      };
    },
  },
});

export const { toggleNavShifts, selectedNavShifts, toggleShifts,selectedShift } =
  SelectedShifts.actions;

export default SelectedShifts.reducer;

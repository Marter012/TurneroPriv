import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  hidden: false,
  selected: 2,
};

export const NavShiftsSlicer = createSlice({
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
  },
});

export const { toggleNavShifts , selectedNavShifts} = NavShiftsSlicer.actions;

export default NavShiftsSlicer.reducer;

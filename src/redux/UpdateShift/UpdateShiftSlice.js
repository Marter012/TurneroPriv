import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  activator: false,
  shiftSelected: "",
};

export const UpdateShiftSlice = createSlice({
  name: "UpdateShift",
  initialState: INITIAL_STATE,
  reducers: {
    toggleShiftsUpdate: (state) => {
      return {
        ...state,
        activator: !state.activator,
      };
    },
    selectedShiftUpdate: (state, actions) => {
      return {
        ...state,
        shiftSelected: actions.payload,
      };
    },
  },
});

export const { toggleShiftsUpdate, selectedShiftUpdate } =
  UpdateShiftSlice.actions;

export default UpdateShiftSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  day: "",
};

export const SelectedDaySlice = createSlice({
  name: "selectedDay",
  initialState: INITIAL_STATE,
  reducers: {
    SelectDay: (state, actions) => {
      return { ...state, day: actions.payload };
    },
  },
});

export const {SelectDay} = SelectedDaySlice.actions

export default SelectedDaySlice.reducer
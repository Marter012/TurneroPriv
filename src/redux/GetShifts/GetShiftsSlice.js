import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  hidden: false,
};

const GetShiftsSlices = createSlice({
  name: "activeGet",
  initialState: INITIAL_STATE,
  reducers: {
    activeGet: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },
  },
});

export const {activeGet} = GetShiftsSlices.actions;

export default GetShiftsSlices.reducer;

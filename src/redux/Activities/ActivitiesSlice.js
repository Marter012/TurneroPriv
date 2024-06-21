import { createSlice } from "@reduxjs/toolkit";

const INITIALSTATE = {
  listActivities: [],
  stateCard: false,
  stateCardUpdate: false,
  activitySelected: "",
  activeUse: false,
};

export const ActivitiesSlice = createSlice({
  name: "activities",
  initialState: INITIALSTATE,
  reducers: {
    updateActivities: (state, actions) => {
      return { ...state, listActivities: actions.payload };
    },
    toggleCardActivities: (state) => {
      return { ...state, stateCard: !state.stateCard };
    },
    toggleCardUpdateActivities: (state) => {
      return { ...state, stateCardUpdate: !state.stateCardUpdate };
    },
    selectActivity: (state, actions) => {
      return { ...state, activitySelected: actions.payload };
    },
    activatorUse: (state) => {
      return { ...state, activeUse: !state.activeUse };
    },
  },
});

export const {
  updateActivities,
  toggleCardActivities,
  toggleCardUpdateActivities,
  selectActivity,
  activatorUse,
} = ActivitiesSlice.actions;

export default ActivitiesSlice.reducer;

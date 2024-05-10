import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    hidden : false
}

export const CalendarMenuSlice = createSlice({
    name : "CalendarMenu",
    initialState : INITIAL_STATE,
    reducers : {
        toggleHiddenCalendar : state => {
            return {
                ...state,
                hidden : !state.hidden
            }
        }
    }
})

export const {toggleHiddenCalendar} = CalendarMenuSlice.actions;

export default CalendarMenuSlice.reducer;
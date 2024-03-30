import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    hidden : false
}

export const BargerMenuSlice = createSlice({
    name : "BurgerMenu",
    initialState: INITIAL_STATE,
    reducers : {
        toggleHiddenMenu : state => {
            return {
                ...state,
                hidden : !state.hidden
            }
        }
    }
})


export const { toggleHiddenMenu } = BargerMenuSlice.actions;

export default BargerMenuSlice.reducer;

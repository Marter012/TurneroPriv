import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    selectedItem : ""
}

export const HeaderItemsSlice = createSlice({
    name : "selectedItem",
    initialState : INITIAL_STATE,
    reducers : {
        selectItem : (state,actions) => {
            return {
                ...state, 
                selectedItem : actions.payload
            }
        }
    }
})

export const {selectItem} = HeaderItemsSlice.actions

export default HeaderItemsSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const dropdownSlice = createSlice({
    name: 'dropdown',
    initialState: {
        dropDownId: null,
        setDropDown: false,
    },
    reducers: {
        updateDropDown: (state, action) => {
            state.dropDownId = action.payload,
            state.setDropDown = !state.setDropDown
        },
        updatePrevDropDown: (state) => {
            state.dropDownId = null,
            state.setDropDown = false
        }
    }
})

export const { updateDropDown, updatePrevDropDown } = dropdownSlice.actions
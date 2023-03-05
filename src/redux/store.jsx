import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { dropdownSlice } from "./reducers/dropdownReducer";
import { usersSlice } from "./reducers/userReducer";

const rootReducer = combineReducers({
    users: usersSlice.reducer,
    dropdown: dropdownSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})
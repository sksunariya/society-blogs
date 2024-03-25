import {combineReducers} from "@reduxjs/toolkit";

import authSlice from "../slices/authSlice"
import profileSlice from "../slices/profileSlice";

import blogSlice from "../slices/blogSlice";


const rootReducer  = combineReducers({
    auth: authSlice,
    profile:profileSlice,
    blog: blogSlice,
})

export default rootReducer
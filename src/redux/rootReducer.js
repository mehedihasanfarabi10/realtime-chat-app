import { combineReducers } from "@reduxjs/toolkit";
import { appReducer } from "./slices/app";


const rootReducer = combineReducers({
        app: appReducer
})

export {
    rootReducer,
}
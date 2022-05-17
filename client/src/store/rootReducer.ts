import { combineReducers } from "@reduxjs/toolkit";

import { reducer as error } from "./error/error";

import { reducer as cranes } from "./crane/cranes";

export const rootReducer = combineReducers({
    error,
    cranes
});

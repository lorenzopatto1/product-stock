import { combineReducers } from "redux"
import { stockReducer } from "./productStock/reducer"

export const rootReducer = combineReducers({stockReducer});
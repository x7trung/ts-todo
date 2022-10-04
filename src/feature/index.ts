/* eslint-disable */
import { combineReducers } from "redux";

import {todoReducers} from "./reducer";

const allReducer = combineReducers({
  todoStore: todoReducers,
});

export type RootState = ReturnType<typeof allReducer>
export default allReducer;
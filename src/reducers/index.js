import { combineReducers } from "redux";
import taskReducer from "./task"
import uiReducer from "./ui";
const rootReducers = combineReducers({
  tasks: taskReducer,
  uiReducer
})
export default rootReducers
import { combineReducers } from "redux";
import taskReducer from "./task"
const rootReducers = combineReducers({
  tasks: taskReducer
})
export default rootReducers
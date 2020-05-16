import {  takeLatest } from "redux-saga/effects"
import * as taskConst from "./../const/task"
import * as taskSagas from "./taskSagas"

function* rootSaga() {
  // yield fork(watchFetchListTaskAction)
  yield takeLatest(taskConst.FETCH_TASK, taskSagas.watchFetchListTaskAction)
  yield takeLatest(taskConst.FILTER_TASK, taskSagas.watchFilterTaskAction)
  yield takeLatest(taskConst.ADD_TASK, taskSagas.addTaskRequest)
  yield takeLatest(taskConst.DELETE_TASK, taskSagas.deleteTaskRequest)
  yield takeLatest(taskConst.UPDATE_TASK, taskSagas.onUpdateTask)
}
export default rootSaga;

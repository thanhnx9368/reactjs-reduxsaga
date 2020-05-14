import { fork, call, take, put, delay, takeLatest, select, takeEvery  } from "redux-saga/effects"
import * as taskAction from "./../actions/tasks"
import { showLoading, hideLoading } from "../actions/ui";
import * as taskConst from "./../const/task"
import * as taskApis from "./../apis/task"
import {STATUS_CODE} from "./../const/StatusCode"
import {hideModal} from "../actions/modal";

function* rootSaga() {
  // yield fork(watchFetchListTaskAction)
  yield takeLatest(taskConst.FETCH_TASK, watchFetchListTaskAction)
  yield takeLatest(taskConst.FILTER_TASK, watchFilterTaskAction)
  yield takeLatest(taskConst.ADD_TASK, addTaskRequest)
}
export default rootSaga;

function* addTaskRequest({payload}) {
  yield put(showLoading())
  const res = yield call(taskApis.addTask, payload)
  const { data, status } = res
    if ( status === STATUS_CODE.CREATED ) {
      yield put(taskAction.addTaskSuccess(data))
    }
    yield delay(500)
    yield put(hideModal())
    yield put(hideLoading())
}

function* watchFilterTaskAction({keyword}) {
  yield delay(500)
  const list = yield select(state => state.tasks.listTask)
  const taskFiltered = list.filter((task) => task.title
    .toLowerCase()
    .includes(keyword.toLowerCase()))
  yield put(taskAction.filterTaskSuccess(taskFiltered))
}

function* watchFetchListTaskAction() {
  yield put(showLoading())
  yield delay(2000)
  const res = yield call(taskApis.getList)
  let { status, data } = res
  if ( status === STATUS_CODE.SUCCESS ) {
    yield put(taskAction.fetchListTaskSuccess(data))
  } else {
    yield put(taskAction.fetchListTaskFailed(data))
  }
  yield put(hideLoading())
}


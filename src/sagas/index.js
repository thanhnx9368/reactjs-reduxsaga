import { fork, call, take, put, delay, takeLatest, select  } from "redux-saga/effects"
import * as taskAction from "./../actions/tasks"
import { showLoading, hideLoading } from "../actions/ui";
import * as taskConst from "./../const/task"
import * as taskApis from "./../apis/task"
import {STATUS_CODE} from "./../const/StatusCode"

function* rootSaga() {
  // yield fork(watchFetchListTaskAction)
  yield takeLatest(taskConst.FETCH_TASK, watchFetchListTaskAction)
  yield takeLatest(taskConst.FILTER_TASK, watchFilterTaskAction)
}
export default rootSaga;

function* watchFilterTaskAction({keyword}) {
  yield delay(500)
  const list = yield select(state => state.tasks.listTask)
  const taskFiltered = list.filter((task) => task.title
    .toLowerCase()
    .includes(keyword.toLowerCase()))
  yield put(taskAction.filterTaskSuccess(taskFiltered))
}

function* watchFetchListTaskAction() {
  yield delay(2000)
  yield put(showLoading())
  const res = yield call(taskApis.getList)
  let { status, data } = res
  if ( status === STATUS_CODE.SUCCESS ) {
    yield put(taskAction.fetchListTaskSuccess(data))
  } else {
    yield put(taskAction.fetchListTaskFailed(data))
  }
  yield delay(2000)
  yield put(hideLoading())
}

/*function* watchFetchListTaskAction() {
  yield take(taskConst.FETCH_TASK)
  yield put(showLoading())
  const res = yield call(taskApis.getList)
  let { status, data } = res
  if ( status === STATUS_CODE.SUCCESS ) {
    yield put(taskAction.fetchListTaskSuccess(data))
  } else {
    yield put(taskAction.fetchListTaskFailed(data))
  }
  yield delay(2000)
  yield put(hideLoading())
}*/

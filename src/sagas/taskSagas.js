import {call, delay, put, select} from "redux-saga/effects";
import {hideLoading, showLoading} from "../actions/ui";
import * as taskApis from "../apis/task";
import {STATUS_CODE} from "../const/StatusCode";
import * as taskAction from "../actions/tasks";
import {hideModal} from "../actions/modal";
import { findIndex } from "../common/helpers";

export function* addTaskRequest({payload}) {
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

export function* watchFilterTaskAction({keyword}) {
  yield delay(500)
  yield put(showLoading())
  const params = {
    q: keyword
  }
  const res = yield call(taskApis.filterTask, params)
  const { data } = res
  yield put(taskAction.filterTaskSuccess(data))
  yield put(hideLoading())
}

export function* watchFetchListTaskAction() {
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

export function* deleteTaskRequest({payload}) {
  const { id } = payload
  yield put(showLoading())
  const res = yield call(taskApis.deleteTask, id)
  const { status } = res
  if ( status == STATUS_CODE.SUCCESS ) {
    const listTask = yield select(state => state.tasks.listTask)
    const index = findIndex(id, listTask);
    listTask.splice(index, 1)
    yield put(taskAction.deleteTaskSuccess(listTask))
  }
  delay(500)
  yield put(hideLoading())
}

export function* onEditTask({task}) {

}
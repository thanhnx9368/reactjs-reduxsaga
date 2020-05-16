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
  const res = yield call(taskApis.deleteTask, id)
  yield put(showLoading())
  const { status } = res
  if ( status == STATUS_CODE.SUCCESS ) {
    const listTask = yield select(state => state.tasks.listTask)
    // const index = findIndex(id, listTask);
    const newList = listTask.filter(item => item.id !== id)
    yield put(taskAction.deleteTaskSuccess(newList))
  }
  delay(1000)
  yield put(hideLoading())
}

export function* onUpdateTask({payload}) {
  const { task } = payload
  yield put(showLoading())
  const res = yield call(taskApis.updateTask, task)
  const { status, data } = res
  if ( status === STATUS_CODE.SUCCESS ) {
    const listTask = yield select(state => state.tasks.listTask )
    const index = findIndex(data.id, listTask)
    const newList = [
      ...listTask.slice(0, index),
      task,
      ...listTask.slice(index + 1)
    ]
    yield put(taskAction.updateTaskSuccess(newList))
  }
  delay(500)
  yield put(hideModal())
  yield put(hideLoading())
}
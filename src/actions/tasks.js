import * as taskApis from "./../apis/task"
import * as taskConstants from "./../const/task"

export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK
  }
}

export const fetchListTaskSuccess = data => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data
    }
  }
}

export const fetchListTaskFailed = err => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      err
    }
  }
}

export const filterTask = keyword => ({
  type: taskConstants.FILTER_TASK,
  keyword
})

export const filterTaskSuccess = data => ({
  type: taskConstants.FILTER_TASK_SUCCESS,
  payload: {
    data
  }
})

export const addTask = data => ({
  type: taskConstants.ADD_TASK,
  payload: {
    title: data.title,
    description: data.description,
    status: data.status
  }
})

export const addTaskSuccess = data => ({
  type: taskConstants.ADD_TASK_SUCCESS,
  payload: {
    data
  }
})


export const deleteTask = id => ({
  type: taskConstants.DELETE_TASK,
  payload: {
    id
  }
})

export const deleteTaskSuccess = data => ({
  type: taskConstants.DELETE_TASK_SUCCESS,
  payload: {
    data
  }
})

export const editTask = task => ({
  type: taskConstants.EDIT_TASK,
  payload: {
    task
  }
})

export const editTaskSuccess = data => ({
  type: taskConstants.EDIT_TASK_SUCCESS,
  payload: {
    data
  }
})


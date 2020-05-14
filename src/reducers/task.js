import * as taskConstants from "./../const/task"

const initialState = {
  listTask: [],
  taskEditting: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (taskConstants.FETCH_TASK) : {
      return {...state, listTask: []}
    }
    case (taskConstants.FETCH_TASK_SUCCESS) : {
      const { data } = action.payload
      return {...state, listTask: data};
    }
    case ( taskConstants.FILTER_TASK_SUCCESS ) : {
      const { data } = action.payload
      return {...state, listTask: data};
    }

    case (taskConstants.ADD_TASK) : {
      return {...state}
    }

    case (taskConstants.ADD_TASK_SUCCESS) : {
      const { data } = action.payload
      return {
        ...state,
        listTask: [data].concat(state.listTask)
      }
    }

    case (taskConstants.DELETE_TASK) : {
      return {
        ...state,
      }
    }

    case (taskConstants.DELETE_TASK_SUCCESS) : {
      const { data } = action.payload
      console.log(data, 'datadatadata');
      return {
        ...state,
        listTask: data
      }
    }

    case (taskConstants.EDIT_TASK) : {
      const { task } = action.payload
      return {
        ...state,
        taskEditting: task
      }
    }
    default:
      return state
  }
}
export default reducer

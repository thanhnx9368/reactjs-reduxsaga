import * as taskConstants from "./../const/task"

const initialState = {
  listTask: []
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
      console.log(data, 'data');
      return {...state, listTask: data};
    }

    case (taskConstants.ADD_TASK) : {
      return {...state}
    }

    case (taskConstants.ADD_TASK_SUCCESS) : {
      const { data } = action.payload
      console.log(data, 'data 123');
      return {
        ...state,
        listTask: [data].concat(state.listTask)
      }
    }

    case (taskConstants.ADD_TASK_FAILED) : {
      return {
        ...state
      }
    }

    default:
      return state
  }
}
export default reducer

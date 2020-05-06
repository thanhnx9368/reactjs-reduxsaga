import * as taskConstants from "./../const/task"

const initialState = {
  listTask: []
};
const reducer = (state = initialState, action) => {

  switch (action.type) {
    case (taskConstants.FETCH_TASK) :
      return {...state, listTask: []}
    case (taskConstants.FETCH_TASK_SUCCESS) :
      let { data } = action.payload
      return {...state, listTask: data}
    default:
      return state
  }
}
export default reducer

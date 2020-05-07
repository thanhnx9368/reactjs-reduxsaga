import * as uiConst from "./../const/ui"
let initatialState = {
  isLoading: false
}
const uiReducer = (state = initatialState, action) => {
  switch (action.type) {
    case (uiConst.SHOW_LOADING) :
      console.log('ahihi')
      state = {...state, isLoading: true}
      return {...state}
    case (uiConst.HIDE_LOADING) :
      state = {...state, isLoading: false}
      return {...state}
    default:
      return state
  }
}
export default uiReducer
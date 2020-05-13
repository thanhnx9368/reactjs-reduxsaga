import * as modalConst from "../const/modal"

const initialState = {
  title: '',
  component: null,
  isShowModal: false
}
const modalReducers = (state = initialState, action) => {
  switch (action.type) {
    case modalConst.SHOW_MODAL: {
      console.log('ahihi')
      return {...state, isShowModal: true}
    }
    case modalConst.HIDE_MODAL: {
      return {...state, isShowModal: false}
    }
    case modalConst.CHANGE_MODAL_TITLE: {
      let { title } = action.payload
      return {...state, title: title}
    }
    case modalConst.CHANGE_MODAL_CONTENT: {
      let { component } = action.payload
      return {...state, component: component}
    }
    // eslint-disable-next-line no-fallthrough
    default: {
      return {...state}
    }
  }
}
export default modalReducers

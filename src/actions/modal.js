import * as modalConst from "../const/modal"

export const showModal = () => ({
  type: modalConst.SHOW_MODAL
})

export const hideModal = () => ({
  type: modalConst.HIDE_MODAL
})

export const changeModalTitle = title => ({
  type: modalConst.CHANGE_MODAL_TITLE,
  payload: {
    title
  }
})

export const changeModalContent = component => ({
  type: modalConst.CHANGE_MODAL_CONTENT,
  payload: {
    component
  }
})
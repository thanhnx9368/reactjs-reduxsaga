import React, {Component} from 'react';
import Styles from "./styles";
import { withStyles } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from "react-redux"
import { compose, bindActionCreators } from "redux";
import * as modalActions from "../../actions/modal"
import PropTypes from "prop-types"

class TaskForm extends Component {
  render() {
    const { isShowModal, modalActionCreator, component, title } = this.props
    const { hideModal } = modalActionCreator
    return (
      <div>
        <Dialog open={isShowModal} onClose={hideModal} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          {component}
        </Dialog>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  title: state.modal.title,
  isShowModal: state.modal.isShowModal,
  component: state.modal.component
})
const mapDispatchToProps = dispatch => ({
  modalActionCreator: bindActionCreators(modalActions, dispatch)
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)
TaskForm.propTypes = {
  modalActionCreator: PropTypes.shape({
    hideModal: PropTypes.func
  }),
  title: PropTypes.string,
  isShowModal: PropTypes.bool,
  component: PropTypes.object
}
export default compose(
  withStyles(Styles),
  withConnect
)(TaskForm);